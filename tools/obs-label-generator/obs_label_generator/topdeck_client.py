import requests

API_BASE = "https://topdeck.gg/api/v2"


class TopdeckApiError(Exception):
    pass


class NoOngoingTournamentError(Exception):
    pass


class AmbiguousTournamentError(Exception):
    def __init__(self, matches):
        self.matches = matches
        super().__init__(
            "Multiple ongoing tournaments found: "
            + ", ".join(f"{t['name']} ({t['tid']})" for t in matches)
        )


class TopdeckClient:
    def __init__(self, api_key, base_url=API_BASE):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": api_key,
            "Content-Type": "application/json",
        })

    def _get(self, path):
        try:
            response = self.session.get(f"{self.base_url}{path}")
            response.raise_for_status()
            return response.json()
        except (requests.exceptions.RequestException, ValueError) as exc:
            raise TopdeckApiError(f"topdeck API request to {path} failed: {exc}") from exc

    def get_ongoing_tournament(self):
        tournaments = self._get("/me/tournaments?filter=all")
        ongoing = [t for t in tournaments if t.get("status") == "Ongoing"]
        if len(ongoing) == 0:
            raise NoOngoingTournamentError("No ongoing tournament found.")
        if len(ongoing) > 1:
            raise AmbiguousTournamentError(ongoing)
        return ongoing[0]

    def get_tournament(self, tid):
        return self._get(f"/tournaments/{tid}")

    def get_standings(self, tid):
        return self._get(f"/tournaments/{tid}/standings")

    def get_attendees(self, tid):
        return self._get(f"/tournaments/{tid}/attendees")

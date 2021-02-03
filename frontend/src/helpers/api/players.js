import axios from "axios";

export async function getPlayers() {
  return await axios.get("http://localhost:3001/players");
}

import axios from "axios";

export async function getPlayers() {
  return await axios.get("http://localhost:3001/players");
}

export async function updatePlayer({ id, values }) {
  return await axios({
    method: 'PUT',
    url: `http://localhost:3001/player/${id}`,
    data: values,
    headers: {
        "Content-Type": "application/json",
    }})
}

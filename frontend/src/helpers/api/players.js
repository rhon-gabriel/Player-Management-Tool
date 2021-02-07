import axios from "axios";

export async function getPlayers() {
  return await axios.get("http://localhost:3001/players");
}

export async function getPlayer(id) {
  return await axios.get(`http://localhost:3001/player/${id}`);
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

export async function deletePlayer(id) {
  return await axios.delete(`http://localhost:3001/player/${id}`)
}

export async function addPlayer(values) {
  return await axios({
    method: 'POST',
    url: `http://localhost:3001/player`,
    data: values,
    headers: {
        "Content-Type": "application/json",
    }})
}
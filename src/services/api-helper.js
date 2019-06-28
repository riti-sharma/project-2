import axios from 'axios';

export const fetchlyrics = async (artist, song) => {
  const resp = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
  return resp.data.lyrics
}
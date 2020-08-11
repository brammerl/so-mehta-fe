export const fetchArtwork = () => {
  return fetch(`https://localhost:7890/api/v1/artwork/`)
  .then(res => res.json())
  .then(artwork => artwork);
};

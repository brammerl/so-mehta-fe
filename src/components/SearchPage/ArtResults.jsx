import React from 'react';

const ArtResults = () => {
  if(!artwork) return <h1>loading</h1>

  const fetchedArtwork = artwork.map(artwork => {
    return (
      <figure>

      </figure>
    )
  })
}
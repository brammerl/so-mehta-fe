import React from 'react';
import { useSelector } from '../../hooks/AppContext';
import { getArtwork } from '../../selectors/selectors';

const ArtResults = () => {
  const artwork = useSelector(getArtwork);

  if(!artwork) return <h1>loading</h1>

  const fetchedArtwork = artwork.map(artwork => {
    return (
      <figure className='artwork-card'>
        <img src={`http://localhost:7890/${artwork.artworkImage}`}/>
        <caption>{artwork.title}</caption>
      </figure>
    )
  });

  return(
    <div className='artwork-list'>
    {fetchedArtwork}
    </div>
  )
}

export default ArtResults;
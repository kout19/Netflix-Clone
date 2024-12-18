import React from 'react';
import Row from '../row/Row';
import requests from '../../../utils/requestes';
 const Rowlist = () => {
  return (
    <>
      <Row 
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row 
        title="Top Rated Movies"
        fetchURL={requests.fetchTopRatedMoveis}
      />
      <Row 
        title="Trending Movies"
        fetchURL={requests.fetchTranding}
      />
      <Row 
        title="Commedy Movies"
        fetchURL={requests.fetchCommedyMoveis}
      />
      <Row 
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
      />
      <Row 
        title="Romantic Movies"
        fetchURL={requests.fetchRomangicMovies}
      />
      <Row 
        title="Horror Movies"
        fetchURL={requests.fetchHorrerMovies}
      />
      <Row 
        title="Documentary Movies"
        fetchURL={requests.fetchDocumentaries}
      />
      <Row 
        title="TVShow "
        fetchURL={requests.fetchTVShow}
      />
    </>
  )
}
export default Rowlist;

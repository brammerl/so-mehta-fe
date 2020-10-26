import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/AppContext';
import reducer, { initialState } from '../reducers/reducer';
import { fetchArtwork } from '../services/artwork';
import { setArtwork }from '../actions/reducerActions';


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchArtwork()
      .then(artwork => dispatch(setArtwork(artwork)));
  }, []);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
    )
}

export default AppProvider;
import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/reducer';
import fetchArtwork from '../services/fetchArtwork';
import setArtwork from '../actions/reducerActions';


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchArtwork()
      .then(artwork => dispatch(setArtwork(artwork)));
  }, []);
  
  return (
    <Context.Provider value={{ state, dispatch}}>
      {children}
    </Context.Provider>
    )
}

export default AppProvider;
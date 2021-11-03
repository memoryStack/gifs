import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './components/comp1'
import Search from  './components/search'
import {useGifsApiHook} from './utils/customHooks'

function App() {
  
  const [ searchText, setSearchText ] = useState('')

    

  const [ fetchPage, resultItems, error ] = useGifsApiHook()

  console.log('@@@@  result items', resultItems)

  const updateSearchText = useCallback((event) => {
    setSearchText(event.target.value)
    fetchPage(event.target.value)
  }, [fetchPage])

  // const fetchData = debounce(, 300)

  const getImages = () => {
    return(
      <div  className='images-list'>
        {resultItems.map((imgItem) => {
          console.log('@@@item', imgItem)
          return <img className='image' src={imgItem.images.downsized.url}/>
        })}
      </div>
    )
  }

  return (
    <div className="App">
      <Search 
        onUpdateSearchText={updateSearchText}
        searchText={searchText}
      />
      
      {getImages()}
      
      
    </div>
  );
}

export default App;

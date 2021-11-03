import React, { useState, useCallback } from 'react'
import { debounce } from 'lodash'





function _Search({ searchText, onUpdateSearchText }) {

  return (
      <div>
        <input type="text" id="lname" name="searchText" value={searchText} onChange={onUpdateSearchText} />
        
        <p>{searchText}</p>
    </div>
  );
}

export default React.memo(_Search);

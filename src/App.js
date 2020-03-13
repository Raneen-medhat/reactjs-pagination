import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Pagination  from './components/pagination/pagination'
function App() {
  return (
    <div className="App">
      <Pagination 
        items={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
        itemsPerPage={3}
        initialPage={1}
      />
    </div>
  );
}

export default App;

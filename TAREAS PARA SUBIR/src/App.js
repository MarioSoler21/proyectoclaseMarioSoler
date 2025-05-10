import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import SideNavBar from './components/SideNavBar';



  function App(){

    
     return(
      <Router>
          <Routes>
             <Route path="/*"element={
              <div>
                 <TopNavBar />
                 <SideNavBar/>
              </div>
             }/>

          </Routes>
      </Router>   

    );
}

export default App;

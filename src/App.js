import React  from 'react';
import Show from './Show';
import ShowDetails from './ShowDetails';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

const App = () => {
  return(
    <Router>
    <div className="main">
      <div>
        <Routes>
          <Route exact path='/' element={<Show/>} />
        </Routes>
      </div>
      <div style={{ marginTop: 20 }}>
        <Routes>
          <Route exact path='/showdetails' element={<ShowDetails/>} />
        </Routes>
      </div>
    </div>
  </Router>
  )


}

export default App
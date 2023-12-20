import './App.css';
import {Link,Switch,Route,useParams, Routes} from 'react-router-dom'
import Login from './auth/LoginPage.js'; 
import signup from './auth/SignupPage.js';
function App() {
  return (
    <div className="App">

      <div className='container'>
        <div className='row'>
        <Routes>
          <Route path="/" exact Component={Login}/>
          <Route path='/createNewUser' Component={signup}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

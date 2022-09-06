import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react'; 
import axios from 'axios';

import { Faculty } from './components/Faculty/Faculty';

function App() {

  const [faculties,setFaculties] = useState([]);

  useEffect( ()=>{
    (async() => {
      const data = await getFaculties();
      setFaculties(data);
      console.log(data[0].score.scoreType)
    })();
  },[])

  const getFaculties = async() => {
    const url = "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
    try{
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="App">
      { faculties.length >=1 && faculties.map( faculty => <Faculty faculty={faculty} key={faculty.id} /> ) }
    </div>
  );
}

export default App;

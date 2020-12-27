import {useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    //init materialize css
    M.AutoInit();
  }, []);

  return <div className='App'>hello world</div>;
}

export default App;

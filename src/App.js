import {Fragment, useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SerchBar';
import Logs from './components/logs/Logs';

function App() {
  useEffect(() => {
    //init materialize css
    M.AutoInit();
  }, []);

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;

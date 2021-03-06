import {Fragment, useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SerchBar';
import Logs from './components/logs/Logs';
import {AddBtn} from './components/layout/AddBtn';
import AddLogmodal from './components/logs/AddLogModal';
import EditLogmodal from './components/logs/EditLogModal';
import AddTechmodal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  useEffect(() => {
    //init materialize css
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogmodal />
          <EditLogmodal />
          <AddTechmodal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;

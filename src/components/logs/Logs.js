import {useState, useEffect} from 'react';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import {useDispatch, useSelector} from 'react-redux';
import {getLogs} from '../../actions/logAction';

const Logs = () => {
  const dispatch = useDispatch();
  const {logs, loading} = useSelector((state) => state.log);

  useEffect(() => {
    dispatch(getLogs());
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'> No logs to show</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

export default Logs;

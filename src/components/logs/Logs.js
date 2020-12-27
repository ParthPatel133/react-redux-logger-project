import {useState, useEffect} from 'react';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>loading...</h4>;
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
          logs.map((log) => <li>{log.message}</li>)
        )}
      </ul>
    </div>
  );
};

export default Logs;

import PropTypes from 'prop-types';
import Moment from 'react-moment';

const LogItem = ({log}) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-model'
          className={`model-trigger ${
            log.attension ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> Last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='DD MMMM YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;

import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize';
import {useDispatch} from 'react-redux';
import {deleteLog, setCurrent} from '../../actions/logAction';

const LogItem = ({log}) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteLog(log.id));
    M.toast({html: 'Log Deleted'});
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attension ? 'red-text' : 'blue-text'
          }`}
          onClick={() => dispatch(setCurrent(log))}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> Last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='DD MMMM YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a onClick={onDelete} href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;

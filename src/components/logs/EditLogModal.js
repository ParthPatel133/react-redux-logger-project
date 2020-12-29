import M from 'materialize-css/dist/js/materialize';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import {useState} from 'react';
import {updateLog} from '../../actions/logAction';
import TechSelectOption from '../techs/TechSelectOption';

const EditLogmodal = () => {
  const [message, setMessage] = useState('');
  const [attension, setAttension] = useState(false);
  const [tech, setTech] = useState('');

  const current = useSelector((state) => state.log.current);
  const dispatch = useDispatch();

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttension(current.attension);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({html: 'Please enter a message and tech'});
    } else {
      //updLog for edit the log
      const updLog = {
        id: current.id,
        message,
        attension,
        tech,
        date: new Date(),
      };

      dispatch(updateLog(updLog));
      M.toast({html: `Log updated by: ${tech}`});

      //clear field
      setMessage('');
      setTech('');
      setAttension(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter system logs</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className='raw'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technicial
              </option>
              <TechSelectOption />
            </select>
          </div>
        </div>
        <div className='raw'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attension}
                  value={attension}
                  onChange={(e) => setAttension(!attension)}
                />
                <span>Needs Attension</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-green btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default EditLogmodal;

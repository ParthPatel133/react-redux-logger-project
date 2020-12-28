import M from 'materialize-css/dist/js/materialize';
import {useDispatch} from 'react-redux';

import {useState} from 'react';
import {addLog} from '../../actions/logAction';
const AddLogmodal = () => {
  const [message, setMessage] = useState('');
  const [attension, setAttension] = useState(false);
  const [tech, setTech] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({html: 'Please enter a message and tech'});
    } else {
      const newLog = {
        message,
        attension,
        tech,
        date: new Date(),
      };
      dispatch(addLog(newLog));

      M.toast({html: `Log added by ${tech}`});

      //clear fields
      setMessage('');
      setTech('');
      setAttension(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
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
            <label htmlFor='message' className='active'>
              Log message
            </label>
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
              <option value='Monica Geller'>Monica Geller</option>
              <option value='John Doe'>John Doe</option>
              <option value='Shane Watson'>Shane Watson</option>
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

export default AddLogmodal;

import M from 'materialize-css/dist/js/materialize';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {addTechs} from '../../actions/techAction';
const AddTechmodal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({html: 'Please enter the first and last name'});
    } else {
      //add tech
      dispatch(
        addTechs({
          firstName,
          lastName,
        })
      );

      M.toast(`${firstName} ${lastName} added as tech`);
      //clear filed
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              last Name
            </label>
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

export default AddTechmodal;

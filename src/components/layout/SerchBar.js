import {useDispatch} from 'react-redux';
import {useRef} from 'react';
import {searchLogs} from '../../actions/logAction';

const Serchbar = () => {
  const dispatch = useDispatch();
  const text = useRef('');

  const onChange = (e) => {
    dispatch(searchLogs(text.current.value));
  };

  return (
    <div>
      <nav style={{marginBottom: '1.5rem'}} className=''>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input
                id='search'
                type='search'
                placeholder='search logs'
                ref={text}
                onChange={onChange}
                required
              />
              <label className='label-icon' htmlFor='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Serchbar;

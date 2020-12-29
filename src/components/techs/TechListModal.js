import {useEffect} from 'react';
import TechItem from './TechItem';
import {useSelector, useDispatch} from 'react-redux';
import {getTechs} from '../../actions/techAction';

const TechListModal = () => {
  const dispatch = useDispatch();
  const {techs, loading} = useSelector((state) => state.tech);

  useEffect(() => {
    dispatch(getTechs());
  }, [dispatch]);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='model-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;

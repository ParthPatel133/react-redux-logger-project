import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getTechs} from '../../actions/techAction';

const TechSelectOption = () => {
  const {techs, loading} = useSelector((state) => state.tech);
  useEffect(() => {
    // dispatch(getTechs());
    getTechs();
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

export default TechSelectOption;

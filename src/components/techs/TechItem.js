import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize';
import {useDispatch} from 'react-redux';
import {deleteTech} from '../../actions/techAction';

const TechItem = ({tech}) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTech(tech.id));
    M.toast({html: 'Technician Deleted'});
  };

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;

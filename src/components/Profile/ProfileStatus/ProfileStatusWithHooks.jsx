import React, {useState, useEffect}   from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(()=>{
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };

  return (
    <div>
      { !editMode &&
        <div className={classes.content}>
          <span onDoubleClick={activateEditMode}>
            {props.status || '--------'}
          </span>
        </div>
      }
      { editMode &&
        <div>
          <input
            type="text"
            value={status}
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
          />
        </div>
      }
    </div>
  )
};

export default ProfileStatusWithHooks;

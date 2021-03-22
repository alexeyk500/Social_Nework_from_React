import React   from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

  state ={
    editMode: false
  };

  activateEditMode() {
    this.setState({
      editMode: true
    })
  };

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render(){
    return (
      <div>
        { !this.state.editMode &&
          <div className={classes.content}>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status}
            </span>
          </div>
        }
        { this.state.editMode &&
          <div>
            <input type="text"
              value={this.props.status}
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}/>
          </div>
        }
      </div>
    )
  }
};

export default ProfileStatus;

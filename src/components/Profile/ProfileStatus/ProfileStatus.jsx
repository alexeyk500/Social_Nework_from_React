import React   from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

  state={
    editMode: false,
    status: this.props.status
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
    this.props.updateStatus(this.state.status)
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  };

  componentDidUpdate(prevProps, prevState){
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  };

  render(){
    return (
      <div>
        { !this.state.editMode &&
          <div className={classes.content}>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.state.status || '--------'}
            </span>
          </div>
        }
        { this.state.editMode &&
          <div>
            <input
              type="text"
              value={this.state.status}
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              onChange={this.onStatusChange}/>
          </div>
        }
      </div>
    )
  }
};

export default ProfileStatus;

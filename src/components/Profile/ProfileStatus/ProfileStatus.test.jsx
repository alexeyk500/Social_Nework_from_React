import React   from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', ()=>{
  test('status from props shout be in state', ()=>{
    const component = create(<ProfileStatus status='Lesha the best' />);
    const instance = component.getInstance();
    expect (instance.state.status).toBe('Lesha the best')
  });
});

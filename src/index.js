import React, { Component } from 'react'
import { Root } from 'native-base';
import AppNavigator from './router';
export class AppContainer extends Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    )
  }
}

export default AppContainer;
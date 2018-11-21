import React,{Component} from 'react'
import {View,Text} from 'react-native'
import ReactPage from './page/reactpage'
import FlowPage from './page/flowpage'

import ScrollableTabView, {DefaultTabBar } from 'react-native-scrollable-tab-view'

class Profile extends Component {
  constructor() {
    super();
  }

  render () {
    return (
        <ScrollableTabView>
          <ReactPage tabLabel="推荐" />
          <FlowPage tabLabel="图集" />
        </ScrollableTabView>
    )
  }
}

export default Profile;
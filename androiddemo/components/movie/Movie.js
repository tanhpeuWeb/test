import React,{Component} from 'react'
import {View,Text,Image,Dimensions,StyleSheet} from 'react-native'
import ReactPage from './page/reactpage'
import FlowPage from './page/flowpage'
import MinePage from './page/minepage'

import ScrollableTabView, {DefaultTabBar } from 'react-native-scrollable-tab-view'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  image: {
    width,
    height:150
  }
})

class Movie extends Component {
  constructor() {
    super();
  }

  
  render () {
    return (
      <View style={{flex:1}}>
        <Image style={styles.image} source={require('./img/gq.jpg')}></Image>

        <ScrollableTabView>
          <ReactPage tabLabel="全部" />
          <FlowPage tabLabel="精选" />
          <MinePage tabLabel="我的" />
        </ScrollableTabView>

      </View>
    )
  }
}

export default Movie;
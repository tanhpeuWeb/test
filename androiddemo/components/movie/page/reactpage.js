import React,{Component} from 'react'
import {View,Text} from 'react-native'

import { Card } from 'react-native-elements'

class ReactPage extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View style={{flex:1}}>
        <View style={{padding:10,flex:2}}>
          <Text>今日推荐</Text>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/fl3.jpg')}>
              <Text style={{textAlign:'center'}}>
                复仇者联盟3
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/aefl.jpg')}>
              <Text style={{textAlign:'center'}}>
                阿尔法·狼
              </Text>
            </Card>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/htpy.jpg')}>
              <Text style={{textAlign:'center'}}>
                环太平洋
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/md3.jpg')}>
              <Text style={{textAlign:'center'}}>
                美国队长3
              </Text>
            </Card>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/qingsheng.jpg')}>
              <Text style={{textAlign:'center'}}>
                情圣
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/xhssf.jpg')}>
              <Text style={{textAlign:'center'}}>
                西虹市首富
              </Text>
            </Card>
          </View>
        </View>
      </View>
    )
  }
}

export default ReactPage;
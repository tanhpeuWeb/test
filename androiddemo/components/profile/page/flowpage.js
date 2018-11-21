import React,{Component} from 'react'
import {View,Text} from 'react-native'

import { Card } from 'react-native-elements'

class FlowPage extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Card
            containerStyle={{padding:2,width:'28%',height:150}}
            titleStyle={{height:15,lineHeight:15}}
            imageStyle={{height:110}}
            image={require('./img/cwt.jpg')}>
            <Text style={{textAlign:'center'}}>
              陈伟霆
            </Text>
          </Card>
          <Card
            containerStyle={{padding:2,marginLeft:-5 ,width:'28%',height:150}}
            imageStyle={{height:110}}
            image={require('./img/dlrb.jpeg')}>
            <Text style={{textAlign:'center'}}>
              迪丽热巴
            </Text>
          </Card>
          <Card
            containerStyle={{padding:2,marginLeft:-5 ,width:'28%',height:150}}
            imageStyle={{height:110}}
            image={require('./img/gtle.jpg')}>
            <Text style={{textAlign:'center'}}>
              古天乐
            </Text>
          </Card>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Card
            containerStyle={{padding:2,width:'28%',height:150}}
            titleStyle={{height:15,lineHeight:15}}
            imageStyle={{height:110}}
            image={require('./img/hg.jpg')}>
            <Text style={{textAlign:'center'}}>
              胡歌
            </Text>
          </Card>
          <Card
            containerStyle={{padding:2,marginLeft:-5 ,width:'28%',height:150}}
            imageStyle={{height:110}}
            image={require('./img/lqing.jpg')}>
            <Text style={{textAlign:'center'}}>
              李沁
            </Text>
          </Card>
          <Card
            containerStyle={{padding:2,marginLeft:-5 ,width:'28%',height:150}}
            imageStyle={{height:110}}
            image={require('./img/lyf.jpg')}>
            <Text style={{textAlign:'center'}}>
              刘亦菲
            </Text>
          </Card>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Card
            containerStyle={{padding:2,width:'28%',height:150}}
            titleStyle={{height:15,lineHeight:15}}
            imageStyle={{height:110}}
            image={require('./img/yy.jpg')}>
            <Text style={{textAlign:'center'}}>
              杨洋
            </Text>
          </Card>
          <Card
            containerStyle={{padding:2,marginLeft:-5 ,width:'28%',height:150}}
            imageStyle={{height:110}}
            image={require('./img/zdy.jpg')}>
            <Text style={{textAlign:'center'}}>
              周冬雨
            </Text>
          </Card>
          <Card
            containerStyle={{padding:2,marginLeft:-5 ,width:'28%',height:150}}
            imageStyle={{height:110}}
            image={require('./img/zly.jpg')}>
            <Text style={{textAlign:'center'}}>
              赵丽颖
            </Text>
          </Card>
        </View>        
      </View>
    )
  }
}

export default FlowPage;
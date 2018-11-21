import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar, ListItem } from 'react-native-elements';

const list = [
  {
    title: '离线缓存',
    icon: 'download'
  },
  {
    title: '观看历史',
    icon: 'history'
  },
  {
    title: '我的收藏',
    icon: 'star-o'
  },
  {
    title: '用户反馈',
    icon: 'envelope-o'
  },
  {
    title: '法律条款',
    icon: 'pencil-square-o'
  },
  {
    title: '检查更新',
    icon: 'refresh'
  },
  {
    title: '设置',
    icon: 'cog'
  },
]

class Main extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View style={{flex:1}}>
        <View style={{height:170,backgroundColor:'skyblue'}}>
          <Avatar
            size='xlarge'
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 40, marginTop: 75}}
          />
          <Text style={{marginLeft:27}}>登录/注册</Text>
        </View>

        <View style={{height:500}}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                titleStyle={{marginLeft:5}}
                leftIcon={<Icon name={item.icon} size={18} color='gray'/>}
              />
            ))
          }
        </View>

      </View>
    )
  }
}

export default Main;
import React,{Component} from 'react'
import { AppRegistry,StyleSheet,Image,View,Text,Dimensions} from 'react-native'

import Swiper from 'react-native-swiper';
import { SearchBar,Header, Card } from 'react-native-elements'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  wrapper: {
    height: 150
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  image: {
    width,
    height:150
  },
  searchbar: {
    backgroundColor: 'red'
  }
})

class Home extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View style={styles.container}>

        <SearchBar
          showLoading
          containerStyle={{backgroundColor:'#D3D3D390'}}
          inputStyle={{backgroundColor:'white',borderRadius: 20}}
          placeholder='Search' />

        <Swiper style={styles.wrapper} autoplay={true} showsButtons={false}>
          <View style={styles.slide1}>
            <Image style={styles.image} source={require('./img/1.jpg')} />
          </View>
          <View style={styles.slide2}>
            <Image style={styles.image} source={require('./img/2.jpg')} />
          </View>
          <View style={styles.slide3}>
            <Image style={styles.image} source={require('./img/3.jpg')} />
          </View>
        </Swiper>
        
        <View style={{padding:10,flex:2}}>
          <Text>今日推荐</Text>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/1.jpg')}>
              <Text style={{textAlign:'center'}}>
                悲伤逆流成河 
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/2.jpg')}>
              <Text style={{textAlign:'center'}}>
                我不是药神 
              </Text>
            </Card>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/3.jpg')}>
              <Text style={{textAlign:'center'}}>
                神奇动物在哪里 
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/gq.jpg')}>
              <Text style={{textAlign:'center'}}>
                鬼拳Ⅲ 
              </Text>
            </Card>
          </View>
        </View>
      </View>
    )
  }
}

export default Home;
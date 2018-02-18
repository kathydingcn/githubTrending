import React from 'react';
import { StyleSheet, Text, View, Image,Navigator } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import {
    StackNavigator,
} from 'react-navigation';

import Boy from './Boy'
import Girl from './Girl'

const RouteApp = StackNavigator({
    Girl: { screen: Girl },
    Boy: { screen: Boy },
},{initialRouteName: 'Boy'});

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
        selectedTab:'tb_popular'
    }
  }
  render() {



    return (
      <View style={styles.container}>
          <RouteApp/>

        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_popular'}
              selsectTitleStyle={{color:'red'}}
              title="Popular"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source= {require('./res/images/ic_polular.png')}/>}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_trending'}
              selectTitleStyle={{color:'green'}}
              title="Trending"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_trending.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_favorite'}
              selsectTitleStyle={{color:'red'}}
              title="Favorite"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source= {require('./res/images/ic_polular.png')}/>}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_my'}
              selectTitleStyle={{color:'green'}}
              title="Profile"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_trending.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>

      </View>
    );
  }
}


/*const App = StackNavigator({
    Girl: { screen: Girl },
    Boy: { screen: Boy },
},{initialRouteName: 'Boy'});*/



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    page1:{
    flex:1,
        backgroundColor:'red',
    },
    page2:{
        flex:1,
        backgroundColor:'green',
    },
    image:{
    height:22,
        width:22
    }
});

// export default App;

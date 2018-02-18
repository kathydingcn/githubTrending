/**
 * Created by kathy on 15/02/2018.
 */
import React from 'react';
import { StyleSheet, Text, View, Image,Navigator,Button } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import {
    StackNavigator,
} from 'react-navigation';

// import Girl from './Girl'

export default class Boy extends React.Component {

    constructor(props){
        super(props);
        this.state={count:0};
 
    }

    static navigationOptions =({navigation})=>{
        const params = navigation.state.params||{};
        return{
            headerTitle: 'head'

    }};




    render() {
        const { navigate } = this.props.navigation;
        const param = this.props.navigation.state.params;

        const myname = param? param.name:null;
        return (
            <View>
                <Text>Count: {this.state.count}</Text>
            <Button
                title="Go to Jane's profile"
                onPress={() =>{
                    console.log('in boy component props is ', this.props.navigation);
                    navigate('Girl', { name: 'Jane' });
                }

                }
            />
                <Text> {JSON.stringify(myname)} </Text>
            </View>
        );
    }

}

class Logo extends React.Component{
    render(){
        return(
            <Image source={require('./res/images/header.png')} style={{width:30,height:30,tintColor:'red'}}/>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center'
    },
    text:{
        fontSize:20,
    }

})
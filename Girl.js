/**
 * Created by kathy on 15/02/2018.
 */
import React from 'react';
import { StyleSheet, Text, View, Image,Navigator,Button } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {
    StackNavigator,
} from 'react-navigation';



export default class Girl extends React.Component {
    static navigationOptions = {
        title: 'Girl Welcome',
    };


    render() {
        const { navigate } = this.props.navigation;




        return (
            <Button
                title="Go to Jason's profile"
                onPress={() =>
                    navigate('Boy', { name: 'Jason' })
                }
            />
        );
    }

}
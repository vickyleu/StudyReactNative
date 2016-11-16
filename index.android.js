/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from "react";
import { AppRegistry,StyleSheet,Image, TextInput, Text, View} from "react-native";

// var {TouchableButton} = require('./module/TouchableButton');

class ReactNative extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
                <Image
                    style={styles.style_image}
                    source={require('./resource/app_icon.jpg')}/>
                <TextInput
                    style={styles.style_user_input}
                    placeholder='QQ号/手机号/邮箱'
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    textAlign='right'
                />
                <View style={{height: 1, backgroundColor: '#f4f4f4'}}/>
                <TextInput
                    style={styles.style_pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlign='right'
                />
                <View style={styles.style_view_commit}>
                    <Text style={{color: '#fff'}}>
                        登录
                    </Text>
                </View>

                <View>
                    <TouchableButton
                        underlayColor='#4169e1'
                        style={styles.style_view_button}
                        onPress=''
                        text='登录有点击效果'>
                    </TouchableButton>
                </View>

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', bottom: 10}}>
                    <Text style={styles.style_view_unlogin}>
                        无法登录?
                    </Text>
                    <Text style={styles.style_view_register}>
                        新用户
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    style_image: {
        borderRadius: 45,
        height: 70,
        width: 70,
        marginTop: 40,
        alignSelf: 'center',
    },
    style_user_input: {
        backgroundColor: '#fff',
        marginTop: 10,
        height: 45,
    },
    style_pwd_input: {
        backgroundColor: '#fff',
        height: 45,
    },
    style_view_commit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63B8FF',
        borderColor: '#5bc0de',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_button: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63B8FF',
        borderColor: '#5bc0de',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin: {
        fontSize: 15,
        color: '#63B8FF',
        marginLeft: 10,
    },
    style_view_register: {
        fontSize: 15,
        color: '#63B8FF',
        marginRight: 10,
        alignItems: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        textAlign: 'right',
    }
});

AppRegistry.registerComponent('reactNative', () => ReactNative);


/*
 /!**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *!/
 import React, {Component} from "react";
 import {AppRegistry, StyleSheet, Text, View} from "react-native";

 export default class reactNative extends Component {


 render() {
 return (
 <View style={styles.container}>
 <Text style={styles.welcome}>
 欢迎来到React-Native示例页!
 </Text>
 <Text style={styles.instructions}>
 编辑index.android.js文件来修改本页面哦
 哎哟
 </Text>
 <Text style={styles.instructions}>
 双击键盘R键来刷新页面,{'\n'}
 Shake or press menu button for dev menu
 </Text>
 <View>
 <TouchableButton
 underlayColor='#4169e1'
 style={styles.style_view_button}
 onPress=
 text='登录有点击效果'>
 </TouchableButton>
 </View>
 </View>
 );
 }
 }

 const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#F5FCFF',
 },
 welcome: {
 fontSize: 20,
 textAlign: 'center',
 margin: 10,
 },
 style_view_button: {
 marginTop: 15,
 marginLeft: 10,
 marginRight: 10,
 backgroundColor: '#63B8FF',
 borderColor: '#5bc0de',
 height: 45,
 borderRadius: 5,
 justifyContent: 'center',
 alignItems: 'center',
 },
 instructions: {
 textAlign: 'center',
 color: '#333333',
 marginBottom: 5,
 },
 });


 AppRegistry.registerComponent('reactNative', () => reactNative);
 */

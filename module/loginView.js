/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";

var Dimensions = require('Dimensions');

var width = Dimensions.get('window').width;

var LoginView = React.createClass({
    getInitialState(){
        return {
            title: '不透明触摸'
        }
    },


    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require('/resource/img/icon.png')} style={styles.iconStyle}/>
                {/*帐号和密码*/}
                <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}/>
                <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle}/>
                {/*登录*/}
                <View style={styles.loginBtnStyle}>
                    <Text style={{color: 'white'}}>登录</Text>
                </View>

                {/*设置*/}
                <View style={styles.settingStyle}>
                    <Text style={{color: '#5555ff'}}>无法登录</Text>
                    <Text style={{color: '#5555ff'}}>新用户</Text>
                </View>


                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>this.activeEvent('点击')}
                    onPressIn={()=>this.activeEvent('按下')}
                    onPressOut={()=>this.activeEvent('抬起')}
                    onLongPress={()=>this.activeEvent('长按')}
                >
                    <View style={styles.clickStyle}>
                        <Text>点击事件</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text>{this.state.title}</Text>
                </View>


                {/*其他的登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式:</Text>
                    <Image source={require('/resource/img/icon3.png')} style={styles.otherImageStyle}/>
                    <Image source={require('/resource/img/icon7.png')} style={styles.otherImageStyle}/>
                    <Image source={require('/resource/img/icon8.png')} style={styles.otherImageStyle}/>
                </View>
            </View>
        );
    },
    activeEvent(event){
        this.setState({
            title: event
        })
    }
});

{/*
 class LoginView extends Component {

 }
 */
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems: 'center'
    },
    iconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'white',
        marginTop: 50,
        marginBottom: 30
    },
    textInputStyle: {
        width: width,
        height: 38,
        backgroundColor: 'white',
        marginBottom: 1,
        textAlign: 'center'
    },
    loginBtnStyle: {
        height: 35,
        width: width * 0.9,
        backgroundColor: 'blue',
        marginTop: 30,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    settingStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9
    },
    otherLoginStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    otherImageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 8
    },
    clickStyle: {
        backgroundColor: 'red'
    }
});


module.exports = LoginView;
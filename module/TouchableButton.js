'use strict';  
  
import React, {  
  AppRegistry,  
  Component,  
  StyleSheet,  
  Text,  
  View,  
  TouchableHighlight,  
} from 'react-native';  
  
class TouchableButton extends Component {  
  render() {  
    return (  
        <TouchableHighlight   
          underlayColor={this.props.underlayColor}  
          activeOpacity={0.5}    
          style={this.props.style}  
          onPress={this.props.onPress}  
          >  
             <Text style={{fontSize:16,color:'#fff'}}>{this.props.text}</Text>  
        </TouchableHighlight>  
    );  
  }  
}  
  
module.exports = TouchableButton;  


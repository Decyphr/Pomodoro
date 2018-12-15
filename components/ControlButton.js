import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import { colors } from '../assets/colors.js';

class ControlButton extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    btnStyle: {
      backgroundColor: colors.highlight,
      width: 300,
    },

    txtStyle: {
      color: colors.secondary,
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[styles.btn, this.props.btnStyle]}
        >
          <Text style={[styles.text, this.props.txtStyle]}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    btn: {
      padding: 20,
      borderRadius: 5,
      marginTop: 15,
      marginBottom: 15,
      elevation: 2,
    },

    text: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    }
})


export default ControlButton

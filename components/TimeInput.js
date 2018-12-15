import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import { colors } from '../assets/colors.js';

class TimeInput extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View pointerEvents={this.props.canChange ? 'auto' : 'none'} style={styles.container}>

        <TouchableOpacity
          onPress={this.props.decrease}
          style={styles.btn}
        >
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{this.props.time}</Text>

        <TouchableOpacity
          onPress={this.props.increase}
          style={styles.btn}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },

    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      borderColor: colors.highlight,
      borderWidth: 2,
      borderRadius: 4,
    },

    btnText: {
      color: colors.highlight,
      fontSize: 20,
    },

    text: {
      fontSize: 30,
      textAlign: 'center',
      padding: 10,
    }
})

export default TimeInput

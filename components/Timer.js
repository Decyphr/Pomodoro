import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { colors } from '../assets/colors.js';

class Timer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.timeText}>
            {this.props.minutes}:
            {this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}
          </Text>
        </View>

        <Text style={styles.statusText}>
          {this.props.isResting ? 'REST' : 'WORK'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  timeText: {
    color: colors.secondary,
    fontSize: 75,
    margin: 5,
  },

  statusText: {
    color: colors.highlight,
    fontSize: 25,
    letterSpacing: 3,
    textAlign: 'center',
    textTransform: 'uppercase',
  }

})

export default Timer

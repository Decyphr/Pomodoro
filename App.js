import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Vibration } from 'react-native';
import { Constants } from 'expo';

import { Card } from 'react-native-paper';

import Timer from './components/Timer.js';
import TimeInput from './components/TimeInput.js';
import ControlButton from './components/ControlButton.js';


import { colors } from './assets/colors.js';

let countingDown;

export default class App extends React.Component {
  state = {
    minutes: 25,
    seconds: 0,
    workTime: 25,
    restTime: 5,
    isResting: false,
    isRunning: false,
    canChangeTime: true,
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      countingDown = setInterval(this.countdown, 1000)
      this.setState({
        isRunning: true,
        canChangeTime: false,
      })
    }
  }

  pauseTimer = () => {
    if (this.state.isRunning) {
      clearInterval(countingDown)

      this.setState({
        isRunning: false,
      })
    }
  }

  resetTimer = () => {
    if (this.state.isRunning) {
      clearInterval(countingDown)

      this.setState({
        isRunning: false,
        canChangeTime: true,
      })
    }

    this.setState({
      minutes: this.state.workTime,
      seconds: 0,
      isResting: false,
    })
  }

  countdown = () => {
    this.setState({
      seconds: this.state.seconds === 0 ? 59 : this.state.seconds - 1,
      minutes: (this.state.seconds === 0 && this.state.minutes >= 1 ) ? this.state.minutes - 1 : this.state.minutes
    })

    if (this.state.minutes === 0 && this.state.seconds === 0) {
      this.setState({
        minutes: this.state.isResting ? this.state.workTime : this.state.restTime,
        isResting: !this.state.isResting,
      })

      Vibration.vibrate()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.timerContainer}>
          <Timer
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            isResting={this.state.isResting}
          />
        </Card>
        <View style={styles.inputContainer}>
          <TimeInput
            time={this.state.workTime}
            increase={() => this.setState({ workTime: this.state.workTime + 1, minutes: this.state.minutes + 1 })}
            decrease={() => this.state.workTime > 1 ? this.setState({ workTime: this.state.workTime - 1, minutes: this.state.minutes - 1 }) : null }
            canChange={this.state.canChangeTime}
          />
          <Text style={styles.inputSeperator}>|</Text>
          <TimeInput
            time={this.state.restTime}
            increase={() => this.setState({ restTime: this.state.restTime + 1 })}
            decrease={() => this.setState({ restTime: (this.state.restTime > 1 ? this.state.restTime - 1 : this.state.restTime) })}
            canChange={this.state.canChangeTime}
          />

        </View>
        <View style={styles.controlsContainer}>
          {this.state.isRunning ?
          <ControlButton
            title="Pause"
            onPress={this.pauseTimer}
            btnStyle={{ borderWidth: 1, borderColor: colors.highlight, width: 300, elevation: 0, }}
            txtStyle={{ color: colors.highlight }}
          />:
          <ControlButton
            title="Start"
            onPress={this.startTimer}
          />
          }
          <ControlButton
            title="Reset"
            onPress={this.resetTimer}
            btnStyle={{backgroundColor: colors.primary, width: 150, }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },

  timerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 300,
    width: 300,
    padding: 25,
    marginTop: 25,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputSeperator: {
    alignSelf: 'center',
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },

  controlsContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

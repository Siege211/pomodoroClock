import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock.js';
import DynamicButton from './components/DynamicButton.js';
import BreakLength from './components/BreakLength.js';
import SessionLength from './components/SessionLength.js';
import ResetButton from './components/ResetButton.js';
const alarmLink = 'https://res.cloudinary.com/siege211/video/upload/v1533409707/Japanese_Temple_Bell_Small-SoundBible.com-113624364.mp3';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeLeft: 1500,
      session: 1500,
      isPlaying: false,
      break: 300,
      timerLabel: true,
      breakLabel: 'Break'
    }   
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.breakAdd = this.breakAdd.bind(this);
    this.breakSubtract=this.breakSubtract.bind(this);
    this.sessionAdd = this.sessionAdd.bind(this);
    this.sessionSubtract=this.sessionSubtract.bind(this);
    this.reset=this.reset.bind(this);
    this.startBreak=this.startBreak.bind(this);
    this.startSession=this.startSession.bind(this);
    this.playAlarm =this.playAlarm.bind(this);
  }
  playAlarm() {
    let alarm = document.getElementById('beep');
    alarm.play();
  }
  reset() {
    this.setState({
      session: 1500,
      break: 300,
      timeLeft: 1500,
      timerLabel: true
    })
  }
  startBreak(){
    this.setState({
      timeLeft: this.state.break,
      timerLabel: !this.state.timerLabel
    })
  }
  startSession(){
    this.setState({
      timeLeft: this.state.session,
      timerLabel: !this.state.timerLabel
    })
  }
  startTimer() {
    this.timerID = setInterval (
      ()=> this.tick(), 1000);
    this.setState({
      isPlaying: true
    });
  }
  stopTimer() {
    clearInterval(this.timerID);
    this.setState({
      isPlaying: false
    });
  }
  tick() {

        this.setState((prevState, props) => ({
          timeLeft: prevState.timeLeft-1
        }));
  }
  breakAdd() {
    if(this.state.break<600){
      this.setState((prevState,props)=>({
        break: prevState.break+60}));
    }
  }
  breakSubtract() {
    if (this.state.break>119){
      this.setState((prevState,props)=>({
        break: prevState.break-60
      }));
    }
  }
  sessionAdd() {
    if(this.state.session<3600){
      this.setState((prevState,props)=>({
        session: prevState.session+60,
        timeLeft: prevState.session+60
      }));
    }
  }
  sessionSubtract() {
    if (this.state.session>119){
      this.setState((prevState,props)=>({
        session: prevState.session-60,
        timeLeft: prevState.session-60
      }));
    }
  }
  render() {
    const isPlaying = this.state.isPlaying;
    let timerType = this.state.timerlabel;
    let minutes = Math.floor(this.state.timeLeft/60);
    let seconds = this.state.timeLeft-minutes*60;
    if (seconds === 0) {seconds = '00';}
    else if (seconds <10) {seconds = '0'+seconds}
    let timerDisplay = minutes+':'+seconds;
    let breakSet = Math.floor(this.state.break/60);
    let sessionSet = Math.floor(this.state.session/60);
    if (this.state.timeLeft === 0 && this.state.timerLabel) {
      this.startBreak();
      this.playAlarm();
    }
    else if (this.state.timeLeft === 0 && !this.state.timerLabel) {
      this.startSession();
    }
    return (
      <div className="App">
        <BreakLength
        length={breakSet}
        add={this.breakAdd}
        subtract={this.breakSubtract}>
        </BreakLength>
        <SessionLength
        length={sessionSet}
        add={this.sessionAdd}
        subtract={this.sessionSubtract}>
        </SessionLength>
        <Clock 
          countdown={timerDisplay}
          timerLabel={this.state.timerLabel}>
          <DynamicButton 
            className='pointers'
            startTimer={isPlaying? this.stopTimer:this.startTimer}
            buttonRender={this.state.isPlaying}/>
          <ResetButton
            reset={this.reset}/>
          <audio
            id='beep'
            src={alarmLink}
          />
         </Clock>  
      </div>
    );
  }
}

export default App;
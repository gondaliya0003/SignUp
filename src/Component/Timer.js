import React, { Component } from 'react'

export class Timer extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:10,

        }}
        runningTimer=()=>{
            
              setInterval(() => {
                 this.state.counter > 0 && this.setState({counter:this.state.counter-1})
            if(this.state.counter===0 && this.props.getFromTimer('true'))
                 console.log(this.state.counter);
              }, 1000);
          }    
          
          componentDidMount =()=>{
              this.runningTimer();
            }
          
           setCounter =()=>{
              this.setState({counter:10})
          }
    render() {
        
        
        
        
        return (
            <div>
              <div>Countdown: {this.state.counter}</div>
            </div>
        )
    }
}

export default Timer

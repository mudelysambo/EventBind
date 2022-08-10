import react, { Component } from 'react';
import { render } from 'react-dom';

class EventBind extends Component{

  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello'
    }

  }

  ClickHandler(){
    this.setState({
      message: 'GoodBye'
    })
  }


  render(){
    return(
      <div>
      <h1>{this.state.message}</h1>
      {/* //First option */}
      {/* <button onClick={() => this.ClickHandler()}>Click</button> */}
      {/* //Second Option */}
      <button onClick={this.ClickHandler.bind(this)}>Click</button>
      
      </div>
    )
  }
}
 export default EventBind;
import React from 'react';
import { ClickState } from './state.jsx'
import { observer } from 'mobx-react'

@observer
class App extends React.Component {
    constructor(props) {
	   super(props);
	   this.state = {counter : 0};
	   this.handleClick = this.handleClick.bind(this);
   }
   initClickState = new ClickState()
   handleClick() {
       this.setState({counter: this.state.counter + 1})
   }
   render() {
    const {
        state = this.initClickState
    } = this.props
    const Style = {
        color: 'green'
    };
    const {
        one,
        two,
        ...remainingProps
    } = this.props
    
    console.log(remainingProps)
    console.log('Click toggle using MobX', state.isClicked)
      return (
         <React.Fragment>
			 <div style={Style}>
				{this.state.counter}
			 </div>
			 <button onClick={state.handleClick}>{''+state.isClicked}</button>
		 </React.Fragment>
      );
   }
}
export default App;
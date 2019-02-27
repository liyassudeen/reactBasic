import React from 'react';
import { ClickState } from './state.jsx'
import { observer } from 'mobx-react'

@observer
class App extends React.Component {
    constructor(props) {
	   super(props);
	   this.state = {counter : 0, listElement : [], nonStrikeOutCount: 0};
	   this.textInput = React.createRef();
	   this.handleClick = this.handleClick.bind(this);
	   this.listTextInput = this.listTextInput.bind(this);
	   this.strikeOut = this.strikeOut.bind(this);
   }
   initClickState = new ClickState()
   handleClick() {
       this.setState({counter: this.state.counter + 1})
   }
   listTextInput() {
	if(this.textInput.current.value != '') {
		this.setState({listElement: [...this.state.listElement, this.textInput.current.value], nonStrikeOutCount: this.state.nonStrikeOutCount + 1})
		this.textInput.current.value = '';
	}
   }
   strikeOut(e) {
	   if(e.target.style.textDecoration != 'line-through') {
		e.target.style.textDecoration = 'line-through';
		this.setState({nonStrikeOutCount: this.state.nonStrikeOutCount - 1})
	   }
	   else {
		e.target.style.textDecoration = 'unset';
		this.setState({nonStrikeOutCount: this.state.nonStrikeOutCount + 1})
	   }
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
    const list = this.state.listElement.map((item) => <li onClick={this.strikeOut}>{item}</li>)
    console.log(remainingProps)
    console.log('Click toggle using MobX', state.isClicked)
      return (
         <React.Fragment>
			 <div style={Style}>
				{this.state.counter}
			 </div>
			 <button onClick={this.handleClick}>Incrementer using setState</button>
			 <input type="text" ref={this.textInput} />
			 <input type="button" value="Focus the text Input using ref" onClick={this.listTextInput} />
			 <button onClick={state.handleClick}>{'MobX toggle '+state.isClicked}</button>
			 <ul>
				{list}
			 </ul>
			 <div>{this.state.nonStrikeOutCount} out of {this.state.listElement.length}</div>
		 </React.Fragment>
      );
   }
}
export default App;
import React from 'react'

class GraphqlClient extends React.Component {
 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
 }
 handleClick(actionParam) {
    fetch('http://localhost:5000/graphql', {
     method: 'POST',
     mode: 'cors',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': '*'
     },
     body: JSON.stringify({query: "{ "+ actionParam +" }"})
   })
     .then(r => r.json())
     .then(data => console.log('data returned:', data));
}
  render() {
    return (
     <div>
        <button onClick={() => this.handleClick('login')}>Login</button>
        <button onClick={() => this.handleClick('createAccount')}>CreateAccount</button>
     </div>
    )
  }
}
export default GraphqlClient
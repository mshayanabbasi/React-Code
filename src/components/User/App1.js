import React, {Component} from 'react'
import User from './User'
class App1 extends Component {
    state = {
        showUserComponents: true
    }
    removeUserHandler = () => {
        this.setState({showUserComponents: false})
    }
    render(){
        return(
            <div>
                {this.state.showUserComponents ? <User /> : null}
                <button onClick={this.removeUserHandler}>Remove User Component</button>
            </div>
        )
    }
}
export default App1;
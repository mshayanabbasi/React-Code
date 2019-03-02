import React , {Component} from 'react'
class User extends Component{
    componentWillUnmount = () => {
        console.log('I\'m about to be removed')
    }
    render(){
        return(
            <div></div>
        )
    }
}
export default User;
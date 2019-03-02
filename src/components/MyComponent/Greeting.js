import React from 'react'
import PropTypes from 'prop-types'

class Greeting extends React.Component{
    static defaultProps = {
        name: 'stranger'
    }
    render(){
        return(
            <h1>Hello, {this.props.name}</h1>
        )
    }
}
Greeting.propTypes = {
    name: PropTypes.string
}
Greeting.defaultProps = {
    name:'Stranger'
}
export default Greeting
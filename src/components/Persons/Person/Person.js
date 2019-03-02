import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import { AuthContext } from '../../../containers/App'

// StateFull Component
class Person extends Component{
    constructor(props){
        super(props)
        console.log('[Person.js] Inside Constructor', props)
        this.inputElement = React.createRef()
      }
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()')
      }
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()')
        if(this.props.position === 0){
          this.inputElement.current.focus()
          }
      }
      focus() {
       this.inputElement.current.focus()
      }
    render() {
        console.log('[Person.js] Inside render()')
        return (
                <WithClass class="Person">
                <Aux>
                  <AuthContext.Consumer>
                  {auth => auth? <p>I'm authenticated!</p>: null}
                  </AuthContext.Consumer>
                         <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old!</p>
                         <p>{this.props.children}</p>
                         <input 
                         ref={this.inputElement}
                         type="text" 
                         onChange={this.props.changed} 
                         value={this.props.name} />
                         </Aux>
                 </WithClass>
        )
    }
}
// Stateless Component 
const person = (props) => {
    // const rnd = Math.random()
    // console.log(rnd)
    // if(rnd > 0.7){
    //     throw new Error('Something went wrong')
    // }
    return (
        <div className='Person'>
            <p onClick={props.click} >I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            {/* <p>{props.title}</p> */}

        </div>
    )
}

Person.propTypes ={
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, "Person");

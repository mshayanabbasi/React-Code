import React, { PureComponent } from 'react';
import  './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
export const AuthContext = React.createContext(false)

class App extends PureComponent {
  constructor(props){
    super(props)
    console.log('[App.js] Inside Constructor', props)
    this.state={
      persons : [
        {id:'1' ,name: 'Max', age: 28},
        {id:'2', name: 'Manu', age: 29},
        {id:'3', name: 'Stephanie', age:26}
      ],
      otherState : 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount')
  }   
  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()')
  }
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
    return nextState.persons !== this.state.persons ||
    nextState.showPersons !== this.state.showPersons;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState)
    return prevState
  }
  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate')
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate')
  }
  state = {
    counter : 1
  }
  state = {
    persons : [
      {id:'1' ,name: 'Max', age: 28},
      {id:'2', name: 'Manu', age: 29},
      {id:'3', name: 'Stephanie', age:26}
    ],
    otherState : 'some other value',
    showPersons: false
  }
  swithNameHandler = (newName) => {
  //   // console.log('Was Clicked')
  //   //DON'T DO THIS this.state.persons[0].name = 'Maxmillian'
    this.setState({
      persons: [
        {name: newName, age:28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age:27}
      ]
    })
  }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );  
  }

    togglePersonHandler =() => {
      const doesShow = this.state.showPersons
      this.setState((prevState, props)=>{
        return {
          showPersons: !doesShow,
          toggleClicked: this.state.toggleClicked + 1
        }
        
    })
    }
    loginHandler = () =>{
      this.setState({authenticated: true})
    }
      switchCounterHandler = () =>{
    this.setState({
      counter:  this.state.counter + 1
    })
  }
  render() {
    console.log('[App.js] Inside render()')
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
   
    let person = null;
    if(this.state.newPerson){
         person=( <div>
              <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
              <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.swithNameHandler.bind(this, 'Max!')}
              change={this.changeNameHandler}>My Hobbies: Racing</Person>
              <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div>
         )
    }
    let persons = null;
    if( this.state.showPersons ){
      persons = 
         ( 
         <div>
           <Persons 
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler}/>
              {this.state.persons.map((person,index) =>{
                return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed = {(event)=> this.nameChangedHandler(event, person.id)}/>
              })}
          </div>
         )
         style.backgroundColor = 'red'
    }
    const classes = []
    if(this.state.persons.length <= 2){
      classes.push('red')
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }
    
    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Person</button>
        <Cockpit 
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}  
        clicked={this.togglePersonHandler}
        login={this.loginHandler}/> 
        <AuthContext.Provider value={this.state.authenticated}>
        {persons}
        </AuthContext.Provider>
        </Aux>
      <div>
         <button onClick={this.switchCounterHandler}>Count</button>
          <p>{this.state.counter}</p>
      </div>
        <h1>Hi, I am React App</h1>
        <p className={classes.join(' ')}>This is really working</p> 
         <button onClick={this.swithNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
        <button 
        style ={style}
        onClick={() => this.swithNameHandler('Maximillian')}>Switch Name</button> 
        <button 
        style ={style}
        onClick={this.togglePersonHandler}>Toggle Person</button>
        
         {person} 
        {
          this.state.newPerson === true ?
            <div>
                <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
                <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.swithNameHandler.bind(this, 'Max!')}
                change={this.changeNameHandler}>My Hobbies: Racing</Person>
                <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
            </div> : null
        }


        
         <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.swithNameHandler.bind(this, 'Max!')}>My Hobbies: Racing</Person> 
         <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.swithNameHandler.bind(this, 'Max!')}
        change={this.changeNameHandler}>My Hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/> 
        <Person title="My First Post"></Person> 
      

     
    );
    return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi I am React App'))
  }
}

export default withClass(App, "App");

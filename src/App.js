import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    counter : 1
  }
  state = {
    persons : [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age:26}
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
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age:28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age:27}
      ]
    })  }

    togglePersonHandler =() => {
      const doesShow = this.state.showPersons
      this.setState({showPersons: !doesShow})
    }
  switchCounterHandler = () =>{
    this.setState({
      counter:  this.state.counter + 1
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
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
              {this.state.persons.map(person =>{
                return <Person
                name={person.name}
                age={person.age}/>
              })}
          </div>
         )
    }
    return (
      // <div>
      //    <button onClick={this.switchCounterHandler}>Count</button>
      //     <p>{this.state.counter}</p>
      // </div>

      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working</p>
        <button onClick={this.swithNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
        <button 
        style ={style}
        onClick={() => this.swithNameHandler('Maximillian')}>Switch Name</button>
        <button 
        style ={style}
        onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
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
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi I am React App'))
  }
}

export default App;

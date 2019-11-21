import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'React',
  //     userName: 'MohanRajVelan',
  //     todos: []
  //   };
  // }
  state = {
      name: 'React',
      userName: 'MohanRajVelan',
      todos: []
  }
//https://www.techiediaries.com/react-json-fetch-rest-api-bootstrap/
//https://jsonplaceholder.typicode.com/posts/1/comments
// https://jsonplaceholder.typicode.com/albums/1/photos
// https://jsonplaceholder.typicode.com/users/1/albums
// https://jsonplaceholder.typicode.com/users/1/todos
// https://jsonplaceholder.typicode.com/users/1/posts
// componentDidMount it is one of the life cyle method
  getDataFromPlaceholder() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
      //alert(this.state.todos)
    })
    .catch(console.log)
    alert('hai')
    
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <h4>Welcome  {this.state.userName}</h4>
        <p>
          Start editing to see some magic happen :)
        </p>
         <button
        className="square"
        onClick={this.getDataFromPlaceholder}
      >
        Fetch Dummy  Place Holder Data
      </button>
      /*---------------*/
      <div className="container">
        <div className="col-xs-12">
        <h1>My Todos</h1>
        {this.state.todos.map((todo) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
              { !todo.completed &&
                <span>
                  Pending
                </span>
              }              
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
      /*----------------*/
      
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

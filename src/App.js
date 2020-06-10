import React, { Component } from "react";

import axios from 'axios'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filter:false
    };
  }
  

roo=()=>{
  this.setState({filter: !this.state.filter})
  console.log(this.state)
}
 getData=()=>{
  let item = axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response.data);//console log di sola verifica
      this.setState({
        posts: response.data.slice(0,90)//slice per dire da dove a dove estrarre
      })
    }) 
    .catch(err => {
      console.log(err)
    })
    let myArray = this.state.posts;
    myArray.push(item);
    this.setState({ data: myArray });
  
  
}

  /* componentDidMount() {
    let item = axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response.data);//console log di sola verifica
      this.setState({
        posts: response.data.slice(0,90)//slice per dire da dove a dove estrarre
      })
    }); 
    let myArray = this.state.posts;
    myArray.push(item);
    this.setState({ data: myArray });
  };
   */
  

  render() {

    const { posts } = this.state;

    const postList = posts.length ? (
      posts.map(post => {   
        let foo = <div className="post card" key={post.id}>
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.body}</p>
        </div>
      </div>     
        return(
          foo
        )
      })) : (<div className="center">no post</div>)


    return (
      <div>
        <Header/>
      <React.Fragment>
        <button onClick={this.getData}>premi</button>
      </React.Fragment>
      <div>      
         <div className="text-center">{postList}</div>
      </div>
      </div>
    );
  }
}

export default App;

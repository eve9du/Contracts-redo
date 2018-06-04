import React, { Component } from "react";
import "./App.css";
import Form from "./Form.js";
import firebase from "./firebase.js";
import Display from "./Display.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      company: "",
      contract: "",
      items: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
          company: items[item].company,
          contract: items[item].contract
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      name: this.state.name,
      company: this.state.company,
      contract: this.state.contract
    };
    itemsRef.push(item);
    this.setState({
      name: "",
      company: "",
      contract: ""
    });
  }

  render() {
    return (
      <div className="contracts">
        <Form
          items={this.state.items}
          name={this.state.name}
          company={this.state.company}
          contract={this.state.contract}
          click={this.handleSubmit}
          change={this.handleChange}
        />

        <Display items={this.state.items} />
      </div>
    );
  }
}

export default App;

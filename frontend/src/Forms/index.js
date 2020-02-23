import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

import './index.css'

class Forms extends React.Component {
  constructor() {
    super();
    this.state = { inputFieldOne: "iamgk5296", inputFieldTwo: "RamKishorBajpai", apiResult: [], isLoading:null }
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    console.log("Submit button clicked", e);
    this.doApiCall();
  }

  doApiCall() {
    let data = { user1: this.state.inputFieldOne, user2: this.state.inputFieldTwo };
    this.setState({isLoading: true});

    fetch(`http://localhost:5200/api/v1/mutual/friends?user1=${data.user1}&user2=${data.user2}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ apiResult: json, isLoading:false })
      });
  }

  renderResult() {
    let result = this.state.apiResult.map((item)=>{
    return <li>
      <div className="profileCont">
        <div className="imgCont" style={{backgroundImage: "url(" + item.profileImage + ")"}}></div>
        <div className="nameCont">{item.name}</div>
        <div className="userNameCont">@{item.screenName}</div>
      </div>
      </li>
    })
    console.log("Running", result)

    if (this.state.apiResult.length > 0 && !this.state.isLoading) {
      return <ul>{result}</ul>
    }
    else if(this.state.isLoading){
      return <ul><li>Mutual friend lists are Loading..., Please wait for some time</li></ul>
    }
    else{
      return <ul><li>Input Data and Submit...</li></ul>
    }
    
  }

  render() {
    return (
      <div className="row">
        <div className="col-4 fieldContStyles">
          <input className="inputStyles" required type="text" placeholder='First user name' name='inputFieldOne' value={this.state.inputFieldOne} onChange={(e) => this.handleChange(e)} />

          <input className="inputStyles" required type="text" placeholder='Seconed user name' name='inputFieldTwo' value={this.state.inputFieldTwo} onChange={(e) => this.handleChange(e)} />
          <Button className="btnStyles" onClick={(e) => this.handleSubmit(e)}>Submit</Button>
        </div>


        <div className="col-8 resultContStyles">
          {this.renderResult()}
        </div>


      </div>
    )
  }
}

export default Forms;
import React from 'react'
import './App.css'
import BillprofilePic from './assets/Bill-Gates.jpg'
import JeffprofilePic from './assets/Jeff-Bezos.jpg'

class Profile extends React.Component {
  state = {
    fullName : "Jeff Bezos",
    bio : "Jeff Bezos , byname of Jeffrey Preston Bezos, (born January 12, 1964, Albuquerque, New Mexico, U.S.), American entrepreneur who played a key role in the growth of e-commerce as the founder and chief executive officer of Amazon.com, Inc., an online merchant of books and later of a wide variety of products.",
    imgSrc : JeffprofilePic , 
    profession : "Entrepreneurship , Businessperson , Investor , Computer scientist" ,
    show : false,
    time: 0
  };

  componentDidMount(){
    setInterval(() => this.setState({time:this.state.time+1}) , 1000)
  }

  render() {

    var MyStyle = {
      width: "40%",
      height: "40%",
      marginLeft: "30%",
      marginTop: "1%",
      marginBottom: "1%",
      border: "solid 1px black",
      borderRadius: "25px",
      backgroundColor: "#eee",
  }

  var ItemStyle = {
      margin: "5%"
  }

  var ButtonStyle = {
      color: "white",
      borderRadius : "5px",
      border : "none",
      backgroundColor : "#0d6efd",
      padding: "5px"
  }

    return <>
      {(this.state.show === true) ? 
      <div style={MyStyle} >
      <img src={this.state.imgSrc} width="100%"  height="350px"  alt="Jeff Bezos Profile Picture" />
      <div style={ItemStyle} >
          <h1>{this.state.fullName}</h1>
          <h3>{this.state.profession}</h3>
          <p>{this.state.bio}</p>
          <button style={ButtonStyle} onClick={() => {this.setState({show:false})}}>Click Me</button>
          <center><h4>the component have been mounted for : {this.state.time} s</h4></center>
      </div>
    </div>
      :<div style={MyStyle} >
        <img src={BillprofilePic} width="100%"  height="350px" alt="Bill Gate Profile Picture" />
        <div style={ItemStyle} >
            <h1>Bill Gates</h1>
            <h3>Computer scientist , Entrepreneurship , Invention</h3>
            <p>Bill Gates is a technologist, business leader, and philanthropist. He grew up in Seattle, Washington, with an amazing and supportive family who encouraged his interest in computers at an early age. He dropped out of college to start Microsoft with his childhood friend Paul Allen.</p>
            <button style={ButtonStyle} onClick={() => {this.setState({show:true})}}>Click Me</button>
            <center><h4>the component have been mounted for : {this.state.time} s</h4></center>
        </div>
      </div>
      }
      </>
  }
}

class App extends React.Component {

  render() {
    return <>
      <Profile />
    </>
  }
}

export default App;

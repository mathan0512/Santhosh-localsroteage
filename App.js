// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
// import { render } from '@testing-library/react';
// class App extends Component{
//   constructor (Props) {
//     super(Props);
//     this.state = {
//       // clicks:0,show : true
//       UserId:'',
//       UserName:'',
//       Address:'',
//       Mobileno:'',
//       show : true

//       };


//   }


// inc = () => {
//   this.setState({
//     clicks:this.state.clicks+1
//   });
// }

// UserId= e => {
//   this.setState({ UserId: e.target.value });

// }

// UserName= e => {

//   this.setState({ UserName: e.target.value });

// }

// Address= e => {

//   this.setState({ Address: e.target.value });

// }

// Mobileno= e => {


//   this.setState({ Mobileno: e.target.value });

// }

// Clear = () =>{
//   this.setState({show : this.state.UserId = ''})
//   this.setState({show : this.state.UserName = ''})
//   this.setState({show : this.state.Address = ''})
//   this.setState({show : this.state.Mobileno = ''})

// }


// render(){
//   return(
//     <div>
        
//         <label>User Id</label>
//         <input type ="text" id="User   Id" value={this.state.UserId} onChange={this.UserId} ></input> <br></br>
//         <br></br>
//           <br></br>
//         <label>User Name</label>
//         <input type ="text" id="UserName" value={this.state.UserName} onChange={this.UserName} ></input> <br></br>
//           <br></br>
//           <br></br>
//         <label>Address</label>
//         <input type ="text" id="Address" value={this.state.Address} onChange={this.Address} ></input> <br></br>
//           <br></br>
//           <br></br>
//         <label>Mobile No</label>
//         <input type ="text" id="Mobile No" value={this.state.Mobileno} onChange={this.Mobileno} ></input> <br></br>
//           <br></br>
//           <br></br>
//         <button onClick={this.inc}> Submit</button>
//         {/* <span>{this.state.clicks }</span> */}
//         <br></br>
//         <button onClick={this.Clear}>Clear</button>
//         <br></br>
//         <span>User ID:{this.state.UserId}</span><br></br>
//         <span>User Name:{this.state.UserName}</span><br></br>
//         <span>Address:{this.state.Address}</span><br></br>
//         <span>MobileNo:{this.state.Mobileno}</span><br></br>
        
//     </div>
//   );
// }                
// }
// export default App;
import './App.css';
// import FormDataComponent from './components/form-data-component';
//  import Add from './components/Add';
import Taskapp from './components/Taskapp';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'C:/react-local-storage/node_modules/bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  return (
    <div className="App">
        <Taskapp />
      {/* <header className="App-header">Hello world</header> */}
      </div>
  );
}
 
export default App;
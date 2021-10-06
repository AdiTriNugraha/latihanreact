import './App.css';
// import Beranda from "./Component/Fungsional/Class/Beranda";
// import Home from "./Component/Fungsional/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./Component/NavbarComp";
import FooterComp from "./Component/FooterComp"; 
import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      tittle:'React Simple CRUD',
      act:0,
      index:'',
      datas: []
    }
  }

    componentDidMount(){
      this.refs.name.focus(); 
    }

    fSubmit = (e) =>{
      e.preventDefault();
      console.log('try');
    
   

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    let typebaju = this.refs.typebaju.value;

    if (this.state.act === 0) { //new
      let data = {
        name,address,typebaju
    }
    datas.push(data);
  }else{
    let index = this.state.index;
    datas[index].name = name;
    datas[index].address = address;
    datas[index].typebaju = typebaju;

  }
    this.setState({
      datas:datas,
      act:0
    });
  
    this.refs.myform.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    });
    this.refs.myform.reset();
    this.refs.name.focus();
  }
  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.refs.typebaju.value = data.typebaju;

  

    this.setState({
      act:1,
      index: i
    })
  }

  render() {
    let datas =this.state.datas;
    return (
      
        <div className="App">
          <NavbarComp />
          <h2>{this.state.tittle}</h2>
          <form ref="myform" className="myform">
            <input type="text" ref="name" placeholder="your name" className="formfield" required />
            <input type="text" ref="address" placeholder="your address" className="formfield" />
            <input type="text" ref="typebaju" placeholder="pilih Type Baju" className="formfield" />

            <button onClick={(e)=> this.fSubmit (e)} className="myButton">Pesan</button>
          </form>
          
          <pre>
            <table>
            {datas.map((data, i) =>
            <li key={i} className="mylist" >
              {i+1}.{data.name}  ||  {data.address}  ||  {data.typebaju} <tr/>
              <button onClick={()=> this.fRemove (i)} className="myListButton mx-4">Hapus</button>
              <button onClick={()=> this.fEdit (i)} className="myListButton mx-5">Edit</button>
            </li>
            
            )}
            </table>
          </pre>
          <FooterComp />
        </div>
 
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <NavbarComp />
//       <App />
//       <FooterComp />
//     </div>
//   );
// }

export default App;

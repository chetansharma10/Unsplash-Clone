import React, { Component } from 'react'
import {Link,Switch} from 'react-router-dom';
import store from '../ReduxStates/store'


export default class Header extends Component {

  constructor(){
    super();
    this.state={
      value:"",
    }
  }


 


  handleSubmitByClick(e){

    e.preventDefault();
    this.setState({
      value:this.state.value,
    })

    store.dispatch({
      type:"INPUT",
      payload:{
        value:this.state.value,
      }
    })

    

  }
  handleSubmitByKey(e){
    if(e.key==="Enter" && this.state.value!==""){

    
    this.setState({
      value:this.state.value,
    })

    store.dispatch({
      type:"INPUT",
      payload:{
        value:this.state.value,
      }
    })

  }
  }



    render() {
      
        return (
           

              <div className="navbar">                 

                 <div className="topNav">
                    <div className="logo">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdU8j5S_GOESQCRNnvgwGdIeIJ0eBNTa4KNLJ&s=0" alt="logo"></img>          
                    </div>

                    <div className="others">
                     

                          <button type="submit"  onClick={(e)=>{this.handleSubmitByClick(e)}} >
                               <Switch><Link to={{

                                   pathname:"/search",
                                   aboutProps:{
                                     value:this.state.value,
                                   }


                               }}>
                                            <span className="material-icons">
                                                search
                                            </span>
                                       </Link>
                               </Switch>
                          </button>

                          <input type="text" onKeyPress={(e)=>{this.handleSubmitByKey(e)}}  value={this.state.value} onChange={(e)=>{ this.setState({value:e.target.value} ) }}  placeholder="Search free high-resolution photos" >
                          </input> 
                 

                    </div>

                    <div className="links">
                      <Switch>
                        <Link className="link" to="/">Home</Link>
                      </Switch>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://unsplash.com/brands" className="link">Brands</a>

                    </div>

                 </div>
 
                 <Switch >
                 <div className="bottomNav">

                    
                        <Link className="linkUnderlined editorial" to="/">Editorial</Link>
                        <div className="scrollList">
                            <Link className="linkUnderlined" to="/wallpapers">Wallpapers</Link>
                            <Link className="linkUnderlined" to="/nature">Nature</Link>
                            <Link className="linkUnderlined" to="/people">People</Link>
                            <Link className="linkUnderlined" to="/architecture">Architecture</Link>
                            <Link className="linkUnderlined" to="/currentEvents">Events</Link>
                            <Link className="linkUnderlined" to="/experimental">Experimental</Link>
                            <Link className="linkUnderlined" to="/fashion">Fashion</Link>
                            <Link className="linkUnderlined" to="/film">Film</Link>
                            <Link className="linkUnderlined" to="/health">Health</Link>
                            <Link className="linkUnderlined" to="/tech">Technology</Link>
                            <Link className="linkUnderlined" to="/animals">Animals</Link>

                            <Link className="linkUnderlined" to="/food">Food</Link>
                            <Link className="linkUnderlined" to="/history">History</Link>
                            <Link className="linkUnderlined" to="/arts">Arts</Link>
                            <Link className="linkUnderlined" to="/spirit">Spirituality</Link>
                            <Link className="linkUnderlined" to="/athletics">Athletics</Link>


                            <Link className="linkUnderlined" to="/business">Business</Link>
                            <Link className="linkUnderlined" to="/texture">Texture</Link>
                            <Link className="linkUnderlined" to="/travel">Travel</Link>


                        </div>











                 </div>
                 </Switch>


              </div>


        )
    }
}

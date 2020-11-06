import React, { Component } from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom';



class Rooted extends Component {
    render() {
        return (
            <div>
                <App></App>
            </div>
        )
    }
}



ReactDom.render(
<BrowserRouter>
    
         <Rooted></Rooted>
   
</BrowserRouter>
,document.getElementById('root'));

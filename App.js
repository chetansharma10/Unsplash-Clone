import React, { Component } from 'react'
import Header from './Components/Header'
import RouterParent from './Components/RouterParent/RouterParent'

export default class App extends Component {


    render() {

        return (
            
            <div>
              <Header></Header>
              <RouterParent></RouterParent>
              

            </div>
        )
    }
}

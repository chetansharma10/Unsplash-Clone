import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import SearchedItem from '../RouterChildren/SearchedItem'
import Home from '../RouterChildren/Home';

import Wallpaper from '../RouterChildren/Wallpaper'
import Nature from '../RouterChildren/Nature'
import People from '../RouterChildren/People'
import Architecture from '../RouterChildren/Architecture'
import CurrentEvents from '../RouterChildren/CurrentEvents'
import Experimental from '../RouterChildren/Experimental' 
import Fashion from '../RouterChildren/Fashion'
import Film from '../RouterChildren/Film'
import Health from '../RouterChildren/Health'
import Tech from '../RouterChildren/Tech'
import Animals from '../RouterChildren/Animals'
import Food from '../RouterChildren/Food';
import History from '../RouterChildren/History'
import Arts from '../RouterChildren/Arts'
import Athletics from '../RouterChildren/Athletics'
import Spirit from '../RouterChildren/Spirit'
import Travel from '../RouterChildren/Travel'
import Texture from '../RouterChildren/Texture'
import Business from '../RouterChildren/Business'


export default class RouterParent extends Component {



    render() {
      
        return (
            <center>
            
             
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/wallpapers' component={Wallpaper}></Route>
                        <Route exact path='/nature' component={Nature}></Route>
                        <Route exact path='/people' component={People}></Route>
                        <Route exact path='/architecture' component={Architecture}></Route>
                        <Route exact path='/currentEvents' component={CurrentEvents}></Route>
                        <Route exact path='/experimental' component={Experimental}></Route>
                        <Route exact path="/fashion" component={Fashion}></Route>
                        <Route exact path="/film" component={Film}></Route>
                        <Route exact path="/health" component={Health}></Route>
                        <Route exact path="/tech" component={Tech}></Route>
                        <Route exact path="/animals" component={Animals}></Route>
                        <Route exact path="/food" component={Food}></Route>
                        <Route exact path="/spirit" component={Spirit}></Route>
                        <Route exact path="/athletics" component={Athletics}></Route>
                        <Route exact path="/arts" component={Arts}></Route>
                        <Route exact path="/history" component={History}></Route>
                        <Route exact path="/business" component={Business}></Route>
                        <Route exact path="/travel" component={Travel}></Route>
                        <Route exact path="/texture" component={Texture}></Route>

                        <Route exact path="/search" component={SearchedItem}></Route>
               
           
            </center>
        )
    }
}

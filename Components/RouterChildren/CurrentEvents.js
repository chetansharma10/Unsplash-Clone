import React, { Component } from 'react'
import axios from 'axios';
import ImageShower from  './HomeChild/ImageShower' 

import CommonLink from './HomeChild/CommonLink';
export default class CurrentEvents extends Component {


    constructor(){
        super();
        this.state={
            totalResults:0,
            ImageData:[],
            heading:"Current Events",
            lineOne:"Covering the latest important events and news-worthy moments from",
            lineTwo:"the world — including climate protests, pride parades, holiday",
            lineThree:"and more.",

    
        }
    }
    componentDidMount(){

        axios.get("https://api.unsplash.com/search/photos/?client_id=HJWlpMSeFBSjJnR4mrPWQa96FH-zC_6GLgbgnB33LvU&query=CurrentEvents&per_page=40&orderby=popular")
        .then(response=>{
    


            this.setState({
                totalResults:response.data.total,
                ImageData:response.data.results,
              
            })


        })
        .catch(error=>{
            console.log("Error",error);
        })



    }



    render() {


                        
        return (

            <React.Fragment>
              <CommonLink 
                        ImageData={this.state.ImageData}
                        totalResults={this.state.totalResults}
                        heading={this.state.heading}
                        lineOne={this.state.lineOne}
                        lineTwo={this.state.lineTwo}     
                        lineThree={this.state.lineThree}        
              >
              </CommonLink>
              <ImageShower latestImageData={this.state.ImageData}></ImageShower>
            </React.Fragment>
        )
    }
}

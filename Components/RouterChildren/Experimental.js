import React, { Component } from 'react'
import axios from 'axios';
import ImageShower from  './HomeChild/ImageShower' 

import CommonLink from './HomeChild/CommonLink';
export default class Experimental extends Component {


    constructor(){
        super();
        this.state={
            totalResults:0,
            ImageData:[],
            heading:"Experimental",
            lineOne:"Through the use of unlikely textures, intriguing subject matter, and newto",
            lineTwo:"formats — photography has the power to challenge our perspectives",
            lineThree:"push creativity forward.",

    
        }
    }
    componentDidMount(){

        axios.get("https://api.unsplash.com/search/photos/?client_id=HJWlpMSeFBSjJnR4mrPWQa96FH-zC_6GLgbgnB33LvU&query=experimental&per_page=40&orderby=popular")
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

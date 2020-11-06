import React, { Component } from 'react'
import ImageShower from '../RouterChildren/HomeChild/ImageShower'
import axios from 'axios';
export default class SearchedItem extends Component {
    constructor(){
        super();
        this.state={
            searchReq:"",
            ImageData:[],
            totalResults:0,
        }
   
    }
    componentDidMount(){
        console.log("Mounted")
    }


    render() {

        axios.get("https://api.unsplash.com/search/photos/?client_id=HJWlpMSeFBSjJnR4mrPWQa96FH-zC_6GLgbgnB33LvU&query="+this.props.location.aboutProps.value+"&per_page=40&orderby=popular")
        .then(response=>{
    

 
            

            this.setState({
                totalResults:response.data.total,
                ImageData:response.data.results,
              
            })


        })
        .catch(error=>{
            console.log("Error",error);
        })

       
        return (
            <React.Fragment>
            <div className="searchBoxOut">
                {
                    this.props.location.aboutProps.value===""||this.state.totalResults===0?<h1>No Results Founded</h1>:
                    <h1>{this.props.location.aboutProps.value}</h1>
                }
            </div>
            
            <ImageShower latestImageData={this.state.ImageData}></ImageShower>
            </React.Fragment>
        )
    }
}

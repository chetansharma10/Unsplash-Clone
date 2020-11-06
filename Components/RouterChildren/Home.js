import React, { Component } from 'react'
import axios from 'axios'
import ImageShower from './HomeChild/ImageShower' 
import store from '/home/chetan/Desktop/my-app/src/ReduxStates/store.js'
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            searchReq:"",
            randomImage:"",
            userRandomImage:"",
            latestImageData:[],


            containerSearchValue:"",
            totalSearchedResults:0,




        }
    }

    submitRequestByClick(){
        this.setState({
            containerSearchValue:this.state.containerSearchValue,
        })
        this.searchImages(this.state.containerSearchValue,this.latestImageData);

    }


    submitRequestByKey(e){
        if(e.key==='Enter' ){
            this.setState({

                containerSearchValue:this.state.containerSearchValue,
            })
            this.searchImages(this.state.containerSearchValue,this.latestImageData);
        }
    }



    searchImages(value){
       
        if(value!==""){



            axios.get("https://api.unsplash.com/search/photos/?client_id=HJWlpMSeFBSjJnR4mrPWQa96FH-zC_6GLgbgnB33LvU&query="+value+"&per_page=40")
            .then(response=>{
    
    
             
            console.log("By Search",response.data,"Results available",response.data.total)
             this.setState({
                
                 latestImageData:response.data.results,
                 totalSearchedResults:response.data.total,
             })
             
    
    
    
            })
            .catch(error=>{
                console.log(error)
            })
        

     
            
        }
        else{
            axios.get("https://api.unsplash.com/photos/?client_id=HJWlpMSeFBSjJnR4mrPWQa96FH-zC_6GLgbgnB33LvU&order_by=popular&per_page=1000")
            .then(response=>{
    
    
             
             this.setState({
                 randomImage:response.data[2].urls.full,
                 userRandomImage:response.data[2].user.name,
                 latestImageData:response.data
             })
             
    
    
    
            })
            .catch(error=>{
                console.log(error)
            })
        }

    }




    componentDidMount(){
        axios.get("https://api.unsplash.com/photos/?page=1&client_id=HJWlpMSeFBSjJnR4mrPWQa96FH-zC_6GLgbgnB33LvU&order_by=popular&per_page=1000")
        .then(response=>{


         
         this.setState({
             randomImage:response.data[9].urls.full,
             userRandomImage:response.data[2].user.name,
             latestImageData:response.data
         })
         



        })
        .catch(error=>{
            console.log(error)
        })


    }











  
    render() {


      
        store.subscribe(()=>{
           
            this.setState({
                searchReq:store.getState().value,
            })

        })





        const image=this.state.randomImage;
        var imageStyle={

            backgroundImage:"url("+image+")",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            backgroundOrientation:"center"

        };


      




        return (
            <div>
                <div className="containImage" style={imageStyle} >
                    <div className="head">
                    
                            <h1 className="tit">Unsplash</h1>
                            <h1 className="tit2">The internet’s source of freely-usable images.</h1>
                            <h1 className="tit2">Powered by creators everywhere.</h1>

                    </div>
                    <div className="searchArea">
                        <button onClick={()=>{this.submitRequestByClick()} }>
                             <span className="material-icons">
                                search
                             </span>
                        </button>

                        <input type="text"  onKeyPress={(e)=>{this.submitRequestByKey(e)}} value={this.state.containerSearchValue}  onChange={(e) => {  this.setState({ containerSearchValue:e.target.value,})    } }  placeholder="Search free high-resolution photos" ></input>
                          
                    </div>
                    <br></br>
                    <div className="photoDay">
                         <small className="author">Photo of the Day by <strong style={{color:"white"}}>{this.state.userRandomImage}</strong> </small>  
                    </div>
                </div>    



{


  this.state.containerSearchValue!==""?
  
               <React.Fragment>

               <div className="parentChild">
                        <span class="material-icons">
                        image
                        </span>
                        <span>Total Results {this.state.totalSearchedResults}</span>
                </div>
               <div className="parentBox">
                    <h1 className="parenthead" style={{textTransform:"capitalize"}}>{this.state.containerSearchValue}</h1>
                </div>

                </React.Fragment>
                :
                null


}
                <ImageShower latestImageData={this.state.latestImageData}></ImageShower>












            </div>
        )
    }
}

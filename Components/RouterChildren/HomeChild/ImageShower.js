import React, { Component } from 'react'

export default class ImageShower extends Component {
    render() {
        return (

                
                <div className="latestImagesGrid">
                    <div className="imagesCorner">

                    {

                    this.props.latestImageData.map((item,index)=>{
                  

                        const downloadImage="https://unsplash.com/photos/"+item.id+"/download?force=true";

                        var styleImage;
                        if(index%2!==0){
                           
                            styleImage={
                                
                                width:"362.5px",
                                height:"720px",                               
                                backgroundImage:"url("+item.urls.regular+")",
                                backgroundSize:"cover",
                                backgroundRepeat:"no-repeat" ,
                                backgroundPosition:"center",

                            }

                            

                        }
                        else{
                           
                            styleImage={
                            
                                
                                width:"362.5px",
                                height:"362.5px",
                                backgroundImage:"url("+item.urls.small+")",
                                backgroundSize:"cover",
                                backgroundPosition:"center",
                                
                                backgroundRepeat:"no-repeat" ,
                            }
                        }




                 
                     return (

                     <div  key={item.id} className="imageComponent" style={styleImage}>



                         <div className="hoveredElement">
                          
                            <div className="userArea"   >
                              
                              <div className="UserId" style={{ backgroundImage:"url("+item.user.profile_image.medium+")",backgroundSize:"cover",backgroundRepeat:"no-repeat"  }}   >
                                <a href={item.user.links.html}></a>
                              </div>

                              <div className="UserAbout">
                                  <a href={item.user.links.html} style={{color:"white",textTransform:"capitalize",marginLeft:"5px",fontFamily:"sans-serif"}}>{item.user.username}</a>
                              </div>
                              

                            </div>

                            <div className="downloadButton">
                            
                                <button className="buttonhover">
                                    <a href={downloadImage} className="buttonAnchor">
                                        <span class="material-icons">
                                        south
                                        </span>
                                    </a>
                                </button>

                            </div>

                         </div>

                     </div>
                     
                     )



                    })

                    }




                      

                    </div>
                </div>      
              
        )
    }
}

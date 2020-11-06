import React, { Component } from 'react'

export default class CommonLink extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="wallpaperParent">
                
                <div className="wallpaperBlock" >
                <h1 >{this.props.heading}</h1>
                <p>{this.props.lineOne}</p>
                <p>{this.props.lineTwo}</p>
                <p>{this.props.lineThree}</p>
                </div>

                <div className="wallpaperStatus">
                    <div className="aboutStatus">

                    <div className="element">

                        <div className="left spark" >
                                <span class="material-icons">
                                    flash_on
                                </span>
                                &nbsp;
                                &nbsp;
                                <p>Status</p>
                        </div>

                        <div className="right">
                            <span className="open">
                                Open
                            </span>
                        </div>

                    </div>








                    <div className="element">

                        <div className="left">
                                <span class="material-icons">
                                    account_circle
                                </span>
                                &nbsp;
                                &nbsp;
                                <p>Curator</p>
                        </div>

                        <div className="right">
                            <span>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdU8j5S_GOESQCRNnvgwGdIeIJ0eBNTa4KNLJ&s=0" alt="logo"></img>                        
                            </span>
                        </div>

                    </div>


                    <div className="element">

                        <div className="left">
                                <span class="material-icons">
                                insert_photo
                                </span>
                                &nbsp;
                                &nbsp;
                                <p>Curator</p>
                        </div>

                        <div className="right">
                            <span style={{color:"black",fontFamily:"sans-serif",fontWeight:"bolder",fontSize:"13px"}}>
                                {this.props.totalResults}        
                            </span>
                        </div>

                    </div>


                    <div className="elementLS">

                        <div className="left">
                                <span class="material-icons">
                                    group
                                </span>
                                &nbsp;
                                &nbsp;
                                <p>Top Contributors</p>
                        </div>

                        <div className="right">
                            {
                                this.props.ImageData.map((item,index)=>{
                                    if(index===0 || index===1 || index===2 || index===3 ||index===4)
                                    {
                                        return(
                                        <React.Fragment>
                                            <span key={index} className="righter" style={{ backgroundImage:"url("+item.user.profile_image.medium+")",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}} ></span>&nbsp;
                                        </React.Fragment>
                                        )
                                    }
                                  
                                })
                            }
                    


                        </div>

                    </div>








                    </div>
                </div>


            
            </div>                
            </React.Fragment>
        )
    }
}

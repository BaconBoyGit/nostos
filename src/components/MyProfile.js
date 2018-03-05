import React from 'react';
import './MyProfile.css';


//Creates the user profile page that displays applications 
class MyProfile extends React.Component {

    

    render() {
        var userName = "Bob";
       
       
       
        return(
            <div className="profile">

            <h1 class="hro-t" id="name"> <font color = "black" size="6" >{userName}'s Profile</font></h1>
            <div class="hro-t" id="info"> <font color = "gray" size="5">Current Applications:</font>
            </div>
            
           


            </div>
        )
    }
}


export default MyProfile;
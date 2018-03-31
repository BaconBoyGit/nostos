import React from 'react';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



//This class creates the primary application form that is filled out for the permit

class application extends React.Component {
    render () {   

        //formats date box
        const date = {
            width: "5000px"
          };

        return (        
            <div className ="App">  

            <form action="#" method="GET">
            <h1 class="hro-t"> <font color = "black" size="6" >Apply for New Permit</font></h1>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="address" class="txt-l txt-l--mt000">Address Moving into or out of</label>
                <input id="address" type="text" placeholder="Address" class="txt-f" required/>
            </div>
            </div>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="start" class="txt-l txt-l--mt000">Select Start Time</label>
                <div class="sel-c sel-c--fw">
                <select name="time" id="time" class="sel-f">
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="8:30 AM">8:30 AM</option>
                    
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>

                    <option value="4:00 PM">4:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                </select>
                </div>
            </div>
            </div>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="end" class="txt-l txt-l--mt000">Select End Time</label>
                <div class="sel-c sel-c--fw">
                <select name="time" id="time" class="sel-f">
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="8:30 AM">8:30 AM</option>
                    
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>

                    <option value="4:00 PM">4:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                </select>
                </div>
            </div>
            </div>  
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="date" style = {date} class="txt-l txt-l--mt000">Date</label>
                <input id="date" type="text" placeholder="mm/dd/yyyy" class="txt-f" required/>
            </div>
            </div>  
            <div class="m-v400 m-h200">
            <Link to="/status" className="nv-h-l-a nv-h-l-a--k--s tr-link">Submit</Link>
            </div>
        </form>    


            </div>
        
            
               )
    }
}

export default application;
import React, { Component } from "react";
import './App.css';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
class HomePage extends Component {

  state = {
    date: new Date(),
    time: '10:00'
  }
 
  onChange = date => this.setState({ date })
  onChange1 = time => this.setState({ time })

  render() {
    return (
      <div>
        <div className="nav">
         <div className="nav-element">
          <div className="nav-element1">
            <img src={require("./ustech1.png")} alt="banner" height="80" width="80"/>
          </div>
          <div className="nav-element2">
          </div>
            <div className="nav-element3">
            <div className="nav-element3-1">
            <a href="#" className="link1" >Notifications</a>
            <div class="dropdown-content">
            <a href="#" className="navlink1">Hello World!</a>
            <hr/>
            <a href="#">Hello World!</a>            
            </div>

            </div>
            <a href="#" className="link1" >
            <div className="nav-element3-2">
          
  
            </div>
            </a>
            </div>
           
           </div>
  
        </div>
        
       
          <div className="main">
          <div >
            <a href="#">
          <img src={require("./email (2).png")} alt="banner"/>
          <p className="elements">outpass</p>
          
          </a>
          <div className="highlighter"></div>
          </div>
          <div >
          <a href="#">
          <img src={require("./email (2).png")} alt="banner"/>
          <p className="elements">Feeds</p>
          </a>
          </div>
          <div>
          <a href="#">
          <img src={require("./email (2).png")} alt="banner"/>
          <p className="elements">Status</p>
          </a>
          </div>
          <div>
          <a href="#">
          <img src={require("./email (2).png")} alt="banner"/>
          <p className="elements">Mess</p>
          </a>
          </div>
          <div>
          <a href="#">
          <img src={require("./email (2).png")} alt="banner"/>
          <p className="elements">Sports</p>
          </a>
          </div>
          </div>
          <div className="overlay">
          <div className="form1">Fill your outpass</div>
          <form>
            <div className="text-text">
            <div>
            <input className="text1" type="text" placeholder="First Name"/>
            </div>
            <div>
            <input className="text1" type="text" placeholder="Last Name"/>
            </div>
            <div>
            <input className="text1" type="text" placeholder="USN"/>
            </div>

             
            </div>

             <div className="text-text">
            <div>
            <input className="text1" type="text" placeholder="Room Number"/>
            </div>
            <div>
            <input className="text1" type="text" placeholder="Block"/>
            </div>
            <div>
            <textarea className="text2" type="text" placeholder="Purpose" rows="2" cols="50">

              </textarea>
              </div>
              

              </div>



               <div className="text-text">
            
            
              <div>
                 <p  className="text2">  Indate</p><DatePicker className="text2" placeholder="Purpose"
          onChange={this.onChange}
          value={this.state.date}
        />
                </div>

                <div>
                  <p  className="text2"> Outdate</p><DatePicker className="text2" placeholder="Purpose"
          onChange={this.onChange}
          value={this.state.date}
        />
                </div>


              </div>

               <div className="text-text">
            
            
            <div>
           <p  className="text2"> Intime</p><TimePicker
          onChange={this.onChange1}
          value={this.state.time}
        />
              </div>

              <div>
             <p  className="text2"> Outtime</p><TimePicker
          onChange={this.onChange1}
          value={this.state.time}
        />
              </div>


            </div>
            <div className="btn">
            <button className="submit">submit</button>
            </div>
          </form>
          </div>
       
  
         
         
        
      </div>
      );  }
}

export default HomePage;

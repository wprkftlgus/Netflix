import styled from 'styled-components'
import logo from "./logo.jpg";
import './App.css';
import background from "./background.jpg";
import React, { useState } from 'react';
import popcorn from "./papcorn.png"
import kid from "./kid.png"
import tv from "./tv.png"
import video from "./video-tv.m4v"
import device from "./device.png"
import devices from "./video-devices.m4v" 
import offline from "./offline.jpg"
import boxshot from "./boxshot.png"


function App() { 

  let [modal,setModal] = useState(false);
  const [show,setShow] = useState(false);

  let scroll = document.querySelectorAll("#a");
  let a = document.getElementById("a");
  const 박스 = styled.button`
          color : white;
      `
  window.addEventListener("scroll" , function(){
    let value = window.scrollY;
    if (value > 220) {
      const 박스 = styled.button`
          color : white;
      `
    }
    else if (value > 750) {
     
    }
    else if (value > 1300) {
     
    }
    else if (value > 1900) {
     
    }
  });
  return (
   <content className="content">
    <div className="top-content">
    <div className="top-shader">
    <div className="header">
    <img className="logo"src={logo}></img>
    <a className="login">Sign In</a>
    </div>
    <div className="top-content-rab">
    <div className="vanner">
      <div className="p1">Unlimited movies, TV shows, and more</div>
      <div className="p2">Watch anywhere. Cancel anytime.</div>
      <div className="p3">Ready to watch? Enter your email to create or restart your membership.</div>
      <div className="putbarAndButton">
      <input className="putBar" placeholder="Email address" />
      <button className="startButton">Get Started ></button>
      </div>
    </div>
    </div>
    <div className="membership">
      <div className="grad">
      <div className="grad-rap">
      <img className="popcorn" src={popcorn}></img>
      <div className="set-membership">
      <p className="p1-membership">The Netflix you love for just KRW5,500.</p>
      <p className="p2-membership">Get the Standard with ads plan.</p>
      <button className="inform">Learn More</button>
      </div>
      </div>
      </div>
    </div>

    </div>
    </div>
    
    <div className="mid-content">
      <div className="rab">
      <div className="tv">
       <div className="left-tv">
        <div className="text-h2">Enjoy on your TV</div>
        <p className="text-p">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className="right-tv">
          <img className="image-tv" src={tv}></img>
          <div className="video-rab"><video className="video" src={video} muted autoPlay loop></video></div>
        </div>
        </div>
      </div>
    <div className="horizon"></div>

    <div className="rab">
    <div className="device">
      <div className="left-device">
        <img className="img-device" src={device}></img>
        <div className="video-rab-device"><video className="video-device" src={devices} muted autoPlay loop></video></div>
      </div>
      <div className="right-device">
        <h2 className="text-h2">Watch everywhere</h2>
        <p className="text-p">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
    </div>
    </div>
    <div className="horizon"></div>
    
    <div className="rab">
    <div className="kid">
       <div className="left-kid">
        <h2 className="text-h2">Create profiles for kids</h2>
        <p className="text-p">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
        <div className="right-kid">
          <img className="kid-image" src={kid}></img>
        </div>
    </div>   
      </div>
    <div className="horizon"></div>
     <div className="rab">
      <div className="offline">
      <div className="left-offline">
       <img className="img-offline" src={offline}></img>
       <div className="boxshot">
        <img className="boxshotimg" src={boxshot}></img>
        <div className="stranger">
          <div className="div1-stranger">Stranger Things</div>
          <div className="div2-stranger">Downloading...</div>
        </div>
        <div  className="download"></div>

       </div>
      </div>
      <div className="right-offline">
        <h2 className="text-h2">Download your shows to watch offline</h2>
        <p className="text-p">Only available on ad-free plans.</p>
      </div>
      </div>
    </div>
    <div className="horizon"></div>
    <div className="bottom-content">
     <div className="bottom-rab">
      <h2 className="text-h2-bottom">Frequently Asked Questions</h2>
      <ul className="ul">
        <li onClick={()=>{setShow(!show)}} className={show ? 'ul-li-changed' : "ul-li"}>What can I watch on Netflix?
        <span onClick={()=>{setShow(!show)}} className={show ? 'rotate-yes' : 'rotate-no'}>+</span>
        </li> 
         <div onClick={()=>{setShow(!show)}} className={show ? 'b' : "c"}>
          <p onClick={()=>{setShow(!show)}} className={show ? 'showHidden' : "hide"}>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          <br />
          <br />
          <a className="link1" href="">Check out some of our content</a>
          </p>
         </div>
        
        <li className="ul-li">What is Netflix?</li>
        <li className="ul-li">How much does Netflix cost?</li>
        <li className="ul-li">Where can I watch?</li>
        <li className="ul-li">How do I cancel?</li>
        <li className="ul-li">Is Netflix good for kids?</li>
      </ul>
      <div className="bottom-start">
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <input className="putBar" placeholder="Email address"></input>
        <button className="startButton">Get Started ></button>
      </div>
    </div>
    </div> 
    <div className="horizon"></div>
  </div>
  <footer className="footer">
   <div className="footer-rab">
    <div>Questions? Call <a className="a" href="">080-001-9588</a></div>
    <div>
      <ul className="footer-ul">
        <li className="footer-li"><a href="" className="a">FAQ</a></li>
        <li className="footer-li"><a href="" className="a">Help Center</a></li>
        <li className="footer-li"><a href="" className="a">Account</a></li>
        <li className="footer-li"><a href="" className="a">Media Center</a></li>
        <li className="footer-li"><a href="" className="a">Investor Relations</a></li>
        <li className="footer-li"><a href="" className="a">Jobs</a></li>
        <li className="footer-li"><a href="" className="a">Ways to Watch</a></li>
        <li className="footer-li"><a href="" className="a">Terms of Use</a></li>
        <li className="footer-li"><a href="" className="a">Privacy Statement</a></li>
        <li className="footer-li"><a href="" className="a">Cookie Preferences</a></li>
        <li className="footer-li"><a href="" className="a">Corporate Information</a></li>
        <li className="footer-li"><a href="" className="a">Contact Us</a></li>
        <li className="footer-li"><a href="" className="a">Speed Test</a></li>
        <li className="footer-li"><a href="" className="a">Legal Notices</a></li>
        <li className="footer-li"><a href="" className="a">Only on Netflix</a></li>
      </ul>
    </div>
    <p>Netflix South Korea</p>
    <div>
     <div>Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone: 080-001-9588</div>
     <div>Representative: Reginald Shawn Thompson</div>
     <div>Email: korea@netflix.com</div>
     <div>Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea</div>
     <div>Business registration number: 165-87-00119</div>
     <div>Hosted by: Amazon Web Services Inc.</div>
     <a className="a" href="">KFTC website</a>
    </div>
   </div>
  </footer>
    </content>
  );
}

export default App;

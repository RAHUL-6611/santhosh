import React from "react";

import "./talent.css";

import articleImg from "../../../../components/assets/college_img.jpg";

export default function TalentShowcase(){
    

    return (
        <div>
            <section className="section">
  
  <div className="talent-grid">
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item">
      <div className="item__details">
      National Cadet Corps
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--large">
      <div className="item__details">
      Girl Scouts and Girl Guides 
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--medium">
      <div className="item__details">
      Amateur Radio
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--large">
      <div className="item__details">
      Chess champion
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--full">
      <div className="item__details">
        PTU cricket team
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--medium">
      <div className="item__details">
      Yoga and Meditation
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--large">
      <div className="item__details">
        Ruby cube solver
      </div>
    </div>
    <div style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item">
      <div className="item__details">
        programmer
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--medium">
      <div className="item__details">
        gammer
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--large">
      <div className="item__details">
        cook
      </div>
    </div>
    <div style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item">
      <div className="item__details">
        athelet
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--medium">
      <div className="item__details">
        public speaker
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--large">
      <div className="item__details">
        public speaker
      </div>
    </div>
    <div  style={{"background" : `url("${articleImg}")`, "background-size" : "cover"}} className="item item--medium">
      <div className="item__details">
        public speaker
      </div>
    </div>     
  </div>
  </section>
</div>
        
    )
}
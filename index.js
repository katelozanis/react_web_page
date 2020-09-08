import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ReactPlayer from "react-player";
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    setTheme(color) {
        if( color === "default")
            color = "#262253"

        document
            .documentElement
            .style
            .setProperty("--main-color", color);
    }
 

    render() {
        return (
            <div className="main">
                <div className="section">
                    <div className="section-head">
                      500 DAYS OF SUMMER 

                      TRAILER
                    </div>
                    <div className="section-body">
                        <div>
                          
                        <ReactPlayer
        controls
        url="https://www.youtube.com/watch?v=PsD0NpFSADM!
        
        
        
        "
      />



      <ReactPlayer
        controls
        url="https://www.youtube.com/watch?v=oBxR8cEt2xM&list=PLaFtF62mBZul-rv_KglWoxviJNGQA5Duy&index=36&app=desktop"
      />

                  <ReactPlayer
        controls
        url="https://www.youtube.com/watch?v=Y_qcnmuhueI"
      />     
                       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));

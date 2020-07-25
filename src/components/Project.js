import React, {Component} from 'react';

import './Card.css';


class Project extends Component{
      render(){
        return(
           <div className="card">
                <div className="card-block">
                  <h2>Projects</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <h3 className="h5"> AICVS college club website</h3>
                      <p> Link :  
                      <a href="https://aicvs.pythonanywhere.com">
                        https://aicvs.pythonanywhere.com
                      </a>
                      </p>
                      <p>March 2020</p>
                    </div>
                    <div className="col-md-4">
                      <h3 className="h5">Collge Tech Fest Website</h3>
                      <p> Link :  
                      <a href="https://cumminsfest.in">
                        https://cumminsfest.in
                      </a>
                      </p>
                      <p>January 2020</p>
                    </div>
                    <div className="col-md-4">
                       <h3 className="h5">Filter for Speech Signal Processing</h3>
                      <p> 
                     As part of college course work, designed a filter to filter out noise of a particular frequency from speech file using MATLAB.
                      </p>
                      <p>March 2020</p>
                    </div>
                    <div className="col-md-4">
                       <h3 className="h5">To Do App (Ongoing)</h3>
                      <p> 
                     Creating a simple 'to-do' application using React to demonstrate basic understanding of it.
                      </p>
                      <p>July 2020</p>
                      </div>
                      <div className="col-md-4">
                       <h3 className="h5">Video Forgery Detection (Ongoing)</h3>
                      <p> 
                     As part of college Project for final year, working on algorithm to detect forgery in videos. 
                      </p>
                      <p>July 2020</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              );
      }
}

export default Project;
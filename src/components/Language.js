import React, {Component} from 'react';
import mee  from '../mee.JPG';

import './Card.css';


class Language extends Component{
      render(){
        return(
           <div className="card">
                <div className="card-block">
                  <h2>Language</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">English  <small>Bilingual</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Hindi  <small>Fluent</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">German  <small>Beginner</small></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
      }
}


export default Language;
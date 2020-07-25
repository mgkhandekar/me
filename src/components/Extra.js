import React, {Component} from 'react';
import mee  from '../mee.JPG';

import './Card.css';


class Extra extends Component{
      render(){
        return(
         <div className="card">
                <div className="card-block">
                  <h2>Extra</h2>
                  <h3>The only source of knowledge is Experience. - Albert Einstein.</h3>
                  <div className="work-experience">
                    <small className="date">2019-2020</small>
                    <h3 className="h5 date-title">Website and Content Head - <a href="http://aicvs.weebly.com" title="Create professionnal website">Artificial Intelligence and Computer Vision Society, Cummins</a></h3>
                    <p>
                    <ul>
                    <li>I was the website and content head of our college's Artificial Intelligence and Computer Vision Society this year. My main job was to update the society's website with blog posts of the sessions/competitions conducted by us and maintaining all information on the site.</li>
<li>The site was created and hosted on Weebly and we had not written even a single line of code for it. Being an engineering college students society I thought that it deserved a website whose code is written by the students and took the initiative for it.</li>
<li> I successfully created and deployed the website online using Django, HTML, CSS and JavaScript.</li>
</ul>
</p>
                  </div>
                  <div className="work-experience">
                    <small className="date">Nov 2019 - Feb 2020</small>
                    <h3 className="h5 date-title">Web developer - <a href="http://cumminsfest.in" title>Innovation, College Tech Fest</a></h3>
                    <p>
                      <ul>
                      <li>Designed the website, giving the college technical fest a digital face, with the help of the website design team members.</li>
                      <li>The website was designed using HTML, CSS and Javascript.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              );
      }
}

export default Extra;
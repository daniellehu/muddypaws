import React from 'react';

import '../css/common.css';
import '../css/home.css';

import logo from '../img/paw.svg';

const Home = function(props) {
    return (
    <div>
        <div className="side-bar">
          <h1>Muddy Paws</h1>
    		  <h3>Adventure Gear</h3>
      		<div className="row">
      			<img alt="logo" src={logo} id="paw" />
      		</div>
        </div>
    	
      	<div className="description">
      		<div className="row">
      			<h3>Who are we?</h3>
      		</div>
      		
      		<div className="row">
      			<p>We are an online store that sells customizable hiking and adventuring gear for your cat or dog.</p>
      			<p>We are committed to helping all cats and dogs live to their full potential, 
      				experiencing the wild alongside their human hiker pals!</p>
      		</div>
      		
      		<div className="row">
      			<div className="right-align">
                  <button onClick={props.nextSite.bind(this)}>
                    Enter Store
                  </button>
                </div>
      		</div>
        </div>
    </div>
    );
};

export default Home;
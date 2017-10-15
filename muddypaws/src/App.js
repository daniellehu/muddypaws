import React, { Component } from 'react';

import Header from './components/Header';

import logo from './img/paw.svg';

import './css/common.css';
import './css/home.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: ["home", "store", "item", "cart"],
      site: "home",
      siteIndex: 0,
    };
  }

  nextSite() {
    var nextIndex = (this.state.siteIndex + 1) % this.state.sites.length;
    this.setState({
      site: this.state.sites[nextIndex],
      siteIndex: nextIndex,
    });
  }

  prevSite() {
    var prevIndex = (this.state.siteIndex - 1) % this.state.sites.length;
    this.setState({
      site: this.state.sites[prevIndex],
      siteIndex: prevIndex,
    });
  }

  resetSite() {
    this.setState({
        site: this.state.sites[0],
        siteIndex: 0,
    });
  }

  goToShoppingSite() {
    this.setState({
        site: this.state.sites[3],
        siteIndex: 3,
    });
  }

  render() {

    if (this.state.site === "home") {
      return (
      <div>
        <div className="side-bar">
          <h1>Muddy Paws</h1>
    		  <h3>Adventure Gear</h3>
      		<div class="row">
      			<img alt="logo" src={logo} id="paw" />
      		</div>
        </div>
    	
      	<div class="description">
      		<div class="row">
      			<h3>Who are we?</h3>
      		</div>
      		
      		<div class="row">
      			<p>We are an online store that sells customizable hiking and adventuring gear for your cat or dog.</p>
      			<p>We are committed to helping all cats and dogs live to their full potential, 
      				experiencing the wild alongside their human hiker pals!</p>
      		</div>
      		
      		<div class="row">
      			<div class="right-align">
              <button onClick={this.nextSite.bind(this)}>
                Enter Store
              </button>
            </div>
      		</div>
        </div>
      </div>);
    } else if (this.state.site === "store") {
      return (
        <div>
          	<Header
              goHome={this.resetSite.bind(this)} 
              goShoppingCart={this.goToShoppingSite.bind(this)} 
            />
          	<div class="container">
          		<h3>Store Items</h3>
          		<p>Each item comes in a variety of colors, and is available for both Dogs and Cats of various sizes</p>
          		<div class="row">
          			<div class="card">
          				<a href="items/item-1.html">
          					<img src="resources/images/harness.png" />
          					<p><b>Harness</b></p>
          					<p>24.99</p>
          				</a>
          			</div>
          			<div class="card">
          				<a href="items/item-2.html">
          					<img src="resources/images/harness-attachment.jpg" />
          					<p><b>Harness Food & Drink Storage</b></p>
          					<p>10.99</p>
          				</a>
          			</div>
          			<div class="card">
          				<a href="items/item-3.html">
          					<img src="resources/images/collar.jpg" />
          					<p><b>Collar with GPS Tracker</b></p>
          					<p>49.99</p>
          				</a>
          			</div>
          		</div>
          	</div>
        </div>
      );
    } else {
       return (<div>Else</div>)
    }
  }
}

export default App;

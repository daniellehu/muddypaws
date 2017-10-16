import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Item from './components/Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: ["home", "store", "item", "cart"],
      site: "home",
      siteIndex: 0,
      selectedItem: null,
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

  goToItem(keyid) {
    this.setState({
      site: this.state.sites[2],
      siteIndex: 2,
      selectedItem: keyid,
    });
  }

  render() {

    if (this.state.site === "home") {
      return (<Home nextSite={this.nextSite.bind(this)} />);
    } else if (this.state.site === "store") {
      return (
        <div>
          	<Header
              goHome={this.resetSite.bind(this)} 
              goShoppingCart={this.goToShoppingSite.bind(this)} 
            />
          	<Shop 
              selectItem={this.goToItem.bind(this)}
            />
        </div>
      );
    } else if (this.state.site === "item") {
      return (
        <div>
          <Header
            goHome={this.resetSite.bind(this)} 
            goShoppingCart={this.goToShoppingSite.bind(this)} 
          />
          <Item 
            itemId={this.state.selectedItem}
            prevSite={this.prevSite.bind(this)}
          />
        </div>
      );
    } else {
       return (
       <div>
         <Header
          goHome={this.resetSite.bind(this)} 
          goShoppingCart={this.goToShoppingSite.bind(this)} 
         />
       </div>)
    }
  }
}

export default App;

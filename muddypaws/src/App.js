import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Item from './components/Item';
import Cart from './components/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: ["home", "store", "item", "cart"],
      site: "home",
      siteIndex: 0,
      selectedItem: null,
      shoppingCart: [],
      shoppingCartTotal: 0,
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

  goToStore() {
    this.setState({
        site: this.state.sites[1],
        siteIndex: 1,
    });
  }


  addQtyToItem(index) {
    const items = this.state.shoppingCart;
    items[index].quantity += 1;
    this.forceUpdate();
    this.setState({ 
      shoppingCartTotal: this.state.shoppingCartTotal + 1,
      addedItemNotification: true,
    });
    var self = this;
    self.notifyAddedItem(self);
  }

  addToShoppingCart(item) {
    this.setState({
      shoppingCart: [...this.state.shoppingCart, item],
      shoppingCartTotal: this.state.shoppingCartTotal + 1,
      addedItemNotification: true,
    });
    var self = this;
    self.notifyAddedItem(self);
  }

  notifyAddedItem(self) {
    setTimeout(function() {
      self.setState({
        addedItemNotification: false,
      });  
    }, 2000);
  }

  removeItem(e) {
    const itemId = e.target.id.split('-')[1];
    const items = this.state.shoppingCart;
    const qty = items[itemId].quantity;
    items.splice(itemId, 1);
    this.setState({
      shoppingCart: items,
      shoppingCartTotal: this.state.shoppingCartTotal - qty,
    });
  }

  changeQuantity(e) {
    if (e.key === 'Enter') {
      const currentValue = e.target.value;
      const currentQty = parseInt(currentValue, 10);
      if (currentQty && currentQty > 0 && currentQty < 999) {
        const itemId = e.target.id.split('-')[1];
        const prevQty = this.state.shoppingCart[itemId].quantity;
        const items = this.state.shoppingCart;
        items[itemId].quantity = currentQty;
        this.forceUpdate();
        this.setState({
          shoppingCartTotal: this.state.shoppingCartTotal - prevQty + currentQty,
        });
      } else if (currentQty === 0) {
        this.removeItem(e);
      }
    }
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
              shoppingCartTotal={this.state.shoppingCartTotal}
              addedItemNotification={this.state.addedItemNotification}
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
            shoppingCartTotal={this.state.shoppingCartTotal}
            addedItemNotification={this.state.addedItemNotification}
          />
          <Item 
            itemId={this.state.selectedItem}
            shoppingCart={this.state.shoppingCart}
            addQtyToItem={this.addQtyToItem.bind(this)}
            addToShoppingCart={this.addToShoppingCart.bind(this)}
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
          shoppingCartTotal={this.state.shoppingCartTotal}
          addedItemNotification={this.state.addedItemNotification}
         />
         <Cart 
          shoppingCart={this.state.shoppingCart}
          goToStore={this.goToStore.bind(this)}
          changeQuantity={this.changeQuantity.bind(this)}
          removeItem={this.removeItem.bind(this)}
         />
       </div>)
    }
  }
}

export default App;

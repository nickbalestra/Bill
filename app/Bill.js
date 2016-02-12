import React from 'react';

import { loadData } from './utils';
import Total from './Total';
import Item from './Item';



class Bill extends React.Component {
  constructor() {
    super()

    this.state = {
      bill: {}
    };

    this.loadData = loadData.bind(this);
  }

  componentDidMount() {
    this.loadData('https://still-scrubland-9880.herokuapp.com/bill.json', bill => {
      this.setState({ bill });
    });
  }


  render() {
    
    if (Object.keys(this.state.bill).length) {
      var skystore = this.state.bill.skyStore.rentals.map((item) => {
        item.title += ' (rentals)';
        return item;
      })
      .concat(this.state.bill.skyStore.buyAndKeep.map((item) => {
        item.title += ' (buyAndKeep)';
        return item;
      }));

    return (
      <div>
        <Total statement={this.state.bill.statement} total={this.state.bill.total} />
        <Item details={this.state.bill.package.subscriptions} name="Subscriptions" total={this.state.bill.package.total} />
        <Item details={this.state.bill.callCharges.calls} name="Calls" total={this.state.bill.callCharges.total} />
        <Item details={skystore} name="SkyStore" total={this.state.bill.skyStore.total} />
      </div>
    )} else {
      return <div></div>
    }
  }
}


export default Bill;
module.exports = Bill;

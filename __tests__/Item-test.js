jest.dontMock('../app/Item');
jest.dontMock('./fixtures/bill-fixture');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Item = require('../app/Item');
var bill = require('./fixtures/bill-fixture').bill;



describe('Item', () => {
  
  // Unit Tests
  // ===============================================
  var item = TestUtils.renderIntoDocument( <Item details={bill.package.subscriptions} name="Subscriptions" total={bill.package.total} />);

  var node = ReactDOM.findDOMNode(item);
  

  it('should exists', function() {
    expect(TestUtils.isCompositeComponent(item)).toBeTruthy();
  });

  it('should render the component in a div element', () => {    
    expect(node.nodeName).toEqual('DIV');
  });

  // Functional Tests
  // ===============================================
  it('should render the details if [show detail] link is clicked', () => {
    var showDetail = TestUtils.findRenderedDOMComponentWithTag(item, 'a');

    TestUtils.Simulate.click(showDetail);
    var details = TestUtils.scryRenderedDOMComponentsWithClass(item, 'detailRow');
    expect(details.length).toEqual(bill.package.subscriptions.length);
    expect(details[0].children[1].textContent).toEqual('Variety with Movies HD');
  });

  it('should toggle the link from [show details] to [hide details]', () => {
    var showDetail = TestUtils.findRenderedDOMComponentWithTag(item, 'a');
    expect(showDetail.textContent).toEqual('[Hide details]');
    TestUtils.Simulate.click(showDetail);
    expect(showDetail.textContent).toEqual('[Show details]');
  });
});

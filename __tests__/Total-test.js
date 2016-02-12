jest.dontMock('../app/Total');
jest.dontMock('./fixtures/bill-fixture');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Total = require('../app/Total');
var bill = require('./fixtures/bill-fixture').bill;


// Unit Tests
// ===============================================
describe('Total', () => {
  var total = TestUtils.renderIntoDocument(<Total statement={bill.statement} total={bill.total} />);

  var node = ReactDOM.findDOMNode(total);

  it('should exists', function() {
    expect(TestUtils.isCompositeComponent(total)).toBeTruthy();
  });

  it('should render the component in a div element', () => {    
    expect(node.nodeName).toEqual('DIV');
  });

  it('should contain 4 elements', () => {
    expect(node.children.length).toEqual(4);
  });

  it('shouldnt display generated date', () => {
    expect(node.children[0].textContent).toEqual('Generated: 2015-01-11');
  });

  it('shouldnt display period info', () => {
    expect(node.children[1].textContent).toEqual('Period: from 2015-01-26 to 2015-02-25');
  });

  it('shouldnt display due date', () => {
    expect(node.children[2].textContent).toEqual('Due: 2015-01-25');
  });

   it('should display bill total', () => {
    var totalAmount = TestUtils.findRenderedDOMComponentWithClass(total, 'totalAmount');
    expect(totalAmount.textContent).toEqual('136.03');
  });
});

import React from 'react';

class Total extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="billInfo">
        <div><strong>Generated: </strong>{this.props.statement.generated}</div>
        <div><strong>Period: </strong>from {this.props.statement.period.from} to {this.props.statement.period.to}</div>
        <div><strong>Due: </strong>{this.props.statement.due}</div>
        <div className="total">
          <div><strong>Total: </strong><span className="pull-right totalAmount">{this.props.total}</span></div>
        </div>
      </div>
    )
  }
}

export default Total;
module.exports = Total;

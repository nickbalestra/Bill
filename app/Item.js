import React from 'react';

class Item extends React.Component {
  constructor() {
    super()

    this.state = {
      showDetails: false 
    };

    this.toggleDetails = this.toggleDetails.bind(this); 
  }

  toggleDetails(){
    var showDetails = !this.state.showDetails;
    this.setState({showDetails});
  }


  render() {
    var details = this.props.details.map((item,i) => {
      return (
        <tr key={i} className="detailRow">
          { Object.keys(item).map((row, i) => {
              return <td key={i}>{item[row]}</td>
            })
          }
        </tr>
      )
    });
    
    var headers = Object.keys(this.props.details[0]).map((header,i) => {
      return <th key={i}>{header}</th>
    });
    

    return (
      <div>
        <div className="bill-section">
          <span>
            <strong>{this.props.name} </strong>
            <a className="link" onClick={this.toggleDetails}>[{this.state.showDetails ? 'Hide' : 'Show'} details]</a>
            <span className="pull-right">{this.props.total} </span>
          </span>
        </div>
        { (this.state.showDetails) ?
            <table className="table table-striped table-details">
              <thead>
                <tr>
                  {headers}
                </tr>
              </thead>
              <tbody className="detailRows">
                {details}
              </tbody>
            </table>
          : ''
        }
      </div>
    )
  }
}

export default Item;
module.exports = Item;

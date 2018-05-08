import React from 'react';

class Option extends React.Component {
    render () {
      return (
        <div className="border-bottom justify-content-center py-3">
          <span className="mr-2">{this.props.optiontext}</span>
          <button onClick={() => {
            this.props.removeSingleOption(this.props.optiontext)
          }} className="btn btn-danger">Remove</button>
        </div>
      );
    }
  }

  export {Option as default};
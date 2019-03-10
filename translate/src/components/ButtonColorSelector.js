import React from 'react';

class ButtonColorSelector extends React.Component {
  render() {
    return (
      <div>
        Select a button color:
        <button
          className="ui button primary"
          onClick={() => this.props.onColorChange('primary')}
        >
          Blue
        </button>
        <button
          className="ui button red"
          onClick={() => this.props.onColorChange('red')}
        >
          Red
        </button>
      </div>
    );
  }
}

export default ButtonColorSelector;

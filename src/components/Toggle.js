import React from 'react';

export default class Toggle extends React.Component {
    render() {
        return <input
            type="range"
            style={{ width: '30px', cursor: 'pointer' }}
            min="0"
            max="1"
            value={this.props.checked ? 1 : 0}
            onChange={() => { }}
            onClick={this.props.toggle} />;
    }
}

import React from 'react';

import { getImages } from '../api';


class CriteriaPanel extends React.Component {

  state = {
    tag: 'blueprint'
  };

  tagChange = e => this.setState({ tag: e.target.value });

  onSearch = async () => {
    const images = await getImages(this.state);
    this.props.onSearch(images);
  }


  render() {
    return (
      <div>
        Tag: <input type='text' value={this.state.tag} onChange={this.tagChange} />
        <button onClick={this.onSearch}>Search</button>
      </div>

    );
  }

}


export default CriteriaPanel;

import React from 'react';

import CriteriaPanel from './CriteriaPanel';
import SearchResultsPanel from './SearchResultsPanel';

class MainContainer extends React.Component {

  state = {
    images: []
  };

  render() {
    console.log(this.state.images);
    return (

      <div>

        <CriteriaPanel onSearch={images => this.setState({ images })} />
        <SearchResultsPanel images={this.state.images} />

      </div>
    );
  }

}

export default MainContainer;

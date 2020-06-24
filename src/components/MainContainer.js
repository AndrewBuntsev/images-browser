import React from 'react';

import CriteriaPanel from './CriteriaPanel';
import SearchResultsPanel from './SearchResultsPanel';

class MainContainer extends React.Component {
  render() {
    return (
      <div>

        <CriteriaPanel />
        <SearchResultsPanel />

      </div>
    );
  }

}

export default MainContainer;

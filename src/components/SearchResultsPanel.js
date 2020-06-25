import React from 'react';
import ImageSearchResult from './ImageSearchResult';


class SearchResultsPanel extends React.Component {
  render() {
    const images = this.props.images.map(image => <ImageSearchResult image={image} key={image.id} />)
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images}
      </div>
    );
  }

}

export default SearchResultsPanel;

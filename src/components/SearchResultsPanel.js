import React from 'react';
import ImageSearchResult from './ImageSearchResult';


export default class SearchResultsPanel extends React.Component {
  render() {
    const images = this.props.images.map(image => <ImageSearchResult
      image={image}
      key={image.id}
      size={this.props.imageSize}
      detailsMode={this.props.detailsMode}
      onTagChange={this.props.onTagChange} />);

    const className = this.props.detailsMode ? 'details-mode' : 'tile-mode';

    return (
      <div>
        <div className={className}>
          {images}
        </div>
      </div>
    );
  }

}

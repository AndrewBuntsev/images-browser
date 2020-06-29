import React from 'react';

import { getImages } from '../api';
import CriteriaPanel from './CriteriaPanel';
import SearchResultsPanel from './SearchResultsPanel';

export default class MainContainer extends React.Component {
  state = {
    tag: '',
    isLoading: false,
    images: [],
    detailsMode: false,
    imageSize: 100
  };

  onSearchTask;

  tagChange = tag => {
    this.setState({ tag, isLoading: true });

    // set a threshold to avoid consequiteve high-frequent requests
    if (this.onSearchTask) {
      clearTimeout(this.onSearchTask);
    }
    this.onSearchTask = setTimeout(this.onSearch, 1000);
  };

  onSearch = async () => {
    const images = await getImages(this.state);
    this.setState({ images, isLoading: false });
  }

  render() {
    return (
      <div>
        <CriteriaPanel
          tag={this.state.tag}
          isLoading={this.state.isLoading}
          tagChange={this.tagChange}
          imageSize={this.state.imageSize}
          imageSizeChange={imageSize => this.setState({ imageSize })}
          detailsMode={this.state.detailsMode}
          detailsModeChange={detailsMode => this.setState({ detailsMode })} />

        <SearchResultsPanel
          images={this.state.images}
          imageSize={this.state.imageSize}
          detailsMode={this.state.detailsMode}
          onTagChange={this.tagChange} />
      </div>
    );
  }
}

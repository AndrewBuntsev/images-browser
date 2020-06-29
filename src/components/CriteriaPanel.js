import React from 'react';
import Toggle from './Toggle';


export default class CriteriaPanel extends React.Component {
  render() {
    return (
      <div className={'search-criteria'}>
        <div className={'search-criterium'}>
          Search Images by Tag:
        <input
            type='text'
            value={this.props.tag}
            onChange={e => this.props.tagChange(e.target.value)}
            className={'textblock'} />

          {this.props.isLoading &&
            <img src='https://cdn.lowgif.com/medium/d35d94c490e598e3-loading-gif-transparent-loading-gif.gif' width={30} />}
        </div>
        <div className={'search-criterium'}>
          Image Size:
        <input
            type="range"
            id="imageSize"
            name="imageSize"
            min="100"
            max="500"
            value={this.props.imageSize}
            onChange={e => this.props.imageSizeChange(e.target.value)} />
        </div>
        <div className={'search-criterium'}>
          Details Mode:
        <Toggle checked={this.props.detailsMode} toggle={() => this.props.detailsModeChange(!this.props.detailsMode)} />
        </div>
      </div>
    );
  }
}

import React from 'react';


export default class ImageSearchResult extends React.Component {
  render() {
    const { image, size } = this.props;
    const tags = image.tags.map(tag => <span className={'tag'} key={tag} onClick={e => this.props.onTagChange(e.target.innerText)}>{tag} </span>)
    return (
      <div className={'image-wrapper'}>
        <a href={image.full_url} target='_blank'>
          <img src={image.thumb_url} width={size} />
        </a>
        {this.props.detailsMode && <div className={'details-section'}>
          <div className={'image-title'}>{image.title}</div>
          <div><span className={'image-field-name'}>Author:</span> <a href={image.user.uri} target='_blank'>{image.user.name}</a></div>
          <div><span className={'image-field-name'}>Tags:</span> {tags}</div>
          <div><span className={'image-field-name'}>Published:</span> {image.published.slice(0, 10)}</div>
        </div>}
      </div>
    );
  }
}

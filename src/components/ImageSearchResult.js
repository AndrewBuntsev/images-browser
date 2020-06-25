import React from 'react';


class ImageSearchResult extends React.Component {
  render() {
    const image = this.props.image;
    return (
      <div>
        <span>{image.title}</span><br />
        <img src={image.url} width={150} />
      </div>
    );
  }

}

export default ImageSearchResult;

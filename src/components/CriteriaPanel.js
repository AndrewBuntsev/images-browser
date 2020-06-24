import React from 'react';


class CriteriaPanel extends React.Component {

  state = {
    tag: ''
  };

  tagChange = e => this.setState({ tag: e.target.value });

  onSearch = async () => {
    const text = await fetch(`https://cors-anywhere.herokuapp.com/https://flickr.com/services/feeds/photos_public.gne?tags=${this.state.tag}`)
      .then(res => res.text());//.then(str => new window.DOMParser().parseFromString(str, "text/xml"));
    const res = text;//.match('/<entry>(.|\n)*?<\/entry>/g');
    console.log(res);
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

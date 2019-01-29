import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // the statement below will return a height of zero because
    // when the component is rendered, at that time, axios is still trying to
    // fetch the images from the API. So initially, there is no image and thus
    // the height is zero
    // console.log(this.imageRef.current.clientHeight);

    // to overcome the above mentioned issue, we add an event listener
    // which will inform us when the images have been loaded and will
    // execute the given callback function
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // we have the height of each image as well as the height of each row in the grid
    // with this information, we can now calculate how many row spans a particular image will need
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map(image => {
    // the key property allows react to efficiently compare items
    // in the list and current DOM and re-render the page
    // thus we always add the key property to the root element rendering the list
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

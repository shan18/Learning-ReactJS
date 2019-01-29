import React from 'react';

const ImageList = props => {
  // images is a list of JS objects, in map if we name specific
  // attributes of the object, it will load only those specific attribute values.
  const images = props.images.map(({ description, id, urls }) => {
    // we add the key property because this allows react to efficiently
    // compare items in the list and current DOM and re-render the page
    return <img key={id} alt={description} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;

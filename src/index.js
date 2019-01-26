import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        avatar={faker.image.avatar()}
        timeAgo="Today at 6:00 PM"
        commentText="Nice blog post!"
      />
      <CommentDetail
        author="Jane"
        avatar={faker.image.avatar()}
        timeAgo="Today at 10:00 AM"
        commentText="Good work"
      />
      <CommentDetail
        author="Alex"
        avatar={faker.image.avatar()}
        timeAgo="Yesterday at 11:00 PM"
        commentText="Very good"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

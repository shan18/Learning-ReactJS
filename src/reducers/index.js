// Reducers

const songsReducer = () => {
  // It will always return a static list so it does not need any parameters
  return [
    { title: 'Kygo - Happy Now', duration: '4:04' },
    { title: 'Hardwell - How You Love Me', duration: '3:24' },
    { title: 'Post Malone, Swae Lee - Sunflower', duration: '2:41' },
    { title: 'Maroon 5 - Girls Like You', duration: '4:30' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

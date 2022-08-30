export const selectChannel = (channelName) => ({
  type: "SELECT_CHANNEL",
  payload: channelName,
});

export const fetchPosts = () => {
  return {
    type: "FETCH_POSTS",
  };
};

export const receivedPosts = (data) => ({
  type: "RECEIVE_POSTS",
  payload: data.articles,
});


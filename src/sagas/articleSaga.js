import { takeEvery, call, put, select } from "redux-saga/effects";
import { receivedPosts } from "../actions/index";

const fetchPostsByChannelName = (channelName) => {
  return fetch(
    `https://newsapi.org/v1/articles?source=${channelName}&apiKey=${process.env.REACT_APP_API_KEY}`
  )
    .then(
      (response) => response.json(),
      (error) => console.log("An error occurred.", error)
    )
    .then((data) => data);
};

const selectAllState = (state) => state;

// ye function api call ya fir any other side effects ke liye use hota hai yha pe hm state ka value get kr skte hai another action dispatch kr skte hai
function* fetchPosts() {
  try {
    const allState = yield select(selectAllState); // getting all state value
    const posts = yield call(fetchPostsByChannelName, allState.myReducer.channelName);
    yield put(receivedPosts(posts)); // after geting post value dispatch another action
  } catch (e) {
    console.log(e);
  }
}

export function* waitForFetchPosts() {
  yield takeEvery("FETCH_POSTS", fetchPosts); // jaise hi FETCH_POSTS action dispact hoga usse phle fetchPosts generator function call hoga
}

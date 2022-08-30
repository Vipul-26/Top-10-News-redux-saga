import { all } from "redux-saga/effects";
import { waitForFetchPosts } from "./articleSaga";

export default function* rootSaga() {
    yield all([waitForFetchPosts()]);
}
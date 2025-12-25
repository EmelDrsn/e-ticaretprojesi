import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Basit başlangıç reducer’ı
const initialState = {
  products: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

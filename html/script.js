const addAnotherMatchEl = document.getElementsByClassName("lws-addMatch");
const allMatchesEl = document.getElementsByClassName("all-matches");

const initialValue = [{ id: 1, matchName: "Match 1", total: 0 }];

const ADD_ANOTHER_MATCH = "addAnotherMatch";

const addAnotherMatch = (value) => {
  return {
    type: ADD_ANOTHER_MATCH,
    payload: value,
  };
};

function matchReducer(state = initialValue, action) {
  switch (action.type) {
    case ADD_ANOTHER_MATCH:
      const newId = state?.length ? state[state.length - 1].id + 1 : 1;
      return [...state, { id: newId, matchName: `Match ${newId}`, total: 0 }];
    default:
      return state;
  }
}

const store = Redux.createStore(matchReducer);

const render = () => {
  const state = store.getState();
  allMatchesEl.innerHTML = "";
};

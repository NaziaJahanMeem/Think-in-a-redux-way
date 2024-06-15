const addAnotherMatchEl = document.querySelector(".lws-addMatch");
const allMatchesEl = document.querySelector(".all-matches");
const incrementEls = document.querySelectorAll(".lws-increment");
const resetEl = document.querySelector(".lws-reset");

const initialValue = [
  { id: 1, matchName: "Match 1", increment: 0, decrement: 0, total: 0 },
];

const ADD_ANOTHER_MATCH = "addAnotherMatch";
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

const addAnotherMatch = () => ({ type: ADD_ANOTHER_MATCH });

const increment = ({ id, value }) => ({
  type: INCREMENT,
  payload: { id, value },
});

const decrement = ({ id, value }) => ({
  type: DECREMENT,
  payload: { id, value },
});

const reset = () => ({
  type: RESET,
});

function matchReducer(state = initialValue, action) {
  switch (action.type) {
    case ADD_ANOTHER_MATCH:
      const newId = state.length ? state[state.length - 1].id + 1 : 1;
      return [...state, { id: newId, matchName: `Match ${newId}`, total: 0 }];
    case INCREMENT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            increment: action.payload.value,
            total: item.total + action.payload.value,
          };
        }
        return item;
      });
    case DECREMENT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            increment: action.payload.value,
            total:
              action.payload.value < item.total
                ? item.total - action.payload.value
                : 0,
          };
        }
        return item;
      });

    case RESET:
      return state.map((item) => ({
        ...item,
        total: 0,
      }));

    default:
      return state;
  }
}

const store = Redux.createStore(matchReducer);

const render = () => {
  const state = store.getState();
  allMatchesEl.innerHTML = "";

  state.forEach((item) => {
    const matchElement = document.createElement("div");
    matchElement.classList.add("match");
    matchElement.innerHTML = `<div class="wrapper">
              <button class="lws-delete" id=${item.id}>
                <img src="./image/delete.svg" alt="" />
              </button>
              <h3 class="lws-matchName">${item.matchName}</h3>
            </div>
            <div class="inc-dec">
              <form class="incrementForm">
                <h4>Increment</h4>
                <input type="number" name="increment" class="lws-increment" id=${item.id} />
              </form>
              <form class="decrementForm">
                <h4>Decrement</h4>
                <input type="number" name="decrement" class="lws-decrement" id=${item.id} />
              </form>
            </div>
            <div class="numbers">
              <h2 class="lws-singleResult">${item.total}</h2>
            </div>`;
    allMatchesEl.appendChild(matchElement);
  });

  // Attach event listeners to each increment input
};

render();
store.subscribe(render);

addAnotherMatchEl.addEventListener("click", () => {
  store.dispatch(addAnotherMatch());
});

allMatchesEl.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (e.target.getAttribute("name") === "increment") {
      const id = parseInt(e.target.getAttribute("id"), 10);
      const value = parseInt(e.target.value, 10);
      store.dispatch(increment({ id, value }));
    }
    // Check if the focused element is an input with class "decrement"
    else if (e.target.getAttribute("name") === "decrement") {
      const id = parseInt(e.target.getAttribute("id"), 10);
      const value = parseInt(e.target.value, 10);
      store.dispatch(decrement({ id, value }));
    }
  }
});

resetEl.addEventListener("click", () => {
  store.dispatch(reset());
});

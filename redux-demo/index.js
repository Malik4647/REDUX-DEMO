import redux from "redux";
import reduxLogger from "redux-logger";

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

//Action type
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//Action creator for Cakes
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restockedCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

//Actions for Ice Cream
function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockedIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

//Initializing States
// const initialState = {
//   numberofCakes: 10,
//   numberofIceCreames: 20,
// };

const initialCakeState = {
  numberofCakes: 10,
};

const initialIceCreamState = {
  numberofIceCreams: 20,
};

//Reducer to handle the Cake action.
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberofCakes: state.numberofCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberofCakes: state.numberofCakes + action.payload,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberofIceCreams: state.numberofIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberofIceCreams: state.numberofIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//Create Store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial State", store.getState());

//Subscribe the store
const unsubscribe = store.subscribe(() => {});

//dispatch the action to the store
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockedCake(3));

const actions = bindActionCreators(
  { orderCake, restockedCake, orderIceCream, restockedIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockedCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockedIceCream(2);

//stop store to doing more changing
unsubscribe();

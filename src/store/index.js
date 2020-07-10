import { createStore } from 'redux';

const INITIAL_STATE = {
  events: [
    { title: 'Evento 1', coords: { latitude: -23.097456, longitude: -47.228684 } },
    { title: 'Evento 2', coords: { latitude: -23.098976, longitude: -47.230111 } },
    { title: 'Evento 3', coords: { latitude: -23.095324, longitude: -47.233372 } },
    { title: 'Evento 4', coords: { latitude: -23.098917, longitude: -47.233844 } },
    { title: 'Evento 5', coords: { latitude: -23.097910, longitude: -47.236988 } },
  ],
  selectedEvent: {}
}

const events = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'SELECT_EVENT':
      return { ...state, ...{ selectedEvent: action.event } }
    case 'ADD_EVENT':
      return { ...state, events: [...state.events, action.event] };
    default:
      return state;
  }

}

const store = createStore(events);

export default store;

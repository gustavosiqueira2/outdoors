import { createStore } from 'redux';

const INITIAL_STATE = {
  events: [
    { name: 'Evento 1', coords: { latitude: -23.097456, longitude: -47.228684 } },
    { name: 'Evento 2', coords: { latitude: -23.098976, longitude: -47.230111 } },
    { name: 'Evento 3', coords: { latitude: -23.095324, longitude: -47.233372 } },
    { name: 'Evento 4', coords: { latitude: -23.098917, longitude: -47.233844 } },
    { name: 'Evento 5', coords: { latitude: -23.097910, longitude: -47.236988 } },
  ],
  selectedEvent: {},
  event_creating: {
    name: '',
    coords: {
      latitude: 0,
      longitude: 0
    }
  }
}

const events = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'SELECT_EVENT': {
      return { ...state, ...{ selectedEvent: action.event } };
    }
    case 'ADD_EVENT': {
      state.events.push(action.event);
      state.selectedEvent = action.event;
      state.event_creating = INITIAL_STATE.event_creating;
      return state;
    }
    case 'ADD_EVENT_NAME': {
      state.event_creating.name = action.event.name;
      return state;
    }
    case 'ADD_EVENT_COORDS': {
      state.event_creating.coords = action.coords;
      return state;
    }
    default:
      return state;
  }

}

const store = createStore(events);

export default store;

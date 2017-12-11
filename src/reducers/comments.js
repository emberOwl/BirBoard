import {
  Map,
  List
} from 'immutable';
let key_count = 3;

const initialState = List([{text: 'hello1', key: 0}, {text: 'hello2', key: 1}]);

export default function comments(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return state.merge([{text: action.payload, key: ++key_count }]);
    case 'GET_COMMENTS':
      return state;

    default:
      return state
  }
}

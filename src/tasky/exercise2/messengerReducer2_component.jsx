const initialState2 = {
  selectedId: 0,
  message: 'Hello',
};

const messengerReducer2 = (state, action) => {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message
        }
      };
    }
    case 'sent_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: ''
        }
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export {messengerReducer2, initialState2}

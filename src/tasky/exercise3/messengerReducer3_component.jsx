const initialState3 = {
  selectedId: 0,
  message: 'Hello',
};

const messengerReducer3 = (state, action) => {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    case 'sent_message': {
      return {
        ...state,
        clicked: () => {}
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export {messengerReducer3, initialState3}

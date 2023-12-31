import { useReducer } from 'react';
import ContactList from './contactList_component';
import Chat from './chat_component';
import { initialState, messengerReducer } from './messengerReducer_component';

// Dispatch actions from event handlers

/**
 * Currently, the event handlers in ContactList.js and Chat.js 
 * have // TODO comments. This is why typing into the input doesn’t work, 
 * and clicking on the buttons doesn’t change the selected recipient.
    Replace these two // TODOs with the code to dispatch the 
    corresponding actions. To see the expected shape and the type of 
    the actions, check the reducer in messengerReducer.js. 
    The reducer is already written so you won’t need to change it. 
    You only need to dispatch the actions in ContactList.js and Chat.js.
 */

const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
];

const Messenger2 = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Messenger2;



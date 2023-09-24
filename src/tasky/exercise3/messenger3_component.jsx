import { useReducer } from 'react';
import Chat3 from './chat3_component.jsx';
import ContactList3 from './contactList3_component.jsx';
import { initialState3, messengerReducer3 } from './messengerReducer3_component.jsx';

// Clear the input on sending a message 

/**
 * Currently, pressing “Send” doesn’t do anything. 
 * Add an event handler to the “Send” button that will:
  1. Show an alert with the recipient’s email and the message.
  2. Clear the message input.
 */

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];

const Messenger2b = () => {
  const [state, dispatch] = useReducer(messengerReducer3, initialState3);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList3
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat3
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Messenger2b;

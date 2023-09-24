
const Chat3 = ({contact, message, dispatch}) => {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={(e) => {
          dispatch({
            type: 'sent_message',
            clicked: alert(contact.name + ': ' + message)
          })
        }
        }
      >
        Send to {contact.email}
      </button>
    </section>
  );
}

export default Chat3;

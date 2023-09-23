import { useState } from "react";


const Form = () => {
    const [answer, setAnswer] = useState(' ');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');

        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    const handleTextareaChange = (e) => {
        setAnswer(e.target.value);
    }

    const submitForm = () => {
        // Pretend it's hitting the network.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if (shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try again!'))
                } else {
                    resolve();
                }
            }, 1500);
        });
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns 
                air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />

                <br />

                <button disabled={
                    answer.length === 0 || status === 'submitting'
                }>
                    Submit
                </button>
                {error !== null && 
                    <p className="Error">{error.message}</p>
                }
            </form>
        </>
    )
}

// Choosing the state structure

const FormBull = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

// Sharing state between components

/**
 * Sometimes, you want the state of two components 
 * to always change together. To do it, remove state from both of them, 
 * move it to their closest common parent, 
 * and then pass it down to them via props. 
 * This is known as “lifting state up”, and it’s one of the most 
 * common things you will do writing React code.

    In this example, only one panel should be active at a time. 
    To achieve this, instead of keeping the active state inside 
    each individual panel, the parent component holds the state 
    and specifies the props for its children.
 */

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, 
        Almaty is Kazakhstan's largest city. From 1929 to 1997, 
        it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, 
        the Kazakh word for "apple" and is often translated as 
        "full of apples". In fact, the region surrounding Almaty is 
        thought to be the ancestral home of the apple, and the wild 
        <i lang="la">Malus sieversii</i> is considered a likely candidate 
        for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

const Panel = ({title, children, isActive, onShow }) => {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (<p>{children}</p>) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

// Extracting state logic into a reducer

/**
 * Components with many state updates spread across many event handlers 
 * can get overwhelming. For these cases, you can consolidate 
 * all the state update logic outside your component in a single function, 
 * called “reducer”. Your event handlers become concise because they 
 * only specify the user “actions”. At the bottom of the file, 
 * the reducer function specifies how the state should update 
 * in response to each action!
 */





export default Form;
export {FormBull, Accordion} 
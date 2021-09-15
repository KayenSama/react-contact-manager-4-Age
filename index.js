import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddPersonForm(props) {
  const [person, setPerson] = useState('');
  const [age, setAge] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }
  function handleChangeAge(e) {
    setAge(e.target.value);
  }

  function handleSubmit(e) {
    if (person !== '' && age !== '') {
      props.handleSubmit(person, age);
      setPerson('');
      setAge('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <input
        type="number"
        placeholder="Add new age"
        onChange={handleChangeAge}
        value={age}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name, ans) {
    setContacts([...contacts, name + ' ' + ans]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne'];

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById('root')
);

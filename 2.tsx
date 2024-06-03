import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm(props) { // ({ addEntryToPhoneBook }) {
  const [entry, setEntry] = useState({
    firstName: "Coder",
    lastName: "Byte",
    phone: "888555999"
  });

  const updateFirstName = e => setEntry({...entry, firstName: e.target.value});
  const updateLastName = e => setEntry({...entry, lastName: e.target.value});
  const updatePhone = e => setEntry({...entry, phone: e.target.value});

  return (
    <form onSubmit={e => { e.preventDefault(); props.onSubmit(entry) }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={entry.firstName}
        onChange={updateFirstName}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        value={entry.lastName}
        onChange={updateLastName}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={entry.phone}
        onChange={updatePhone}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable(props) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
        {props.entries.sort((a, b) => a.lastName > b.lastName).map((entry, idx) => (
          <tr key={idx}>
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
//
function Application(props) {
  const [entries, setEntries] = useState([]);

  function addEntryToPhoneBook(entry) {
    setEntries([...entries, entry]);
  }

  return (
    <section>
      <PhoneBookForm onSubmit={addEntryToPhoneBook} />
      <InformationTable entries={entries} />
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);

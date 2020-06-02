import React, { useState, useEffect } from "react";
import "./App.css";

/**
 * 
 * Exercise:
 * 1. fetch data from the server(json-server)only if you don't
 * have contacts in state
 * 2. create input which will filter contacts on view based in user query(input value)
 * 3. render contacts
 * 
 * Contact HTML structure
 * =======================
 *	<li>
		<p>{name}</p>
		<p className={"company"}>{company}</p>
	</li>
 */

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState("All");

  fetch("http://localhost:3000/contacts").then((res) =>
    res.json().then((res) => setContacts(res))
  );

  const handleChange = (event) => {
    setSelectedContacts(event.target.value);
  };

  const contactsToRender =
    selectedContacts === "All"
      ? contacts
      : contacts.filter((contact) => contact.name.match(selectedContacts));

  return (
    <div className="App">
      <label>
        <input
          type="text"
          placeholder="Type in your query"
          onChange={handleChange}
        />
      </label>
      <ul>
        {contactsToRender.map((contact) => (
          <li>
            <p>{contact.name}</p>
            <p className={"company"}>{contact.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

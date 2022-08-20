import React, { useEffect, useState } from "react";
import "./style.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Gamze",
      phone_number: "123",
    },
    {
      fullname: "Ebru",
      phone_number: "456",
    },
    {
      fullname: "Ömer",
      phone_number: "789",
    },
    {
      fullname: "Furkan",
      phone_number: "000",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;

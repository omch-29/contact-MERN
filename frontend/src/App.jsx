import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";


// const API = "http://localhost:5000/api/contacts";
const API = "https://contact-mern-hk6s8eitg-oms-projects-e873cbec.vercel.app/api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get(API);
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <ContactForm onAdd={fetchContacts} />
      <ContactList contacts={contacts} onDelete={fetchContacts} />
    </div>
  );
}

export default App;

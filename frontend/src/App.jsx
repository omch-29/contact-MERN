import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";


// const API = "http://localhost:5000/api/contacts";
const API = "https://contact-mern.onrender.com/api/contacts"

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    // const res = await axios.get(API);
    // setContacts(res.data);
    try {
      setLoading(true);
      const res = await axios.get(API);
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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

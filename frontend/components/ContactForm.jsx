import { useState } from "react";
import axios from "axios";

// const API = "http://localhost:5000/api/contacts";
const API = "https://contact-mern-hk6s8eitg-oms-projects-e873cbec.vercel.app/api/contacts";

function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");

  const isValid =
    form.name && form.phone && (!form.email || /\S+@\S+\.\S+/.test(form.email));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) {
      setError("Please fill required fields correctly");
      return;
    }
    await axios.post(API, form);
    setForm({ name: "", email: "", phone: "", message: "" });
    setError("");
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name*" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input placeholder="Phone*" value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })} />

      <textarea placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })} />

      {error && <p className="error">{error}</p>}
      <button disabled={!isValid}>Submit</button>
    </form>
  );
}

export default ContactForm;

import axios from "axios";
import { useEffect, useState } from "react";


// const API = "http://localhost:5000/api/contacts";
const API = "https://contact-mern.onrender.com/api/contacts";

function ContactList({ contacts, onDelete }) {
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    onDelete();
  };

  if (loading) {
    return (
      <h1 style={{ textAlign: "center" }}>
        Loading… Thanks for your patience   
        <br />
        Backend is waking up 
      </h1>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr key={c._id}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td>{c.message}</td>
            <td>
              <button onClick={() => handleDelete(c._id)} className="db">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;

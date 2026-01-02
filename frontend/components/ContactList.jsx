import axios from "axios";

const API = "http://localhost:5000/api/contacts";

function ContactList({ contacts, onDelete }) {
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    onDelete();
  };

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

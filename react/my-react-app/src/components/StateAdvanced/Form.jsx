import React, { useState } from "react";

function Form(props) {
  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    const newForm = { ...form, [name]: value };

    setForm(newForm);
  }

  return (
    <div>
      <input
        className="border-2 border-gray-300 rounded-md p-2 m-2"
        type="text"
        name="username"
        value={form.username}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <span>{form.username}</span>
      <br />
      <input
        className="border-2 border-gray-300 rounded-md p-2 m-2"
        type="text"
        name="age"
        value={form.age}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <span>{form.age}</span>
      <br />
      <input
        className="border-2 border-gray-300 rounded-md p-2 m-2"
        type="text"
        name="email"
        value={form.email}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <span>{form.email}</span>
    </div>
  );
}

export default Form;

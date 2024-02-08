import { useState } from "react";
import style from "../form/form.css"

const validate = (form, setErrors, errors) => {
    if (!form.email) setErrors({ ...errors, email: "Email vacío" });
    else {if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email))
        setErrors({ ...errors, email: "" })
    else setErrors({ ...errors, email: "Email inválido" })
    }
};

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    validate({...form, [property]: value}, setErrors, errors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert("Usuario ingresado con exito");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label className="email"htmlFor="email">Email: </label>
        <p></p>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>
      </div>
      <h1></h1>
      <div>
        <label className="email" htmlFor="password">Contraseña: </label>
        <p></p>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <p></p>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;

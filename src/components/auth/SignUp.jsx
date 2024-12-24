import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts";
import useLocalStorage from "../../hooks/localstorage";
import PasswordInput from "../common/PasswordInput";

export default function SignUp({ openLogInForm }) {
  const { setIsUserLoggedIn } = useContext(GlobalContext);
  const [sessionUser, setSessionUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setIsUserLoggedIn(true);
      setSessionUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      navigate("/");
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <>
      <b>Registrarte es más rápido de lo que crees 🏃</b>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nombre Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleChange}
            placeholder="Sr Fulanito de Tal"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="example@mail.com"
            required
          />
        </div>
        <PasswordInput
          label="Contraseña"
          name="password"
          onChange={handleChange}
        />
        <PasswordInput
          label="Confirmar Contraseña"
          name="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit" className="primary-btn mb-2 mt-2 w-full">
          ¡Registrarme!
        </button>
        <button
          type="button"
          className="secondary-btn w-full"
          onClick={openLogInForm}
        >
          Ya tengo una cuenta
        </button>
      </form>
    </>
  );
}

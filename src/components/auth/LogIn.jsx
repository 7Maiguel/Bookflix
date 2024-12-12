import useLocalStorage from "../../hooks/localstorage";

const LogIn = () => {
  // User Login
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email: e.target[0].value, password: e.target[1].value };
    useLocalStorage("user", JSON.stringify(payload));
    location = "/";
  };

  return (
    <div className="relative flex w-[40%] flex-col rounded bg-gray-200 px-6 pb-7 pt-5 text-black">
      <h1 className="text-3xl font-semibold">Iniciar sesión</h1>

      <form className="my-4" onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Contraseña" />
        <button type="submit" className="primary-btn w-full shadow-lg">
          Ingresar
        </button>
      </form>

      <button className="secondary-btn w-full shadow-lg">Registrarme</button>
    </div>
  );
};

export default LogIn;

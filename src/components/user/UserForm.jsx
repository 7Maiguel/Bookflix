
export default function UserForm({ userData, cancelEditingMode }) {
  return (
    <>
      <img
        src={userData.picture}
        alt="user_avatar"
        className="mr-6 h-full w-[280px] rounded border-2 border-white object-cover"
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex justify-between">
          <div className="w-[48%]">
            <label htmlFor="name">
              <b>Nombre</b>
            </label>
            <input type="text" placeholder="Nombre" value={userData.name} />
          </div>
          <div className="w-[48%]">
            <label htmlFor="lastname">
              <b>Apellido</b>
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Apellido"
              value={userData.lastName}
            />
          </div>
        </div>
        <br />
        <label htmlFor="email">
          <b>Correo Electrónico</b>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={userData.email}
        />
        <br />
        <br />
        <label htmlFor="email">
          <b>Fecha de Nacimiento</b>
        </label>
        <input type="date" name="birthdate" value={userData.birthdate} />
        <br />
        <br />
        <button className="primary-btn mr-4">Guardar Cambios</button>
        <button className="secondary-btn" onClick={cancelEditingMode}>
          Cancelar
        </button>
      </form>
    </>
  );
}

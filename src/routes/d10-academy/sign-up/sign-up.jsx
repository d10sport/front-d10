export default function SignUp() {
  return (
    <>
      <nav className="panel bg-[#191919]"></nav>
      <main className="login bg-black">
        <h1 className="title__login text-white">Iniciar Sesión</h1>
        <div className="container__login bg-[#2d2d2d]">
          <form action="" className="form__login">
            <label className="label__login text-white">Correo</label>
            <input
            type="text"
            placeholder="Username@gmail.com"
            className="input__login"
          />
            <label className="label__login text-white">Contraseña</label>
            <input type="text" placeholder="Password" className="input__login" />
            <label className="label__login text-white">Confirmar contraseña</label>
            <input
            type="text"
            placeholder="Confirm Password"
            className="input__login"
          />
            <input type="button" value="Registrarse" className="btn__login text-base text-white hover:text-black bg-black hover:bg-[#7a7a7a]" />
          </form>
          <p className="text__login text-white">
          ¿Ya tienes una cuenta? <a href="#" className="link__login text-[#ffc702]">Iniciar sesión</a>
          </p>
        </div>
      </main>
    </>
  )
}
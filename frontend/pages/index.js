import styles from "../styles/Auth.module.css"
import useInput from "../utils/useInput"
import DCImage from "../assets/DcBacground.jpg"
import useLogin from "../utils/useLogin"

const Login = () =>
{
  const email = useInput({ type : "email" , placeholder : "Escribe tu email" })
  const password = useInput({ type:"password" , placeholder:"Escribe tu contraseña" })
  const isCompleted = email.value && password.value

  const handleLogin = async(e) =>
  {
    e.preventDefault()

    const userData = await useLogin({ email : email.value , password : password.value })
    console.log(userData);
  }

  return(
    <div 
      className={styles.auth} 
      style={{
        backgroundImage : `url(${DCImage.src})`
      }}
    >
      <main className={styles.auth__card}>


        <form className={styles.auth__form} >
          <h1 className={styles.auth__title} >Login into your account</h1>
          <h2 className={styles.auth__title}>Email</h2>
          <section className={styles.auth__inputContainer} >  
            <input {...email} />
          </section>

          <h2 className={styles.auth__title}>Password</h2>
          <section className={styles.auth__inputContainer} >
            <input {...password} />
          </section>
          <button 
            className={styles.auth__submitButton} 
            type="submit"
            disabled={!isCompleted}
            onClick={handleLogin}
          > Login </button>
        </form>
        
      </main>
    </div>
  )
}


export default Login
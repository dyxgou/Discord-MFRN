import styles from "../styles/Auth.module.css"
import useInput from "../utils/useInput"
import DCImage from "../assets/DcBacground.jpg"
import useRegister from "../utils/useRegister"

const Register = () =>
{
  const email = useInput({ type : "email" , placeholder : "Escribe tu email" })
  const password = useInput({ type:"password" , placeholder:"Escribe tu contraseña" })
  const name = useInput({ placeholder : "Escribe tu nombre de usuario" })
  const isCompleted = email.value && password.value  && name.value

  const handleRegister = async(e) =>
  {
    e.preventDefault()

    const userData = await useRegister({ email : email.value , password : password.value , name : name.value })
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
          <h1 className={styles.auth__title} >Create your account</h1>
          <h2 className={styles.auth__title}>Email</h2>
          <section className={styles.auth__inputContainer} >  
            <input {...email} />
          </section>

          <h2 className={styles.auth__title}>Password</h2>
          <section className={styles.auth__inputContainer} >
            <input {...password} />
          </section>

          <h2 className={styles.auth__title}>Username</h2>
          <section className={styles.auth__inputContainer} >
            <input {...name} />
          </section>

          <button 
            className={styles.auth__submitButton} 
            type="submit"
            disabled={!isCompleted}
            onClick={handleRegister}
          > Register </button>
        </form>
        
      </main>
    </div>
  )
}


export default Register
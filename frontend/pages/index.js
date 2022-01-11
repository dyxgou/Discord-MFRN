import styles from "../styles/Auth.module.css"


const Login = () =>
{
  return(
    <div className={styles.auth}>
      <main className={styles.auth__card}>
        <h1 className={styles.auth__title} >Create your account</h1>
        <div className={styles.auth__inputsContainer}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </main>
    </div>
  )
}


export default Login
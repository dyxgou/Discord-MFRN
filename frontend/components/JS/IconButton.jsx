

const IconButton = ({ Icon }) =>
{
  return(
    <div className={styles.icon}>
      { Icon && <Icon className={styles.icon__button} /> }
    </div>
  )
}


export default IconButton
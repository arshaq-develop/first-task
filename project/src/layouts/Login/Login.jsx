import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from  '../Login/Login.module.css'

function Login() {
  return (
    <div>
        <h3 className={styles.heading}>Login</h3>
        <form>
          <input className={styles.input} type='text' placeholder='Username'/>
        </form>
        <form>
          <input className={styles.input} type='password' placeholder='Password'/>
        </form>
        <button className={styles.button}>Submit</button>
    </div>
  )
}

export default Login
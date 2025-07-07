import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from  '../components/Home.module.css'

function Login() {
  return (
    <div>
        <h3 className={styles.heading}>Login</h3>
        <FloatingLabel controlId="floatingPassword" label="Username" className={styles.label}>
            <Form.Control type="text" placeholder="username" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="password" />
        </FloatingLabel>
        <button className={styles.button}>Submit</button>
    </div>
  )
}

export default Login
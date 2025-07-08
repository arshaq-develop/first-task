import React from 'react'
import style from '../Register/Register.module.css'

function Register() {
  return (
    <div>
        <h3 className={style.heading}>Registration</h3>
        <form>
            <input className={style.input} type='text' placeholder='Email'/><br />
        </form>
        <form>
            <input className={style.input} type='text' placeholder='Username'/><br />
        </form>
        <form>
            <input className={style.input} type='password' placeholder='Password'/><br />
        </form>
        <form>
            <input className={style.input} type='number' placeholder='Mobile Number'/><br />
        </form>
        <button className={style.button}>Submit</button>
        
    </div>
  )
}

export default Register
import { useState } from 'react'
import styles from './style.module.css'

export default function FormInput({ onSubmit, title, user, deleteUser, switchToAdd }) {

   const initialState = { firstName: user?.firstName || '', lastName: user?.lastName || '', email: user?.email || '', password: user?.password || '' };

   const [formState, setFormState] = useState(initialState)
   const [errorForm, setErrorForm] = useState({ firstName: '', lastName: '', email: '', password: '' })

   const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(formState)
      setFormState({ firstName: '', lastName: '', email: '', password: '' });
   };


   const handleChange = (event) => {
      const { name, value } = event.target

      setFormState(old => {
         const newData = { ...old, [name]: value }
         localStorage.user = JSON.stringify({ ...newData, password: '' })
         return newData
      })



      setErrorForm(old => ({ ...old, [name]: '' }))

      if (name === 'firstName' && value.length < 3) {
         setErrorForm(old => ({ ...old, [name]: 'Please enter your first name' }))
      }

      if (name === 'lastName' && value.length < 3) {
         setErrorForm(old => ({ ...old, [name]: 'Please enter your last name' }))
      }

      if (name === 'email' && value.length < 10) {
         setErrorForm(old => ({ ...old, [name]: 'Please enter a valid email' }))
      }

      if (name === 'password' && value.length < 10) {
         setErrorForm(old => ({ ...old, [name]: 'Password should contain at least one uppercase, one lowercase, and one digit, and be 6 to 15 characters long' }))
      }

   }

   return (
      <div className={styles.FormInput}>

         <form className={styles.form} onSubmit={handleSubmit} >

            <p className={styles.add}>{title}</p>
            <div className={styles.line}></div>

            <div className={styles.singleInput}>
               <label>First Name</label>
               <input onChange={handleChange} value={formState.firstName} type="name" name='firstName' />
               {errorForm.firstName && <div className={styles.error}>{errorForm.firstName}</div>}
            </div>

            <div className={styles.singleInput}>
               <label>Last Name</label>
               <input onChange={handleChange} value={formState.lastName} type="name" name='lastName' />
               {errorForm.lastName && <div className={styles.error}>{errorForm.lastName}</div>}
            </div>

            <div className={styles.singleInput}>
               <label>Email</label>
               <input onChange={handleChange} value={formState.email} type="email" name='email' />
               {errorForm.email && <div className={styles.error}>{errorForm.email}</div>}
            </div>

            <div className={styles.singleInput}>
               <label>Password</label>
               <input onChange={handleChange} value={formState.password} type="password" name='password' />
               {errorForm.password && <div className={styles.error}>{errorForm.password}</div>}
            </div>

            <button type='submit'>Submit</button>
            <div className={styles.buttons}>
               {user && <button className={styles.switchButton} onClick={() => deleteUser(user?.id)}>Delete User</button>}
            </div>
         </form>
      </div>
   )
}


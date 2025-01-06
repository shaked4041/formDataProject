import React from 'react'
import FormInput from '../FormInput'
import axios from 'axios'

export default function Add({ setUsers }) {
  const onSubmit = (data) => {
    axios.post('http://localhost:4004/users', data)
      .then(res => {
        setUsers(res.data)
      })
      .catch(console.error)
  }
  return (
    <div>
      <FormInput title={'Add New User'} onSubmit={onSubmit} />
    </div>
  )
}

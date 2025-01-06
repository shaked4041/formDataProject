import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput';
import axios from 'axios';
import { useEffect } from 'react';

export default function Edit({ user, setUsers, onClickId, users }) {
   let nav = useNavigate()
   const onSubmit = (data) => {
      onClickId(null)
      axios.put(`http://localhost:4004/users/${user.id}`, data)
         .then(res => {
            setUsers(prevUsers =>
               prevUsers.map(u => u.id == res.data.id ? data : u)
            );
         })
         .catch(console.error)
   }

   const deleteUser = (id) => {

      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));

      axios.delete(`http://localhost:4004/users/${id}`)
         .then(res => {
            console.log('User deleted successfully');
         })
         .catch(console.error);
      }

   // const switchToAdd = () =>{
   //    onClickId(null)
   // }

   return (
      <div>
         <FormInput title={'Edit New User'} onSubmit={onSubmit} user={user} setUsers={setUsers} deleteUser={deleteUser}/>
      </div>
   )
}
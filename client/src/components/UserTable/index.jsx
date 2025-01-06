
import React from 'react';
import styles from './style.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function UserTable({ users, onClickId }) {
   const navigate = useNavigate();

   function buildTable(users) {
      return users.map((user) => (
         <tr key={user.id} onClick={() => onClickId(user)} >
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
         </tr>
      ));
   }

   return (
      <div className={styles.userTable}>
         <div className="chart">
            <table>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Email</th>
                  </tr>
               </thead>
               <tbody className={styles.myTable}>{buildTable(users)}</tbody>
            </table>
         </div>
      </div>
   );
}

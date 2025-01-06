import Header from './components/Header'
import Footer from './components/Footer'
import UserTable from './components/UserTable'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Add from './components/Add';
import Edit from './components/Edit';

export default function Layout() {
    const [currentUser, setCurrentUser] = useState(null)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4004/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch(console.error)
    }, [])


    return (
        <div className='layout'>
            <Header />
            <div className='content'>
                <img src="https://users-and-chill.netlify.app/1.png" alt="fox" className="pic" />
                <div className='forms'>
                    {currentUser? <Edit setUsers={setUsers} users= {users} user={currentUser} onClickId={setCurrentUser}/> : <Add setUsers={setUsers} />}
                    <UserTable users={users} setUsers={setUsers} onClickId={setCurrentUser}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

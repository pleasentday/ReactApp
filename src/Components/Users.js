import React, { useEffect, useState } from 'react'
import axios from "axios";
import './users.css';


const Users = () => {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [address, setAddress] = useState();
    // const [counter, useCounter] = useState(1);

    useEffect(() => {
        getUsers()
    })
    
    function getUsers(){
        axios.get("http://18.223.202.42:3001/api/users").then((response) => {
            setUsers(response.data);
        }).catch((e) => {
            console.log(e);
        });
    }

    function handleRequest(e) {
        e.preventDefault()
        const data = {
          name,
          email,
          address,
          age,
          login,
          password
        }
        axios.post('http://18.223.202.42:3001/api/users', data).then(response => {
        getUsers()
      }).catch(e => {
        console.log(e)
        })
    }
    
    return (
        <div>
            <form>
                <input type="text" className="form-control" placeholder="Ismingizni kiriting!" value={name} onChange={(e) => {setName(e.target.value)}} />
                <input type="num" className="form-control" placeholder="Yoshingizni kiriting!" value={age} onChange={(e) => {setAge(e.target.value)}} />
                <input type="email" className="form-control" placeholder="Emailingizni kiriting!" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <input type="text" className="form-control" placeholder="loginingizni kiriting!" value={login} onChange={(e) => {setLogin(e.target.value)}} />
                <input type="password" className="form-control" placeholder="Parolingizni kiriting!" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <input type="text" className="form-control" placeholder="Adresingizni kiriting!" value={address} onChange={(e) => {setAddress(e.target.value)}} />
                <div className="btn btn-dark" onClick={handleRequest}>Yuborish</div>
            </form>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ismi</th>
                    <th scope="col">Yoshi</th>
                    <th scope="col">Emaili</th>
                    <th scope="col">Logini</th>
                    <th scope="col">Paroli</th>
                    <th scope="col">Addresi</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td><a href="{user.email}">{user.email}</a></td>
                        <td>{user.login}</td>
                        <td>{user.password}</td>
                        <td>{user.address}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>

            
        </div>
    )
}

export default Users

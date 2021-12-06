import {useState} from 'react';
import { Person } from './Person';

function Content() {
    const [people, setPeople] = useState([
        {
          name: "Muhammaddiyor",
          surname: "Tohirov",
          age: 18
        }
      ]);
    
      const [person,setPerson] = useState("");
      const [personSur,setPersonSur] = useState("");
      const [personAge,setPersonAge] = useState("");
    
      function uzgartirish(e) {
        setPerson(e.target.value)
      }
      function uzgartirishSur(e) {
        setPersonSur(e.target.value)
      }
      function uzgartirishAge(e) {
        setPersonAge(e.target.value)
      }
    
      function qushish(e) {
        setPeople([...people, {name: person, surname:personSur, age: personAge}])
        setPerson("");
        setPersonSur("");
        setPersonAge("");
        console.log(people)
      }
    return (
        <div className="content">
        <div className="container py-5">
        
        <table className="table my-2">
            <thead>
            <tr className="row">
                <th className="col"> 
                <input
                type="text"
                className="form-control"
                placeholder="Ismingizni kiriting!"
                name="person"
                value={person}
                onChange={uzgartirish}
                required/>
               </th>
      
                <th className="col">
                <input
                type="text"
                className="form-control"
                placeholder="Familiyangizni kiriting!"
                name="personSur"
                value={personSur}
                onChange={uzgartirishSur}
                required/>
                </th>
      
                <th className="col">
               <input
                type="text"
                className="form-control"
                placeholder="Yoshingizni kiriting!"
                name="personAge"
                value={personAge}
                onChange={uzgartirishAge}
                required/>
                </th>
                
                
                <th className="col">
                <input
                type="submit"
                className="form-control"
                onClick={qushish}
                required/>
                </th>
                </tr>
      
              <tr>
                <th scope="col"></th>
                <th scope="col">Ism:</th>
                <th scope="col">Familiya:</th>
                <th scope="col">Yoshi:</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, pos) => 
                <tr>
                  <th scope="col">{pos}</th>
                  <th scope="col">{person.name}</th>
                  <th scope="col">{person.surname}</th>
                  <th scope="col">{person.age}</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </div>
    )
}

export default Content;
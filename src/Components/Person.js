const App =  ()=>console.log('salom')

App()


export function Person(props){
   return(
     <>
     <tr>
      <th scope="row"></th>
      <td>{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.age}</td>
    </tr>
     </>
   )
}

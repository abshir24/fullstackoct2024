function EventHandler(){
    let buttonClick = () =>{
        console.log("The button was clicked")
    }

    let arr = [1,2,3,4]

    for(let i = 0;i<arr.length;i++){
        console.log(arr[i])
    }

    return ( 
        <div>
            <button onClick = {buttonClick}> Click Button</button>
        </div> 
    )
}

export default EventHandler



{/* <ul>
        { students.map((student) => (
          <li key={student.id}>
            <h2>Student Name: { student.name } </h2>
            <h2>Student Gpa: { student.gpa }</h2>
            <h2>Student year: { student.year }</h2>
          </li>
        ))} 
      </ul>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Gpa</td>
            <td>Year</td>
          </tr>
        </thead>
        
        <tbody>
          { students.map((student) => (
            <tr key={student.id}>
              <td>{ student.name } </td>
              <td>{ student.gpa }</td>
              <td>{ student.year }</td>
            </tr>
          ))} 
        </tbody>
        
      </table> */}


    //   let students = [
    //     {
    //       "id": 1,
    //       "name":"Tim",
    //       "gpa": 4.0,
    //       "year":"3"
    //     },
    //     {
    //       "id": 2,
    //       "name":"Tyla",
    //       "gpa": 4.0,
    //       "year":"2"
    //     },
    //     {
    //       "id": 3,
    //       "name":"Taurus",
    //       "gpa": 3.5,
    //       "year":"1"
    //     },
    //   ]
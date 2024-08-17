import ReactDOM from 'react-dom';
import React,{useEffect, useState} from 'react';

function Userdemo(){
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response=>response.json())
      .then(data=>setUsers(data))
      .then(setLoading(false))
      .catch(error=>{
        console.error('if it is not loading, will be error message');
        setLoading(false);
      })
    },[])
    if(loading){
      return<p>loading</p>
    }
    return(
      <div>
        <h1>Todo List - Title</h1>
        <ol>
          {users.map(user=><li key={user.id}>{user.title}</li>)}
        </ol>
      </div>
    )
}

ReactDOM.render(<Userdemo/>,document.getElementById('root'));

export default Userdemo;


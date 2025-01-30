
import React from 'react'

function FetchApi() {
    const url ="https://api.github.com/users/"
    const fetchUser = () =>{
        const res = fetch(url)
        const data = res.json();
        console.log(data);
    }
  return (
    <div>
        <button onClick={fetchUser}> Fetch Github User</button>
    </div>
    
  )
}

export default FetchApi
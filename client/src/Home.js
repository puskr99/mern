import React from 'react'

function Home() {

    const logout = async () => {
        const res = await fetch('/logoutB')
        if(res.status === 205)
        {
            console.log('Logged Out Successfully')
            
        }
    }
  return (
    <div>
        Home
        <p>
            <button onClick={logout}>Logout</button>
        </p>
    </div>
  )
}

export default Home
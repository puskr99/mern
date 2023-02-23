import React,{useState} from 'react'

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }
  const submitHandler= async (e)=>{
      e.preventDefault();
      if(!email || !password){
         setError('Fill all the spaces!')
      }
      else{
        const resB = await fetch('/loginB',{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            email,password
          })
        })
        const res = await resB.json();
        console.log(res);

        if(!res || resB.status === 422){
        setError('Invalid Credentials')
      }
      if(resB.status === 423){
        setError('Error occured with authorization')
      }
        if(resB.status === 201){
        setError('Logged In successfully')
        }

      }
  }

  return (
    <div>
        <form>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <p>Email Address</p>
      <input type='text' onChange={emailHandler} />
      <p>Password</p>
      <input type='text' onChange={passwordHandler} />
      <p><button onClick={submitHandler}>Login</button></p>
      <span style={{color:'red',fontWeight:'bold'}}>{error}</span>
      </div>
      </form>

    </div>
  )
}

export default Login
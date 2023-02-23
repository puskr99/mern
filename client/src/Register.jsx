import React,{useState} from 'react'

function Register() {
  const [email,setEmail]=useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setcPassword] = useState('')
  const [error,setError] = useState('')
  const validEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  const validPassword = /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/


  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }
  const cpasswordHandler=(e)=>{
    setcPassword(e.target.value)
    
  }
  const submitHandler= async (e)=>{
      e.preventDefault();
      if(!email || !password || !cpassword){
         setError('Fill all the spaces!')
      }
     else if(!email.match(validEmail)){
         setError('Email Not Valid!')
      }
      else if(!password.match(validPassword)){
        setError('Password Not Valid.Need atleast 3 smalls, 2 capitals,2 numbers and 1 special symbols.')
      }
      else if(password !== cpassword){
        setError('Password Not Matched!')
      }
      else{
        const resB = await fetch('/registerB',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,password,cpassword
          })
        })
        const res = await resB.json();
        console.log(res);

        if(resB.status === 422){
        setError('Email already exists')
      }
        if(resB.status === 201){
        setError('User registered successfully')
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
      <p>Password</p>
      <input type='text' onChange={cpasswordHandler} />
      <p><button onClick={submitHandler}>Register</button></p>
      <span style={{color:'red',fontWeight:'bold'}}>{error}</span>
      </div>
      </form>

    </div>
  )
}

export default Register
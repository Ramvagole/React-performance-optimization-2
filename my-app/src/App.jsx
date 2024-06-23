import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCustom } from './component/CustomHook'
import Createlogin from './component/Createlogin'
function App() {
  let [val,setval]=useCustom({})
  let [store,setStore]=useState({})
  let [che,setAns]=useState("")
  let [bol,setBol]=useState("")
  let [dis,setDis]=useState("")
  
  let [storeAll,setAll]=useState({user:"",email:"",password:""})
  let [userCheck,setuserError]=useState("")
  let [email,setemailError]=useState("")
  let [password,setpasswordError]=useState("")
  let [logdis,setlog]=useState("")
  let [display,setDisplay]=useState("")
  let confirmPassword=useCallback((e)=>{
    setval({[e.target.name]:e.target.value})
    if(e.target.value.toUpperCase()===(val.password ?? "").toUpperCase()){
      
      setAns("password  match...")
      setBol(true)
      setDis(false)
    }else{
      setAns("password does not match...")
      setBol(false)
      setDis(true)
    }
    
  },[val])
  let submit=useCallback((e)=>{
    e.preventDefault()
    setStore(val)
    setval({user:"",email:"",confirm:"",password:""})
    setBol("")
    setDis("")
    setAns("")
    alert("succesfully created") 
  },[bol])
  function checkData(e){
    e.preventDefault()
    if(storeAll.user.toUpperCase()===store.user.toUpperCase()){
      setuserError("username entered is correct")
    }else{
      setuserError("username is not enterd correct")
      setlog(true)
    }
    if(storeAll.email.toUpperCase()===store.email.toUpperCase()){
      setemailError("email entered is correct")
    }else{
      setuserError("email is not enterd correct")
      setlog(true)
    }
    if(storeAll.password.toUpperCase()===store.password.toUpperCase()){
      setpasswordError("password entered is correct")
    }else{
      setpasswordError("password is not enterd correct")
      setlog(true)
    }
    if(storeAll.user.toUpperCase()===store.user.toUpperCase() && storeAll.email.toUpperCase()===store.email.toUpperCase() && storeAll.password.toUpperCase()===store.password.toUpperCase()){
      setlog(false)
      setDisplay("Login is sucessfull")
    }
  }
  function refresh(){
    setAll({user:"",email:"",password:""})
    setemailError("")
    setuserError("")
    setpasswordError("")
    setlog("")
    setDisplay("")
    setBol("")
  }
  return (
    <>
      <Createlogin val={val} setval={setval} submit={submit} bol={bol} che={che} confirmPassword={confirmPassword} dis={dis}/>
      <hr/>
      <div>
        <h3>Login Form</h3>
        <form onSubmit={checkData}>
        <input type='text' name="user" placeholder='Enter the username' value={storeAll.user} onChange={(e)=>setAll({...storeAll,[e.target.name]:e.target.value})}/><br/>
        <h3>{userCheck}</h3>
        <input type='text' name="email" placeholder='Enter the Email' value={storeAll.email} onChange={(e)=>setAll({...storeAll,[e.target.name]:e.target.value})}/><br/>
        <h3>{email}</h3>
        <input type='text' name="password" placeholder='Enter the password' value={storeAll.password} onChange={(e)=>setAll({...storeAll,[e.target.name]:e.target.value})}/><br/>
        <h3>{password}</h3>
        <input disabled={logdis} type='submit'/>
        </form>
        <h1 style={{color:"green"}}>{display}</h1>
      </div>
      <button onClick={refresh}>refresh</button>
    </>
  )
}

export default App

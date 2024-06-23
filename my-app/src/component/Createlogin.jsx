import { memo } from "react"

function Createlogin({val,setval,submit,bol,che,confirmPassword,dis}){
    

    return(
        <>
        <h1>createAcount From</h1>
        <form onSubmit={submit}>
            <input type="text" placeholder='ENTER USER NAME' name="user" value={val.user} onChange={(e)=>setval({[e.target.name]:e.target.value})}/><br/><br/>
            <input type='email' placeholder='ENTER EMAIL' name="email" value={val.email} onChange={(e)=>setval({[e.target.name]:e.target.value})}/><br/><br/>
            <input type="text" placeholder='ENTER PASSWORD' name="password" value={val.password} onChange={(e)=>setval({[e.target.name]:e.target.value})}/><br/><br/>
            <input type="text" placeholder='ENTER SAME PASSWORD' name="confirm" value={val.confirm} onChange={(e)=>confirmPassword(e)}/>
            <h5 style={{marginTop:"0px",color:(bol)?"green":"red"}}>{che}</h5><br/>
            <input disabled={dis} type='submit'/>
        </form>
        
    </>
    )
}

export default memo(Createlogin)
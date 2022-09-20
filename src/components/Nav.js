import React,{useState,useEffect} from 'react'
import './Nav.css'
function Nav(){
    const[show,setShow]=useState(false)

    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        if(window.scrollY >100){
            setShow(true)
        }else setShow(false)
    })
        return () =>window.removeEventListener("scroll",()=>{})
        
     
    },[])

    return (
        <div clasName={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="http://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b" alt="Netflix logo" />
        </div>
    )
}

export default Nav
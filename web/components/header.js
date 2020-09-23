import { useState, useEffect } from "react"
import Routes from "../pages/routes"

const Header = () => {

  const [pos, setPos] = useState("top")

  useEffect (()=>{
    document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 5){
           setPos("moved")
        } else {
           setPos("top")
        }
    })
},[])
  return (
    <header id="header" style={{backgroundColor: pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, .7)" }}>
      <Routes/>
    </header>
  )
}

export default Header
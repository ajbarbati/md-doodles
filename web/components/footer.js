import { useRouter } from "next/router"
import Routes from "../pages/routes"

const Footer = () => {
  const router = useRouter()
  return (
    <footer>
      <div className="fInfo">
        <h3>Contact Info</h3>
        <p>3302231122</p>
        <p>tangelmdd@gmail.com</p>
      </div>
      <div className="fLinks">
        <h3>Links</h3>
        <p><a onClick={() => router.push("/puppies")}>All Puppies</a></p>
        <p><a onClick={() => router.push("/litters")}> Litters</a></p>
        <p><a onClick={() => router.push("/info")}> Info</a></p>
      </div>
    </footer>
  )
}

export default Footer

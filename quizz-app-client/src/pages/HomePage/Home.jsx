import { Link } from "react-router-dom"



export default function Home() {
  return (
    <div className='container centered'>
    <div>
      <h1>This is the home page</h1>
      <Link to="login">Login</Link>
      <Link to="logup">Logup</Link>
    </div>
    </div>
  )
}

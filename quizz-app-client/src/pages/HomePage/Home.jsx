import { Link } from "react-router-dom"



export default function Home() {
  return (
    <main>
      <div className='container centered'>
        <div>
          <h1 className="mb-3 text-center">Quizz App</h1>
          
          <Link to="login"  class="btn log">Login</Link>
          <Link to="logup" class="btn reg">Logup</Link>
        </div>
      </div>
    </main>
  )
}

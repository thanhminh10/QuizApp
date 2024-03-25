import LoginForm from "../../components/LoginForm/LoginForm"


export default function Login() {
  return (
    <div className='container centered'>
      <div className='d-flex justify-content-center align-items-center' >
        <div className='box-login text-main text-dark rounded'>
          <div className='form-content rounded border w-full'>
            <LoginForm/>
          </div>
        </div>  
      </div>
    </div>
  )
}

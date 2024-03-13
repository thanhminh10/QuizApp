import LogupForm from "../../components/LogupForm/LogupForm"


export default function Logup() {
  return (
    <div className='container centered'>
      <div className='d-flex justify-content-center align-items-center' >
        <div className='box-login text-main text-dark rounded'>
          <div className='form-content rounded border w-full'>
            <LogupForm/>
          </div>
        </div>  
      </div>
    </div>
  )
}

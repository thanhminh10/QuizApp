import { useForm } from 'react-hook-form';
import { ENDPOINTS, createEndpointAPI } from '../../api';
export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // Handle form submission, e.g., login logic
     createEndpointAPI(ENDPOINTS.participant)
     .post(data)
     .then(res => console.log(res))
     .catch(err => console.log(err))
     ;
  };
  return (
    <div>
        <form className="form-signin" noValidate onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h1 mb-3 font-weight-normal text-center fw-bold">Quizz App</h1>
        <h3 className="h3 mb-3 font-weight-normal text-center fw-bold">Login</h3>
       
            
            <div className="mb-3">

              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail" 
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Email address" 
              {...register('email', { required: "Email is required",
                  pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
               },)}/>
              {errors.email && <span className='pt-2 text-danger'>{errors.email.message}</span>}
            </div>
            <div className="mb-3">

              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" 
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Password"
               {...register('password', { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long'
                  }
               
                })} />
              {errors.password && <span className='pt-2 text-danger'>{errors.password.message}</span>}
            </div>
            <div className="mt-3">
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
            </div>
        </form>
    </div>
  )
}

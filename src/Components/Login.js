import React ,{useEffect,useState,useMemo} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { login } from '../Redux/Login/LoginActions';
import { Redirect } from "react-router-dom";
import {
  FormControl,
  FormGroup,
  FormLabel,
  Form,
  Navbar,
  Nav,
  Button
} from "react-bootstrap";
function Login(){
  // store data access start
const loginData = useSelector(state =>state.Login)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [inputValue,setInputValue] = useState({email:'',password : ''})
  const [activestate,setActivestate] = useState('')
    const [error,setError] = useState(null)
    const [successStatus,setSuccessStatus] = useState(null)
  // component all states define End

   //hooks start

// add data of login api into constant,hook start
   useMemo(()=>{
     if(loginData && loginData.login && loginData.login.error){
       setError(loginData.login.error)
     }
   },[loginData])
// add data of login api into constant,hook End

// add data of login api into constant,hook start
   useMemo(()=>{
     if(loginData && loginData.login && loginData.login.success){
        setSuccessStatus(loginData.login.success)
     }
   },[loginData])
// add data of login api into constant,hook End
   //hooks end

// component function start

// examHandler function start
   const loginHandler = (event) =>{
   event.preventDefault()
   const login_info = inputValue;
     dispatch(login(login_info))
 }
// examHandler function End

if(loginData.login.success === true){
  localStorage.setItem('access_token', loginData.login.result.token);
  localStorage.setItem('user', inputValue.email);
      window.location.href = '/';
    }
  return(
<>
  <div className="login-header">
      <Navbar bg="orange" variant="dark">
        <Navbar.Brand href="#home">
          <img
              src="img/logo.png"
              width="192px"
              height="57px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          <Nav.Link href="/login">Login</Nav.Link>
        </Form>
      </Navbar>
  </div>
  <div className="Below-header">
  <div className='row adminLogin'>
              <div className='col-md-4'>
              </div>
              <div className='col-md-4'>
                  <div className='login-page' />
                  <div className="Login">
                    {error != null ? (<h6 className="addStudent-error">*{JSON.stringify(error).replace(/[\[\]"]+/g,"")}</h6>):null  }
                      <Form onSubmit={(e) => loginHandler(e)}>
                          <Form.Group controlId="email">
                           <Form.Label> Email address </Form.Label>
                              <Form.Control
                                  autoFocus
                                  type="email"
                                  value={inputValue.email}
                                  onChange={(e) =>setInputValue({...inputValue,email:e.target.value})}
                              />
                              {error != null && error.email ? (<h6 className="addStudent-error">*{JSON.stringify(error.email).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </Form.Group>
                          <Form.Group controlId="password" >
                          <Form.Label> Password </Form.Label>
                              <Form.Control
                                  value={inputValue.password}
                                  onChange={(e) =>setInputValue({...inputValue,password:e.target.value})}
                                  type="password"
                              />
                            {error != null && error.password ? (<h6 className="addStudent-error">*{JSON.stringify(error.password).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </Form.Group>
                          <Button
                              block
                              type="submit"
                          >
                              Login
                          </Button>
                      </Form>
                  </div>
              </div>
              <div className='col-md-4'>
              </div>
          </div>
     </div>
</>
  )
}

export default Login

import { useEffect } from 'react'
import Logincomp from '../components/Authentication/Login'

const Login = () => {
  useEffect(() => {
    document.title = "Login to Asrat"
  })

  return <Logincomp />
}

export default Login
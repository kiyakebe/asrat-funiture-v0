import { Outlet } from "react-router-dom"
import Header from "../components/Layout/1_Header/Header"
import Footer from "../components/Layout/2_Footer/Footer"

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
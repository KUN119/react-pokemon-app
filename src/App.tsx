import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetalPage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'

const Layout = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path= '/pokemon/:id' element={<DetailPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

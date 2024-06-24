
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { LoginPage } from '../Auth'
import { HeroesRoutes } from '../heroes'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='login' element={<LoginPage/>} />
        <Route path='/*' element={<HeroesRoutes/>} />
    </Routes>
    </>
  )
}

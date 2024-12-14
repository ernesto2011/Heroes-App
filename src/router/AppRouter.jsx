
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { LoginPage } from '../Auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route  path='/login' element={
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        } />
        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
    </Routes>
    </>
  )
}

import React, { useContext } from 'react'
import AuthContext from '../contexts/auth'

import SignRoutes from './SignRoutes'
import AuthenticatedRoutes from './AuthenticatedRoutes'

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext)
  return signed ? <AuthenticatedRoutes /> : <SignRoutes />
}

export default Routes

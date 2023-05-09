import React from 'react'
import IndexRouter from './router/IndexRouter'
import RouteGuard from './router/routerGuard'

export default function App() {
  return (
    <div style={{ height: '100%' }}>
      <RouteGuard>{IndexRouter()}</RouteGuard>
    </div>
  )
}

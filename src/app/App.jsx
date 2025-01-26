import Maintenance from '@layouts/maintenance/maintenance'
import SplineModel from '@components/spline/spline'
import AppContext from '@context/app-context'
import Router from '@routes/router/root'
import './App.css'
import { useContext, useEffect } from 'react'

function App() {
  // Connect API
  const context = useContext(AppContext)
  useEffect(() => {
    context.fetchData();
  }, [])

  return (
    <>
      {context.dataMaintenance.active ?
        (
          <Maintenance maintenance={context.dataMaintenance} />
        ) :
        (
          <Router />
        )}
      <Maintenance maintenance={context.dataMaintenance} />
      <SplineModel />
    </>
  )
}

export default App

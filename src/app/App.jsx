import Maintenance from '@layouts/maintenance/maintenance'
import AppContext from '@context/app-context'
import Router from '@routes/router/root'
import './App.css'
import { useContext, useEffect } from 'react'

function App() {
  const context = useContext(AppContext)

  useEffect(() => {
    context.fetchData();
  }, [])

  return (
    <>
      <Maintenance maintenance={context.dataMaintenance} />
      <Router />
    </>
  )
}

export default App

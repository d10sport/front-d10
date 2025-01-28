import Maintenance from '@layouts/maintenance/maintenance'
import AppContext from '@context/app-context'
import AppRouter from '@routes/router/root'
import './App.css'
import { useContext, useEffect } from 'react'

function App() {
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
            <AppRouter />
        )}
    </>
  )
}

export default App

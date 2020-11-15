import Contactanos from './components/Contactanos'
import HeroBanner from './components/HeroBanner'
import NavBar from './components/NavBar'
import Servicios from './components/Servicios'

const App = () => {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <Servicios />
      <Contactanos title='Contáctanos' text='Queremos saber mas de tí' />
    </>
  )
}

export default App

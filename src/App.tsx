import './App.css'
import FooterComponent from './components/footerComponent'
import HeaderComponent from './components/headerComponent'
import Header from './components/headerComponent/headerComponent'
import MainComponent from './components/mainComponent'

function App() {
  return (
    <div className='flex flex-col w-screen min-w-80 h-screen overflow-hidden'>
      <Header />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

export default App

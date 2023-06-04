import './App.css'
import FooterComponent from './components/footerComponent'
import HeaderComponent from './components/headerComponent'
import MainComponent from './components/mainComponent'

function App() {
  //document.write(window.outerWidth)
  return (
    <div className='flex flex-col w-screen min-w-80 h-screen overflow-hidden'>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

export default App

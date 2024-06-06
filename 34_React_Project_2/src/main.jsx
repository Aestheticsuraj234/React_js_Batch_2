import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./globals.css"
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <main className='relative flex flex-col min-h-screen'>
    <div className='flex-grow flex-1'>
    <Navbar/>
    <App />
    </div>
  </main>,
)

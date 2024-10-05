import { Route, Routes, HashRouter } from 'react-router-dom'
import { PolicyPage } from './pages/policy/PolicyPage'
import { Navigation } from './components/NavigationMenu'
import { Dropdown } from './components/Dropdown'
import { ReliquiasPage } from './pages/reliquiasLaguneras/ReliquiasPage'

function App() {
  return (
    <HashRouter basename='/'>
      <div className='w-full'>
        <header className='pt-4 pb-2 pl-2'>
          <div className='flex w-full max-sm:hidden justify-center'>
            <Navigation />
          </div>
          <div className='md:hidden'>
            <Dropdown />
          </div>
        </header>
        <main className='mt-2 p-2'>
          <Routes>
            <Route path='/' element={<PolicyPage />} />
            <Route path='/camiones-game' element={<h1>Camiones Game</h1>} />
            <Route path='/reliquias-app' element={<ReliquiasPage />} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/contact' element={<h1>Contact</h1>} />
            <Route path='/politica' element={<PolicyPage />} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App

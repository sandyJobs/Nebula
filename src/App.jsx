import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StickyButterflyCTA from './components/stickyButterfly'

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    <StickyButterflyCTA />
    </>
  )
}

export default App
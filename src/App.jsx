import { useState } from 'react'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import FeaturedItems from './components/FeaturedItems.jsx'
import PopularItems from './components/Popular.jsx'
import ClosedItems from './components/ClosedItems.jsx'
import Pricing from './components/Pricing.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Entry />
      <Main />
      <FeaturedItems />
      <PopularItems />
      <ClosedItems />
      <Pricing />
      <Footer />
    </div>

  )
}

export default App

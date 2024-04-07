import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div>
      <Link to="/demo">Demo</Link>

      <div>{useRoutes(routes)}</div>
    </div>
  )
}

export default App

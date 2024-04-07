import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'normalize.css'
import '@/assets/css/index.less'

import App from '@/App'
import { Suspense } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
)

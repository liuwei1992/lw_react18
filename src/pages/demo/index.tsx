import { memo, Suspense } from 'react'
import type { ReactNode, FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  return (
    <div>
      Demo
      <div>
        <Link to="/demo/child1"> demo-child1</Link>
        <Link to="/demo/123123"> demo-child-id</Link>
      </div>
      <div>
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default memo(Demo)

import { useTypeDispatch } from '@/hooks'
import { addCountAction } from '@/store/modules/counter'
import { memo, Suspense } from 'react'
import type { ReactNode, FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  const dispatch = useTypeDispatch()
  return (
    <div>
      Demo
      <div>
        <Link to="/demo/child1"> demo-child1</Link>
        <Link to="/demo/123123"> demo-child-id</Link>
      </div>
      <button
        onClick={() => {
          console.log('执行了')
          dispatch(addCountAction(20))
        }}
      >
        修改state Count
      </button>
      <div>
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default memo(Demo)

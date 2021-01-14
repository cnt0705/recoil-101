import { RecoilRoot } from 'recoil'
import { TodoList } from './components/TodoList'

export const App = () => (
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>
)

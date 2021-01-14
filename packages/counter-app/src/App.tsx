import { RecoilRoot } from 'recoil'
import { CharacterCounter } from './components/CharacterCounter'

export const App = () => (
  <RecoilRoot>
    <CharacterCounter />
  </RecoilRoot>
)

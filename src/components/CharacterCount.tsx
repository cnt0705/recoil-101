import { selector, useRecoilValue } from 'recoil'
import { textState } from './TextInput'

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  },
})

export const CharacterCount = () => {
  const count = useRecoilValue(charCountState)

  return <div>Character Count: {count}</div>
}

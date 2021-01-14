import { atom, useRecoilState } from 'recoil'

export const textState = atom({
  key: 'textState',
  default: '',
})

export const TextInput = () => {
  const [text, setText] = useRecoilState(textState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <>
      <input type="text" value={text} onChange={onChange} />
      <div>Echo: {text}</div>
    </>
  )
}

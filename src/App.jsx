import './App.css'
import Button from './components/baseUI/Button/Button'
import ButtonLink from './components/baseUI/Button/ButtonLink'
import IconStatic from './components/baseUI/Icons/IconStatic'
import s from './components/baseUI/Icons/Icons.module.css'
function App() {
  return (
    <>
      <Button>btn</Button>
      <ButtonLink>link</ButtonLink>
      <IconStatic id="icon-drop" onClass={s.iconDrop} />
    </>
  )
}

export default App

import { Desktop } from './components/Desktop/Desktop'
import { Taskbar } from './components/Taskbar/Taskbar'
import { CustomCursor } from './components/Cursor/CustomCursor'
import { Window } from './components/Window/Window'
import { CatMascot } from './components/Mascot/CatMascot'
import { AboutContent } from './components/About/AboutContent'
import { ProjectsContent } from './components/Projects/ProjectsContent'
import { ContactContent } from './components/Contact/ContactContent'
import { LinksContent } from './components/Links/LinksContent'

function App() {
  return (
    <>
      <CustomCursor />
      <div className="os-shell">
        <Desktop>
          <CatMascot />
          <Window id="about"><AboutContent /></Window>
          <Window id="projects"><ProjectsContent /></Window>
          <Window id="contact"><ContactContent /></Window>
          <Window id="links"><LinksContent /></Window>
        </Desktop>
        <Taskbar />
      </div>
    </>
  )
}

export default App

import { Desktop } from './components/Desktop/Desktop'
import { Taskbar } from './components/Taskbar/Taskbar'
import { CustomCursor } from './components/Cursor/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <div className="os-shell">
        <Desktop>
          {/* Windows will be added in next task */}
        </Desktop>
        <Taskbar />
      </div>
    </>
  )
}

export default App

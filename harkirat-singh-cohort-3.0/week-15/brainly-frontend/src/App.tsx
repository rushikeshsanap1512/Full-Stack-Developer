// import './App.css'
// import { Button } from './components/ui/Button'
// import { PlusIcon } from './icons/PlusIcon'

// function App() {

//   return (
//     <>
//       <Button startIcon={<PlusIcon />} size="sm" varient="primary" text="Share" />
//       <Button size="md" varient="secondary" text="Add Content" />
//       <Button size="lg" varient="secondary" text="Add Content" />
//     </>
//   )
// }

// export default App

import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App(){
  return(
    <>
      <Button
        varient={"primary"} 
        startIcon={<PlusIcon size={"lg"} />}
        endIcon={<ShareIcon size={"lg"} />}
        size="lg" 
        title={"Share"}>
      </Button>

      <Button
        varient={"secondary"} 
        startIcon={<PlusIcon size={"lg"} />}
        endIcon={<ShareIcon size={"lg"} />}
        size="lg" 
        title={"Share"}>
      </Button>

      <Button
        varient={"primary"} 
        startIcon={<PlusIcon />}
        endIcon={<ShareIcon />}
        size="sm" 
        title={"Share"}>
      </Button>

      <Button
        varient={"primary"} 
        startIcon={<PlusIcon size={"md"} />}
        endIcon={<ShareIcon size={"md"} />}
        size="md" 
        title={"Share"}>
      </Button>
      
    </>
  )
}

export default App
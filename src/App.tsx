import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { Sidebar } from "./components/Sidebar"
import { Content } from "./components/Content"

library.add(fas, far)

export default function App() {
  return (
    <div className="w-full h-screen grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Sidebar />
      <Content />
    </div>
  )
}

import Main from "./Page/Main.jsx";
import Sidebar, { } from "./Page/Sidebar.jsx";
export default function App() {
  return (
    <>
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
      <Sidebar />
      <Main/>
    </>
  )
}
import "/assets/js/plugins/chartjs.min.js?url"
import "/assets/js/plugins/perfect-scrollbar.min.js?url"
import "/assets/js/argon-dashboard-tailwind.js?url"
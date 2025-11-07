import UserInfo from "./components/UserInfo"
import { logProps } from "./components/LogProps"
import IncludeUser from "./components/IncludeUser"
import UserForm from "./components/UserForm"

const UserInfoWrapper = IncludeUser(UserInfo, "1")

const App = () => {
  return (
    <>
      <UserForm />
    </>
  )
}

export default App

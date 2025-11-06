import UserInfo from "./components/UserInfo"
import { logProps } from "./components/LogProps"

const UserInfoWrapper = logProps(UserInfo)

const user = {
  id: "1",
  name: "Sarah Waters",
  age: 55,
  country: "United Kingdom",
  books: ["Fingersmith", "The Night Watch"],
}

const App = () => {
  return (
    <>
      <UserInfoWrapper user={user} />
    </>
  )
}

export default App

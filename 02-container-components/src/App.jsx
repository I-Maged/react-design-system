import CurrentUserLoader from "./components/CurrentUserLoader"
import UserInfo from "./components/UserInfo"
import UserLoader from "./components/UserLoader"
import ResourceLoader from "./components/ResourceLoader"
import BookInfo from "./components/BookInfo"
import DataSource from "./components/DataSource"
import axios from "axios"
import RenderDataProps from "./components/RenderDataProps"

const getDataFromServer = async (url) => {
  const response = await axios.get(url)
  return response.data
}

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key)
}

const Message = ({ msg }) => {
  return <h1>{msg}</h1>
}

const App = () => {
  return (
    <>
      <DataSource
        getData={() => getDataFromLocalStorage("loco")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>

      <ResourceLoader resourceUrl={"/api/users/3"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <DataSource
        getData={() => getDataFromServer("/api/users/1")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>

      <RenderDataProps
        getData={() => getDataFromServer("/api/users/2")}
        render={(resource) => <UserInfo user={resource} />}
      ></RenderDataProps>
    </>
  )
}

export default App

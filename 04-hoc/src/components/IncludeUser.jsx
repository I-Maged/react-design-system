import { useEffect, useState } from "react"
import axios from "axios"

const IncludeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      ;(async () => {
        const response = await axios.get(`/api/users/${userId}`)
        setUser(response.data)
      })()
    }, [])

    return <Component {...props} user={user} />
  }
}

export default IncludeUser

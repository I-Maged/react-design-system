import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    ;(async () => {
      const response = await axios.get("/api/current-user")
      setUser(response.data)
    })()
    // const getuser = async () => {
    //   const response = await axios.get("/api/current-user")
    //   setUser(response.data)
    // }
    // getuser()
  }, [])

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user })
        }
        return child
      })}
    </>
  )
}

export default CurrentUserLoader

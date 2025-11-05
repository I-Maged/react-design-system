import { useEffect, useState } from "react"

const RenderDataProps = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null)

  useEffect(() => {
    ;(async () => {
      const data = await getData()
      setResource(data)
    })()
  }, [])

  return render(resource)
}

export default RenderDataProps

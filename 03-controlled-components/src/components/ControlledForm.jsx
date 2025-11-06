import { useEffect, useState } from "react"

const ControlledForm = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [error, setError] = useState("")

  useEffect(() => {
    if (name.length < 5) {
      setError("Name cannot be less than 5 characters")
    } else {
      setError("")
    }
  }, [name])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(age)
  }

  return (
    <form onSubmit={submitHandler}>
      {error && <h2>{error}</h2>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default ControlledForm

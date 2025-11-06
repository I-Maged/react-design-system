import { useState } from "react"
import UncontrolledFlow from "./components/UncontrolledFlow"
import ControlledFlow from "./components/ControlledFlow"

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={() => goNext({ name: "Maged" })}>Next</button>
    </>
  )
}
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={() => goNext({ age: 30 })}>Next</button>
    </>
  )
}
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3. You qualified for the gift</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  )
}
const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step #4</h1>
      <button onClick={() => goNext({ country: "Egypt" })}>Next</button>
    </>
  )
}

const App = () => {
  const [data, setData] = useState({})
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep })
    setCurrentStepIndex(currentStepIndex + 1)
    /*  const nextStepIndex = currentStepIndex + 1

    const newData = {
      ...data,
      ...dataFromStep,
    }

    console.log(newData)

    if (nextStepIndex < children.length) {
      setCurrentStepIndex(nextStepIndex)
    } else {
      onDone(newData)
    }

    setData(newData) */
  }

  return (
    <>
      <ControlledFlow currentIndex={currentStepIndex} onNext={goNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  )
}

export default App

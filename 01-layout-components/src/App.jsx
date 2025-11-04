import LargeListAuthors from "./components/authors/LargeListAuthors"
import SmallListAuthors from "./components/authors/SmallListAuthors"
import LargeListBooks from "./components/books/LargeListBooks"
import SmallListBooks from "./components/books/SmallListBooks"
import NumberedList from "./components/lists/NumberedList"
import RegularList from "./components/lists/RegularList"
import Modal from "./components/Modal"
import { authors } from "./data/authors"
import { books } from "./data/books"

/* import SplitScreen from "./components/SplitScreen"

const LeftSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>
}
const RightSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "blue" }}>{title}</h2>
} */

/* const App = () => {
  return {
     <SplitScreen leftWidth={1} rightWidth={2}>
      <LeftSideComponent title={"Left Side Component"} />
      <RightSideComponent title={"Right Side Component"} />
    </SplitScreen> 
  }
} */

const App = () => {
  return (
    <>
      {/* <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallListAuthors}
      />
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeListAuthors}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallListBooks}
      />
      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeListBooks}
      /> */}
      <Modal>
        <LargeListBooks book={books[0]} />
      </Modal>
    </>
  )
}

export default App

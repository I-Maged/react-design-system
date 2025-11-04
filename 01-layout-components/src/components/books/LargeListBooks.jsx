const LargeListBooks = ({ book }) => {
  const { name, pages, title, price } = book
  return (
    <>
      <h2>Name: {name}</h2>
      <p>{price}</p>
      <h2>Title</h2>
      <p>{title}</p>
      <p># of Pages: {pages}</p>
    </>
  )
}

export default LargeListBooks

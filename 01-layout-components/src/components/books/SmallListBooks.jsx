const SmallListBooks = ({ book }) => {
  const { name, price } = book
  return (
    <>
      <h2>
        {name} / {price}
      </h2>
    </>
  )
}

export default SmallListBooks

const UserInfo = ({ user }) => {
  const [name, age, country, books] = user
  return user ? (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{country}</p>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  )
}

export default UserInfo

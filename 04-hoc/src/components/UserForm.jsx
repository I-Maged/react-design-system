// import UpdateableUser from "./UpdateableUser"
import UpdateableResource from "./UpdateableResource"

const UserForm = UpdateableResource(
  ({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || {}
    return user ? (
      <>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Update</button>
      </>
    ) : (
      <h1>Loading...</h1>
    )
  },
  "/api/users/3",
  "user"
)

export default UserForm

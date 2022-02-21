function RefreshToken(id, refreshToken) {
  let res = {}
  return fetch(
    `https://rslang-team48.herokuapp.com/users/${id}/tokens`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${refreshToken}`
      }
    }
  )
    .then((i) => i.json())
    .then((i) => {
      res = i
      return i
    })
    .catch((err) => {
      throw err
    })
}
export default RefreshToken

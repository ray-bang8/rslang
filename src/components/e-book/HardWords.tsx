function HardWords(id: string | number, token: string) {
  let res = {}
  return fetch(`https://rslang-team48.herokuapp.com/users/${id}/words`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then((i) => i.json())
    .then((i) => {
      res = i
      return res
    })
}

export default HardWords

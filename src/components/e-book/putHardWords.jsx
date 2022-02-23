function putHardWords(id, token, data) {
  const dataId = data.id
  let res = {}
  return fetch(
    `https://rslang-team48.herokuapp.com/users/${id}/words/${dataId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ difficulty: 'hard', optional: data })
    }
  )
    .then((i) => i.json())
    .then((i) => {
      res = i
      return res
    })
}

export default putHardWords

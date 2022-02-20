async function putLearntWord(id, token, data) {
  const dataId = data.id
  console.log(dataId, id, token, data)
  let res = {}
  return fetch(
    `https://rslang-team48.herokuapp.com/users/${id}/words/${dataId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ difficulty: 'learnt', optional: data }),
    }
  )
    .then((i) => i.json())
    .then((i) => {
      res = i
      console.log(res)
      return res
    })
}

export default putLearntWord

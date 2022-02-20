// function deleteWord(id, token, wordId) {
//   console.log(id, token, wordId)
//   let res = ''
//   return fetch(
//     `https://rslang-team48.herokuapp.com/users/${id}/words/${wordId}`,
//     {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer: ${token}`,
//       },
//     }
//   )
//     .then((i) => i.json())
//     .then((i) => {
//       res = i
//       console.log(res)
//       return res
//     })
// }

// export default deleteWord

async function deleteWord(id, token, wordId) {
  console.log(id, wordId)
  const res = await fetch(
    `https://rslang-team48.herokuapp.com/users/${id}/words/${wordId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  )
  console.log(res)
  //   const data = await res.json()
  //   console.log(data)
  return res
}

export default deleteWord

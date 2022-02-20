async function deleteWord(id, token, wordId) {
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
  return res
}

export default deleteWord

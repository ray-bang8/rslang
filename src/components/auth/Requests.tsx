export interface IUser {
  name: string;
  email: string;
  password: number;
}

async function createUser(url: string, name: string, email: string, password: string) {
  try {
    const response = await fetch(`${url}users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const content = await response.json()
  } catch (error) {
    console.log(error)
  }
}

async function signIn(url: string, email: string, password: string) {
  try {
    const response = await fetch(`${url}signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const content = await response.json()
    localStorage.setItem('name', JSON.stringify(content.name))
    localStorage.setItem('userId', JSON.stringify(content.userId))
    localStorage.setItem('token', JSON.stringify(content.token))
  } catch (error) {
    console.log(error)
  }
}

export { createUser, signIn }

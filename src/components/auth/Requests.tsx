export interface IUser {
  name: string;
  email: string;
  password: number;
}

async function createUser(url: string, name: string, email: string, password: string) {
  try {
    await fetch(`${url}users`, {
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
    if (response.ok) {
      localStorage.setItem('userData', JSON.stringify(content))
    }
  } catch (error) {
    console.log(error)
  }
}

export { createUser, signIn }

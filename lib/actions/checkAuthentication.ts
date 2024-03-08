"use server"

export default async function checkAuthentication() {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/api/auth/session`, {
      method: "GET",
      credentials: "include",
    })

    if (!res.ok) return false

    const data = await res.json()

    if (data?.expires && new Date(data.expires) > new Date()) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

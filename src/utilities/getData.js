export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'exercises2.p.rapidapi.com'
  }
}

export async function getData(url, options) {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

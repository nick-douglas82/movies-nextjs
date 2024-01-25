export const fetchAndParse = async <T>(
  url: string
): Promise<{ results: T }> => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      // Throw an error for non-successful responses
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }

    const data = await response.json()
    return { results: data }
  } catch (error: any) {
    // Handle the error or rethrow it
    console.error('Error in fetchAndParse:', error.message)
    throw error // Rethrow the error to propagate it up the call stack
  }
}

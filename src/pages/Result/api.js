export const getSearchResult = async (search, types) => {
  const dataTypes = {}
  types.forEach(type => {
    if (type.length > 0) {
      dataTypes[type] = search
    }
  })

  if (types.length === 0) {
    dataTypes.secourist = search
    dataTypes.saved = search
    dataTypes.boat = search
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        ...dataTypes 
     })
  };
  
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/rescues/precise`, requestOptions)
      .then(response => response.json())
      .then(data => {
        return data
      })
  } catch (error) {
    console.log(error)
  }
}
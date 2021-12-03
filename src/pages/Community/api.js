export const addRescue = async (values) => {

  let requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: values.boatName,
        matricule: values.boatMatricule,
     })
  };
  
  const response = await fetch(`${process.env.REACT_APP_API_URL}/boats`, requestOptions).then(response => response.json())
  if (response) {
    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          matricule: values.boatMatricule,
          title: values.title,
          story: values.story,
          date: values.date,
          secourist: values.rescuer.split(','),
          dead: values.deads.split(','),
          saved: values.saved.split(','),
       })
    };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/rescues`, requestOptions).then(response => response.json())
    console.log(res)
  }
  return response
}
fetch('http://localhost:8000/admin/obtener_admins')
  .then(response => response.json())
  .then(data => {
    // Procesa los datos devueltos
    console.log(data);
  })
  .catch(error => {
    // Maneja cualquier error
    console.error(error);
  });
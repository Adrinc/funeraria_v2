const handleSubmit = (e) => {
  e.preventDefault();
  
  // Crear un objeto con los datos del formulario
  const formValues = {
    from_name: formData.nombre,  // El nombre que se pasa a EmailJS
    from_email: formData.email,  // El correo que se pasa a EmailJS
    from_phone: formData.telefono,  // El teléfono que se pasa a EmailJS
    attention_type: formData.ayuda,  // El tipo de ayuda que se pasa a EmailJS
  };

  // Luego se pasa este objeto a EmailJS en lugar de e.target
  emailjs.send(
    'service_x2avn5l',  // Tu ID de servicio en EmailJS
    'template_w19e4sq',  // Tu ID de plantilla en EmailJS
    formValues,  // Los datos del formulario que coinciden con los nombres en el template
    'ppD5lHH_SjifTuc2i'  // Tu ID de usuario
  )
  .then(() => {
    alert('Formulario enviado con éxito.');
  })
  .catch((error) => {
    alert('Hubo un error al enviar el formulario: ' + error.text);
  });
};
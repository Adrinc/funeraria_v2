import React, { useState } from 'react';
import styles from './FormContacto.module.css';
import emailjs from 'emailjs-com';

const FormContacto = ({ isEnglish }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    ayuda: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === 'nombre') {
      const filteredValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      if (!/^[a-zA-ZÀ-ÿ\s]*$/.test(value)) {
        newErrors.nombre = isEnglish
          ? 'Invalid. Only letters and a maximum of 50 characters.'
          : 'Solo letras y máximo 50 caracteres.';
      } else {
        delete newErrors.nombre;
      }
    } 
    else if (name === 'apellido') {
      const filteredValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      if (!/^[a-zA-ZÀ-ÿ\s]*$/.test(value)) {
        newErrors.apellido = isEnglish
          ? 'Invalid. Only letters and a maximum of 50 characters.'
          : 'Solo letras y máximo 50 caracteres.';
      } else {
        delete newErrors.apellido;
      }
    }
    
    else if (name === 'telefono') {
      const filteredValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      if (!/^\d*$/.test(value)) {
        newErrors.telefono = isEnglish
          ? 'Invalid phone number. Only numbers (10-15 digits).'
          : 'Número de teléfono no válido. Solo números (10-15 dígitos).';
      } else {
        delete newErrors.telefono;
      }
    } else if (name === 'email') {
      setFormData({ ...formData, [name]: value });
      if (!/^.{4,}@/.test(value)) {
        newErrors.email = isEnglish
          ? 'The email must have at least 4 characters before the @.'
          : 'El correo debe tener al menos 4 caracteres antes del @.';
      } else {
        delete newErrors.email;
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors(newErrors);
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(formData.nombre)) {
      newErrors.nombre = isEnglish
        ? 'Invalid name. Only letters and a maximum of 50 characters.'
        : 'Nombre no válido. Solo letras y máximo 50 caracteres.';
    }
    if (!/^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(formData.apellido)) {
      newErrors.apellido = isEnglish
        ? 'Invalid. Only letters and a maximum of 50 characters.'
        : 'Solo letras y máximo 50 caracteres.';
    }
    if (!/^.{4,}@[\w-]+\.[a-z]{2,}$/.test(formData.email)) {
      newErrors.email = isEnglish ? 'Invalid email.' : 'Correo electrónico no válido.';
    }
    if (!/^\d{10,15}$/.test(formData.telefono)) {
      newErrors.telefono = isEnglish
        ? 'Invalid phone number. Only numbers (10-15 digits).'
        : 'Número de teléfono no válido. Solo números (10-15 dígitos).';
    }
    if (formData.ayuda.trim() === '') {
      newErrors.ayuda = isEnglish
        ? 'Please tell us how we can assist you.'
        : 'Por favor, dinos cómo podemos ayudarte.';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Lógica de envío de correo
      const formValues = {
        from_name: formData.nombre,
        from_last_name: formData.apellido,
        from_email: formData.email,
        from_phone: formData.telefono,
        attention_type: formData.ayuda,
      };

      try {
        // Enviar el formulario a EmailJS
        await emailjs.send(
          'service_x2avn5l',  // Tu ID de servicio en EmailJS
          'template_w19e4sq',  // Tu ID de plantilla en EmailJS
          formValues,  // Los datos del formulario
          'ppD5lHH_SjifTuc2i'  // Tu ID de usuario
        );
        alert('Formulario enviado con éxito.');

        // Enviar el formulario a la API
        const apiResponse = await fetch('https://u-n8n.virtalus.cbluna-dev.com/webhook/contactus_process', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lead_email: formData.email,
            lead_phone: formData.telefono,
            lead_first_name: formData.nombre,
            lead_last_name: formData.apellido,  // Nombre de prueba
            lead_message: formData.ayuda,
            organization_id: '8',  // Valor por defecto
          }),
        });

        if (apiResponse.ok) {
          console.log('POST realizado con éxito');
        } else {
          console.error('Error en la API:', apiResponse.statusText);
        }
      } catch (error) {
        console.error('Hubo un error:', error);
        alert('Hubo un error al enviar el formulario.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {isEnglish
          ? 'Enter your details and send a message so we can get in touch with you as soon as possible.'
          : 'Ingresa tus datos y manda un mensaje para ponernos en contacto contigo lo antes posible.'}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="nombre">
            {isEnglish ? 'First Name' : 'Nombre'}
          </label>
          <div className={styles.inputContainer}>
            <img src="./icons/user.svg" alt="User Icon" className={styles.icon} />
            <input
              type="text"
              id="nombre"
              name="nombre"
              className={styles.input}
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          {errors.nombre && <p className={styles.error}>{errors.nombre}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="apellido">
            {isEnglish ? 'Last Name' : 'apellido'}
          </label>
          <div className={styles.inputContainer}>
            <img src="./icons/user.svg" alt="User Icon" className={styles.icon} />
            <input
              type="text"
              id="apellido"
              name="apellido"
              className={styles.input}
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>
          {errors.nombre && <p className={styles.error}>{errors.nombre}</p>}
        </div>
        

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {isEnglish ? 'Email Address' : 'Correo Electrónico'}
          </label>
          <div className={styles.inputContainer}>
            <img src="./icons/email.svg" alt="Email Icon" className={styles.icon} />
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="telefono">
            {isEnglish ? 'Phone Number' : 'Número de Teléfono'}
          </label>
          <div className={styles.inputContainer}>
            <img src="./icons/phone.svg" alt="Phone Icon" className={styles.icon} />
            <input
              type="text"
              id="telefono"
              name="telefono"
              className={styles.input}
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          {errors.telefono && <p className={styles.error}>{errors.telefono}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="ayuda">
            {isEnglish ? 'How we can I assist you?' : '¿Cómo podemos ayudarte?'}
          </label>
          <div className={styles.inputContainer}>
            <img src="../icons/help.svg" alt="Help Icon" className={styles.icon} />
            <textarea
              id="ayuda"
              name="ayuda"
              className={styles.textarea}
              value={formData.ayuda}
              onChange={handleChange}
            ></textarea>
          </div>
          {errors.ayuda && <p className={styles.error}>{errors.ayuda}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>
          {isEnglish ? 'Submit' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default FormContacto;

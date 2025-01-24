import React, { useState } from 'react';
import styles from './FormContacto.module.css';

const FormContacto = ({ isEnglish }) => {
  const [formData, setFormData] = useState({
    nombre: '',
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
          ? 'Invalid name. Only letters and a maximum of 50 characters.'
          : 'Nombre no válido. Solo letras y máximo 50 caracteres.';
      } else {
        delete newErrors.nombre;
      }
    } else if (name === 'telefono') {
      const filteredValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      if (!/^\d*$/.test(value)) {
        newErrors.telefono = isEnglish
          ? 'Invalid phone number. Only numbers (10-15 digits).'
          : 'Número de teléfono no válido. Solo números (10-15 dígitos).';
      } else {
        delete newErrors.telefono;
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors(newErrors);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {isEnglish
          ? 'Enter your details and send a message so we can get in touch with you as soon as possible.'
          : 'Ingresa tus datos y manda un mensaje para ponernos en contacto contigo lo antes posible.'}
      </h2>

      {/* 🔥 Formulario con FormSubmit */}
      <form
        action="https://formsubmit.co/caricatumix@gmail.com"
        method="POST"
        className={styles.form}
      >
        {/* Ocultar captcha */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Redirigir a página de agradecimiento (opcional) */}
        <input type="hidden" name="_next" value="https://tu-sitio.com/gracias" />

        <div className={styles.field}>
          <label className={styles.label} htmlFor="nombre">
            {isEnglish ? 'Full Name' : 'Nombre completo'}
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
              required
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
              required
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
              required
            />
          </div>
          {errors.telefono && <p className={styles.error}>{errors.telefono}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="ayuda">
            {isEnglish ? 'How we can assist you?' : '¿Cómo podemos ayudarte?'}
          </label>
          <div className={styles.inputContainer}>
            <img src="../icons/help.svg" alt="Help Icon" className={styles.icon} />
            <textarea
              id="ayuda"
              name="ayuda"
              className={styles.textarea}
              value={formData.ayuda}
              onChange={handleChange}
              required
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

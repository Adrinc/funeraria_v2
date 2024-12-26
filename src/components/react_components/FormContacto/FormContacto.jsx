import React, { useState } from 'react';
import styles from './FormContacto.module.css';

const FormContacto = () => {
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
      // Evita números o símbolos
      const filteredValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      if (!/^[a-zA-ZÀ-ÿ\s]*$/.test(value)) {
        newErrors.nombre = 'Nombre no válido. Solo letras y máximo 50 caracteres.';
      } else {
        delete newErrors.nombre;
      }
    } else if (name === 'telefono') {
      // Solo permite números
      const filteredValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      if (!/^\d*$/.test(value)) {
        newErrors.telefono = 'Número de teléfono no válido. Solo números (10-15 dígitos).';
      } else {
        delete newErrors.telefono;
      }
    } else if (name === 'email') {
      setFormData({ ...formData, [name]: value });
      if (!/^.{4,}@/.test(value)) {
        newErrors.email = 'El correo debe tener al menos 4 caracteres antes del @.';
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
      newErrors.nombre = 'Nombre no válido. Solo letras y máximo 50 caracteres.';
    }
    if (!/^.{4,}@[\w-]+\.[a-z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Correo electrónico no válido.';
    }
    if (!/^\d{10,15}$/.test(formData.telefono)) {
      newErrors.telefono = 'Número de teléfono no válido. Solo números (10-15 dígitos).';
    }
    if (formData.ayuda.trim() === '') {
      newErrors.ayuda = 'Por favor, dinos cómo podemos ayudarte.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Formulario enviado con éxito.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Ingresa tus datos y manda un mensaje para ponernos en contacto contigo lo antes posible.
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="nombre">
            Nombre completo
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
          <label className={styles.label} htmlFor="email">
            Correo Electrónico
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
            Número de Teléfono
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
            ¿Cómo puedo ayudarte?
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
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormContacto;
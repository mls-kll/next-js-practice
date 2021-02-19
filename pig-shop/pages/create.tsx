import React, { useState } from 'react';
import Axios from 'axios';

import styles from '../styles/create.module.css';

const CreatePage = () => {
  const [pigData, setPigData] = useState({
    breed: '',
    description: '',
  });

  const [pigImage, setPigImage] = useState();

  const [formMessage, setFormMessage] = useState({
    message: '',
  });

  const handleChange = (event) =>
    setPigData({ ...pigData, [event.target.name]: event.target.value });

  const handleImageChange = (event) => {
    setPigImage(event.target.files[0]);
  };

  const addPig = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('breed', pigData.breed);
    data.append('description', pigData.description);
    data.append('img', pigImage);
    try {
      /*       const res = await fetch('http://localhost:8080/pigs', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const result = await res.json(); */

      Axios.post('http://localhost:8080/pigs', data)
        .then((res) => setFormMessage('Your pig is saved'))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log('an error occured', error);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <h1>Create your own pig</h1>
      <form className={styles.createForm} onSubmit={addPig}>
        <div className={styles.formFieldWrapper}>
          <label htmlFor='breed'>breed</label>
          <input name='breed' type='text' onChange={handleChange} required />
        </div>
        <div className={styles.formFieldWrapper}>
          <label htmlFor='description'>description</label>
          <input
            name='description'
            type='text'
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formFieldWrapper}>
          <label htmlFor='img'>image</label>
          <input className={styles.imgInputBtn} name='img' type='file' onChange={handleImageChange} required />
        </div>
        <button className={styles.submitPigBtn} type='submit'>Add Pig</button>
      </form>
      {formMessage && <p>{formMessage.message}</p>}
    </div>
  );
};

export default CreatePage;

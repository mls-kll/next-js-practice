import React, { useState, FormEvent, ChangeEvent } from 'react';
import Axios from 'axios';

import styles from '../styles/create.module.css';

const CreatePage = () => {
  const [pigData, setPigData] = useState({
    breed: '',
    description: '',
  });

  const [pigImage, setPigImage] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPigData({ ...pigData, [event.target.name]: event.target.value });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      setPigImage(files[0]);
    } else {
      setFormMessage({ message: 'No file selected' });
    }
  };

  const addPig = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    data.append('breed', pigData.breed);
    data.append('description', pigData.description);
    data.append('img', pigImage!);

    try {
      const result = await Axios.post('http://localhost:8080/pigs', data);
      if (result.request.status === 200) {
        setIsLoading(false);
        setFormMessage({ message: 'Your pig is saved' });
      }
    } catch (error) {
      console.log(error);
      setFormMessage({ message: 'An error occured' });
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
          <input
            className={styles.imgInputBtn}
            name='img'
            type='file'
            onChange={handleImageChange}
            required
          />
        </div>
        <button className={styles.submitPigBtn} type='submit'>
          Add Pig
        </button>
      </form>
      {formMessage && <p>{formMessage.message}</p>}
      {isLoading && <p>saving data...</p>}
    </div>
  );
};

export default CreatePage;

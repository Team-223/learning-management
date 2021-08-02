import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './AddModule.module.css'
import firebase from '../../firebase';

function AddModule () {

  const coursenameRef = useRef();
  const moduletitleRef = useRef();
  const exerciseRef = useRef();

  const db = firebase.firestore();

  const submitForm = (e) => {
    e.preventDefault();

    db
    .collection('modules')
    .add({
      created_at: new Date().toString(),
      courseName: coursenameRef.current.value,
      moduleTitle: moduletitleRef.current.value,
      exercise: exerciseRef.current.value,
    })
    .then((docRef) => {
      console.log("Document written with ID: module added  ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

    coursenameRef.current.value = '';
    moduletitleRef.current.value = '';
    exerciseRef.current.value = '';

  }

  return (
      <div className={styles.form__container}>
          <form>
          <div className={styles.course__name}>
              <p>Enter Course Name:</p>
              <input
                  type='text'
                  name='coursename'
                  ref={coursenameRef}
              />
          </div>
          <div className={styles.module__name}>
              <p>Enter Module:</p>
              <input
                  type='text'
                  name='module'
                  ref={moduletitleRef}
              />
          </div>
          <div className={styles.exercise}>
              <p>Enter Exercise:</p>
              <textarea
                  name='exercise'
                  ref={exerciseRef}
              />
          </div>
          <br/>
          <br/>
          <input 
            className={styles.submit}
            onClick={(e)=>submitForm(e)}
            type='submit' />
          </form>
      </div>
  );
}

export default AddModule;

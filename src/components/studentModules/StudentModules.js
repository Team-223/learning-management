import React , {useState, useEffect} from 'react'
import styles from './StudentModules.module.css';
import arrowDown from './arrow-down.svg';
import arrowUp from './arrow-up.svg'
import firebase from '../../firebase';


function StudentModules() {
    const [expanded, setExpanded] = useState(false);

    const db = firebase.firestore();
    const data = () => {

        db.collection("modules")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
    

    return (
        <div className={styles.modules__container}>
            <div className={styles.modules__row}>
                <div className={styles.modules__left}>
                    <img  className={styles.icon} src='/images/modules-logo.png' alt='modules-logo'/>
                    <span className={styles.modules__titile}>Module 1 Tilte</span>
                </div>
                <div  className={styles.modules__right} onClick={()=> {setExpanded(expanded => !expanded) }}>
                    <img className={styles.module__arrow} src={ expanded ? arrowUp : arrowDown}  alt='arrows'/>
                    
                </div>
            </div>
            {expanded && 
                <div className={styles.exercise__row}>
                    <img className={styles.exercise__icon} src='/images/exercises-logo.png' alt='ex-logo' />
                    <span  
                        onChange={data}
                        className={styles.exercise__title}>Exercise 1 Tilte</span>
                </div>
            }
            
          
         </div>
    )
}

export default StudentModules

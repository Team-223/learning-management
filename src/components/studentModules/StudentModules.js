import React,{useState} from 'react'
import styles from './StudentModules.module.css';
import arrowDown from './arrow-down.svg';
import arrowUp from './arrow-up.svg'



function StudentModules( {module} ) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.modules__container} key={module.id}>
            
            <div className={styles.modules__row}>
                <div className={styles.modules__left}>
                    <img  className={styles.icon} src='/images/modules-logo.png' alt='modules-logo'/>
                        <span className={styles.modules__titile}>{module.courseName}</span>
                   
                </div>
                <div  className={styles.modules__right} onClick={()=> {setExpanded(expanded => !expanded) }}>
                    <img className={styles.module__arrow} src={ expanded ? arrowUp : arrowDown}  alt='arrows'/>
                    
                </div>
            </div>
    
            {expanded && 

                <div className={styles.exercise__row}>
                    <img className={styles.exercise__icon} src='/images/exercises-logo.png' alt='ex-logo' />
                    <span  
            {...console.log('student module', module.exercise)}
                        className={styles.exercise__title}>{module.exercise}</span>
                </div>
            
            }
            
         
       
        </div>   
    )
}

export default StudentModules

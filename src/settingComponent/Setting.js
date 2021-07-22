import React , {useState} from 'react'
import styles from './Setting.module.css';

function Setting() {
    const [expanded, setExpand] = useState(false);
    return (
        <div className={styles.setting__container}>
            <img 
                onClick={()=> setExpand(!expanded)}
                className={styles.setting_icon}
                src='/images/setting_btn.svg' alt='setting-icon'
            />
            {expanded && 
                <div className={styles.setting__options}>
                    <button className={styles.darkmode}>Dark Mode</button>
                    <span className={styles.useremail}>Email account</span>
                    <button className={styles.username}>User Name</button>
                    <hr />
                    <button className={styles.chgpass}>Change Password</button>
                    <button className={styles.del}>Delete account</button>
                </div>
            }
              
        </div>
    )
}


export default Setting

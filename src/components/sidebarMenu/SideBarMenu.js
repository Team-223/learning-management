import {React, useEffect, useState} from 'react'
import styles from './SideBarMenu.module.css'

export default function SideBarMenu({children}) {
    const [xPos, setX] = useState(0)
    const [width, setWidth] = useState(-300)

    useEffect(() => {
        //setWidth(300)
        //setX(-50)
    })

    return (
        <div className={styles.sidebar_menu_container}
        style={{ width: width, transform: `translatex(${xPos}px)`}}>
            <div className={styles.sidebar_menu_content}>
                {children}
            </div>
            <div className={styles.sidebar_filter_box}>
                <p>Filter Results</p>
                <input type="text" id="test" name="test"/>
                <p>level list</p>
                <input type="text" id="test" name="test"/>
            </div>
        </div>
    )
}

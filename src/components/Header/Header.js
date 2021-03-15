import React from 'react'
import  {NavLink} from 'react-router-dom'
import styles from './Header.module.css'

export default function () {
    return (
        <header className={styles.header}>
            <ul>
                <li>
                    <NavLink to="/">List Post</NavLink>
                </li>
                <li >
                    <NavLink to="/createPost">Create Post</NavLink>
                </li>
            </ul>
        </header>
    )
}

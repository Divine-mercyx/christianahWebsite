import React, { useState } from 'react';
import styles from './css/navbar.module.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>Logo</h1>
            </div>

            <ul className={isOpen ? `${styles.home} ${styles.active}` : styles.home}>
                <li className={styles.button}>Home Page</li>
                <li className={styles.button}>About Us</li>
                <li className={styles.button}>Services</li>
                <li className={`${styles.button} ${styles.dropdownContainer}`}>
                    <div onClick={toggleDropdown} className={styles.dropdownTrigger}>
                        More Info
                        <span className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.rotate : ''}`}>&#60;</span>
                    </div>
                    {isDropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                            <li>Contact Us</li>
                            <li>Support</li>
                            <li>FAQs</li>
                        </ul>
                    )}
                </li>
            </ul>
            <div className={styles.navActions}>
                <button className={styles.signInButton}>Join</button>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <span className={isOpen ? styles.open : ''}></span>
                    <span className={isOpen ? styles.open : ''}></span>
                    <span className={isOpen ? styles.open : ''}></span>
                </div>
            </div>

        </nav>
    );
}

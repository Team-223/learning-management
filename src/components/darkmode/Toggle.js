import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import styles from './Toggle.module.css'

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
`
const Toggle = ({theme,  toggleTheme }) => {
    return (
      <div className={styles.example}>
        <Button onClick={toggleTheme} >
          Click Me 
          <div className={styles.content}>
            <div className={styles.text}>To change to DarkMode or LightMode</div>
          </div>
        </Button>
      </div>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;

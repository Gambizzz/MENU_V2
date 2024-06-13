import React, { useState } from 'react';
import '../index.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import logoNavJour from '../../src/assets/images/logo-nav-jour.svg';
import logoNavNuit from '../../src/assets/images/logo-nav-nuit.svg';

const Nav = ({ isNightMode, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <div className="navbar">
        <label className='switch'>
          <input type='checkbox' className='toggle' onChange={toggleLanguage} checked={currentLanguage === 'en'} />
          <span className={`slider ${isNightMode ? 'night' : 'day'}`}></span>
        </label>
        <div className='nav-links'>
          <Link to="/restaurants"> <p> RESTAURANTS </p> </Link>
          <Link to="/"> <img src={isNightMode ? logoNavNuit : logoNavJour} alt='Logo navbar' /> </Link>
          <Dropdown className='btn-dropdown'>
            <Dropdown.Toggle className='gold log'> {t('connexion')} </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/login"> {t('seConnecter')} </Dropdown.Item>
              <Dropdown.Item as={Link} to="/signup"> {t('sinscrire')} </Dropdown.Item>
              <Dropdown.Item as={Link} to="/option3"> Option 3 </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='theme-toggler'>
          <button id="themeLogo" onClick={toggleTheme}>
            {isNightMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;

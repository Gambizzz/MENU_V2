import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../index.scss';

const Sidebar = ({ isNightMode, toggleDyslexic }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { t } = useTranslation();
  const [isDyslexicMode, setIsDyslexicMode] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDyslexicMode = () => {
    setIsDyslexicMode(!isDyslexicMode);
    const body = document.getElementsByTagName('html')[0];
    body.classList.toggle('dyslexic');
  };

  return (
    <div className="app-container">
      <div className={`sidebar ${showSidebar ? 'active' : ''} ${isNightMode ? 'nuit' : ''}`}>
        <ul>
          <li> <button onClick={toggleDyslexic}> {t('opendys')} </button> </li>
          <li> {t('colorBlind')} </li>
        </ul>
      </div>
      <button onClick={() => {toggleSidebar(); toggleDyslexicMode();}} className={`toggle-btn ${isNightMode ? 'nuit' : ''} ${isDyslexicMode ? 'dyslexic' : ''}`}>
        {t('access')}
      </button>
    </div>
  );
};

export default Sidebar;


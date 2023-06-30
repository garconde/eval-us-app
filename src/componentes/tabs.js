import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Tab, Nav} from 'react-bootstrap';

export default function TabsInternas () {
  
    const [activeTab, setActiveTab] = useState('nav-home'); // Estado para controlar la pestaña activa

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // Actualizar el estado con la pestaña activa seleccionada
  };

  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={`nav-link ${activeTab === 'nav-home' ? 'active' : ''}`}
            id="nav-home-tab"
            onClick={() => handleTabClick('nav-home')}
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected={activeTab === 'nav-home'}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeTab === 'nav-profile' ? 'active' : ''}`}
            id="nav-profile-tab"
            onClick={() => handleTabClick('nav-profile')}
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected={activeTab === 'nav-profile'}
          >
            Profile
          </button>
          <button
            className={`nav-link ${activeTab === 'nav-contact' ? 'active' : ''}`}
            id="nav-contact-tab"
            onClick={() => handleTabClick('nav-contact')}
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected={activeTab === 'nav-contact'}
          >
            Contact
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade show ${activeTab === 'nav-home' ? 'active' : ''}`}
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          Componente A
        </div>
        <div
          className={`tab-pane fade show ${activeTab === 'nav-profile' ? 'active' : ''}`}
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          Componente B
        </div>
        <div
          className={`tab-pane fade show ${activeTab === 'nav-contact' ? 'active' : ''}`}
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          Componente C
        </div>
      </div>
    </div>
  );
};

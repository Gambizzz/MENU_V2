import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms';
import { useTranslation } from 'react-i18next';
import CKEditorComponent from '/Users/nicolasbaldo/Desktop/Menuuuu/MENU_V2/boiler_MENU/src/components/CKEditorComponent.jsx';

const AdminProfile = () => {
  const [user] = useAtom(userAtom);
  const { t } = useTranslation();
  const [editorData, setEditorData] = useState('');

  const handleSave = async () => {
    const response = await fetch('/api/save-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: editorData })
    });
    if (response.ok) {
      alert('Text saved successfully');
    } else {
      alert('Failed to save text');
    }
  };

  return (
    <div>
      <h1 className="title-pages">{t('titleSpaceAdmin')}</h1>
      <p>{t('email')} : {user.email}</p>
      <p>{t('id')} : {user.id}</p>
      
      <h1>Admin Page</h1>
      <CKEditorComponent
        data={editorData}
        onChange={setEditorData}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default AdminProfile;

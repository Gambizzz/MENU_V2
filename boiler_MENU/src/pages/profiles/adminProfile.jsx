import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms';
import { useTranslation } from 'react-i18next';
import CKEditorComponent from '../../components/CKEditorComponent';

const AdminProfile = () => {
  const [user] = useAtom(userAtom);
  const { t } = useTranslation();
  const [editorData, setEditorData] = useState('');

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/save-text', {
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
    } catch (error) {
      console.error('Error saving text:', error);
      alert('Failed to save text. Please try again.');
    }
  };
  

  return (
    <div>
      <h1 className="title-pages">{t('titleSpaceAdmin')}</h1>
      <p>{t('email')} : {user.email}</p>
      <p>{t('id')} : {user.id}</p>
      
      <h2>{t('adminPageTitle')}</h2>
      <CKEditorComponent
        data={editorData}
        onChange={setEditorData}
      />
      <button onClick={handleSave}>{t('saveButton')}</button>
    </div>
  );
};

export default AdminProfile;

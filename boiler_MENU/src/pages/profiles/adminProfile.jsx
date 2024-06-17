import React from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms';
import { useTranslation } from 'react-i18next';

const AdminProfile = () => {
  const [user] = useAtom(userAtom);
  const { t } = useTranslation();

  return (
    <div>
      <h2> MON ESPACE RESTAURATEUR </h2>
      <p>{t('email')} : {user.email} </p>
      <p>{t('id')} : {user.id}</p>
    </div>
  );
}

export default AdminProfile;

import React from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms';
import { useTranslation } from 'react-i18next';

const UserProfile = () => {
  const [user] = useAtom(userAtom);
  const { t } = useTranslation();
  
  return (
    <div>
      <h2> MON ESPACE CLIENT </h2>
    </div>
  );
}

export default UserProfile;

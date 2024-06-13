import React from "react";
import { useTranslation } from "react-i18next";

const Sign = () => {
  const { t } = useTranslation();

  return (
      <h1> {t('signupForm')} </h1>
  )
}

export default Sign;
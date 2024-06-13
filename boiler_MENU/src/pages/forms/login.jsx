import React from "react";
import { useTranslation } from "react-i18next";

const Log = () => {
  const { t } = useTranslation();

    return (
        <h1> {t('loginForm')} </h1>
    )
}

export default Log;


import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

    return(
        <>
        <h1> {t('teamTitle')} </h1>
        </>
    )
}

export default Team;
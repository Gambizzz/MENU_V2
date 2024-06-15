import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

    return(
        <>
        <h1 className="title-pages"> {t('teamTitle')} </h1>
        </>
    )
}

export default Team;
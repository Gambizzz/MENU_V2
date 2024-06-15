import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

    return(
        <>
        <div className="page-header">
          <h1 className="title-pages"> {t('teamTitle')} </h1>
          <h2> {t('team-slogan')} </h2>
        </div>
        </>
    )
}

export default Team;
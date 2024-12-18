import React from 'react';
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <p>{t('what is your name')}</p>
            {t("Main page")}
        </div>
    );
};

export default MainPage;
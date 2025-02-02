import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui/button";
import { Modal } from "shared/ui/modal";

const MainPage = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p>aaa</p>
            </Modal>
            <p>{t('what is your name')}</p>
            {t("Main page")}
            <AppButton
                theme={AppButtonTheme.BACKGROUND_INVERTED}
                onClick={() => setIsModalOpen(true)}
            >
                open modal
            </AppButton>
        </div>
    );
};

export default MainPage;
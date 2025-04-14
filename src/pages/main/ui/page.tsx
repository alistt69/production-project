import React from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui/button";
import { Modal } from "shared/ui/modal";
import { useModal } from "shared/ui/modal/hook";

const MainPage = () => {
    const { t } = useTranslation();
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <p>aaa</p>
            </Modal>
            <p>{t('what is your name')}</p>
            {t("Main page")}
            <AppButton
                theme={AppButtonTheme.BACKGROUND_INVERTED}
                onClick={openModal}
            >
                open modal
            </AppButton>
        </div>
    );
};

export default MainPage;
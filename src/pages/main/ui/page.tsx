import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';
import { useModal } from 'shared/ui/modal/hook';
import { Input } from 'shared/ui/input';

const MainPage = () => {
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();
  const [value, setValue] = React.useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <p>aaa</p>
      </Modal>
      <p>{t('what is your name')}</p>
      {t('Main page')}
      <p>-</p>
      <AppButton theme={AppButtonTheme.BACKGROUND_INVERTED} onClick={openModal}>
        open modal
      </AppButton>
      <p>-</p>
      <Input onChange={onChange} value={value} />
    </div>
  );
};

export default MainPage;

import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import { useTranslation } from "react-i18next";
import { AppButton, AppThemeButton } from "shared/ui/button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <AppButton
            className={classNames(classes.lang_switcher, {}, [className])}
            theme={AppThemeButton.CLEAR}
            onClick={toggle}
        >
            {t("Language")}
        </AppButton>
    );
};
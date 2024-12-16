import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import { useTranslation } from "react-i18next";
import { AppButton } from "shared/ui/button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className={classNames(classes.page_error, {}, [className])}>
            <p>{t("Something went wrong")}</p>
            <AppButton onClick={reloadPage}>
                {t("Refresh page")}
            </AppButton>
        </div>
    );
};
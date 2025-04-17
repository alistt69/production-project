import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import { Modal } from "shared/ui/modal";
import { LoginForm } from "../login-form";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal className={classNames(classes.login_modal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
            <LoginForm />
        </Modal>
    );
};
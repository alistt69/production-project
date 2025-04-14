import classes from './classes.module.scss';
import { classNames } from "shared/lib/classes";
import React from "react";
import Portal from "shared/ui/portal";

interface ModalProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const ANIMATION_DELAY = 50;

export const Modal: React.FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
    const [isClosing, setIsClosing] = React.useState(false);
    const timerRef = React.useRef(null);

    const closeHandler = React.useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const mods: Record<string, boolean> = {
        [classes.is_opened]: isOpen,
        [classes.is_closing]: isClosing,
    };

    const onKeyDown = React.useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeHandler();
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(classes.modal, mods, [className])}>
                <div className={classes.overlay} onClick={closeHandler}>
                    <div className={classes.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

const Portal: React.FC<PortalProps> = ({ children, element }) => {
    const targetElement = element || document.getElementById('portal-root');

    if (!targetElement) {
        console.error("Target element for portal not found.");
        return null;
    }

    return createPortal(children, targetElement);
};

export default Portal;


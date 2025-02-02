import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

const Portal: React.FC<PortalProps> = ({ children, element = document.body.children[0].children[0] }) => {
    return createPortal(children, element);
};

export default Portal;


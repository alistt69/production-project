import 'app/styles/index.scss';
import { BrowserRouter } from "react-router-dom";
import React from "react";

export const RouterDecorator = (Story: React.ComponentType) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);

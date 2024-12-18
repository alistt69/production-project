import React from "react";
import { Theme } from "app/providers/theme";

export const ThemeDecorator = (theme: Theme) => (Story: React.ComponentType) => (
    <div className={`root ${theme}`} style={{ width: `100vw`, height: `100vh` }}>
        <Story />
    </div>
);
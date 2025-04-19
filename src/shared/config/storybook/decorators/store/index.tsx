import React from "react";
import { StateSchema, StoreProvider } from "app/providers/store";
import { PreloadedStateShapeFromReducersMapObject } from "@reduxjs/toolkit";

export const StoreDecorator = (state?: PreloadedStateShapeFromReducersMapObject<StateSchema>) => (Story: React.ComponentType) => (
    <StoreProvider initialState={state}>
            <Story/>
    </StoreProvider>
);
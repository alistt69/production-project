import { render, screen } from "@testing-library/react";
import { AppButton, AppButtonTheme } from "./index";

describe("button", () => {
    test("button theme test", () => {
        render(<AppButton theme={AppButtonTheme.CLEAR}>TEST</AppButton>)
        expect(screen.getByText("TEST")).toHaveClass('clear');
        screen.debug();
    })
})
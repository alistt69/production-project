import { render, screen } from "@testing-library/react";
import { AppButton, AppThemeButton } from "./index";

describe("button", () => {
    test("button theme test", () => {
        render(<AppButton theme={AppThemeButton.CLEAR}>TEST</AppButton>)
        expect(screen.getByText("TEST")).toHaveClass('clear');
        screen.debug();

    })
})
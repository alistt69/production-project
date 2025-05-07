import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './index';
import { renderWithTranslations } from 'shared/lib/tests/render-with-translations';

describe('sidebar', () => {
  test('render with no errors', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test sidebar collapsing', () => {
    renderWithTranslations(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

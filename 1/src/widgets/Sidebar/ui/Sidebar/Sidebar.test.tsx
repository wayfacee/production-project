import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sidebar } from './Sidebar';
import { withTranslation } from 'react-i18next';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('sidebar', () => {
  test('test with only first param', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    renderWithTranslations(<SidebarWithTranslation />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  // test('test toggle', () => {
  //   const SidebarWithTranslation = withTranslation()(Sidebar);
  //   renderWithTranslations(<SidebarWithTranslation />);
  //   const toggleBtn = screen.getByTestId('sidebar-toggle');
  //   fireEvent.click(toggleBtn);
  //   expect(screen.getByTestId('sidebar')).toHaveClass(cl.collapsed);
  // });
});
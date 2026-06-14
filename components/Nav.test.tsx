import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from './Nav';

describe('Nav', () => {
  it('renders the primary navigation links', () => {
    render(<Nav />);
    const primary = screen.getByRole('navigation', { name: 'Primary' });
    expect(primary).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThan(0);
  });

  it('toggles the mobile menu via the burger button', async () => {
    const user = userEvent.setup();
    render(<Nav />);
    const burger = screen.getByRole('button', { name: 'Open menu' });
    expect(burger).toHaveAttribute('aria-expanded', 'false');

    await user.click(burger);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('closes the menu when Escape is pressed', async () => {
    const user = userEvent.setup();
    render(<Nav />);
    await user.click(screen.getByRole('button', { name: 'Open menu' }));

    await user.keyboard('{Escape}');
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const props = {
    title: 'EZRelocate.org',
    description: 'Canada-wide rental search.',
    link: 'https://ezrelocate.org',
    tags: ['LLM', 'RAG'],
    image: '/EZrelocate.png',
  };

  it('renders the title, description and tags', () => {
    render(<ProjectCard {...props} />);
    expect(screen.getByRole('heading', { name: 'EZRelocate.org' })).toBeInTheDocument();
    expect(screen.getByText('Canada-wide rental search.')).toBeInTheDocument();
    expect(screen.getByText('LLM')).toBeInTheDocument();
    expect(screen.getByText('RAG')).toBeInTheDocument();
  });

  it('opens external links safely with rel=noopener noreferrer', () => {
    render(<ProjectCard {...props} />);
    const visit = screen.getByRole('link', { name: /View on GitHub/i });
    expect(visit).toHaveAttribute('href', 'https://ezrelocate.org');
    expect(visit).toHaveAttribute('target', '_blank');
    expect(visit).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('uses a custom link label when one is given', () => {
    render(<ProjectCard {...props} link="https://demo.example" linkLabel="Live demo" />);
    const visit = screen.getByRole('link', { name: /Live demo/i });
    expect(visit).toHaveAttribute('href', 'https://demo.example');
    expect(screen.queryByRole('link', { name: /View on GitHub/i })).not.toBeInTheDocument();
  });
});

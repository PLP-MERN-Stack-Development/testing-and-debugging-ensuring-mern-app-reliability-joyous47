import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button';

describe('Button Component', () => {
  test('should render button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByTestId('custom-button')).toHaveTextContent('Click me');
  });

  test('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByTestId('custom-button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByTestId('custom-button')).toBeDisabled();
  });
});


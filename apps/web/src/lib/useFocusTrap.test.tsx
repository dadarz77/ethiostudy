import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { useRef } from 'react';
import { useFocusTrap } from './useFocusTrap';

function Dialog({ open }: { open: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, open);
  if (!open) return null;
  return (
    <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label="test dialog">
      <button>first</button>
      <button>last</button>
    </div>
  );
}

let trigger: HTMLButtonElement;

beforeEach(() => {
  trigger = document.createElement('button');
  trigger.textContent = 'open dialog';
  document.body.appendChild(trigger);
  trigger.focus();
});

afterEach(() => {
  cleanup();
  trigger.remove();
});

describe('useFocusTrap', () => {
  it('moves focus into the dialog when it opens', () => {
    const { rerender } = render(<Dialog open={false} />);
    expect(document.activeElement).toBe(trigger);

    rerender(<Dialog open />);
    expect(document.activeElement?.textContent).toBe('first');
  });

  it('wraps Tab from the last element back to the first', () => {
    render(<Dialog open />);
    const buttons = [...document.querySelectorAll('button')].filter(b => b !== trigger);
    buttons[buttons.length - 1].focus();

    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement?.textContent).toBe('first');
  });

  it('wraps Shift+Tab from the first element to the last', () => {
    render(<Dialog open />);
    const buttons = [...document.querySelectorAll('button')].filter(b => b !== trigger);
    buttons[0].focus();

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(document.activeElement?.textContent).toBe('last');
  });

  it('does not trap focus while closed', () => {
    render(<Dialog open={false} />);
    expect(document.activeElement).toBe(trigger);
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement).toBe(trigger);
  });

  it('restores focus to the trigger when the dialog closes', () => {
    const { rerender } = render(<Dialog open={false} />);
    rerender(<Dialog open />);
    expect(document.activeElement?.textContent).toBe('first');

    rerender(<Dialog open={false} />);
    expect(document.activeElement).toBe(trigger);
  });

  it('falls back to the container when the dialog has no focusable children', () => {
    function Empty() {
      const ref = useRef<HTMLDivElement>(null);
      useFocusTrap(ref, true);
      return <div ref={ref} tabIndex={-1} data-testid="empty">no controls here</div>;
    }
    render(<Empty />);
    expect(document.activeElement?.getAttribute('data-testid')).toBe('empty');

    // Tab with nothing to land on must not escape to the page behind.
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('empty');
  });
});

// Keep the unused import honest for the type checker.
export type _Unused = typeof useState;

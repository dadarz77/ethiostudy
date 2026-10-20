import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import { useAuthStore } from '../store/useAuthStore';

/* Scene3D pulls three.js + a WebGL canvas; the form logic is what we test. */
vi.mock('../components/Scene3D', () => ({ default: () => null }));

function renderAuth(entry = '/auth') {
  return render(
    <MemoryRouter initialEntries={[entry]}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<div>home route</div>} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  localStorage.clear();
  useAuthStore.setState({ user: null, loading: false, accountBanned: false });
});
afterEach(cleanup);

describe('/auth route', () => {
  it('renders the sign-in tab with Google and email options', () => {
    renderAuth();
    expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeTruthy();
    expect(screen.getByRole('tab', { name: 'Sign In' }).getAttribute('aria-selected')).toBe('true');
    expect(screen.getByRole('tab', { name: 'Create Account' })).toBeTruthy();
    expect(screen.getByRole('button', { name: /continue with google/i })).toBeTruthy();
    expect(screen.getByLabelText('Email Address')).toBeTruthy();
    expect(screen.getByLabelText('Password')).toBeTruthy();
  });

  it('opens the signup tab via ?tab=signup', () => {
    renderAuth('/auth?tab=signup');
    expect(screen.getByRole('heading', { name: 'Create free account' })).toBeTruthy();
    expect(screen.getByLabelText('Full Name')).toBeTruthy();
    expect(screen.getByLabelText('Confirm Password')).toBeTruthy();
    expect(screen.getByRole('button', { name: /create free account/i })).toBeTruthy();
  });

  it('validates an empty sign-in form before touching the store', async () => {
    renderAuth();
    fireEvent.click(screen.getByRole('button', { name: /^sign in$/i }));
    expect(await screen.findByText('Email is required.')).toBeTruthy();
    expect(screen.getByText('Password is required.')).toBeTruthy();
  });

  it('rejects a malformed email and a short password', async () => {
    renderAuth();
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'not-an-email' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'abc' } });
    fireEvent.click(screen.getByRole('button', { name: /^sign in$/i }));
    expect(await screen.findByText('Enter a valid email address.')).toBeTruthy();
    expect(screen.getByText('Password must be at least 6 characters.')).toBeTruthy();
  });

  it('rejects mismatched signup passwords', async () => {
    renderAuth('/auth?tab=signup');
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'student@example.com' } });
    fireEvent.change(screen.getByLabelText('Password (min 6 characters)'), { target: { value: 'secret1' } });
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: 'secret2' } });
    fireEvent.click(screen.getByRole('button', { name: /create free account/i }));
    expect(await screen.findByText('Passwords do not match.')).toBeTruthy();
  });

  it('switches to the forgot-password tab and confirms the reset email', async () => {
    renderAuth();
    fireEvent.click(screen.getByRole('button', { name: /forgot password/i }));
    expect(screen.getByRole('heading', { name: 'Reset password' })).toBeTruthy();
    fireEvent.change(screen.getByLabelText('Your Account Email'), { target: { value: 'student@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /send recovery email/i }));
    expect(await screen.findByRole('status')).toBeTruthy();
    expect(screen.getByRole('status').textContent).toContain('Reset link sent! Check your inbox.');
  });
});

import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
export default function NotFound() {
  return _jsx('div', {
    className: 'min-h-screen flex items-center justify-center bg-background',
    children: _jsxs('div', {
      className: 'text-center space-y-6 px-4',
      children: [
        _jsx('h1', { className: 'text-4xl font-bold text-foreground', children: '404' }),
        _jsx('h2', {
          className: 'text-2xl font-semibold text-foreground',
          children: 'Page Not Found',
        }),
        _jsx('p', {
          className: 'text-muted-foreground',
          children: "The page you are looking for doesn't exist or has been moved.",
        }),
        _jsx(Button, { asChild: true, children: _jsx(Link, { to: '/', children: 'Return Home' }) }),
      ],
    }),
  });
}

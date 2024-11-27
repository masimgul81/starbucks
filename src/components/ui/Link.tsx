import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-green-700 font-medium ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
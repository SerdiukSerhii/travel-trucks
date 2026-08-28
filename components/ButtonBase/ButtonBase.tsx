import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import css from './ButtonBase.module.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | { href: string; target?: string; rel?: string }
);

const ButtonBase = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonBaseProps) => {
  const classNames = `${css.button} ${css[variant]} ${className}`;
  if ('href' in props) {
    const { href, ...linkProps } = props;
    return (
      <Link
        href={href}
        className={classNames}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonBase;

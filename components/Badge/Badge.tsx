import { ReactNode } from 'react';
import css from './Badge.module.css';

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
}

const Badge = ({ children, icon }: BadgeProps) => {
  return (
    <span className={css.badge}>
      {icon}
      <span className={css.text}>{children}</span>
    </span>
  );
};

export default Badge;

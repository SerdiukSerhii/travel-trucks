'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.section_header}>
      <div className="container">
        <nav
          className={css.navigation}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={css.logo}
          >
            <Image
              src="/logo.svg"
              alt="TravelTrucks"
              width={136}
              height={16}
            />
          </Link>

          <div className={css.navLinks}>
            <Link
              href="/"
              className={`${css.navLink} ${pathname === '/' ? css.active : ''}`}
            >
              Home
            </Link>

            <Link
              href="/catalog"
              className={`${css.navLink} ${
                pathname === '/catalog' ? css.active : ''
              }`}
            >
              Catalog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

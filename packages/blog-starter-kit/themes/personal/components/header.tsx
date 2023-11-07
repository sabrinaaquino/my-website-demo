import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { path: '/', name: 'home' },
  { path: '/blog', name: 'blog' },
  { path: '/books', name: 'books'},
];

export default function Header() {
  const pathname = usePathname() || '/';
  const isActive = (path: string) => path === pathname;

  return (
    <header>
      <nav>
        <ul className="flex justify-center mt-4">
          {links.map((link) => (
            <li key={link.path} className="mr-4">
              <Link href={link.path}>
                <span
                  className={clsx(
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle cursor-pointer pb-1',
                    {
                      'text-neutral-500': !isActive(link.path),
                      'border-b border-gray-300': isActive(link.path),
                    }
                  )}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
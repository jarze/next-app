'use client';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { routes as data } from '@/config';
import Link from 'next/link';
import './style.css';

export default function Page() {
  const path = usePathname();

  const routes = useMemo<any>(
    () =>
      data.find((i) => {
        return path.startsWith(i.url);
      }) || {},
    [path],
  );
  console.log('path', path);

  return (
    routes?.title && (
      <nav className="w-60 h-max basis-[510px] text-[48px] text-center">
        <h2 className="mb-20 h-[133px] leading-[133px] text-[64px] nav-title">
          {routes?.title}
        </h2>
        <ul className="relative m-0 list-none">
          {routes?.children?.map?.((i: any) => (
            <li
              key={i.url}
              className="nav-button cursor-pointer transition duration-300 ease-linear"
              data-active={path.startsWith(i.url)}
            >
              <Link replace href={i.url}>
                <span>{i.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
}

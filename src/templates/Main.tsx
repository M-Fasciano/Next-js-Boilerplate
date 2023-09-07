import type { ReactNode } from 'react';

import Header from '@/components/organisms/Header';
import Footer from '@/layouts/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}
    <Header />
    <main className="relative">{props.children}</main>
    <Footer />
  </div>
);

export { Main };

import type { ReactNode } from 'react';

import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}

    <Header />
    {/* <header className="border-b border-gray-300">
        <div className="pb-8 pt-16">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </h1>
          <h2 className="text-xl">{AppConfig.description}</h2>
        </div>
      </header> */}

    <main className="relative">{props.children}</main>
    <Footer />
  </div>
);

export { Main };

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
    <div className="mx-auto max-w-screen-md">
      {/* <header className="border-b border-gray-300">
        <div className="pb-8 pt-16">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </h1>
          <h2 className="text-xl">{AppConfig.description}</h2>
        </div>
      </header> */}

      <main className="content py-5 text-xl">{props.children}</main>
    </div>
    <Footer />
  </div>
);

export { Main };

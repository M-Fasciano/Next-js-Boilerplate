import { useRouter } from 'next/router';

import Hero from '@/components/atoms/Hero';
import SearchBox from '@/components/molecules/SearchBox';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="relative h-screen">
        <div className="absolute inset-0 flex h-full w-full items-center justify-center">
          <div className="relative z-10 flex flex-col items-center gap-20">
            <h1 className="text-center text-5xl font-bold text-white">
              Connecting You to Fitness Success,
              <br />
              One Location at a Time
            </h1>
            <SearchBox />
          </div>
          <Hero
            className="object-cover"
            alt={'Training with a personla trainer'}
            path={`${router.basePath}/assets/images/hero-homepage.jpg`}
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;

import { useRouter } from 'next/router';

import Hero from '@/components/atoms/Hero';
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
      <div className="absolute inset-x-0 top-0 h-full w-full">
        <div className="relative h-screen">
          <Hero
            alt={'Training with a personla trainer'}
            path={`${router.basePath}/assets/images/hero-homepage.jpg`}
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;

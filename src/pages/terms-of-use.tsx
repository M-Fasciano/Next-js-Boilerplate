import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const TermsOfUse = () => {
  return (
    <Main
      meta={
        <Meta
          title="Location Fitness - Terms of use"
          description="Explore Location Fitness Terms of Use: Discover guidelines for using our services. Learn about user agreements & responsibilities. Stay informed!"
        />
      }
    >
      <h1 className="text-3xl font-bold">Terms of use</h1>
    </Main>
  );
};

export default TermsOfUse;

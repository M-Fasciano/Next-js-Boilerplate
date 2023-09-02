import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const SiteMap = () => {
  return (
    <Main
      meta={
        <Meta
          title="Location Fitness - Site map"
          description="Navigate Location Fitness using the site map. Find the page you're looking for. Explore our services. Join us today!"
        />
      }
    >
      <h1 className="text-3xl font-bold">Site map</h1>
    </Main>
  );
};

export default SiteMap;

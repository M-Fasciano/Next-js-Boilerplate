import MapBox from '@/components/atoms/Map';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Map = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <MapBox />
  </Main>
);

export default Map;

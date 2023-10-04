import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Trainers = () => {
  return (
    <Main
      meta={
        <Meta
          title="Location Fitness - Trainers"
          description="Location Fitness trainers"
        />
      }
    >
      <h1 className="text-3xl font-bold">Trainers</h1>
    </Main>
  );
};

export default Trainers;

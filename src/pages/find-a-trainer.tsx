import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const FindATrainer = () => {
  return (
    <Main
      meta={
        <Meta
          title="Location Fitness - Find a trainer"
          description="Find a trainer in your area with location fitness"
        />
      }
    >
      <h1 className="text-3xl font-bold">Find A Trainer</h1>
    </Main>
  );
};

export default FindATrainer;

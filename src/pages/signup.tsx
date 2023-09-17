import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Signup = () => {
  return (
    <Main
      meta={
        <Meta
          title="Location Fitness - Sign up"
          description="Sign up for access to premium facilities. Achieve your health goals today!"
        />
      }
    >
      <h1 className="text-3xl font-bold">Sign up</h1>
    </Main>
  );
};

export default Signup;

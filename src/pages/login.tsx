import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Login = () => {
  return (
    <Main
      meta={
        <Meta
          title="Location Fitness - Log in"
          description="Log in for access to premium facilities. Achieve your health goals today!"
        />
      }
    >
      <h1 className="text-3xl font-bold">Login</h1>
    </Main>
  );
};

export default Login;

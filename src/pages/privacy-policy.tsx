import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const PrivacyPolicy = () => {
  return (
    <Main
      meta={
        <Meta
          title="Location Fitness - Privacy policy"
          description="Discover our Location Fitness privacy policy. Your data's security is our priority. Learn how we protect your information. Join us today!"
        />
      }
    >
      <h1 className="text-3xl font-bold">Privacy policy</h1>
    </Main>
  );
};

export default PrivacyPolicy;

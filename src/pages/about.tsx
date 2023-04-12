import Button from '@/components/atoms/Button';
import Card from '@/components/molecules/Card';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <Button color="primary">Primary</Button>
    <div className="-mx-3 flex flex-wrap">
      <div className="mb-6 flex w-full md:mb-0 md:w-6/12 md:p-3">
        <Card
          imgSrc="https://picsum.photos/seed/picsum/300/200"
          title="Card title"
          text="Proin faucibus arcu quis ante. Aenean commodo ligula eget dolor. Aliquam eu nunc. Sed aliquam ultrices mauris. Fusce vulputate eleifend sapien."
          cta="View details"
        />
      </div>
      <div className="mb-6 flex w-full md:mb-0 md:w-6/12 md:p-3">
        <Card
          imgSrc="https://picsum.photos/seed/picsum/300/200"
          title="Card title"
          text="Proin faucibus arcu quis ante. Aenean commodo ligula eget dolor. Aliquam eu nunc. Sed aliquam ultrices mauris. Fusce vulputate eleifend sapien."
          cta="View details"
        />
      </div>
    </div>
  </Main>
);

export default About;

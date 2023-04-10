import type { Meta } from '@storybook/react';

import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'components/molecules/Card',
  component: Card,
};

export default meta;

const singleCard = (
  <Card
    imgSrc="https://picsum.photos/960/480"
    imgAlt="Card image"
    title="Card title"
    text="Proin faucibus arcu quis ante. Aenean commodo ligula eget dolor. Aliquam eu nunc. Sed aliquam ultrices mauris. Fusce vulputate eleifend sapien."
  />
) as JSX.Element;

const renderSingleCard = () => (
  <div className="w-full md:w-3/12">{singleCard}</div>
);

export const SingleCard = () => renderSingleCard();

export const MultipleCard = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {renderSingleCard()}
      {renderSingleCard()}
      {renderSingleCard()}
    </div>
  );
};

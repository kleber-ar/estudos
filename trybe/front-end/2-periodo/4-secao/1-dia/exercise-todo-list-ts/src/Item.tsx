import React from 'react';

type Props = {
  content: string;
};

function Item(props: Props) {
  const { content } = props;
  return (
    <div className="Item">
      { content }
    </div>
  );
}

export default Item;

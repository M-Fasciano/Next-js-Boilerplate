import React from 'react';

import Box from '@/components/atoms/Box';
import Select from '@/components/atoms/Select';

interface SelectBoxProps {
  imgSrc: string;
  imgAlt: string;
  children?: any;
}

function SelectBox(props: SelectBoxProps) {
  const { imgSrc, imgAlt, children } = props;

  return (
    <Box withBorder>
      <div className="flex min-h-[30px] items-center text-sm">
        <img src={imgSrc} alt={imgAlt} />
        <Select>{children}</Select>
      </div>
    </Box>
  );
}

export default SelectBox;

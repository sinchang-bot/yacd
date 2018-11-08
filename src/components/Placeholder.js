import React from 'react';

import Icon from 'c/Icon';

import yacd from 's/yacd.svg';

import s0 from './Placeholder.module.scss';

function Placeholder() {
  return (
    <div className={s0.Placeholder}>
      <Icon id={yacd.id} width={200} height={200} />
    </div>
  );
}

export default React.memo(Placeholder);

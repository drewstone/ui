// Copyright 2017-2019 @polkadot/ui-shared authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import createSvg from './svg';

export default function circle (r: number, cx: number, cy: number): Element {
  const elem = createSvg('circle');

  elem.setAttributeNS('', 'cx', `${cx}`);
  elem.setAttributeNS('', 'cy', `${cy}`);
  elem.setAttributeNS('', 'r', `${r}`);

  return elem;
}

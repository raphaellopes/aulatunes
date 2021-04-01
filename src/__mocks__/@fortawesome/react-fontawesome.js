import React from 'react';
import { registerIcons } from '../../components/icons/register';

registerIcons();

export function FontAwesomeIcon({ icon, size }) {
  const iconClass = Array.isArray(icon) ? icon.join('-') : icon;
  const classNames = ['fa', iconClass, size].filter((value) => value).join(' ');
  return <i className={classNames} />;
}

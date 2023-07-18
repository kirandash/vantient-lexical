/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import './VantientButton.css';

import * as React from 'react';
import {ReactNode} from 'react';

import joinClasses from '../utils/joinClasses';

export default function VantientButton({
  'data-test-id': dataTestId,
  children,
  className,
  disabled,
  small,
  title,
}: {
  'data-test-id'?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  small?: boolean;
  title?: string;
}): JSX.Element {
  return (
    <button
      disabled={disabled}
      className={joinClasses(
        'VantientButton__root',
        disabled && 'VantientButton__disabled',
        small && 'VantientButton__small',
        className,
      )}
      title={title}
      aria-label={title}
      {...(dataTestId && {'data-test-id': dataTestId})}>
      {children}
    </button>
  );
}

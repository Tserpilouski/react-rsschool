/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export function c(size: any) {
  return useState(() => new Array(size))[0];
}

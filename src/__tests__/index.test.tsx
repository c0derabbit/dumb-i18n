import React from 'react';
import { render } from '@testing-library/react';
import { useI18n, I18nProvider } from '..';

test('works', () => {
  expect(1).toBeTruthy();
  render(<I18nProvider>hello</I18nProvider>);
});

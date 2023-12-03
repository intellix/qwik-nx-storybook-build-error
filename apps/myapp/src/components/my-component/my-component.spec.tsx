import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { MyComponent } from './my-component';

test(`[MyComponent Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<MyComponent />);
  expect(screen.innerHTML).toContain('MyComponent works!');
});

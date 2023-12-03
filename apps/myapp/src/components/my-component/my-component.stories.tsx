import type { Meta } from 'storybook-framework-qwik';
import { MyComponent } from './my-component';
import doc from './my-component.doc.mdx';

export default {
  title: 'MyComponent',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: doc,
    },
  },
  argTypes: {
    // put component params here
  },
  render(args) {
    return <MyComponent {...args} />;
  },
} as Meta;

export const Primary = {};

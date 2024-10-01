import type { Meta, StoryObj } from '@storybook/angular';
import { ProductsPageComponent } from './products-page.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductsPageComponent> = {
  component: ProductsPageComponent,
  title: 'ProductsPageComponent',
};
export default meta;
type Story = StoryObj<ProductsPageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/products-page works!/gi)).toBeTruthy();
  },
};

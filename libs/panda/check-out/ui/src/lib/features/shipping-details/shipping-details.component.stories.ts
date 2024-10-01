import type { Meta, StoryObj } from '@storybook/angular';
import { ShippingDetailsComponent } from './shipping-details.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ShippingDetailsComponent> = {
  component: ShippingDetailsComponent,
  title: 'ShippingDetailsComponent',
};
export default meta;
type Story = StoryObj<ShippingDetailsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/shipping-details works!/gi)).toBeTruthy();
  },
};

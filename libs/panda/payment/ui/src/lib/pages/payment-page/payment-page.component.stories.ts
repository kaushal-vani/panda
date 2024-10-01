import type { Meta, StoryObj } from '@storybook/angular';
import { PaymentPageComponent } from './payment-page.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PaymentPageComponent> = {
  component: PaymentPageComponent,
  title: 'PaymentPageComponent',
};
export default meta;
type Story = StoryObj<PaymentPageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/payment-page works!/gi)).toBeTruthy();
  },
};

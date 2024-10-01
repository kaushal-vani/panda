import type { Meta, StoryObj } from '@storybook/angular';
import { PaymentDetailsComponent } from './payment-details.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PaymentDetailsComponent> = {
  component: PaymentDetailsComponent,
  title: 'PaymentDetailsComponent',
};
export default meta;
type Story = StoryObj<PaymentDetailsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/payment-details works!/gi)).toBeTruthy();
  },
};

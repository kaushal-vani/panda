import type { Meta, StoryObj } from '@storybook/angular';
import { CheckOutPageComponent } from './check-out-page.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CheckOutPageComponent> = {
  component: CheckOutPageComponent,
  title: 'CheckOutPageComponent',
};
export default meta;
type Story = StoryObj<CheckOutPageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/check-out-page works!/gi)).toBeTruthy();
  },
};

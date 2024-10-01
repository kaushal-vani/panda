import type { Meta, StoryObj } from '@storybook/angular';
import { SelectDeviceComponent } from './select-device.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SelectDeviceComponent> = {
  component: SelectDeviceComponent,
  title: 'SelectDeviceComponent',
};
export default meta;
type Story = StoryObj<SelectDeviceComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/select-device works!/gi)).toBeTruthy();
  },
};

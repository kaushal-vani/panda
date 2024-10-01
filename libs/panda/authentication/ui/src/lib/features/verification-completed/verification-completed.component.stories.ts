import type { Meta, StoryObj } from '@storybook/angular';
import { VerificationCompletedComponent } from './verification-completed.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<VerificationCompletedComponent> = {
  component: VerificationCompletedComponent,
  title: 'VerificationCompletedComponent',
};
export default meta;
type Story = StoryObj<VerificationCompletedComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/verification-completed works!/gi)).toBeTruthy();
  },
};

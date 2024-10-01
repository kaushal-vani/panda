import type { Meta, StoryObj } from '@storybook/angular';
import { AuthenticationPageComponent } from './authentication-page.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AuthenticationPageComponent> = {
  component: AuthenticationPageComponent,
  title: 'AuthenticationPageComponent',
};
export default meta;
type Story = StoryObj<AuthenticationPageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/authentication-page works!/gi)).toBeTruthy();
  },
};

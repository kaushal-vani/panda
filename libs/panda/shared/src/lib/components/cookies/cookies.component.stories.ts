import type { Meta, StoryObj } from '@storybook/angular';
import { CookiesComponent } from './cookies.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CookiesComponent> = {
  component: CookiesComponent,
  title: 'CookiesComponent',
};
export default meta;
type Story = StoryObj<CookiesComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cookies works!/gi)).toBeTruthy();
  },
};

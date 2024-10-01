import type { Meta, StoryObj } from '@storybook/angular';
import { AboutUsPageComponent } from './about-us-page.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AboutUsPageComponent> = {
  component: AboutUsPageComponent,
  title: 'AboutUsPageComponent',
};
export default meta;
type Story = StoryObj<AboutUsPageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/about-us-page works!/gi)).toBeTruthy();
  },
};

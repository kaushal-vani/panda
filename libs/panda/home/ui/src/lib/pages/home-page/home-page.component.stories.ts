import type { Meta, StoryObj } from '@storybook/angular';
import { HomePageComponent } from './home-page.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomePageComponent> = {
  component: HomePageComponent,
  title: 'HomePageComponent',
};
export default meta;
type Story = StoryObj<HomePageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-page works!/gi)).toBeTruthy();
  },
};

import type { Meta, StoryObj } from '@storybook/angular';
import { NavigationBotComponent } from './navigation-bot.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NavigationBotComponent> = {
  component: NavigationBotComponent,
  title: 'NavigationBotComponent',
};
export default meta;
type Story = StoryObj<NavigationBotComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/navigation-bot works!/gi)).toBeTruthy();
  },
};

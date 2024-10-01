import type { Meta, StoryObj } from '@storybook/angular';
import { FeedBackPageComponent } from './feed-back-page.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FeedBackPageComponent> = {
  component: FeedBackPageComponent,
  title: 'FeedBackPageComponent',
};
export default meta;
type Story = StoryObj<FeedBackPageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/feed-back-page works!/gi)).toBeTruthy();
  },
};

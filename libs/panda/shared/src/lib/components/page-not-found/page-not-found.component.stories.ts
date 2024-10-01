import type { Meta, StoryObj } from '@storybook/angular';
import { PageNotFoundComponent } from './page-not-found.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PageNotFoundComponent> = {
  component: PageNotFoundComponent,
  title: 'PageNotFoundComponent',
};
export default meta;
type Story = StoryObj<PageNotFoundComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/page-not-found works!/gi)).toBeTruthy();
  },
};

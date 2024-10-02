import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // PrimeNG Button module
import { ContactDetailsComponent } from './contact-details.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Create a helper function to initialize the form
const createContactForm = (): FormGroup => {
  const formBuilder = new FormBuilder();
  return formBuilder.group({
    name: [''],
    email: [''],
  });
};

const meta: Meta<ContactDetailsComponent> = {
  component: ContactDetailsComponent,
  title: 'ContactDetailsComponent',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule, // Import CommonModule for basic Angular directives
        ReactiveFormsModule, // Import ReactiveFormsModule for reactive forms
        ButtonModule, // PrimeNG Button module for pButton
      ],
    }),
  ],
  argTypes: {
    contactForm: {
      control: { type: undefined }, // Disable controls for contactForm as it cannot be JSON-serialized
    },
  },
};
export default meta;

type Story = StoryObj<ContactDetailsComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: {
      ...args,
      contactForm: createContactForm(), // Use the helper function to create the form
    },
  }),
};

export const Heading: Story = {
  render: (args) => ({
    props: {
      ...args,
      contactForm: createContactForm(), // Use the helper function to create the form
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Test against the actual heading in your HTML
    expect(canvas.getByText(/Contact Details/i)).toBeTruthy();
  },
};

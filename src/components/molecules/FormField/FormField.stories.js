import FormField from './FormField';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Molecules/FormField',
  component: FormField,
};

const Template = (args) => <FormField name="story" id="story" {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'login',
};

export const Long = Template.bind({});
Default.args = {
  label: 'Very long label to see how it looks',
};

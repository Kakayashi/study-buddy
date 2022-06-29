import StudentsListItem from './StudentsListItem';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: 'imie',
    attendance: '55%',
    average: '3.5',
  },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'imie',
    attendance: '55%',
    average: '2',
  },
};
export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'imie',
    attendance: '55%',
    average: '5',
  },
};

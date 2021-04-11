import { Story, Meta } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import TextField, { TextFieldProps } from './TextField';

export default {
    title: 'Components/TextField',
    component: TextField,
    decorators: [withKnobs],
} as Meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} placeHolder={text('PlaceHolder', 'Exter Text')} />;

export const Default = Template.bind({});

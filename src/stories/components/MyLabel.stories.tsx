import {ComponentMeta, ComponentStory} from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: {
            control: 'select'
        }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false //capitalize
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true //capitalize
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary' //capitalize
}

//custom font color
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'normal',
    fontColor: 'red' //capitalize
}
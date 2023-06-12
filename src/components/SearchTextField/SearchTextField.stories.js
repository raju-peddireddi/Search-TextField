
import SearchTextField from "./index"

export default {
    title: 'SearchTextField',
    component: SearchTextField
}
const Template = (args) => <SearchTextField {...args}/>

export const OnlySearch = Template.bind({})
OnlySearch.args = {
    dark: false,
    dropDown: false
}
export const NewField = Template.bind({})
NewField.args ={
    dark: false,
    dropDown: true,
    backgroundColor: '#F6F9FF'
}

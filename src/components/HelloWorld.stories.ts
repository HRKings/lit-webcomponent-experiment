import { html } from 'lit-html';
import './HelloWorld';

export default {
  title: 'Example/HelloWorld',
  argTypes: {
    name: { control: 'text' },
    count: { control: 'number' }
  },
};

const Template = ({ name, count }) => html`<lit-helloworld .name=${name} .count=${count}></lit-helloworld>`;

export const World = Template.bind({});
World.args = {
  name: 'World',
  count: 0
};

export const Mars = Template.bind({});
Mars.args = {
  name: 'Mars',
  count: 100
};

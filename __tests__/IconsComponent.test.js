import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import IconsComponent from '../components/AddScreen/IconsComponent';

import { expect } from 'chai';

describe('IconsComponent',()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<IconsComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('contains 2 icons', () => {
        const wrapper = shallow(<IconsComponent />);
        expect(wrapper.find('Icon')).to.have.lengthOf(2);
    })
})


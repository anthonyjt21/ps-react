import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from './ProgressBar'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ProgressBar',() => {
   test('getWidthAsPercentOfTotalWidth should return 250 with total of 500 and percent of 50',() => {
       const wrapper =shallow(<ProgressBar percent={250} width={1000}></ProgressBar>);
       const width= wrapper.instance().getWidthAsPercentOfTotalWidth();
        expect(width).toEqual(2500);

   }) ;
});
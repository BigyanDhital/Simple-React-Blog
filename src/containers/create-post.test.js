import React from 'react';
import { shallow, mount } from 'enzyme';
import createPost, { CreatePost } from './create-post';

describe ('CreatePost Component', () =>{

    it('Should render succesfully',()=>{
        const component = shallow(<CreatePost/>);
        expect(component.exists()).toEqual(true);
    });

    it('Should have 1 createPost element',()=>{
        const component = shallow(<CreatePost/>);
        expect(component.find('.create-post').length).toEqual(1);

    });

    it('Should have 2 input fields',()=>{
        const component = shallow(<CreatePost/>);
        expect(component.find('.input').length).toEqual(2);

    });

    describe('Create Post Button',()=>{
        it('Should render succesfully',()=>{
            const component = shallow(<CreatePost/>);
            expect(component.find('.newPostButton').length).toEqual(1);
        });

        it ('Should call the submitPost function when clicked',()=>{
            const mockFn=jest.fn();
            const component = shallow(<CreatePost  submitNewPost={mockFn}/>);

            // component.instance().submitPost = jest.fn()
            // let {submitPost} = component.instance();
            // expect(submitPost).toHaveBeenCalledTimes(0)
            // //expect(mockFn.mock.calls.length).toEqual(0);
            // component.find('#createPostButton').simulate('click');
            // component.find('.newPostButton').simulate('click');
            // expect(submitPost).toHaveBeenCalledTimes(1);
            expect(mockFn.mock.calls.length).toEqual(0);
            component.find('.newPostButton').simulate('click');
            expect(mockFn.mock.calls.length).toEqual(1);

        });
    });
});
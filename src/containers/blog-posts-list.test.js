import React from 'react';
import { shallow, mount } from 'enzyme';
import {BlogPostsList} from './blog-posts-list';

describe ('CreatePost Component', () =>{
    
    const mockFn = jest.fn();
    const mockPostA = {id:1,title:"Mock Title",body:"Mock Body"};
    const mockPostB = {id:2,title:"Mock Title",body:"Mock Body"};

    it('Should render succesfully',()=>{
        const component = shallow(<BlogPostsList posts={[{title:"tee",body:"tee"},{tite:"tee",body:"tee"},]} getPosts={mockFn}/>);
        expect(component.exists()).toEqual(true);
    });
    it('Should display all the posts reveived, 2 in this case',()=>{
        const component = shallow(<BlogPostsList posts={[mockPostA,mockPostB,]}  getPosts={mockFn}/>);
         expect(component.find('.list-group-item').length).toEqual(2);

    });

    it('Should have only 1 selected post, if any exists',()=>{
        const component = shallow(<BlogPostsList posts={[mockPostA,mockPostB,]} selectedPost={mockPostB} getPosts={mockFn} />);
         expect(component.find('.selectedPost').length).toEqual(1);

    });
});
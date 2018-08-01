import { shallow } from "enzyme";
import React from "react";
const expect = require('chai').expect;

describe('Simple Blog', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3001/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Simples Blog');
  });

  it('Should allow me to create a new Post Title', () => {
    const mockTitle = 'New title';
    browser.url('http://localhost:3001/');
    browser.element('.create-post-input').setValue(mockTitle);
    browser.click('createPostButton');
    const actual = browser.element('.title').getText();

    expect(actual).to.equal(todoText);
  });

});


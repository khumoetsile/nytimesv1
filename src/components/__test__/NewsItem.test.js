import React from 'react'
import ReactDOM from "react-dom";
import {act,screen} from '@testing-library/react'
import {NewsContext} from "../NewsContext"
import NewsItem from '../NewsItem';

let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container); 
    container = null;
});

it("renders the data", () => {

    act(() => {
        const value = [
            {title : "Title in text"}
        ]
        ReactDOM.render((
            <NewsContext.Provider value={value}>
                <NewsItem />
            </NewsContext.Provider>
        ), container);
    });

    // expect(container.textContent).toBe("Title in text");
    expect(screen.findByText('Title in text'))
});

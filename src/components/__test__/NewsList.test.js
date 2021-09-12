import React from 'react'
import ReactDOM from "react-dom";
import {act,screen} from '@testing-library/react'
import NewsList from "../NewsList";
import {NewsContext} from "../NewsContext"

let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container); 
    container = null;
});

it("consumes the context and renders the data", () => {

    act(() => {
        const value = [
            {title : "Title in text"}
        ]
        ReactDOM.render((
            <NewsContext.Provider value={value}>
                <NewsList />
            </NewsContext.Provider>
        ), container);
    });

    // expect(container.textContent).toBe("Title in text");
    expect(screen.findByText('Title in text'))
});

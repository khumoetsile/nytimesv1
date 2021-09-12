import React from 'react'
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NewsList from "../NewsList";

it("matches snapshot", ()=>{
    renderer.create(<NewsList label='back'></NewsList>).toJSON();
})
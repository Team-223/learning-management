import React from 'react'
import styled from 'styled-components'

function Filter() {
    return (
        <Wrap >
            <h1>Filter results:</h1>
            <SearchBar >
                <Input 
                    type='text' 
                    placeholder='Search courses'
                    name='s'
                />
            </SearchBar>
            <Select>
                <option value="" hidden>Topic</option>
                <option value="1" >HTML</option>
                <option value="2" >JavaScript</option>
                <option value="3" >CSS</option>
                <option value="4" >Algorithms</option>
            </Select>
            <Span>All Topics</Span>
            <Select>
                <option value="" hidden>Level</option>
                <option value="1" >Beginner</option>
                <option value="2" >Intermediate</option>
                <option value="3" >Advanced</option>
                <option value="4" >Projects</option>
            </Select>
            <Span>All Levels</Span>
        </Wrap>
    )
}

export default Filter

const Wrap = styled.div `
    height: 391px;
    width: 282px;
    left: 48px;
    top: 530px;
    border-radius: 5px;
    border: 3px solid #00000033;
    box-shadow: 0px 4px 4px 4px #00000040;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;
`
const SearchBar = styled.div `
    height: 24px;

    border-radius: 10px;
`
const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
`
const Select = styled.select`
    height: 26px;
    width: 100%;
    left: 60px;
    top: 662px;
    border-radius: 0px;
    box-shadow: 2px 4px 4px 4px #00000040;
    border: none;
    outline: none;
    cursor: pointer;
`
const Span = styled.span`
    width: 80px;
    color: black;
    cursor: pointer;
    &:hover {
        color: blue;
    }
`
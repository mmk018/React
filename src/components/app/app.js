import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import { Button } from 'reactstrap';
/* import style from './App.module.css'; */
import './app.css';
import styled from 'styled-components';



const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;


const StyledAppBlock = styled(AppBlock)`
    background-color: grey;

`





const App = () => {


    const data = [
        {label:'Going to learn React',
        important: true, id:1},
        {label:'That is so good!',
        important: false,  id:2},
        {label:'I need a break',
        important: false,  id:3}
    ];

    return (
        <StyledAppBlock  >
            <AppHeader></AppHeader>
            <div className="search-panel d-flex">
                <SearchPanel></SearchPanel>
                <PostStatusFilter></PostStatusFilter>


            </div>
            <PostList posts={data}></PostList>
            <PostAddForm></PostAddForm>
        
        </StyledAppBlock>
        )
}

export default App;
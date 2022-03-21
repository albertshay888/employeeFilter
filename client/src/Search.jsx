import React, { useState} from 'react';

import {  Input } from 'semantic-ui-react'
import List from './List'
export default function Search({APIData, setAPIData}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);


    const searchData = (value) => {
        setSearchTerm(value)
        if (searchTerm !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchData(e.target.value)}
            />
            <List searchTerm={searchTerm} filteredResults={filteredResults} APIData={APIData}/>
        
        </div>
    )
}
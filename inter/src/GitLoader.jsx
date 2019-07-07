import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import Table1 from './Table1'
import { connect } from 'react-redux'
import { oneRepo } from './redux/actions/oneRepo'

const GitLoader = (props) => {
    const [profileData, setProfileData] = useState({
        avatar_url: '',
        login: '',
        name: '',
        repos: '',
    })

    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')

    let config = {
        auth: {
            username: '',
            password: ''
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            if (search) {
                const profileResult = await axios(
                    `https://api.github.com/users/${search}`, config
                );

                const reposResult = await axios(
                    `https://api.github.com/users/${search}/repos`, config
                )

                setProfileData({
                    avatar_url: profileResult.avatar_url,
                    login: profileResult.login,
                    name: profileResult.name,
                    repos: reposResult
                })
            }
        };

        fetchData();
    }, [search]);
    if (profileData.repos) {
        props.oneRepo(profileData)
    }
    return (
        <React.Fragment>
            <input
                value={query}
                name="username"
                onChange={event => setQuery(event.target.value)}
            />
            <Button onClick={() => setSearch(query)}>
                Submit
        </Button>
            <Table1 data={profileData} />
        </React.Fragment>
    )
}

export default connect(null, { oneRepo })(GitLoader)
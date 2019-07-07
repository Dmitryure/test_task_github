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
    const [error, setError] = useState('')
    const [styleClass, setStyleClass] = useState('beforeSubmitForm')
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
            try {
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
            } catch (error) {
                setError(error)
            }
        };

        fetchData();
    }, [search]);
    if (profileData.repos) {
        props.oneRepo(profileData)
    }

    let result;
    if (error) {
        console.log('error')
        result =
            <React.Fragment>
                <div className={styleClass}>
                    Имя не найдено, попробуйте другое
                <input
                        value={query}
                        name="username"
                        onChange={event => setQuery(event.target.value)}
                    />
                    <Button onClick={() => { setSearch(query); setStyleClass('submitForm') }}>
                        Submit
                </Button>
                </div>
        </React.Fragment>
    } else {
        result =
            <React.Fragment>
                <div className={styleClass}>
                    Введите имя пользователя Github:
                <input
                        value={query}
                        name="username"
                        onChange={event => setQuery(event.target.value)}
                    />
                    <Button onClick={() => { setSearch(query); setStyleClass('submitForm') }}>
                        Submit
                </Button>
                </div>
                <Table1 data={profileData} />

            </React.Fragment>
    }

    return (
        result
    )
}

export default connect(null, { oneRepo })(GitLoader)
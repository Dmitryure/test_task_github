import React, {useState, useEffect} from 'react'
import {useSpring, animated} from 'react-spring'
import axios from 'axios'
import {Button} from 'semantic-ui-react'
import Table1 from './Table1'

const GitLoader = () => {
    const [profileData, setProfileData] = useState({
        avatar_url:'',
        login:'',
        name:'',
        repos:'',
    })

    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')


useEffect(() => {
    const fetchData = async () => {
      const profileResult = await axios(
        `https://api.github.com/users/${search}`
      );

      const reposResult = await axios(
          `https://api.github.com/users/${search}/repos`
      )

      setProfileData({
        avatar_url: profileResult.avatar_url,
        login: profileResult.login,
        name: profileResult.name,
        repos: reposResult
        })
        
    };

    fetchData();
  }, [search]);

    return (
    <React.Fragment>
         <input
          value={query}
          name="username"
          onChange={event => setQuery(event.target.value)}
        />
        <Button onClick = {()=> setSearch(query)}>
            Submit
        </Button>
        <Table1 data = {profileData}/>
    </React.Fragment>
    )
}

export default GitLoader
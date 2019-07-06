import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Grid, Image, Button } from 'semantic-ui-react'
import Moment from 'react-moment'

const OneRepo = (props) => {
    const [commitsData, setCommitsData] = useState('')
    const [redirected, setRedirected] = useState(false)
    let id = window.location.href.match('([^/]+$)')[0]
    let repoData = {
        owner: '',
        name: ''

    }

    let config = {
        auth: {
            username: '',
            password: ''
        }
    }
    for (let i = 0; i < props.repos.length; i++) {
        if (Number(props.repos[i].id) === Number(id)) {
            repoData['owner'] = props.repos[i].owner.login
            repoData['name'] = props.repos[i].name
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            const commits = await axios(
                `https://api.github.com/repos/${repoData.owner}/${repoData.name}/commits`, config
            )
            setCommitsData({
                commits: commits['data']
            })
        }
        if (!repoData.owner) {
            props.history.push('/repos/notfound')
        }
        fetchData()

    }, [])
    console.log(commitsData.commits)

    return (
        <React.Fragment>
            {commitsData ? commitsData.commits.map(commit => {
                return (
                    <Grid columns={3} divided key={commit.sha}>
                        <Grid.Row>
                            <Grid.Column>
                                {commit.author.login} <Image size={'tiny'} src={commit.author.avatar_url} />
                            </Grid.Column>
                            <Grid.Column>
                                {commit.sha}<br /><br />
                                {commit.commit.message}
                            </Grid.Column>
                            <Grid.Column>
                                <Moment format="YYYY-MM-DD">{commit.commit.author.date}</Moment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                )
            }) : ''}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    repos: state.repos.repos.repos.repos.data
})

export default connect(mapStateToProps)(OneRepo)
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Grid, Image} from 'semantic-ui-react'
import Moment from 'react-moment'
import MainPageButton from './MainPageButton';
import {useCommits} from './useCommits'

const ListOfCommits = (props) => {
    const [commitsData, setCommitsData] = useState('')
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

    useCommits(repoData, setCommitsData, props)

    return (
        <React.Fragment>
            <MainPageButton/>
            <br/>
            {commitsData ? commitsData.commits.map((commit, index) => {
                return (
                    <Grid columns={3} divided key={commit.sha}
                        style={{ animation: `animateSingleCommit ${index / 3}s` }}>
                        <Grid.Row>
                            <Grid.Column>
                                {commit.author.login} <Image size={'tiny'}
                                    src={commit.author.avatar_url} />
                            </Grid.Column>
                            <Grid.Column>
                                {commit.sha}<br /><br />
                                {commit.commit.message}
                            </Grid.Column>
                            <Grid.Column>
                                <Moment format="YYYY-MM-DD">
                                    {commit.commit.author.date}
                                </Moment>
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

export default connect(mapStateToProps)(ListOfCommits)
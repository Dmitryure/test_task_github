import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
import SingleRepo from './SingleRepo'

const Table1 = (props) => {
    let data = props.data.repos.data
    let id = 1
    let table =
        <React.Fragment>
            <Grid centered columns={2}>
                <Grid.Column>
                    <Image className={'profilePic'} size={'big'}
                        src={data ? (data[0].owner.avatar_url) : ''} />
                </Grid.Column>

                <Grid.Row centered columns={4}>
                    <Grid.Column>
                        <Segment className={'profileData'}>
                            Имя пользователя: <b>{data ? (data[0].owner.login) : ''}</b>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment className={'profileData'}>
                            Количество репозиториев:  <b>{data ? (data.length) : ''} </b>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid>
                <Grid.Row columns={3} divided>
                    {data ? data.map((repo) => {
                        return <SingleRepo key={repo.id} repoInfo={repo} id={id++} />
                    }) : ''}
                </Grid.Row>
            </Grid>

        </React.Fragment>
    return (
        data ? table : ''
    )
}

export default Table1

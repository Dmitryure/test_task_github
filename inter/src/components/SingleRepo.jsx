import React from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SingleRepo = (props) => {
    const repoInfo = props.repoInfo
    return (
        <React.Fragment>
            <Grid.Column>
                <Link to={'/' + repoInfo.id}>
                    <Segment className={'singleRepo'} style={{animation:`animateSingleRepo ${props.id / 3}s`}}>
                        <Icon name={'briefcase'}></Icon>  Название репозитория:  {(repoInfo.name)}<br />
                        <Icon name={'align justify'}></Icon>  Описание проекта:  {(repoInfo.description)} <br />
                        <Icon name={'code'}></Icon>  Язык программирования:  {(repoInfo.language)}<br />
                        <Icon name={'star'} color={'yellow'}></Icon>   {(repoInfo.stargazers_count)} <br />
                    </Segment>
                </Link>
            </Grid.Column>
        </React.Fragment>
    )
}

export default SingleRepo
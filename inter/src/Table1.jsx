import React, {useState} from 'react'
import {useTransition, animated} from 'react-spring'
import {Grid, Segment, Image} from 'semantic-ui-react'
import SingleRepo from './SingleRepo'

const Table1 = (props) => {
    const [toggled, setToggled] = useState(true)
    let data = props.data.repos.data
    let transition = useTransition(toggled, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    })
    let table =
    <React.Fragment>
<Grid centered columns={2}>
<Grid.Column>
    <Image className={'profilePic'} size = {'big'} src = {data ? (data[0].owner.avatar_url) : ''}/>
</Grid.Column>

<Grid.Row centered columns={4}>
  <Grid.Column>
  <Segment>Имя пользователя: <b>{data ? (data[0].owner.login) : ''}</b> </Segment>
  </Grid.Column>
  <Grid.Column>
  <Segment>Количество репозиториев:  <b>{data ? (data.length) : ''} </b></Segment>
  </Grid.Column>
</Grid.Row>
</Grid>
    <Grid>
        <Grid.Row columns={3} divided>
        {data ? data.map(repo => {
            return <SingleRepo key={repo.id} repoInfo = {repo}/>
        }) : ''}
        </Grid.Row>
    </Grid>

    </React.Fragment>
    return (
       data ? table : ''
    )
} 

export default Table1

{/* <Grid centered columns={2}>
<Grid.Column>
    <Image fluid src = {data ? (data[0].owner.avatar_url) : ''}/>
</Grid.Column>

<Grid.Row centered columns={4}>
  <Grid.Column>
  <Segment>Имя пользователя: {data ? (data[0].owner.login) : ''} </Segment>
  </Grid.Column>
  <Grid.Column>
  <Segment>Количество репозиториев: {data ? (data.length) : ''}</Segment>
  </Grid.Column>
</Grid.Row>
</Grid> */}
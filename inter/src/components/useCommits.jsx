import {useEffect} from 'react'
import axios from 'axios'


export const useCommits = (repoData, setFunc, props) => {
    useEffect(() => {
        const fetchData = async () => {
            const commits = await axios(
                `https://api.github.com/repos/${repoData.owner}/${repoData.name}/commits`
            )
            setFunc({
                commits: commits['data']
            })
        }
        if (!repoData.owner) {
            props.history.push('/repos/notfound')
        }
        fetchData()

    }, [])
}
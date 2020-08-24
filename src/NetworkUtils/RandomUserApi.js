// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://randomuser.me',
  headers: { Accept: 'application/json' },
})


export const fetchUsers = (count) => {
    return api.get('/api', {results: count})
}

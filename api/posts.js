import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'e6b270a73dd33bd6b33b329976',
  version: 'v3'
})

export async function getPosts () {
  return await api.posts
    .browse({
      limit: 'all'
    })
    .catch((err) => {
      throw (err)
    })
}

export async function getSinglePost (postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch((err) => {
      console.log('slug', postSlug, api)
      throw (err)
    })
}

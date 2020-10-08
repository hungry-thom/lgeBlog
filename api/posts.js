import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '9c0d067a7e24e53c088580a407',
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
      throw (err)
    })
}

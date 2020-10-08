<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
import { getSinglePost } from '../api/posts'

export default {
  async asyncData ({ params }) {
    const post = await getSinglePost(params.slug)
    return { post }
  }
}
</script>

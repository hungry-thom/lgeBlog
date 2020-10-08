<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.html"/>
  </div>
</template>

<script>
import { getSinglePost } from '../../api/posts'

export default {
  async asyncData ({ params }) {
    console.log('params', params.slug, params)
    const post = await getSinglePost(params.slug)
    return { post }
  }
}
</script>

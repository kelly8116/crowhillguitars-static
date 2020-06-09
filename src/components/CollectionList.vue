<template>
  <div class="post-list">
    <hr class="line" />
    <h1 class="title" v-html="post.title" />
    <g-link :to="post.slug" class="read">Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
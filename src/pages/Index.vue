<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <section class="posts">
      <CollectionList v-for="edge in $page.pages.edges" :key="edge.node.title" :post="edge.node" />
    </section>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
query {
  pages: allCollectionItem {
		edges {
      node {
        title
      }
    }
  }
}
</page-query>

<script>
import CollectionList from '~/components/CollectionList.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    CollectionList
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

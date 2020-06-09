<template>
  <div class="layout">
    <g-link to="/collection/salvaged-series-3" class="link">  &larr; Go Back right now</g-link>
    <h1 class="title" v-html="$page.qry.title" />
    <g-image :src="$page.qry.hero_image" />
    {{ $page.qry.hero_image }}
    <slot/> <!-- Page/Template will be inserted here -->
  </div>    
</template>

<page-query>
  query Collection($path: String){
    qry: collectionItem(path: $path){
      title
      hero_image (width: 720, height: 200, quality: 90)
    }
  }
</page-query>

<script>
export default {
  props: {
    content: String
  },
  computed: {
    imagePath (image) {
      console.log(image)
      const path = '!!assets-loader!~' + image
      return {
        alt: 'Todd',
        img: require(path)
      }
    }
  }
}
</script>
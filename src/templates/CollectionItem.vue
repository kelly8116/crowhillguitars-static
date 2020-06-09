<template>
  <div class="layout">
    <g-link to="/collection/salvaged-series-3" class="link">  &larr; Go Back right now</g-link>
    <h1 class="title" v-html="$page.qry.title" />
    <g-image :src="require(`!!assets-loader!@images/${$page.qry.hero_image}`)" width="200" height="200" fit="contain" />
    <slot/> <!-- Page/Template will be inserted here -->
  </div>    
</template>

<page-query>
  query Collection($path: String){
    qry: collectionItem(path: $path){
      title
      hero_image (width: 400, height: 200)
    }
  }
</page-query>

<script>
export default {
  props: {
    content: String
  }
}
</script>
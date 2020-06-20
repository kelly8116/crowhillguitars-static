<template>
  <div class="container">
    <div class="flex flex-wrap">
      <!-- <g-link to="/collection/salvaged-series-3" class="link w-full">  &larr; Go Back right now</g-link> -->
      <!-- <g-image class="responsive-image" v-if="$page.qry.hero_image" :src="$page.qry.hero_image" width="10" /> -->
      <!-- <hero-image :image="imgPath($page.qry.hero_image)" /> -->
      <!-- <g-image :src="require(`!!assets-loader!@images/${$page.qry.hero_image}`)"/> -->
      <hero-image :image="$page.qry.hero_image"></hero-image>
      <!-- <g-image :src="test" /> -->
      <!-- <g-image src="~/images/11419strat-face20200609.jpg" width="200"/> -->
      <!-- <slot/> Page/Template will be inserted here -->
    </div>
    <div class="flex flex-wrap mt-8">
      <div class="w-full sm:w-1/2">
          <h1 class="title w-full" v-html="$page.qry.title" />
      </div>
    </div>
  </div>    
</template>

<page-query>
  query CollectionItem($path: String){
    qry: collectionItem(path: $path){
      title
      hero_image
    }
  }
</page-query>

<script>
import HeroImage from '~/components/HeroImage'

export default {
  props: {
    content: String
  },
  components: {
    HeroImage
  }
}
</script>
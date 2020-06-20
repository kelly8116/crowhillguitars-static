<template>
  <div class="hero w-full">
    <!-- {{ heroImage() }} -->
    <g-image :src="heroImage()" ref="hero"/>
  </div>
</template>

<script>
export default {
  props: ['image', 'class'],
  mounted () {
    // console.log(this.$refs.hero)
    // const hero = this.$refs.hero
    // const bps = [
    //     window.matchMedia("(min-width: 600px) and (max-width: 1200px)"),
    //     window.matchMedia("(max-width: 600px")
    //   ]
    //   function mqResponse() {
    //     if (bps[0].matches) {
    //       hero.setAttribute('width', 480)
    //     } else if (bps[1].matches) {
    //       hero.setAttribute('width', 1024)
    //     } else {
    //       hero.setAttribute('width', 1980)
    //     }
    //   }
    //   for (let i=0; i < bps.length; i++) {
    //     mqResponse(bps[i])
    //     bps[i].addListener(mqResponse)
    //   }
    // console.log(this.$refs.hero)
  },
  methods: {
    heroImage () {
      const imgsrc = this.image
      console.log(imgsrc)
      let img = require(`!!assets-loader?width=1200&blur=10&immediate=false&quality=100!@images/${imgsrc}`)
      // img.sizes = '(max-width: 1979px) 20vw, (max-width: 1400px) 100vw, 1980px'
      // img.srcset.push(require(`!!assets-loader?width=1600&blur=10&immediate=false&quality=10!@images/${imgsrc}`))
      // img.srcset.push(require(`!!assets-loader?width=1200&blur=10&immediate=false&quality=100!@images/${imgsrc}`) + ' 1200w')
      console.log(img)
      return img
    }

  }
}
</script>
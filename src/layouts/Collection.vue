<template>
  <Layout>
    <br>
    <g-link to="/" class="link">  &larr; Go Back now</g-link>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
    </div>
    <div class="post-content">
    </div>
  </Layout>
</template>

<page-query>
query {
  collection: allCollectionItems {
    nodes {
      title,
      slug,
      path
    }
  }
}
</page-query>
<template>
  <div class="uk-padding">

    <vk-pagination
      :page.sync="page"
      :total="200"
      :perPage="10"
    >
      <vk-pagination-page-first />
      <vk-pagination-page-prev />
      <vk-pagination-pages />
      <vk-pagination-page-next />
      <vk-pagination-page-last />
    </vk-pagination>

    <vk-pagination
      align="center"
      :page.sync="page"
      :total="200"
      :perPage="10"
    >
      <vk-pagination-page-first />
      <vk-pagination-page-prev />
      <vk-pagination-pages />
      <vk-pagination-page-next />
      <vk-pagination-page-last />
    </vk-pagination>

    <vk-pagination
      align="right"
      :page.sync="page"
      :total="200"
      :perPage="10"
    >
      <vk-pagination-page-first />
      <vk-pagination-page-prev />
      <vk-pagination-pages />
      <vk-pagination-page-next />
      <vk-pagination-page-last />
    </vk-pagination>

    <h2>Layout</h2>
    <vk-pagination
      align="center"
      :page.sync="page"
      :total="200"
      :perPage="10"
    >
      <vk-pagination-page-first />
      <vk-pagination-page-prev />
      <vk-pagination-page-next />
      <vk-pagination-page-last />
    </vk-pagination>

    <vk-pagination
      align="center"
      :page.sync="page"
      :total="200"
      :perPage="10"
    >
      <vk-pagination-pages />
    </vk-pagination>

    <vk-pagination
      align="center"
      :page.sync="page"
      :total="200"
      :perPage="10"
    >
      <vk-pagination-page-prev />
      <vk-pagination-pages />
      <vk-pagination-page-next />
    </vk-pagination>

    <vk-pagination
      :page.sync="page"
      :total="200"
      :perPage="10"
    >
      <vk-pagination-page-prev label="Previous" expanded />
      <vk-pagination-page-next label="Next" expanded />
    </vk-pagination>

    <vk-pagination
      :page.sync="page"
      :total="200"
      :perPage="10"
    >
      <vk-pagination-page-first label="First" expanded />
      <vk-pagination-page-last label="Last" expanded />
    </vk-pagination>

  </div>
</template>

<script>
export default {
  data: () => ({
    page: 7
  })
}
</script>

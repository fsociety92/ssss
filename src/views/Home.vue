<template>
  <div>
    <h1>Home</h1>
    <div v-for="p in Products" :key="p.id">
      <p>{{ p.title }}</p>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    Products: {
      query: gql`
        query products($limit: Int!) {
          Products(limit: $limit) {
            id
            title
            description
            price
          }
        }
      `,
      variables() {
        return {
          limit: this.limit,
        };
      },
    },
  },
  data() {
    return {
      limit: 10,
    };
  },
};
</script>

<style>
</style>
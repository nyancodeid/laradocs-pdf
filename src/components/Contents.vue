<script setup lang="ts">
import { ref, onMounted } from "vue";
import Card from "./Card.vue";
import { getRepositoryContent } from "../services/repository.ts";

const data = ref(null);
const count = ref(0);

onMounted(async () => {
  const contents = await getRepositoryContent();

  data.value = contents
    .filter((content) => {
      return content.name.endsWith(".pdf");
    })
    .reverse();
});
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <Card v-for="item in data" :content="item" :key="item.sha" />
  </div>
</template>

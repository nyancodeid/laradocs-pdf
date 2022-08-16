<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getRepositoryContent } from '../services/repository.ts';

const data = ref(null);
const count = ref(0);

onMounted(async () => {
  const contents = await getRepositoryContent();

  data.value = contents
    .filter((content) => {
      return content.name.endsWith('.pdf');
    })
    .map((content) => {
      return {
        name: content.name,
        size: content.size,
        download_url: content.download_url,
      };
    });
});
</script>

<template>
  {{ data }}
</template>

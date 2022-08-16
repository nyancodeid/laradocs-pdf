<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getRepositoryContent } from '../services/repository.ts';

const data = ref(null);
const count = ref(0);

onMounted(async () => {
  data.value = await getRepositoryContent();
});
</script>

<template>
  {{ data }}
</template>

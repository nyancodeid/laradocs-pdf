<script setup lang="ts">
import { computed } from "vue";
import byteSize from "byte-size";
import { IContent } from "../services/repository";

interface IProps {
  content: IContent;
}

const { content } = defineProps<IProps>();

const title = computed(() => {
  return content.name.replace(".pdf", "").replace("-", " ");
});
const size = computed(() => byteSize(content.size));
const onlineDocs = computed(() => {
  const version = content.name.replace(".pdf", "").replace("laravel-", "");

  if (["4.1", "4.0", "3.x"].includes(version)) return null;

  return `https://laravel.com/docs/${version}`;
});
</script>

<template>
  <div
    class="bg-white text-gray-800 p-4 rounded-md shadow-md flex flex-col items-center"
  >
    <h3 class="capitalize">{{ title }}</h3>
    <span class="text-[11px]">
      <span :title="content.sha">SHA: {{ content.sha.substr(0, 8) }}</span>
    </span>
    <img class="my-4 w-1/4" src="/laravel.min.svg" alt="" />
    <span>{{ size }}</span>

    <div class="flex">
      <a
        class="button button-primary mt-2 mr-2"
        :href="content.download_url"
        download
      >
        <i-ri-download-line />
        PDF
      </a>

      <a
        v-if="!!onlineDocs"
        class="button mt-2"
        :href="onlineDocs"
        target="_blank"
      >
        <i-ri-external-link-line />
        Online Docs
      </a>
    </div>
  </div>
</template>
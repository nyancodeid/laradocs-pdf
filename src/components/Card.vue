<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import byteSize from "byte-size";
import RiDownloadLine from "~icons/ri/download-line";
import { IContent } from "../services/repository";

interface IProps {
  content: IContent;
}

const { content } = defineProps<IProps>();

const title = computed(() => {
  return content.name.replace(".pdf", "").replace("-", " ");
});
const size = computed(() => byteSize(content.size));

const onDownload = (link: string) => {
  console.log(link);
};
</script>

<template>
  <div
    class="bg-white text-gray-800 p-4 rounded-md shadow-md flex flex-col items-center"
  >
    <h3 class="capitalize">{{ title }}</h3>
    <span class="text-[11px]">{{ content.sha }}</span>
    <img
      class="my-4 w-1/4"
      src="https://laravel.com/img/logomark.min.svg"
      alt=""
    />
    <span>{{ size }}</span>

    <button class="button mt-2" @click="onDownload(content.download_url)">
      <RiDownloadLine />
      PDF
    </button>
  </div>
</template>
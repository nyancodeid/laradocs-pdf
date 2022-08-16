<script setup lang="ts">
import RiGithubFill from "~icons/ri/github-fill";
</script>

<template>
  <div class="flex flex-col items-center my-6">
    <h1 class="text-6xl font-bold font-laravel">
      <span class="text-laravel-300">Laravel</span> Docs in
      <span class="text-laravel-300">PDF</span>
    </h1>
    <p class="max-w-[512px] font-laravel my-3">
      Laravel is a web application framework with expressive, elegant syntax.
      We’ve already laid the foundation — freeing you to create without sweating
      the small things.
    </p>

    <div class="flex gap-2 mb-4">
      <a
        href="https://laravel.com"
        class="shadow px-6 py-3 leading-4 rounded-lg bg-laravel-300 text-white"
        >Get Started</a
      >
      <a
        href="https://laravel.com"
        class="shadow px-4 py-3 leading-4 rounded-lg bg-gray-700 text-white inline-flex items-center gap-2"
      >
        <RiGithubFill />
        Github
      </a>
    </div>
  </div>
</template>
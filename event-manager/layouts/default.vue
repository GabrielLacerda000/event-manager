<script setup>
definePageMeta({
  middleware: ['auth']
})

useHead({
  title: 'Blog',
  link: [{
     rel: 'stylesheet',
     href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
  }],
  bodyAttrs: {
    class: 'bg-neutral-100 font-semibold font-mono'
  },
})
</script>

<template>
    <div>
      <header>
        <Navbar />
      </header>

        <slot /> 
    </div>
  </template>
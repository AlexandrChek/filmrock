<template>
    <div class="ratio ratio-16x9">
        <iframe :src="url" allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        name: 'VideoFrame',
        props: ['url']
    }
</script>
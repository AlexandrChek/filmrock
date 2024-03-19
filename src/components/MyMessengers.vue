<template>
    <div class="messengers">
        <img v-for="icon in icons" :key="icon.fileName" :src="icon.fileName" :aly="icon.alt">
    </div>
    <div>
        (not GSM<img src="../assets/dont_call.jpg" alt="Not GSM">)
    </div>
</template>

<script>
export default {
    name: 'MyMessengers',
    data() {
        return {
            icons: [
                {fileName: this.getUrl('viber.png'), alt: 'Viber'},
                {fileName: this.getUrl('telegram.png'), alt: 'Telegram'},
                {fileName: this.getUrl('whats_up.png'), alt: 'What`s up'},
                {fileName: this.getUrl('meet.png'), alt: 'Meet'},
                {fileName: this.getUrl('zoom.png'), alt: 'Zoom'}
            ]
        }
    },
    methods: {
        getUrl(fileName) {
            return require(`../assets/${fileName}`)
        }
    }
}
</script>

<style scoped lang="scss">
    .messengers {
        display: inline-flex;
        margin-right: 5px;
    }
    img {
        width: 7.8vw;
        margin: 4px;
        max-height: 41px;
        border-radius: 9px;
        @media (min-width: 576px) {
            margin: 5px;
            width: auto;
        }
    }
</style>
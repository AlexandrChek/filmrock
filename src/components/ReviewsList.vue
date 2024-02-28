<template>
    <div v-for="review in reviews" :key="review" class="mt-3">
        <AdaptiveParagraf class="m-0 review-head">
            {{review.user}}, &ensp;{{review.date}}
        </AdaptiveParagraf>
        <AdaptiveParagraf>
            {{review.body}}
        </AdaptiveParagraf>
    </div>
    <MyButton v-if="allReviewsBtn" @click="showAllReviews">
        Show all reviews
    </MyButton>
    <MyButton v-if="collapseRewiewsBtn" @click="collapseRewiews">
        Collapse rewiews
    </MyButton>
</template>

<script>
import AdaptiveParagraf from './AdaptiveParagraf.vue'
import MyButton from './MyButton.vue'

export default {
    name: 'ReviewsList',
    props: ['reviewsLength', 'allReviews'],
    components: {
        AdaptiveParagraf,
        MyButton
    },
    data() {
        return {
            reviews: [],
            allReviewsBtn: false,
            collapseRewiewsBtn: false
        }
    },
    mounted() {
        const viewsLoader = setInterval(() => {
            this.getReviews()
            if (this.allReviews.length === this.reviewsLength) {
                clearInterval(viewsLoader)
            }
        }, 10)
    },
    methods: {
        getReviews() {
            if (this.reviewsLength <= 15) {
                this.reviews = [...this.allReviews]
            } else {
                this.reviews = this.allReviews.slice(0, 15)
                this.allReviewsBtn = true
            }
        },
        showAllReviews() {
            this.reviews = [...this.allReviews]
            this.allReviewsBtn = false
            this.collapseRewiewsBtn = true
        },
        collapseRewiews() {
            this.reviews = this.allReviews.slice(0, 15)
            this.collapseRewiewsBtn = false
            this.allReviewsBtn = true
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

    .review-head {
        color: $toxic-green;
    }
</style>
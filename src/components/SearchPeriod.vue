<template>
    <div class="period-wrapper">
        <label>Year</label>
        <InputYear id="year" @valueEntered="updateYear"/>&ensp; /
        <div class="period">Period:</div>
        <div class="d-inline-flex">
            <div class="d-inline-flex from-wrapper">
                <label>from</label>
                <InputYear id="from" @valueEntered="updateFrom"/>
            </div>
            <label>to</label>
            <InputYear id="to" @valueEntered="updateTo"/>
        </div>
    </div>        
    <ModalInfo v-if="modalShown" @pressclose="closeModal">
        {{ modalMessage }}
    </ModalInfo>
</template>

<script>
import InputYear from './InputYear.vue'
import ModalInfo from './ModalInfo.vue'

export default {
    name: 'SearchPeriod',
    components: {
        InputYear,
        ModalInfo
    },
    data() {
        return {
            year: null,
            from: null,
            to: null,
            modalShown: false,
            modalMessage: '',
            currentYear: new Date().getFullYear()
        }
    },
    emits: ['yearEntered', 'periodEntered'],
    methods: {
        updateYear(year) {
            this.year = year
            this.handleYear()
        },
        updateFrom(from) {
            this.from = from
            this.handlePeriod()
        },
        updateTo(to) {
            this.to = to
            this.handlePeriod()
        },
        handleYear() {
            const from = document.querySelector('#from')
            const to = document.querySelector('#to')

            if(this.year) {
                from.disabled = true
                to.disabled = true
                this.$emit('yearEntered', this.year)
            } else {
                this.$emit('yearEntered', 0)
                if(from.disabled) {
                    from.removeAttribute('disabled')
                    to.removeAttribute('disabled')
                }
            }
        },
        handlePeriod() {
            const year = document.querySelector('#year')

            if(this.from && this.to) {
                year.setAttribute('disabled', true)
                if(this.from > this.to) {
                    this.modalMessage = 'The ending year must be more than starting year.'
                    this.modalShown = true
                } 
                this.$emit('periodEntered', this.from, this.to)
            } else if(!this.from && this.to) {
                this.modalMessage = 'If you enter a period, the starting year must be filled (xxxx).'
                this.modalShown = true
                year.setAttribute('disabled', true)
                this.$emit('periodEntered', 0, 0)
            } else if(this.from && !this.to) {
                year.setAttribute('disabled', true)
                this.$emit('periodEntered', this.from, this.currentYear)
            } else {
                this.$emit('periodEntered', 0, 0)
                if(year.disabled) {
                    year.removeAttribute('disabled')
                }
            }
        },
        closeModal() {
            this.modalShown = false
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';
@import '../extends';

    .period-wrapper {
        margin-bottom: 17px;
        @media (max-width: 767px) and (min-width: 576px) {
            margin: 0;
        }
    }
    label {
        @extend %label-search;
    }
    .period {
        margin: 12px 0 2px 0;
        font-size: $search-label-f-size;
    }
    .from-wrapper {
        margin-right: calc(20px + .12vw);
    }
</style>
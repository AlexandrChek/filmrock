<template>
    <div>
        <label for="year" class="mt-5 mb-3">Year</label>
        <input type="number" id="year" v-model="year" @blur="handleYear">
        /
        <div>
            <div class="mb-1 period">Period:</div>
            <div class="d-inline-flex">
                <div class="d-inline-flex">
                    <label for="from">from</label>
                    <input type="number" id="from" v-model="from" @blur="handlePeriod">
                </div>
                <div class="d-inline-flex to-wrapper">
                    <label for="to">to</label>
                    <input type="number" id="to" v-model="to" @blur="handlePeriod">
                </div>
            </div>
        </div>
    </div>
    <ModalInfo v-if="modFromMoreThanTo" @pressclose="closeModFromMoreThanTo">
        An opening year must be more than closing year.
    </ModalInfo>
    <ModalInfo v-if="modUnfilledFrom" @pressclose="closeModUnfilledFrom">
        If you entering a period, an opening year must be filled (xxxx).
    </ModalInfo>
</template>

<script>
import ModalInfo from './ModalInfo.vue'

export default {
    name: 'SearchPeriod',
    components: {ModalInfo},
    data () {
        return {
            year: null,
            from: null,
            to: null,
            modFromMoreThanTo: false,
            modUnfilledFrom: false,
            currentYear: new Date().getFullYear()
        }
    },
    emits: ['yearEntered', 'periodEntered'],
    methods: {
        handleYear () {
            let from = document.querySelector('#from')
            let to = document.querySelector('#to')
            if(this.year) {
                from.disabled = true
                to.disabled = true
                this.$emit('yearEntered', this.year)
            } else {
                this.$emit('yearEntered', 0)
                if (from.disabled) {
                    from.removeAttribute('disabled')
                    to.removeAttribute('disabled')
                }
            }
        },
        handlePeriod () {
            let year = document.querySelector('#year')
            if (this.from && this.to) {
                year.setAttribute('disabled', true)
                if (this.from > this.to) {
                    this.modFromMoreThanTo = true
                } 
                this.$emit('periodEntered', this.from, this.to)
            } else if (!this.from && this.to) {
                this.modUnfilledFrom = true
                year.setAttribute('disabled', true)
                this.$emit('periodEntered', 0, 0)
            } else if (this.from && !this.to) {
                year.setAttribute('disabled', true)
                this.$emit('periodEntered', this.from, this.currentYear)
            } else {
                this.$emit('periodEntered', 0, 0)
                if (year.disabled) {
                    year.removeAttribute('disabled')
                }
            }
        },
        closeModFromMoreThanTo () {
            this.modFromMoreThanTo = false
        },
        closeModUnfilledFrom () {
            this.modUnfilledFrom = false
        }
    }
}
</script>

<style scoped>
#year {
    margin: 0 8px;
    width: 6.7vw;
}
.to-wrapper {
    margin: 0 10px;
}
#from, #to {
    margin: 0 10px;
    width: 6.7vw;
}
#year:focus, #from:focus, #to:focus {
    border: none;
    outline: 3px solid #1dda2c;
    background-color: beige;
    border-radius: 2px;
}
@media (max-width: 1199px) {
    #year, #from, #to {
        width: 7.1vw;
    }
    .to-wrapper {
    margin: 0 9px;
    }
    label, input, .period {
        font-size: 15px;
    }
}
@media (max-width: 991px) {
    #year, #from, #to {
        width: 9.9vw;
    }
}
@media (max-width: 767px) {
    #year, #from, #to {
        width: 13.9vw;
    }
}
@media (max-width: 575px) {
    #year, #from, #to {
        width: 19vw;
    }
    label, input, .period {
        font-size: smaller;
    }
}
</style>
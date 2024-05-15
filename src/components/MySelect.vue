<template>
    <div class="d-inline-flex w-100">
        <label class="left-label"><slot></slot></label>
        <div class="select-field" tabindex="0" @focus="reportFocus">
            <span>{{ selectedItem }}</span>
            <div class="arrow">&#9660;</div>
            <div class="items">
                <label class="radio-item" v-for="item in values" :key="item" @click.self="transmitValue(item)">
                    <input type="radio" class="d-none" :value="item" v-model="selectedItem">
                    {{ item }}
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MySelect',
    props: ['values'],
    data() {
        return { selectedItem: '' }
    },
    methods: {
        reportFocus() {
            this.$emit('focused')
        },
        transmitValue(item) {
            this.$emit('itemSelected', item)
            document.querySelector('.select-field:focus').blur()
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';
@import '../extends';

    $top-phone: max(52px, calc($main-title-f-size * 1.5));

    .left-label {
        @extend %label-search;
    }
    .select-field {
        height: $year-height;
        min-width: calc($search-label-f-size * 8 + 14px);
        background-color: white;
        color: rgb(5, 112, 5);
        font-size: $search-label-f-size;
        padding-left: 4px;
        border-radius: 3px;
        &:focus .items {
            display: block;
        }
    }
    .arrow {
        width: 13.5%;
        height: 100%;
        line-height: $year-height;
        text-align: center;
        font-size: calc($search-label-f-size * 0.55);
        color: black;
        padding-top: 1px;
        background-color: $gray-back;
        border-radius: 0 3px 3px 0;
        float: right;
    }
    .items {
        display: none;
        position: fixed;
        left: calc((100vw - min(100vw, 370px)) / 2);
        top: $top-phone;
        z-index: 3;
        width: min(100vw, 370px);
        max-height: calc(100vh - ($top-phone * 2));
        overflow-y: scroll;
        padding-bottom: 3px;
        background-color: $gray-back;
        border-radius: 17px;
        font-size: calc($search-label-f-size * 2);
        @media (min-width: 576px) and (max-width: 768px) and (orientation: landscape) {
            max-height: calc(100vh - $top-phone);
        }
    }
    .radio-item {
        display: block;
        padding: 2px 7px;
        height: calc($year-height * 2);
        border: .1px dotted rgba(5, 112, 5, .2);
        &:first-child {
            color: rgba(150, 150, 150, .9);
        }
    }

    @media (min-width: 576px) and (orientation: portrait), (min-width: 768px) {
        .select-field {
            position: relative;
            cursor: pointer;
            &:focus {
                background-color: $backlight;
                box-shadow: $input-focus-shadow;
                .arrow {
                    color: $toxic-green;
                }
            }
        }
        .items {
            position: absolute;
            left: 0;
            top: calc(100% + 2px);
            width: 100%;
            padding: 0;
            overflow-y: auto;
            background-color: $backlight;
            font-size: inherit;
        }
        .radio-item {
            height: calc($year-height + 4px);
            cursor: pointer;
            &:hover {
                background-color: blue;
                color: white;
            }
        }
        .items, .radio-item:last-child {
            border-radius: 0 0 5px 5px;
        }
    }
</style>
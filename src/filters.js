import Vue from "vue";

Vue.filter("amountSymbolTR", (value) => {
    return `${value}.TL`;
});
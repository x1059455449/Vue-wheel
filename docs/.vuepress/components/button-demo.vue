<template>
    <div>
        <g-button icon="setting">Button</g-button>
        <g-button>Button</g-button>
        <g-button icon="setting" icon-position="right">Button</g-button>
        <g-button icon="cdownload" icon-position="right">DownLoad</g-button>
        <g-button icon="cdownload" icon-position="right" loading>DownLoad</g-button>
    </div>
</template>

<script>
import Button from '../../../src/button'
    export default {
        components:{
            'g-button':Button
        }
    }
</script>

<style lang="scss" scoped>

</style>
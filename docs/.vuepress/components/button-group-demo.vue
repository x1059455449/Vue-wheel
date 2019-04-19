<template>
    <div>
        <g-button-group style="margin:20px;">
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
    </div>
</template>

<script>
import ButtonGroup from '../../../src/button-group'
import Button from '../../../src/button'
    export default {
        components:{
            'g-button-group': ButtonGroup,
            'g-button': Button 
        }
    }
</script>

<style lang="scss" scoped>

</style>
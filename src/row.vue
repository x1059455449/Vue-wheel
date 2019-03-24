<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'VueWheelRow',
        props:{
            gutter:{
                type:[Number,String]
            },
            align:{
                type:String,
                validator (value) {
                    return ['left','right','center'].includes(value)
                }
            }
        },
        // created () {
        //     console.log('row created');
        // },
        computed: {
            rowStyle () {
                let {gutter} = this
                return {
                    marginLeft:-gutter/2 + 'px',
                    marginRight:-gutter/2 + 'px'
                }
            },
            rowClass () {
                let {align} = this
                return [align && `align-${align}`]
            }
        },
        mounted () {
            //console.log('rou mounted');
            //console.log(this.$children)
            this.$children.forEach(vm => {
                vm.gutter = this.gutter
            });
        }
    }
    /*var div = document.createElement('div')//created
    var childDiv = document.createElement('div')//child created
    div.appendChild(childDiv)//child mounted
    document.body.appendChild(div)//mounted*/
</script>

<style scoped lang="scss">
.row {
    display: flex;
    flex-wrap: wrap;
    //margin: 0 -10px;
    &.align-left {
        justify-content: flex-start;
    }
    &.align-right {
        justify-content: flex-end;
    }
    &.align-center {
        justify-content: center;
    }
}
</style>
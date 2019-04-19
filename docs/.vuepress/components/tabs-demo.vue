<template>
    <div>
        <g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="set" disabled>
                    <g-icon name="setting"></g-icon>Banned using
                </g-tabs-item>
                <g-tabs-item name="finance">
                    finance
                </g-tabs-item>
                <g-tabs-item name="sports">
                    sports
                </g-tabs-item>
                <g-tabs-item name="news">
                    news
                </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="set">something about setting</g-tabs-pane>
                <g-tabs-pane name="finance">something about finance</g-tabs-pane>
                <g-tabs-pane name="sports">something about sports</g-tabs-pane>
                <g-tabs-pane name="news">something about news</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>

<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
import Icon from '../../../src/icon'
    export default {
        components:{
            'g-tabs':Tabs,
            'g-tabs-head':TabsHead,
            'g-tabs-body':TabsBody,
            'g-tabs-item':TabsItem,
            'g-tabs-pane':TabsPane,
            'g-icon':Icon
        },
        props: {
            selected: {
                type: String | Number,
                //required: true
            }   
        },
        data () {
            return {
                selectedTab: 'finance'
            }
        }
    }    
</script>

<style lang="scss" scoped>

</style>
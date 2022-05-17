<template>
    <header class="header">
        <div class="wrap header_box">
            <div>
                <router-link :to="'/'">
                    <img src="../../assets/images/logo.png" alt="logo">
                </router-link>
            </div>
            <vNav />
            <div class="icon">
                <i class="icon-heart"></i>
                <i class="icon-qa"></i>
            </div>
        </div>
    </header>
</template>

<script>
import vNav from './nav'

export default {
    name: 'Header',
    components: {
        vNav,
    }
}
</script>

<style lang="scss">
    .header{
            height: 98.85px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

            &_box{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 100%;

                .icon{
                    display: flex;
                    &-heart,&-qa{
                        display: block;
                        margin: 0 8px;
                        width: 22px;
                        height: 22px;
                        cursor: pointer;
                    }
                    &-heart{
                        background: url('../../assets/images/icon-bar.png') no-repeat  top left -151px;
                        background-size: inherit;
                        &:hover{
                            background-position: top -41px left -151px
                        }
                    }
                    &-qa{
                        background: url('../../assets/images/icon-bar.png') no-repeat  top left -188px;
                        background-size: inherit;
                        &:hover{
                            background-position: top -41px left -188px;
                        }
                    }
                }
            }
        }

</style>
<template>
    <ul class="nav">
        <li v-for="item in nav" :key="item.key" >
            <router-link :to="item.link">
                <p class="fz-16">{{item.mainTitle}}</p>
                <p class="fz-10">{{item.subTitle}}</p>
            </router-link>
        
            <div class="nav_drop">
                <router-link v-for="item in item.nav_List" :key="item.key" :to="item.link">
                    <img :src="require('../../assets/images/header/'+ item.key +'.png')" alt="">
                    <p class="fz-16">{{item.mainTitle}}</p>
                </router-link>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Nav',

    data: () => {
        return {
            nav:[
                {   
                    key: 'travel',
                    link: '/travel',
                    mainTitle: '找景點',
                    subTitle:'ATTRACTION',
                    nav_List:[
                        {
                            key: 'travel_01',
                            link: '/travel',
                            mainTitle: '北部'
                        },
                        {
                            key: 'travel_02',
                            link: '/travel',
                            mainTitle: '中部'
                        },
                        {
                            key: 'travel_03',
                            link: '/travel',
                            mainTitle: '南部'
                        },
                        {
                            key: 'travel_04',
                            link: '/travel',
                            mainTitle: '東部'
                        },
                        {
                            key: 'travel_05',
                            link: '/travel',
                            mainTitle: '外島'
                        },
                    ]
                },
                {   
                    key: 'food',
                    link: '/food',
                    mainTitle: '找美食',
                    subTitle:'DELICACY',
                     nav_List:[
                        {
                            key: 'food_01',
                            link: '/food',
                            mainTitle: '飽餐一頓'
                        },
                        {
                            key: 'food_02',
                            link: '/food',
                            mainTitle: '清涼消暑'
                        },
                        {
                            key: 'food_03',
                            link: '/food',
                            mainTitle: '在地美味'
                        },
                        {
                            key: 'food_04',
                            link: '/food',
                            mainTitle: '特色名產'
                        },
                    ]
                },
                {   
                    key: 'act',
                    link: '/act',
                    mainTitle: '找活動',
                    subTitle:'ACTIVITY',
                    nav_List:[
                        {
                            key: 'act_01',
                            link: '/act',
                            mainTitle: '展覽'
                        },
                        {
                            key: 'act_02',
                            link: '/act',
                            mainTitle: '露營'
                        },
                        {
                            key: 'act_03',
                            link: '/act',
                            mainTitle: '爬山'
                        },
                        {
                            key: 'act_04',
                            link: '/act',
                            mainTitle: '小酌'
                        },
                    ]
                },
                {   
                    key: 'more',
                    link: '/more',
                    mainTitle: '探索更多',
                    subTitle:'MORE',
                    nav_List:[
                        {
                            key: 'more_01',
                            link: '/more',
                            mainTitle: '親子遊'
                        },
                        {
                            key: 'more_02',
                            link: '/more',
                            mainTitle: '溫泉'
                        },
                        {
                            key: 'more_03',
                            link: '/more',
                            mainTitle: '賞花'
                        },
                        {
                            key: 'more_04',
                            link: '/more',
                            mainTitle: '知性'
                        },
                    ]
                },
            ],
        }
    }
}
</script>

<style lang="scss">
    .nav{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 0;
            width: 600px;
            li{
                padding: 0 5px;
                text-align: center;
                cursor: pointer;

                >a{
                    position: relative;
                    display: block;
                    color: $darkGray;
                }

                &:hover , &.active{
                    >a::after{
                        position: absolute;
                        top: -20px;
                        left: 50%;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: $yellow;
                        content: '';
                        transform: translateX(-50%);
                    }

                    .nav_drop{
                        position: absolute;
                        top: 100%;
                        left: 0;
                        z-index: 99;
                        display: flex;
                        justify-content: center;
                        padding: 33px 0 29px;
                        width: 100%;
                        border-radius: 0px 0px 5px 5px;
                        background: rgba(251, 251, 251, 0.9);

                        backdrop-filter: blur(2px);

                        a{
                            padding: 0 36px;
                            border-right:1px solid $gray;
                            color: $darkGray;
                            text-align: center;
                            &:last-child{
                                border-right:none;
                            }
                        }
                        p{
                            margin: 0
                        }
                    }
                }
                
            }

            &_drop{
                display: none;
            }
        }

</style>
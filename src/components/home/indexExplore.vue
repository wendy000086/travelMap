<template>
    <div class="indexExplore">
        <div class="exploreTop">
            <div class="exploreTop_text">
                <h2>Explore</h2>
                <h3>探索台灣每個角落</h3>
                <p>台灣擁有高山峽谷及四面環海地理特性，因此充滿各種自然景致等待人們發現，而各縣市有其特色文化與在地必嚐美食，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文深度旅行，都能在台灣這片土地上踏尋。</p>
            </div>
            <div class="exploreTop_pic">
                <div class="picBox" v-for="topPic in topPic" :key='topPic.key'>
                    <div class="fram">
                        <img :src="require('../../assets/images/home/explore/pic' + topPic.key + '.png')" alt="" />
                    </div>
                    <p>{{topPic.text}}</p>
                </div>
            </div>
        </div>

        <div class="exploreBottom">
            <div class="tab">
                <a v-on:click="activetab=bottomContent.key" v-bind:class="[ activetab === bottomContent.key ? 'active' : '' ]" v-for="bottomContent in bottomContent" :key='bottomContent.key'>{{bottomContent.title}}</a>
            </div>

            <div class="content">
                <div v-for="bottomContent in bottomContent" :key='bottomContent.key'>
                    <div v-if="activetab == bottomContent.key" class="tabcontent" >
                        <div class="picBox" v-for="pic in bottomContent.bottomPic" :key='pic.key'>
                            <div class="fram">
                                <img :src="require('../../assets/images/home/explore/pic' + pic.key + '.png')" alt="" />
                            </div>
                            <p>{{pic.text}}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'indexExplore',
    data: () => {
        return {
            topPic: [
                {
                    key: '1',
                    text: '台東金剛大道'
                },
                {
                    key: '2',
                    text: '南投日月潭文武廟'
                },
                {
                    key: '3',
                    text: '台南花園夜市'
                },
            ],

            bottomContent: [
                {
                    key: '1',
                    title:'都市文情：北台灣',
                    bottomPic: [
                        {
                            key: '4',
                            text: '南投合歡山'
                        },
                        {
                            key: '5',
                            text: '北投圖書館'
                        },
                        {
                            key: '6',
                            text: '樹林三角埔頂山步道'
                        },
                        {
                            key: '7',
                            text: '樹林三角埔頂山步道'
                        },
                    ],
                },
                {
                    key: '2',
                    title:'休閒樂活：中台灣',
                    bottomPic: [
                        {
                            key: '3',
                            text: '南投合歡山'
                        },
                        {
                            key: '1',
                            text: '北投圖書館'
                        },
                        {
                            key: '6',
                            text: '樹林三角埔頂山步道'
                        },
                        {
                            key: '7',
                            text: '樹林三角埔頂山步道'
                        },
                    ],
                },
                {
                    key: '3',
                    title:'人情小吃：南台灣',
                    bottomPic: [
                        {
                            key: '2',
                            text: '南投合歡山'
                        },
                        {
                            key: '3',
                            text: '北投圖書館'
                        },
                        {
                            key: '4',
                            text: '樹林三角埔頂山步道'
                        },
                        {
                            key: '5',
                            text: '樹林三角埔頂山步道'
                        },
                    ],
                },
                {
                    key: '4',
                    title:'自然生態：東台灣',
                    bottomPic: [
                        {
                            key: '1',
                            text: '南投合歡山'
                        },
                        {
                            key: '3',
                            text: '北投圖書館'
                        },
                        {
                            key: '5',
                            text: '樹林三角埔頂山步道'
                        },
                        {
                            key: '7',
                            text: '樹林三角埔頂山步道'
                        },
                    ],
                },
                {
                    key: '5',
                    title:'小島風情：離島地區',
                    bottomPic: [
                        {
                            key: '2',
                            text: '南投合歡山'
                        },
                        {
                            key: '4',
                            text: '北投圖書館'
                        },
                        {
                            key: '6',
                            text: '樹林三角埔頂山步道'
                        },
                        {
                            key: '1',
                            text: '樹林三角埔頂山步道'
                        },
                    ],
                },
            ],

            activetab: "1"

        }
    },

}
</script>

<style lang="scss">
.indexExplore{
        padding: 10% 0 10% 14%;

        .exploreTop{
            display: flex;
            &_text{
                margin-right: 35px;
                width: 580px;
                h2{
                    margin: 0px auto;
                    color: #769763;
                    font-weight: 600;
                    font-size: 48px;
                    line-height: 50px;
                }
                h3{
                    margin: 16px auto;
                    color: #737373;
                    font-weight: 400;
                    font-size: 36px;
                }
                p{
                    color: #737373;
                    letter-spacing: 3px;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 26px;
                }
            }
            &_pic{
                display: flex;

                .picBox{
                    display: flex;

                    .fram{
                        overflow: hidden;
                        width: 200px;
                        height: 300px;

                        img{
                            width: 100%;
                            transition: .3s;
                        }

                        &:hover{
                            img{
                                transform: scale(1.1);
                            }
                        }
                    }
                    p{
                        margin: 0 25px 0 7px;
                        color: #737373;
                        letter-spacing: 0.2em;
                        font-size: 16px;

                        writing-mode: vertical-lr ;
                    }
                }
            }
        }

        .exploreBottom{
            display: flex;
            margin-top: 25px;
            .tab{
                display: flex;
                flex-wrap: wrap;
                margin-right: 52px;
                width: 226px;
                a{
                    position: relative;
                    padding: 16px 8px 16px 31px;
                    box-shadow: 0px 0.5px 0px #EBEBEB;
                    color: #737373;
                    letter-spacing: 0.15em;
                    font-size: 18px;
                    cursor: pointer;

                    &:hover,&.active{
                        color: #769763;
                    }
                    &::before{
                        position: absolute;
                        top: 41%;
                        left: 8px;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: #F1D675;
                        content: '';
                    }
                }
            }

            .tabcontent{
                display: flex;
                .picBox{
                    display: flex;

                    .fram{
                        overflow: hidden;
                        width: 200px;
                        height: 300px;

                        img{
                            width: 100%;
                            transition: .3s;
                        }

                        &:hover{
                            img{
                                transform: scale(1.1);
                            }
                        }
                    }
                    p{
                        margin: 0 25px 0 7px;
                        color: #737373;
                        letter-spacing: 0.2em;
                        font-size: 16px;

                        writing-mode: vertical-lr ;
                    }
                }
            }
        }
    }

</style>
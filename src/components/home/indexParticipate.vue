<template>
    <div class="indexParticipate ">
        <div class="content">
            <div class="picBox" v-for="pic in participate" :key='pic.key'>
                <div v-if="activetab == pic.key">
                    <img :src="require('../../assets/images/home/participate/pic' + pic.key + '.png')" alt="" />      
                </div>
            </div>
        </div>
        <div class="participate">
            <div class="participate_text">
                <h2>Participate</h2>
                <h3>參與四季的更迭</h3>
                <p>根據季節的熱門活動主題，邀請你一同享受旅行中的每一個時刻。</p>
            </div>
            <div class="tab">
                <a v-on:click="activetab=participate.key" v-bind:class="[ activetab === participate.key ? 'active' : '' ]" v-for="participate in participate" :key='participate.key'>{{participate.title}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indexParticipate',
    data: () => {
        return {
            participate: [
                {
                    key: '1',
                    title:'初春花海漫遊',
                },
                {
                    key: '2',
                    title:'豔夏水上活動',
                },
                {
                    key: '3',
                    title:'微秋星空露營',
                },
                {
                    key: '4',
                    title:'寒冬暖心溫泉',
                }
            ],

            activetab: "1"
        }
    }

}
</script>

<style lang="scss">
.indexParticipate{
    display: flex;
    justify-content: center;
    padding: 10% 0;
    background: #FAFAFA;
    
    .participate{
        margin-left: 40px;
        width: 420px;

        &_text{
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

        .tab{
            display: flex;
            flex-wrap: wrap;

            a{
                position: relative;
                padding: 16px 8px 16px 31px;
                width: 100%;
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

                &::after{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 162px;
                    height: 1px;
                    background:rgba(235, 235, 235, 0.5) ;
                    content: '';
                }
            }
        }

    }

}

</style>
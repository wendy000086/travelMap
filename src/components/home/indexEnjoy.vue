<template>
    <div class="indexEnjoy">
        <div class="indexEnjoy_text wrap">
            <div class="indexEnjoy_text_left">
                <h2>Enjoy</h2>
                <h3>享受在地獨特風味</h3>
            </div>
            <div class="indexEnjoy_text_right">
                <p>充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一頓。</p>
                <a href="#">更多台灣美食</a>
            </div>
        </div>
        <div class="picBox">
            <common-swiper :items="imgs" :options="swiperOption" :swiper-stop="true" >
                <template v-slot="imgs" >
                        <img class="swiper-slide"   :src="require('../../assets/images/home/enjoy/pic'+ imgs.key+'.png')" alt="">
                </template>
            </common-swiper>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'indexEnjoy',

    components : {
        'commonSwiper': () => import('./../common/common-swiper'),
    },
    
    data() {
        return {
            imgs :[
                {
                    key: '1',
                },
                {
                    key: '2',
                },
                {
                    key: '3',
                },
                {
                    key: '4',
                },
                {
                    key: '5',
                },
                {
                    key: '6',
                },
                {
                    key: '7',
                }
            ],
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                speed: 2000,
                slidesPerView : 6,
                spaceBetween : 24,  
                
            }
        }
    },


}
</script>

<style lang="scss">
.indexEnjoy{
    padding: 10% 0;
    &_text{
        display: flex;
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

        &_right{
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            justify-content: flex-end;
            margin-left: 80px;

            a{
                box-sizing: border-box;
                padding: 4px 24px;
                border: 0.5px solid #737373;
                border-radius: 50px;
                color: #737373;
                font-size: 16px;
                line-height: 24px;
                transition: .3s;

                &:hover{
                    border: 0.5px solid #769763;
                    color: #769763;
                }
            }
        }
    }

    .picBox{
        margin-top: 55px;
        height: 375px;

        .swiper-container {
            height: 100%;

        }

        .swiper-slide{
            overflow: hidden;
            border-radius: 4px;
            transition: .3s;
            &:hover{
                img{
                    transform: scale(1.1);
                }
            }
        }
    }

}

</style>
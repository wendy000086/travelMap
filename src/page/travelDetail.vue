<template>
    <div class="travelDetail ">
        <div class="travelDetail_info wrap">
            <div class="travelDetail_info_breadcrumb">
                <router-link :to="{name:'home'}">首頁</router-link> /
                <router-link :to="{name:'travel'}">景點</router-link>  /
                <router-link :to="{name:'travelDetail'}">馬沙溝海洋休閒運動渡假中心</router-link>
            </div>
            <div class="travelDetail_info_share">
                <p>分享給你的旅伴</p>
                <img src="./../assets/images/icon-share.svg" alt="">
            </div>
        </div>
        <div class="travelDetail_content wrap">
            <div class="travelDetail_content_txt">
                <div class="tag">
                    <p># 遊憩類</p>
                </div>
                <h5>馬沙溝海洋休閒運動渡假中心</h5>
                <div class="location">
                    <img src="./../assets/images/icon-location.svg" alt="">
                    <p>臺南市將軍區平沙里13鄰平沙140號</p>
                </div>

                <div class="phone">
                    <img src="./../assets/images/icon-phone.svg" alt="">
                    <p>06-7931580</p>
                </div>

                <div class="opentime">
                    <h6>開放時間</h6>
                    <p>全日開放</p>
                </div>

                 <div class="travelInfo">
                    <h6>交通資訊</h6>
                    <p>南下：於花蓮火車站前搭乘花蓮客運，往豐濱、靜浦或台東方向班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。北上：自台東火車站前搭乘台灣好行東部海岸線或鼎東客運海線班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。詳細時刻表及車資請洽花蓮客運(查詢電話：03-8338146~8)或鼎東客運海線(查詢電話：089-328629 / 089-333443) 綠島：島上...</p>
                </div>
            </div>

            <div class="travelDetail_content_pic">
                <img src="https://picsum.photos/600/420" alt="">
            </div>
        </div>
        <div class="travelDetail_description">
            <p class="wrap">新竹都城隍廟位於新竹市北區中山路上，列屬市定古蹟，創建於1748年，由淡水同知曾曰瑛倡議興建，1875年，淡新分治，設台北府，但府治仍在新竹，故城隍爺晉升為府城隍－威靈公，香火鼎盛，有「新竹城隍爺，北港媽祖婆」的稱譽。其廟宇規模在當時是全台灣之最，專門掌管陰間與陽間賞罰善惡的神明為城隍，所以城隍廟的佈置猶如古代的衙門；新竹都城隍廟廟埕的巿集小吃攤，成為新竹特色之一。新竹都城隍廟歷經多次翻修，以三川殿及三疊式屋頂最具特色，懸掛在屋樑上的大鐵算盤，據傳是城隍用來計算人世罪惡的，所以兩旁的對聯寫著『世事何須多計較，神天自有大乘除』；新竹都城隍廟門前的石獅及其他雕飾均有藝術價值，龍柱是北台名師辛阿救的作品，雕工細膩生動，進入大門上方的八卦藻井，為泉州惠安大木匠師王益順之作，十分具有歷史意義的作品。新竹都城隍廟至每年元宵節前後時，與鄰近的北門街、長和宮都有花燈展示，色彩繽紛，民眾可以欣賞到不同風格的花燈作品，為新竹當地頗負盛名的元宵活動；新竹都城隍廟農曆七月的迎城隍活動更是當地的盛事，每年從七月初一開始至八月初一東門市場的「東門普」收尾才算結束；七月十五中元節當日是活動的最高潮，由城隍爺本尊出巡，賑濟孤魂野鬼，由於出巡隊伍長達數公里，整個新竹市為之沸騰；至農曆十一月二十九曰城隍爺生日時，新竹都城隍廟內更是湧入大量信徒，人山人海，熱鬧非凡。</p>
        </div>

    </div>
  
</template>

<script>
export default {
    name: 'travelDetail',

}
</script>

<style lang="scss">
.travelDetail{
    padding: 45px 0;
    &_info{
        display: flex;
        justify-content: space-between;
        &_breadcrumb{
            a{
                color: #737373;
                letter-spacing: 0.05em;
                font-size: 14px;
                line-height: 20px;

                &:hover{
                    color: #769763;
                }
            }
        }
        &_share{
            display: flex;
            cursor: pointer;

            p{
                margin-right: 5px;
                color: #737373;
                letter-spacing: 0.05em;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
            }

            &:hover{
                border-bottom:2px solid #F1D675 ;
            }
        }
    }

    &_content{
        display: flex;
        justify-content: space-between;
        padding: 50px 0;
        &_txt{
            width: 650px;
            .tag{
                color: #769763;
                letter-spacing: 0.05em;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
            }

            h5{
                margin: 8px auto;
                color: #737373;
                letter-spacing: 0.05em;
                font-weight: 700;
                font-size: 28px;
                line-height: 41px;

            }

            .location,.phone{
                display: flex;
                margin: 8px auto;
                
                p{
                    margin-left: 13px;
                    color: #737373;
                    letter-spacing: 0.05em;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 23px;
                }
            }

            .opentime , .travelInfo{
                margin-top: 40px;
                
                h6{
                    margin: 3px auto;
                    color: #737373;
                    letter-spacing: 0.05em;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 26px;
                }

                p{
                    color: #737373;
                    letter-spacing: 0.05em;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 23px;
                }
            }


        }

        &_pic{
            overflow: hidden;
            width: 600px;
            height: 420px;
            border-radius: 5px;

            img{
                width: 100%;
                height: auto;
            }
        }
        
    }

    &_description{
        padding: 45px;
        background: #FAFAFA;
        p{
            color: #737373;
            letter-spacing: 0.05em;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
        }
    }
            
} 

</style>
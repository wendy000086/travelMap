<template>
    <div class="travel wrap">
        <div class="travel_serchInfo">
            <div class="travel_serchInfo_breadcrumb">
                <router-link :to="{name:'home'}">首頁</router-link> /
                <router-link :to="{name:'travel'}">景點</router-link>
            </div>
            <div class="travel_serchInfo_search">
                <img src="../assets/images/icon-serch.svg" alt="">
                <input type="text" name="" id="" placeholder="關鍵字">
                <button class="travel_serchInfo_serchBtn" type="submit">GO</button>
            </div>
            <div class="travel_serchInfo_location">
                <h5>地理區域</h5>
                 <select >
                    <option disabled selected value="请选择">请选择</option>
                    <option v-for="(item,index) in city" :key="index">{{item.location}}</option>
                </select>
            </div>
        </div>
        <div class="travel_contentBox">
            <div class="travel_contentBox_item" v-for="(item,index) in CityList" :key="index" @click="viewDetail(index)">
                <img :src="item.Picture.PictureUrl1" alt="">
                <div class="travel_contentBox_itemInfo">
                    <h5 class="title">{{item.ScenicSpotName}}</h5>
                    <div class="txt">
                        <img src="./../assets/images/icon-location.svg" alt="">
                        <p>{{item.city}}</p>
                        <div class="icon-like"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'
// import travel from '../api/travel'

export default {
    name: 'travel',

     data() {
         return{
             city :[
                {
                    location : '台北市',
                },
                {
                    location : '新台北市',
                },
                {
                    location : '桃園市',
                },
                {
                    location : '新竹市',
                },
                {
                    location : '新竹縣',
                },
                {
                    location : '苗栗縣',
                },
                {
                    location : '彰化縣',
                },
                {
                    location : '苗栗縣',
                },
                {
                    location : '南投縣',
                },
                {
                    location : '雲林縣',
                },
                {
                    location : '嘉義市',
                },
                {
                    location : '嘉義縣',
                },
                {
                    location : '南投縣',
                },
                {
                    location : '台中市',
                },
                {
                    location : '台南市',
                },
                {
                    location : '高雄市',
                },
                {
                    location : '屏東縣',
                },
                {
                    location : '宜蘭縣',
                },
                {
                    location : '花蓮縣',
                },
                {
                    location : '臺東縣',
                },
                {
                    location : '金門縣',
                },
                {
                    location : '澎湖縣',
                },
                {
                    location : '連江縣',
                }
             ]
             ,
             info: null
         }
     },
     computed: {
        ...mapGetters('Travel', ['getScenicSpot']),


        CityList() {
            return this.getScenicSpot
        }


     },
     methods:{
         ...mapActions('Travel', ['fetchGetSpotList']),

        viewDetail(index) {
            this.$router.push({
                name: 'travelDetail',
                params: index,
            })
        },
        
     },
    mounted() {
        this.fetchGetSpotList()

        
        // travel.getCityList().then((data)=>{
        //     console.log(data)
        // })
       
    },

}
</script>

<style lang="scss">
.travel{
    padding: 45px 200px;
    &_serchInfo{
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
        &_search{
            display: flex;
            align-items: center;
            padding: 0px 30px;
            width: 512px;
            height: 58px;
            border: 1px solid #ACACAC;
            border-radius: 5px;
            input{
                padding: 0 20px;
                width: 75%;
            }
            button{
                box-sizing: border-box;
                width: 70px;
                height: 27px;
                border: 0.5px solid #769763;
                border-radius: 50px;
                background: transparent;
                color: #769763;
            }
        }
        &_location{
            display: flex;
            align-items: self-start;

            h5{
                margin: 0 10px 0 0 ;
                color: #737373;
                letter-spacing: 0.05em;
                font-weight: 700;
                font-size: 18px;
                line-height: 38px;
            }
            select{
                box-sizing: border-box;
                padding: 0 10px;
                width: 168px;
                height: 38px;
                border: 0.5px solid #737373;
                border-radius: 50px;
                option,
                option:disabled{
                    color: #737373;
                    letter-spacing: 0.05em;
                    font-size: 16px;
                    line-height: 23px;
                }
            }
        }

    }
    
    &_contentBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 20px auto;

        &_item{
            overflow: hidden;
            box-sizing: border-box;
            margin: 10px 0;
            width: 248px;
            height: 248px;
            border: 0.5px solid #ACACAC;
            border-radius: 5px;
            background: #FFFFFF;

            img{
                width: 100%;
                height: 168px;
            }

        }
        &_itemInfo{
            padding: 11px 16px;

            .txt{
                display: flex;

                img{
                   margin-right: 10px;  width: 13px;
                   height: auto;
                   }
            }

            h5.title{
                overflow : hidden;
                width : 214px;
                color: #737373;
                text-overflow : ellipsis;
                white-space : nowrap;
                font-weight: 500;
                font-size: 16px;
                line-height: 23px;
            }

            p{
                flex: 1;
                color: #737373;
                letter-spacing: 0.05em;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
            }

            .icon-like{
                width: 14.6px;
                background: url('./../assets/images/icon-like.png') no-repeat;
                background-position: 0 3px;
                cursor: pointer;

                &:hover{
                    background-position: -18.4px 3px;
                }
            }
        }
    }
}

</style>
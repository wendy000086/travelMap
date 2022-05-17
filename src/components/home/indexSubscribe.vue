<template>
    <div class="indexSubscribe">
        <img src="../../assets/images/home/subscribe/sub-pic.jpeg" alt="">
        <div class="indexSubscribe_text">
            <h2>Enjoy</h2>
            <h3>享受在地獨特風味</h3>
            <p>如果您願意收到每月的旅遊資訊，一起感受台灣旅行的美好。</p>
            <div class="indexSubscribe_input">
                <input type="text" name="email" placeholder="youremail@example.com" id="email">
                <button class="indexSubscribe_input-submitBtn" type="submit"><img src="../../assets/images/home/subscribe/icon-send.svg" alt=""></button>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'indexSubscribe'

}
</script>

<style lang="scss">
.indexSubscribe{
    display: flex;
    justify-content: space-between;
    padding: 144px 400px;
    background-color: #769763;

    &_text{
         width: 400px;
        h2{
            margin: 0px auto;
            color: #F1D675;
            font-weight: 600;
            font-size: 48px;
            line-height: 50px;
        }
        h3{
            margin: 16px auto;
            color: #ffffff;
            font-weight: 400;
            font-size: 36px;
        }
        p{
            color: rgba(255, 255, 255, 0.5);
            letter-spacing: 3px;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
        }

    }

    &_input{
        display: flex;
        align-items: center;
        justify-content: center;
        padding:24px 25px;
        width: 400px;
        height: 22px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        

        input{
            width: 350px;
            background: transparent;
            &::-webkit-input-placeholder{
                color: rgba(255, 255, 255, 0.5);
            }
        }

        &-submitBtn{
            height: 16px;
            border: none;
            background: transparent;
            cursor: pointer;
        }
        
    }
}

</style>
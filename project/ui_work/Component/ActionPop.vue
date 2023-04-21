<template>
       <div class="action-pop">
            <div class="pop-inner">
                <div class="prdt-info">
                    <img src="../../common/images/tmp/tmp-food-thumb.jpg" alt="" class="pop-thums">
                    <div class="prdt-info-txt">
                        <span class="head-copy ellipsis">맛있는 음식맛있는 음식맛있는 음식맛있는 음식맛있는 음식맛있는 음식맛있는 음식맛있는 음식맛있는 음식맛있는 음식맛있는 음식맛있는 음식</span>
                        <span class="prdt-name ellipsis2">최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄최대두줄</span>
                        <strong class="price"><span class="space-0">4,500</span>원</strong>
                    </div>
                </div>
                <btn-count></btn-count>
                <button type="button" class="btn-type1" @click="removeDim">장바구니 담기</button>
            </div>
            <div class="dim" @click="removeDim"></div>
       </div>
</template>

<script>
    module.exports = {
        components:{
            'btn-count': httpVueLoader('./BtnCount.vue'),
        },
        data() {
            return {
                count:0,
                modalFlag:false,
            }
        },
        methods: {
            removeDim(){
                this.$emit('remove-dim', false);
            }
        }
    }
</script>

<style scpoed>
.action-pop{ position: sticky; bottom: 0; width:100%; height:100%; margin-top: -140px; display: flex; flex-direction: column-reverse; z-index: 100;}
.action-pop .dim{ position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,.5); z-index: -1;}
.action-pop .pop-inner{ padding:30px 24px; min-height: 200px; animation: startActionSheet .3s cubic-bezier(0.4, 0, 0.2, 1); border-top-left-radius: 20px; border-top-right-radius: 20px; background: #fff;}
.action-pop .prdt-info{ display: flex; gap:24px; }
.action-pop .prdt-info-txt{ display: flex; flex-direction: column; width:calc(100% - 120px);}
.action-pop .prdt-info-txt .head-copy{ font-size: 14px; }
.action-pop .prdt-info-txt .prdt-name{ font-size: 16px; color:#000; }
.action-pop .prdt-info-txt .price{ padding-top: 10px; font-size: 18px; color:#000; letter-spacing: 0; }
.action-pop .btn-count{ right:24px; bottom: 88px; border-color:#999; }
.action-pop .pop-thums{ width:100px; border-radius: 4px;}
.action-pop .btn-type1{ margin-top: 34px; width: 100%; height: 40px; background: #0d4c92; color:#fff; font-weight: 700; border-radius: 4px; }
@keyframes startActionSheet {
    0%{transform: translateY(100%);}
    100%{transform: translateY(0);}
}
</style>

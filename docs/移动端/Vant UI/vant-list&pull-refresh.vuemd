<template>
  <div class="function-histories-container">
    <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
      <ks-list v-model="loading" :error.sync="error" :error-text="errorText" :finished="finished" :finished-text="historyList.length>0?'没有更多数据了':''" @load="onLoad">
        <div v-for="(item, index) in historyList" :key="index" class="user-info">
          <div class="label-wrap">
            <div>手机号</div>
            <div>授权时间</div>
          </div>
          <div class="value-wrap">
            <div>{{item.phone || '-'}}</div>
            <div>{{item.authModifiedTime || '-'}}</div>
          </div> 
        </div>
      </ks-list>
    </van-pull-refresh>
    <none-data v-show="!error&&!this.isRefreshLoading&&!loading&& historyList.length<1" />
  </div>
</template>

<script>
import { queryFunctionAuthHistoriesApi } from '@api/index'
import NoneData from '../components/NoneData'
export default {
    components: {
        NoneData,
    },
    data() {
        return {
            isRefreshLoading: false,
            loading: false,
            finished: false,
            error: false,
            errorText: '请求失败，点击重新加载',
            currentPage: 0,
            historyList: [],
        }
    },
    methods: {
        async onLoad() {
            console.log('onload')
            this.loading = !this.isRefreshLoading
            this.error =false
            if (this.currentPage === 0) {
                this.historyList = []
            }
            this.currentPage += 1
            try {
                let res = await queryFunctionAuthHistoriesApi(this.currentPage)
                this.loading = false
                if (this.isRefreshLoading) {
                    this.isRefreshLoading = false
                    vant.Toast('刷新成功')
                }
                if (res.list.length > 0) {
                    this.historyList.push(...res.list)
                }
                this.finished = this.currentPage >= res.pages
            } catch (ex) {
                this.isRefreshLoading = false
                this.loading = false
                this.error = true
                console.log('queryCustomerPermissionApi :>> ', ex)
            }
        },
        onRefresh() {
            console.log('onfresh')
            this.isRefreshLoading = true
            this.currentPage = 0
            this.onLoad()
        },
    },
}
</script>

<style lang="scss">
  .function-histories-container {
    box-sizing: border-box;
    height: 100%;
    .van-pull-refresh {
      height: 100%;
    }
    .van-pull-refresh__track {
      box-sizing: border-box;
      height: 100%;
    }
    .van-list {
      box-sizing: border-box;
      height: 100%;
      overflow-y: scroll;
    }

    .user-info {
      @include item-style;
      margin: 8px 10px;
      .triangle-wrap {
        display: flex;
        align-items: center;
        .triangle {
          @include triangle(10px, #c5c5c5);
          align-self: center;
        }
      }
    }
  }
</style>

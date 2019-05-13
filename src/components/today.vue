<template>
        <div class="set-main">
            <div class="zhishu">
                <p>综合指数:
                    <star :fanum="mydata.all"></star>
                </p>
                <p>健康指数:
                    <star :fanum="mydata.health"></star>
                </p>
                <p>爱情指数:
                    <star :fanum="mydata.love"></star>
                </p>
                <p>财运指数:
                    <star :fanum="mydata.money"></star>
                </p>
                <p>工作指数:
                    <star :fanum="mydata.work"></star>
                </p>
                <p>速配星座:<span>{{mydata.color}}</span></p>
                <p>幸运颜色:<span>{{mydata.QFriend}}</span></p>
                <p>幸运数字:<span>{{mydata.number}}</span></p>
            </div>
            <div class="article">
                <h1><img src="../assets/images/yuns.png"><span>今日概述</span></h1>
                <p>{{mydata.summary}}</p>
            </div>
            <div class="article">
                <h1><img src="../assets/images/work.png"><span>工作</span></h1>
                <p>内心有焦躁，但身体拒绝劳求舒适，容易有胃部不适。</p>
            </div>
            <div class="article">
                <h1><img src="../assets/images/huang.png"><span>每日推荐</span></h1>
                <p><img src="../assets/images/guangg.png"></p>
            </div>
        </div>
</template>

<script>
  import star from '@/components/star.vue'

  export default {
    name: 'today',
    props: ['name'],
    data () {
      return {}
    },
    components: {
      star
    },
    computed: {
      mydata () {
        return this.$store.state.today
      }
    },
    created () {
      this.$store.dispatch('getdata', { fun: 'settoday', name: this.name, time: 'today' })
    }
  }
</script>

<style lang="less" scoped>
    .set-main {
        text-align: left;

        .zhishu {
            display: flex;
            margin: 0 .47rem;
            padding-bottom: .47rem;
            justify-content: space-between;
            flex-wrap: wrap;
            border-bottom: .01rem #e5e5e5 solid;

            p {
                width: 50%;
                font-size: .26rem;
                color: #4e4e4e;
                margin-top: .4rem;
                display: flex;

                span {
                    font-size: .22rem;
                    color: #8f8d8e;
                    margin-left: .1rem;
                }
            }
        }

        .article {
            /*width: 43.0625rem;*/
            padding-left: .42rem;
            padding-top: .82rem;
            padding-right: .42rem;

            h1 {
                font-size: .28rem;
                color: #5c5c5c;

                img {
                    vertical-align: middle;
                    width: .5rem;
                }

                span {
                    margin-left: .13rem
                }
            }

            p {
                margin-top: .16rem;
                font-size: .24rem;
                color: #828281;

                img {
                    width: 100%;
                }
            }
        }
    }
</style>

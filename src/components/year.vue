<template>
    <div class="set-main" v-if="mydata">
        <div class="article" v-if="mydata.health">
            <h1><img src="../assets/images/psd.png"><span>年度密码</span></h1>
            <p>4{{mydata.mima.info}};{{mydata.mima.text[0]}}</p>
        </div>
        <div class="article" v-if="mydata.job">
            <h1><img src="../assets/images/work.png"><span>事业运</span></h1>
            <p>{{mydata.career[0]}}</p>
        </div>
        <div class="article">
            <h1><img src="../assets/images/aiqing.png"><span>爱情运</span></h1>
            <p>{{mydata.love[0]}}</p>
        </div>
        <div class="article">
            <h1><img src="../assets/images/cIfu.png"><span>财运</span></h1>
            <p>{{mydata.finance[0]}}</p>
        </div>
        <div class="article">
            <h1><img src="../assets/images/huang.png"><span>每日推荐</span></h1>
            <p><img src="../assets/images/guangg.png"></p>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'week',
    props: ['name'],
    data () {
      return {}
    },
    components: {},
    computed: {
      mydata () {
        console.log(this.$store.state.year)
        return this.$store.state.year
      }
    },
    created () {
      this.$store.dispatch('getdata', { fun: 'setyear', name: this.name, time: 'year' })
      // console.log(this.$store.state.name)
    }
  }
</script>

<style lang="less" scoped>
    .set-main {
        padding-top: .2rem;
        text-align: left;

        .zhishu {
            display: flex;
            padding: .47rem 0;
            margin: 0 .47rem;
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

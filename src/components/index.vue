<template>
    <div>
        <div id="main">
            <header>
                <h1>
                    <router-link to="/iconList"><img alt="切换" src="../assets/images/tuchen.png"></router-link>
                    星座伴侣
                </h1>
                <div id="content">
                    <img :src=src alt="logo">
                    <h2>{{name}}({{ename}})</h2>
                    <p>{{time}}</p>
                </div>
            </header>
            <section>
                <swiper :options="swiperOption" class="swiper" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide>
                        <today :name=name></today>
                    </swiper-slide>
                    <swiper-slide>
                        <trom :name=name></trom>
                    </swiper-slide>
                    <swiper-slide>
                        <week :mydata="mydataweek" class="box"></week>
                    </swiper-slide>
                    <swiper-slide>
                        <week :mydata="mydataNexWeek" class="box"></week>
                    </swiper-slide>
                    <swiper-slide>
                        <week :mydata="mydatamonth" class="box"></week>
                    </swiper-slide>
                    <swiper-slide>
                        <year :name="name" class="box"></year>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </section>
            <footer>
                <div>
                    <img alt="indexlogo" src="../assets/images/index.png">
                    <p>首页</p>
                </div>
                <div>
                    <img alt="touiao" src="../assets/images/fire.png"/>
                    <p>头条</p>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
  import today from '@/components/today.vue'
  import trom from '@/components/trom.vue'
  import week from '@/components/week.vue'
  import year from '@/components/year.vue'

  export default {
    name: 'index',
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className, text) {
              switch (index) {
                case 0:
                  text = '今日'
                  break
                case 1:
                  text = '明日'
                  break
                case 2:
                  text = '本周'
                  break
                case 3:
                  text = '下周'
                  break
                case 4:
                  text = '本月'
                  break
                case 5:
                  text = '本年'
                  break
              }
              return '<span class="' + className + '">' + text + '</span>'
            }
          }
        },
        name: '',
        ename: '',
        time: '',
        src: '',
        week: 'week',
        month: 'month',
        arr: []
      }
    },
    computed: {
      myJson () {
        return this.$store.state.myJson
      },
      swiper () {
        return this.$refs.mySwiper.swiper
      },
      mydataweek () {
        // console.log(this.$store.state.week)
        return this.$store.state.week
      },
      mydataNexWeek () {
        // console.log(this.$store.state.nextWeek)
        return this.$store.state.nextWeek
      },
      mydatamonth () {
        console.log(this.$store.state.month)
        return this.$store.state.month
      }
    },
    created () {
      this.name = this.$route.params.toName
      this.ename = this.$route.params.toEname
      this.time = this.$route.params.toTime
      this.src = this.$route.params.toSrc
      // this.src =
      if (!this.$route.params.toTime) {
        // this.name = '白羊座'
        this.ename = 'Aries'
        this.time = '3.21-4.19'
      }
      this.name = this.$route.params.toName ? this.$route.params.toName : window.localStorage.name ? window.localStorage.name : '白羊座'
      window.localStorage.setItem('name', this.name)
      this.src = this.$route.params.toName ? this.$route.params.toSrc : window.localStorage.src ? window.localStorage.src : '/xz/1.png'
      window.localStorage.setItem('src', this.src)
      this.$store.dispatch('getdata', { fun: 'setweek', name: this.name, time: 'week' })
      this.$store.dispatch('getdata', { fun: 'setNexWeek', name: this.name, time: 'nextweek' })
      this.$store.dispatch('getdata', { fun: 'setmonth', name: this.name, time: 'month' })
    },
    mounted () {
      this.swiper.slideTo(0, 1000, false)
    },
    components: {
      today,
      trom,
      week,
      year
    }
  }
</script>

<style lang="less" scoped>

    #main {
        text-align: center;

        header {
            background-image: url(../assets/images/today.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;

            h1 {
                padding-top: 1.04rem;
                font-size: .5rem;
                color: #fff;

                img {
                    position: absolute;
                    left: .43rem;
                    width: .5rem;
                }
            }

            #content {
                margin-top: .5rem;

                img {
                    width: 1.5rem;
                    margin-top: .5rem;
                }

                h2 {
                    margin-top: .26rem;
                    font-size: .35rem;
                    color: #313030;
                }

                p {
                    margin-top: .11rem;
                    font-size: .22rem;
                    color: #6a6a6a;
                }
            }
        }

        section {
            margin-top: .2rem;

            ul {
                display: flex;
                justify-content: space-around;

                font-size: .22rem;
                color: #c6c5c3;

                li {
                    position: relative;
                    /*line-height: 3rem;*/
                }
            }
        }

        footer {
            display: flex;
            justify-content: space-around;
            position: fixed;
            bottom: 0;
            width: 100%;
            background: #fff;
            padding: 0;
            font-size: .35rem;
            padding-top: .1rem;
            padding-bottom: .77rem;
            z-index: 1;

            img {
                width: .5rem;
            }
        }
    }
</style>
<style>
    .swiper-wrapper {
        padding-top: .5rem !important;
    }

    .swiper-pagination {
        top: 0;
        bottom: unset !important;
        display: flex;
        justify-content: space-around;
    }

    .swiper-pagination-bullet {
        width: auto !important;
        font-size: .3rem;
        height: .5rem !important;
        line-height: .5rem;
        border-radius: 0 !important;
        background-color: transparent !important;
        margin: 0 !important;

    }

    .swiper-pagination-bullet-active {
        position: relative;
        background: transparent !important;
        color: #b73ed6;
    }

    .swiper-pagination-bullet-active::after {
        position: absolute;
        content: '';
        background: #b73ed6;
        display: inline-block;
        width: 100%;
        height: .03rem;
        top: 100%;
        left: 0;
    }
</style>

<template>
    <div class="iconList">
        <div id="bg"></div>
        <header>
            <span>选择星座</span>
        </header>
        <div class="icon">
            <div :key="item.id" @click="toIndex(item.Name,item.EnglishName,item.Time,item.Img)" v-for="item in myJson">
                <img :src=item.Img>
                <p class="p1">{{item.Name}}</p>
                <p class="p2">{{item.EnglishName}}</p>
                <p class="p3">{{item.Time}}</p>
            </div>
        </div>
        <footer>
            <router-link to="/index"><img src="../assets/images/XX_03.png"></router-link>
        </footer>
    </div>
</template>

<script>
  export default {
    name: 'iconList',
    methods: {
      toIndex (name, ename, time, img) {
        this.$router.push({
          name: 'index',
          params: {
            toName: name,
            toEname: ename,
            toTime: time,
            toSrc: img
          }
        })
      }
    },
    computed: {
      myJson () {
        return this.$store.state.myJson
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .bg-img {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        background: url("../assets/images/bg.png") no-repeat;
        background-size: 100% 100%;
        z-index: -100;
    }

    #bg {
        .bg-img;
    }

    .iconList {
        width: 100%;
        color: #fefefe;
        text-align: center;

        header {
            height: .8rem;
            line-height: .8rem;

            span {
                font-size: .34rem;
            }
        }

        .icon {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            /*margin-top: 1.06rem;*/
            padding: 0 .74rem;
            width: 6.02rem;

            div {
                font-size: .22rem;
                margin-top: .4rem;
                width: 2rem;

                img {
                    width: 1.2rem;
                    height: 1.2rem;
                }

                a {
                    color: #fefefe;
                }

                .p1 {
                    font-size: .26rem;
                    padding-top: .17rem;
                }

                .p2 {
                    padding-top: .1rem;
                }

                .p3 {
                    padding-top: .1rem;
                }
            }
        }

        footer {
            margin: .5rem auto 0;

            img {
                width: .5rem;
            }
        }
    }
</style>

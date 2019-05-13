<template>
    <div>
        <ul>
            <li :class="x" :key="x.id" v-for="x in starNum"></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'start',
    props: ['fanum'],
    data () {
      return {
        num: 5
      }
    },
    computed: {
      starNum () {
        let arr = []
        let i = parseInt(this.fanum) / 10 / 2
        let on = Math.floor(i)
        let half = (i - on) * 10
        while (arr.length < on) {
          arr.push('on')
        }
        if (half > 4) {
          arr.push('half')
        }
        while (arr.length < this.num) {
          arr.push('off')
        }
        return arr
      }
    }
  }
</script>

<style lang="less" scoped>
    ul {
        display: flex;

        li {
            width: .3rem;
            height: .3rem;
            background-image: url("../assets/images/off.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }

    .off {
        background-image: url("../assets/images/off.png");
    }

    .on {
        background-image: url("../assets/images/on.png");
    }

    .half {
        background-image: url("../assets/images/half.png");
    }

</style>

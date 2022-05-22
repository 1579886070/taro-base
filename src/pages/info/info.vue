<template>
  <view :class="['flex-col', styles['page']]">
    <view :class="['flex-col', styles['section_1']]">
      <image src="../../assets/16532004499499396936.png" :class="[styles['image']]" @tap="onClickImage" />
      <view :class="['justify-end', styles['group']]">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004434235040860.png"
          :class="[styles['image_1']]" />
        <text :class="[styles['text']]">10</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004439295739642.png"
          :class="[styles['image_1']]" />
        <text :class="[styles['text_1']]">122</text>
      </view>
    </view>
    <view :class="['flex-col', styles['group_1']]">
      <view :class="['flex-col', 'items-start']">
        <text :class="[styles['text_2']]">Syed Ali Hussain</text>
        <text :class="[styles['text_3']]">2022-05-21</text>
      </view>
      <text :class="[styles['text_4']]">
        秋夜，天高露浓，一弯月牙在西南天边静静地挂着。清冷的月光洒下大地，是那么幽黯，银河的繁星却越发灿烂起来。
      </text>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro';
import styles from './info.module.scss';

export default {
  components: {},
  created() {
    // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
    // 而不是频繁地调用此 API
    this.$instance = Taro.getCurrentInstance()
  },
    mounted () {
    // 获取路由参数
    console.log(this.$instance.router.params) // 输出 { id: 2, type: 'test' }
  },
  data() {
    return {
      styles,
    };
  },
  methods: {
    onClickImage() {
      Taro.navigateBack();
    },
  },
};
</script>
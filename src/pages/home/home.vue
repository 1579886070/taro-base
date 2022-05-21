<template>
 <view :class="['flex-col', styles['page']]">
  <view :class="['flex-col', styles['section_1']]">
    <view :class="['justify-between', styles['search']]">
      <input :class="[styles['text']]" type="text" placeholder="Search for Content" />
      <image @click="search"
        src="../../assets/home/home_search.png"
        :class="[styles['image']]"
      />
    </view>
    <text :class="[styles['text_1']]">Saved media</text>
  </view>
  <view :class="[styles['grid']]">
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048308435161722.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://chongpar-xiaota.oss-cn-hangzhou.aliyuncs.com/resources/image/20210607/20210607142208-608961b1451e4d11b75801808e4bdf5c.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048308433955201.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://chongpar-xiaota.oss-cn-hangzhou.aliyuncs.com/resources/other/20210608/20210608174829-da4d1ca2e7aa42089abc575f16a51806.jpg"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://chongpar-xiaota.oss-cn-hangzhou.aliyuncs.com/resources/image/20210609/20210609104507-50a1c59e890945b19ada4c652e5c817e.jpeg"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://chongpar-xiaota.oss-cn-hangzhou.aliyuncs.com/resources/image/20210611/20210611104523-5d6d0907242243b9b4e0128149ce5bd5.jpeg"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://chongpar-xiaota.oss-cn-hangzhou.aliyuncs.com/resources/image/20210615/20210615175037-727bfaf56eba40e99e84fea7c68cea47.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048308442497828.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048308440125322.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048311752720161.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048312674730687.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048312792650393.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048313303935173.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048314186247857.png"
      :class="[styles['grid-item']]"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16531048314610917514.png"
      :class="[styles['grid-item']]"
    />
  </view>
</view>
</template>

<script>
  import Taro from '@tarojs/taro';
  import styles from './home.module.scss';

  export default {
    data() {
      return {
        urlList: [],
        start: 1,
      };
    },
    components: {},
    data() {
      return {
        styles,
      };
    },

    created() {
      console.log("created");
      // this.httpTest();
    },

    methods: {
      search() {
        alert('点击搜索');
    },
    },
  };
</script>
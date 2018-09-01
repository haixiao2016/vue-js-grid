<template>
  <div class="temp-container">
    <div class="img_list">
      <grid :gridWidth="240" :draggable="true" :sortable="true" :items="carouselImgList" :cellWidth="100" :cellHeight="100" @dragend="changeImg_list">
        <template slot="cell" slot-scope="props">
          <div class="img-copper">
            <img :src="props.item.url" alt="" ondragstart="return false;">
          </div>
        </template>
      </grid>
    </div>
    <button type="success" @click="addImg">新增图片</button>
    <button type="success" @click="deleteImg">删除图片</button>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      carouselImgList: [
        {
          name: 'food.jpeg',
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535790551625&di=793984ddaebb16915ea7bb69121f43c9&imgtype=0&src=http%3A%2F%2Fimage.yourdream.cc%2Fgroup2%2FM00%2F07%2FD6%2FCgAANVVM6WEEAAAAAAAAANWeDYs891.jpg'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535790551624&di=c3514dc72836ced103f2648d00493418&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Ficon%2F20150819%2F1439942974202305.jpeg'
        },
        {
          name: 'food3.jpeg',
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535790551624&di=277176fd62ff1704a713703e63084042&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2014%2F1009%2F20141009101133905.jpg'
        }
      ]
    }
  },
  methods: {
    changeImg_list(row) {
      const sortImg = []
      row.items.map((items, index) => {
        sortImg.push({
          ...items.item,
          sort: index
        })
      })
      setTimeout(_ => {
        this.carouselImgList = sortImg
      }, 300)
    },
    deleteImg() {
      this.carouselImgList.pop()
    },
    addImg() {
      this.carouselImgList.push({
        name: 'name11',
        url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535790551623&di=0f67a3d44bac3e3bf7d92498924c5d09&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2014%2F1002%2F20141002092318777.jpg'
      })
      this.$forceUpdate()
    }
  }
}
</script>
<style lang='scss'>
.img-copper {
  position: relative;
  display: inline-block;
  img {
    width: 100%;
    height: 92px;
    cursor: auto;
    background: #eee;
  }
  .img-close {
    cursor: pointer;
    color: red;
    position: absolute;
    right: 4px;
    top: 4px;
  }
}
.img_list {
  .v-grid-item-wrapper {
    padding: 4px;
  }
}
</style>
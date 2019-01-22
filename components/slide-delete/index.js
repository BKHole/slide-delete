// pages/components/slide-delete/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pid: {
      type: Number,
      value: -1,
      observer(newVal) {
        if (newVal) {
          this.setData({
            xmove: 0
          })
        }
      }
    },
    currentId: {
      type: Number,
      value: -1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    xmove: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 显示删除按钮
     */
    showDeleteButton(e) {
      this.setData({
        xmove: -65
      })
    },

    /**
     * 隐藏删除按钮
     */
    hideDeleteButton(e) {
      this.setData({
        xmove: 0
      })
    },

    /**
     * 处理movable-view移动事件
     */
    handleMovableChange(e) {
      if (e.detail.source === 'friction') {
        if (e.detail.x < -30) {
          this.showDeleteButton(e)
        } else {
          this.hideDeleteButton(e)
        }
      } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
        this.hideDeleteButton(e)
      }
    },

    /**
     * 处理touchstart事件
     */
    handleTouchStart(e) {
      this.startX = e.touches[0].pageX
    },

    /**
     * 处理touchend事件
     */
    handleTouchEnd(e) {
      if (e.changedTouches[0].pageX < this.startX && e.changedTouches[0].pageX - this.startX <= -30) {
        this.showDeleteButton(e)
      } else if (e.changedTouches[0].pageX > this.startX && e.changedTouches[0].pageX - this.startX < 30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    },
    /**
     * 组件操作事件（此示例只有删除事件，可根据需要增加其他事件）
     */
    handleAction(e) {
      this.triggerEvent('action', {
        id: this.data.pid
      })
    }
  }
})
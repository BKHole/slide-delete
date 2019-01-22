//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        id: 1,
        name: 'item-one',
        code: 100001,
        amount: 1
      },
      {
        id: 2,
        name: 'item-two',
        code: 100002,
        amount: 5
      },
      {
        id: 3,
        name: 'item-three',
        code: 300001,
        amount: 10
      },
      {
        id: 4,
        name: 'item-four',
        code: 400001,
        amount: 101
      },
      {
        id: 5,
        name: 'item-five',
        code: 500002,
        amount: 500
      },
      {
        id: 6,
        name: 'item-six',
        code: 600001,
        amount: 110
      }
    ]
  },
  /**
   * slide-delete
   */
  handleSlideDelete({
    detail: {
      id
    }
  }) {
    let list = this.data.list
    this.setData({
      list: list.filter(item => item.id !== id)
    })
  }
})
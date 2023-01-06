// index.js
Page({
    data: {
        loading: false,
        value: 1,
        array: ["项目一","项目二","项目三","项目四","项目五","项目六","项目七"],
        resList:[]
    },

    jumpPage: function(){
        this.setData({
            loading: true,
            value:this.data.value+1
        })
        
    },


    onLoad(){
        var that = this;
        wx.request({
          url: 'http://localhost:8088/doublecolor/getpage',
          method: "POST",
          data:{},
          header: { 'content-type': 'application/json' },
          success: function(res) {
              console.log(res.data.bo);
              that.setData({
                resList: res.data.bo
              })
          }
        })
    }
})

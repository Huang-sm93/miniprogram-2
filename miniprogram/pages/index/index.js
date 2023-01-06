// index.js
Page({
    data: {
        loading: false,
        array: ["项目一","项目二","项目三","项目四","项目五","项目六","项目七"]
    },

    jumpPage: function(){
        wx.navigateTo({
          url: '/pages/search/search',
        }),
        this.setData({
            loading: true
        })
        
    },


    onLoad(){
    
    }
})

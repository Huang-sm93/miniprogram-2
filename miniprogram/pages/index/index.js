// index.js
Page({
    data: {
        loading: false,
        value: 1,
        array: ["项目一","项目二","项目三","项目四","项目五","项目六","项目七"],
        resList:[
            {values:[3,5,23,26,27,32,12], date:"2022-12-12"},
            {values:[13,15,21,22,27,32,3], date:"2022-12-15"}
        ]
    },

    jumpPage: function(){
        // wx.navigateTo({
        //   url: '/pages/search/search',
        // }),
        this.setData({
            loading: true,
            value:this.data.value+1
        })
        
    },


    onLoad(){
    
    }
})

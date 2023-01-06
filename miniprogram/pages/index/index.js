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
        // wx.request({
        //     url: 'http://127.0.0.1:8090/schedule-schedulecoreapi-host/bjjson/ScheduleListSearch',
        //     method: 'POST',
        //     header:{'content-type':'application/json', 'SOA20-Client-AppId':'100015067'},
        //     data:{
        //       "head": {
        //           "clientId": "12001011310295413369",
        //           "uid": "R988952907",
        //           "auth": "8D3207232EAC9E3AB3B3C95005B22D8F33B518005A834884054CE3B3ABD20F2C",
        //           "clientVersion": 855.0,
        //           "platform": "32",
        //           "source": "ScheduleGateway",
        //           "remoteIPAddress": "r100015067-21053637-vpdkh/10.8.133.185",
        //           "logId": "huangshiming_test_1221"
        //       },
        //       "clientTimeZone": "GMT+08:00",
        //       "locatedCityId": 2,
        //       "selectors": [
        //           "RefreshFlag",
        //           "Group.Content",
        //           "Feature",
        //           "PreRecommend",
        //           "ConflictReminderList"
        //       ],
        //       "extra": {
        //           "createRouteInfo": "true",
        //           "CardOperationA": "false"
        //       }
        //     },
        //     success: function(res){
        //         console.log(res)
        //     }
        //   })
    }
})

// "http://119.29.138.104";外网

// 接口地址

// window.INTERFACE_URL_9097 = "http://192.168.100.110:9097/yunzhubao-bat"  // 本地环境
// window.INTERFACE_URL_9083 = "http://192.168.100.110:8082/yunzhubao" // 本地环境

window.INTERFACE_URL_9097 = ""//upload.yunzhubao.com:9093/yunzhubao-bat  // 正式环境
window.INTERFACE_URL_9083 = "" // 正式环境

var Z_S_B = ''

// var WEBSOCKET_URL = "wss://www.jzmsoft.com:8082/yunzhubao/websocket"
// var WEBSOCKET_URL = "ws://192.168.100.110:8082/yunzhubao/websocket"
// var INTERFACE_URL = "https://www.jzmsoft.com:8082/yunzhubao"
// var INTERFACE_URL_9083 = "https://www.jzmsoft.com:8082/yunzhubao"
// var INTERFACE_URL = "http://192.168.100.110:8082/yunzhubao"

// var INTERFACE_URL = "http://192.168.100.107:8080/yunzhubao"
// var INTERFACE_URL_9083 = "http://192.168.100.107:8080/yunzhubao" // 内网

// appid,需要开发者自己修改（托管模式）
/*----------------新-------------------*/
//存放c2c或者群信息（c2c用户：c2c用户id，昵称，头像；群：群id，群名称，群头像）
var sdkAppID = 1400013491;
var accountType = 6386;
var isAccessFormalEnv = true; // 是否访问正式环境
var isLogOn = false; // 是否开启sdk在控制台打印日志
var infoMap = {}; // 初始化时，可以先拉取我的好友和我的群组信息
var AdminAcount = 'qwe101';
// var selType = webim.SESSION_TYPE.C2C; // 当前聊天类型
var selToID = null; // 当前选中聊天id（当聊天类型为私聊时，该值为好友帐号，否则为群号）
var selSess = null; // 当前聊天会话对象
var recentSessMap = {}; // 保存最近会话列表
var reqRecentSessCount = 50; // 每次请求的最近会话条数，业务可以自定义
// 初始化时，其他对象，选填
var options = {
        'isAccessFormalEnv': isAccessFormalEnv, //是否访问正式环境，默认访问正式，选填
        'isLogOn': isLogOn //是否开启控制台打印日志,默认开启，选填
    }
    // 监听事件
var listeners = {
    "onConnNotify": onConnNotify //监听连接状态回调变化事件,必填
        ,
    "jsonpCallback": jsonpCallback //IE9(含)以下浏览器用到的jsonp回调函数，
        ,
    // "onMsgNotify": onMsgNotify //监听新消息(私聊，普通群(非直播聊天室)消息，全员推送消息)事件，必填
    //     ,
    // "onBigGroupMsgNotify": onBigGroupMsgNotify //监听新消息(直播聊天室)事件，直播场景下必填
    //     ,
    // "onGroupSystemNotifys": onGroupSystemNotifys //监听（多终端同步）群系统消息事件，如果不需要监听，可不填
    //     ,
    // "onGroupInfoChangeNotify": onGroupInfoChangeNotify //监听群资料变化事件，选填
    //     ,
    // "onFriendSystemNotifys": onFriendSystemNotifys //监听好友系统通知事件，选填
    //     ,
    // "onProfileSystemNotifys": onProfileSystemNotifys //监听资料系统（自己或好友）通知事件，选填
    //     ,
    // "onKickedEventCall": onKickedEventCall //被其他登录实例踢下线
    //     ,
    // "onC2cEventNotifys": onC2cEventNotifys //监听C2C系统消息通道
    //     ,
    // "onAppliedDownloadUrl": onAppliedDownloadUrl //申请文件/音频下载地址的回调
};
// 当前用户身份
var loginInfo = {
    'sdkAppID': sdkAppID, // 用户所属应用id,必填
    'accountType': accountType, // 用户所属应用帐号类型，必填
    'identifier': sessionStorage.getItem('id'), // 当前用户ID,必须是否字符串类型，必填
    'identifierNick': '', // 当前用户昵称，选填
    'userSig': sessionStorage.getItem('sig'), // 当前用户身份凭证，必须是字符串类型，必填
    'headurl': './img/staffDefaultImg.png' // 当前用户默认头像，选填
};
//默认好友头像
var friendHeadUrl = ''; //仅demo使用，用于没有设置过头像的好友
//默认群头像
var groupHeadUrl = ''; //仅demo使用，用于没有设置过群头像的情况
//监听连接状态回调变化事件
var totalCount = 200; //每次接口请求的条数，bootstrap table 分页时用到
var onConnNotify = function(resp) {
    var info;
    switch (resp.ErrorCode) {
        case webim.CONNECTION_STATUS.ON:
            webim.Log.warn('建立连接成功: ' + resp.ErrorInfo);
            break;
        case webim.CONNECTION_STATUS.OFF:
            info = '连接已断开，无法收到新消息，请检查下你的网络是否正常: ' + resp.ErrorInfo;
            // alert(info);
            webim.Log.warn(info);
            break;
        case webim.CONNECTION_STATUS.RECONNECT:
            info = '连接状态恢复正常: ' + resp.ErrorInfo;
            // alert(info);
            webim.Log.warn(info);
            break;
        default:
            webim.Log.error('未知连接状态: =' + resp.ErrorInfo);
            break;
    }
};
// 旧 防止报错，先留着
// var sdkAppID = 1400013491;
// var accountType = 6386;
// var selType = webim.SESSION_TYPE.C2C; //当前聊天类型
// var selToID = null; //当前选中聊天id（当聊天类型为私聊时，该值为好友帐号，否则为群号）
// var selSess = null; //当前聊天会话对象
// var friendHeadUrl = ''
// var totalCount = 200; //每次接口请求的条数
// 聊天记录
var reqMsgCount = 15;
var getPrePageC2CHistroyMsgInfoMap = {}; // 保留下一次拉取好友历史消息的信息
// 当前用户身份
// var loginInfo = {
//     'sdkAppID': sdkAppID, // 用户所属应用id,必填
//     'accountType': accountType, // 用户所属应用帐号类型，必填
//     'identifier': sessionStorage.getItem('id'), // 当前用户ID,必须是否字符串类型，必填
//     'identifierNick': '', // 当前用户昵称，选填
//     'userSig': sessionStorage.getItem('sig'), // 当前用户身份凭证，必须是字符串类型，必填
//     'headurl': '' // 当前用户默认头像，选填
// };

// 监听连接状态回调变化事件
// var onConnNotify = function(resp) {
//     switch (resp.ErrorCode) {
//         case webim.CONNECTION_STATUS.ON:
//             // webim.Log.warn('连接状态正常...');
//             break;
//         case webim.CONNECTION_STATUS.OFF:
//             webim.Log.warn('连接已断开，无法收到新消息，请检查下你的网络是否正常');
//             break;
//         default:
//             webim.Log.error('未知连接状态,status=' + resp.ErrorCode);
//             break;
//     }
// };
//IE9(含)以下浏览器用到的jsonp回调函数
function jsonpCallback(rspData) {
    webim.setJsonpLastRspData(rspData);
}

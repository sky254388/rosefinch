"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// @grant require

/*
中青看点 自动阅读

需要zqkdCookie，自己捉包填写，多账号@隔开，格式：
uid=12345678&zqkey=xxxxxx&zqkey_id=yyyyyyy@uid=87654321&zqkey=zzzzzzzz&zqkey_id=aaaaaa

cron: 4-59/15 11-18 * * *
const $ = new Env('中青看点-自动阅读');
*/
var jsname = "中青看点文章视频"; // 设置脚本名称

var $ = Env(jsname); // 创建名为 $ 的变量，并初始化为 Env(jsname)

var notifyFlag = 1; // 0为关闭通知，1为打开通知，默认为1

var logDebug = 0; // 设置调试日志标志，默认为关闭调试日志

var notifyStr = ""; // 初始化通知字符串

var rndtime = ""; // 毫秒

var httpResult; // 全局缓冲区

var CryptoJS = require("crypto-js"); // 导入 crypto-js 模块


var userCookieArr = []; // 初始化用户 Cookie 数组

var bodyArr = []; // 初始化请求体数组

var userIdx = 0; // 初始化用户索引

var artCatid = 0; // 初始化文章类别 ID

var videoCatid = 1453; // 初始化视频类别 ID

var readLength = 0; // 初始化阅读长度

var maxReadLength = 16; // 设置最大阅读长度

var rewardCount = []; // 初始化奖励计数数组

var userArtList = []; // 初始化用户文章列表数组

var artPreBody = "p=swNMsLAQgw3E%3D"; // 文章请求体前缀

var timePreBody = "p=swNMsLAQgw3E%3D"; // 时间请求体前缀

var key = "6HPjSZFH"; // 密钥

var fixStr = "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc"; // 修复字符串
/////////////////////////////////////////////////////////////////////
// 立即执行函数

!function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof $request !== "undefined")) {
            _context.next = 4;
            break;
          }

          // 如果存在 $request 对象，说明是脚本重写请求，给出相应提示
          $.msg(jsname + ": 此脚本不做重写，请检查重写设置");
          _context.next = 18;
          break;

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(checkEnv());

        case 6:
          if (_context.sent) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return");

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(initAccountInfo());

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(userDouble());

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(userGetList());

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(userReads());

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(getStat());

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}()["catch"](function (e) {
  return $.logErr(e);
})["finally"](function () {
  return $.done();
}); // 通知函数

function showmsg() {
  return regeneratorRuntime.async(function showmsg$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          notifyBody = jsname + "运行通知\n\n" + notifyStr;

          if (notifyFlag != 1) {
            console.log(notifyBody);
          }

          if (notifyFlag == 1) {
            $.msg(notifyBody); // if ($.isNode()){await notify.sendNotify($.name, notifyBody );}
          }

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
} // 检查环境函数


function checkEnv() {
  var userCookie, splitor, userCookies, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, cks;

  return regeneratorRuntime.async(function checkEnv$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          userCookie = ($.isNode() ? process.env.zqkdCookie : $.getdata("zqkdCookie")) || "";
          splitor = userCookie.includes("@") ? "@" : "\n";
          userCookies = userCookie.split(splitor);
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context3.prev = 6;

          for (_iterator = userCookies[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            cks = _step.value;
            if (cks) userCookieArr.push(cks);
          }

          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](6);
          _didIteratorError = true;
          _iteratorError = _context3.t0;

        case 14:
          _context3.prev = 14;
          _context3.prev = 15;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 17:
          _context3.prev = 17;

          if (!_didIteratorError) {
            _context3.next = 20;
            break;
          }

          throw _iteratorError;

        case 20:
          return _context3.finish(17);

        case 21:
          return _context3.finish(14);

        case 22:
          if (!(userCookieArr.length == 0)) {
            _context3.next = 25;
            break;
          }

          console.log("未找到有效的userCookie");
          return _context3.abrupt("return", false);

        case 25:
          console.log("\u5171\u627E\u5230".concat(userCookieArr.length, "\u4E2A\u7528\u6237"));
          return _context3.abrupt("return", true);

        case 27:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[6, 10, 14, 22], [15,, 17, 21]]);
} // 替换 Cookie 函数


function replaceCookie(userCookieItem) {
  var replaceItem = "";
  var zqkey = "";
  var zqkey_id = "";

  if (userCookieItem.indexOf("zqkey=") > -1) {
    zqkey = userCookieItem.match(/zqkey=([\w-]+)/)[1];
  } else if (userCookieItem.indexOf("cookie=") > -1) {
    zqkey = userCookieItem.match(/cookie=([\w-]+)/)[1];
  }

  if (userCookieItem.indexOf("zqkey_id=") > -1) {
    zqkey_id = userCookieItem.match(/zqkey_id=([\w-]+)/)[1];
  } else if (userCookieItem.indexOf("cookie_id=") > -1) {
    zqkey_id = userCookieItem.match(/cookie_id=([\w-]+)/)[1];
  }

  if (userCookieItem.indexOf("uid=") > -1) {
    uid = userCookieItem.match(/uid=([\w-]+)/)[1];
  }

  replaceItem = "uid=".concat(uid, "&zqkey=").concat(zqkey, "&zqkey_id=").concat(zqkey_id);
  return replaceItem;
} // 初始化账户信息函数


function initAccountInfo() {
  return regeneratorRuntime.async(function initAccountInfo$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          for (userIdx = 0; userIdx < userCookieArr.length; userIdx++) {
            rewardCount.push(0);
            userArtList.push([]);
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
} ///////////////////////////////////////////////////////////////////

/*
async function decodeUserBody() {
    for(let i=0; i<bodyArr.length; i++) {
        deUrlBody = decodeURIComponent(bodyArr[i])
        idx1 = deUrlBody.indexOf('=')
        idx2 = deUrlBody.indexOf('=',idx1+1)
        idx3 = deUrlBody.lastIndexOf('=')
        preBody = deUrlBody.substring(0,idx2+1)
        pureBody = deUrlBody.substring(idx2+1,idx3+1)
        subBody = deUrlBody.substring(idx3+1)
        replaceBody1 = pureBody.replace(/-/g,'+')
        replaceBody2 = replaceBody1.replace(/_/g,'/')
        decodeStr = DecFunc(replaceBody2)
        decodedUserArr.push(decodeStr)
        preBodyArr.push(preBody)
        subBodyArr.push(subBody)
    }
}*/


function encodeMD5Str(encStr) {
  replacedStr = decodeURIComponent(encStr);
  replacedStr = replacedStr.replace(/\&/g, "");
  replacedStr = replacedStr.replace(/\+/g, " ");
  replacedStr += fixStr;
  md5Str = CryptoJS.MD5(replacedStr).toString();
  return md5Str;
}

function encodeUserBody(prebody, inputStr) {
  encodeBody = EncFunc(inputStr);
  hexBody = CryptoJS.enc.Hex.parse(encodeBody);
  base64Body = CryptoJS.enc.Base64.stringify(hexBody);
  replaceBody3 = base64Body.replace(/\+/g, "-");
  replaceBody4 = replaceBody3.replace(/\//g, "_");
  finalBody = encodeURIComponent(replaceBody4);
  finalBody = prebody + finalBody + "==";
  return finalBody;
}

function getStat() {
  return regeneratorRuntime.async(function getStat$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log("\n============================");

          for (userIdx = 0; userIdx < userCookieArr.length; userIdx++) {
            console.log("\u8D26\u53F7".concat(userIdx + 1, "\u672C\u8F6E\u5171\u83B7\u5F97\u4E86").concat(rewardCount[userIdx], "\u91D1\u5E01"));
          }

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
} //并发阅读


function userGetList() {
  return regeneratorRuntime.async(function userGetList$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log("\n\u8BFB\u53D6\u63A8\u8350\u6587\u7AE0\u89C6\u9891\u5217\u8868...");
          userIdx = 0;

        case 2:
          if (!(userIdx < userCookieArr.length)) {
            _context6.next = 9;
            break;
          }

          ListArts(artCatid, videoCatid, userIdx);
          _context6.next = 6;
          return regeneratorRuntime.awrap($.wait(60));

        case 6:
          userIdx++;
          _context6.next = 2;
          break;

        case 9:
          userIdx = 0;

        case 10:
          if (!(userIdx < userCookieArr.length)) {
            _context6.next = 17;
            break;
          }

          ListArts(videoCatid, artCatid, userIdx);
          _context6.next = 14;
          return regeneratorRuntime.awrap($.wait(60));

        case 14:
          userIdx++;
          _context6.next = 10;
          break;

        case 17:
          _context6.next = 19;
          return regeneratorRuntime.awrap($.wait(3000));

        case 19:
        case "end":
          return _context6.stop();
      }
    }
  });
} //文章列表


function ListArts(catid, vcatid, idx) {
  var caller, rndtime1, rndtime2, op, paraList, md5Para, sign, url, urlObject, result, typeStr, _i, artItem, ctype;

  return regeneratorRuntime.async(function ListArts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          caller = printCaller();
          rndtime1 = Math.floor(new Date().getTime());
          rndtime2 = Math.floor(new Date().getTime() / 1000);
          op = Math.floor(Math.random() * 4);
          paraList = userCookieArr[idx].split("&");
          md5Para = "access=WIFI&app_name=zqkd_app&app_version=3.9.8&behot_time=0&carrier=CHINA%20MOBILE&catid=".concat(catid, "&channel=c1031&device_brand=Android&device_id=56971302&device_model=MI%209&device_platform=android&device_type=android&dpi=240&inner_version=202108181534&language=zh-CN&memory=3&mi=0&mobile_type=1&net_type=1&network_type=WIFI&oid=0&op=").concat(op, "&openudid=a6066063b6fbed67&os_api=22&os_version=MI%209-user%205.1.1%20NMF26X%20500211025%20release-keys&phone_sim=1&request_time=").concat(rndtime2, "&resolution=720x1280&rom_version=MI%209-user%205.1.1%20NMF26X%20500211025%20release-keys&s_ad=7wNMsLAQgw3E%3DsFCZYRlUUiSfaqjzozPOmj1DJGsQ0-KRmn&s_im=9FbVGOYyXwIo%3DZjZvSuQeb_qdBallAGaXUg%3D%3D8&sm_device_id=20211112123533c490f279d26a934ca445950324c9601a01419a1241729573&storage=61.39&").concat(paraList[0], "&version_code=63&video_catid=").concat(vcatid, "&").concat(paraList[1], "&").concat(paraList[2]);
          sign = encodeMD5Str(md5Para, paraList);
          url = "https://kandian.wkandian.com/v3/article/lists.json?catid=".concat(catid, "&op=").concat(op, "&behot_time=0&oid=0&video_catid=").concat(vcatid, "&access=WIFI&app_name=zqkd_app&app_version=3.9.8&carrier=CHINA%20MOBILE&channel=c1031&device_brand=Android&device_id=56971302&device_model=MI%209&device_platform=android&device_type=android&dpi=240&inner_version=202108181534&language=zh-CN&memory=3&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=a6066063b6fbed67&os_api=22&os_version=MI%209-user%205.1.1%20NMF26X%20500211025%20release-keys&phone_sim=1&request_time=").concat(rndtime2, "&resolution=720x1280&rom_version=MI%209-user%205.1.1%20NMF26X%20500211025%20release-keys&s_ad=7wNMsLAQgw3E%3DsFCZYRlUUiSfaqjzozPOmj1DJGsQ0-KRmn&s_im=9FbVGOYyXwIo%3DZjZvSuQeb_qdBallAGaXUg%3D%3D8&sm_device_id=20211112123533c490f279d26a934ca445950324c9601a01419a1241729573&storage=61.39&").concat(paraList[0], "&version_code=63&").concat(paraList[1], "&").concat(paraList[2], "&sign=").concat(sign);
          urlObject = populateGetUrl(url);
          _context7.next = 11;
          return regeneratorRuntime.awrap(httpGet(urlObject, caller));

        case 11:
          result = httpResult;

          if (result) {
            _context7.next = 14;
            break;
          }

          return _context7.abrupt("return");

        case 14:
          typeStr = "";
          if (catid == 0) typeStr = "文章";else if (catid == 1453) typeStr = "视频";

          if (result.success == true) {
            for (_i = 0; _i < result.items.length - 3; _i++) {
              artItem = result.items[_i];
              ctype = artItem.ctype ? artItem.ctype : "";

              if (ctype == 0 || ctype == 3) {
                userArtList[idx].push(artItem);
              }
            }

            console.log("\u8D26\u53F7".concat(idx + 1, "\u83B7\u53D6").concat(typeStr, "\u5217\u8868\u6210\u529F[catid=").concat(catid, "]"));
          } else {
            console.log("\u8D26\u53F7".concat(idx + 1, "\u83B7\u53D6").concat(typeStr, "\u5217\u8868\u5931\u8D25\uFF1A").concat(result.message));
          }

        case 17:
        case "end":
          return _context7.stop();
      }
    }
  });
} //并发阅读


function userReads() {
  var _i2, waitTime, stayTime;

  return regeneratorRuntime.async(function userReads$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          for (userIdx = 0; userIdx < userCookieArr.length; userIdx++) {
            readLength = getMax(readLength, userArtList[userIdx].length);
          }

          readLength = getMin(readLength, maxReadLength);
          console.log("\n\u672C\u6B21\u8FD0\u884C\u5C06\u4F1A\u9605\u8BFB\u6700\u591A".concat(readLength, "\u7BC7\u6587\u7AE0\u89C6\u9891"));
          _i2 = 0;

        case 4:
          if (!(_i2 < readLength)) {
            _context8.next = 54;
            break;
          }

          console.log("\n======== \u5F00\u59CB\u7B2C".concat(_i2 + 1, "\u8F6E\u9605\u8BFB ========"));
          userIdx = 0;

        case 7:
          if (!(userIdx < userCookieArr.length)) {
            _context8.next = 15;
            break;
          }

          if (!(_i2 < userArtList[userIdx].length)) {
            _context8.next = 12;
            break;
          }

          GetArtsInfo(userArtList[userIdx][_i2], userIdx);
          _context8.next = 12;
          return regeneratorRuntime.awrap($.wait(60));

        case 12:
          userIdx++;
          _context8.next = 7;
          break;

        case 15:
          _context8.next = 17;
          return regeneratorRuntime.awrap($.wait(1000));

        case 17:
          if (!(_i2 == 0)) {
            _context8.next = 27;
            break;
          }

          userIdx = 0;

        case 19:
          if (!(userIdx < userCookieArr.length)) {
            _context8.next = 27;
            break;
          }

          if (!(_i2 < userArtList[userIdx].length)) {
            _context8.next = 24;
            break;
          }

          CompleteArt(userArtList[userIdx][_i2].id, 1, userIdx);
          _context8.next = 24;
          return regeneratorRuntime.awrap($.wait(60));

        case 24:
          userIdx++;
          _context8.next = 19;
          break;

        case 27:
          waitTime = 31000 + Math.floor(Math.random() * 4000);
          console.log("\u968F\u673A\u7B49\u5F85".concat(waitTime / 1000, "\u79D2..."));
          _context8.next = 31;
          return regeneratorRuntime.awrap($.wait(waitTime));

        case 31:
          userIdx = 0;

        case 32:
          if (!(userIdx < userCookieArr.length)) {
            _context8.next = 40;
            break;
          }

          if (!(_i2 < userArtList[userIdx].length)) {
            _context8.next = 37;
            break;
          }

          CompleteArt(userArtList[userIdx][_i2].id, 0, userIdx);
          _context8.next = 37;
          return regeneratorRuntime.awrap($.wait(60));

        case 37:
          userIdx++;
          _context8.next = 32;
          break;

        case 40:
          if (!(_i2 % 3 == 2)) {
            _context8.next = 51;
            break;
          }

          userIdx = 0;

        case 42:
          if (!(userIdx < userCookieArr.length)) {
            _context8.next = 51;
            break;
          }

          stayTime = 80 + Math.floor(Math.random() * 10);

          if (!(_i2 < userArtList[userIdx].length)) {
            _context8.next = 48;
            break;
          }

          UpdateStayTime(stayTime, userIdx);
          _context8.next = 48;
          return regeneratorRuntime.awrap($.wait(60));

        case 48:
          userIdx++;
          _context8.next = 42;
          break;

        case 51:
          _i2++;
          _context8.next = 4;
          break;

        case 54:
        case "end":
          return _context8.stop();
      }
    }
  });
} //阅读文章，观看视频


function GetArtsInfo(artItem, idx) {
  var caller, rndtime, paraList, md5Para, sign, desEnc, desStr, urlPattern, readType, url, urlObject, result;
  return regeneratorRuntime.async(function GetArtsInfo$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          caller = printCaller();
          rndtime = Math.floor(new Date().getTime() / 1000);
          paraList = userCookieArr[idx].split("&");
          md5Para = "app_name=zqkd_app&app_version=3.9.8&carrier=CHINA+MOBILE&catid=".concat(artItem.catid, "&channel=c1031&device_brand=Android&device_id=56971302&device_model=MI+9&device_platform=android&device_type=android&dpi=240&id=").concat(artItem.id, "&inner_version=202108181534&is_push=0&language=zh-CN&memory=3&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=a6066063b6fbed67&os_api=22&os_version=MI+9-user+5.1.1+NMF26X+500211025+release-keys&request_time=").concat(rndtime, "&resolution=720x1280&rom_version=MI+9-user+5.1.1+NMF26X+500211025+release-keys&s_ad=E2JgR8oZr6IU%3DPE0cx099D1kf6lH6CywmGZt1WpGEHC6k&s_im=XYdVi_XPUOzA%3D7RAdU6ohamNZSaVJf3_tqA%3D%3DZB&sm_device_id=20211112123533c490f279d26a934ca445950324c9601a01419a1241729573&storage=61.39&").concat(paraList[0], "&version_code=63&").concat(paraList[1], "&").concat(paraList[2]);
          sign = encodeMD5Str(md5Para);
          desEnc = md5Para + "&sign=" + sign;
          desStr = encodeUserBody(artPreBody, desEnc);
          urlPattern = "";
          readType = "";

          if (artItem.ctype == 0) {
            urlPattern = "info";
            readType = "阅读文章";
          } else if (artItem.ctype == 3) {
            urlPattern = "detail";
            readType = "观看视频";
          }

          url = "https://kandian.wkandian.com/v5/article/".concat(urlPattern, ".json?") + desStr;
          urlObject = populateGetUrl(url);
          _context9.next = 14;
          return regeneratorRuntime.awrap(httpGet(urlObject, caller));

        case 14:
          result = httpResult;

          if (result) {
            _context9.next = 17;
            break;
          }

          return _context9.abrupt("return");

        case 17:
          if (result.success == true) {
            console.log("\u8D26\u53F7".concat(idx + 1, "\u5F00\u59CB").concat(readType, "\uFF1A").concat(artItem.title));
          } else {
            console.log("\u8D26\u53F7".concat(idx + 1).concat(readType, "\u5931\u8D25\uFF1A").concat(result.message));
          }

        case 18:
        case "end":
          return _context9.stop();
      }
    }
  });
} //阅读完成奖励


function CompleteArt(id, type, idx) {
  var caller, str, rndtime, paraList, md5Para, sign, desEnc, desStr, url, urlObject, result;
  return regeneratorRuntime.async(function CompleteArt$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          caller = printCaller();
          str = type == 0 ? "阅读" : "推送";
          rndtime = Math.floor(new Date().getTime() / 1000);
          paraList = userCookieArr[idx].split("&");
          md5Para = "app_name=zqkd_app&app_version=3.9.8&carrier=CHINA+MOBILE&channel=c1031&device_brand=Android&device_id=56971302&device_model=MI+9&device_platform=android&device_type=android&dpi=240&id=".concat(id, "&inner_version=202108181534&language=zh-CN&memory=3&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=a6066063b6fbed67&os_api=22&os_version=MI+9-user+5.1.1+NMF26X+500211025+release-keys&read_type=").concat(type, "&request_time=").concat(rndtime, "&resolution=720x1280&rom_version=MI+9-user+5.1.1+NMF26X+500211025+release-keys&s_ad=8YFg4QJ5A6eY%3DV7HSxw3xQPoqyBklmolHheSGzQ_tFjm0&s_im=NYdVi_XPUOzA%3D7RAdU6ohamNZSaVJf3_tqA%3D%3DlK&sm_device_id=20211112123533c490f279d26a934ca445950324c9601a01419a1241729573&storage=61.39&").concat(paraList[0], "&version_code=63&").concat(paraList[1], "&").concat(paraList[2]);
          sign = encodeMD5Str(md5Para);
          desEnc = md5Para + "&sign=" + sign;
          desStr = encodeUserBody(artPreBody, desEnc);
          url = "https://kandian.wkandian.com/v5/article/complete.json";
          urlObject = populatePostUrl(url, desStr);
          _context10.next = 12;
          return regeneratorRuntime.awrap(httpPost(urlObject, caller));

        case 12:
          result = httpResult;

          if (result) {
            _context10.next = 15;
            break;
          }

          return _context10.abrupt("return");

        case 15:
          if (result.success == true) {
            if (result.items && result.items.read_score) {
              rewardCount[idx] += parseInt(result.items.read_score);
              console.log("\u8D26\u53F7".concat(idx + 1, "\u9886\u53D6").concat(str, "\u5956\u52B1\uFF1A\u83B7\u5F97").concat(result.items.read_score, "\u91D1\u5E01"));
            } else {
              if (result.items && result.items.max_notice) {
                console.log("\u8D26\u53F7".concat(idx + 1, "\u6CA1\u6709\u9886\u53D6\u5230").concat(str, "\u5956\u52B1\uFF1A").concat(result.items.max_notice));
              } else {
                console.log("\u8D26\u53F7".concat(idx + 1, "\u6CA1\u6709\u9886\u53D6\u5230").concat(str, "\u5956\u52B1"));
              }
            }
          } else {
            console.log("\u8D26\u53F7".concat(idx + 1, "\u9886\u53D6").concat(str, "\u5956\u52B1\u5931\u8D25\uFF1A").concat(result.message));
          }

        case 16:
        case "end":
          return _context10.stop();
      }
    }
  });
} //更新时长


function UpdateStayTime(tsceond, idx) {
  var caller, rndtime, paraList, md5Para, sign, desEnc, desStr, url, urlObject, result;
  return regeneratorRuntime.async(function UpdateStayTime$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          caller = printCaller();
          rndtime = Math.floor(new Date().getTime() / 1000);
          paraList = userCookieArr[idx].split("&");
          md5Para = "app_name=zqkd_app&app_version=3.9.8&carrier=CHINA+MOBILE&channel=c1031&device_brand=Android&device_id=56971302&device_model=MI+9&device_platform=android&device_type=android&dpi=240&inner_version=202108181534&language=zh-CN&memory=3&mi=0&mobile_type=1&net_type=1&network_type=WIFI&oaid=9bdf7bff-f3fe-2b18-5fff-3b3f3fd6873d&openudid=a6066063b6fbed67&os_api=22&os_version=MI+9-user+5.1.1+NMF26X+500211025+release-keys&request_time=1637953113&resolution=720x1280&rom_version=MI+9-user+5.1.1+NMF26X+500211025+release-keys&s_ad=c2JgR8oZr6IU%3DPE0cx099D1kf6lH6CywmGZt1WpGEHC6k&second=".concat(tsceond, "&sm_device_id=20211112123533c490f279d26a934ca445950324c9601a01419a1241729573&storage=61.39&").concat(paraList[0], "&version_code=63&").concat(paraList[1], "&").concat(paraList[2]);
          sign = encodeMD5Str(md5Para);
          desEnc = md5Para + "&sign=" + sign;
          desStr = encodeUserBody(timePreBody, desEnc);
          url = "https://kandian.wkandian.com/v5/user/stay.json";
          urlObject = populatePostUrl(url, desStr);
          _context11.next = 11;
          return regeneratorRuntime.awrap(httpPost(urlObject, caller));

        case 11:
          result = httpResult;

          if (result) {
            _context11.next = 14;
            break;
          }

          return _context11.abrupt("return");

        case 14:
          if (result.success == true) {
            console.log("\u8D26\u53F7".concat(idx + 1, "\u66F4\u65B0\u65F6\u957F").concat(tsceond, "\u79D2\u6210\u529F\uFF0C\u4ECA\u65E5\u9605\u8BFB\u65F6\u957F\uFF1A").concat(result.time, "\u79D2"));
          } else {
            console.log("\u8D26\u53F7".concat(idx + 1, "\u66F4\u65B0\u65F6\u957F\u5931\u8D25\uFF1A").concat(result.message));
          }

        case 15:
        case "end":
          return _context11.stop();
      }
    }
  });
} //用户阅读翻倍


function userDouble() {
  return regeneratorRuntime.async(function userDouble$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          console.log("\n\u67E5\u8BE2\u8D26\u6237\u9605\u8BFB\u7FFB\u500D\u72B6\u6001\u4E2D...");
          userIdx = 0;

        case 2:
          if (!(userIdx < userCookieArr.length)) {
            _context12.next = 9;
            break;
          }

          GetTaskList(userIdx);
          _context12.next = 6;
          return regeneratorRuntime.awrap($.wait(100));

        case 6:
          userIdx++;
          _context12.next = 2;
          break;

        case 9:
        case "end":
          return _context12.stop();
      }
    }
  });
} //翻倍状态


function GetTaskList(idx) {
  var caller, url, urlObject, result;
  return regeneratorRuntime.async(function GetTaskList$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          caller = printCaller();
          url = "https://kandian.wkandian.com/v17/NewTask/getTaskList.json?app_version=3.9.8&" + userCookieArr[idx];
          urlObject = populateGetUrl(url);
          _context13.next = 5;
          return regeneratorRuntime.awrap(httpGet(urlObject, caller));

        case 5:
          result = httpResult;

          if (result) {
            _context13.next = 8;
            break;
          }

          return _context13.abrupt("return");

        case 8:
          if (!(result.success == true)) {
            _context13.next = 14;
            break;
          }

          if (!(result.items && result.items.task_promotion && result.items.task_promotion.is_double == 0)) {
            _context13.next = 12;
            break;
          }

          _context13.next = 12;
          return regeneratorRuntime.awrap(GetReadDouble(idx));

        case 12:
          _context13.next = 15;
          break;

        case 14:
          console.log("\u8D26\u53F7".concat(idx + 1, "\u67E5\u8BE2\u9605\u8BFB\u7FFB\u500D\u72B6\u6001\u5931\u8D25\uFF1A").concat(result.message));

        case 15:
        case "end":
          return _context13.stop();
      }
    }
  });
} //阅读翻倍


function GetReadDouble(idx) {
  var caller, url, urlObject, result;
  return regeneratorRuntime.async(function GetReadDouble$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          caller = printCaller();
          url = "https://kandian.wkandian.com/v17/NewTask/setJoinTaskPromotion.json?" + userCookieArr[idx];
          urlObject = populateGetUrl(url);
          _context14.next = 5;
          return regeneratorRuntime.awrap(httpGet(urlObject, caller));

        case 5:
          result = httpResult;

          if (result) {
            _context14.next = 8;
            break;
          }

          return _context14.abrupt("return");

        case 8:
          if (result.success == true) {
            console.log("\u8D26\u53F7".concat(idx + 1, "\u672C\u5468\u9605\u8BFB\u7FFB\u500D\u6210\u529F"));
          } else {
            console.log("\u8D26\u53F7".concat(idx + 1, "\u9605\u8BFB\u7FFB\u500D\u5931\u8D25\uFF1A").concat(result.message));
          }

        case 9:
        case "end":
          return _context14.stop();
      }
    }
  });
} ////////////////////////////////////////////////////////////////////


function populatePostUrl(url, reqBody) {
  var rndtime = Math.floor(new Date().getTime() / 1000);
  var urlObject = {
    url: url,
    headers: {
      request_time: rndtime,
      Host: "kandian.wkandian.com",
      "device-model": "VOG-AL10",
      "device-platform": "android",
      Connection: "keep-alive"
    },
    body: reqBody
  };
  return urlObject;
}

function populateGetUrl(url) {
  var rndtime = Math.floor(new Date().getTime() / 1000);
  var urlObject = {
    url: url,
    headers: {
      request_time: rndtime,
      Host: "kandian.wkandian.com",
      "device-model": "VOG-AL10",
      "device-platform": "android",
      Connection: "keep-alive"
    }
  };
  return urlObject;
}

function httpPost(url, caller) {
  return regeneratorRuntime.async(function httpPost$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          httpResult = null;
          return _context16.abrupt("return", new Promise(function (resolve) {
            $.post(url, function _callee2(err, resp, data) {
              return regeneratorRuntime.async(function _callee2$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      try {
                        if (err) {
                          console.log(caller + ": post请求失败");
                          console.log(JSON.stringify(err));
                          $.logErr(err);
                        } else {
                          if (safeGet(data)) {
                            httpResult = JSON.parse(data);
                            if (logDebug) console.log(httpResult);
                          }
                        }
                      } catch (e) {
                        $.logErr(e, resp);
                      } finally {
                        resolve();
                      }

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              });
            });
          }));

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  });
}

function httpGet(url, caller) {
  return regeneratorRuntime.async(function httpGet$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          httpResult = null;
          return _context18.abrupt("return", new Promise(function (resolve) {
            $.get(url, function _callee3(err, resp, data) {
              return regeneratorRuntime.async(function _callee3$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      try {
                        if (err) {
                          console.log(caller + ": get请求失败");
                          console.log(JSON.stringify(err));
                          $.logErr(err);
                        } else {
                          if (safeGet(data, caller)) {
                            httpResult = JSON.parse(data);
                            if (logDebug) console.log(httpResult);
                          }
                        }
                      } catch (e) {
                        $.logErr(e, resp);
                      } finally {
                        resolve();
                      }

                    case 1:
                    case "end":
                      return _context17.stop();
                  }
                }
              });
            });
          }));

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  });
}

function safeGet(data, caller) {
  try {
    if (_typeof(JSON.parse(data)) == "object") {
      return true;
    } else {
      console.log("Function ".concat(caller, ": \u672A\u77E5\u5931\u8D25"));
      console.log(data);
    }
  } catch (e) {
    console.log(e);
    console.log("Function ".concat(caller, ": \u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5"));
    return false;
  }
}

function getMin(a, b) {
  return a < b ? a : b;
}

function getMax(a, b) {
  return a < b ? b : a;
}

function printCaller() {
  return new Error().stack.split("\n")[2].trim().split(" ")[1];
}

function EncFunc(message) {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var ivHex = CryptoJS.enc.Utf8.parse(key);
  var word = CryptoJS.enc.Utf8.parse(message);
  encrypted = CryptoJS.DES.encrypt(word, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

function DecFunc(message) {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var ivHex = CryptoJS.enc.Utf8.parse(key); // direct decrypt ciphertext

  var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(message)
  }, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

function randomString() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
  var chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  var maxLen = chars.length;
  var str = "";

  for (i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxLen));
  }

  return str;
}

function Env(t, e) {
  var s =
  /*#__PURE__*/
  function () {
    function s(t) {
      _classCallCheck(this, s);

      this.env = t;
    }

    _createClass(s, [{
      key: "send",
      value: function send(t) {
        var _this = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
        t = "string" == typeof t ? {
          url: t
        } : t;
        var s = this.get;
        return "POST" === e && (s = this.post), new Promise(function (e, i) {
          s.call(_this, t, function (t, s, r) {
            t ? i(t) : e(s);
          });
        });
      }
    }, {
      key: "get",
      value: function get(t) {
        return this.send.call(this.env, t);
      }
    }, {
      key: "post",
      value: function post(t) {
        return this.send.call(this.env, t, "POST");
      }
    }]);

    return s;
  }();

  return new (
  /*#__PURE__*/
  function () {
    function _class(t, e) {
      _classCallCheck(this, _class);

      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", "\uD83D\uDD14".concat(this.name, ", \u5F00\u59CB!"));
    }

    _createClass(_class, [{
      key: "isNode",
      value: function isNode() {
        return "undefined" != typeof module && !!module.exports;
      }
    }, {
      key: "isQuanX",
      value: function isQuanX() {
        return "undefined" != typeof $task;
      }
    }, {
      key: "isSurge",
      value: function isSurge() {
        return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
      }
    }, {
      key: "isLoon",
      value: function isLoon() {
        return "undefined" != typeof $loon;
      }
    }, {
      key: "toObj",
      value: function toObj(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        try {
          return JSON.parse(t);
        } catch (_unused) {
          return e;
        }
      }
    }, {
      key: "toStr",
      value: function toStr(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        try {
          return JSON.stringify(t);
        } catch (_unused2) {
          return e;
        }
      }
    }, {
      key: "getjson",
      value: function getjson(t, e) {
        var s = e;
        var i = this.getdata(t);
        if (i) try {
          s = JSON.parse(this.getdata(t));
        } catch (_unused3) {}
        return s;
      }
    }, {
      key: "setjson",
      value: function setjson(t, e) {
        try {
          return this.setdata(JSON.stringify(t), e);
        } catch (_unused4) {
          return !1;
        }
      }
    }, {
      key: "getScript",
      value: function getScript(t) {
        var _this2 = this;

        return new Promise(function (e) {
          _this2.get({
            url: t
          }, function (t, s, i) {
            return e(i);
          });
        });
      }
    }, {
      key: "runScript",
      value: function runScript(t, e) {
        var _this3 = this;

        return new Promise(function (s) {
          var i = _this3.getdata("@chavy_boxjs_userCfgs.httpapi");

          i = i ? i.replace(/\n/g, "").trim() : i;

          var r = _this3.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");

          r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;

          var _i$split = i.split("@"),
              _i$split2 = _slicedToArray(_i$split, 2),
              o = _i$split2[0],
              h = _i$split2[1],
              a = {
            url: "http://".concat(h, "/v1/scripting/evaluate"),
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };

          _this3.post(a, function (t, e, i) {
            return s(i);
          });
        })["catch"](function (t) {
          return _this3.logErr(t);
        });
      }
    }, {
      key: "loaddata",
      value: function loaddata() {
        if (!this.isNode()) return {};
        {
          this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");

          var _t = this.path.resolve(this.dataFile),
              _e2 = this.path.resolve(process.cwd(), this.dataFile),
              _s2 = this.fs.existsSync(_t),
              _i3 = !_s2 && this.fs.existsSync(_e2);

          if (!_s2 && !_i3) return {};
          {
            var _i4 = _s2 ? _t : _e2;

            try {
              return JSON.parse(this.fs.readFileSync(_i4));
            } catch (t) {
              return {};
            }
          }
        }
      }
    }, {
      key: "writedata",
      value: function writedata() {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");

          var _t2 = this.path.resolve(this.dataFile),
              _e3 = this.path.resolve(process.cwd(), this.dataFile),
              _s3 = this.fs.existsSync(_t2),
              _i5 = !_s3 && this.fs.existsSync(_e3),
              r = JSON.stringify(this.data);

          _s3 ? this.fs.writeFileSync(_t2, r) : _i5 ? this.fs.writeFileSync(_e3, r) : this.fs.writeFileSync(_t2, r);
        }
      }
    }, {
      key: "lodash_get",
      value: function lodash_get(t, e, s) {
        var i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
        var r = t;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = i[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _t3 = _step2.value;
            if (r = Object(r)[_t3], void 0 === r) return s;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return r;
      }
    }, {
      key: "lodash_set",
      value: function lodash_set(t, e, s) {
        return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce(function (t, s, i) {
          return Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {};
        }, t)[e[e.length - 1]] = s, t);
      }
    }, {
      key: "getdata",
      value: function getdata(t) {
        var e = this.getval(t);

        if (/^@/.test(t)) {
          var _$exec = /^@(.*?)\.(.*?)$/.exec(t),
              _$exec2 = _slicedToArray(_$exec, 3),
              _s4 = _$exec2[1],
              _i6 = _$exec2[2],
              r = _s4 ? this.getval(_s4) : "";

          if (r) try {
            var _t4 = JSON.parse(r);

            e = _t4 ? this.lodash_get(_t4, _i6, "") : e;
          } catch (t) {
            e = "";
          }
        }

        return e;
      }
    }, {
      key: "setdata",
      value: function setdata(t, e) {
        var s = !1;

        if (/^@/.test(e)) {
          var _$exec3 = /^@(.*?)\.(.*?)$/.exec(e),
              _$exec4 = _slicedToArray(_$exec3, 3),
              _i7 = _$exec4[1],
              r = _$exec4[2],
              o = this.getval(_i7),
              h = _i7 ? "null" === o ? null : o || "{}" : "{}";

          try {
            var _e4 = JSON.parse(h);

            this.lodash_set(_e4, r, t), s = this.setval(JSON.stringify(_e4), _i7);
          } catch (e) {
            var _o = {};
            this.lodash_set(_o, r, t), s = this.setval(JSON.stringify(_o), _i7);
          }
        } else s = this.setval(t, e);

        return s;
      }
    }, {
      key: "getval",
      value: function getval(t) {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
      }
    }, {
      key: "setval",
      value: function setval(t, e) {
        return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
      }
    }, {
      key: "initGotEnv",
      value: function initGotEnv(t) {
        this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
      }
    }, {
      key: "get",
      value: function get(t) {
        var _this4 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        })), $httpClient.get(t, function (t, s, i) {
          !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
        })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: !1
        })), $task.fetch(t).then(function (t) {
          var s = t.statusCode,
              i = t.statusCode,
              r = t.headers,
              o = t.body;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, function (t) {
          return e(t);
        })) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", function (t, e) {
          try {
            if (t.headers["set-cookie"]) {
              var _s5 = t.headers["set-cookie"].map(_this4.cktough.Cookie.parse).toString();

              _this4.ckjar.setCookieSync(_s5, null), e.cookieJar = _this4.ckjar;
            }
          } catch (t) {
            _this4.logErr(t);
          }
        }).then(function (t) {
          var s = t.statusCode,
              i = t.statusCode,
              r = t.headers,
              o = t.body;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, function (t) {
          var s = t.message,
              i = t.response;
          e(s, i, i && i.body);
        }));
      }
    }, {
      key: "post",
      value: function post(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        })), $httpClient.post(t, function (t, s, i) {
          !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
        });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: !1
        })), $task.fetch(t).then(function (t) {
          var s = t.statusCode,
              i = t.statusCode,
              r = t.headers,
              o = t.body;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, function (t) {
          return e(t);
        });else if (this.isNode()) {
          this.initGotEnv(t);

          var _s6 = t.url,
              _i8 = _objectWithoutProperties(t, ["url"]);

          this.got.post(_s6, _i8).then(function (t) {
            var s = t.statusCode,
                i = t.statusCode,
                r = t.headers,
                o = t.body;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, function (t) {
            var s = t.message,
                i = t.response;
            e(s, i, i && i.body);
          });
        }
      }
    }, {
      key: "time",
      value: function time(t) {
        var e = {
          "M+": new Date().getMonth() + 1,
          "d+": new Date().getDate(),
          "H+": new Date().getHours(),
          "m+": new Date().getMinutes(),
          "s+": new Date().getSeconds(),
          "q+": Math.floor((new Date().getMonth() + 3) / 3),
          S: new Date().getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));

        for (var _s7 in e) {
          new RegExp("(" + _s7 + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[_s7] : ("00" + e[_s7]).substr(("" + e[_s7]).length)));
        }

        return t;
      }
    }, {
      key: "msg",
      value: function msg() {
        var _this5 = this;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t;
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var r = arguments.length > 3 ? arguments[3] : undefined;

        var o = function o(t) {
          if (!t) return t;
          if ("string" == typeof t) return _this5.isLoon() ? t : _this5.isQuanX() ? {
            "open-url": t
          } : _this5.isSurge() ? {
            url: t
          } : void 0;

          if ("object" == _typeof(t)) {
            if (_this5.isLoon()) {
              var _e5 = t.openUrl || t.url || t["open-url"],
                  _s8 = t.mediaUrl || t["media-url"];

              return {
                openUrl: _e5,
                mediaUrl: _s8
              };
            }

            if (_this5.isQuanX()) {
              var _e6 = t["open-url"] || t.url || t.openUrl,
                  _s9 = t["media-url"] || t.mediaUrl;

              return {
                "open-url": _e6,
                "media-url": _s9
              };
            }

            if (_this5.isSurge()) {
              var _e7 = t.url || t.openUrl || t["open-url"];

              return {
                url: _e7
              };
            }
          }
        };

        this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
        var h = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h);
      }
    }, {
      key: "log",
      value: function log() {
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }

        t.length > 0 && (this.logs = [].concat(_toConsumableArray(this.logs), t)), console.log(t.join(this.logSeparator));
      }
    }, {
      key: "logErr",
      value: function logErr(t, e) {
        var s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        s ? this.log("", "\u2757\uFE0F".concat(this.name, ", \u9519\u8BEF!"), t.stack) : this.log("", "\u2757\uFE0F".concat(this.name, ", \u9519\u8BEF!"), t);
      }
    }, {
      key: "wait",
      value: function wait(t) {
        return new Promise(function (e) {
          return setTimeout(e, t);
        });
      }
    }, {
      key: "done",
      value: function done() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e = new Date().getTime(),
            s = (e - this.startTime) / 1e3;
        this.log("", "\uD83D\uDD14".concat(this.name, ", \u7ED3\u675F! \uD83D\uDD5B ").concat(s, " \u79D2")), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
      }
    }]);

    return _class;
  }())(t, e);
}
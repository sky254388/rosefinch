// 脚本名称
const name = '汽车签到'

// 用户代理
let UA

// 引入第三方库
const got = require('got')

// 引入通知模块
const notify = require('./sendNotify')

// 引入京东Cookie模块
const jdCookieNode = require('./Cookie/jdCookie.js')

// Optional chaining function
function oc(fn, defaultVal) {
    try {
        return fn()
    } catch (e) {
        return undefined
    }
}

// 存储所有京东Cookie的数组
let cookiesArr = [],
    cookie

// 将所有京东Cookie加入数组
Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
});

// 主逻辑
!(async () => {
    // 如果没有找到京东Cookie，输出错误信息
    if (!cookiesArr[0]) {
        console.error('没有找到京东CK')
        return
    }

    // 循环遍历所有京东Cookie
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookie = cookiesArr[i]

            // 解析用户名
            const UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            console.log(`\n******开始【京东账号${i + 1}】${UserName}*********\n`);

            // 设置用户代理
            UA = process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)
            
            // 执行主函数
            await main()
        }

        // 如果不是最后一个京东Cookie，等待一定时间
        if (i != cookiesArr.length - 1) {
            await wait(3000)
        }
    }

})()
// 捕获错误并输出错误信息
.catch((e) => {
    console.error(`${name} 错误 :${e.stack}`)
})
// 无论如何都输出脚本完成信息
.finally(() => {
    console.log(`${name} finish`)
})

// 等待一定时间的函数
function wait(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

// 主函数
async function main() {
    // 执行签到函数
    await signBeanIndex()
    // 等待一定时间
    await wait(3000)
    // 执行汽车签到函数
    await cgame()
}

// 签到函数
async function signBeanIndex() {
    const options = {
        url: `https://api.m.jd.com/client.action`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Host': `api.m.jd.com`,
            'Origin': 'https://api.m.jd.com',
            'Referer': `https://api.m.jd.com`,
            'Cookie': cookie
        },
        body: "functionId=signBeanIndex&appid=ld"
    }

    const { body } = await got.post(options)
    const data = JSON.parse(body)

    // 获取签到奖励信息
    let title = oc(() => data.data.dailyAward.title) || oc(() => data.data.continuityAward.title)
    let bean = oc(() => data.data.dailyAward.beanAward.beanCount) || oc(() => data.data.continuityAward.beanAward.beanCount)

    // 如果有京豆奖励，输出信息
    if (bean) {
        console.log(`${title} 获得${bean}京豆`)
    }
}

// 汽车签到函数
async function cgame() {
    const options = {
        url: `https://cgame-stadium.jd.com/api/v1/sign`,
        headers: {
            'Connection': 'keep-alive',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
            'Origin': 'https://pro.m.jd.com',
            'ActivityId': '7c51826be9f241c1ad9733df34d242c5',
            'Host': 'cgame-stadium.jd.com',
            'Referer': 'https://pro.m.jd.com/mall/active/Md9FMi1pJXg2q7qc8CmE9FNYDS4/index.html',
            'Accept-Language': 'zh-cn',
            'Accept': 'application/json',
            'Cookie': cookie
        }
    }

    
    const { body } = await got.post(options)
    const data = JSON.parse(body)

    // 获取汽车签到奖励信息
    let bean = oc(() => data.data.beanNum)

    // 如果有京豆奖励，输出信息
    if (bean > 0) {
        console.log(`汽车签到 获得${bean}京豆`)
    }
}

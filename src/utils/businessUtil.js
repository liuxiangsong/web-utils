/*! *****************************************************************************
与业务相关方法：提取手机号、姓名等方法
***************************************************************************** */

import REGULAR_EXP from './regularExp'
/** 取得字符串中格式正确的手机号和座机号
 * @method getContactNumbers
 * @param {string} contactNumber 
 */
export function getContactNumbers(contactNumber) {
    if (!contactNumber) {
        return {phones: [],  telephones: [] }
    }
    let phones=[]
    let telephones=[]
    var numbers=contactNumber.split(/[,，/]/).filter(n=>n)
    numbers.forEach(num => {
        if(REGULAR_EXP.mobilePhone.test(num)){
            phones.push(num)
        }else if(REGULAR_EXP.landlinePhone.test(num)){
            telephones.push(num)
        }
    }) 
    return { phones, telephones }
}

/**
 * 获取文本的手机号、座机号、姓名、地址、公司名
 * @param {String} inputText 输入文本
 * @returns {Object} result 
 * @returns {Array} result.mobiles
 * @returns {Array} result.tels
 * @returns {String} result.name
 * @returns {String} result.address
 * @returns {String} result.company
 */
export function smartRecognize(inputText){
    if(!inputText){
        return  
    }
    const wordsList= inputText.match(/[\u4e00-\u9fa5|0-9|a-z|A-Z]{2,}/g)||[]
    const noiseItems=['收方','收货','收件','客户','姓名','联系','电话','手机','地址','详细']
    const noiseWords= wordsList.filter(w=>noiseItems.some(n=>w.includes(n)))
    noiseWords.forEach(w=>{
        inputText=inputText.replace(new RegExp(w,'g'),' ')
    })
    let  result= recognizePhone(inputText)
    Object.assign(result,recognizeName(wordsList,result.inputText))
    Object.assign(result,recognizeAddressAndCompany(result.inputText))
    return result
}

function recognizePhone(inputText){
    const mobileReg=/(0|86|17951)?(13\d|15\d|17\d|18\d|19\d|14[057]|165|166|168|199|198)(\d{8}|(\s{0,}|-)\d{4}(\s{0,}|-)\d{4})/g
    const telReg=/(\d{2,}-)?(\d{5,})(-\d{2,})?/g
    const mobiles=inputText.match(mobileReg)||[]
    mobiles.forEach(m=>{
        inputText=inputText.replace(new RegExp(m,'g'),' ')
    })
    const tels=inputText.match(telReg)||[]
    tels.forEach(t=>{
        inputText=inputText.replace(new RegExp(t,'g'),' ')
    })
    return {mobiles,tels,inputText}
}

function recognizeName(wordsList,inputText){
    if(!wordsList ||wordsList.length<1){
        return {}
    }
    const familyName='赵钱孙李周吴郑王冯陈楮卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闽席季麻强贾路娄危江童颜郭梅盛林刁锺徐丘骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄麹家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘斜厉戎祖武符刘景詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阴郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍郤璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇广禄阙东欧殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后荆红游竺权逑盖益桓公万俟司马上官欧阳夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于单于太叔申屠公孙仲孙轩辕令狐锺离宇文长孙慕容鲜于闾丘司徒司空丌官司寇仉督子车颛孙端木巫马公西漆雕乐正壤驷公良拓拔夹谷宰父谷梁晋楚阎法汝鄢涂钦段干百里东郭南门呼延归海羊舌微生岳帅缑亢况后有琴梁丘左丘东门西门商牟佘佴伯赏南宫墨哈谯笪年爱阳佟第五言福'
    wordsList=wordsList.filter(w=>w.length>1&&w.length<5)
    let nameList=wordsList.filter(w=>w.endsWith('先生') || w.endsWith('小姐') || familyName.includes(w.substr(0,1)))
    if(nameList.length<1){
        const englishNameReg=/[A-Za-z. ]{2,}/g
        nameList= inputText.match(englishNameReg)
        if(nameList&&nameList.length>0){
            nameList=nameList.filter(n=>n.split(' ').length<2)
        } 
    }
    if(!nameList || nameList.length<1){
        return 
    }
    nameList.sort((a,b)=>a.length-b.length)
    return {name:nameList[0],inputText:inputText.replace(new RegExp(nameList[0],'g'),' ')}
}

function recognizeAddressAndCompany(inputText){
    let wordsList=  inputText.split(/[,;:，；：。\s]/).filter(f=>/[\u4e00-\u9fa5]{2,}/.test(f))
    if(wordsList.length<1){
        return
    }
    const addressReg=/['省','市','区','县','镇','乡','街','道']/
    const address=wordsList.find(f=>addressReg.test(f))
   
    wordsList.sort((a,b)=>b.length-a.length)
    wordsList=wordsList.filter(f=>f!=address)
    const company=wordsList.length>0&&wordsList[0]
    return {address,company}
}

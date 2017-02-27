(function () {
    var cityList = {
        el_content: null,
        cityData: [{
            first: 'A', city: [{ code: '513200', name: '阿坝', py: 'aba', sx: 'ab' },
            { code: '652900', name: '阿克苏', py: 'akesu', sx: 'aks' },
            { code: '152900', name: '阿拉善', py: 'alashan', sx: 'als' },
            { code: '654300', name: '阿勒泰', py: 'aletai', sx: 'alt' },
            { code: '542500', name: '阿里', py: 'ali', sx: 'al' },
            { code: '610900', name: '安康', py: 'ankang', sx: 'ak' },
            { code: '340800', name: '安庆', py: 'anqing', sx: 'aq' },
            { code: '520400', name: '安顺', py: 'anshun', sx: 'as' },
            { code: '410500', name: '安阳', py: 'anyang', sx: 'ay' },
            { code: '210300', name: '鞍山', py: 'anshan', sx: 'as' },
            { code: '820001', name: '澳门', py: 'aomen', sx: 'am' }, ]
        },
        {
            first: 'B', city: [{ code: '150800', name: '巴彦淖尔', py: 'bayannaoer', sx: 'byne' },
            { code: '652800', name: '巴音郭楞', py: 'bayinguoleng', sx: 'bygl' },
            { code: '511900', name: '巴中', py: 'bazhong', sx: 'bz' },
            { code: '220800', name: '白城', py: 'baicheng', sx: 'bc' },
            { code: '220600', name: '白山', py: 'baishan', sx: 'bs' },
            { code: '620400', name: '白银', py: 'baiyin', sx: 'by' },
            { code: '451000', name: '百色', py: 'baise', sx: 'bs' },
            { code: '340300', name: '蚌埠', py: 'bangbu', sx: 'bb' },
            { code: '150200', name: '包头', py: 'baotou', sx: 'bt' },
            { code: '610300', name: '宝鸡', py: 'baoji', sx: 'bj' },
            { code: '130600', name: '保定', py: 'baoding', sx: 'bd' },
            { code: '530500', name: '保山', py: 'baoshan', sx: 'bs' },
            { code: '450500', name: '北海', py: 'beihai', sx: 'bh' },
            { code: '110100', name: '北京', py: 'beijing', sx: 'bj' },
            { code: '210500', name: '本溪', py: 'benxi', sx: 'bx' },
            { code: '520500', name: '毕节', py: 'bijie', sx: 'bj' },
            { code: '371600', name: '滨州', py: 'binzhou', sx: 'bz' },
            { code: '341600', name: '亳州', py: 'bozhou', sx: 'bz' },
            { code: '652700', name: '博尔塔拉', py: 'boertala', sx: 'betl' }, ]
        },
        {
            first: 'C', city: [{ code: '130900', name: '沧州', py: 'cangzhou', sx: 'cz' },
            { code: '542100', name: '昌都', py: 'changdou', sx: 'cd' },
            { code: '652300', name: '昌吉', py: 'changji', sx: 'cj' },
            { code: '430700', name: '常德', py: 'changde', sx: 'cd' },
            { code: '320400', name: '常州', py: 'changzhou', sx: 'cz' },
            { code: '220100', name: '长春', py: 'changchun', sx: 'cc' },
            { code: '430100', name: '长沙', py: 'changsha', sx: 'cs' },
            { code: '140400', name: '长治', py: 'changzhi', sx: 'cz' },
            { code: '211300', name: '朝阳', py: 'chaoyang', sx: 'cy' },
            { code: '445100', name: '潮州', py: 'chaozhou', sx: 'cz' },
            { code: '431000', name: '郴州', py: 'chenzhou', sx: 'cz' },
            { code: '510100', name: '成都', py: 'chengdou', sx: 'cd' },
            { code: '130800', name: '承德', py: 'chengde', sx: 'cd' },
            { code: '341700', name: '池州', py: 'chizhou', sx: 'cz' },
            { code: '150400', name: '赤峰', py: 'chifeng', sx: 'cf' },
            { code: '451400', name: '崇左', py: 'chongzuo', sx: 'cz' },
            { code: '341100', name: '滁州', py: 'chuzhou', sx: 'cz' },
            { code: '532300', name: '楚雄', py: 'chuxiong', sx: 'cx' }, ]
        },
        {
            first: 'D', city: [{ code: '511700', name: '达州', py: 'dazhou', sx: 'dz' },
            { code: '532900', name: '大理', py: 'dali', sx: 'dl' },
            { code: '210200', name: '大连', py: 'dalian', sx: 'dl' },
            { code: '230600', name: '大庆', py: 'daqing', sx: 'dq' },
            { code: '140200', name: '大同', py: 'datong', sx: 'dt' },
            { code: '232700', name: '大兴安岭', py: 'daxinganling', sx: 'dxal' },
            { code: '210600', name: '丹东', py: 'dandong', sx: 'dd' },
            { code: '533100', name: '德宏', py: 'dehong', sx: 'dh' },
            { code: '510600', name: '德阳', py: 'deyang', sx: 'dy' },
            { code: '371400', name: '德州', py: 'dezhou', sx: 'dz' },
            { code: '533400', name: '迪庆', py: 'diqing', sx: 'dq' },
            { code: '621100', name: '定西', py: 'dingxi', sx: 'dx' },
            { code: '441900', name: '东莞', py: 'dongguan', sx: 'dg' },
            { code: '370500', name: '东营', py: 'dongying', sx: 'dy' }, ]
        },
        {
            first: 'E', city: [{ code: '150600', name: '鄂尔多斯', py: 'eerduosi', sx: 'eeds' },
            { code: '420700', name: '鄂州', py: 'ezhou', sx: 'ez' },
            { code: '422800', name: '恩施', py: 'enshi', sx: 'es' }, ]
        },
        {
            first: 'F', city: [{ code: '450600', name: '防城港', py: 'fangchenggang', sx: 'fcg' },
            { code: '440600', name: '佛山', py: 'foshan', sx: 'fs' },
            { code: '350100', name: '福州', py: 'fuzhou', sx: 'fz' },
            { code: '210400', name: '抚顺', py: 'fushun', sx: 'fs' },
            { code: '361000', name: '抚州', py: 'fuzhou', sx: 'fz' },
            { code: '210900', name: '阜新', py: 'fuxin', sx: 'fx' },
            { code: '341200', name: '阜阳', py: 'fuyang', sx: 'fy' }, ]
        },
        {
            first: 'G', city: [{ code: '623000', name: '甘南', py: 'gannan', sx: 'gn' },
            { code: '513300', name: '甘孜', py: 'ganzi', sx: 'gz' },
            { code: '360700', name: '赣州', py: 'ganzhou', sx: 'gz' },
            { code: '640400', name: '固原', py: 'guyuan', sx: 'gy' },
            { code: '511600', name: '广安', py: 'guangan', sx: 'ga' },
            { code: '510800', name: '广元', py: 'guangyuan', sx: 'gy' },
            { code: '440100', name: '广州', py: 'guangzhou', sx: 'gz' },
            { code: '450800', name: '贵港', py: 'guigang', sx: 'gg' },
            { code: '520100', name: '贵阳', py: 'guiyang', sx: 'gy' },
            { code: '450300', name: '桂林', py: 'guilin', sx: 'gl' },
            { code: '632600', name: '果洛', py: 'guoluo', sx: 'gl' }, ]
        },
        {
            first: 'H', city: [{ code: '230100', name: '哈尔滨', py: 'haerbin', sx: 'heb' },
            { code: '652200', name: '哈密', py: 'hami', sx: 'hm' },
            { code: '632200', name: '海北', py: 'haibei', sx: 'hb' },
            { code: '630200', name: '海东', py: 'haidong', sx: 'hd' },
            { code: '460100', name: '海口', py: 'haikou', sx: 'hk' },
            { code: '632500', name: '海南', py: 'hainan', sx: 'hn' },
            { code: '632800', name: '海西', py: 'haixi', sx: 'hx' },
            { code: '130400', name: '邯郸', py: 'handan', sx: 'hd' },
            { code: '610700', name: '汉中', py: 'hanzhong', sx: 'hz' },
            { code: '330100', name: '杭州', py: 'hangzhou', sx: 'hz' },
            { code: '340100', name: '合肥', py: 'hefei', sx: 'hf' },
            { code: '653200', name: '和田', py: 'hetian', sx: 'ht' },
            { code: '451200', name: '河池', py: 'hechi', sx: 'hc' },
            { code: '441600', name: '河源', py: 'heyuan', sx: 'hy' },
            { code: '371700', name: '菏泽', py: 'heze', sx: 'hz' },
            { code: '451100', name: '贺州', py: 'hezhou', sx: 'hz' },
            { code: '410600', name: '鹤壁', py: 'hebi', sx: 'hb' },
            { code: '230400', name: '鹤岗', py: 'hegang', sx: 'hg' },
            { code: '231100', name: '黑河', py: 'heihe', sx: 'hh' },
            { code: '131100', name: '衡水', py: 'hengshui', sx: 'hs' },
            { code: '430400', name: '衡阳', py: 'hengyang', sx: 'hy' },
            { code: '532500', name: '红河', py: 'honghe', sx: 'hh' },
            { code: '150100', name: '呼和浩特', py: 'huhehaote', sx: 'hhht' },
            { code: '150700', name: '呼伦贝尔', py: 'hulunbeier', sx: 'hlbe' },
            { code: '211400', name: '葫芦岛', py: 'huludao', sx: 'hld' },
            { code: '330500', name: '湖州', py: 'huzhou', sx: 'hz' },
            { code: '431200', name: '怀化', py: 'huaihua', sx: 'hh' },
            { code: '320800', name: '淮安', py: 'huaian', sx: 'ha' },
            { code: '340600', name: '淮北', py: 'huaibei', sx: 'hb' },
            { code: '340400', name: '淮南', py: 'huainan', sx: 'hn' },
            { code: '421100', name: '黄冈', py: 'huanggang', sx: 'hg' },
            { code: '632300', name: '黄南', py: 'huangnan', sx: 'hn' },
            { code: '341000', name: '黄山', py: 'huangshan', sx: 'hs' },
            { code: '420200', name: '黄石', py: 'huangshi', sx: 'hs' },
            { code: '441300', name: '惠州', py: 'huizhou', sx: 'hz' }, ]
        },
        {
            first: 'J', city: [{ code: '230300', name: '鸡西', py: 'jixi', sx: 'jx' },
            { code: '360800', name: '吉安', py: 'jian', sx: 'ja' },
            { code: '220200', name: '吉林', py: 'jilin', sx: 'jl' },
            { code: '370100', name: '济南', py: 'jinan', sx: 'jn' },
            { code: '370800', name: '济宁', py: 'jining', sx: 'jn' },
            { code: '230800', name: '佳木斯', py: 'jiamusi', sx: 'jms' },
            { code: '330400', name: '嘉兴', py: 'jiaxing', sx: 'jx' },
            { code: '620200', name: '嘉峪关', py: 'jiayuguan', sx: 'jyg' },
            { code: '440700', name: '江门', py: 'jiangmen', sx: 'jm' },
            { code: '410800', name: '焦作', py: 'jiaozuo', sx: 'jz' },
            { code: '445200', name: '揭阳', py: 'jieyang', sx: 'jy' },
            { code: '620300', name: '金昌', py: 'jinchang', sx: 'jc' },
            { code: '330700', name: '金华', py: 'jinhua', sx: 'jh' },
            { code: '210700', name: '锦州', py: 'jinzhou', sx: 'jz' },
            { code: '140500', name: '晋城', py: 'jincheng', sx: 'jc' },
            { code: '140700', name: '晋中', py: 'jinzhong', sx: 'jz' },
            { code: '420800', name: '荆门', py: 'jingmen', sx: 'jm' },
            { code: '421000', name: '荆州', py: 'jingzhou', sx: 'jz' },
            { code: '360200', name: '景德镇', py: 'jingdezhen', sx: 'jdz' },
            { code: '532801', name: '景洪', py: 'jinghong', sx: 'jh' },
            { code: '360400', name: '九江', py: 'jiujiang', sx: 'jj' },
            { code: '620900', name: '酒泉', py: 'jiuquan', sx: 'jq' }, ]
        },
        {
            first: 'K', city: [{ code: '653100', name: '喀什', py: 'kashen', sx: 'ks' },
            { code: '410200', name: '开封', py: 'kaifeng', sx: 'kf' },
            { code: '650200', name: '克拉玛依', py: 'kelamayi', sx: 'klmy' },
            { code: '653000', name: '克孜勒苏', py: 'kezilesu', sx: 'kzls' },
            { code: '530100', name: '昆明', py: 'kunming', sx: 'km' }, ]
        },
        {
            first: 'L', city: [{ code: '540100', name: '拉萨', py: 'lasa', sx: 'ls' },
            { code: '451300', name: '来宾', py: 'laibin', sx: 'lb' },
            { code: '371200', name: '莱芜', py: 'laiwu', sx: 'lw' },
            { code: '620100', name: '兰州', py: 'lanzhou', sx: 'lz' },
            { code: '131000', name: '廊坊', py: 'langfang', sx: 'lf' },
            { code: '511100', name: '乐山', py: 'leshan', sx: 'ls' },
            { code: '530700', name: '丽江', py: 'lijiang', sx: 'lj' },
            { code: '331100', name: '丽水', py: 'lishui', sx: 'ls' },
            { code: '320700', name: '连云港', py: 'lianyungang', sx: 'lyg' },
            { code: '513400', name: '凉山', py: 'liangshan', sx: 'ls' },
            { code: '211000', name: '辽阳', py: 'liaoyang', sx: 'ly' },
            { code: '220400', name: '辽源', py: 'liaoyuan', sx: 'ly' },
            { code: '371500', name: '聊城', py: 'liaocheng', sx: 'lc' },
            { code: '542600', name: '林芝', py: 'linzhi', sx: 'lz' },
            { code: '530900', name: '临沧', py: 'lincang', sx: 'lc' },
            { code: '141000', name: '临汾', py: 'linfen', sx: 'lf' },
            { code: '622900', name: '临夏', py: 'linxia', sx: 'lx' },
            { code: '371300', name: '临沂', py: 'linyi', sx: 'ly' },
            { code: '450200', name: '柳州', py: 'liuzhou', sx: 'lz' },
            { code: '341500', name: '六安', py: 'liuan', sx: 'la' },
            { code: '520200', name: '六盘水', py: 'liupanshui', sx: 'lps' },
            { code: '350800', name: '龙岩', py: 'longyan', sx: 'ly' },
            { code: '621200', name: '陇南', py: 'longnan', sx: 'ln' },
            { code: '431300', name: '娄底', py: 'loudi', sx: 'ld' },
            { code: '510500', name: '泸州', py: 'luzhou', sx: 'lz' },
            { code: '410300', name: '洛阳', py: 'luoyang', sx: 'ly' },
            { code: '411100', name: '漯河', py: 'luohe', sx: 'lh' },
            { code: '141100', name: '吕梁', py: 'lu:liang', sx: 'll' }, ]
        },
        {
            first: 'M', city: [{ code: '340500', name: '马鞍山', py: 'maanshan', sx: 'mas' },
            { code: '440900', name: '茂名', py: 'maoming', sx: 'mm' },
            { code: '511400', name: '眉山', py: 'meishan', sx: 'ms' },
            { code: '441400', name: '梅州', py: 'meizhou', sx: 'mz' },
            { code: '510700', name: '绵阳', py: 'mianyang', sx: 'my' },
            { code: '231000', name: '牡丹江', py: 'mudanjiang', sx: 'mdj' }, ]
        },
        {
            first: 'N', city: [{ code: '542400', name: '那曲', py: 'neiqu', sx: 'nq' },
            { code: '360100', name: '南昌', py: 'nanchang', sx: 'nc' },
            { code: '511300', name: '南充', py: 'nanchong', sx: 'nc' },
            { code: '320100', name: '南京', py: 'nanjing', sx: 'nj' },
            { code: '450100', name: '南宁', py: 'nanning', sx: 'nn' },
            { code: '350700', name: '南平', py: 'nanping', sx: 'np' },
            { code: '320600', name: '南通', py: 'nantong', sx: 'nt' },
            { code: '411300', name: '南阳', py: 'nanyang', sx: 'ny' },
            { code: '511000', name: '内江', py: 'neijiang', sx: 'nj' },
            { code: '330200', name: '宁波', py: 'ningbo', sx: 'nb' },
            { code: '350900', name: '宁德', py: 'ningde', sx: 'nd' },
            { code: '533300', name: '怒江', py: 'nujiang', sx: 'nj' }, ]
        },
        {
            first: 'P', city: [{ code: '510400', name: '攀枝花', py: 'panzhihua', sx: 'pzh' },
            { code: '211100', name: '盘锦', py: 'panjin', sx: 'pj' },
            { code: '410400', name: '平顶山', py: 'pingdingshanp', sx: 'ds' },
            { code: '620800', name: '平凉', py: 'pingliang', sx: 'pl' },
            { code: '360300', name: '萍乡', py: 'pingxiang', sx: 'px' },
            { code: '350300', name: '莆田', py: 'putian', sx: 'pt' },
            { code: '410900', name: '濮阳', py: 'puyang', sx: 'py' },
            { code: '530800', name: '普洱', py: 'puer', sx: 'pe' }, ]
        },
        {
            first: 'Q', city: [{ code: '230900', name: '七台河', py: 'qitaihe', sx: 'qth' },
            { code: '230200', name: '齐齐哈尔', py: 'qiqihaer', sx: 'qqhe' },
            { code: '522600', name: '黔东南', py: 'qiandongnan', sx: 'qdn' },
            { code: '522700', name: '黔南', py: 'qiannan', sx: 'qn' },
            { code: '522300', name: '黔西南', py: 'qianxinan', sx: 'qxn' },
            { code: '450700', name: '钦州', py: 'qinzhou', sx: 'qz' },
            { code: '130300', name: '秦皇岛', py: 'qinhuangdao', sx: 'qhd' },
            { code: '370200', name: '青岛', py: 'qingdao', sx: 'qd' },
            { code: '441800', name: '清远', py: 'qingyuan', sx: 'qy' },
            { code: '621000', name: '庆阳', py: 'qingyang', sx: 'qy' },
            { code: '330800', name: '衢州', py: 'quzhou', sx: 'qz' },
            { code: '530300', name: '曲靖', py: 'qujing', sx: 'qj' },
            { code: '350500', name: '泉州', py: 'quanzhou', sx: 'qz' }, ]
        },
        {
            first: 'R', city: [{ code: '542300', name: '日喀则', py: 'rikaze', sx: 'rkz' },
            { code: '371100', name: '日照', py: 'rizhao', sx: 'rz' }, ]
        },
        {
            first: 'S', city: [{ code: '411200', name: '三门峡', py: 'sanmenxia', sx: 'smx' },
            { code: '350400', name: '三明', py: 'sanming', sx: 'sm' },
            { code: '460300', name: '三沙', py: 'sansha', sx: 'ss' },
            { code: '460200', name: '三亚', py: 'sanya', sx: 'sy' },
            { code: '542200', name: '山南', py: 'shannan', sx: 'sn' },
            { code: '440500', name: '汕头', py: 'shantou', sx: 'st' },
            { code: '441500', name: '汕尾', py: 'shanwei', sx: 'sw' },
            { code: '611000', name: '商洛', py: 'shangluo', sx: 'sl' },
            { code: '411400', name: '商丘', py: 'shangqiu', sx: 'sq' },
            { code: '310100', name: '上海', py: 'shanghai', sx: 'sh' },
            { code: '361100', name: '上饶', py: 'shangrao', sx: 'sr' },
            { code: '440200', name: '韶关', py: 'shaoguan', sx: 'sg' },
            { code: '430500', name: '邵阳', py: 'shaoyang', sx: 'sy' },
            { code: '330600', name: '绍兴', py: 'shaoxing', sx: 'sx' },
            { code: '440300', name: '深圳', py: 'shenzhen', sx: 'sz' },
            { code: '210100', name: '沈阳', py: 'shenyang', sx: 'sy' },
            { code: '420300', name: '十堰', py: 'shiyan', sx: 'sy' },
            { code: '130100', name: '石家庄', py: 'shijiazhuang', sx: 'sjz' },
            { code: '640200', name: '石嘴山', py: 'shizuishan', sx: 'szs' },
            { code: '230500', name: '双鸭山', py: 'shuangyashan', sx: 'sys' },
            { code: '140600', name: '朔州', py: 'shuozhou', sx: 'sz' },
            { code: '220300', name: '四平', py: 'siping', sx: 'sp' },
            { code: '220700', name: '松原', py: 'songyuan', sx: 'sy' },
            { code: '320500', name: '苏州', py: 'suzhou', sx: 'sz' },
            { code: '231200', name: '绥化', py: 'suihua', sx: 'sh' },
            { code: '321300', name: '宿迁', py: 'suqian', sx: 'sq' },
            { code: '341300', name: '宿州', py: 'suzhou', sx: 'sz' },
            { code: '421300', name: '随州', py: 'suizhou', sx: 'sz' },
            { code: '510900', name: '遂宁', py: 'suining', sx: 'sn' }, ]
        },
        {
            first: 'T', city: [{ code: '654200', name: '塔城', py: 'tacheng', sx: 'tc' },
            { code: '710001', name: '台湾', py: 'taiwan', sx: 'tw' },
            { code: '331000', name: '台州', py: 'taizhou', sx: 'tz' },
            { code: '140100', name: '太原', py: 'taiyuan', sx: 'ty' },
            { code: '370900', name: '泰安', py: 'taian', sx: 'ta' },
            { code: '321200', name: '泰州', py: 'taizhou', sx: 'tz' },
            { code: '130200', name: '唐山', py: 'tangshan', sx: 'ts' },
            { code: '120100', name: '天津', py: 'tianjin', sx: 'tj' },
            { code: '620500', name: '天水', py: 'tianshui', sx: 'ts' },
            { code: '211200', name: '铁岭', py: 'tieling', sx: 'tl' },
            { code: '220500', name: '通化', py: 'tonghua', sx: 'th' },
            { code: '150500', name: '通辽', py: 'tongliao', sx: 'tl' },
            { code: '610200', name: '铜川', py: 'tongchuan', sx: 'tc' },
            { code: '340700', name: '铜陵', py: 'tongling', sx: 'tl' },
            { code: '520600', name: '铜仁', py: 'tongren', sx: 'tr' },
            { code: '652100', name: '吐鲁番', py: 'tulufan', sx: 'tlf' }, ]
        },
        {
            first: 'W', city: [{ code: '371000', name: '威海', py: 'weihai', sx: 'wh' },
            { code: '370700', name: '潍坊', py: 'weifang', sx: 'wf' },
            { code: '610500', name: '渭南', py: 'weinan', sx: 'wn' },
            { code: '330300', name: '温州', py: 'wenzhou', sx: 'wz' },
            { code: '532600', name: '文山', py: 'wenshan', sx: 'ws' },
            { code: '150300', name: '乌海', py: 'wuhai', sx: 'wh' },
            { code: '150900', name: '乌兰察布', py: 'wulanchab', sx: 'uwlcb' },
            { code: '650100', name: '乌鲁木齐', py: 'wulumuqi', sx: 'wlmq' },
            { code: '320200', name: '无锡', py: 'wuxi', sx: 'wx' },
            { code: '340200', name: '芜湖', py: 'wuhu', sx: 'wh' },
            { code: '640300', name: '吴忠', py: 'wuzhong', sx: 'wz' },
            { code: '450400', name: '梧州', py: 'wuzhou', sx: 'wz' },
            { code: '420100', name: '武汉', py: 'wuhan', sx: 'wh' },
            { code: '620600', name: '武威', py: 'wuwei', sx: 'ww' }, ]
        },
        {
            first: 'X', city: [{ code: '610100', name: '西安', py: 'xian', sx: 'xa' },
            { code: '630100', name: '西宁', py: 'xining', sx: 'xn' },
            { code: '152500', name: '锡林郭勒', py: 'xilinguole', sx: 'xlgl' },
            { code: '350200', name: '厦门', py: 'xiamen', sx: 'xm' },
            { code: '421200', name: '咸宁', py: 'xianning', sx: 'xn' },
            { code: '610400', name: '咸阳', py: 'xianyang', sx: 'xy' },
            { code: '810001', name: '香港', py: 'xianggang', sx: 'xg' },
            { code: '430300', name: '湘潭', py: 'xiangtan', sx: 'xt' },
            { code: '433100', name: '湘西', py: 'xiangxi', sx: 'xx' },
            { code: '420600', name: '襄阳', py: 'xiangyang', sx: 'xy' },
            { code: '420900', name: '孝感', py: 'xiaogan', sx: 'xg' },
            { code: '140900', name: '忻州', py: 'xinzhou', sx: 'xz' },
            { code: '410700', name: '新乡', py: 'xinxiang', sx: 'xx' },
            { code: '360500', name: '新余', py: 'xinyu', sx: 'xy' },
            { code: '411500', name: '信阳', py: 'xinyang', sx: 'xy' },
            { code: '130500', name: '邢台', py: 'xingtai', sx: 'xt' },
            { code: '152200', name: '兴安', py: 'xingan', sx: 'xa' },
            { code: '320300', name: '徐州', py: 'xuzhou', sx: 'xz' },
            { code: '411000', name: '许昌', py: 'xuchang', sx: 'xc' },
            { code: '341800', name: '宣城', py: 'xuancheng', sx: 'xc' }, ]
        },
        {
            first: 'Y', city: [{ code: '511800', name: '雅安', py: 'yaan', sx: 'ya' },
            { code: '370600', name: '烟台', py: 'yantai', sx: 'yt' },
            { code: '610600', name: '延安', py: 'yanan', sx: 'ya' },
            { code: '222400', name: '延边', py: 'yanbian', sx: 'yb' },
            { code: '320900', name: '盐城', py: 'yancheng', sx: 'yc' },
            { code: '321000', name: '扬州', py: 'yangzhou', sx: 'yz' },
            { code: '441700', name: '阳江', py: 'yangjiang', sx: 'yj' },
            { code: '140300', name: '阳泉', py: 'yangquan', sx: 'yq' },
            { code: '230700', name: '伊春', py: 'yichun', sx: 'yc' },
            { code: '654000', name: '伊犁', py: 'yili', sx: 'yl' },
            { code: '511500', name: '宜宾', py: 'yibin', sx: 'yb' },
            { code: '420500', name: '宜昌', py: 'yichang', sx: 'yc' },
            { code: '360900', name: '宜春', py: 'yichun', sx: 'yc' },
            { code: '430900', name: '益阳', py: 'yiyang', sx: 'yy' },
            { code: '640100', name: '银川', py: 'yinchuan', sx: 'yc' },
            { code: '360600', name: '鹰潭', py: 'yingtan', sx: 'yt' },
            { code: '210800', name: '营口', py: 'yingkou', sx: 'yk' },
            { code: '431100', name: '永州', py: 'yongzhou', sx: 'yz' },
            { code: '610800', name: '榆林', py: 'yulin', sx: 'yl' },
            { code: '450900', name: '玉林', py: 'yulin', sx: 'yl' },
            { code: '632700', name: '玉树', py: 'yushu', sx: 'ys' },
            { code: '530400', name: '玉溪', py: 'yuxi', sx: 'yx' },
            { code: '430600', name: '岳阳', py: 'yueyang', sx: 'yy' },
            { code: '445300', name: '云浮', py: 'yunfu', sx: 'yf' },
            { code: '140800', name: '运城', py: 'yuncheng', sx: 'yc' }, ]
        },
        {
            first: 'Z', city: [{ code: '370400', name: '枣庄', py: 'zaozhuang', sx: 'zz' },
            { code: '440800', name: '湛江', py: 'zhanjiang', sx: 'zj' },
            { code: '430800', name: '张家界', py: 'zhangjiajie', sx: 'zjj' },
            { code: '130700', name: '张家口', py: 'zhangjiakou', sx: 'zjk' },
            { code: '620700', name: '张掖', py: 'zhangye', sx: 'zy' },
            { code: '350600', name: '漳州', py: 'zhangzhou', sx: 'zz' },
            { code: '530600', name: '昭通', py: 'zhaotong', sx: 'zt' },
            { code: '441200', name: '肇庆', py: 'zhaoqing', sx: 'zq' },
            { code: '321100', name: '镇江', py: 'zhenjiang', sx: 'zj' },
            { code: '410100', name: '郑州', py: 'zhengzhou', sx: 'zz' },
            { code: '442000', name: '中山', py: 'zhongshan', sx: 'zs' },
            { code: '640500', name: '中卫', py: 'zhongwei', sx: 'zw' },
            { code: '500100', name: '重庆', py: 'zhongqing', sx: 'zq' },
            { code: '330900', name: '舟山', py: 'zhoushan', sx: 'zs' },
            { code: '411600', name: '周口', py: 'zhoukou', sx: 'zk' },
            { code: '440400', name: '珠海', py: 'zhuhai', sx: 'zh' },
            { code: '430200', name: '株洲', py: 'zhuzhou', sx: 'zz' },
            { code: '411700', name: '驻马店', py: 'zhumadianz', sx: 'md' },
            { code: '512000', name: '资阳', py: 'ziyang', sx: 'zy' },
            { code: '370300', name: '淄博', py: 'zibo', sx: 'zb' },
            { code: '510300', name: '自贡', py: 'zigong', sx: 'zg' },
            { code: '520300', name: '遵义', py: 'zunyi', sx: 'zy' }, ]
        }],
        citysLength: 0,
        openSearchList: function (isOpen) {
            var newHeight = window.screen.height;
            if (this.el_search_wrap)
                newHeight -= this.el_search_wrap.offsetHeight;
            if (isOpen) {
                this.el_search_ul.style.height = newHeight + 'px';
                this.el_search_ul.style.display = 'block';

                this.el_city_wrap.style.display = 'none';
            } else {
                this.el_search_ul.style.display = 'none';

                this.el_city_wrap.style.height = newHeight + 'px';
                this.el_city_wrap.style.display = 'block';
            }
        },
        findCity: function (py) {
            if (py.length > 0) {
                var result = [];
                for (var i = 0; i < this.citysLength; i++) {
                    for (var j = 0, _len = this.cityData[i].city.length; j < _len; j++) {
                        var m = this.cityData[i].city[j];
                        if (m.name.indexOf(py) == 0 || m.py.indexOf(py.toLowerCase()) == 0 || m.sx.indexOf(py.toLowerCase()) == 0)
                            result.push(m);
                    }
                }
                this.addResultHtml(result);
            }
        },
        result_py:'',
        addResultHtml: function (data) {
            var result_str = '';
            if (data && data.length) {
                for (var i = 0, len = data.length; i < len; i++) {
                    result_str += '<li class="city_name" data-code="' + data[i].code + '">' + data[i].name + '</li>';
                }
            }
            this.el_search_ul.innerHTML = result_str;
        },
        insertHtml: function () {
            var search_str = '<header id="search_wrap"><p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAhFBMVEUAAABvb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb2/pz3N0AAAAK3RSTlMA8nYG0dT7yogN4cMj2DEQwLmafy3GspNpFOquom9gVE1CPBncqVo1RwsdhV/YeAAAAdtJREFUSMfll+uOgkAMhXcQEbkJooggd0Fd3v/9dhMZLpbDjDH7a/vHxMNHZ+ppG79eosr1QFWZoZoXpfx6K7KAtaO46o40Gq5bErEcfju2s6FLsEqLQj2I2EuLQyuW2bhdjEw6r33RQ3/vTup+k7qv4fMb7hpv+JqdEesMDymrsZCrvWAi2O4PTOp66ukUeIPr7oOKPhfZahaO+HVnVb2/0ZzacNWaP5jbydGc6AlsWGndA3eqnTVyJ1C0PZVSof8t3qD4vQvuN2FRXF5qHD68dGeiYAHOOjghikGqAe3rE4WJYQvaJBLDBw6jrqgX4BzCm66hJMZbQ5S6U74x7MFxoqAzDQbmnUE7tiQNiTzizWhGp4WAXbHBI9Dc7LE8WbUzsgCecSmXvVk54HIMf2Pcs1ave1swHAdn4xnXGvn0tfXAwr4b7WUz67PfTtpk3QEbVeO9ZMRKmjXpaUNWLUhdtuLAK+cuRbuALtgnuS1XikbTPYwk6CNqn23yWmFVT5Sa5EbhKMH6eXumxonzHGE2yY2jOhRl4VSjaXCd0iA3iN16Qm9kmL/K/SZtT+l/k/sjeqsOKNysmJ7k1sQAyA1gYW68BuRzaxYR5XOXRJKhj+Bfi1zsGXOd388f/Xy8Q9tviYcAAAAASUVORK5CYII=" />';
            search_str += '<input id="txt_city" maxlength="10" placeholder="输入城市名或首字母查询" type="text" /></p>';
            search_str += '</header><ul id="search_ul" class="page"></ul>';
            var city_str = '';
            var letter_str = '';
            this.citysLength = this.cityData.length;
            for (var i = 0; i < this.citysLength; i++) {
                letter_str += '<li class="letter_li">' + this.cityData[i].first + '</li>';
                city_str += '<ul class="city_list"><li id="letter_' + this.cityData[i].first + '" class="city_letter">' + this.cityData[i].first + '</li>';
                for (var j = 0, _len = this.cityData[i].city.length; j < _len; j++) {
                    var m = this.cityData[i].city[j];
                    city_str += '<li class="city_name" data-code="' + m.code + '">' + m.name + '</li>';
                }
                city_str += '</ul>';
            }
            if (letter_str)
                letter_str = '<ul id="letter_ul">' + letter_str + '</ul>';
            if (city_str)
                city_str = '<main id="city_wrap" class="page">' + city_str + letter_str + '</main>';
            this.el_content.innerHTML = search_str + city_str;
        },
        bindEvent: function () {
            var $this = this;
            addEvent(this.el_content, 'click', function (e) {
                var target = e.target || e.srcElement || event.srcElement || event.target;
                if (target) {
                    if (target.className === "letter_li") {
                        var newY = document.getElementById('letter_' + target.innerHTML).offsetTop;
                        if ($this.el_search_wrap)
                            newY -= $this.el_search_wrap.offsetHeight;
                        $this.el_city_wrap.scrollTop=newY;
                    } else if (target.className === "city_name") {
                        var result = { code: target.getAttribute('data-code'), name: target.innerHTML };
                        $this.el_txt_city.blur();
                        $this.callback && $this.callback(result);
                    }
                }
            });
            addEvent(this.el_txt_city, 'keydown keyup ofcus blur', function () {
                var py = this.value;
                if (py != $this.result_py) {
                    $this.result_py = py;
                    if (py) {
                        $this.openSearchList(true);
                        $this.findCity(py);
                    }
                    else
                        $this.openSearchList(false);
                }
                //支持keydown，取消定时器
                //if ($this.setTime) {
                //    clearInterval($this.setTime), $this.setTime = null;
                //}
            });
            ////定时器获取结果(安卓第三方输入法不支持keydown等监听)
            //this.setTime = setInterval(function () {
            //    var py = $this.el_txt_city.value;
            //    if (py != $this.result_py) {
            //        $this.result_py = py;
            //        if (py) {
            //            $this.openSearchList(true);
            //            $this.findCity(py);
            //        }
            //        else
            //            $this.openSearchList(false);
            //    }
            //}, 500);
        },
        callback: null,
        init: function (obj,callback) {
            if (obj)
                this.el_content = obj.length ? obj[0] : obj;
            if (callback)
                this.callback = callback;
            if (this.el_content) {
                this.insertHtml();
                this.el_search_wrap = document.getElementById('search_wrap');
                this.el_txt_city = document.getElementById('txt_city');
                this.el_search_ul = document.getElementById('search_ul');
                this.el_city_wrap = document.getElementById('city_wrap');
                this.el_letter_ul = document.getElementById('letter_ul');
                this.bindEvent();
            }
            this.openSearchList(false);
        }
    };
    window.cityList = cityList;
})();
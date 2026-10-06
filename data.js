/*
 * 列島覇権戦記 - master data / static configuration
 * Generated from Ver.2.37.4 monolithic build.
 * Load this file before main.js.
 */

/* ===== source script block 1 ===== */

/* --- V196_MODES --- */
const V196_MODES={
 tutorial:{name:'操作チュートリアル',note:'東海道の練習戦で、人事・移動・攻撃・週進行を覚える。',key:'rettou_v228_tutorial'},
 standard:{name:'各国戦役',note:'世界観の同盟を維持。外交を使い、同盟陣営で全国制覇。',key:'tokai_v188_campaign'},
 short:{name:'東海・関東 20週戦役',note:'東海と関東だけが交戦。20週以内に相手の都市を3つ確保し、自国首都を守る。',key:'tokai_v196_short'},
 free:{name:'フリーモード',note:'全10国の同盟・交戦関係を自由に設定。プレイ中の外交と勝利条件も選択。',key:'tokai_v196_free'}
};

/* --- names --- */
const names={1:"北海道",2:"青森",3:"岩手",4:"宮城",5:"秋田",6:"山形",7:"福島",8:"茨城",9:"栃木",10:"群馬",11:"埼玉",12:"千葉",13:"東京",14:"神奈川",15:"新潟",16:"富山",17:"石川",18:"福井",19:"山梨",20:"長野",21:"岐阜",22:"静岡",23:"愛知",24:"三重",25:"滋賀",26:"京都",27:"大阪",28:"兵庫",29:"奈良",30:"和歌山",31:"鳥取",32:"島根",33:"岡山",34:"広島",35:"山口",36:"徳島",37:"香川",38:"愛媛",39:"高知",40:"福岡",41:"佐賀",42:"長崎",43:"熊本",44:"大分",45:"宮崎",46:"鹿児島",47:"沖縄"};

/* --- factions --- */
const factions={
 "北海道帝国":{c:"#39a9d6",codes:[1]},"東北共和国":{c:"#4f8466",codes:[2,3,4,5,6,7]},"関東連邦":{c:"#b44d59",codes:[8,9,10,11,12,13,14]},
 "女帝国":{c:"#c14d96",codes:[15]},"東海帝国":{c:"#247dc0",codes:[16,17,18,19,20,21,22,23,24,25]},"関西連合":{c:"#7d5caf",codes:[26,27,28,29,30]},
 "中国":{c:"#b2863d",codes:[31,32,33,34,35]},"死国":{c:"#d39b2f",codes:[36,37,38,39]},"九州王国":{c:"#a65d35",codes:[40,41,42,43,44,45,46]},"沖縄諸国":{c:"#39958d",codes:[47]}
};

/* --- bases --- */
const bases={19:["甲府","富士吉田","大月"],22:["浜松","静岡","富士","沼津","熱海"],21:["可児【帝都】","岐阜","大垣","美濃加茂","多治見","各務原","高山","中津川"],23:["名古屋【金融・商業】","豊田","岡崎","小牧","豊橋","春日井"],24:["四日市","津","伊勢"],25:["大津","彦根","長浜"],18:["福井","敦賀","越前"],17:["金沢","小松","七尾"],16:["富山","高岡","魚津"],20:["長野","松本","上田","諏訪"],14:["相模原","厚木","横浜","横須賀"],26:["京都","舞鶴"],29:["奈良","吉野"]};

/* --- R0 --- */
const R0={16:10000,17:10000,18:10000,19:200000,20:90000,21:140000,22:40000,23:30000,24:0,25:170000};

/* --- G0 --- */
const G0={16:10000,17:10000,18:10000,19:35000,20:25000,21:80000,22:30000,23:50000,24:20000,25:30000};

/* --- enemy0 --- */
const enemy0={14:{a:92000,i:0,age:0},13:{a:155000,i:0,age:0},11:{a:98000,i:0,age:0},26:{a:88000,i:0,age:0},29:{a:56000,i:0,age:0}};

/* --- KANTO_CODES --- */
const KANTO_CODES=[8,9,10,11,12,13,14];

/* --- UNIT_SPECS --- */
const UNIT_SPECS={
 inf:{name:"歩兵師団",cost:80,food:20,atk:1.0,def:1.0,tech:null,type:"regular"},
 armor:{name:"機甲師団",cost:250,food:30,atk:3.5,def:2.8,tech:"armor",type:"regular"},
 air:{name:"航空攻撃隊",cost:350,food:20,atk:4.5,def:1.5,tech:"air",type:"regular"},
 elite:{name:"親衛特務部隊",cost:600,food:40,atk:8.0,def:6.0,tech:"special",type:"guard"}
};

/* --- CITY_DATA --- */
const CITY_DATA={
 kani:{name:"可児",pref:21,x:491,y:666,neighbors:["gifu","tajimi","nakatsugawa"]},
 gifu:{name:"岐阜",pref:21,x:476,y:675,neighbors:["kani","ogaki"]},
 ogaki:{name:"大垣",pref:21,x:464,y:677,neighbors:["gifu"]},
 tajimi:{name:"多治見",pref:21,x:503,y:668,neighbors:["kani","nagoya"]},
 nagoya:{name:"名古屋",pref:23,x:492,y:695,neighbors:["tajimi","toyota","okazaki"]},
 toyota:{name:"豊田",pref:23,x:511,y:698,neighbors:["nagoya","okazaki","nakatsugawa"]},
 okazaki:{name:"岡崎",pref:23,x:513,y:709,neighbors:["nagoya","toyota","toyohashi"]},
 toyohashi:{name:"豊橋",pref:23,x:521,y:701,neighbors:["okazaki","hamamatsu"]},
 hamamatsu:{name:"浜松",pref:22,x:543,y:710,neighbors:["toyohashi","shizuoka"]},
 shizuoka:{name:"静岡",pref:22,x:560,y:688,neighbors:["hamamatsu","numazu","kofu"]},
 numazu:{name:"沼津",pref:22,x:580,y:683,neighbors:["shizuoka","odawara"]},
 odawara:{name:"小田原",pref:14,x:595,y:679,neighbors:["numazu","atsugi","yokohama"]},
 nakatsugawa:{name:"中津川",pref:21,x:512,y:656,neighbors:["kani","toyota","suwa"]},
 suwa:{name:"諏訪",pref:20,x:549,y:645,neighbors:["nakatsugawa","matsumoto","kofu"]},
 matsumoto:{name:"松本",pref:20,x:533,y:626,neighbors:["suwa","nagano"]},
 nagano:{name:"長野",pref:20,x:548,y:605,neighbors:["matsumoto","karuizawa"]},
 karuizawa:{name:"軽井沢",pref:20,x:567,y:622,neighbors:["nagano","takasaki"]},
 kofu:{name:"甲府",pref:19,x:568,y:660,neighbors:["suwa","shizuoka","otsuki"]},
 otsuki:{name:"大月",pref:19,x:585,y:660,neighbors:["kofu","hachioji"]},
 hachioji:{name:"八王子",pref:13,x:596,y:653,neighbors:["otsuki","tachikawa","atsugi","kawagoe"]},
 tachikawa:{name:"立川",pref:13,x:604,y:653,neighbors:["hachioji","shinjuku","kawagoe"]},
 atsugi:{name:"厚木",pref:14,x:609,y:674,neighbors:["hachioji","odawara","yokohama"]},
 takasaki:{name:"高崎",pref:10,x:579,y:614,neighbors:["karuizawa","kumagaya"]},
 kumagaya:{name:"熊谷",pref:11,x:588,y:629,neighbors:["takasaki","kawagoe","omiya"]},
 kawagoe:{name:"川越",pref:11,x:599,y:638,neighbors:["kumagaya","omiya","hachioji","tachikawa"]},
 omiya:{name:"大宮",pref:11,x:613,y:637,neighbors:["kawagoe","kumagaya","koga","ikebukuro"]},
 koga:{name:"古河",pref:8,x:634,y:627,neighbors:["omiya","tsukuba","utsunomiya"]},
 utsunomiya:{name:"宇都宮",pref:9,x:624,y:595,neighbors:["koga"]},
 tsukuba:{name:"つくば",pref:8,x:653,y:633,neighbors:["koga","kashiwa","mito"]},
 mito:{name:"水戸",pref:8,x:661,y:609,neighbors:["tsukuba"]},
 kashiwa:{name:"柏",pref:12,x:641,y:649,neighbors:["tsukuba","ichikawa","chiba"]},
 ichikawa:{name:"市川",pref:12,x:641,y:657,neighbors:["kashiwa","chiba","otemachi"]},
 chiba:{name:"千葉",pref:12,x:658,y:668,neighbors:["kashiwa","ichikawa","narita","kisarazu"]},
 narita:{name:"成田",pref:12,x:666,y:649,neighbors:["chiba"]},
 kisarazu:{name:"木更津",pref:12,x:648,y:682,neighbors:["chiba","yokohama"]},
 yokohama:{name:"横浜",pref:14,x:618,y:675,neighbors:["odawara","atsugi","kisarazu","shinagawa"]},
 ikebukuro:{name:"池袋",pref:13,x:619,y:649,neighbors:["omiya","shinjuku","otemachi"]},
 shinjuku:{name:"新宿",pref:13,x:612,y:653,neighbors:["tachikawa","ikebukuro","shinagawa","otemachi"]},
 shinagawa:{name:"品川",pref:13,x:625,y:663,neighbors:["yokohama","shinjuku","otemachi"]},
 otemachi:{name:"大手町",pref:13,x:626,y:654,neighbors:["ikebukuro","shinjuku","shinagawa","ichikawa"]},
 minokamo:{"name":"美濃加茂","pref":21,"x":490,"y":662,"neighbors":["kani","kakamigahara","takayama"]},
 kakamigahara:{"name":"各務原","pref":21,"x":480,"y":673.8,"neighbors":["gifu","minokamo","komaki"]},
 takayama:{"name":"高山","pref":21,"x":506,"y":622,"neighbors":["minokamo","toyama","matsumoto"]},
 komaki:{"name":"小牧","pref":23,"x":490,"y":685,"neighbors":["nagoya","kakamigahara","kasugai"]},
 kasugai:{"name":"春日井","pref":23,"x":499,"y":683,"neighbors":["nagoya","komaki","tajimi"]},
 fuji:{"name":"富士","pref":22,"x":576,"y":679,"neighbors":["shizuoka","numazu","fujiyoshida"]},
 atami:{"name":"熱海","pref":22,"x":590,"y":688,"neighbors":["numazu","odawara"]},
 fujiyoshida:{"name":"富士吉田","pref":19,"x":579,"y":669,"neighbors":["kofu","otsuki","fuji"]},
 ueda:{"name":"上田","pref":20,"x":557,"y":616,"neighbors":["nagano","karuizawa","suwa"]},
 iida:{"name":"飯田","pref":20,"x":525,"y":658,"neighbors":["nakatsugawa","suwa","toyohashi"]},
 yokkaichi:{"name":"四日市","pref":24,"x":466,"y":703,"neighbors":["nagoya","tsu"]},
 tsu:{"name":"津","pref":24,"x":466,"y":728,"neighbors":["yokkaichi","ise","otsu"]},
 ise:{"name":"伊勢","pref":24,"x":479.5,"y":741.5,"neighbors":["tsu"]},
 otsu:{"name":"大津","pref":25,"x":432,"y":697,"neighbors":["hikone","tsu"]},
 hikone:{"name":"彦根","pref":25,"x":451,"y":678,"neighbors":["otsu","nagahama","ogaki"]},
 nagahama:{"name":"長浜","pref":25,"x":451,"y":668,"neighbors":["hikone","ogaki","tsuruga"]},
 tsuruga:{"name":"敦賀","pref":18,"x":442,"y":657,"neighbors":["nagahama","echizen","gifu"]},
 echizen:{"name":"越前","pref":18,"x":450,"y":638,"neighbors":["tsuruga","fukui"]},
 fukui:{"name":"福井","pref":18,"x":456,"y":629,"neighbors":["echizen","komatsu"]},
 komatsu:{"name":"小松","pref":17,"x":467,"y":614,"neighbors":["fukui","kanazawa"]},
 kanazawa:{"name":"金沢","pref":17,"x":476.4,"y":601,"neighbors":["komatsu","nanao","takaoka"]},
 nanao:{"name":"七尾","pref":17,"x":487,"y":570.5,"neighbors":["kanazawa","takaoka"]},
 takaoka:{"name":"高岡","pref":16,"x":503,"y":592,"neighbors":["kanazawa","nanao","toyama"]},
 toyama:{"name":"富山","pref":16,"x":516,"y":596,"neighbors":["takaoka","uozu","takayama"]},
 uozu:{"name":"魚津","pref":16,"x":523,"y":586.5,"neighbors":["toyama","nagano"]},
 sagamihara:{"name":"相模原","pref":14,"x":601,"y":664,"neighbors":["hachioji","machida","atsugi"]},
 kawasaki:{"name":"川崎","pref":14,"x":620.8,"y":667.5,"neighbors":["yokohama","shinagawa","machida"]},
 hiratsuka:{"name":"平塚","pref":14,"x":602,"y":678,"neighbors":["odawara","atsugi","yokohama"]},
 yokosuka:{"name":"横須賀","pref":14,"x":621.8,"y":688.6,"neighbors":["yokohama"]},
 maebashi:{"name":"前橋","pref":10,"x":587,"y":605,"neighbors":["takasaki","ota"]},
 ota:{"name":"太田","pref":10,"x":604,"y":616,"neighbors":["maebashi","kumagaya","ashikaga"]},
 ashikaga:{"name":"足利","pref":9,"x":610,"y":610,"neighbors":["ota","sano","takasaki"]},
 sano:{"name":"佐野","pref":9,"x":619,"y":612,"neighbors":["ashikaga","oyama"]},
 oyama:{"name":"小山","pref":9,"x":628,"y":611,"neighbors":["sano","utsunomiya","koga"]},
 nikko:{"name":"日光","pref":9,"x":615,"y":579,"neighbors":["utsunomiya"]},
 tsuchiura:{"name":"土浦","pref":8,"x":660,"y":631,"neighbors":["tsukuba","mito","kashima"]},
 hitachi:{"name":"日立","pref":8,"x":667,"y":590,"neighbors":["mito"]},
 kashima:{"name":"鹿嶋","pref":8,"x":679.5,"y":647.3,"neighbors":["tsuchiura","mito","narita"]},
 tokorozawa:{"name":"所沢","pref":11,"x":600,"y":644.8,"neighbors":["kawagoe","tachikawa","ikebukuro"]},
 kasukabe:{"name":"春日部","pref":11,"x":622,"y":635,"neighbors":["omiya","koga","kashiwa"]},
 funabashi:{"name":"船橋","pref":12,"x":648,"y":659,"neighbors":["ichikawa","chiba","kashiwa"]},
 matsudo:{"name":"松戸","pref":12,"x":635,"y":651,"neighbors":["kashiwa","ichikawa","otemachi"]},
 tateyama:{"name":"館山","pref":12,"x":634,"y":701.5,"neighbors":["kisarazu","chiba"]},
 machida:{"name":"町田","pref":13,"x":604,"y":659.5,"neighbors":["sagamihara","fuchu","kawasaki"]},
 fuchu:{"name":"府中","pref":13,"x":609,"y":654,"neighbors":["tachikawa","shinjuku","machida"]},
};

/* --- CITY_HOME --- */
const CITY_HOME={"16":"toyama","17":"kanazawa","18":"fukui","24":"tsu","25":"otsu","21":"kani","23":"nagoya","22":"shizuoka","20":"nagano","19":"kofu","14":"yokohama","13":"shinjuku","11":"omiya","12":"chiba","10":"takasaki","9":"utsunomiya","8":"tsukuba"};

/* --- CITY_MAJOR --- */
const CITY_MAJOR=new Set(["kani","nagoya","hamamatsu","shizuoka","kofu","matsumoto","nagano","takasaki","odawara","hachioji","yokohama","shinjuku","chiba","otemachi"]);

/* --- SUPPLY_HUBS --- */
const SUPPLY_HUBS={
 kani:{name:'帝都総兵站本部'},nagoya:{name:'中京補給本部'},hamamatsu:{name:'東海道補給基地'},matsumoto:{name:'中央山岳補給基地'},kanazawa:{name:'北陸補給本部'},tsu:{name:'伊勢湾補給基地'},
 yokohama:{name:'横浜港補給基地'},otemachi:{name:'首都補給本部'},omiya:{name:'関東鉄道補給基地'},takasaki:{name:'北関東補給基地'},utsunomiya:{name:'北部補給本部'},mito:{name:'常磐補給基地'},chiba:{name:'東京湾補給基地'}
};

/* --- FRONT_PREFS --- */
const FRONT_PREFS=[...new Set(Object.values(CITY_DATA).map(c=>c.pref))];

/* --- unitDefs --- */
const unitDefs=[
 {id:"east",spec:"inf",type:"regular",name:"東部方面軍",cmd:"田原颯太",pref:19,str:200000,role:"対関東主力",x:72,y:51},
 {id:"west",spec:"inf",type:"regular",name:"西部方面軍",cmd:"川合宏明",pref:25,str:170000,role:"対関西主力",x:43,y:61},
 {id:"north",spec:"inf",type:"regular",name:"北部方面軍",cmd:"帝国軍司令官",pref:20,str:90000,role:"北部警戒",x:61,y:33},
 {id:"central",spec:"inf",type:"regular",name:"中央軍",cmd:"帝国軍司令部",pref:21,str:140000,role:"帝国中枢防衛",x:51,y:49},
 {id:"reserve",spec:"inf",type:"regular",name:"戦略予備軍",cmd:"総帥府直属",pref:23,str:100000,role:"機動予備",x:57,y:63},
 {id:"g1",spec:"inf",type:"guard",name:"親衛第1軍",cmd:"宮地大輝",pref:21,str:25000,role:"総帥直属",x:46,y:44},
 {id:"g2",spec:"inf",type:"guard",name:"親衛第2軍",cmd:"大島義人",pref:19,str:18000,role:"強襲・突破",x:77,y:57},
 {id:"g3",spec:"inf",type:"guard",name:"親衛第3軍",cmd:"宮地祥平",pref:22,str:16000,role:"戦術・包囲",x:67,y:67},
 {id:"g4",spec:"inf",type:"guard",name:"親衛第4軍",cmd:"内山裕太",pref:25,str:20000,role:"重火力",x:38,y:67}
];

/* --- WAR_DATA --- */
const WAR_DATA={
  8:{bases:["古河","つくば","土浦","水戸"],enemy:[42000,48000,52000,58000]},
  9:{bases:["足利","小山","宇都宮","那須"],enemy:[38000,45000,54000,42000]},
 10:{bases:["高崎","前橋","太田","沼田"],enemy:[40000,47000,43000,39000]},
 11:{bases:["秩父","川越","大宮","熊谷"],enemy:[45000,52000,61000,48000]},
 12:{bases:["市川","船橋","千葉","木更津"],enemy:[48000,55000,65000,50000]},
 13:{bases:["八王子","新宿","霞ヶ関","湾岸司令部"],enemy:[65000,82000,98000,76000]},
 14:{bases:["相模原","厚木","横浜","横須賀"],enemy:[52000,43000,52000,48000]},
 15:{bases:["上越","長岡","新潟","新発田"],enemy:[32000,38000,46000,35000]},
 26:{bases:["舞鶴","福知山","京都","宇治"],enemy:[45000,50000,72000,48000]},
 27:{bases:["高槻","大阪","堺","湾岸軍港"],enemy:[60000,85000,68000,62000]},
 29:{bases:["奈良","橿原","生駒"],enemy:[42000,39000,45000]},
 30:{bases:["橋本","和歌山","田辺"],enemy:[36000,44000,35000]}
};

/* --- ADJ --- */
const ADJ={
  8:[7,9,10,11,12],9:[8,10,11,20],10:[8,9,11,15,20],11:[8,9,10,12,13,19,20],
  12:[8,11,13],13:[11,12,14,19],14:[13,19,22],15:[6,10,16,20],
  16:[15,17,20,21],17:[16,18,21],18:[17,21,25,26],19:[11,13,14,20,22,23],
  20:[9,10,11,15,16,19,21,22,23],21:[16,17,18,20,23,24,25],22:[19,20,23],
  23:[19,20,21,22,24],24:[21,23,25,29,30],25:[18,21,24,26,29],26:[18,25,27,28,29],
  27:[26,28,29,30],28:[26,27,31,33],29:[24,25,26,27,30],30:[24,27,29]
};

/* --- character masters --- */
const V223_ORIGINAL_PEOPLE=[
 ["miyachi","宮地大輝","guard",[98,72,92,97,95,87,78,89]],
 ["oshima","大島義人","guard",[89,99,67,38,43,55,51,73]],
 ["shohei","宮地祥平","guard",[79,68,97,82,83,68,88,81]],
 ["uchiyama","内山裕太","guard",[82,96,60,43,48,42,38,70]],
 ["hiramatsu","平松優登","guard",[66,61,89,80,72,96,97,68]],
 ["kojima_m","小嶋将貴","guard",[80,84,72,57,55,58,60,76]],
 ["itabashi","板橋凌夢","guard",[77,85,69,54,52,57,62,74]],
 ["mori_h","森遥月","guard",[72,87,85,51,58,60,96,71]],
 ["usui","臼井純","guard",[75,78,82,68,71,65,70,82]],
 ["mikoto","鈴木美琴","guard",[83,80,75,76,79,65,70,93]],
 ["yamaguchi","山口琢","guard",[79,84,73,60,61,62,69,77]],
 ["kojima_r","小嶋里奈","guard",[72,70,78,84,86,80,77,73]],
 ["tanaka","田中和志","guard",[81,83,68,59,60,55,58,83]],
 ["miyu","横地みゆ","guard",[73,74,86,79,80,83,85,70]],
 ["hibino","日比野凌","guard",[79,85,73,57,58,59,64,77]],
 ["asano","浅野悠太","guard",[77,82,77,66,64,62,70,79]],
 ["moriyama","森山美咲","guard",[72,86,87,71,70,68,81,72]],
 ["marino","まりの","guard",[68,69,78,82,84,85,77,65]],
 ["chanchi","ちゃんちー","guard",[70,72,79,80,82,78,76,69]],
 ["kyohei","恭平","guard",[79,86,70,56,58,60,62,78]],
 ["tahara","田原颯太","regular",[95,76,90,75,72,64,66,98]],
 ["kawai","川合宏明","regular",[87,94,71,53,55,48,62,86]],
 ["morita","森田光","regular",[78,79,81,61,64,59,74,73]],
 ["nagase","長瀬ひろと","regular",[79,80,75,57,60,58,68,76]],
 ["ogawa","小川かずま","regular",[76,77,79,67,69,62,71,78]],
 ["sakakibara","榊原とおる","regular",[80,78,83,63,65,61,76,81]],
 ["yamauchi","山内裕太","regular",[82,82,72,56,58,55,63,77]],
 ["hiroya","ひろや","regular",[80,98,59,42,48,40,44,71]]
];
const V223_ORIGINAL_DETAILS={
 miyachi:["親衛隊総隊長・1番隊隊長／帝国総帥","全軍統合","指揮と国家運営で真価を発揮。",{attack:1.65,loss:0.65}],
 oshima:["親衛隊2番隊隊長","最強の個人戦闘","ワルサーとメリケンサック。純粋な個人戦闘力は宮地を上回る。",{attack:2}],
 shohei:["親衛隊3番隊隊長","参謀・知略","巨大な鉄線。軍事計画と情報分野にも適性。",{attack:1.45,loss:0.5}],
 uchiyama:["親衛隊4番隊隊長","重火力制圧","二丁ガトリングによる前線制圧。",{attack:1.4,enemyDamage:0.24}],
 hiramatsu:["親衛隊5番隊隊長","交渉・潜入","外交と諜報の双方で力を発揮。",{attack:1.25,enemyDamage:0.22}],
 kojima_m:["親衛隊6番隊隊長","機動突破","先行部隊の強襲。",{attack:1.5}],
 itabashi:["親衛隊7番隊隊長","守勢反撃","被害を抑え反撃へ転じる。",{attack:1.2,loss:0.55}],
 mori_h:["親衛隊8番隊隊長","観測・偵察","狙撃と観測で敵の弱点を見抜く。",{attack:1.35,enemyDamage:0.18}],
 usui:["親衛隊9番隊隊長","堅陣","前線の損害を抑える。",{loss:0.45}],
 mikoto:["親衛隊10番隊隊長","槍・前線支援","補給と前線支援にも力を発揮。",{attack:1.2,loss:0.45}],
 yamaguchi:["親衛隊11番隊隊長","強襲支援","部隊の突破を支える。",{attack:1.4}],
 kojima_r:["親衛隊12番隊隊長","戦線維持","味方の被害を抑える。",{loss:0.5}],
 tanaka:["親衛隊13番隊隊長","突撃指揮","敵防衛線を突き崩す。",{attack:1.45}],
 miyu:["親衛隊14番隊隊長","攪乱工作","敵の戦力を削る。",{enemyDamage:0.22}],
 hibino:["親衛隊15番隊隊長","連続攻撃","前線の火力を引き上げる。",{attack:1.4}],
 asano:["親衛隊16番隊隊長","戦術機動","攻撃と被害抑制を両立。",{attack:1.25,loss:0.7}],
 moriyama:["親衛隊17番隊隊長","MIRROR","敵の戦闘技術を模した反撃。制度上の権限はコピー不可。",{attack:1.6}],
 marino:["親衛隊18番隊隊長","支援統制","補給路を保ち味方の被害を抑える。",{loss:0.55}],
 chanchi:["親衛隊19番隊隊長","陽動","敵部隊を攪乱する。",{enemyDamage:0.2}],
 kyohei:["親衛隊20番隊隊長","決死突撃","敵陣へ鋭く切り込む。",{attack:1.55}],
 tahara:["帝国軍大将／旧田原隊","大兵団指揮","10万～20万人規模の兵団運用と兵站に優れる。",{attack:1.55,loss:0.6}],
 kawai:["帝国軍／旧田原隊","前線突破","田原を支える前線・直接戦闘型。",{attack:1.8}],
 morita:["帝国軍／旧田原隊","田原隊古参","森田光（ひかる）。",{attack:1.3,loss:0.8}],
 nagase:["帝国軍／旧田原隊","機動戦","敵の側面を突く。",{attack:1.4}],
 ogawa:["帝国軍／旧田原隊","補給確保","損害を抑えつつ戦線を進める。",{loss:0.55}],
 sakakibara:["帝国軍／旧田原隊","戦術解析","敵の守りを読み解く。",{attack:1.3,enemyDamage:0.14}],
 yamauchi:["帝国軍／旧田原隊","前線維持","内山裕太とは別人。兵站を守る。",{loss:0.6}],
 hiroya:["帝国軍／宮地勢古参","破城槌","巨大な斧。腕力は義人以上。",{attack:1.9}]
};

const V223_ORIGINAL_COMMANDERS=[
 {id:'white_wolf',name:'ホワイトウルフ',faction:'北海道帝国',stats:[97,96,82,61,58,70,75,94],skill:{attack:1.85,loss:.62},skillName:'ホワイトウルフ隊',home:'sapporo'},
 {id:'sendai_cmd',name:'仙台鎮守府司令',faction:'東北共和国',stats:[91,82,80,72,77,73,68,91],skill:{attack:1.28,loss:.66},skillName:'仙台鉄壁防衛',home:'sendai'},
 {id:'kanto_cmd',name:'関東統合軍司令',faction:'関東連邦',stats:[88,85,80,86,82,78,85,90],skill:{attack:1.35,loss:.82},skillName:'統合物量作戦',home:'otemachi',central:true},
 {id:'osaka_cmd',name:'大阪総司令',faction:'関西連合',stats:[91,88,77,80,76,75,73,92],skill:{attack:1.48,loss:.78},skillName:'関西総攻撃',home:'osaka',central:true},
 {id:'kyoto_guard',name:'京都守護',faction:'関西連合',stats:[94,77,72,68,83,74,70,87],skill:{attack:1.20,loss:.55},skillName:'御所防衛陣',home:'kyoto'},
 {id:'kobe_mobile',name:'神戸機動軍司令',faction:'関西連合',stats:[83,93,79,72,67,68,74,86],skill:{attack:1.62,loss:.84},skillName:'阪神高速機動',home:'kobe'},
 {id:'kishu_cmd',name:'紀州軍団長',faction:'関西連合',stats:[86,89,75,62,66,65,61,88],skill:{attack:1.50,loss:.80},skillName:'紀伊山地突破',home:'wakayama'},
 {id:'hiroshima_cmd',name:'広島防衛司令',faction:'中国',stats:[90,84,75,82,86,77,80,93],skill:{attack:1.34,loss:.68},skillName:'山陽士気統制',home:'hiroshima',central:true},
 {id:'shikoku_mask',name:'仮面の統領',faction:'死国',stats:[95,92,90,88,88,90,92,99],skill:{attack:1.72,loss:.58},skillName:'正体不明',home:'kochi',central:true},
 {id:'kyushu_king',name:'九州王',faction:'九州王国',stats:[92,84,83,91,88,85,82,96],skill:{attack:1.42,loss:.76},skillName:'王命・総進撃',home:'fukuoka',central:true},
 {id:'satsuma_cmd',name:'薩摩猛将',faction:'九州王国',stats:[83,97,72,54,60,58,66,91],skill:{attack:1.78,loss:.82},skillName:'薩摩隼人',home:'kagoshima'},
 {id:'kumamoto_cmd',name:'熊本城将',faction:'九州王国',stats:[96,79,76,66,73,68,64,89],skill:{attack:1.24,loss:.52},skillName:'熊本城不落',home:'kumamoto'},
 {id:'hakata_cmd',name:'博多海将',faction:'九州王国',stats:[84,90,88,77,74,76,83,87],skill:{attack:1.55,loss:.78},skillName:'玄界灘強襲',home:'kitakyushu'},
 {id:'ryukyu_link',name:'琉球連絡総監',faction:'沖縄諸国',stats:[78,68,92,87,90,86,96,84],skill:{attack:1.22,loss:.72},skillName:'島嶼連絡網',home:'naha',central:true}
];
// Ver.2.32: six abilities are authoritative. EX is a rule capability, never 101.
const V223_STATS=['統率','武勇','知略','政治','兵站','産業'];
const V223_APT=['歩兵','機甲','機動','航空','特殊'];
const V223_ROSTER=[];
function v223Character(id,name,faction,stats,apt,trait,description,extra={}){
 V223_ROSTER.push({id,name,faction,stats,apt:apt.split(''),trait,description,specialties:[],...extra});
}
v223Character('miyachi','宮地総帥','東海帝国',['EX',96,'EX','EX','EX','EX'],'SSSSS','統合作戦指揮','親衛隊・親衛軍・帝国軍約10万人を統合し、茨城県南部〜柏を攻略。点ではなく面を動かす国家戦略型。',{specialties:['戦局掌握','広域制圧']});
v223Character('miyachi_guard','宮地大輝','東海帝国',[100,100,97,87,96,88],'SASAS','全軍統合','親衛隊総隊長・1番隊隊長。直属親衛隊の指揮時に特殊戦力を統合。宮地3種類では純戦闘力が最高。',{guardNo:1,title:'宮地親衛隊総隊長／1番隊長',specialties:['直属統制','先陣突入'],legacyId:'miyachi'});
v223Character('miyachi_colonel','宮地大佐','東海帝国',[96,95,95,87,98,90],'ASSAS','即応指揮','前線で組織力を保ち、通常戦争の機動と連続戦闘に優れる。',{specialties:['機動戦','兵站確保']});
v223Character('oshima','大島義人','東海帝国',[100,'EX',100,100,100,100],'SASAS','最強の個人戦闘','ワルサーとメリケンサック。純粋な個人戦闘力は宮地を上回る。親衛隊2番隊隊長。単身で東京の一拠点を壊滅。武勇以外も通常能力の最高値だが、武勇だけが通常ルールを越える。',{guardNo:2,specialties:['強者制圧','不落']});
const V223_GUARD_DESIGNS=[
 [3,'作戦看破',[94,94,99,79,90,80],'SABAS','逆算包囲','包囲・特殊奇襲で敵組織力を追加低下。'],
 [4,'重火力',[89,99,87,65,86,94],'SABBS','火力集中','航空集中・消耗作戦で防衛度を追加破壊。'],
 [5,'外交情報',[88,92,97,99,86,84],'SBBAS','情報交渉','外交命令の成功条件を改善。'],
 [6,'機動突破',[94,96,90,69,98,78],'AASS S'.replace(/ /g,''),'追撃路確保','電撃戦の損害を軽減。'],
 [7,'防衛反撃',[96,96,92,72,88,77],'SABCS','守勢反撃','防衛時に敵組織力へ反撃。'],
 [8,'偵察観測',[88,94,98,73,90,76],'ABBAS','観測網','偵察時に敵作戦候補と補給状態を開示。'],
 [9,'守備統制',[99,95,87,77,95,80],'SBBBS','不動の陣','防衛時の自軍組織力低下を抑える。'],
 [10,'遠征兵站',[93,94,88,78,100,88],'SAABS','補給護衛','補給命令の有効期間を延長。'],
 [11,'都市強襲',[92,99,86,74,89,85],'SABCS','市街突破','都市強襲で敵防衛度を追加破壊。'],
 [12,'戦線維持',[96,94,92,98,95,91],'SBBAS','戦線維持','守備時に自軍組織力を維持し、味方の被害を抑える。'],
 [13,'突撃指揮',[96,96,90,71,92,90],'SASBS','突撃指揮','突破・歩兵突撃で敵防衛度を追加破壊。'],
 [14,'補給線工作',[88,93,98,78,94,81],'ABASS','後方攪乱','補給線攻撃の期間を延長。'],
 [15,'連続戦闘',[93,98,87,68,95,78],'SASBS','継戦統制','戦闘後の疲労を軽減。'],
 [16,'即応機動',[97,95,96,76,97,82],'AASS S'.replace(/ /g,''),'即応判断','機動命令の損害を軽減。'],
 [17,'情報反転',[96,96,100,90,94,89],'SAASS','MIRROR','奇襲・陽動・欺瞞を看破し、敵の作戦を次の味方作戦へ逆利用。'],
 [18,'支援統制',[94,93,92,91,100,96],'SABAS','支援統制','補給路を保ち味方の被害を抑える。緊急補給の期間を延長。'],
 [19,'陽動欺瞞',[90,94,99,85,91,80],'ABASS','偽装戦線','欺瞞による敵組織力低下を強化。'],
 [20,'決死突撃',[92,100,91,66,88,73],'SASCS','決死突撃','敵陣へ鋭く切り込む。突破成功時に防衛度を追加破壊。']
];
const V223_ORIGINAL_GUARDS=V223_ORIGINAL_PEOPLE.filter(p=>p[2]==='guard');
for(const [no,field,stats,apt,trait,description] of V223_GUARD_DESIGNS){
 const [id,name]=V223_ORIGINAL_GUARDS[no-1],d=V223_ORIGINAL_DETAILS[id];
 v223Character(id,name,'東海帝国',stats,apt,d[1],d[2]+' '+description,{guardNo:no,field,specialties:trait===d[1]?[]:[trait]});
}
for(const [id,name,stats,apt,trait,field] of [
 ['tahara','田原颯太',[96,89,92,85,97,89],'SAAAB','田原隊','大兵団指揮'],
 ['kawai','川合宏明',[90,97,86,76,89,79],'SAABB','田原隊','前線突破'],
 ['morita','森田光（ひかる）',[89,90,94,88,92,84],'AABAS','田原隊','田原隊古参'],
 ['nagase','長瀬ひろと',[90,92,89,78,95,80],'AASAB','田原隊','機動戦'],
 ['ogawa','小川かずま',[88,89,90,89,98,86],'ABABB','田原隊','補給確保'],
 ['sakakibara','榊原とおる',[91,90,96,84,93,88],'AABAS','田原隊','戦術解析'],
 ['furukawa','古川',[90,91,89,90,94,91],'SAABB','田原隊','戦線維持']
]){const d=V223_ORIGINAL_DETAILS[id];v223Character(id,name,'東海帝国',stats,apt,d?.[1]||field,(d?.[2]||'田原隊の一員。')+' 同一方面軍に3人以上で連携、指定の7人で田原隊集結。',{tag:'田原隊',field,specialties:['田原隊連携']});}
v223Character('yamauchi','山内裕太','東海帝国',[90,88,83,72,94,80],'SAABB','前線維持','帝国軍／旧田原隊。内山裕太とは別人。兵站を守る。',{tag:'旧田原隊',field:'前線維持'});
v223Character('hiroya','ひろや','東海帝国',[89,99,78,65,87,75],'SABCD','破城槌','巨大な斧。腕力は義人以上。武勇EXによる単騎拠点破壊とは別の、部隊を率いる突破型。');
v223Character('jo_0','女帝せりえ','女帝国',[95,91,96,99,92,95],'SABAS','女帝の統率','政治・外交と国家士気を担う。');
v223Character('jo_1','佐合','女帝国',[93,98,94,83,89,81],'SABAS','二丁拳銃','三賢者。特殊奇襲と対敵将戦を担当。',{tag:'三賢者'});
v223Character('jo_2','本田','女帝国',[95,97,89,87,93,86],'SAABS','鎌の突破','三賢者。前線突破・守備反撃を担当。',{tag:'三賢者'});
v223Character('jo_3','伊佐次','女帝国',[96,96,92,89,98,89],'SASBS','槍の統制','三賢者。連携指揮・遠征兵站を担当。',{tag:'三賢者'});
const V223_NATION_DESIGNS={
 white_wolf:[[99,100,96,84,97,89],'SABAS','白狼','雪国・山岳で強化。義人には勝てないが、一週間の進撃阻止が可能。'],
 sendai_cmd:[[92,91,90,85,96,88],'SABBB','仙台鉄壁防衛','仙台を中心とする寒冷地防衛。'],
 kanto_cmd:[[95,92,96,94,93,98],'ASSAS','統合物量作戦','関東の物量・経済・軍需を統合して運用。'],
 osaka_cmd:[[92,89,95,98,92,96],'SAASA','関西総攻撃','大阪から関西の軍を指揮し、滋賀奪還を目指す。'],
 kyoto_guard:[[94,86,85,83,89,82],'SBBBS','御所防衛陣','京都の守備と損害抑制に優れる。'],
 kobe_mobile:[[90,96,89,78,94,84],'AASAB','阪神高速機動','神戸・阪神方面の機動戦を担当。'],
 kishu_cmd:[[90,94,86,72,90,78],'SABAB','紀伊山地突破','紀伊の山岳戦と突破に優れる。'],
 hiroshima_cmd:[[91,88,92,93,95,94],'SAABA','山陽士気統制','広島の防衛・士気と山陽の兵站を支える。'],
 shikoku_mask:[[95,94,96,91,96,94],'SABAS','正体不明','正体不明の死国統領。特殊防衛と国家運営を担う。'],
 kyushu_king:[[95,96,91,94,94,92],'SSABB','王命・総進撃','九州王の命令で諸軍を統合し積極攻勢を行う。'],
 satsuma_cmd:[[88,99,82,65,86,74],'SASBC','薩摩隼人','薩摩の猛将。前線で鋭い突撃を行う。'],
 kumamoto_cmd:[[97,87,88,77,91,84],'SBBBS','熊本城不落','熊本城を守り、守備組織と防衛線を維持する。'],
 hakata_cmd:[[89,94,96,87,95,87],'ABASB','玄界灘強襲','博多と玄界灘の海上強襲を指揮。'],
 ryukyu_link:[[88,89,94,94,99,86],'ABASA','島嶼連絡網','琉球諸島の連絡・輸送・外交に優れる。']
};
for(const h of V223_ORIGINAL_COMMANDERS){const [stats,apt,trait,description]=V223_NATION_DESIGNS[h.id];v223Character(h.id,h.name,h.faction,stats,apt,trait,description,{home:h.home,nationLeader:!!h.central||h.id==='white_wolf'||h.id==='sendai_cmd',legacyTrait:h.skillName,legacySkill:h.skill,specialties:h.id==='white_wolf'?['狼の足止め']:[]});}
for(const p of V223_ROSTER){const d=V223_ORIGINAL_DETAILS[p.legacyId||p.id];if(d){p.legacyTrait=d[1];p.legacyDescription=d[2];p.legacySkill=d[3];p.legacyTitle=d[0];p.originalName=V223_ORIGINAL_PEOPLE.find(q=>q[0]===(p.legacyId||p.id))?.[1];}}
const PEOPLE=V223_ROSTER.filter(p=>p.faction==='東海帝国').map(p=>[p.id,p.name,p.guardNo?'guard':'regular',p.stats.map(v=>v==='EX'?100:v).slice(0,4).concat([p.stats[3]==='EX'?100:p.stats[3],p.stats[3]==='EX'?100:p.stats[3],p.stats[2]==='EX'?100:p.stats[2],p.stats[4]==='EX'?100:p.stats[4]])]);
const PERSON_DETAILS=Object.fromEntries(V223_ROSTER.map(p=>[p.id,[p.title||p.legacyTitle||(p.guardNo?'親衛隊'+p.guardNo+'番隊長':p.field||p.faction),p.trait,p.description,p.legacySkill||{}]]));

const ENEMY_UNIQUES=[
 ["セリエ","女帝国元首","指導・外交","新潟に独立した女帝国の指導者。東海帝国と正式同盟。",[91,75,90,93,88,95,84,78]],
 ["佐合","女帝国三賢者","能力調整中","旧三天王の一人。",[84,86,78,73,72,76,70,74]],
 ["本田","女帝国三賢者","能力調整中","旧三天王の一人。",[82,84,80,75,74,75,73,76]],
 ["伊佐次","女帝国三賢者","能力調整中","旧三天王の一人。",[83,85,79,72,75,74,72,77]]
];
function personDetails(p){
 return PERSON_DETAILS[p[0]]||[p[2]==="guard"?"親衛隊"+(PEOPLE.findIndex(x=>x[0]===p[0])+1)+"番隊隊長":"帝国軍","固有能力調整中","個別設定に合わせて今後更新。"];
}
const SKILLS=["統率","戦闘","知略","政治","統治","外交","諜報","兵站"];
const ROLE_LABEL={central:"国家中枢",army:"軍事",governor:"県知事・総督",domestic:"内政",diplomacy:"外交",intel:"諜報"};

/* --- TERRAIN_FRONT --- */
const TERRAIN_FRONT={odawara:{name:'箱根の隘路',def:1.35},kofu:{name:'甲府盆地',def:1.24},hachioji:{name:'丘陵地帯',def:1.22},yokohama:{name:'港湾市街',def:1.25},otemachi:{name:'中枢防衛区',def:1.32}};

/* --- TACTICS_FRONT --- */
const TACTICS_FRONT={assault:{name:'強襲突破',attack:1.18,loss:1.15,orders:1,note:'短期決戦。勝利すれば同じ週にもう一度進撃。'},encircle:{name:'包囲戦',attack:1.08,loss:.68,orders:2,note:'兵がいる味方の隣接都市が2か所必要。敵士気を削る。'},ambush:{name:'奇襲',attack:1.4,loss:.8,orders:2,note:'今週の偵察が必要。敵の攻勢を突く。'},hold:{name:'牽制・防御',attack:.68,loss:.42,orders:2,note:'攻略せず敵を消耗させる。守りながら増援を待つ。'}};

/* --- DEFENSE_PLANS --- */
const DEFENSE_PLANS={intercept:{name:'迎撃',detail:'敵を正面から受け止め、退却する敵にも反撃する。',power:1.04,loss:1,counter:1},fortress:{name:'堅守',detail:'地形を利用。守備力上昇、損害軽減。',power:1.32,loss:.67,counter:.67},raid:{name:'遊撃',detail:'敵を偵察済みなら側面を突く。守備力はやや低下。',power:.94,loss:.85,counter:1.5},withdraw:{name:'計画撤退',detail:'兵を温存して隣の味方都市へ退く。拠点は失う。',power:0,loss:.08,counter:0}};

/* --- KANSAI_CODES --- */
const KANSAI_CODES = [26, 27, 28, 29, 30];

/* --- MEGA_CITIES --- */
const MEGA_CITIES={osaka:{name:'大坂城・地下要塞',hp:100},kyoto:{name:'御所防衛陣地',hp:100},kobe:{name:'六甲山防衛線',hp:100},shinjuku:{name:'副都心地下網',hp:100},otemachi:{name:'首都中枢ブロック',hp:100},yokohama:{name:'港湾要塞エリア',hp:100}};

/* --- NATIONAL_ENEMY_FACTIONS --- */
const NATIONAL_ENEMY_FACTIONS=new Set(['北海道帝国','東北共和国','関東連邦','女帝国','関西連合','中国','死国','九州王国','沖縄諸国']);

/* --- GEO_CITY_COORDS --- */
const GEO_CITY_COORDS = {
  kani:{x:462.1,y:681.1}, // 可児
  gifu:{x:446.5,y:681.1}, // 岐阜
  ogaki:{x:439.0,y:685.3}, // 大垣
  tajimi:{x:465.7,y:687.0}, // 多治見
  nagoya:{x:453.6,y:697.5}, // 名古屋
  toyota:{x:466.8,y:703.7}, // 豊田
  okazaki:{x:467.7,y:711.8}, // 岡崎
  toyohashi:{x:479.2,y:723.5}, // 豊橋
  hamamatsu:{x:497.5,y:727.2}, // 浜松
  shizuoka:{x:531.8,y:710.3}, // 静岡
  numazu:{x:556.9,y:702.7}, // 沼津
  odawara:{x:571.6,y:691.2}, // 小田原
  nakatsugawa:{x:484.7,y:677.2}, // 中津川
  suwa:{x:516.9,y:642.2}, // 諏訪
  matsumoto:{x:509.5,y:629.4}, // 松本
  nagano:{x:521.0,y:602.9}, // 長野
  karuizawa:{x:541.8,y:622.2}, // 軽井沢
  kofu:{x:540.4,y:665.9}, // 甲府
  otsuki:{x:559.7,y:669.2}, // 大月
  hachioji:{x:579.7,y:665.2}, // 八王子
  tachikawa:{x:584.5,y:662.2}, // 立川
  atsugi:{x:582.4,y:679.6}, // 厚木
  takasaki:{x:563.1,y:623.4}, // 高崎
  kumagaya:{x:583.3,y:634.2}, // 熊谷
  kawagoe:{x:588.3,y:648.5}, // 川越
  omiya:{x:595.8,y:649.7}, // 大宮
  koga:{x:602.1,y:629.7}, // 古河
  utsunomiya:{x:607.4,y:607.7}, // 宇都宮
  tsukuba:{x:619.1,y:635.7}, // つくば
  mito:{x:640.1,y:617.9}, // 水戸
  kashiwa:{x:615.0,y:652.0}, // 柏
  ichikawa:{x:612.7,y:661.3}, // 市川
  chiba:{x:621.6,y:668.7}, // 千葉
  narita:{x:632.3,y:657.8}, // 成田
  kisarazu:{x:612.4,y:683.1}, // 木更津
  yokohama:{x:596.4,y:679.1}, // 横浜
  ikebukuro:{x:600.4,y:661.4}, // 池袋
  shinjuku:{x:599.8,y:663.5}, // 新宿
  shinagawa:{x:601.1,y:669.0}, // 品川
  otemachi:{x:602.4,y:663.5}, // 大手町
  minokamo:{x:459.7,y:680.2}, // 美濃加茂
  kakamigahara:{x:451.1,y:682.8}, // 各務原
  takayama:{x:471.9,y:635.5}, // 高山
  komaki:{x:453.8,y:690.6}, // 小牧
  kasugai:{x:457.1,y:693.3}, // 春日井
  fuji:{x:547.2,y:698.5}, // 富士
  atami:{x:567.8,y:702.7}, // 熱海
  fujiyoshida:{x:552.9,y:677.1}, // 富士吉田
  ueda:{x:523.9,y:618.8}, // 上田
  iida:{x:501.8,y:676.1}, // 飯田
  yokkaichi:{x:438.2,y:711.0}, // 四日市
  tsu:{x:431.9,y:726.7}, // 津
  ise:{x:442.8,y:741.4}, // 伊勢
  otsu:{x:398.6,y:706.9}, // 大津
  hikone:{x:419.7,y:690.7}, // 彦根
  nagahama:{x:420.6,y:684.0}, // 長浜
  tsuruga:{x:410.0,y:666.3}, // 敦賀
  echizen:{x:415.9,y:650.1}, // 越前
  fukui:{x:418.5,y:640.0}, // 福井
  komatsu:{x:430.1,y:618.1}, // 小松
  kanazawa:{x:441.2,y:608.4}, // 金沢
  nanao:{x:457.5,y:577.6}, // 七尾
  takaoka:{x:460.6,y:595.8}, // 高岡
  toyama:{x:470.3,y:599.5}, // 富山
  uozu:{x:480.5,y:591.1}, // 魚津
  sagamihara:{x:583.0,y:671.2}, // 相模原
  kawasaki:{x:599.9,y:673.8}, // 川崎
  hiratsuka:{x:581.8,y:686.6}, // 平塚
  yokosuka:{x:598.3,y:690.1}, // 横須賀
  maebashi:{x:566.2,y:619.1}, // 前橋
  ota:{x:582.3,y:625.4}, // 太田
  ashikaga:{x:585.3,y:621.6}, // 足利
  sano:{x:591.8,y:623.2}, // 佐野
  oyama:{x:603.2,y:623.2}, // 小山
  nikko:{x:598.0,y:597.0}, // 日光
  tsuchiura:{x:625.9,y:636.0}, // 土浦
  hitachi:{x:647.1,y:604.1}, // 日立
  kashima:{x:649.3,y:643.1}, // 鹿嶋
  tokorozawa:{x:587.5,y:656.5}, // 所沢
  kasukabe:{x:602.2,y:645.3}, // 春日部
  funabashi:{x:615.3,y:663.1}, // 船橋
  matsudo:{x:611.3,y:657.1}, // 松戸
  tateyama:{x:609.6,y:707.8}, // 館山
  machida:{x:586.1,y:673.0}, // 町田
  fuchu:{x:588.1,y:665.1}, // 府中
  kyoto:{x:393.5,y:707.4}, // 京都
  uji:{x:395.1,y:715.7}, // 宇治
  maizuru:{x:373.8,y:677.3}, // 舞鶴
  fukuchiyama:{x:360.5,y:688.9}, // 福知山
  takatsuki:{x:384.9,y:717.7}, // 高槻
  osaka:{x:378.7,y:727.4}, // 大阪
  sakai:{x:377.7,y:735.0}, // 堺
  amagasaki:{x:374.2,y:724.5}, // 尼崎
  kobe:{x:363.1,y:727.3}, // 神戸
  akashi:{x:352.3,y:728.2}, // 明石
  himeji:{x:336.3,y:719.2}, // 姫路
  nara:{x:394.7,y:728.3}, // 奈良
  ikoma:{x:389.1,y:727.9}, // 生駒
  kashihara:{x:394.0,y:739.5}, // 橿原
  wakayama:{x:360.8,y:757.8}, // 和歌山
  hashimoto:{x:383.7,y:752.4}, // 橋本
  tanabe:{x:371.7,y:789.8}, // 田辺
  okayama:{x:296.7,y:727.2}, // 岡山
  kurashiki:{x:288.9,y:731.7}, // 倉敷
  fukuyama:{x:265.5,y:735.7}, // 福山
  hiroshima:{x:217.4,y:742.0}, // 広島
  iwakuni:{x:203.9,y:753.8}, // 岩国
  yamaguchi:{x:164.2,y:753.0}, // 山口
  shimonoseki:{x:145.4,y:759.3}, // 下関
  tottori:{x:312.5,y:674.0}, // 鳥取
  yonago:{x:267.9,y:677.8}, // 米子
  matsue:{x:251.1,y:673.0}, // 松江
  izumo:{x:235.1,y:679.2}, // 出雲
  naruto:{x:330.7,y:759.4}, // 鳴門
  tokushima:{x:327.8,y:765.9}, // 徳島
  sakaide:{x:291.4,y:749.1}, // 坂出
  takamatsu:{x:301.2,y:747.5}, // 高松
  imabari:{x:243.8,y:763.0}, // 今治
  matsuyama:{x:231.2,y:777.3}, // 松山
  uwajima:{x:220.0,y:816.0}, // 宇和島
  kochi:{x:271.6,y:796.8}, // 高知
  shimanto:{x:239.3,y:832.0}, // 四万十
  kitakyushu:{x:130.1,y:768.7}, // 北九州
  fukuoka:{x:104.6,y:786.7}, // 福岡
  kurume:{x:110.4,y:803.4}, // 久留米
  tosu:{x:110.0,y:796.9}, // 鳥栖
  saga:{x:99.0,y:804.6}, // 佐賀
  sasebo:{x:66.8,y:808.4}, // 佐世保
  nagasaki:{x:75.1,y:836.1}, // 長崎
  nakatsu:{x:147.4,y:790.9}, // 中津
  oita:{x:168.0,y:812.2}, // 大分
  kumamoto:{x:116.5,y:837.3}, // 熊本
  yatsushiro:{x:110.4,y:855.8}, // 八代
  nobeoka:{x:169.4,y:853.7}, // 延岡
  miyazaki:{x:155.6,y:896.4}, // 宮崎
  kirishima:{x:115.8,y:904.0}, // 霧島
  kagoshima:{x:104.6,y:913.2}, // 鹿児島
  naha:{x:292.5,y:227.4}, // 那覇
  shirakawa:{x:623.0,y:570.1}, // 白河
  koriyama:{x:630.6,y:552.5}, // 郡山
  fukushima:{x:636.5,y:529.3}, // 福島
  iwaki:{x:657.5,y:574.9}, // いわき
  yonezawa:{x:616.7,y:518.8}, // 米沢
  yamagata:{x:627.7,y:497.5}, // 山形
  sendai:{x:654.6,y:495.5}, // 仙台
  ishinomaki:{x:675.9,y:484.7}, // 石巻
  ichinoseki:{x:665.0,y:452.0}, // 一関
  morioka:{x:666.4,y:402.3}, // 盛岡
  yokote:{x:634.8,y:428.6}, // 横手
  akita:{x:612.8,y:402.6}, // 秋田
  hirosaki:{x:629.9,y:344.9}, // 弘前
  aomori:{x:643.7,y:331.0}, // 青森
  hachinohe:{x:679.6,y:350.7}, // 八戸
  hakodate:{x:641.2,y:270.1}, // 函館
  oshamambe:{x:621.8,y:223.2}, // 長万部
  muroran:{x:652.1,y:233.9}, // 室蘭
  tomakomai:{x:685.1,y:211.0}, // 苫小牧
  sapporo:{x:666.8,y:187.8}, // 札幌
  otaru:{x:650.2,y:179.5}, // 小樽
  asahikawa:{x:713.6,y:142.0}, // 旭川
  nayoro:{x:718.1,y:104.2}, // 名寄
  wakkanai:{x:681.6,y:35.8}, // 稚内
  obihiro:{x:752.0,y:196.7}, // 帯広
  kushiro:{x:806.1,y:183.5}, // 釧路
  kitami:{x:784.4,y:139.9}, // 北見
  nemuro:{x:858.9,y:167.6}, // 根室
};

/* --- GEO_CITY_LAYER_COORDS --- */
const GEO_CITY_LAYER_COORDS = {
  kani:{x:489.37,y:672.03}, // 可児
  gifu:{x:474.21,y:672.03}, // 岐阜
  ogaki:{x:466.92,y:676.11}, // 大垣
  tajimi:{x:492.87,y:677.76}, // 多治見
  nagoya:{x:481.11,y:687.97}, // 名古屋
  toyota:{x:493.94,y:694.00}, // 豊田
  okazaki:{x:494.82,y:701.87}, // 岡崎
  toyohashi:{x:506.00,y:713.24}, // 豊橋
  hamamatsu:{x:523.78,y:716.84}, // 浜松
  shizuoka:{x:557.12,y:700.41}, // 静岡
  numazu:{x:581.52,y:693.02}, // 沼津
  odawara:{x:595.81,y:681.85}, // 小田原
  nakatsugawa:{x:511.34,y:668.24}, // 中津川
  suwa:{x:542.64,y:634.22}, // 諏訪
  matsumoto:{x:535.45,y:621.78}, // 松本
  nagano:{x:546.62,y:596.02}, // 長野
  karuizawa:{x:566.84,y:614.78}, // 軽井沢
  kofu:{x:565.48,y:657.25}, // 甲府
  otsuki:{x:584.24,y:660.46}, // 大月
  hachioji:{x:603.68,y:656.57}, // 八王子
  tachikawa:{x:608.35,y:653.66}, // 立川
  atsugi:{x:606.31,y:670.57}, // 厚木
  takasaki:{x:587.55,y:615.94}, // 高崎
  kumagaya:{x:607.18,y:626.44}, // 熊谷
  kawagoe:{x:612.04,y:640.34}, // 川越
  omiya:{x:619.33,y:641.51}, // 大宮
  koga:{x:625.45,y:622.07}, // 古河
  utsunomiya:{x:630.61,y:600.68}, // 宇都宮
  tsukuba:{x:641.98,y:627.90}, // つくば
  mito:{x:662.39,y:610.60}, // 水戸
  kashiwa:{x:637.99,y:643.74}, // 柏
  ichikawa:{x:635.76,y:652.78}, // 市川
  chiba:{x:644.41,y:659.98}, // 千葉
  narita:{x:654.81,y:649.38}, // 成田
  kisarazu:{x:635.47,y:673.97}, // 木更津
  yokohama:{x:619.91,y:670.08}, // 横浜
  ikebukuro:{x:623.80,y:652.88}, // 池袋
  shinjuku:{x:623.22,y:654.92}, // 新宿
  shinagawa:{x:624.48,y:660.27}, // 品川
  otemachi:{x:625.75,y:654.92}, // 大手町
  minokamo:{x:487.04,y:671.15}, // 美濃加茂
  kakamigahara:{x:478.68,y:673.68}, // 各務原
  takayama:{x:498.90,y:627.71}, // 高山
  komaki:{x:481.31,y:681.26}, // 小牧
  kasugai:{x:484.51,y:683.89}, // 春日井
  fuji:{x:572.09,y:688.94}, // 富士
  atami:{x:592.11,y:693.02}, // 熱海
  fujiyoshida:{x:577.63,y:668.14}, // 富士吉田
  ueda:{x:549.44,y:611.47}, // 上田
  iida:{x:527.96,y:667.17}, // 飯田
  yokkaichi:{x:466.14,y:701.09}, // 四日市
  tsu:{x:460.02,y:716.35}, // 津
  ise:{x:470.61,y:730.64}, // 伊勢
  otsu:{x:427.65,y:697.11}, // 大津
  hikone:{x:448.16,y:681.36}, // 彦根
  nagahama:{x:449.04,y:674.85}, // 長浜
  tsuruga:{x:438.73,y:657.64}, // 敦賀
  echizen:{x:444.47,y:641.90}, // 越前
  fukui:{x:446.99,y:632.08}, // 福井
  komatsu:{x:458.27,y:610.79}, // 小松
  kanazawa:{x:469.06,y:601.36}, // 金沢
  nanao:{x:484.90,y:571.43}, // 七尾
  takaoka:{x:487.92,y:589.12}, // 高岡
  toyama:{x:497.34,y:592.71}, // 富山
  uozu:{x:507.26,y:584.55}, // 魚津
  sagamihara:{x:606.89,y:662.41}, // 相模原
  kawasaki:{x:623.32,y:664.93}, // 川崎
  hiratsuka:{x:605.72,y:677.37}, // 平塚
  yokosuka:{x:621.76,y:680.78}, // 横須賀
  maebashi:{x:590.56,y:611.76}, // 前橋
  ota:{x:606.21,y:617.89}, // 太田
  ashikaga:{x:609.12,y:614.19}, // 足利
  sano:{x:615.44,y:615.75}, // 佐野
  oyama:{x:626.52,y:615.75}, // 小山
  nikko:{x:621.47,y:590.28}, // 日光
  tsuchiura:{x:648.59,y:628.19}, // 土浦
  hitachi:{x:669.19,y:597.18}, // 日立
  kashima:{x:671.33,y:635.09}, // 鹿嶋
  tokorozawa:{x:611.26,y:648.12}, // 所沢
  kasukabe:{x:625.55,y:637.23}, // 春日部
  funabashi:{x:638.28,y:654.53}, // 船橋
  matsudo:{x:634.40,y:648.70}, // 松戸
  tateyama:{x:632.74,y:697.98}, // 館山
  machida:{x:609.90,y:664.16}, // 町田
  fuchu:{x:611.85,y:656.48}, // 府中
  kyoto:{x:422.69,y:697.59}, // 京都
  uji:{x:424.25,y:705.66}, // 宇治
  maizuru:{x:403.55,y:668.34}, // 舞鶴
  fukuchiyama:{x:390.62,y:679.61}, // 福知山
  takatsuki:{x:414.34,y:707.60}, // 高槻
  osaka:{x:408.31,y:717.03}, // 大阪
  sakai:{x:407.34,y:724.42}, // 堺
  amagasaki:{x:403.94,y:714.21}, // 尼崎
  kobe:{x:393.15,y:716.94}, // 神戸
  akashi:{x:382.65,y:717.81}, // 明石
  himeji:{x:367.10,y:709.06}, // 姫路
  nara:{x:423.86,y:717.91}, // 奈良
  ikoma:{x:418.77,y:717.62}, // 生駒
  kashihara:{x:423.18,y:728.79}, // 橿原
  wakayama:{x:390.91,y:746.58}, // 和歌山
  hashimoto:{x:413.17,y:741.33}, // 橋本
  tanabe:{x:401.51,y:777.69}, // 田辺
  okayama:{x:328.61,y:716.84}, // 岡山
  kurashiki:{x:321.02,y:721.21}, // 倉敷
  fukuyama:{x:298.28,y:725.10}, // 福山
  hiroshima:{x:251.53,y:731.22}, // 広島
  iwakuni:{x:238.40,y:742.69}, // 岩国
  yamaguchi:{x:199.82,y:741.92}, // 山口
  shimonoseki:{x:181.54,y:748.04}, // 下関
  tottori:{x:343.96,y:665.13}, // 鳥取
  yonago:{x:300.61,y:668.82}, // 米子
  matsue:{x:284.28,y:664.16}, // 松江
  izumo:{x:268.73,y:670.18}, // 出雲
  naruto:{x:361.65,y:748.14}, // 鳴門
  tokushima:{x:358.83,y:754.45}, // 徳島
  sakaide:{x:323.45,y:738.12}, // 坂出
  takamatsu:{x:332.98,y:736.57}, // 高松
  imabari:{x:277.19,y:751.64}, // 今治
  matsuyama:{x:264.94,y:765.54}, // 松山
  uwajima:{x:254.05,y:803.15}, // 宇和島
  kochi:{x:304.21,y:784.49}, // 高知
  shimanto:{x:272.81,y:818.70}, // 四万十
  kitakyushu:{x:166.67,y:757.18}, // 北九州
  fukuoka:{x:141.88,y:774.67}, // 福岡
  kurume:{x:147.52,y:790.90}, // 久留米
  tosu:{x:147.13,y:784.59}, // 鳥栖
  saga:{x:136.44,y:792.07}, // 佐賀
  sasebo:{x:105.14,y:795.76}, // 佐世保
  nagasaki:{x:113.21,y:822.69}, // 長崎
  nakatsu:{x:183.49,y:778.75}, // 中津
  oita:{x:203.51,y:799.46}, // 大分
  kumamoto:{x:153.45,y:823.86}, // 熊本
  yatsushiro:{x:147.52,y:841.84}, // 八代
  nobeoka:{x:204.87,y:839.80}, // 延岡
  miyazaki:{x:191.46,y:881.30}, // 宮崎
  kirishima:{x:152.77,y:888.69}, // 霧島
  kagoshima:{x:141.88,y:897.63}, // 鹿児島
  naha:{x:324.52,y:231.03}, // 那覇
  shirakawa:{x:645.77,y:564.14}, // 白河
  koriyama:{x:653.16,y:547.03}, // 郡山
  fukushima:{x:658.89,y:524.48}, // 福島
  iwaki:{x:679.30,y:568.80}, // いわき
  yonezawa:{x:639.65,y:514.27}, // 米沢
  yamagata:{x:650.34,y:493.57}, // 山形
  sendai:{x:676.48,y:491.63}, // 仙台
  ishinomaki:{x:697.19,y:481.13}, // 石巻
  ichinoseki:{x:686.59,y:449.34}, // 一関
  morioka:{x:687.95,y:401.04}, // 盛岡
  yokote:{x:657.24,y:426.60}, // 横手
  akita:{x:635.85,y:401.33}, // 秋田
  hirosaki:{x:652.48,y:345.24}, // 弘前
  aomori:{x:665.89,y:331.73}, // 青森
  hachinohe:{x:700.78,y:350.88}, // 八戸
  hakodate:{x:663.46,y:272.54}, // 函館
  oshamambe:{x:644.60,y:226.95}, // 長万部
  muroran:{x:674.05,y:237.35}, // 室蘭
  tomakomai:{x:706.13,y:215.09}, // 苫小牧
  sapporo:{x:688.34,y:192.54}, // 札幌
  otaru:{x:672.21,y:184.47}, // 小樽
  asahikawa:{x:733.83,y:148.02}, // 旭川
  nayoro:{x:738.21,y:111.28}, // 名寄
  wakkanai:{x:702.73,y:44.80}, // 稚内
  obihiro:{x:771.16,y:201.19}, // 帯広
  kushiro:{x:823.74,y:188.36}, // 釧路
  kitami:{x:802.65,y:145.98}, // 北見
  nemuro:{x:875.06,y:172.91}, // 根室
};

/* --- V170_REGION_LABELS --- */
const V170_REGION_LABELS={all:'全国',north:'北部（北海道・東北）',east:'東部（関東・甲信越）',central:'中央（北陸・東海・近畿東部）',west:'西部（近畿・中国・四国）',kyushu:'九州・沖縄'};

/* --- V171_NEW_CITIES --- */
const V171_NEW_CITIES={
 niigata:{name:'新潟',pref:15,x:586.68,y:515.99,neighbors:['sanjo','nagaoka']},
 nagaoka:{name:'長岡',pref:15,x:577.60,y:545.46,neighbors:['joetsu','sanjo','niigata']},
 joetsu:{name:'上越',pref:15,x:547.46,y:564.20,neighbors:['toyama','nagaoka']},
 sanjo:{name:'三条',pref:15,x:583.01,y:533.55,neighbors:['nagaoka','niigata']}
};

/* --- CITY_ECONOMY_LIST --- */
const CITY_ECONOMY_LIST=[{"id":"kani","name":"可児","pref":21,"prefecture":"岐阜県","initialFaction":"東海帝国","economy":92,"production":99,"industry":98,"food":48,"logistics":94,"military":100,"strategic":91,"tier":"S","profile":"軍需中枢","weeklyFunds":4,"weeklyIndustry":3,"weeklyFood":1,"supplyCapacity":162000},{"id":"gifu","name":"岐阜","pref":21,"prefecture":"岐阜県","initialFaction":"東海帝国","economy":62,"production":64,"industry":65,"food":48,"logistics":52,"military":63,"strategic":59,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":103000},{"id":"ogaki","name":"大垣","pref":21,"prefecture":"岐阜県","initialFaction":"東海帝国","economy":48,"production":52,"industry":58,"food":43,"logistics":41,"military":39,"strategic":47,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"tajimi","name":"多治見","pref":21,"prefecture":"岐阜県","initialFaction":"東海帝国","economy":48,"production":40,"industry":43,"food":43,"logistics":41,"military":33,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"nagoya","name":"名古屋","pref":23,"prefecture":"愛知県","initialFaction":"東海帝国","economy":100,"production":95,"industry":96,"food":18,"logistics":100,"military":92,"strategic":90,"tier":"S","profile":"軍需中枢","weeklyFunds":4,"weeklyIndustry":3,"weeklyFood":0,"supplyCapacity":170000},{"id":"toyota","name":"豊田","pref":23,"prefecture":"愛知県","initialFaction":"東海帝国","economy":82,"production":96,"industry":100,"food":25,"logistics":86,"military":88,"strategic":82,"tier":"A","profile":"重工業中枢","weeklyFunds":3,"weeklyIndustry":3,"weeklyFood":1,"supplyCapacity":150000},{"id":"okazaki","name":"岡崎","pref":23,"prefecture":"愛知県","initialFaction":"東海帝国","economy":62,"production":64,"industry":71,"food":38,"logistics":52,"military":47,"strategic":58,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":103000},{"id":"toyohashi","name":"豊橋","pref":23,"prefecture":"愛知県","initialFaction":"東海帝国","economy":62,"production":67,"industry":68,"food":38,"logistics":67,"military":64,"strategic":62,"tier":"B","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":124000},{"id":"hamamatsu","name":"浜松","pref":22,"prefecture":"静岡県","initialFaction":"東海帝国","economy":79,"production":86,"industry":88,"food":33,"logistics":79,"military":81,"strategic":77,"tier":"A","profile":"工業都市","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":141000},{"id":"shizuoka","name":"静岡","pref":22,"prefecture":"静岡県","initialFaction":"東海帝国","economy":76,"production":71,"industry":73,"food":33,"logistics":75,"military":66,"strategic":69,"tier":"B","profile":"商業中枢","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":135000},{"id":"numazu","name":"沼津","pref":22,"prefecture":"静岡県","initialFaction":"東海帝国","economy":48,"production":49,"industry":53,"food":43,"logistics":51,"military":40,"strategic":48,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":101000},{"id":"odawara","name":"小田原","pref":14,"prefecture":"神奈川県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"nakatsugawa","name":"中津川","pref":21,"prefecture":"岐阜県","initialFaction":"東海帝国","economy":34,"production":30,"industry":32,"food":48,"logistics":31,"military":26,"strategic":33,"tier":"D","profile":"地方拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":73000},{"id":"suwa","name":"諏訪","pref":20,"prefecture":"長野県","initialFaction":"東海帝国","economy":48,"production":40,"industry":43,"food":43,"logistics":41,"military":33,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"matsumoto","name":"松本","pref":20,"prefecture":"長野県","initialFaction":"東海帝国","economy":62,"production":49,"industry":53,"food":54,"logistics":52,"military":40,"strategic":54,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":103000},{"id":"nagano","name":"長野","pref":20,"prefecture":"長野県","initialFaction":"東海帝国","economy":62,"production":49,"industry":53,"food":64,"logistics":52,"military":40,"strategic":55,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":103000},{"id":"karuizawa","name":"軽井沢","pref":20,"prefecture":"長野県","initialFaction":"東海帝国","economy":60,"production":40,"industry":43,"food":43,"logistics":45,"military":33,"strategic":47,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":93000},{"id":"kofu","name":"甲府","pref":19,"prefecture":"山梨県","initialFaction":"東海帝国","economy":64,"production":49,"industry":53,"food":56,"logistics":52,"military":40,"strategic":54,"tier":"C","profile":"地方拠点","weeklyFunds":3,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":103000},{"id":"otsuki","name":"大月","pref":19,"prefecture":"山梨県","initialFaction":"東海帝国","economy":34,"production":30,"industry":32,"food":48,"logistics":31,"military":26,"strategic":33,"tier":"D","profile":"地方拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":73000},{"id":"hachioji","name":"八王子","pref":13,"prefecture":"東京都","initialFaction":"関東連邦","economy":62,"production":40,"industry":45,"food":38,"logistics":48,"military":30,"strategic":48,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"tachikawa","name":"立川","pref":13,"prefecture":"東京都","initialFaction":"関東連邦","economy":62,"production":40,"industry":45,"food":38,"logistics":48,"military":30,"strategic":48,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"atsugi","name":"厚木","pref":14,"prefecture":"神奈川県","initialFaction":"関東連邦","economy":62,"production":40,"industry":45,"food":38,"logistics":48,"military":30,"strategic":48,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"takasaki","name":"高崎","pref":10,"prefecture":"群馬県","initialFaction":"関東連邦","economy":62,"production":41,"industry":45,"food":50,"logistics":58,"military":32,"strategic":51,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":111000},{"id":"kumagaya","name":"熊谷","pref":11,"prefecture":"埼玉県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"kawagoe","name":"川越","pref":11,"prefecture":"埼玉県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"omiya","name":"大宮","pref":11,"prefecture":"埼玉県","initialFaction":"関東連邦","economy":81,"production":54,"industry":55,"food":33,"logistics":77,"military":53,"strategic":65,"tier":"B","profile":"商業中枢","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":138000},{"id":"koga","name":"古河","pref":8,"prefecture":"茨城県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":61,"logistics":37,"military":23,"strategic":40,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"utsunomiya","name":"宇都宮","pref":9,"prefecture":"栃木県","initialFaction":"関東連邦","economy":62,"production":56,"industry":63,"food":54,"logistics":58,"military":40,"strategic":57,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":111000},{"id":"tsukuba","name":"つくば","pref":8,"prefecture":"茨城県","initialFaction":"関東連邦","economy":72,"production":63,"industry":70,"food":50,"logistics":66,"military":48,"strategic":64,"tier":"B","profile":"地方拠点","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":122000},{"id":"mito","name":"水戸","pref":8,"prefecture":"茨城県","initialFaction":"関東連邦","economy":62,"production":40,"industry":45,"food":56,"logistics":48,"military":30,"strategic":50,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"kashiwa","name":"柏","pref":12,"prefecture":"千葉県","initialFaction":"関東連邦","economy":62,"production":41,"industry":45,"food":38,"logistics":58,"military":32,"strategic":50,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":111000},{"id":"ichikawa","name":"市川","pref":12,"prefecture":"千葉県","initialFaction":"関東連邦","economy":62,"production":40,"industry":45,"food":38,"logistics":48,"military":30,"strategic":48,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"chiba","name":"千葉","pref":12,"prefecture":"千葉県","initialFaction":"関東連邦","economy":80,"production":72,"industry":77,"food":33,"logistics":77,"military":62,"strategic":71,"tier":"B","profile":"工業都市","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":138000},{"id":"narita","name":"成田","pref":12,"prefecture":"千葉県","initialFaction":"関東連邦","economy":58,"production":37,"industry":38,"food":40,"logistics":90,"military":35,"strategic":54,"tier":"C","profile":"広域物流拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":156000},{"id":"kisarazu","name":"木更津","pref":12,"prefecture":"千葉県","initialFaction":"関東連邦","economy":48,"production":32,"industry":35,"food":43,"logistics":47,"military":26,"strategic":41,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":96000},{"id":"yokohama","name":"横浜","pref":14,"prefecture":"神奈川県","initialFaction":"関東連邦","economy":96,"production":83,"industry":88,"food":12,"logistics":100,"military":72,"strategic":83,"tier":"A","profile":"経済・物流中枢","weeklyFunds":4,"weeklyIndustry":2,"weeklyFood":0,"supplyCapacity":170000},{"id":"ikebukuro","name":"池袋","pref":13,"prefecture":"東京都","initialFaction":"関東連邦","economy":95,"production":57,"industry":63,"food":29,"logistics":77,"military":44,"strategic":69,"tier":"B","profile":"商業中枢","weeklyFunds":4,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":138000},{"id":"shinjuku","name":"新宿","pref":13,"prefecture":"東京都","initialFaction":"関東連邦","economy":98,"production":62,"industry":63,"food":29,"logistics":77,"military":59,"strategic":72,"tier":"B","profile":"商業中枢","weeklyFunds":4,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":138000},{"id":"shinagawa","name":"品川","pref":13,"prefecture":"東京都","initialFaction":"関東連邦","economy":96,"production":58,"industry":63,"food":29,"logistics":84,"military":46,"strategic":71,"tier":"B","profile":"商業中枢","weeklyFunds":4,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":148000},{"id":"otemachi","name":"大手町","pref":13,"prefecture":"東京都","initialFaction":"関東連邦","economy":100,"production":52,"industry":50,"food":5,"logistics":100,"military":58,"strategic":72,"tier":"B","profile":"経済・物流中枢","weeklyFunds":4,"weeklyIndustry":1,"weeklyFood":0,"supplyCapacity":170000},{"id":"minokamo","name":"美濃加茂","pref":21,"prefecture":"岐阜県","initialFaction":"東海帝国","economy":48,"production":40,"industry":43,"food":43,"logistics":41,"military":33,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"kakamigahara","name":"各務原","pref":21,"prefecture":"岐阜県","initialFaction":"東海帝国","economy":58,"production":84,"industry":82,"food":40,"logistics":62,"military":90,"strategic":68,"tier":"B","profile":"軍需中枢","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":117000},{"id":"takayama","name":"高山","pref":21,"prefecture":"岐阜県","initialFaction":"東海帝国","economy":55,"production":40,"industry":43,"food":62,"logistics":42,"military":33,"strategic":47,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":89000},{"id":"komaki","name":"小牧","pref":23,"prefecture":"愛知県","initialFaction":"東海帝国","economy":62,"production":74,"industry":72,"food":36,"logistics":70,"military":78,"strategic":66,"tier":"B","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":128000},{"id":"kasugai","name":"春日井","pref":23,"prefecture":"愛知県","initialFaction":"東海帝国","economy":48,"production":50,"industry":55,"food":43,"logistics":41,"military":38,"strategic":46,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"fuji","name":"富士","pref":22,"prefecture":"静岡県","initialFaction":"東海帝国","economy":48,"production":56,"industry":63,"food":43,"logistics":41,"military":41,"strategic":49,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":87000},{"id":"atami","name":"熱海","pref":22,"prefecture":"静岡県","initialFaction":"東海帝国","economy":52,"production":30,"industry":32,"food":48,"logistics":40,"military":26,"strategic":40,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":86000},{"id":"fujiyoshida","name":"富士吉田","pref":19,"prefecture":"山梨県","initialFaction":"東海帝国","economy":34,"production":30,"industry":32,"food":48,"logistics":31,"military":26,"strategic":33,"tier":"D","profile":"地方拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":73000},{"id":"ueda","name":"上田","pref":20,"prefecture":"長野県","initialFaction":"東海帝国","economy":48,"production":40,"industry":43,"food":43,"logistics":41,"military":33,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"iida","name":"飯田","pref":20,"prefecture":"長野県","initialFaction":"東海帝国","economy":48,"production":40,"industry":43,"food":61,"logistics":41,"military":33,"strategic":44,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":87000},{"id":"yokkaichi","name":"四日市","pref":24,"prefecture":"三重県","initialFaction":"東海帝国","economy":62,"production":74,"industry":81,"food":38,"logistics":72,"military":56,"strategic":65,"tier":"B","profile":"工業都市","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":131000},{"id":"tsu","name":"津","pref":24,"prefecture":"三重県","initialFaction":"東海帝国","economy":62,"production":50,"industry":53,"food":38,"logistics":62,"military":42,"strategic":54,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":117000},{"id":"ise","name":"伊勢","pref":24,"prefecture":"三重県","initialFaction":"東海帝国","economy":34,"production":30,"industry":32,"food":62,"logistics":31,"military":26,"strategic":34,"tier":"D","profile":"農業・地域拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":73000},{"id":"otsu","name":"大津","pref":25,"prefecture":"滋賀県","initialFaction":"東海帝国","economy":62,"production":49,"industry":53,"food":38,"logistics":52,"military":40,"strategic":52,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":103000},{"id":"hikone","name":"彦根","pref":25,"prefecture":"滋賀県","initialFaction":"東海帝国","economy":48,"production":40,"industry":43,"food":43,"logistics":41,"military":33,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"nagahama","name":"長浜","pref":25,"prefecture":"滋賀県","initialFaction":"東海帝国","economy":48,"production":40,"industry":43,"food":43,"logistics":41,"military":33,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"tsuruga","name":"敦賀","pref":18,"prefecture":"福井県","initialFaction":"東海帝国","economy":48,"production":42,"industry":43,"food":43,"logistics":61,"military":38,"strategic":47,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":115000},{"id":"echizen","name":"越前","pref":18,"prefecture":"福井県","initialFaction":"東海帝国","economy":34,"production":42,"industry":47,"food":48,"logistics":31,"military":32,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":73000},{"id":"fukui","name":"福井","pref":18,"prefecture":"福井県","initialFaction":"東海帝国","economy":62,"production":57,"industry":63,"food":38,"logistics":52,"military":44,"strategic":55,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":103000},{"id":"komatsu","name":"小松","pref":17,"prefecture":"石川県","initialFaction":"東海帝国","economy":48,"production":56,"industry":63,"food":43,"logistics":41,"military":41,"strategic":49,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":87000},{"id":"kanazawa","name":"金沢","pref":17,"prefecture":"石川県","initialFaction":"東海帝国","economy":81,"production":59,"industry":63,"food":33,"logistics":75,"military":50,"strategic":66,"tier":"B","profile":"商業中枢","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":135000},{"id":"nanao","name":"七尾","pref":17,"prefecture":"石川県","initialFaction":"東海帝国","economy":48,"production":40,"industry":43,"food":43,"logistics":41,"military":33,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"takaoka","name":"高岡","pref":16,"prefecture":"富山県","initialFaction":"東海帝国","economy":48,"production":52,"industry":57,"food":43,"logistics":41,"military":39,"strategic":47,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"toyama","name":"富山","pref":16,"prefecture":"富山県","initialFaction":"東海帝国","economy":62,"production":63,"industry":69,"food":38,"logistics":64,"military":49,"strategic":60,"tier":"B","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":120000},{"id":"uozu","name":"魚津","pref":16,"prefecture":"富山県","initialFaction":"東海帝国","economy":48,"production":40,"industry":43,"food":43,"logistics":41,"military":33,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":87000},{"id":"sagamihara","name":"相模原","pref":14,"prefecture":"神奈川県","initialFaction":"関東連邦","economy":62,"production":40,"industry":45,"food":38,"logistics":48,"military":30,"strategic":48,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"kawasaki","name":"川崎","pref":14,"prefecture":"神奈川県","initialFaction":"関東連邦","economy":80,"production":75,"industry":79,"food":33,"logistics":79,"military":67,"strategic":73,"tier":"B","profile":"工業都市","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":141000},{"id":"hiratsuka","name":"平塚","pref":14,"prefecture":"神奈川県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"yokosuka","name":"横須賀","pref":14,"prefecture":"神奈川県","initialFaction":"関東連邦","economy":55,"production":61,"industry":48,"food":28,"logistics":72,"military":90,"strategic":59,"tier":"C","profile":"軍需中枢","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":131000},{"id":"maebashi","name":"前橋","pref":10,"prefecture":"群馬県","initialFaction":"関東連邦","economy":62,"production":40,"industry":45,"food":52,"logistics":48,"military":30,"strategic":49,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"ota","name":"太田","pref":10,"prefecture":"群馬県","initialFaction":"関東連邦","economy":48,"production":50,"industry":57,"food":43,"logistics":37,"military":32,"strategic":45,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"ashikaga","name":"足利","pref":9,"prefecture":"栃木県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"sano","name":"佐野","pref":9,"prefecture":"栃木県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"oyama","name":"小山","pref":9,"prefecture":"栃木県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"nikko","name":"日光","pref":9,"prefecture":"栃木県","initialFaction":"関東連邦","economy":48,"production":22,"industry":24,"food":48,"logistics":38,"military":16,"strategic":35,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":83000},{"id":"tsuchiura","name":"土浦","pref":8,"prefecture":"茨城県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"hitachi","name":"日立","pref":8,"prefecture":"茨城県","initialFaction":"関東連邦","economy":48,"production":51,"industry":59,"food":43,"logistics":37,"military":33,"strategic":46,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"kashima","name":"鹿嶋","pref":8,"prefecture":"茨城県","initialFaction":"関東連邦","economy":48,"production":52,"industry":60,"food":43,"logistics":37,"military":33,"strategic":46,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"tokorozawa","name":"所沢","pref":11,"prefecture":"埼玉県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"kasukabe","name":"春日部","pref":11,"prefecture":"埼玉県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"funabashi","name":"船橋","pref":12,"prefecture":"千葉県","initialFaction":"関東連邦","economy":62,"production":40,"industry":45,"food":38,"logistics":48,"military":30,"strategic":48,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"matsudo","name":"松戸","pref":12,"prefecture":"千葉県","initialFaction":"関東連邦","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"tateyama","name":"館山","pref":12,"prefecture":"千葉県","initialFaction":"関東連邦","economy":34,"production":22,"industry":24,"food":48,"logistics":27,"military":16,"strategic":29,"tier":"D","profile":"地方拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":68000},{"id":"machida","name":"町田","pref":13,"prefecture":"東京都","initialFaction":"関東連邦","economy":62,"production":40,"industry":45,"food":38,"logistics":48,"military":30,"strategic":48,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"fuchu","name":"府中","pref":13,"prefecture":"東京都","initialFaction":"関東連邦","economy":52,"production":31,"industry":38,"food":48,"logistics":48,"military":16,"strategic":42,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"kyoto","name":"京都","pref":26,"prefecture":"京都府","initialFaction":"関西連合","economy":82,"production":50,"industry":55,"food":33,"logistics":69,"military":39,"strategic":61,"tier":"B","profile":"商業中枢","weeklyFunds":3,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":127000},{"id":"uji","name":"宇治","pref":26,"prefecture":"京都府","initialFaction":"関西連合","economy":44,"production":29,"industry":35,"food":48,"logistics":27,"military":16,"strategic":35,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":68000},{"id":"maizuru","name":"舞鶴","pref":26,"prefecture":"京都府","initialFaction":"関西連合","economy":48,"production":65,"industry":56,"food":38,"logistics":70,"military":85,"strategic":59,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":128000},{"id":"fukuchiyama","name":"福知山","pref":26,"prefecture":"京都府","initialFaction":"関西連合","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"takatsuki","name":"高槻","pref":27,"prefecture":"大阪府","initialFaction":"関西連合","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"osaka","name":"大阪","pref":27,"prefecture":"大阪府","initialFaction":"関西連合","economy":98,"production":76,"industry":82,"food":10,"logistics":100,"military":61,"strategic":80,"tier":"A","profile":"経済・物流中枢","weeklyFunds":4,"weeklyIndustry":2,"weeklyFood":0,"supplyCapacity":170000},{"id":"sakai","name":"堺","pref":27,"prefecture":"大阪府","initialFaction":"関西連合","economy":76,"production":67,"industry":75,"food":33,"logistics":73,"military":48,"strategic":67,"tier":"B","profile":"工業都市","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":132000},{"id":"amagasaki","name":"尼崎","pref":28,"prefecture":"兵庫県","initialFaction":"関西連合","economy":48,"production":50,"industry":57,"food":43,"logistics":49,"military":35,"strategic":48,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":99000},{"id":"kobe","name":"神戸","pref":28,"prefecture":"兵庫県","initialFaction":"関西連合","economy":81,"production":73,"industry":75,"food":33,"logistics":84,"military":69,"strategic":73,"tier":"B","profile":"工業都市","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":148000},{"id":"akashi","name":"明石","pref":28,"prefecture":"兵庫県","initialFaction":"関西連合","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"himeji","name":"姫路","pref":28,"prefecture":"兵庫県","initialFaction":"関西連合","economy":62,"production":58,"industry":65,"food":38,"logistics":64,"military":42,"strategic":58,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":120000},{"id":"nara","name":"奈良","pref":29,"prefecture":"奈良県","initialFaction":"関西連合","economy":62,"production":40,"industry":45,"food":50,"logistics":48,"military":30,"strategic":49,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"ikoma","name":"生駒","pref":29,"prefecture":"奈良県","initialFaction":"関西連合","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"kashihara","name":"橿原","pref":29,"prefecture":"奈良県","initialFaction":"関西連合","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"wakayama","name":"和歌山","pref":30,"prefecture":"和歌山県","initialFaction":"関西連合","economy":62,"production":53,"industry":59,"food":38,"logistics":58,"military":38,"strategic":54,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":111000},{"id":"hashimoto","name":"橋本","pref":30,"prefecture":"和歌山県","initialFaction":"関西連合","economy":40,"production":31,"industry":38,"food":50,"logistics":40,"military":16,"strategic":37,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":86000},{"id":"tanabe","name":"田辺","pref":30,"prefecture":"和歌山県","initialFaction":"関西連合","economy":42,"production":26,"industry":30,"food":62,"logistics":42,"military":16,"strategic":37,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":89000},{"id":"okayama","name":"岡山","pref":33,"prefecture":"岡山県","initialFaction":"中国","economy":80,"production":50,"industry":55,"food":53,"logistics":74,"military":40,"strategic":64,"tier":"B","profile":"商業中枢","weeklyFunds":3,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":134000},{"id":"kurashiki","name":"倉敷","pref":33,"prefecture":"岡山県","initialFaction":"中国","economy":48,"production":52,"industry":59,"food":43,"logistics":51,"military":36,"strategic":49,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":101000},{"id":"fukuyama","name":"福山","pref":34,"prefecture":"広島県","initialFaction":"中国","economy":48,"production":52,"industry":59,"food":43,"logistics":49,"military":36,"strategic":49,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":99000},{"id":"hiroshima","name":"広島","pref":34,"prefecture":"広島県","initialFaction":"中国","economy":81,"production":76,"industry":77,"food":33,"logistics":79,"military":73,"strategic":74,"tier":"B","profile":"工業都市","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":141000},{"id":"iwakuni","name":"岩国","pref":35,"prefecture":"山口県","initialFaction":"中国","economy":45,"production":63,"industry":55,"food":42,"logistics":62,"military":82,"strategic":56,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":117000},{"id":"yamaguchi","name":"山口","pref":35,"prefecture":"山口県","initialFaction":"中国","economy":48,"production":31,"industry":35,"food":61,"logistics":37,"military":23,"strategic":40,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"shimonoseki","name":"下関","pref":35,"prefecture":"山口県","initialFaction":"中国","economy":48,"production":38,"industry":35,"food":43,"logistics":61,"military":44,"strategic":46,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":115000},{"id":"tottori","name":"鳥取","pref":31,"prefecture":"鳥取県","initialFaction":"中国","economy":48,"production":31,"industry":35,"food":67,"logistics":37,"military":23,"strategic":41,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"yonago","name":"米子","pref":31,"prefecture":"鳥取県","initialFaction":"中国","economy":48,"production":31,"industry":35,"food":63,"logistics":37,"military":23,"strategic":40,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"matsue","name":"松江","pref":32,"prefecture":"島根県","initialFaction":"中国","economy":48,"production":31,"industry":35,"food":61,"logistics":37,"military":23,"strategic":40,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"izumo","name":"出雲","pref":32,"prefecture":"島根県","initialFaction":"中国","economy":48,"production":31,"industry":35,"food":65,"logistics":37,"military":23,"strategic":40,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"naruto","name":"鳴門","pref":36,"prefecture":"徳島県","initialFaction":"死国","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"tokushima","name":"徳島","pref":36,"prefecture":"徳島県","initialFaction":"死国","economy":48,"production":31,"industry":35,"food":61,"logistics":37,"military":23,"strategic":40,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"sakaide","name":"坂出","pref":37,"prefecture":"香川県","initialFaction":"死国","economy":48,"production":33,"industry":35,"food":43,"logistics":57,"military":28,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":110000},{"id":"takamatsu","name":"高松","pref":37,"prefecture":"香川県","initialFaction":"死国","economy":65,"production":42,"industry":45,"food":54,"logistics":63,"military":34,"strategic":54,"tier":"C","profile":"地方拠点","weeklyFunds":3,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":118000},{"id":"imabari","name":"今治","pref":38,"prefecture":"愛媛県","initialFaction":"死国","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"matsuyama","name":"松山","pref":38,"prefecture":"愛媛県","initialFaction":"死国","economy":65,"production":42,"industry":45,"food":54,"logistics":63,"military":34,"strategic":54,"tier":"C","profile":"地方拠点","weeklyFunds":3,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":118000},{"id":"uwajima","name":"宇和島","pref":38,"prefecture":"愛媛県","initialFaction":"死国","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"kochi","name":"高知","pref":39,"prefecture":"高知県","initialFaction":"死国","economy":62,"production":40,"industry":45,"food":62,"logistics":48,"military":30,"strategic":50,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":97000},{"id":"shimanto","name":"四万十","pref":39,"prefecture":"高知県","initialFaction":"死国","economy":34,"production":22,"industry":24,"food":82,"logistics":27,"military":16,"strategic":32,"tier":"D","profile":"食料生産拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":68000},{"id":"kitakyushu","name":"北九州","pref":40,"prefecture":"福岡県","initialFaction":"九州王国","economy":76,"production":78,"industry":81,"food":33,"logistics":84,"military":71,"strategic":74,"tier":"B","profile":"工業都市","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":148000},{"id":"fukuoka","name":"福岡","pref":40,"prefecture":"福岡県","initialFaction":"九州王国","economy":94,"production":66,"industry":70,"food":20,"logistics":98,"military":58,"strategic":76,"tier":"A","profile":"経済・物流中枢","weeklyFunds":4,"weeklyIndustry":2,"weeklyFood":0,"supplyCapacity":167000},{"id":"kurume","name":"久留米","pref":40,"prefecture":"福岡県","initialFaction":"九州王国","economy":62,"production":40,"industry":45,"food":66,"logistics":48,"military":30,"strategic":51,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":97000},{"id":"tosu","name":"鳥栖","pref":41,"prefecture":"佐賀県","initialFaction":"九州王国","economy":52,"production":39,"industry":42,"food":58,"logistics":82,"military":32,"strategic":53,"tier":"C","profile":"交通・港湾拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":145000},{"id":"saga","name":"佐賀","pref":41,"prefecture":"佐賀県","initialFaction":"九州王国","economy":48,"production":31,"industry":35,"food":73,"logistics":37,"military":23,"strategic":41,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"sasebo","name":"佐世保","pref":42,"prefecture":"長崎県","initialFaction":"九州王国","economy":55,"production":61,"industry":50,"food":42,"logistics":72,"military":88,"strategic":61,"tier":"B","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":131000},{"id":"nagasaki","name":"長崎","pref":42,"prefecture":"長崎県","initialFaction":"九州王国","economy":62,"production":47,"industry":45,"food":38,"logistics":64,"military":52,"strategic":54,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":120000},{"id":"nakatsu","name":"中津","pref":44,"prefecture":"大分県","initialFaction":"九州王国","economy":48,"production":31,"industry":35,"food":43,"logistics":37,"military":23,"strategic":38,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"oita","name":"大分","pref":44,"prefecture":"大分県","initialFaction":"九州王国","economy":62,"production":56,"industry":63,"food":56,"logistics":63,"military":41,"strategic":59,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":118000},{"id":"kumamoto","name":"熊本","pref":43,"prefecture":"熊本県","initialFaction":"九州王国","economy":79,"production":50,"industry":55,"food":61,"logistics":69,"military":39,"strategic":63,"tier":"B","profile":"商業中枢","weeklyFunds":3,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":127000},{"id":"yatsushiro","name":"八代","pref":43,"prefecture":"熊本県","initialFaction":"九州王国","economy":48,"production":31,"industry":35,"food":73,"logistics":37,"military":23,"strategic":41,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"nobeoka","name":"延岡","pref":45,"prefecture":"宮崎県","initialFaction":"九州王国","economy":48,"production":46,"industry":53,"food":67,"logistics":37,"military":30,"strategic":46,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"miyazaki","name":"宮崎","pref":45,"prefecture":"宮崎県","initialFaction":"九州王国","economy":62,"production":40,"industry":45,"food":72,"logistics":48,"military":30,"strategic":51,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":97000},{"id":"kirishima","name":"霧島","pref":46,"prefecture":"鹿児島県","initialFaction":"九州王国","economy":48,"production":31,"industry":35,"food":75,"logistics":37,"military":23,"strategic":42,"tier":"D","profile":"食料生産拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"kagoshima","name":"鹿児島","pref":46,"prefecture":"鹿児島県","initialFaction":"九州王国","economy":78,"production":51,"industry":55,"food":67,"logistics":77,"military":41,"strategic":65,"tier":"B","profile":"商業中枢","weeklyFunds":3,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":138000},{"id":"naha","name":"那覇","pref":47,"prefecture":"沖縄県","initialFaction":"沖縄諸国","economy":82,"production":60,"industry":55,"food":33,"logistics":81,"military":70,"strategic":68,"tier":"B","profile":"商業中枢","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":143000},{"id":"shirakawa","name":"白河","pref":7,"prefecture":"福島県","initialFaction":"東北共和国","economy":42,"production":33,"industry":40,"food":55,"logistics":42,"military":16,"strategic":39,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":89000},{"id":"koriyama","name":"郡山","pref":7,"prefecture":"福島県","initialFaction":"東北共和国","economy":62,"production":40,"industry":45,"food":56,"logistics":48,"military":30,"strategic":50,"tier":"C","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":97000},{"id":"fukushima","name":"福島","pref":7,"prefecture":"福島県","initialFaction":"東北共和国","economy":62,"production":40,"industry":45,"food":60,"logistics":48,"military":30,"strategic":50,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":97000},{"id":"iwaki","name":"いわき","pref":7,"prefecture":"福島県","initialFaction":"東北共和国","economy":48,"production":45,"industry":51,"food":43,"logistics":37,"military":30,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":82000},{"id":"yonezawa","name":"米沢","pref":6,"prefecture":"山形県","initialFaction":"東北共和国","economy":34,"production":22,"industry":24,"food":74,"logistics":27,"military":16,"strategic":31,"tier":"D","profile":"農業・地域拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":68000},{"id":"yamagata","name":"山形","pref":6,"prefecture":"山形県","initialFaction":"東北共和国","economy":48,"production":31,"industry":35,"food":73,"logistics":37,"military":23,"strategic":41,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"sendai","name":"仙台","pref":4,"prefecture":"宮城県","initialFaction":"東北共和国","economy":81,"production":65,"industry":63,"food":33,"logistics":77,"military":69,"strategic":69,"tier":"B","profile":"商業中枢","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":138000},{"id":"ishinomaki","name":"石巻","pref":4,"prefecture":"宮城県","initialFaction":"東北共和国","economy":48,"production":33,"industry":35,"food":43,"logistics":55,"military":28,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":107000},{"id":"ichinoseki","name":"一関","pref":3,"prefecture":"岩手県","initialFaction":"東北共和国","economy":48,"production":31,"industry":35,"food":67,"logistics":37,"military":23,"strategic":41,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"morioka","name":"盛岡","pref":3,"prefecture":"岩手県","initialFaction":"東北共和国","economy":62,"production":41,"industry":45,"food":64,"logistics":58,"military":32,"strategic":53,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":111000},{"id":"yokote","name":"横手","pref":5,"prefecture":"秋田県","initialFaction":"東北共和国","economy":48,"production":31,"industry":35,"food":77,"logistics":37,"military":23,"strategic":42,"tier":"D","profile":"食料生産拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"akita","name":"秋田","pref":5,"prefecture":"秋田県","initialFaction":"東北共和国","economy":62,"production":40,"industry":45,"food":66,"logistics":48,"military":30,"strategic":51,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":97000},{"id":"hirosaki","name":"弘前","pref":2,"prefecture":"青森県","initialFaction":"東北共和国","economy":48,"production":31,"industry":35,"food":75,"logistics":37,"military":23,"strategic":42,"tier":"D","profile":"食料生産拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":82000},{"id":"aomori","name":"青森","pref":2,"prefecture":"青森県","initialFaction":"東北共和国","economy":62,"production":49,"industry":45,"food":64,"logistics":66,"military":58,"strategic":58,"tier":"C","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":122000},{"id":"hachinohe","name":"八戸","pref":2,"prefecture":"青森県","initialFaction":"東北共和国","economy":48,"production":33,"industry":35,"food":61,"logistics":55,"military":28,"strategic":44,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":107000},{"id":"hakodate","name":"函館","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":62,"production":59,"industry":55,"food":38,"logistics":72,"military":68,"strategic":61,"tier":"B","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":131000},{"id":"oshamambe","name":"長万部","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":30,"production":20,"industry":22,"food":55,"logistics":55,"military":16,"strategic":33,"tier":"D","profile":"地方拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":107000},{"id":"muroran","name":"室蘭","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":52,"production":77,"industry":80,"food":45,"logistics":78,"military":70,"strategic":66,"tier":"B","profile":"工業都市","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":139000},{"id":"tomakomai","name":"苫小牧","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":58,"production":74,"industry":78,"food":48,"logistics":92,"military":65,"strategic":70,"tier":"B","profile":"広域物流拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":159000},{"id":"sapporo","name":"札幌","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":91,"production":65,"industry":62,"food":48,"logistics":88,"military":72,"strategic":76,"tier":"A","profile":"商業中枢","weeklyFunds":4,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":153000},{"id":"otaru","name":"小樽","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":48,"production":33,"industry":35,"food":43,"logistics":55,"military":28,"strategic":43,"tier":"D","profile":"地方拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":1,"supplyCapacity":107000},{"id":"asahikawa","name":"旭川","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":66,"production":60,"industry":52,"food":76,"logistics":62,"military":78,"strategic":64,"tier":"B","profile":"食料生産拠点","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":2,"supplyCapacity":117000},{"id":"nayoro","name":"名寄","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":34,"production":22,"industry":24,"food":76,"logistics":27,"military":16,"strategic":32,"tier":"D","profile":"食料生産拠点","weeklyFunds":1,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":68000},{"id":"wakkanai","name":"稚内","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":38,"production":26,"industry":25,"food":66,"logistics":48,"military":30,"strategic":38,"tier":"D","profile":"農業・地域拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":97000},{"id":"obihiro","name":"帯広","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":60,"production":46,"industry":50,"food":92,"logistics":68,"military":36,"strategic":59,"tier":"C","profile":"食料生産拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":125000},{"id":"kushiro","name":"釧路","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":60,"production":51,"industry":48,"food":72,"logistics":82,"military":58,"strategic":62,"tier":"B","profile":"交通・港湾拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":145000},{"id":"kitami","name":"北見","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":55,"production":42,"industry":45,"food":86,"logistics":58,"military":36,"strategic":53,"tier":"C","profile":"食料生産拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":111000},{"id":"nemuro","name":"根室","pref":1,"prefecture":"北海道","initialFaction":"北海道帝国","economy":40,"production":31,"industry":28,"food":86,"logistics":55,"military":38,"strategic":44,"tier":"D","profile":"食料生産拠点","weeklyFunds":2,"weeklyIndustry":1,"weeklyFood":2,"supplyCapacity":107000},{"id":"niigata","name":"新潟","pref":15,"prefecture":"新潟県","initialFaction":"女帝国","economy":84,"production":75,"industry":72,"food":58,"logistics":94,"military":76,"strategic":82,"tier":"A","profile":"女帝国首都・港湾中枢","weeklyFunds":4,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":162000},{"id":"nagaoka","name":"長岡","pref":15,"prefecture":"新潟県","initialFaction":"女帝国","economy":68,"production":78,"industry":82,"food":55,"logistics":72,"military":82,"strategic":76,"tier":"A","profile":"軍事・工業拠点","weeklyFunds":3,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":131000},{"id":"joetsu","name":"上越","pref":15,"prefecture":"新潟県","initialFaction":"女帝国","economy":59,"production":68,"industry":70,"food":48,"logistics":80,"military":63,"strategic":67,"tier":"B","profile":"西部国境・交通拠点","weeklyFunds":2,"weeklyIndustry":2,"weeklyFood":1,"supplyCapacity":142000},{"id":"sanjo","name":"三条","pref":15,"prefecture":"新潟県","initialFaction":"女帝国","economy":63,"production":84,"industry":88,"food":42,"logistics":68,"military":74,"strategic":70,"tier":"B","profile":"製造業・軍需生産拠点","weeklyFunds":2,"weeklyIndustry":3,"weeklyFood":1,"supplyCapacity":125000}];

/* --- CITY_ECONOMY --- */
const CITY_ECONOMY=Object.fromEntries(CITY_ECONOMY_LIST.map(x=>[x.id,x]));

/* --- V172_NEW_CITIES --- */
const V172_NEW_CITIES={
 murakami:{name:'村上',pref:15,x:606,y:493,neighbors:['niigata','tsuruoka']},
 yuzawa:{name:'湯沢',pref:15,x:589,y:574,neighbors:['nagaoka','takasaki']},
 sado:{name:'佐渡',pref:15,x:548,y:500,neighbors:['niigata']},
 tsuruoka:{name:'鶴岡',pref:6,x:622,y:469,neighbors:['murakami','yamagata']}
};

/* --- V172_ROUTE_TYPES --- */
const V172_ROUTE_TYPES={
 'toyama|joetsu':'北陸道・北陸新幹線','joetsu|nagaoka':'北陸道・信越線','nagaoka|niigata':'北陸道・上越新幹線',
 'nagaoka|yuzawa':'関越道・上越線','takasaki|yuzawa':'関越道・上越新幹線',
 'niigata|murakami':'日本海東北道・羽越線','murakami|tsuruoka':'日本海東北道・羽越線','tsuruoka|yamagata':'山形道',
 'niigata|sado':'新潟港－佐渡 海上航路'
};

/* --- V172_SEA_ROUTES --- */
const V172_SEA_ROUTES=new Set(['niigata|sado']);

/* --- V172_ECON --- */
const V172_ECON=[
 {id:'murakami',name:'村上',pref:15,prefecture:'新潟県',initialFaction:'女帝国',economy:48,production:43,industry:38,food:66,logistics:72,military:55,strategic:67,tier:'B',profile:'北部国境・日本海交通拠点',weeklyFunds:2,weeklyIndustry:1,weeklyFood:2,supplyCapacity:131000},
 {id:'yuzawa',name:'湯沢',pref:15,prefecture:'新潟県',initialFaction:'女帝国',economy:45,production:34,industry:30,food:42,logistics:88,military:58,strategic:72,tier:'B',profile:'関越国境・山岳交通拠点',weeklyFunds:2,weeklyIndustry:1,weeklyFood:1,supplyCapacity:153000},
 {id:'sado',name:'佐渡',pref:15,prefecture:'新潟県',initialFaction:'女帝国',economy:40,production:38,industry:28,food:70,logistics:54,military:52,strategic:62,tier:'C',profile:'島嶼・海上補給拠点',weeklyFunds:2,weeklyIndustry:1,weeklyFood:2,supplyCapacity:106000},
 {id:'tsuruoka',name:'鶴岡',pref:6,prefecture:'山形県',initialFaction:'東北共和国',economy:52,production:49,industry:43,food:72,logistics:67,military:55,strategic:64,tier:'B',profile:'庄内・日本海交通拠点',weeklyFunds:2,weeklyIndustry:1,weeklyFood:2,supplyCapacity:124000}
];

/* --- V173_AI_CONFIG --- */
const V173_AI_CONFIG={
 '女帝国':{aggression:1.08,commit:.64,attackEvery:1,label:'女帝国軍'},
 '東北共和国':{aggression:.96,commit:.60,attackEvery:2,label:'東北共和国軍'},
 '関東連邦':{aggression:1.00,commit:.61,attackEvery:2,label:'関東連邦軍'}
};

/* --- V173_JO_INITIAL_ARMY --- */
const V173_JO_INITIAL_ARMY={
 niigata:72000,nagaoka:60000,joetsu:50000,sanjo:46000,murakami:56000,yuzawa:52000,sado:28000
};

/* --- V174_AI_ORDER --- */
const V174_AI_ORDER=['女帝国','東北共和国','関東連邦','関西連合','中国','死国','九州王国','北海道帝国','沖縄諸国'];

/* --- V174_ALLIANCE_GROUPS --- */
const V174_ALLIANCE_GROUPS=[
 ['東海帝国','女帝国'],
 ['関東連邦','関西連合','東北共和国'],
 ['九州王国','北海道帝国']
];

/* --- V174_FACTION_META --- */
const V174_FACTION_META={
 '女帝国':{diplomacy:'東海帝国と正式同盟',note:'北陸・関越から外征'},
 '東北共和国':{diplomacy:'関東・関西と三国同盟',note:'北日本防衛を重視'},
 '関東連邦':{diplomacy:'東北・関西と三国同盟',note:'東部戦線を維持'},
 '関西連合':{diplomacy:'関東・東北と三国同盟',note:'中国・死国方面へ圧力'},
 '中国':{diplomacy:'親東海・正式同盟なし',note:'山陽・山陰の生存を優先'},
 '死国':{diplomacy:'中立',note:'島内防衛を最優先'},
 '九州王国':{diplomacy:'北海道帝国と同盟',note:'西日本で積極攻勢'},
 '北海道帝国':{diplomacy:'九州王国と同盟',note:'津軽海峡の防衛を重視'},
 '沖縄諸国':{diplomacy:'非同盟・様子見',note:'本島防衛を最優先'}
};

/* --- V175_CAPITALS --- */
const V175_CAPITALS={
 '女帝国':'niigata','東北共和国':'sendai','関東連邦':'otemachi','関西連合':'osaka',
 '中国':'hiroshima','死国':'takamatsu','九州王国':'fukuoka','北海道帝国':'sapporo','沖縄諸国':'naha'
};

/* --- V175_INDUSTRY_COST --- */
const V175_INDUSTRY_COST={inf:8,armor:22,air:28,elite:38};

/* --- V178_SPEC_IDS --- */
const V178_SPEC_IDS=['inf','armor','air','elite'];

/* --- V178_REL_LABEL --- */
const V178_REL_LABEL={allied:'同盟',friendly:'友好',neutral:'中立',war:'交戦',truce:'停戦'};

/* --- V178_DOCTRINE --- */
const V178_DOCTRINE={
 '東海帝国':[.14,.07,.12],'女帝国':[.07,.05,.10],'東北共和国':[.08,.04,.025],
 '関東連邦':[.13,.09,.04],'関西連合':[.12,.07,.04],'中国':[.08,.035,.02],
 '死国':[.07,.03,.025],'九州王国':[.14,.08,.04],'北海道帝国':[.18,.06,.035],'沖縄諸国':[.04,.035,.02]
};

/* --- V177_SIM_ORDER --- */
const V177_SIM_ORDER=['東海帝国','女帝国','東北共和国','関東連邦','関西連合','中国','死国','九州王国','北海道帝国','沖縄諸国'];

/* --- V177_SIM_CONFIG --- */
const V177_SIM_CONFIG={
 '東海帝国':{aggression:1.08,commit:.64,attackEvery:1,label:'東海帝国軍',minScore:63,riskScore:55,riskGate:.42,stance:'積極攻勢'},
 ...V173_AI_CONFIG
};

/* --- V179_MODES --- */
const V179_MODES={manual:'手動指揮',advance:'進撃',defend:'防衛',refill:'補充',stop:'停止'};

/* --- V180_THEATERS --- */
const V180_THEATERS={
 kanto:{name:'関東方面軍',short:'関東',prefs:[8,9,10,11,12,13,14],target:'odawara',note:'箱根を越え、横浜・東京方面へ進撃'},
 hokuriku:{name:'北陸方面軍',short:'北陸',prefs:[15,16,17,18],target:'toyama',note:'富山・石川・福井と北陸国境を防衛'},
 kansai:{name:'関西方面軍',short:'関西',prefs:[26,27,28,29,30],target:'kyoto',note:'京都・大阪方面への西進'},
 chugoku:{name:'中国・四国方面軍',short:'中国四国',prefs:[31,32,33,34,35,36,37,38,39],target:'kurashiki',note:'瀬戸内海と山陽道を攻略'},
 kyushu:{name:'九州・沖縄方面軍',short:'九州沖縄',prefs:[40,41,42,43,44,45,46,47],target:'fukuoka',note:'九州上陸から沖縄方面を担当'},
 north:{name:'北日本方面軍',short:'北日本',prefs:[1,2,3,4,5,6,7],target:'sendai',note:'東北縦断と北海道方面を担当'}
};

/* --- V181_ELITES --- */
const V181_ELITES=['miyachi','oshima','shohei','tahara','hiroya','kawai'];

/* --- V181_SKILLS --- */
const V181_SKILLS={miyachi:'総帥の全軍指揮',oshima:'親衛隊先鋒',shohei:'戦線突破',tahara:'大兵団指揮',hiroya:'破城槌',kawai:'前線突破'};

/* --- V182_IDENTITY --- */
const V182_IDENTITY={
 '北海道帝国':{tag:'厳冬の軍事国家',summary:'雪国の防衛に特化した軍事国家。北海道本土では攻撃側を消耗させ、ホワイトウルフ隊が反撃する。',strength:'北海道本土の防御＋45%・北日本の防御＋18%・精鋭比率上昇',weakness:'津軽海峡を越える攻勢では持ち味を出しにくい',leaders:'ホワイトウルフ隊／指揮官ホワイトウルフ'},
 '東北共和国':{tag:'仙台堅守・保守戦略',summary:'仙台を中心に守りを固める保守的な雪国。北陸への出口を求め、女帝国を主要目標とする。',strength:'仙台防御＋40%・東北本土防御＋10%',weakness:'攻撃頻度が低く、好機を逃すことがある',leaders:'仙台鎮守府司令'},
 '関東連邦':{tag:'最大経済・最大戦力',summary:'経済規模と総兵力が全国一。大量生産と物量で戦線を押す一方、固有武将は少ない。',strength:'初期兵力＋18%・週次生産＋60%・装備力＋5%',weakness:'固有指揮官が少なく、精鋭戦では東海・関西に劣る',leaders:'関東統合軍司令'},
 '関西連合':{tag:'滋賀奪還の悲願',summary:'経済と軍事の両方を備え、固有武将も多い。東海帝国に奪われた滋賀の奪還を最優先する。',strength:'初期兵力＋10%・週次生産＋20%・固有指揮官4人',weakness:'京都・大阪・神戸の防衛と滋賀奪還で戦力が分散しやすい',leaders:'大阪総司令／京都守護／神戸機動軍司令／紀州軍団長'},
 '中国':{tag:'高士気の外交国家',summary:'治安が良く士気も高いが、広島を中心に東西から挟まれやすい。東海帝国か死国との同盟を模索する。',strength:'全軍戦力＋8%・週次生産＋6%・危機時に同盟交渉',weakness:'広島が多方面戦になりやすく、単独での長期戦に弱い',leaders:'広島防衛司令'},
 '九州王国':{tag:'王命による積極攻勢',summary:'九州王の命令で固有武将と血気盛んな九州男児が進軍する強国。海峡を越えて中国地方を狙う。',strength:'初期兵力＋12%・週次生産＋20%・攻撃＋13%・海上攻撃強化',weakness:'攻勢を急ぎ、損害が膨らむことがある',leaders:'九州王／薩摩猛将／熊本城将／博多海将'},
 '死国':{tag:'正体不明の中立勢力',summary:'中立を保つが、真の戦力は観測不能。死国を同盟に引き入れた陣営が勝つとも言われる。',strength:'戦闘力が週ごとに変動・同盟国へ生産と戦闘支援',weakness:'自ら大戦争を始めることは少ない',leaders:'仮面の統領（正体不明）'},
 '沖縄諸国':{tag:'海上連絡に長けた弱小国',summary:'総兵力は少ないが、島嶼間の連絡と海上補給に長ける。外交と機動で生存を図る。',strength:'海上攻撃・海上補給の不利を大幅に軽減',weakness:'正面戦闘と生産力は全国最弱',leaders:'琉球連絡総監'}
};

/* --- V182_COMMANDERS --- */
const V182_COMMANDERS=[
 {id:'white_wolf',name:'ホワイトウルフ',faction:'北海道帝国',stats:[97,96,82,61,58,70,75,94],skill:{attack:1.85,loss:.62},skillName:'ホワイトウルフ隊',home:'sapporo'},
 {id:'sendai_cmd',name:'仙台鎮守府司令',faction:'東北共和国',stats:[91,82,80,72,77,73,68,91],skill:{attack:1.28,loss:.66},skillName:'仙台鉄壁防衛',home:'sendai'},
 {id:'kanto_cmd',name:'関東統合軍司令',faction:'関東連邦',stats:[88,85,80,86,82,78,85,90],skill:{attack:1.35,loss:.82},skillName:'統合物量作戦',home:'otemachi',central:true},
 {id:'osaka_cmd',name:'大阪総司令',faction:'関西連合',stats:[91,88,77,80,76,75,73,92],skill:{attack:1.48,loss:.78},skillName:'関西総攻撃',home:'osaka',central:true},
 {id:'kyoto_guard',name:'京都守護',faction:'関西連合',stats:[94,77,72,68,83,74,70,87],skill:{attack:1.20,loss:.55},skillName:'御所防衛陣',home:'kyoto'},
 {id:'kobe_mobile',name:'神戸機動軍司令',faction:'関西連合',stats:[83,93,79,72,67,68,74,86],skill:{attack:1.62,loss:.84},skillName:'阪神高速機動',home:'kobe'},
 {id:'kishu_cmd',name:'紀州軍団長',faction:'関西連合',stats:[86,89,75,62,66,65,61,88],skill:{attack:1.50,loss:.80},skillName:'紀伊山地突破',home:'wakayama'},
 {id:'hiroshima_cmd',name:'広島防衛司令',faction:'中国',stats:[90,84,75,82,86,77,80,93],skill:{attack:1.34,loss:.68},skillName:'山陽士気統制',home:'hiroshima',central:true},
 {id:'shikoku_mask',name:'仮面の統領',faction:'死国',stats:[95,92,90,88,88,90,92,99],skill:{attack:1.72,loss:.58},skillName:'正体不明',home:'kochi',central:true},
 {id:'kyushu_king',name:'九州王',faction:'九州王国',stats:[92,84,83,91,88,85,82,96],skill:{attack:1.42,loss:.76},skillName:'王命・総進撃',home:'fukuoka',central:true},
 {id:'satsuma_cmd',name:'薩摩猛将',faction:'九州王国',stats:[83,97,72,54,60,58,66,91],skill:{attack:1.78,loss:.82},skillName:'薩摩隼人',home:'kagoshima'},
 {id:'kumamoto_cmd',name:'熊本城将',faction:'九州王国',stats:[96,79,76,66,73,68,64,89],skill:{attack:1.24,loss:.52},skillName:'熊本城不落',home:'kumamoto'},
 {id:'hakata_cmd',name:'博多海将',faction:'九州王国',stats:[84,90,88,77,74,76,83,87],skill:{attack:1.55,loss:.78},skillName:'玄界灘強襲',home:'kitakyushu'},
 {id:'ryukyu_link',name:'琉球連絡総監',faction:'沖縄諸国',stats:[78,68,92,87,90,86,96,84],skill:{attack:1.22,loss:.72},skillName:'島嶼連絡網',home:'naha',central:true}
];

/* --- V183_MISSIONS --- */
const V183_MISSIONS={
 odawara:{name:'小田原電撃突破',duration:4,tag:'関東戦線',brief:'4週間以内に小田原を制圧する。',reward:'資金500・食料250・情報20',check:'capture'},
 jo_relief:{name:'女帝国救援作戦',duration:6,tag:'北陸戦線',brief:'6週間、新潟を女帝国の支配下に保つ。',reward:'資金350・食料450・情報30',check:'hold'},
 kyoto:{name:'京都攻略作戦',duration:8,tag:'関西戦線',brief:'京都を制圧するか、御所防衛陣地の耐久を50%以下にする。',reward:'資金750・食料300・情報25・機甲技術',check:'siege'},
 kani:{name:'帝都可児防衛',duration:6,tag:'本土防衛',brief:'作戦開始時に保有する岐阜県内の全都市を6週間守り抜く。',reward:'資金400・食料600・情報20',check:'defense'},
 elite:{name:'親衛隊集中投入',duration:5,tag:'精鋭作戦',brief:'指定した前線都市を、主要武将の固有指揮を発動して制圧する。',reward:'資金650・食料200・情報35・特殊装備技術',check:'elite'}
};

/* --- V183_ELITE_NAMES --- */
const V183_ELITE_NAMES=['宮地大輝','大島義人','宮地祥平','田原颯太','ひろや','川合宏明'];

/* --- V187_STRATEGIC_CITIES --- */
const V187_STRATEGIC_CITIES={
 kani:{rank:3,role:'帝都・軍令中枢',original:'東海帝国',tags:['首都','軍令','補給'],localDefense:1.10,aiBonus:30,capital:true,command:true,desc:'東海帝国の国家中枢。失陥すると帝国全体の生産効率と指揮能力が大きく低下する。'},
 nagoya:{rank:3,role:'中京経済・工業中枢',original:'東海帝国',tags:['経済','工業','補給'],fundsBonus:.08,industryBonus:.10,localDefense:1.04,aiBonus:24,desc:'中京圏の資金・工業ネットワークを束ねる。失うと東海帝国の週次収入と工業効率が低下する。'},
 toyota:{rank:2,role:'重工業中枢',original:'東海帝国',tags:['工業','軍需'],industryBonus:.08,localDefense:1.03,aiBonus:18,desc:'機甲・軍需生産を支える重工業都市。保持中は東海帝国の工業出力を底上げする。'},
 hamamatsu:{rank:3,role:'東海道兵站ゲート',original:'東海帝国',tags:['兵站','東海道','補給'],localDefense:1.07,aiBonus:26,desc:'東海―関東戦線を結ぶ兵站の要。◆補給拠点でもあり、失陥すると東海道の補給線が分断されやすい。'},
 otemachi:{rank:3,role:'関東連邦首都・金融中枢',original:'関東連邦',tags:['首都','経済','補給'],fundsBonus:.10,localDefense:1.10,aiBonus:32,capital:true,command:true,desc:'関東連邦の政治・金融・軍令中枢。攻略すれば関東の国家生産と全軍指揮へ大打撃を与える。'},
 yokohama:{rank:2,role:'東京湾兵站・港湾中枢',original:'関東連邦',tags:['港湾','兵站','補給'],fundsBonus:.04,localDefense:1.05,aiBonus:20,desc:'首都圏の海上輸送と南関東補給を担う。制圧すると関東南部の補給網を崩しやすい。'},
 sendai:{rank:3,role:'東北共和国首都・仙台要塞',original:'東北共和国',tags:['首都','要塞','補給'],fundsBonus:.05,localDefense:1.13,aiBonus:30,capital:true,command:true,desc:'東北共和国の首都兼最大防衛拠点。国家固有の仙台防衛と重なり、正面攻略は非常に困難。'},
 niigata:{rank:3,role:'女帝国首都・日本海中枢',original:'女帝国',tags:['首都','港湾','補給'],fundsBonus:.06,localDefense:1.09,aiBonus:28,capital:true,command:true,desc:'女帝国の首都。日本海交通と国家指揮を一手に担う同盟上の最重要都市。'},
 osaka:{rank:3,role:'関西連合首都・経済中枢',original:'関西連合',tags:['首都','経済','工業'],fundsBonus:.08,industryBonus:.05,localDefense:1.09,aiBonus:30,capital:true,command:true,desc:'関西連合の政治・経済中枢。攻略すれば関西の継戦能力と国家指揮を同時に削れる。'},
 kyoto:{rank:2,role:'関西政治・象徴都市',original:'関西連合',tags:['政治','象徴','要塞'],localDefense:1.08,aiBonus:22,moraleAnchor:.96,desc:'関西連合の象徴的政治都市。失陥すると関西軍の士気と戦争継続力に悪影響が出る。'},
 kobe:{rank:2,role:'阪神港湾・工業拠点',original:'関西連合',tags:['港湾','工業','兵站'],industryBonus:.05,localDefense:1.04,aiBonus:19,desc:'関西の港湾輸送と工業を支える都市。大阪攻略前後の兵站拠点として価値が高い。'},
 hiroshima:{rank:3,role:'中国地方国家中枢',original:'中国',tags:['首都','兵站','補給'],fundsBonus:.05,localDefense:1.09,aiBonus:29,capital:true,command:true,desc:'中国勢力の国家中枢。山陽補給網の中心でもあり、失うと国土が東西に分断されやすい。'},
 takamatsu:{rank:3,role:'死国中枢・瀬戸内司令部',original:'死国',tags:['首都','兵站','補給'],fundsBonus:.04,localDefense:1.08,aiBonus:27,capital:true,command:true,desc:'死国の国家中枢。瀬戸内側の補給・指揮を担う最重要拠点。'},
 fukuoka:{rank:3,role:'九州王国首都・北部経済中枢',original:'九州王国',tags:['首都','経済','補給'],fundsBonus:.07,localDefense:1.09,aiBonus:30,capital:true,command:true,desc:'九州王国の首都。北九州方面の戦争経済と国家指揮を支える。'},
 kitakyushu:{rank:2,role:'北九州重工業・海峡ゲート',original:'九州王国',tags:['工業','海峡','兵站'],industryBonus:.07,localDefense:1.06,aiBonus:21,desc:'本州から九州へ入る玄関口。工業力と海峡兵站の両方を握る。'},
 sapporo:{rank:3,role:'北海道帝国首都・中央軍本部',original:'北海道帝国',tags:['首都','軍令','補給'],fundsBonus:.05,localDefense:1.12,aiBonus:31,capital:true,command:true,desc:'北海道帝国の首都。厳冬防御と組み合わさる北海道攻略の最終中枢。'},
 hakodate:{rank:2,role:'津軽海峡防衛ゲート',original:'北海道帝国',tags:['海峡','要塞','補給'],localDefense:1.10,aiBonus:23,desc:'北海道上陸の玄関口。ここを確保できるかで北海道戦の補給難度が大きく変わる。'},
 naha:{rank:3,role:'沖縄諸国首都・海上中枢',original:'沖縄諸国',tags:['首都','港湾','補給'],fundsBonus:.05,localDefense:1.09,aiBonus:28,capital:true,command:true,desc:'沖縄諸国の首都。海上輸送と国家指揮を担う。'},
};

/* --- V187_CAPITALS --- */
const V187_CAPITALS={東海帝国:'kani',...V175_CAPITALS};

/* --- V191_TACTICS --- */
const V191_TACTICS={
 assault:{name:'強襲',attack:1.18,loss:1.18,orders:1,capture:true,note:'攻撃力＋18%。短期突破を狙う代わりに味方損害も＋18%。'},
 encircle:{name:'包囲',attack:1.02,loss:.70,orders:2,capture:true,note:'味方の隣接都市が2つ必要。地形の防御上乗せを25%軽減し、味方損害を30%軽減。行動力を2消費。'},
 feint:{name:'牽制',attack:.80,loss:.52,orders:1,capture:false,note:'都市は制圧せず守備隊を削る。攻撃力－20%、味方損害を48%軽減。'}
};

/* --- V191_MIX_POLICY --- */
const V191_MIX_POLICY={
 balanced:{name:'均衡生産',gain:1,note:'国家の標準編成で増援を配備。'},
 armor:{name:'機甲重視',gain:.83,note:'機甲比率を増やす。装備の負担で増援人数は17%減少。'},
 air:{name:'航空重視',gain:.72,note:'航空比率を増やす。装備の負担で増援人数は28%減少。'},
 elite:{name:'精鋭重視',gain:.60,note:'精鋭比率を増やす。育成の負担で増援人数は40%減少。'}
};

/* --- V191_POSTURE --- */
const V191_POSTURE={normal:{name:'通常運用',gain:1,atk:1,def:1,note:'増援・攻撃・防御を標準運用。'},mobilize:{name:'動員優先',gain:1.12,atk:1,def:.96,note:'週次増援＋12%。即応配備の負担で防御力－4%。'},fortify:{name:'防衛優先',gain:.90,atk:.94,def:1.08,note:'防御力＋8%。攻撃力－6%、週次増援－10%。'}};

/* --- V191_MISSION_SPEC --- */
const V191_MISSION_SPEC={
 '東海帝国':[{id:'capital',kind:'hold',target:'kani',weeks:4,name:'帝都を守れ',reward:6000},{id:'odawara',kind:'capture',target:'odawara',name:'東海道の突破口',reward:12000},{id:'kyoto',kind:'capture',target:'kyoto',name:'西の脅威を抑える',reward:12000}],
 '女帝国':[{id:'capital',kind:'hold',target:'niigata',weeks:4,name:'新潟防衛線',reward:6000},{id:'murakami',kind:'capture',target:'tsuruoka',name:'庄内へ反攻',reward:10000},{id:'sado',kind:'hold',target:'sado',weeks:6,name:'日本海の足場',reward:8000}],
 '東北共和国':[{id:'capital',kind:'hold',target:'sendai',weeks:4,name:'仙台堅守',reward:6000},{id:'murakami',kind:'capture',target:'murakami',name:'日本海への出口',reward:10000},{id:'niigata',kind:'capture',target:'niigata',name:'女帝国の中枢へ',reward:12000}],
 '関東連邦':[{id:'capital',kind:'hold',target:'otemachi',weeks:4,name:'首都機能を守る',reward:6000},{id:'atami',kind:'capture',target:'atami',name:'東海道へ進出',reward:10000},{id:'nagano',kind:'capture',target:'nagano',name:'内陸の突破口',reward:12000}],
 '関西連合':[{id:'capital',kind:'hold',target:'osaka',weeks:4,name:'大阪の継戦能力',reward:6000},{id:'otsu',kind:'capture',target:'otsu',name:'滋賀奪還・大津',reward:10000},{id:'hikone',kind:'capture',target:'hikone',name:'滋賀奪還・彦根',reward:12000}],
 '中国':[{id:'capital',kind:'hold',target:'hiroshima',weeks:4,name:'広島を孤立させるな',reward:8000},{id:'alliance',kind:'alliance',targets:['東海帝国','死国'],name:'外交で包囲を破る',reward:10000},{id:'home',kind:'home',weeks:8,min:8,name:'生存圏を維持',reward:10000}],
 '死国':[{id:'capital',kind:'hold',target:'takamatsu',weeks:4,name:'瀬戸内の備え',reward:6000},{id:'kurashiki',kind:'capture',target:'kurashiki',name:'本州への橋頭堡',reward:10000},{id:'alliance',kind:'alliance',targets:['中国','東海帝国'],name:'秘密同盟を結ぶ',reward:10000}],
 '九州王国':[{id:'capital',kind:'hold',target:'fukuoka',weeks:4,name:'王国の中枢を守る',reward:6000},{id:'shimonoseki',kind:'capture',target:'shimonoseki',name:'関門海峡を越えろ',reward:10000},{id:'hiroshima',kind:'capture',target:'hiroshima',name:'山陽の主導権',reward:12000}],
 '北海道帝国':[{id:'capital',kind:'hold',target:'sapporo',weeks:4,name:'厳冬の本拠を守る',reward:6000},{id:'aomori',kind:'capture',target:'aomori',name:'本州上陸',reward:12000},{id:'hirosaki',kind:'capture',target:'hirosaki',name:'津軽の足場を固める',reward:10000}],
 '沖縄諸国':[{id:'capital',kind:'hold',target:'naha',weeks:4,name:'那覇の生存戦略',reward:8000},{id:'kagoshima',kind:'capture',target:'kagoshima',name:'九州上陸',reward:15000},{id:'alliance',kind:'anyAlliance',name:'海上の後ろ盾',reward:10000}]
};

/* --- V188_META --- */
const V188_META={
 '東海帝国':{difficulty:3,label:'EASY',summary:'最強級の精鋭と豊富な工業力。東西の多正面戦を指揮する。',goal:'関東の物量を精鋭集中で破り、可児・名古屋を守り抜く。'},
 '女帝国':{difficulty:7,label:'HARD',summary:'新潟を中心とする小国。東海との同盟と三賢者を活用する。',goal:'東北の圧力を耐え、北陸・関越へ勢力圏を広げる。'},
 '東北共和国':{difficulty:7,label:'HARD',summary:'仙台を中心に守る保守国家。守備は強いが攻勢力に乏しい。',goal:'仙台を鉄壁化し、女帝国・北陸への出口を確保する。'},
 '関東連邦':{difficulty:2,label:'EASY',summary:'全国最大の経済・総兵力。大量生産と物量攻勢が最大の武器。',goal:'東海を物量で圧倒し、大手町を守りながら全国最大勢力を築く。'},
 '関西連合':{difficulty:4,label:'NORMAL',summary:'国力と武将層のバランスが良い。滋賀奪還が序盤の焦点。',goal:'滋賀を奪還し、京都・大阪を軸に東西へ進出する。'},
 '中国':{difficulty:8,label:'VERY HARD',summary:'広島を中心に挟まれやすい外交国家。士気と外交が生命線。',goal:'東海・死国との関係を使い、多方面戦を避けて生存圏を作る。'},
 '死国':{difficulty:9,label:'VERY HARD',summary:'正体不明の変動戦力。低い攻勢頻度と突発的な軍勢が特徴。',goal:'中立を利用して力を蓄え、好機に瀬戸内海を越える。'},
 '九州王国':{difficulty:5,label:'NORMAL',summary:'王命で攻め続ける攻撃国家。固有武将と海峡突破が強い。',goal:'中国地方へ早期侵攻し、西日本の主導権を握る。'},
 '北海道帝国':{difficulty:6,label:'HARD',summary:'北海道本土の防御は全国最強。問題は津軽海峡の先。',goal:'札幌・函館を守り、青森上陸から本州侵攻を成立させる。'},
 '沖縄諸国':{difficulty:10,label:'HELL',summary:'生産・正面戦闘は最弱。海上機動と外交で生き残る超高難度。',goal:'那覇を守り、海上ルートを利用して九州上陸の足場を作る。'}
};

/* --- V192_MODES --- */
const V192_MODES={advance:'進撃',defend:'防衛',refill:'補充',stop:'停止',manual:'手動指揮'};

/* ===== source script block 9 ===== */

/* --- V194_AP_MAX --- */
const V194_AP_MAX=2;

/* ===== source script block 13 ===== */

/* --- V202_NEW_CITIES --- */
const V202_NEW_CITIES={
 okinawa_city:{name:'沖縄市',pref:47,x:332,y:224,neighbors:['naha','nago'],initialFaction:'沖縄諸国',anchor:'naha',profile:'中部都市・航空支援',military:63,logistics:72,economy:55,production:48,food:45},
 nago:{name:'名護',pref:47,x:345,y:214,neighbors:['okinawa_city'],initialFaction:'沖縄諸国',anchor:'naha',profile:'本島北部・港湾拠点',military:55,logistics:62,economy:45,production:36,food:65},
 itoman:{name:'糸満',pref:47,x:324,y:235,neighbors:['naha'],initialFaction:'沖縄諸国',anchor:'naha',profile:'本島南部・港湾拠点',military:48,logistics:58,economy:40,production:34,food:70},
 miyakojima:{name:'宮古島',pref:47,x:187,y:302,neighbors:['naha','ishigakijima'],initialFaction:'沖縄諸国',anchor:'naha',profile:'宮古諸島・海上補給',military:57,logistics:72,economy:44,production:28,food:68},
 ishigakijima:{name:'石垣島',pref:47,x:123,y:315,neighbors:['miyakojima'],initialFaction:'沖縄諸国',anchor:'naha',profile:'八重山諸島・海上補給',military:56,logistics:65,economy:43,production:27,food:70},
 yakushima:{name:'屋久島',pref:46,x:136,y:971,neighbors:['kagoshima','tanegashima','naha'],initialFaction:'沖縄諸国',anchor:'naha',profile:'山岳島嶼・南西海路',military:45,logistics:46,economy:32,production:22,food:65},
 tanegashima:{name:'種子島',pref:46,x:161,y:954,neighbors:['kagoshima','yakushima','naha'],initialFaction:'沖縄諸国',anchor:'naha',profile:'島嶼港湾・南西海路',military:50,logistics:62,economy:37,production:38,food:67},
 gero:{name:'下呂',pref:21,x:496,y:649,neighbors:['takayama','minokamo','nakatsugawa'],initialFaction:'東海帝国',anchor:'minokamo',profile:'飛騨街道・山岳交通',military:44,logistics:67,economy:43,production:29,food:61},
 toyonaka:{name:'豊中',pref:27,x:407,y:710,neighbors:['osaka','takatsuki','amagasaki'],initialFaction:'関西連合',anchor:'osaka',profile:'北摂都市・航空交通',military:56,logistics:79,economy:67,production:61,food:32},
 higashiosaka:{name:'東大阪',pref:27,x:414,y:718,neighbors:['osaka','takatsuki','ikoma'],initialFaction:'関西連合',anchor:'osaka',profile:'工業都市・生産拠点',military:61,logistics:69,economy:66,production:84,food:28},
 kishiwada:{name:'岸和田',pref:27,x:403,y:735,neighbors:['sakai','wakayama'],initialFaction:'関西連合',anchor:'sakai',profile:'泉州都市・港湾交通',military:52,logistics:65,economy:50,production:57,food:42},
 tsushima:{name:'対馬',pref:42,x:89,y:722,neighbors:['fukuoka','nagasaki'],initialFaction:'九州王国',anchor:'nagasaki',profile:'対馬海峡・島嶼防衛',military:65,logistics:57,economy:30,production:24,food:64},
 oki:{name:'隠岐',pref:32,x:299,y:619,neighbors:['matsue','yonago'],initialFaction:'中国',anchor:'matsue',profile:'日本海航路・島嶼防衛',military:47,logistics:49,economy:30,production:23,food:68},
 etorofu:{name:'択捉島',pref:1,x:945.5,y:71.5,neighbors:['nemuro'],initialFaction:'北海道帝国',anchor:'nemuro',profile:'北方海域・厳冬防衛',military:70,logistics:46,economy:27,production:22,food:57}
};

/* --- V202_SEA_ROUTES --- */
const V202_SEA_ROUTES=[['naha','miyakojima'],['miyakojima','ishigakijima'],['kagoshima','yakushima'],['kagoshima','tanegashima'],['yakushima','tanegashima'],['naha','yakushima'],['naha','tanegashima'],['fukuoka','tsushima'],['nagasaki','tsushima'],['matsue','oki'],['yonago','oki'],['nemuro','etorofu']];

/* --- V202_ISLANDS --- */
const V202_ISLANDS=['miyakojima','ishigakijima','yakushima','tanegashima','tsushima','oki','etorofu'];

/* ===== source script block 24 ===== */

/* --- V237_RULES --- */
const V237_RULES=Object.freeze({
 version:'2.37.1',
 normalMove:4,
 actionMove:8,
 minimumBattleTroops:11000,
 schema:237
});

/* ===== source script block 30 ===== */

/* --- V221_DOCTRINES --- */
const V221_DOCTRINES={aggressive:{name:'攻勢',commit:.75,minRatio:1.05,maxAttacks:3,desc:'損害を許容して突破を優先'},balanced:{name:'均衡',commit:.60,minRatio:1.18,maxAttacks:2,desc:'戦力と損害のバランス'},cautious:{name:'慎重',commit:.45,minRatio:1.35,maxAttacks:1,desc:'優勢時だけ攻撃し戦力温存'}};

/* ===== source script block 36 ===== */

/* --- V232_MODES --- */
const V232_MODES={advance:'進撃',defend:'防衛',refill:'補充',stop:'停止',manual:'手動指揮'};

/* ===== source script block 43 ===== */

/* --- V2373_TABS --- */
const V2373_TABS=['city','military','intel'];

/* ===== source script block 44 ===== */

/* --- V2374_SLOT_COUNT --- */
const V2374_SLOT_COUNT=3;

/* --- V2374_LEGACY_BASE --- */
const V2374_LEGACY_BASE='tokai_v11';

/* --- V2374_SIM_BASE --- */
const V2374_SIM_BASE='tokai_sim_v178';


/* ===== master-data normalization ===== */
for (const [id,c] of Object.entries(CITY_DATA)) {
  for (const n of c.neighbors) {
    if (!CITY_DATA[n]) throw new Error("Unknown city: " + n);
    if (!CITY_DATA[n].neighbors.includes(id)) CITY_DATA[n].neighbors.push(id);
  }
}
for (const id of Object.keys(SUPPLY_HUBS)) CITY_MAJOR.add(id);

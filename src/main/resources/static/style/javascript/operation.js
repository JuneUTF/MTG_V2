const _0xd890da=_0x548e;(function(_0xfbafae,_0x32fdda){const _0x9ba778=_0x548e,_0x16c434=_0xfbafae();while(!![]){try{const _0x274e70=-parseInt(_0x9ba778(0x1ef))/0x1+parseInt(_0x9ba778(0x1ec))/0x2*(-parseInt(_0x9ba778(0x1f5))/0x3)+parseInt(_0x9ba778(0x1f4))/0x4+-parseInt(_0x9ba778(0x205))/0x5+parseInt(_0x9ba778(0x1fe))/0x6+parseInt(_0x9ba778(0x20d))/0x7+parseInt(_0x9ba778(0x204))/0x8*(-parseInt(_0x9ba778(0x1ea))/0x9);if(_0x274e70===_0x32fdda)break;else _0x16c434['push'](_0x16c434['shift']());}catch(_0x3c0ac3){_0x16c434['push'](_0x16c434['shift']());}}}(_0x5d8e,0x93051));const purposeTable=document[_0xd890da(0x1fc)](_0xd890da(0x1e8)),chargeTable=document['getElementById'](_0xd890da(0x20a));let chargeArray,purposeArray,purposeHTML='',purposeTableHTML='',chargeTableHTML='',chargeData;function _0x548e(_0x481b1c,_0x10c15a){const _0x5d8e88=_0x5d8e();return _0x548e=function(_0x548eb2,_0x5c420d){_0x548eb2=_0x548eb2-0x1e6;let _0x4e7935=_0x5d8e88[_0x548eb2];return _0x4e7935;},_0x548e(_0x481b1c,_0x10c15a);}function fetchDatacharge(_0x31b65e){const _0x4f3822=_0xd890da;fetch(_0x4f3822(0x202))['then'](_0x7f492d=>{const _0x565112=_0x4f3822;if(!_0x7f492d['ok'])throw new Error(_0x565112(0x1f7));return _0x7f492d[_0x565112(0x1e9)]();})[_0x4f3822(0x1fa)](_0x3cc7eb=>{const _0x215d8a=_0x4f3822;chargeData=_0x3cc7eb,chargeData[_0x215d8a(0x1f1)](_0x548b86=>{const _0x58b477=_0x215d8a;_0x548b86['id']==0x1?chargeTableHTML+=_0x58b477(0x209)+_0x548b86['id']+_0x58b477(0x1f2)+_0x548b86['fullname']+'</td><td>'+(_0x548b86[_0x58b477(0x203)]==_0x58b477(0x20b)?_0x58b477(0x20e):'一般')+'</td><td>'+(_0x548b86[_0x58b477(0x208)]=='0'?'個別':'共有')+_0x58b477(0x1f2)+_0x548b86[_0x58b477(0x1ff)]+_0x58b477(0x1eb):chargeTableHTML+=_0x58b477(0x209)+_0x548b86['id']+_0x58b477(0x1f2)+_0x548b86[_0x58b477(0x1fd)]+_0x58b477(0x1f2)+(_0x548b86['role']=='ADMIN'?_0x58b477(0x20e):'一般')+_0x58b477(0x1f2)+(_0x548b86[_0x58b477(0x208)]=='0'?'個別':'共有')+_0x58b477(0x1f2)+_0x548b86[_0x58b477(0x1ff)]+_0x58b477(0x20c)+_0x548b86['id']+_0x58b477(0x201)+_0x548b86[_0x58b477(0x1fd)]+_0x58b477(0x201)+_0x548b86[_0x58b477(0x208)]+_0x58b477(0x201)+_0x548b86[_0x58b477(0x203)]+'\x27);\x22>編集</button>・'+(_0x548b86['status']!=='使用中'?_0x58b477(0x200)+_0x548b86['id']+'\x27,\x27'+_0x548b86[_0x58b477(0x1fd)]+_0x58b477(0x206):'<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-warning\x22\x20onclick=\x22deleteOperation(\x27'+_0x548b86['id']+_0x58b477(0x201)+_0x548b86[_0x58b477(0x1fd)]+_0x58b477(0x1f9))+'</td></tr>';}),chargeTable['innerHTML']=chargeTableHTML;})[_0x4f3822(0x1ee)](_0x484961=>{const _0x259afc=_0x4f3822;console[_0x259afc(0x1f0)](_0x259afc(0x1ed),_0x484961);});}fetchDatacharge();function _0x5d8e(){const _0x1cdb27=['管理者','使用中','/ad/purpose','innerHTML','purposetable','json','19287qoiQLw','</td><td>-</td></tr>','12092WgawgW','エラー:','catch','286866RATOGp','error','map','</td><td>','\x27,\x27purpose\x27);\x22>削除</button>','4611520rsiNqs','591KgKKIw','tableName','ネットワークエラー','\x27,\x27purpose\x27);\x22>復元</button>','\x27,\x27user_infor\x27);\x22>削除</button>','then','\x27,\x27purpose\x27);\x22>編集</button>・','getElementById','fullname','2274900LnSuCZ','status','<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-primary\x22\x20onclick=\x22restoreOperation(\x27','\x27,\x27','/ad/charge','role','136bVsWZU','2246470rHQylb','\x27,\x27user_infor\x27);\x22>復元</button>','<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-warning\x22\x20onclick=\x22deleteOperation(\x27','publicid','<tr><td>','chargetable','ADMIN','</td><td><button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-secondary\x22\x20onclick=\x22editUser(\x27','7236712ptKTTN'];_0x5d8e=function(){return _0x1cdb27;};return _0x5d8e();}let purposeData;function fetchDatapurpose(_0x17190f){const _0xbe956b=_0xd890da;fetch(_0xbe956b(0x1e6))['then'](_0x47e639=>{const _0x464ea0=_0xbe956b;if(!_0x47e639['ok'])throw new Error(_0x464ea0(0x1f7));return _0x47e639['json']();})[_0xbe956b(0x1fa)](_0x107a19=>{const _0x58c1da=_0xbe956b;purposeData=_0x107a19,purposeData['map'](_0x12bc8f=>{const _0x818f3b=_0x548e;purposeTableHTML+=_0x818f3b(0x209)+_0x12bc8f['id']+_0x818f3b(0x1f2)+_0x12bc8f['tableName']+'</td><td>'+_0x12bc8f[_0x818f3b(0x1ff)]+'</td><td><button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-secondary\x22\x20onclick=\x22editOperation(\x27'+_0x12bc8f['id']+_0x818f3b(0x201)+_0x12bc8f[_0x818f3b(0x1f6)]+'\x27,\x27'+_0x12bc8f[_0x818f3b(0x1ff)]+_0x818f3b(0x1fb)+(_0x12bc8f[_0x818f3b(0x1ff)]!==_0x818f3b(0x20f)?_0x818f3b(0x200)+_0x12bc8f['id']+_0x818f3b(0x201)+_0x12bc8f[_0x818f3b(0x1f6)]+_0x818f3b(0x1f8):_0x818f3b(0x207)+_0x12bc8f['id']+_0x818f3b(0x201)+_0x12bc8f[_0x818f3b(0x1f6)]+_0x818f3b(0x1f3))+'</td></tr>';}),purposeTable[_0x58c1da(0x1e7)]=purposeTableHTML;})['catch'](_0x239d8b=>{const _0x2af88e=_0xbe956b;console['error'](_0x2af88e(0x1ed),_0x239d8b);});}fetchDatapurpose();
const _0x7385fa=_0x2cf6;(function(_0x99b0b7,_0x473338){const _0x19d14f=_0x2cf6,_0x44e5e0=_0x99b0b7();while(!![]){try{const _0x4e2018=-parseInt(_0x19d14f(0x1c9))/0x1+-parseInt(_0x19d14f(0x1cd))/0x2+parseInt(_0x19d14f(0x1da))/0x3+-parseInt(_0x19d14f(0x1cb))/0x4+-parseInt(_0x19d14f(0x1d3))/0x5*(parseInt(_0x19d14f(0x1d8))/0x6)+-parseInt(_0x19d14f(0x1cc))/0x7+parseInt(_0x19d14f(0x1cf))/0x8;if(_0x4e2018===_0x473338)break;else _0x44e5e0['push'](_0x44e5e0['shift']());}catch(_0x137fd3){_0x44e5e0['push'](_0x44e5e0['shift']());}}}(_0x4de4,0x852b7));const btn=document['getElementById'](_0x7385fa(0x1d4)),passwordInput=document[_0x7385fa(0x1d9)](_0x7385fa(0x1ca)),passwordError=document[_0x7385fa(0x1d9)](_0x7385fa(0x1d7));let checkPassword=!![];function _0x2cf6(_0x2a0b30,_0x2f7d13){const _0x4de4a1=_0x4de4();return _0x2cf6=function(_0x2cf68c,_0x1c420d){_0x2cf68c=_0x2cf68c-0x1c7;let _0x365454=_0x4de4a1[_0x2cf68c];return _0x365454;},_0x2cf6(_0x2a0b30,_0x2f7d13);}passwordInput[_0x7385fa(0x1d6)]('input',function(){const _0xed4f3d=_0x7385fa;let _0x45e3ab=passwordInput[_0xed4f3d(0x1c8)];const _0x3ab6c2=/^[a-zA-Z0-9]{8,18}$/;_0x3ab6c2[_0xed4f3d(0x1db)](_0x45e3ab)?(checkPassword=![],passwordError[_0xed4f3d(0x1d0)]='\u3000',passwordInput[_0xed4f3d(0x1c7)]['remove'](_0xed4f3d(0x1dc)),passwordInput['classList'][_0xed4f3d(0x1d1)](_0xed4f3d(0x1ce))):(checkPassword=!![],passwordError[_0xed4f3d(0x1d0)]='パスワードは8-18文字の英文字または数字のみです。',passwordInput[_0xed4f3d(0x1c7)][_0xed4f3d(0x1d2)](_0xed4f3d(0x1ce)),passwordInput['classList']['add'](_0xed4f3d(0x1dc))),checkInput();});function _0x4de4(){const _0x4443f0=['3962132qmYFYV','6281555qAEkjO','1395138jNtkzN','is-valid','21025424FOfEBF','textContent','add','remove','905lTXUaN','submit','disabled','addEventListener','password-error','7734gnFJcI','getElementById','2932698CVlfnh','test','is-invalid','classList','value','241505ssmLSq','password'];_0x4de4=function(){return _0x4443f0;};return _0x4de4();}function checkInput(){const _0x2244f4=_0x7385fa;checkPassword?btn[_0x2244f4(0x1d5)]=!![]:btn[_0x2244f4(0x1d5)]=![];}checkInput();

(function($,Edge,compId){var _=null,y=true,n=false,or='-webkit-transform-origin',x33='109px',x28='171px',x32='wing',b='block',x35='butterflyWings',a='Base State',x11='hidden',s='style',d='display',i='none',x24='-22',lf='left',e12='${_body}',bg='background-color',x8='@@0@@% @@1@@%',x21='auto',om='-ms-transform-origin',tp='top',ov='overflow',e10='${_Stage}',x7='stage',e15='${_wingCopy2}',zy='scaleY',t='transform',x2='4.0.0.359',c='color',x27='124px',x16='body',zx='scaleX',r='deg',x17='116px',x30='wingCopy',ky='skewY',oz='-moz-transform-origin',x22='0px',h='height',x25='21',x23='50',p='px',on='msTransformOrigin',oo='-o-transform-origin',kx='skewX',e36='${symbolSelector}',rz='rotateZ',x1='4.0.0',x3='rgba(0,0,0,0)',x20='94px',x34='wingCopy2',g='image',x31='2px',x26='-6px',x19='168px',w='width',dt='Default Timeline',x9='rgba(255,255,255,0.00)',ql='linear',x29='167px',x18='160px',e14='${_wing}',e13='${_wingCopy}';var im='images/';var g4='wing2.png',g6='wing.png',g5='body.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'wingCopy2',t:g,r:['-6px','124px','171px','167px','auto','auto'],f:[x3,im+g4,'0px','0px'],filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],['50'],['-22','21']]},{id:'body',t:g,r:['-17px','9px','168px','94px','auto','auto'],f:[x3,im+g5,'0px','0px'],tf:[[],[],[],['0.3','0.3']]},{id:'wingCopy',v:b,t:g,r:['2px','124px','171px','167px','auto','auto'],f:[x3,im+g6,'0px','0px'],tf:[[],['50']]},{id:'wing',v:i,t:g,r:['-6px','109px','171px','167px','auto','auto'],f:[x3,im+g6,'0px','0px'],tf:[[],['50']]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:8419,a:y,tt:[]}}},"butterflyWings":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x16,t:g,r:[x17,x18,x19,x20,x21,x21],f:[x3,im+g5,x22,x22]},{tf:[[0,0],[x23],[x24,x25]],r:[x26,x27,x28,x29,x21,x21],id:x30,t:g,filter:[0,0,1,1,0,0,0,0,x3,0,0,0],f:[x3,im+g4,x22,x22]},{tf:[[0,0],[x23]],r:[x31,x27,x28,x29,x21,x21],id:x32,t:g,f:[x3,im+g6,x22,x22]},{tf:[[0,0],[x23]],r:[x26,x33,x28,x29,x21,x21],id:x34,t:g,v:i,f:[x3,im+g6,x22,x22]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2704,a:n,tt:[]}}}};var S1=symbols[x7];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e10).P(bg,x9,c).P(w,120).P(h,120).P(ov,x11);A1.A(e12).P(zx,0.3,t,_,"").P(lf,-17,_,_,p).P(zy,0.3,t,_,"").P(tp,9,_,_,p);A1.A(e13).P(or,[100,50],_,x8).P(oz,[100,50],_,x8).P(om,[100,50],_,x8).P(on,[100,50],_,x8).P(oo,[100,50],_,x8).P(rz,50,t,_,r).P(tp,-28,_,_,p).T(0,-25,0.044,ql).T(0.044,-27,0.024).T(0.206,-25,0.024).T(0.23,-28,0.044).T(0.375,-25,0.044).T(0.419,-27,0.024).T(0.581,-25,0.024).T(0.605,-28,0.044).T(0.75,-25,0.044).T(0.794,-27,0.024).T(0.956,-25,0.024).T(0.98,-28,0.044).T(1.125,-25,0.044).T(1.169,-27,0.024).T(1.331,-25,0.024).T(1.355,-28,0.044).T(1.5,-25,0.044).T(1.544,-27,0.024).T(1.706,-25,0.024).T(1.73,-28,0.044).T(1.875,-25,0.044).T(1.919,-27,0.024).T(2.081,-25,0.024).T(2.105,-28,0.044).T(2.25,-25,0.044).T(2.294,-27,0.024).T(2.456,-25,0.024).T(2.48,-28,0.044).T(2.625,-25,0.044).T(2.669,-27,0.024).T(2.831,-25,0.024).T(2.855,-28,0.044).T(3,-25,0.044).T(3.044,-27,0.024).T(3.206,-25,0.024).T(3.23,-28,0.044).T(3.375,-25,0.044).T(3.419,-27,0.024).T(3.581,-25,0.024).T(3.605,-28,0.044).T(3.75,-25,0.044).T(3.794,-27,0.024).T(3.956,-25,0.024).T(3.98,-28,0.044).T(4.125,-25,0.044).T(4.169,-27,0.024).T(4.331,-25,0.024).T(4.355,-28,0.044).T(4.5,-25,0.044).T(4.544,-27,0.024).T(4.706,-25,0.024).T(4.73,-28,0.044).T(4.875,-25,0.044).T(4.919,-27,0.024).T(5.081,-25,0.024).T(5.105,-28,0.044).T(5.25,-25,0.044).T(5.294,-27,0.024).T(5.456,-25,0.024).T(5.48,-28,0.044).T(5.625,-25,0.044).T(5.669,-27,0.024).T(5.831,-25,0.024).T(5.855,-28,0.044).T(6,-25,0.044).T(6.044,-27,0.024).T(6.206,-25,0.024).T(6.23,-28,0.044).T(6.375,-25,0.044).T(6.419,-27,0.024).T(6.581,-25,0.024).T(6.605,-28,0.044).T(6.75,-25,0.044).T(6.794,-27,0.024).T(6.956,-25,0.024).T(6.98,-28,0.044).T(7.125,-25,0.044).T(7.169,-27,0.024).T(7.331,-25,0.024).T(7.355,-28,0.044).T(7.5,-25,0.044).T(7.544,-27,0.024).T(7.706,-25,0.024).T(7.73,-28,0.044).T(7.875,-25,0.044).T(7.919,-27,0.024).T(8.08,-25,0.024).T(8.105,-28,0.044).T(8.25,-25,0.044).T(8.294,-27,0.024).P(ky,0,t,_,r).T(0,-60,0.088).T(0.169,-60).T(0.287,0,0.088).T(0.375,-60,0.088).T(0.544,-60).T(0.662,0,0.088).T(0.75,-60,0.088).T(0.919,-60).T(1.037,0,0.088).T(1.125,-60,0.088).T(1.294,-60).T(1.412,0,0.088).T(1.5,-60,0.088).T(1.669,-60).T(1.787,0,0.088).T(1.875,-60,0.088).T(2.044,-60).T(2.162,0,0.088).T(2.25,-60,0.088).T(2.419,-60).T(2.537,0,0.088).T(2.625,-60,0.088).T(2.794,-60).T(2.912,0,0.088).T(3,-60,0.088).T(3.169,-60).T(3.287,0,0.088).T(3.375,-60,0.088).T(3.544,-60).T(3.662,0,0.088).T(3.75,-60,0.088).T(3.919,-60).T(4.037,0,0.088).T(4.125,-60,0.088).T(4.294,-60).T(4.412,0,0.088).T(4.5,-60,0.088).T(4.669,-60).T(4.787,0,0.088).T(4.875,-60,0.088).T(5.044,-60).T(5.162,0,0.088).T(5.25,-60,0.088).T(5.419,-60).T(5.537,0,0.088).T(5.625,-60,0.088).T(5.794,-60).T(5.912,0,0.088).T(6,-60,0.088).T(6.169,-60).T(6.287,0,0.088).T(6.375,-60,0.088).T(6.544,-60).T(6.662,0,0.088).T(6.75,-60,0.088).T(6.919,-60).T(7.037,0,0.088).T(7.125,-60,0.088).T(7.294,-60).T(7.412,0,0.088).T(7.5,-60,0.088).T(7.669,-60).T(7.787,0,0.088).T(7.875,-60,0.088).T(8.044,-60).T(8.162,0,0.088).T(8.25,-60,0.088).T(8.419,-60).P(d,b).T(0.088,i).T(0.287,b).T(0.463,i).T(0.662,b).T(0.838,i).T(1.037,b).T(1.213,i).T(1.412,b).T(1.588,i).T(1.787,b).T(1.963,i).T(2.162,b).T(2.338,i).T(2.537,b).T(2.713,i).T(2.912,b).T(3.088,i).T(3.287,b).T(3.463,i).T(3.662,b).T(3.838,i).T(4.037,b).T(4.213,i).T(4.412,b).T(4.588,i).T(4.787,b).T(4.963,i).T(5.162,b).T(5.338,i).T(5.537,b).T(5.713,i).T(5.912,b).T(6.088,i).T(6.287,b).T(6.463,i).T(6.662,b).T(6.838,i).T(7.037,b).T(7.213,i).T(7.412,b).T(7.588,i).T(7.787,b).T(7.963,i).T(8.162,b).T(8.338,i).P(zx,0.3,t,_,"").T(0,0.6,0.088).T(0.169,0.6).T(0.287,0.3,0.088).T(0.375,0.6,0.088).T(0.544,0.6).T(0.662,0.3,0.088).T(0.75,0.6,0.088).T(0.919,0.6).T(1.037,0.3,0.088).T(1.125,0.6,0.088).T(1.294,0.6).T(1.412,0.3,0.088).T(1.5,0.6,0.088).T(1.669,0.6).T(1.787,0.3,0.088).T(1.875,0.6,0.088).T(2.044,0.6).T(2.162,0.3,0.088).T(2.25,0.6,0.088).T(2.419,0.6).T(2.537,0.3,0.088).T(2.625,0.6,0.088).T(2.794,0.6).T(2.912,0.3,0.088).T(3,0.6,0.088).T(3.169,0.6).T(3.287,0.3,0.088).T(3.375,0.6,0.088).T(3.544,0.6).T(3.662,0.3,0.088).T(3.75,0.6,0.088).T(3.919,0.6).T(4.037,0.3,0.088).T(4.125,0.6,0.088).T(4.294,0.6).T(4.412,0.3,0.088).T(4.5,0.6,0.088).T(4.669,0.6).T(4.787,0.3,0.088).T(4.875,0.6,0.088).T(5.044,0.6).T(5.162,0.3,0.088).T(5.25,0.6,0.088).T(5.419,0.6).T(5.537,0.3,0.088).T(5.625,0.6,0.088).T(5.794,0.6).T(5.912,0.3,0.088).T(6,0.6,0.088).T(6.169,0.6).T(6.287,0.3,0.088).T(6.375,0.6,0.088).T(6.544,0.6).T(6.662,0.3,0.088).T(6.75,0.6,0.088).T(6.919,0.6).T(7.037,0.3,0.088).T(7.125,0.6,0.088).T(7.294,0.6).T(7.412,0.3,0.088).T(7.5,0.6,0.088).T(7.669,0.6).T(7.787,0.3,0.088).T(7.875,0.6,0.088).T(8.044,0.6).T(8.162,0.3,0.088).T(8.25,0.6,0.088).T(8.419,0.6).P(zy,0.3,t).T(0,0.3).T(0.169,0.3).T(0.375,0.3).T(0.544,0.3).T(0.75,0.3).T(0.919,0.3).T(1.125,0.3).T(1.294,0.3).T(1.5,0.3).T(1.669,0.3).T(1.875,0.3).T(2.044,0.3).T(2.25,0.3).T(2.419,0.3).T(2.625,0.3).T(2.794,0.3).T(3,0.3).T(3.169,0.3).T(3.375,0.3).T(3.544,0.3).T(3.75,0.3).T(3.919,0.3).T(4.125,0.3).T(4.294,0.3).T(4.5,0.3).T(4.669,0.3).T(4.875,0.3).T(5.044,0.3).T(5.25,0.3).T(5.419,0.3).T(5.625,0.3).T(5.794,0.3).T(6,0.3).T(6.169,0.3).T(6.375,0.3).T(6.544,0.3).T(6.75,0.3).T(6.919,0.3).T(7.125,0.3).T(7.294,0.3).T(7.5,0.3).T(7.669,0.3).T(7.875,0.3).T(8.044,0.3).T(8.25,0.3).T(8.419,0.3).P(lf,-109,_,_,p).T(0,-48,0.044).T(0.044,2,0.024).T(0.068,31,0.101).T(0.206,2,0.101).T(0.307,-48,0.024).T(0.331,-109,0.044).T(0.375,-48,0.044).T(0.419,2,0.024).T(0.443,31,0.101).T(0.581,2,0.101).T(0.682,-48,0.024).T(0.706,-109,0.044).T(0.75,-48,0.044).T(0.794,2,0.024).T(0.818,31,0.101).T(0.956,2,0.101).T(1.057,-48,0.024).T(1.081,-109,0.044).T(1.125,-48,0.044).T(1.169,2,0.024).T(1.193,31,0.101).T(1.331,2,0.101).T(1.432,-48,0.024).T(1.456,-109,0.044).T(1.5,-48,0.044).T(1.544,2,0.024).T(1.568,31,0.101).T(1.706,2,0.101).T(1.807,-48,0.024).T(1.831,-109,0.044).T(1.875,-48,0.044).T(1.919,2,0.024).T(1.943,31,0.101).T(2.081,2,0.101).T(2.182,-48,0.024).T(2.206,-109,0.044).T(2.25,-48,0.044).T(2.294,2,0.024).T(2.318,31,0.101).T(2.456,2,0.101).T(2.557,-48,0.024).T(2.581,-109,0.044).T(2.625,-48,0.044).T(2.669,2,0.024).T(2.693,31,0.101).T(2.831,2,0.101).T(2.932,-48,0.024).T(2.956,-109,0.044).T(3,-48,0.044).T(3.044,2,0.024).T(3.068,31,0.101).T(3.206,2,0.101).T(3.307,-48,0.024).T(3.331,-109,0.044).T(3.375,-48,0.044).T(3.419,2,0.024).T(3.443,31,0.101).T(3.581,2,0.101).T(3.682,-48,0.024).T(3.706,-109,0.044).T(3.75,-48,0.044).T(3.794,2,0.024).T(3.818,31,0.101).T(3.956,2,0.101).T(4.057,-48,0.024).T(4.081,-109,0.044).T(4.125,-48,0.044).T(4.169,2,0.024).T(4.193,31,0.101).T(4.331,2,0.101).T(4.432,-48,0.024).T(4.456,-109,0.044).T(4.5,-48,0.044).T(4.544,2,0.024).T(4.568,31,0.101).T(4.706,2,0.101).T(4.807,-48,0.024).T(4.831,-109,0.044).T(4.875,-48,0.044).T(4.919,2,0.024).T(4.943,31,0.101).T(5.081,2,0.101).T(5.182,-48,0.024).T(5.206,-109,0.044).T(5.25,-48,0.044).T(5.294,2,0.024).T(5.318,31,0.101).T(5.456,2,0.101).T(5.557,-48,0.024).T(5.581,-109,0.044).T(5.625,-48,0.044).T(5.669,2,0.024).T(5.693,31,0.101).T(5.831,2,0.101).T(5.932,-48,0.024).T(5.956,-109,0.044).T(6,-48,0.044).T(6.044,2,0.024).T(6.068,31,0.101).T(6.206,2,0.101).T(6.307,-48,0.024).T(6.331,-109,0.044).T(6.375,-48,0.044).T(6.419,2,0.024).T(6.443,31,0.101).T(6.581,2,0.101).T(6.682,-48,0.024).T(6.706,-109,0.044).T(6.75,-48,0.044).T(6.794,2,0.024).T(6.818,31,0.101).T(6.956,2,0.101).T(7.057,-48,0.024).T(7.081,-109,0.044).T(7.125,-48,0.044).T(7.169,2,0.024).T(7.193,31,0.101).T(7.331,2,0.101).T(7.432,-48,0.024).T(7.456,-109,0.044).T(7.5,-48,0.044).T(7.544,2,0.024).T(7.568,31,0.101).T(7.706,2,0.101).T(7.807,-48,0.024).T(7.831,-109,0.044).T(7.875,-48,0.044).T(7.919,2,0.024).T(7.943,31,0.101).T(8.08,2,0.101).T(8.182,-48,0.024).T(8.206,-109,0.044).T(8.25,-48,0.044).T(8.294,2,0.024).T(8.318,31,0.101).P(w,171).T(0,112,0.044).T(0.044,65,0.024).T(0.068,27,0.101).T(0.206,65,0.101).T(0.307,112,0.024).T(0.331,171,0.044).T(0.375,112,0.044).T(0.419,65,0.024).T(0.443,27,0.101).T(0.581,65,0.101).T(0.682,112,0.024).T(0.706,171,0.044).T(0.75,112,0.044).T(0.794,65,0.024).T(0.818,27,0.101).T(0.956,65,0.101).T(1.057,112,0.024).T(1.081,171,0.044).T(1.125,112,0.044).T(1.169,65,0.024).T(1.193,27,0.101).T(1.331,65,0.101).T(1.432,112,0.024).T(1.456,171,0.044).T(1.5,112,0.044).T(1.544,65,0.024).T(1.568,27,0.101).T(1.706,65,0.101).T(1.807,112,0.024).T(1.831,171,0.044).T(1.875,112,0.044).T(1.919,65,0.024).T(1.943,27,0.101).T(2.081,65,0.101).T(2.182,112,0.024).T(2.206,171,0.044).T(2.25,112,0.044).T(2.294,65,0.024).T(2.318,27,0.101).T(2.456,65,0.101).T(2.557,112,0.024).T(2.581,171,0.044).T(2.625,112,0.044).T(2.669,65,0.024).T(2.693,27,0.101).T(2.831,65,0.101).T(2.932,112,0.024).T(2.956,171,0.044).T(3,112,0.044).T(3.044,65,0.024).T(3.068,27,0.101).T(3.206,65,0.101).T(3.307,112,0.024).T(3.331,171,0.044).T(3.375,112,0.044).T(3.419,65,0.024).T(3.443,27,0.101).T(3.581,65,0.101).T(3.682,112,0.024).T(3.706,171,0.044).T(3.75,112,0.044).T(3.794,65,0.024).T(3.818,27,0.101).T(3.956,65,0.101).T(4.057,112,0.024).T(4.081,171,0.044).T(4.125,112,0.044).T(4.169,65,0.024).T(4.193,27,0.101).T(4.331,65,0.101).T(4.432,112,0.024).T(4.456,171,0.044).T(4.5,112,0.044).T(4.544,65,0.024).T(4.568,27,0.101).T(4.706,65,0.101).T(4.807,112,0.024).T(4.831,171,0.044).T(4.875,112,0.044).T(4.919,65,0.024).T(4.943,27,0.101).T(5.081,65,0.101).T(5.182,112,0.024).T(5.206,171,0.044).T(5.25,112,0.044).T(5.294,65,0.024).T(5.318,27,0.101).T(5.456,65,0.101).T(5.557,112,0.024).T(5.581,171,0.044).T(5.625,112,0.044).T(5.669,65,0.024).T(5.693,27,0.101).T(5.831,65,0.101).T(5.932,112,0.024).T(5.956,171,0.044).T(6,112,0.044).T(6.044,65,0.024).T(6.068,27,0.101).T(6.206,65,0.101).T(6.307,112,0.024).T(6.331,171,0.044).T(6.375,112,0.044).T(6.419,65,0.024).T(6.443,27,0.101).T(6.581,65,0.101).T(6.682,112,0.024).T(6.706,171,0.044).T(6.75,112,0.044).T(6.794,65,0.024).T(6.818,27,0.101).T(6.956,65,0.101).T(7.057,112,0.024).T(7.081,171,0.044).T(7.125,112,0.044).T(7.169,65,0.024).T(7.193,27,0.101).T(7.331,65,0.101).T(7.432,112,0.024).T(7.456,171,0.044).T(7.5,112,0.044).T(7.544,65,0.024).T(7.568,27,0.101).T(7.706,65,0.101).T(7.807,112,0.024).T(7.831,171,0.044).T(7.875,112,0.044).T(7.919,65,0.024).T(7.943,27,0.101).T(8.08,65,0.101).T(8.182,112,0.024).T(8.206,171,0.044).T(8.25,112,0.044).T(8.294,65,0.024).T(8.318,27,0.101);A1.A(e14).P(or,[100,50],_,x8).P(oz,[100,50],_,x8).P(om,[100,50],_,x8).P(on,[100,50],_,x8).P(oo,[100,50],_,x8).P(w,192).P(tp,-26).T(0.088,-26,0.081,ql).T(0.206,-26,0.081).T(0.463,-26,0.081).T(0.581,-26,0.081).T(0.838,-26,0.081).T(0.956,-26,0.081).T(1.213,-26,0.081).T(1.331,-26,0.081).T(1.588,-26,0.081).T(1.706,-26,0.081).T(1.963,-26,0.081).T(2.081,-26,0.081).T(2.338,-26,0.081).T(2.456,-26,0.081).T(2.713,-26,0.081).T(2.831,-26,0.081).T(3.088,-26,0.081).T(3.206,-26,0.081).T(3.463,-26,0.081).T(3.581,-26,0.081).T(3.838,-26,0.081).T(3.956,-26,0.081).T(4.213,-26,0.081).T(4.331,-26,0.081).T(4.588,-26,0.081).T(4.706,-26,0.081).T(4.963,-26,0.081).T(5.081,-26,0.081).T(5.338,-26,0.081).T(5.456,-26,0.081).T(5.713,-26,0.081).T(5.831,-26,0.081).T(6.088,-26,0.081).T(6.206,-26,0.081).T(6.463,-26,0.081).T(6.581,-26,0.081).T(6.838,-26,0.081).T(6.956,-26,0.081).T(7.213,-26,0.081).T(7.331,-26,0.081).T(7.588,-26,0.081).T(7.706,-26,0.081).T(7.963,-26,0.081).T(8.08,-26,0.081).T(8.338,-26,0.081).P(zy,0.3,t,_,"").T(0.088,0.1,0.081).T(0.206,0.3,0.081).T(0.463,0.1,0.081).T(0.581,0.3,0.081).T(0.838,0.1,0.081).T(0.956,0.3,0.081).T(1.213,0.1,0.081).T(1.331,0.3,0.081).T(1.588,0.1,0.081).T(1.706,0.3,0.081).T(1.963,0.1,0.081).T(2.081,0.3,0.081).T(2.338,0.1,0.081).T(2.456,0.3,0.081).T(2.713,0.1,0.081).T(2.831,0.3,0.081).T(3.088,0.1,0.081).T(3.206,0.3,0.081).T(3.463,0.1,0.081).T(3.581,0.3,0.081).T(3.838,0.1,0.081).T(3.956,0.3,0.081).T(4.213,0.1,0.081).T(4.331,0.3,0.081).T(4.588,0.1,0.081).T(4.706,0.3,0.081).T(4.963,0.1,0.081).T(5.081,0.3,0.081).T(5.338,0.1,0.081).T(5.456,0.3,0.081).T(5.713,0.1,0.081).T(5.831,0.3,0.081).T(6.088,0.1,0.081).T(6.206,0.3,0.081).T(6.463,0.1,0.081).T(6.581,0.3,0.081).T(6.838,0.1,0.081).T(6.956,0.3,0.081).T(7.213,0.1,0.081).T(7.331,0.3,0.081).T(7.588,0.1,0.081).T(7.706,0.3,0.081).T(7.963,0.1,0.081).T(8.08,0.3,0.081).T(8.338,0.1,0.081).P(rz,87,t,_,r).T(0.088,57,0.081).T(0.206,87,0.081).T(0.463,57,0.081).T(0.581,87,0.081).T(0.838,57,0.081).T(0.956,87,0.081).T(1.213,57,0.081).T(1.331,87,0.081).T(1.588,57,0.081).T(1.706,87,0.081).T(1.963,57,0.081).T(2.081,87,0.081).T(2.338,57,0.081).T(2.456,87,0.081).T(2.713,57,0.081).T(2.831,87,0.081).T(3.088,57,0.081).T(3.206,87,0.081).T(3.463,57,0.081).T(3.581,87,0.081).T(3.838,57,0.081).T(3.956,87,0.081).T(4.213,57,0.081).T(4.331,87,0.081).T(4.588,57,0.081).T(4.706,87,0.081).T(4.963,57,0.081).T(5.081,87,0.081).T(5.338,57,0.081).T(5.456,87,0.081).T(5.713,57,0.081).T(5.831,87,0.081).T(6.088,57,0.081).T(6.206,87,0.081).T(6.463,57,0.081).T(6.581,87,0.081).T(6.838,57,0.081).T(6.956,87,0.081).T(7.213,57,0.081).T(7.331,87,0.081).T(7.588,57,0.081).T(7.706,87,0.081).T(7.963,57,0.081).T(8.08,87,0.081).T(8.338,57,0.081).P(zx,-0.18,t,_,"").T(0.088,-0.27,0.081).T(0.206,-0.18,0.081).T(0.463,-0.27,0.081).T(0.581,-0.18,0.081).T(0.838,-0.27,0.081).T(0.956,-0.18,0.081).T(1.213,-0.27,0.081).T(1.331,-0.18,0.081).T(1.588,-0.27,0.081).T(1.706,-0.18,0.081).T(1.963,-0.27,0.081).T(2.081,-0.18,0.081).T(2.338,-0.27,0.081).T(2.456,-0.18,0.081).T(2.713,-0.27,0.081).T(2.831,-0.18,0.081).T(3.088,-0.27,0.081).T(3.206,-0.18,0.081).T(3.463,-0.27,0.081).T(3.581,-0.18,0.081).T(3.838,-0.27,0.081).T(3.956,-0.18,0.081).T(4.213,-0.27,0.081).T(4.331,-0.18,0.081).T(4.588,-0.27,0.081).T(4.706,-0.18,0.081).T(4.963,-0.27,0.081).T(5.081,-0.18,0.081).T(5.338,-0.27,0.081).T(5.456,-0.18,0.081).T(5.713,-0.27,0.081).T(5.831,-0.18,0.081).T(6.088,-0.27,0.081).T(6.206,-0.18,0.081).T(6.463,-0.27,0.081).T(6.581,-0.18,0.081).T(6.838,-0.27,0.081).T(6.956,-0.18,0.081).T(7.213,-0.27,0.081).T(7.331,-0.18,0.081).T(7.588,-0.27,0.081).T(7.706,-0.18,0.081).T(7.963,-0.27,0.081).T(8.08,-0.18,0.081).T(8.338,-0.27,0.081).P(ky,57,t,_,r).T(0.088,21,0.081).T(0.206,57,0.081).T(0.463,21,0.081).T(0.581,57,0.081).T(0.838,21,0.081).T(0.956,57,0.081).T(1.213,21,0.081).T(1.331,57,0.081).T(1.588,21,0.081).T(1.706,57,0.081).T(1.963,21,0.081).T(2.081,57,0.081).T(2.338,21,0.081).T(2.456,57,0.081).T(2.713,21,0.081).T(2.831,57,0.081).T(3.088,21,0.081).T(3.206,57,0.081).T(3.463,21,0.081).T(3.581,57,0.081).T(3.838,21,0.081).T(3.956,57,0.081).T(4.213,21,0.081).T(4.331,57,0.081).T(4.588,21,0.081).T(4.706,57,0.081).T(4.963,21,0.081).T(5.081,57,0.081).T(5.338,21,0.081).T(5.456,57,0.081).T(5.713,21,0.081).T(5.831,57,0.081).T(6.088,21,0.081).T(6.206,57,0.081).T(6.463,21,0.081).T(6.581,57,0.081).T(6.838,21,0.081).T(6.956,57,0.081).T(7.213,21,0.081).T(7.331,57,0.081).T(7.588,21,0.081).T(7.706,57,0.081).T(7.963,21,0.081).T(8.08,57,0.081).T(8.338,21,0.081).P(lf,-126,_,_,p).T(0.088,-137,0.081).T(0.206,-126,0.081).T(0.463,-137,0.081).T(0.581,-126,0.081).T(0.838,-137,0.081).T(0.956,-126,0.081).T(1.213,-137,0.081).T(1.331,-126,0.081).T(1.588,-137,0.081).T(1.706,-126,0.081).T(1.963,-137,0.081).T(2.081,-126,0.081).T(2.338,-137,0.081).T(2.456,-126,0.081).T(2.713,-137,0.081).T(2.831,-126,0.081).T(3.088,-137,0.081).T(3.206,-126,0.081).T(3.463,-137,0.081).T(3.581,-126,0.081).T(3.838,-137,0.081).T(3.956,-126,0.081).T(4.213,-137,0.081).T(4.331,-126,0.081).T(4.588,-137,0.081).T(4.706,-126,0.081).T(4.963,-137,0.081).T(5.081,-126,0.081).T(5.338,-137,0.081).T(5.456,-126,0.081).T(5.713,-137,0.081).T(5.831,-126,0.081).T(6.088,-137,0.081).T(6.206,-126,0.081).T(6.463,-137,0.081).T(6.581,-126,0.081).T(6.838,-137,0.081).T(6.956,-126,0.081).T(7.213,-137,0.081).T(7.331,-126,0.081).T(7.588,-137,0.081).T(7.706,-126,0.081).T(7.963,-137,0.081).T(8.08,-126,0.081).T(8.338,-137,0.081).P(d,i).T(0.088,b).T(0.287,i).T(0.463,b).T(0.662,i).T(0.838,b).T(1.037,i).T(1.213,b).T(1.412,i).T(1.588,b).T(1.787,i).T(1.963,b).T(2.162,i).T(2.338,b).T(2.537,i).T(2.713,b).T(2.912,i).T(3.088,b).T(3.287,i).T(3.463,b).T(3.662,i).T(3.838,b).T(4.037,i).T(4.213,b).T(4.412,i).T(4.588,b).T(4.787,i).T(4.963,b).T(5.162,i).T(5.338,b).T(5.537,i).T(5.713,b).T(5.912,i).T(6.088,b).T(6.287,i).T(6.463,b).T(6.662,i).T(6.838,b).T(7.037,i).T(7.213,b).T(7.412,i).T(7.588,b).T(7.787,i).T(7.963,b).T(8.162,i).T(8.338,b);A1.A(e15).P(or,[100,50],_,x8).P(oz,[100,50],_,x8).P(om,[100,50],_,x8).P(on,[100,50],_,x8).P(oo,[100,50],_,x8).P(ky,21,t,_,r).P(kx,-22,t).P(tp,-27,_,_,p).T(0,-24,0.044,ql).T(0.044,-30,0.024).T(0.068,-34,0.02).T(0.088,-30,0.081).T(0.206,-34,0.081).T(0.287,-30,0.02).T(0.307,-24,0.024).T(0.331,-27,0.044).T(0.375,-24,0.044).T(0.419,-30,0.024).T(0.443,-34,0.02).T(0.463,-30,0.081).T(0.581,-34,0.081).T(0.662,-30,0.02).T(0.682,-24,0.024).T(0.706,-27,0.044).T(0.75,-24,0.044).T(0.794,-30,0.024).T(0.818,-34,0.02).T(0.838,-30,0.081).T(0.956,-34,0.081).T(1.037,-30,0.02).T(1.057,-24,0.024).T(1.081,-27,0.044).T(1.125,-24,0.044).T(1.169,-30,0.024).T(1.193,-34,0.02).T(1.213,-30,0.081).T(1.331,-34,0.081).T(1.412,-30,0.02).T(1.432,-24,0.024).T(1.456,-27,0.044).T(1.5,-24,0.044).T(1.544,-30,0.024).T(1.568,-34,0.02).T(1.588,-30,0.081).T(1.706,-34,0.081).T(1.787,-30,0.02).T(1.807,-24,0.024).T(1.831,-27,0.044).T(1.875,-24,0.044).T(1.919,-30,0.024).T(1.943,-34,0.02).T(1.963,-30,0.081).T(2.081,-34,0.081).T(2.162,-30,0.02).T(2.182,-24,0.024).T(2.206,-27,0.044).T(2.25,-24,0.044).T(2.294,-30,0.024).T(2.318,-34,0.02).T(2.338,-30,0.081).T(2.456,-34,0.081).T(2.537,-30,0.02).T(2.557,-24,0.024).T(2.581,-27,0.044).T(2.625,-24,0.044).T(2.669,-30,0.024).T(2.693,-34,0.02).T(2.713,-30,0.081).T(2.831,-34,0.081).T(2.912,-30,0.02).T(2.932,-24,0.024).T(2.956,-27,0.044).T(3,-24,0.044).T(3.044,-30,0.024).T(3.068,-34,0.02).T(3.088,-30,0.081).T(3.206,-34,0.081).T(3.287,-30,0.02).T(3.307,-24,0.024).T(3.331,-27,0.044).T(3.375,-24,0.044).T(3.419,-30,0.024).T(3.443,-34,0.02).T(3.463,-30,0.081).T(3.581,-34,0.081).T(3.662,-30,0.02).T(3.682,-24,0.024).T(3.706,-27,0.044).T(3.75,-24,0.044).T(3.794,-30,0.024).T(3.818,-34,0.02).T(3.838,-30,0.081).T(3.956,-34,0.081).T(4.037,-30,0.02).T(4.057,-24,0.024).T(4.081,-27,0.044).T(4.125,-24,0.044).T(4.169,-30,0.024).T(4.193,-34,0.02).T(4.213,-30,0.081).T(4.331,-34,0.081).T(4.412,-30,0.02).T(4.432,-24,0.024).T(4.456,-27,0.044).T(4.5,-24,0.044).T(4.544,-30,0.024).T(4.568,-34,0.02).T(4.588,-30,0.081).T(4.706,-34,0.081).T(4.787,-30,0.02).T(4.807,-24,0.024).T(4.831,-27,0.044).T(4.875,-24,0.044).T(4.919,-30,0.024).T(4.943,-34,0.02).T(4.963,-30,0.081).T(5.081,-34,0.081).T(5.162,-30,0.02).T(5.182,-24,0.024).T(5.206,-27,0.044).T(5.25,-24,0.044).T(5.294,-30,0.024).T(5.318,-34,0.02).T(5.338,-30,0.081).T(5.456,-34,0.081).T(5.537,-30,0.02).T(5.557,-24,0.024).T(5.581,-27,0.044).T(5.625,-24,0.044).T(5.669,-30,0.024).T(5.693,-34,0.02).T(5.713,-30,0.081).T(5.831,-34,0.081).T(5.912,-30,0.02).T(5.932,-24,0.024).T(5.956,-27,0.044).T(6,-24,0.044).T(6.044,-30,0.024).T(6.068,-34,0.02).T(6.088,-30,0.081).T(6.206,-34,0.081).T(6.287,-30,0.02).T(6.307,-24,0.024).T(6.331,-27,0.044).T(6.375,-24,0.044).T(6.419,-30,0.024).T(6.443,-34,0.02).T(6.463,-30,0.081).T(6.581,-34,0.081).T(6.662,-30,0.02).T(6.682,-24,0.024).T(6.706,-27,0.044).T(6.75,-24,0.044).T(6.794,-30,0.024).T(6.818,-34,0.02).T(6.838,-30,0.081).T(6.956,-34,0.081).T(7.037,-30,0.02).T(7.057,-24,0.024).T(7.081,-27,0.044).T(7.125,-24,0.044).T(7.169,-30,0.024).T(7.193,-34,0.02).T(7.213,-30,0.081).T(7.331,-34,0.081).T(7.412,-30,0.02).T(7.432,-24,0.024).T(7.456,-27,0.044).T(7.5,-24,0.044).T(7.544,-30,0.024).T(7.568,-34,0.02).T(7.588,-30,0.081).T(7.706,-34,0.081).T(7.787,-30,0.02).T(7.807,-24,0.024).T(7.831,-27,0.044).T(7.875,-24,0.044).T(7.919,-30,0.024).T(7.943,-34,0.02).T(7.963,-30,0.081).T(8.08,-34,0.081).T(8.162,-30,0.02).T(8.182,-24,0.024).T(8.206,-27,0.044).P(zy,0.3,t,_,"").T(0,0.11,0.169).T(0.206,0.3,0.169).T(0.375,0.11,0.169).T(0.581,0.3,0.169).T(0.75,0.11,0.169).T(0.956,0.3,0.169).T(1.125,0.11,0.169).T(1.331,0.3,0.169).T(1.5,0.11,0.169).T(1.706,0.3,0.169).T(1.875,0.11,0.169).T(2.081,0.3,0.169).T(2.25,0.11,0.169).T(2.456,0.3,0.169).T(2.625,0.11,0.169).T(2.831,0.3,0.169).T(3,0.11,0.169).T(3.206,0.3,0.169).T(3.375,0.11,0.169).T(3.581,0.3,0.169).T(3.75,0.11,0.169).T(3.956,0.3,0.169).T(4.125,0.11,0.169).T(4.331,0.3,0.169).T(4.5,0.11,0.169).T(4.706,0.3,0.169).T(4.875,0.11,0.169).T(5.081,0.3,0.169).T(5.25,0.11,0.169).T(5.456,0.3,0.169).T(5.625,0.11,0.169).T(5.831,0.3,0.169).T(6,0.11,0.169).T(6.206,0.3,0.169).T(6.375,0.11,0.169).T(6.581,0.3,0.169).T(6.75,0.11,0.169).T(6.956,0.3,0.169).T(7.125,0.11,0.169).T(7.331,0.3,0.169).T(7.5,0.11,0.169).T(7.706,0.3,0.169).T(7.875,0.11,0.169).T(8.08,0.3,0.169).P(rz,50,t,_,r).T(0,31,0.169).T(0.206,50,0.169).T(0.375,31,0.169).T(0.581,50,0.169).T(0.75,31,0.169).T(0.956,50,0.169).T(1.125,31,0.169).T(1.331,50,0.169).T(1.5,31,0.169).T(1.706,50,0.169).T(1.875,31,0.169).T(2.081,50,0.169).T(2.25,31,0.169).T(2.456,50,0.169).T(2.625,31,0.169).T(2.831,50,0.169).T(3,31,0.169).T(3.206,50,0.169).T(3.375,31,0.169).T(3.581,50,0.169).T(3.75,31,0.169).T(3.956,50,0.169).T(4.125,31,0.169).T(4.331,50,0.169).T(4.5,31,0.169).T(4.706,50,0.169).T(4.875,31,0.169).T(5.081,50,0.169).T(5.25,31,0.169).T(5.456,50,0.169).T(5.625,31,0.169).T(5.831,50,0.169).T(6,31,0.169).T(6.206,50,0.169).T(6.375,31,0.169).T(6.581,50,0.169).T(6.75,31,0.169).T(6.956,50,0.169).T(7.125,31,0.169).T(7.331,50,0.169).T(7.5,31,0.169).T(7.706,50,0.169).T(7.875,31,0.169).T(8.08,50,0.169).P(zx,0.3,t,_,"").T(0,-0.29,0.169).T(0.206,0.3,0.169).T(0.375,-0.29,0.169).T(0.581,0.3,0.169).T(0.75,-0.29,0.169).T(0.956,0.3,0.169).T(1.125,-0.29,0.169).T(1.331,0.3,0.169).T(1.5,-0.29,0.169).T(1.706,0.3,0.169).T(1.875,-0.29,0.169).T(2.081,0.3,0.169).T(2.25,-0.29,0.169).T(2.456,0.3,0.169).T(2.625,-0.29,0.169).T(2.831,0.3,0.169).T(3,-0.29,0.169).T(3.206,0.3,0.169).T(3.375,-0.29,0.169).T(3.581,0.3,0.169).T(3.75,-0.29,0.169).T(3.956,0.3,0.169).T(4.125,-0.29,0.169).T(4.331,0.3,0.169).T(4.5,-0.29,0.169).T(4.706,0.3,0.169).T(4.875,-0.29,0.169).T(5.081,0.3,0.169).T(5.25,-0.29,0.169).T(5.456,0.3,0.169).T(5.625,-0.29,0.169).T(5.831,0.3,0.169).T(6,-0.29,0.169).T(6.206,0.3,0.169).T(6.375,-0.29,0.169).T(6.581,0.3,0.169).T(6.75,-0.29,0.169).T(6.956,0.3,0.169).T(7.125,-0.29,0.169).T(7.331,0.3,0.169).T(7.5,-0.29,0.169).T(7.706,0.3,0.169).T(7.875,-0.29,0.169).T(8.08,0.3,0.169).P(lf,-110,_,_,p).T(0,-125,0.044).T(0.044,-114,0.024).T(0.068,-128,0.02).T(0.088,-179,0.081).T(0.206,-128,0.081).T(0.287,-114,0.02).T(0.307,-125,0.024).T(0.331,-110,0.044).T(0.375,-125,0.044).T(0.419,-114,0.024).T(0.443,-128,0.02).T(0.463,-179,0.081).T(0.581,-128,0.081).T(0.662,-114,0.02).T(0.682,-125,0.024).T(0.706,-110,0.044).T(0.75,-125,0.044).T(0.794,-114,0.024).T(0.818,-128,0.02).T(0.838,-179,0.081).T(0.956,-128,0.081).T(1.037,-114,0.02).T(1.057,-125,0.024).T(1.081,-110,0.044).T(1.125,-125,0.044).T(1.169,-114,0.024).T(1.193,-128,0.02).T(1.213,-179,0.081).T(1.331,-128,0.081).T(1.412,-114,0.02).T(1.432,-125,0.024).T(1.456,-110,0.044).T(1.5,-125,0.044).T(1.544,-114,0.024).T(1.568,-128,0.02).T(1.588,-179,0.081).T(1.706,-128,0.081).T(1.787,-114,0.02).T(1.807,-125,0.024).T(1.831,-110,0.044).T(1.875,-125,0.044).T(1.919,-114,0.024).T(1.943,-128,0.02).T(1.963,-179,0.081).T(2.081,-128,0.081).T(2.162,-114,0.02).T(2.182,-125,0.024).T(2.206,-110,0.044).T(2.25,-125,0.044).T(2.294,-114,0.024).T(2.318,-128,0.02).T(2.338,-179,0.081).T(2.456,-128,0.081).T(2.537,-114,0.02).T(2.557,-125,0.024).T(2.581,-110,0.044).T(2.625,-125,0.044).T(2.669,-114,0.024).T(2.693,-128,0.02).T(2.713,-179,0.081).T(2.831,-128,0.081).T(2.912,-114,0.02).T(2.932,-125,0.024).T(2.956,-110,0.044).T(3,-125,0.044).T(3.044,-114,0.024).T(3.068,-128,0.02).T(3.088,-179,0.081).T(3.206,-128,0.081).T(3.287,-114,0.02).T(3.307,-125,0.024).T(3.331,-110,0.044).T(3.375,-125,0.044).T(3.419,-114,0.024).T(3.443,-128,0.02).T(3.463,-179,0.081).T(3.581,-128,0.081).T(3.662,-114,0.02).T(3.682,-125,0.024).T(3.706,-110,0.044).T(3.75,-125,0.044).T(3.794,-114,0.024).T(3.818,-128,0.02).T(3.838,-179,0.081).T(3.956,-128,0.081).T(4.037,-114,0.02).T(4.057,-125,0.024).T(4.081,-110,0.044).T(4.125,-125,0.044).T(4.169,-114,0.024).T(4.193,-128,0.02).T(4.213,-179,0.081).T(4.331,-128,0.081).T(4.412,-114,0.02).T(4.432,-125,0.024).T(4.456,-110,0.044).T(4.5,-125,0.044).T(4.544,-114,0.024).T(4.568,-128,0.02).T(4.588,-179,0.081).T(4.706,-128,0.081).T(4.787,-114,0.02).T(4.807,-125,0.024).T(4.831,-110,0.044).T(4.875,-125,0.044).T(4.919,-114,0.024).T(4.943,-128,0.02).T(4.963,-179,0.081).T(5.081,-128,0.081).T(5.162,-114,0.02).T(5.182,-125,0.024).T(5.206,-110,0.044).T(5.25,-125,0.044).T(5.294,-114,0.024).T(5.318,-128,0.02).T(5.338,-179,0.081).T(5.456,-128,0.081).T(5.537,-114,0.02).T(5.557,-125,0.024).T(5.581,-110,0.044).T(5.625,-125,0.044).T(5.669,-114,0.024).T(5.693,-128,0.02).T(5.713,-179,0.081).T(5.831,-128,0.081).T(5.912,-114,0.02).T(5.932,-125,0.024).T(5.956,-110,0.044).T(6,-125,0.044).T(6.044,-114,0.024).T(6.068,-128,0.02).T(6.088,-179,0.081).T(6.206,-128,0.081).T(6.287,-114,0.02).T(6.307,-125,0.024).T(6.331,-110,0.044).T(6.375,-125,0.044).T(6.419,-114,0.024).T(6.443,-128,0.02).T(6.463,-179,0.081).T(6.581,-128,0.081).T(6.662,-114,0.02).T(6.682,-125,0.024).T(6.706,-110,0.044).T(6.75,-125,0.044).T(6.794,-114,0.024).T(6.818,-128,0.02).T(6.838,-179,0.081).T(6.956,-128,0.081).T(7.037,-114,0.02).T(7.057,-125,0.024).T(7.081,-110,0.044).T(7.125,-125,0.044).T(7.169,-114,0.024).T(7.193,-128,0.02).T(7.213,-179,0.081).T(7.331,-128,0.081).T(7.412,-114,0.02).T(7.432,-125,0.024).T(7.456,-110,0.044).T(7.5,-125,0.044).T(7.544,-114,0.024).T(7.568,-128,0.02).T(7.588,-179,0.081).T(7.706,-128,0.081).T(7.787,-114,0.02).T(7.807,-125,0.024).T(7.831,-110,0.044).T(7.875,-125,0.044).T(7.919,-114,0.024).T(7.943,-128,0.02).T(7.963,-179,0.081).T(8.08,-128,0.081).T(8.162,-114,0.02).T(8.182,-125,0.024).T(8.206,-110,0.044).P(w,171).T(0,232,0.169).T(0.206,171,0.169).T(0.375,232,0.169).T(0.581,171,0.169).T(0.75,232,0.169).T(0.956,171,0.169).T(1.125,232,0.169).T(1.331,171,0.169).T(1.5,232,0.169).T(1.706,171,0.169).T(1.875,232,0.169).T(2.081,171,0.169).T(2.25,232,0.169).T(2.456,171,0.169).T(2.625,232,0.169).T(2.831,171,0.169).T(3,232,0.169).T(3.206,171,0.169).T(3.375,232,0.169).T(3.581,171,0.169).T(3.75,232,0.169).T(3.956,171,0.169).T(4.125,232,0.169).T(4.331,171,0.169).T(4.5,232,0.169).T(4.706,171,0.169).T(4.875,232,0.169).T(5.081,171,0.169).T(5.25,232,0.169).T(5.456,171,0.169).T(5.625,232,0.169).T(5.831,171,0.169).T(6,232,0.169).T(6.206,171,0.169).T(6.375,232,0.169).T(6.581,171,0.169).T(6.75,232,0.169).T(6.956,171,0.169).T(7.125,232,0.169).T(7.331,171,0.169).T(7.5,232,0.169).T(7.706,171,0.169).T(7.875,232,0.169).T(8.08,171,0.169);var S2=symbols[x35];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e36).P(h,273).P(w,289);A2.A(e12).P(lf,116).P(tp,160);A2.A(e13).P(or,[100,50],_,x8).P(oz,[100,50],_,x8).P(om,[100,50],_,x8).P(on,[100,50],_,x8).P(oo,[100,50],_,x8).P(kx,-22,t,_,r).P(ky,21,t).P(tp,124,_,_,p).P(zx,1,t,_,"").T(0,-0.78,0.169,ql).T(0.169,1,0.169).T(0.338,-0.78,0.169).T(0.507,1,0.169).T(0.676,-0.78,0.169).T(0.845,1,0.169).T(1.014,-0.78,0.169).T(1.183,1,0.169).T(1.352,-0.78,0.169).T(1.521,1,0.169).T(1.69,-0.78,0.169).T(1.859,1,0.169).T(2.028,-0.78,0.169).T(2.197,1,0.169).T(2.366,-0.78,0.169).T(2.535,1,0.169).P(w,171,_,_,p).T(0,232,0.169).T(0.169,171,0.169).T(0.338,232,0.169).T(0.507,171,0.169).T(0.676,232,0.169).T(0.845,171,0.169).T(1.014,232,0.169).T(1.183,171,0.169).T(1.352,232,0.169).T(1.521,171,0.169).T(1.69,232,0.169).T(1.859,171,0.169).T(2.028,232,0.169).T(2.197,171,0.169).T(2.366,232,0.169).T(2.535,171,0.169).P(lf,22).T(0,-67,0.169).T(0.169,-6,0.169).T(0.338,-67,0.169,_,22).T(0.507,-6,0.169).T(0.676,-67,0.169,_,22).T(0.845,-6,0.169).T(1.014,-67,0.169,_,22).T(1.183,-6,0.169).T(1.352,-67,0.169,_,22).T(1.521,-6,0.169).T(1.69,-67,0.169,_,22).T(1.859,-6,0.169).T(2.028,-67,0.169,_,22).T(2.197,-6,0.169).T(2.366,-67,0.169,_,22).T(2.535,-6,0.169).P(rz,50,t,_,r).T(0,31,0.169).T(0.169,50,0.169).T(0.338,31,0.169).T(0.507,50,0.169).T(0.676,31,0.169).T(0.845,50,0.169).T(1.014,31,0.169).T(1.183,50,0.169).T(1.352,31,0.169).T(1.521,50,0.169).T(1.69,31,0.169).T(1.859,50,0.169).T(2.028,31,0.169).T(2.197,50,0.169).T(2.366,31,0.169).T(2.535,50,0.169);A2.A(e14).P(or,[100,50],_,x8).P(oz,[100,50],_,x8).P(om,[100,50],_,x8).P(on,[100,50],_,x8).P(oo,[100,50],_,x8).P(rz,50,t,_,r).P(tp,124,_,_,p).P(lf,2).P(w,192).P(d,b).T(0.088,i).T(0.222,b).T(0.426,i).T(0.56,b).T(0.764,i).T(0.898,b).T(1.102,i).T(1.236,b).T(1.44,i).T(1.574,b).T(1.778,i).T(1.912,b).T(2.116,i).T(2.25,b).T(2.454,i).T(2.588,b).P(ky,0,t,_,r).T(0,-60,0.088,ql).T(0.222,0,0.116).T(0.338,-60,0.088).T(0.56,0,0.116).T(0.676,-60,0.088).T(0.898,0,0.116).T(1.014,-60,0.088).T(1.236,0,0.116).T(1.352,-60,0.088).T(1.574,0,0.116).T(1.69,-60,0.088).T(1.912,0,0.116).T(2.028,-60,0.088).T(2.25,0,0.116).T(2.366,-60,0.088).T(2.588,0,0.116).P(zx,1,t,_,"").T(0,0.6,0.088).T(0.222,1,0.116).T(0.338,0.6,0.088).T(0.56,1,0.116).T(0.676,0.6,0.088).T(0.898,1,0.116).T(1.014,0.6,0.088).T(1.236,1,0.116).T(1.352,0.6,0.088).T(1.574,1,0.116).T(1.69,0.6,0.088).T(1.912,1,0.116).T(2.028,0.6,0.088).T(2.25,1,0.116).T(2.366,0.6,0.088).T(2.588,1,0.116);A2.A(e15).P(tp,109).P(or,[100,50],_,x8).P(oz,[100,50],_,x8).P(om,[100,50],_,x8).P(on,[100,50],_,x8).P(oo,[100,50],_,x8).P(lf,-26).P(w,192).P(zx,-0.6,t,_,"").T(0.088,-0.84,0.084,ql).T(0.172,-0.6,0.05).T(0.426,-0.84,0.084).T(0.51,-0.6,0.05).T(0.764,-0.84,0.084).T(0.848,-0.6,0.05).T(1.102,-0.84,0.084).T(1.186,-0.6,0.05).T(1.44,-0.84,0.084).T(1.524,-0.6,0.05).T(1.778,-0.84,0.084).T(1.862,-0.6,0.05).T(2.116,-0.84,0.084).T(2.2,-0.6,0.05).T(2.454,-0.84,0.084).T(2.538,-0.6,0.05).P(d,i).T(0.088,b).T(0.222,i).T(0.426,b).T(0.56,i).T(0.764,b).T(0.898,i).T(1.102,b).T(1.236,i).T(1.44,b).T(1.574,i).T(1.778,b).T(1.912,i).T(2.116,b).T(2.25,i).T(2.454,b).T(2.588,i).P(ky,57,t,_,r).T(0.088,21,0.084).T(0.172,57,0.05).T(0.426,21,0.084).T(0.51,57,0.05).T(0.764,21,0.084).T(0.848,57,0.05).T(1.102,21,0.084).T(1.186,57,0.05).T(1.44,21,0.084).T(1.524,57,0.05).T(1.778,21,0.084).T(1.862,57,0.05).T(2.116,21,0.084).T(2.2,57,0.05).T(2.454,21,0.084).T(2.538,57,0.05).P(rz,87,t).T(0.088,57,0.084).T(0.172,87,0.05).T(0.426,57,0.084).T(0.51,87,0.05).T(0.764,57,0.084).T(0.848,87,0.05).T(1.102,57,0.084).T(1.186,87,0.05).T(1.44,57,0.084).T(1.524,87,0.05).T(1.778,57,0.084).T(1.862,87,0.05).T(2.116,57,0.084).T(2.2,87,0.05).T(2.454,57,0.084).T(2.538,87,0.05);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-20797757");
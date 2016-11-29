
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.getSymbol("butterflyWings").play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//=========================================================

//Edge symbol: 'butterfly'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2704,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("butterflyWings");
//Edge symbol end:'butterflyWings'
})(jQuery,AdobeEdge,"EDGE-20797757");
goog.provide('shadow.cljs.devtools.client.hud');
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_progress = goog.define("shadow.cljs.devtools.client.hud.show_progress",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_warnings = goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_errors = goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.hud !== 'undefined') && (typeof shadow.cljs.devtools.client.hud.dom_available_QMARK_ !== 'undefined')){
} else {
shadow.cljs.devtools.client.hud.dom_available_QMARK_ = (!((goog.global.document == null)));
}
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__56383__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_60058){
var state_val_60059 = (state_60058[(1)]);
if((state_val_60059 === (7))){
var state_60058__$1 = state_60058;
var statearr_60066_60301 = state_60058__$1;
(statearr_60066_60301[(2)] = false);

(statearr_60066_60301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (1))){
var state_60058__$1 = state_60058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60058__$1,(2),req);
} else {
if((state_val_60059 === (4))){
var inst_60017 = (state_60058[(7)]);
var inst_60024 = (inst_60017 == null);
var inst_60025 = cljs.core.not(inst_60024);
var state_60058__$1 = state_60058;
if(inst_60025){
var statearr_60075_60302 = state_60058__$1;
(statearr_60075_60302[(1)] = (6));

} else {
var statearr_60076_60303 = state_60058__$1;
(statearr_60076_60303[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (15))){
var state_60058__$1 = state_60058;
var statearr_60077_60304 = state_60058__$1;
(statearr_60077_60304[(2)] = null);

(statearr_60077_60304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (13))){
var inst_60017 = (state_60058[(7)]);
var state_60058__$1 = state_60058;
var statearr_60080_60307 = state_60058__$1;
(statearr_60080_60307[(2)] = inst_60017);

(statearr_60080_60307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (6))){
var inst_60017 = (state_60058[(7)]);
var inst_60027 = inst_60017.cljs$lang$protocol_mask$partition0$;
var inst_60028 = (inst_60027 & (64));
var inst_60029 = inst_60017.cljs$core$ISeq$;
var inst_60030 = (cljs.core.PROTOCOL_SENTINEL === inst_60029);
var inst_60031 = ((inst_60028) || (inst_60030));
var state_60058__$1 = state_60058;
if(cljs.core.truth_(inst_60031)){
var statearr_60084_60311 = state_60058__$1;
(statearr_60084_60311[(1)] = (9));

} else {
var statearr_60085_60312 = state_60058__$1;
(statearr_60085_60312[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (17))){
var inst_60054 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
var statearr_60086_60314 = state_60058__$1;
(statearr_60086_60314[(2)] = inst_60054);

(statearr_60086_60314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (3))){
var state_60058__$1 = state_60058;
var statearr_60088_60315 = state_60058__$1;
(statearr_60088_60315[(2)] = null);

(statearr_60088_60315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (12))){
var inst_60017 = (state_60058[(7)]);
var inst_60040 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60017);
var state_60058__$1 = state_60058;
var statearr_60089_60318 = state_60058__$1;
(statearr_60089_60318[(2)] = inst_60040);

(statearr_60089_60318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (2))){
var inst_60017 = (state_60058[(7)]);
var inst_60017__$1 = (state_60058[(2)]);
var inst_60018 = (inst_60017__$1 == null);
var state_60058__$1 = (function (){var statearr_60090 = state_60058;
(statearr_60090[(7)] = inst_60017__$1);

return statearr_60090;
})();
if(cljs.core.truth_(inst_60018)){
var statearr_60091_60326 = state_60058__$1;
(statearr_60091_60326[(1)] = (3));

} else {
var statearr_60092_60331 = state_60058__$1;
(statearr_60092_60331[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (11))){
var inst_60035 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
var statearr_60093_60332 = state_60058__$1;
(statearr_60093_60332[(2)] = inst_60035);

(statearr_60093_60332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (9))){
var state_60058__$1 = state_60058;
var statearr_60094_60333 = state_60058__$1;
(statearr_60094_60333[(2)] = true);

(statearr_60094_60333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (5))){
var inst_60056 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60058__$1,inst_60056);
} else {
if((state_val_60059 === (14))){
var inst_60043 = (state_60058[(8)]);
var inst_60043__$1 = (state_60058[(2)]);
var inst_60044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60043__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_60045 = (inst_60044 === (0));
var state_60058__$1 = (function (){var statearr_60098 = state_60058;
(statearr_60098[(8)] = inst_60043__$1);

return statearr_60098;
})();
if(cljs.core.truth_(inst_60045)){
var statearr_60099_60334 = state_60058__$1;
(statearr_60099_60334[(1)] = (15));

} else {
var statearr_60100_60335 = state_60058__$1;
(statearr_60100_60335[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (16))){
var inst_60043 = (state_60058[(8)]);
var inst_60052 = console.warn("file open failed",inst_60043);
var state_60058__$1 = state_60058;
var statearr_60101_60336 = state_60058__$1;
(statearr_60101_60336[(2)] = inst_60052);

(statearr_60101_60336[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (10))){
var state_60058__$1 = state_60058;
var statearr_60102_60337 = state_60058__$1;
(statearr_60102_60337[(2)] = false);

(statearr_60102_60337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (8))){
var inst_60038 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
if(cljs.core.truth_(inst_60038)){
var statearr_60104_60338 = state_60058__$1;
(statearr_60104_60338[(1)] = (12));

} else {
var statearr_60106_60339 = state_60058__$1;
(statearr_60106_60339[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto____0 = (function (){
var statearr_60108 = [null,null,null,null,null,null,null,null,null];
(statearr_60108[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto__);

(statearr_60108[(1)] = (1));

return statearr_60108;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto____1 = (function (state_60058){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_60058);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e60109){var ex__56262__auto__ = e60109;
var statearr_60111_60340 = state_60058;
(statearr_60111_60340[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_60058[(4)]))){
var statearr_60113_60341 = state_60058;
(statearr_60113_60341[(1)] = cljs.core.first((state_60058[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60342 = state_60058;
state_60058 = G__60342;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto__ = function(state_60058){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto____1.call(this,state_60058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_60117 = f__56384__auto__();
(statearr_60117[(6)] = c__56383__auto__);

return statearr_60117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));

return c__56383__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__60119 = arguments.length;
switch (G__60119) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___60344 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___60344 == null)){
} else {
var x_60345 = temp__5739__auto___60344;
shadow.dom.remove(x_60345);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__56383__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_60148){
var state_val_60149 = (state_60148[(1)]);
if((state_val_60149 === (1))){
var inst_60135 = cljs.core.async.timeout((250));
var state_60148__$1 = state_60148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60148__$1,(2),inst_60135);
} else {
if((state_val_60149 === (2))){
var inst_60137 = (state_60148[(2)]);
var inst_60139 = [el];
var inst_60140 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_60141 = [inst_60140];
var inst_60142 = cljs.core.PersistentHashMap.fromArrays(inst_60139,inst_60141);
var inst_60143 = shadow.animate.start((250),inst_60142);
var state_60148__$1 = (function (){var statearr_60154 = state_60148;
(statearr_60154[(7)] = inst_60137);

return statearr_60154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60148__$1,(3),inst_60143);
} else {
if((state_val_60149 === (3))){
var inst_60145 = (state_60148[(2)]);
var inst_60146 = shadow.dom.remove(container_el);
var state_60148__$1 = (function (){var statearr_60155 = state_60148;
(statearr_60155[(8)] = inst_60145);

return statearr_60155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60148__$1,inst_60146);
} else {
return null;
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto____0 = (function (){
var statearr_60158 = [null,null,null,null,null,null,null,null,null];
(statearr_60158[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto__);

(statearr_60158[(1)] = (1));

return statearr_60158;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto____1 = (function (state_60148){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_60148);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e60160){var ex__56262__auto__ = e60160;
var statearr_60161_60351 = state_60148;
(statearr_60161_60351[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_60148[(4)]))){
var statearr_60166_60352 = state_60148;
(statearr_60166_60352[(1)] = cljs.core.first((state_60148[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60353 = state_60148;
state_60148 = G__60353;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto__ = function(state_60148){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto____1.call(this,state_60148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_60170 = f__56384__auto__();
(statearr_60170[(6)] = c__56383__auto__);

return statearr_60170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));

return c__56383__auto__;
}
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4529__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__60174(s__60175){
return (new cljs.core.LazySeq(null,(function (){
var s__60175__$1 = s__60175;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60175__$1);
if(temp__5735__auto__){
var s__60175__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60175__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60175__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60177 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60176 = (0);
while(true){
if((i__60176 < size__4528__auto__)){
var vec__60182 = cljs.core._nth(c__4527__auto__,i__60176);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60182,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60182,(1),null);
cljs.core.chunk_append(b__60177,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),goog.string.format("%4d | %s",(((1) + idx) + start_idx),text)], null));

var G__60355 = (i__60176 + (1));
i__60176 = G__60355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60177),shadow$cljs$devtools$client$hud$source_line_html_$_iter__60174(cljs.core.chunk_rest(s__60175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60177),null);
}
} else {
var vec__60185 = cljs.core.first(s__60175__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60185,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60185,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),goog.string.format("%4d | %s",(((1) + idx) + start_idx),text)], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__60174(cljs.core.rest(s__60175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__60193 = arguments.length;
switch (G__60193) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});
return [sep(offset),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),sep((sep_len - (offset + len)))].join('');
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__60200){
var map__60201 = p__60200;
var map__60201__$1 = (((((!((map__60201 == null))))?(((((map__60201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60201):map__60201);
var warning = map__60201__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60201__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60201__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60201__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60201__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
})], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__60206){
var map__60209 = p__60206;
var map__60209__$1 = (((((!((map__60209 == null))))?(((((map__60209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60209):map__60209);
var warning = map__60209__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60209__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60209__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60209__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60209__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60209__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60209__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__60221 = source_excerpt;
var map__60221__$1 = (((((!((map__60221 == null))))?(((((map__60221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60221):map__60221);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60221__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60221__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60221__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60221__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4126__auto__ = column;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__60231){
var map__60232 = p__60231;
var map__60232__$1 = (((((!((map__60232 == null))))?(((((map__60232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60232):map__60232);
var msg = map__60232__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60232__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60232__$1,new cljs.core.Keyword(null,"info","info",-317069002));
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var map__60234 = info;
var map__60234__$1 = (((((!((map__60234 == null))))?(((((map__60234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60234):map__60234);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60234__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60229_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__60229_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__60243(s__60244){
return (new cljs.core.LazySeq(null,(function (){
var s__60244__$1 = s__60244;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60244__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__60254 = cljs.core.first(xs__6292__auto__);
var map__60254__$1 = (((((!((map__60254 == null))))?(((((map__60254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60254):map__60254);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60254__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4525__auto__ = ((function (s__60244__$1,map__60254,map__60254__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__60234,map__60234__$1,sources,sources_with_warnings,map__60232,map__60232__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__60243_$_iter__60245(s__60246){
return (new cljs.core.LazySeq(null,((function (s__60244__$1,map__60254,map__60254__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__60234,map__60234__$1,sources,sources_with_warnings,map__60232,map__60232__$1,msg,type,info){
return (function (){
var s__60246__$1 = s__60246;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60246__$1);
if(temp__5735__auto____$1){
var s__60246__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60246__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60246__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60248 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60247 = (0);
while(true){
if((i__60247 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__60247);
cljs.core.chunk_append(b__60248,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__60360 = (i__60247 + (1));
i__60247 = G__60360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60248),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__60243_$_iter__60245(cljs.core.chunk_rest(s__60246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60248),null);
}
} else {
var warning = cljs.core.first(s__60246__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__60243_$_iter__60245(cljs.core.rest(s__60246__$2)));
}
} else {
return null;
}
break;
}
});})(s__60244__$1,map__60254,map__60254__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__60234,map__60234__$1,sources,sources_with_warnings,map__60232,map__60232__$1,msg,type,info))
,null,null));
});})(s__60244__$1,map__60254,map__60254__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__60234,map__60234__$1,sources,sources_with_warnings,map__60232,map__60232__$1,msg,type,info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__60243(cljs.core.rest(s__60244__$1)));
} else {
var G__60361 = cljs.core.rest(s__60244__$1);
s__60244__$1 = G__60361;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__60286){
var map__60287 = p__60286;
var map__60287__$1 = (((((!((map__60287 == null))))?(((((map__60287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60287):map__60287);
var msg = map__60287__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map

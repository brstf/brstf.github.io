goog.provide('re_pressed.impl');
re_pressed.impl.ns_root = "re-pressed.core/";
re_pressed.impl.max_record = (25);
re_pressed.impl.modifier_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(91),null,(17),null,(16),null,(18),null], null), null);
re_pressed.impl.__GT_ns_keyword = (function re_pressed$impl$__GT_ns_keyword(event_type){
return (function() {
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword = null;
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0 = (function (){
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1(null);
});
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1 = (function (suffix){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
});
re_pressed$impl$__GT_ns_keyword_$_ns_keyword = function(suffix){
switch(arguments.length){
case 0:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0.call(this);
case 1:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1.call(this,suffix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$0 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0;
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1;
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword;
})()
});
re_pressed.impl.is_key_QMARK_ = (function re_pressed$impl$is_key_QMARK_(recent_key,key_map){
return cljs.core.every_QMARK_((function (p__60378){
var vec__60379 = p__60378;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60379,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60379,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recent_key,k),v);
}),key_map);
});
re_pressed.impl.register_subs = (function re_pressed$impl$register_subs(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var G__60383_60486 = ns_keyword("-keys");
var G__60384_60487 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60383_60486,G__60384_60487) : re_frame.core.reg_sub.call(null,G__60383_60486,G__60384_60487));

var G__60385_60488 = ns_keyword("-event-keys");
var G__60386_60489 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60385_60488,G__60386_60489) : re_frame.core.reg_sub.call(null,G__60385_60488,G__60386_60489));

var G__60389_60490 = ns_keyword("-clear-keys");
var G__60390_60491 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60389_60490,G__60390_60491) : re_frame.core.reg_sub.call(null,G__60389_60490,G__60390_60491));

var G__60394_60492 = ns_keyword("-always-listen-keys");
var G__60395_60493 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60394_60492,G__60395_60493) : re_frame.core.reg_sub.call(null,G__60394_60492,G__60395_60493));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__60397 = ns_keyword("-prevent-default-keys");
var G__60398 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null));
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60397,G__60398) : re_frame.core.reg_sub.call(null,G__60397,G__60398));
} else {
return null;
}
});
re_pressed.impl.__GT_set_key_BANG_ = (function re_pressed$impl$__GT_set_key_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_set_key_BANG__$_set_key_BANG_(p__60402,p__60403){
var map__60404 = p__60402;
var map__60404__$1 = (((((!((map__60404 == null))))?(((((map__60404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60404):map__60404);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60404__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60405 = p__60403;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60405,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60405,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),(function (key_maps){
var keys = (cljs.core.truth_(key_map)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = key_maps;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),key_map):key_maps);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(re_pressed.impl.max_record,keys));
}))], null);
});
});
re_pressed.impl.__GT_clear_keys_BANG_ = (function re_pressed$impl$__GT_clear_keys_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_clear_keys_BANG__$_clear_keys_BANG_(p__60414,p__60415){
var map__60416 = p__60414;
var map__60416__$1 = (((((!((map__60416 == null))))?(((((map__60416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60416):map__60416);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60416__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60417 = p__60415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60417,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60417,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),cljs.core.PersistentVector.EMPTY)], null);
});
});
re_pressed.impl.prevent_default_keys_BANG_ = (function re_pressed$impl$prevent_default_keys_BANG_(_,p__60426){
var vec__60428 = p__60426;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,e]);
});
re_pressed.impl.register_events = (function re_pressed$impl$register_events(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-set-key"),re_pressed.impl.__GT_set_key_BANG_(event_type));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-clear-keys"),re_pressed.impl.__GT_clear_keys_BANG_(event_type));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-prevent-default-keys"),re_pressed.impl.prevent_default_keys_BANG_);
} else {
return null;
}
});
re_pressed.impl.register_effects = (function re_pressed$impl$register_effects(event_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__60434 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
var G__60435 = (function (e){
return e.preventDefault();
});
return (re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60434,G__60435) : re_frame.core.reg_fx.call(null,G__60434,G__60435));
} else {
return null;
}
});
var G__60444_60500 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"keyboard-event"].join(''));
var G__60445_60501 = (function (p__60446){
var map__60447 = p__60446;
var map__60447__$1 = (((((!((map__60447 == null))))?(((((map__60447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60447):map__60447);
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60447__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
re_pressed.impl.register_subs(event_type);

re_pressed.impl.register_events(event_type);

re_pressed.impl.register_effects(event_type);

return goog.events.listen(document,event_type,(function (e){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var e_key = e.keyCode;
var modifier_key_QMARK_ = (re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1 ? re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1(e_key) : re_pressed.impl.modifier_keys.call(null,e_key));
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
var hit_key = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"altKey","altKey",-670253656),e.altKey,new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),e.ctrlKey,new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),e.metaKey,new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),e.shiftKey,new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),e.keyCode], null);
var always_listen_keys = cljs.core.deref((function (){var G__60454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-always-listen-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60454) : re_frame.core.subscribe.call(null,G__60454));
})());
var always_listen_QMARK_ = cljs.core.some((function (p1__60439_SHARP_){
return re_pressed.impl.is_key_QMARK_(hit_key,p1__60439_SHARP_);
}),always_listen_keys);
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.not(modifier_key_QMARK_)) && ((!(entering_input_QMARK_))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return always_listen_QMARK_;
}
})())){
var G__60456_60517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-set-key"),hit_key], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__60456_60517) : re_frame.core.dispatch_sync.call(null,G__60456_60517));

var recent_keys = cljs.core.deref((function (){var G__60461 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60461) : re_frame.core.subscribe.call(null,G__60461));
})());
var event_keys = cljs.core.deref((function (){var G__60462 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-event-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60462) : re_frame.core.subscribe.call(null,G__60462));
})());
var clear_keys = cljs.core.deref((function (){var G__60463 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-clear-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60463) : re_frame.core.subscribe.call(null,G__60463));
})());
var recent_key = cljs.core.last(recent_keys);
var is_key_sequence_QMARK_ = (function (key_maps){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__60440_SHARP_,p2__60441_SHARP_){
return re_pressed.impl.is_key_QMARK_(p1__60440_SHARP_,p2__60441_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(recent_keys),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(re_pressed.impl.max_record,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.reverse(key_maps)));
});
var check_events = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function re_pressed$impl$iter__60464(s__60465){
return (new cljs.core.LazySeq(null,(function (){
var s__60465__$1 = s__60465;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60465__$1);
if(temp__5735__auto__){
var s__60465__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60465__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60465__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60467 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60466 = (0);
while(true){
if((i__60466 < size__4528__auto__)){
var vec__60470 = cljs.core._nth(c__4527__auto__,i__60466);
var seq__60471 = cljs.core.seq(vec__60470);
var first__60472 = cljs.core.first(seq__60471);
var seq__60471__$1 = cljs.core.next(seq__60471);
var trigger_event = first__60472;
var ks = seq__60471__$1;
cljs.core.chunk_append(b__60467,(function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})());

var G__60530 = (i__60466 + (1));
i__60466 = G__60530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60467),re_pressed$impl$iter__60464(cljs.core.chunk_rest(s__60465__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60467),null);
}
} else {
var vec__60473 = cljs.core.first(s__60465__$2);
var seq__60474 = cljs.core.seq(vec__60473);
var first__60475 = cljs.core.first(seq__60474);
var seq__60474__$1 = cljs.core.next(seq__60474);
var trigger_event = first__60475;
var ks = seq__60474__$1;
return cljs.core.cons((function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})(),re_pressed$impl$iter__60464(cljs.core.rest(s__60465__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(event_keys);
})());
var vec__60458 = (function (){var G__60477 = check_events;
var G__60477__$1 = (((G__60477 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60442_SHARP_){
return cljs.core.second(p1__60442_SHARP_) === true;
}),G__60477));
if((G__60477__$1 == null)){
return null;
} else {
return cljs.core.first(G__60477__$1);
}
})();
var triggered_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60458,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60458,(1),null);
var clear_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,clear_keys);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var prevent_default_keys_60539 = cljs.core.deref((function (){var G__60482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-prevent-default-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60482) : re_frame.core.subscribe.call(null,G__60482));
})());
var prevent_default_QMARK__60540 = cljs.core.some((function (p1__60443_SHARP_){
return re_pressed.impl.is_key_QMARK_(recent_key,p1__60443_SHARP_);
}),prevent_default_keys_60539);
if(cljs.core.truth_(prevent_default_QMARK__60540)){
var G__60483_60543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-prevent-default-keys"),e], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__60483_60543) : re_frame.core.dispatch_sync.call(null,G__60483_60543));
} else {
}
} else {
}

if(cljs.core.truth_(clear_QMARK_)){
var G__60484 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-clear-keys")], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__60484) : re_frame.core.dispatch_sync.call(null,G__60484));
} else {
if(cljs.core.truth_(event_QMARK_)){
var G__60485 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(triggered_event,e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([recent_keys], 0));
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__60485) : re_frame.core.dispatch_sync.call(null,G__60485));
} else {
return null;

}
}
} else {
return null;
}
}));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60444_60500,G__60445_60501) : re_frame.core.reg_fx.call(null,G__60444_60500,G__60445_60501));

//# sourceMappingURL=re_pressed.impl.js.map

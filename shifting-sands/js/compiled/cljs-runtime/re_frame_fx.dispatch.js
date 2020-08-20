goog.provide('re_frame_fx.dispatch');
re_frame_fx.dispatch.deferred_actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_fx.dispatch.dispatch_debounce = (function re_frame_fx$dispatch$dispatch_debounce(dispatch_map_or_seq){
var cancel_timeout = (function (id){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto__)){
var deferred = temp__5735__auto__;
clearTimeout(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(deferred));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame_fx.dispatch.deferred_actions,cljs.core.dissoc,id);
} else {
return null;
}
});
var run_action = (function (action,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),action)){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),action)){
var seq__48485 = cljs.core.seq(event);
var chunk__48489 = null;
var count__48490 = (0);
var i__48491 = (0);
while(true){
if((i__48491 < count__48490)){
var e = chunk__48489.cljs$core$IIndexed$_nth$arity$2(null,i__48491);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__48547 = seq__48485;
var G__48548 = chunk__48489;
var G__48549 = count__48490;
var G__48550 = (i__48491 + (1));
seq__48485 = G__48547;
chunk__48489 = G__48548;
count__48490 = G__48549;
i__48491 = G__48550;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48485);
if(temp__5735__auto__){
var seq__48485__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48485__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48485__$1);
var G__48553 = cljs.core.chunk_rest(seq__48485__$1);
var G__48554 = c__4556__auto__;
var G__48555 = cljs.core.count(c__4556__auto__);
var G__48556 = (0);
seq__48485 = G__48553;
chunk__48489 = G__48554;
count__48490 = G__48555;
i__48491 = G__48556;
continue;
} else {
var e = cljs.core.first(seq__48485__$1);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__48557 = cljs.core.next(seq__48485__$1);
var G__48558 = null;
var G__48559 = (0);
var G__48560 = (0);
seq__48485 = G__48557;
chunk__48489 = G__48558;
count__48490 = G__48559;
i__48491 = G__48560;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
var seq__48510 = cljs.core.seq((function (){var G__48530 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__48530],null));
} else {
return G__48530;
}
})());
var chunk__48511 = null;
var count__48512 = (0);
var i__48513 = (0);
while(true){
if((i__48513 < count__48512)){
var map__48531 = chunk__48511.cljs$core$IIndexed$_nth$arity$2(null,i__48513);
var map__48531__$1 = (((((!((map__48531 == null))))?(((((map__48531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48531):map__48531);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48531__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48531__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48531__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48531__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__48535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__48535.cljs$core$IFn$_invoke$arity$1 ? fexpr__48535.cljs$core$IFn$_invoke$arity$1(action) : fexpr__48535.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__48510,chunk__48511,count__48512,i__48513,map__48531,map__48531__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__48510,chunk__48511,count__48512,i__48513,map__48531,map__48531__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___48569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___48569)){
var map__48536_48570 = temp__5735__auto___48569;
var map__48536_48571__$1 = (((((!((map__48536_48570 == null))))?(((((map__48536_48570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48536_48570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48536_48570):map__48536_48570);
var action_48572__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536_48571__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_48573__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536_48571__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_48572__$1,event_48573__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__48578 = seq__48510;
var G__48579 = chunk__48511;
var G__48580 = count__48512;
var G__48581 = (i__48513 + (1));
seq__48510 = G__48578;
chunk__48511 = G__48579;
count__48512 = G__48580;
i__48513 = G__48581;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48510);
if(temp__5735__auto__){
var seq__48510__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48510__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48510__$1);
var G__48585 = cljs.core.chunk_rest(seq__48510__$1);
var G__48586 = c__4556__auto__;
var G__48587 = cljs.core.count(c__4556__auto__);
var G__48588 = (0);
seq__48510 = G__48585;
chunk__48511 = G__48586;
count__48512 = G__48587;
i__48513 = G__48588;
continue;
} else {
var map__48538 = cljs.core.first(seq__48510__$1);
var map__48538__$1 = (((((!((map__48538 == null))))?(((((map__48538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48538):map__48538);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48538__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48538__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48538__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48538__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__48542 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__48542.cljs$core$IFn$_invoke$arity$1 ? fexpr__48542.cljs$core$IFn$_invoke$arity$1(action) : fexpr__48542.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__48510,chunk__48511,count__48512,i__48513,map__48538,map__48538__$1,id,timeout,action,event,seq__48510__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__48510,chunk__48511,count__48512,i__48513,map__48538,map__48538__$1,id,timeout,action,event,seq__48510__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___48596__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___48596__$1)){
var map__48543_48599 = temp__5735__auto___48596__$1;
var map__48543_48600__$1 = (((((!((map__48543_48599 == null))))?(((((map__48543_48599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48543_48599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48543_48599):map__48543_48599);
var action_48601__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48543_48600__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_48602__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48543_48600__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_48601__$1,event_48602__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__48605 = cljs.core.next(seq__48510__$1);
var G__48606 = null;
var G__48607 = (0);
var G__48608 = (0);
seq__48510 = G__48605;
chunk__48511 = G__48606;
count__48512 = G__48607;
i__48513 = G__48608;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),re_frame_fx.dispatch.dispatch_debounce) : re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),re_frame_fx.dispatch.dispatch_debounce));

//# sourceMappingURL=re_frame_fx.dispatch.js.map

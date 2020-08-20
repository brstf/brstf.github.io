goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60207,p__60208){
var map__60210 = p__60207;
var map__60210__$1 = (((((!((map__60210 == null))))?(((((map__60210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60210):map__60210);
var svc = map__60210__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60210__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60210__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60210__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60211 = p__60208;
var map__60211__$1 = (((((!((map__60211 == null))))?(((((map__60211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60211):map__60211);
var msg = map__60211__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60211__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60211__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60211__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60211__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60224,p__60225){
var map__60226 = p__60224;
var map__60226__$1 = (((((!((map__60226 == null))))?(((((map__60226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60226):map__60226);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60226__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60227 = p__60225;
var map__60227__$1 = (((((!((map__60227 == null))))?(((((map__60227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60227):map__60227);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60227__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60236,p__60237){
var map__60238 = p__60236;
var map__60238__$1 = (((((!((map__60238 == null))))?(((((map__60238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60238):map__60238);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60238__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60238__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60239 = p__60237;
var map__60239__$1 = (((((!((map__60239 == null))))?(((((map__60239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60239):map__60239);
var msg = map__60239__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60239__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60250,tid){
var map__60252 = p__60250;
var map__60252__$1 = (((((!((map__60252 == null))))?(((((map__60252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60252):map__60252);
var svc = map__60252__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60265 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60266 = null;
var count__60267 = (0);
var i__60268 = (0);
while(true){
if((i__60268 < count__60267)){
var vec__60281 = chunk__60266.cljs$core$IIndexed$_nth$arity$2(null,i__60268);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60281,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60281,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60317 = seq__60265;
var G__60319 = chunk__60266;
var G__60320 = count__60267;
var G__60321 = (i__60268 + (1));
seq__60265 = G__60317;
chunk__60266 = G__60319;
count__60267 = G__60320;
i__60268 = G__60321;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60265);
if(temp__5735__auto__){
var seq__60265__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60265__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60265__$1);
var G__60322 = cljs.core.chunk_rest(seq__60265__$1);
var G__60323 = c__4556__auto__;
var G__60324 = cljs.core.count(c__4556__auto__);
var G__60325 = (0);
seq__60265 = G__60322;
chunk__60266 = G__60323;
count__60267 = G__60324;
i__60268 = G__60325;
continue;
} else {
var vec__60288 = cljs.core.first(seq__60265__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60288,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60288,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60327 = cljs.core.next(seq__60265__$1);
var G__60328 = null;
var G__60329 = (0);
var G__60330 = (0);
seq__60265 = G__60327;
chunk__60266 = G__60328;
count__60267 = G__60329;
i__60268 = G__60330;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60256_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60256_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60257_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60257_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60258_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60258_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60259_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60259_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60297){
var map__60299 = p__60297;
var map__60299__$1 = (((((!((map__60299 == null))))?(((((map__60299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60299):map__60299);
var svc = map__60299__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60299__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60299__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

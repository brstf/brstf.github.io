goog.provide('shifting_sands.events');
shifting_sands.events.__GT_local_store = (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(shifting_sands.db.state__GT_local_store) : re_frame.core.after.call(null,shifting_sands.db.state__GT_local_store));
shifting_sands.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.events.__GT_local_store], null);
shifting_sands.events.get_room_index = (function shifting_sands$events$get_room_index(db,coord){
var floor = new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","set-active-page","shifting-sands.events/set-active-page",1700852759),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69181,p__69182){
var map__69183 = p__69181;
var map__69183__$1 = (((((!((map__69183 == null))))?(((((map__69183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69183):map__69183);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69183__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__69184 = p__69182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69184,(0),null);
var map__69187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69184,(1),null);
var map__69187__$1 = (((((!((map__69187 == null))))?(((((map__69187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69187):map__69187);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69187__$1,new cljs.core.Keyword(null,"page","page",849072397));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),new cljs.core.Symbol(null,"page","page",-1805363372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var set_page = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),new cljs.core.Symbol(null,"page","page",-1805363372,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var G__69209 = (function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var G__69209__$1 = (((G__69209 instanceof cljs.core.Keyword))?G__69209.fqn:null);
switch (G__69209__$1) {
case "home":
var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = set_page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;

break;
case "new-character":
var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = set_page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;

break;
case "not-found":
var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = set_page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69209__$1)].join('')));

}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),new cljs.core.Symbol(null,"page","page",-1805363372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69208){var e = e69208;
throw e;
}}):(function (p__69210,p__69211){
var map__69212 = p__69210;
var map__69212__$1 = (((((!((map__69212 == null))))?(((((map__69212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69212):map__69212);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69212__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__69213 = p__69211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69213,(0),null);
var map__69216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69213,(1),null);
var map__69216__$1 = (((((!((map__69216 == null))))?(((((map__69216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69216):map__69216);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69216__$1,new cljs.core.Keyword(null,"page","page",849072397));
var set_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),page);
var G__69219 = page;
var G__69219__$1 = (((G__69219 instanceof cljs.core.Keyword))?G__69219.fqn:null);
switch (G__69219__$1) {
case "home":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),set_page], null);

break;
case "new-character":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),set_page,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null);

break;
case "not-found":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),set_page], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69219__$1)].join('')));

}
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","initialize-db","shifting-sands.events/initialize-db",954565019),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)) : re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)))], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69220,_){
var map__69221 = p__69220;
var map__69221__$1 = (((((!((map__69221 == null))))?(((((map__69221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69221):map__69221);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69221__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69221__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Symbol(null,"local-store-state","local-store-state",-394690304,null))], null));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = local_store_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"local-store-state","local-store-state",-394690304,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Symbol(null,"local-store-state","local-store-state",-394690304,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Symbol(null,"local-store-state","local-store-state",-394690304,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69249){var e = e69249;
throw e;
}}):(function (p__69250,_){
var map__69251 = p__69250;
var map__69251__$1 = (((((!((map__69251 == null))))?(((((map__69251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69251):map__69251);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69251__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69251__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shifting_sands.db.default_db,local_store_state], 0))], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","init-floor","shifting-sands.events/init-floor",1253169226),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__69253){
var vec__69254 = p__69253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69254,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69254,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),cljs.core.list(new cljs.core.Symbol("db","init-floor","db/init-floor",559852264,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc_in((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.init_floor((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","init-floor","db/init-floor",559852264,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),cljs.core.list(new cljs.core.Symbol("db","init-floor","db/init-floor",559852264,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69257){var e = e69257;
throw e;
}}):(function (db,p__69258){
var vec__69259 = p__69258;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69259,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69259,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),shifting_sands.db.init_floor(floor));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","change-floor","shifting-sands.events/change-floor",1664448799),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__69262){
var vec__69263 = p__69262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69263,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69263,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"floor","floor",-772394748,null)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69266){var e = e69266;
throw e;
}}):(function (db,p__69267){
var vec__69268 = p__69267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69268,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69268,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),floor);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-loot","shifting-sands.events/generate-loot",-799189400),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69272,_){
var map__69273 = p__69272;
var map__69273__$1 = (((((!((map__69273 == null))))?(((((map__69273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69273):map__69273);
var db = map__69273__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69273__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loot","loot",1717485649,null),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var loot = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.generate_loot((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = loot;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"loot","loot",1717485649,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69271_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69271_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = loot;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"loot","loot",1717485649,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"floor","floor",1882041021),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"time","time",1385887882),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loot","loot",1717485649,null),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69271#","p1__69271#",-1565582125,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69305){var e = e69305;
throw e;
}}):(function (p__69318,_){
var map__69319 = p__69318;
var map__69319__$1 = (((((!((map__69319 == null))))?(((((map__69319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69319):map__69319);
var db = map__69319__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69319__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var loot = shifting_sands.db.generate_loot(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69271_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69271_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
}));
})));
shifting_sands.events.item__GT_str = (function shifting_sands$events$item__GT_str(enc){
var name = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(enc);
var desc = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(enc);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(name)?name:null)),(cljs.core.truth_((function (){var and__4115__auto__ = name;
if(cljs.core.truth_(and__4115__auto__)){
return desc;
} else {
return and__4115__auto__;
}
})())?" - ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(desc)?desc:null))].join('');
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-encounter","shifting-sands.events/generate-encounter",-298410342),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69344,p__69345){
var map__69346 = p__69344;
var map__69346__$1 = (((((!((map__69346 == null))))?(((((map__69346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69346):map__69346);
var db = map__69346__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69346__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69347 = p__69345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69347,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69347,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var adv = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var enc = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = enc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69339_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69339_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.item__GT_str((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = enc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"room-index","room-index",-663455338),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.get_room_index((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"floor","floor",1882041021),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"time","time",1385887882),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69339#","p1__69339#",1748294434,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69353){var e = e69353;
throw e;
}}):(function (p__69354,p__69355){
var map__69356 = p__69354;
var map__69356__$1 = (((((!((map__69356 == null))))?(((((map__69356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69356):map__69356);
var db = map__69356__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69356__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69357 = p__69355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69357,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69357,(1),null);
var adv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null));
var enc = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),floor], null),adv);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(enc)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69339_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69339_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),shifting_sands.events.item__GT_str(enc),new cljs.core.Keyword(null,"room-index","room-index",-663455338),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shop","shifting-sands.events/force-shop",239504190),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69363,p__69364){
var map__69365 = p__69363;
var map__69365__$1 = (((((!((map__69365 == null))))?(((((map__69365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69365):map__69365);
var db = map__69365__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69365__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69366 = p__69364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69366,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69366,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shop","shop",816887121,null),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var shop = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.generate_shop((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc_in((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shop;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"shop","shop",816887121,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69361_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69361_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = ["Forced Shop:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shop;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"shop","shop",816887121,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"room-index","room-index",-663455338),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.get_room_index((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"floor","floor",1882041021),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"time","time",1385887882),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shop","shop",816887121,null),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69361#","p1__69361#",-1932768818,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69370){var e = e69370;
throw e;
}}):(function (p__69371,p__69372){
var map__69373 = p__69371;
var map__69373__$1 = (((((!((map__69373 == null))))?(((((map__69373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69373):map__69373);
var db = map__69373__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69373__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69374 = p__69372;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69374,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69374,(1),null);
var shop = shifting_sands.db.generate_shop(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shop),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69361_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69361_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),["Forced Shop:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(shop))].join(''),new cljs.core.Keyword(null,"room-index","room-index",-663455338),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shrine","shifting-sands.events/force-shrine",1940722496),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69379,p__69380){
var map__69381 = p__69379;
var map__69381__$1 = (((((!((map__69381 == null))))?(((((map__69381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69381):map__69381);
var db = map__69381__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69381__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69382 = p__69380;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69382,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69382,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var shrine = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.generate_shrine((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc_in((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shrine;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69378_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69378_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = ["Forced Shrine: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shrine;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"room-index","room-index",-663455338),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.get_room_index((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"floor","floor",1882041021),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"time","time",1385887882),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69378#","p1__69378#",1099342311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69387){var e = e69387;
throw e;
}}):(function (p__69391,p__69392){
var map__69393 = p__69391;
var map__69393__$1 = (((((!((map__69393 == null))))?(((((map__69393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69393):map__69393);
var db = map__69393__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69393__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69394 = p__69392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69394,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69394,(1),null);
var shrine = shifting_sands.db.generate_shrine(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shrine),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69378_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69378_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),["Forced Shrine: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(shrine))].join(''),new cljs.core.Keyword(null,"room-index","room-index",-663455338),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","clear-modal-result","shifting-sands.events/clear-modal-result",1975660596),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69398){var e = e69398;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-slugs","shifting-sands.events/show-slugs",-192244856),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605),true));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69399){var e = e69399;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-slugs","shifting-sands.events/hide-slugs",-31244748),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69400){var e = e69400;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-reset-dialog","shifting-sands.events/show-reset-dialog",-1859694497),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479),true));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69402){var e = e69402;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-reset-dialog","shifting-sands.events/hide-reset-dialog",-1857372418),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69403){var e = e69403;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","reset-all","shifting-sands.events/reset-all",-1646479445),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__69405){
var vec__69406 = p__69405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69406,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69406,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","init-db","db/init-db",-1059257433,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"reset-slugs?","reset-slugs?",2122053311,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.init_db.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = reset_slugs_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"reset-slugs?","reset-slugs?",2122053311,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","init-db","db/init-db",-1059257433,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"reset-slugs?","reset-slugs?",2122053311,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","init-db","db/init-db",-1059257433,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"reset-slugs?","reset-slugs?",2122053311,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69410){var e = e69410;
throw e;
}}):(function (db,p__69412){
var vec__69413 = p__69412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69413,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69413,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.init_db.cljs$core$IFn$_invoke$arity$2(db,reset_slugs_QMARK_),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","rotate-room","shifting-sands.events/rotate-room",13039064),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69418,p__69419){
var map__69420 = p__69418;
var map__69420__$1 = (((((!((map__69420 == null))))?(((((map__69420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69420):map__69420);
var db = map__69420__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69420__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69421 = p__69419;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69421,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69421,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69421,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69416_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.rotate_room((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69416_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69416#","p1__69416#",-81223727,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__69416#","p1__69416#",-81223727,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69416#","p1__69416#",-81223727,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__69416#","p1__69416#",-81223727,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69416#","p1__69416#",-81223727,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__69416#","p1__69416#",-81223727,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69417_SHARP_){
var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69417_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69417#","p1__69417#",1847747932,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = ["Rotate ",(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = clojure.string.upper_case((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.name((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"room-index","room-index",-663455338),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.get_room_index((function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"floor","floor",1882041021),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"time","time",1385887882),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69417#","p1__69417#",1847747932,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69417#","p1__69417#",1847747932,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69417#","p1__69417#",1847747932,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69417#","p1__69417#",1847747932,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69417#","p1__69417#",1847747932,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69416#","p1__69416#",-81223727,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__69416#","p1__69416#",-81223727,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69417#","p1__69417#",1847747932,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69417#","p1__69417#",1847747932,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69425){var e = e69425;
throw e;
}}):(function (p__69428,p__69429){
var map__69430 = p__69428;
var map__69430__$1 = (((((!((map__69430 == null))))?(((((map__69430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69430):map__69430);
var db = map__69430__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69430__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69431 = p__69429;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69431,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69431,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69431,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null),(function (p1__69416_SHARP_){
return shifting_sands.db.rotate_room(p1__69416_SHARP_,dir);
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69417_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69417_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),["Rotate ",clojure.string.upper_case(cljs.core.name(dir))].join(''),new cljs.core.Keyword(null,"room-index","room-index",-663455338),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
}));
})));
shifting_sands.events.generate_history_log = (function shifting_sands$events$generate_history_log(desc,ridx,floor){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"room-index","room-index",-663455338),ridx,new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null);
});
shifting_sands.events.adv__GT_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.adv__GT_str,"");
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-room","shifting-sands.events/generate-room",2119090790),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69437,p__69438){
var map__69439 = p__69437;
var map__69439__$1 = (((((!((map__69439 == null))))?(((((map__69439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69439):map__69439);
var db = map__69439__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69439__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69439__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__69440 = p__69438;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69440,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69440,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69440,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var floor_state = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = from_dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var room = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var situation = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47943__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47943__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc_in((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69435_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69435_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.generate_history_log((function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = ["Generated room",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69436_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69436_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.generate_history_log((function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = ["Generated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = situation;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"situation","situation",208441802,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69435#","p1__69435#",1109526381,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69436#","p1__69436#",1977690541,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69445){var e = e69445;
throw e;
}}):(function (p__69450,p__69451){
var map__69452 = p__69450;
var map__69452__$1 = (((((!((map__69452 == null))))?(((((map__69452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69452):map__69452);
var db = map__69452__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69452__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69452__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__69453 = p__69451;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69453,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69453,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69453,(2),null);
var floor_state = shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv);
var room = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69435_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69435_SHARP_,shifting_sands.events.generate_history_log(["Generated room",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69436_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69436_SHARP_,shifting_sands.events.generate_history_log(["Generated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","regenerate-room","shifting-sands.events/regenerate-room",-1382676672),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69461,p__69462){
var map__69463 = p__69461;
var map__69463__$1 = (((((!((map__69463 == null))))?(((((map__69463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69463):map__69463);
var db = map__69463__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69463__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69464 = p__69462;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69464,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69464,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69464,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099)),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var prev = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var room_index = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = prev;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var adv = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = prev;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var floor_state = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.assoc_in((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = from_dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var room = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var situation = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47943__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc_in((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69459_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69459_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.generate_history_log((function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = ["Regenerated room ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69460_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69460_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.generate_history_log((function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = ["Regenerated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = situation;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"situation","situation",208441802,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099)),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69459#","p1__69459#",148051975,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69460#","p1__69460#",-2143780940,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69468){var e = e69468;
throw e;
}}):(function (p__69469,p__69470){
var map__69471 = p__69469;
var map__69471__$1 = (((((!((map__69471 == null))))?(((((map__69471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69471):map__69471);
var db = map__69471__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69471__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69472 = p__69470;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69472,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69472,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69472,(2),null);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var room_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099));
var floor_state = cljs.core.assoc_in(shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),room_index);
var room = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null)),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),room_index);
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69459_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69459_SHARP_,shifting_sands.events.generate_history_log(["Regenerated room ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(room_index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69460_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69460_SHARP_,shifting_sands.events.generate_history_log(["Regenerated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-generate-dialog","shifting-sands.events/show-generate-dialog",-1200286217),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398),true));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69476){var e = e69476;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-generate-dialog","shifting-sands.events/hide-generate-dialog",-1582299819),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69477){var e = e69477;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-generic","shifting-sands.events/generate-generic",-1930414738),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__69479){
var vec__69480 = p__69479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69480,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69480,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69480,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var floor = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (cljs.core.truth_((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var G__69484 = (function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.last((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})();
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__69484) : shifting_sands.db.floors.call(null,G__69484));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})())?(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.last((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})():(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var item = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47943__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item","item",1889905329,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__69478_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__69478_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = ["Generate",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})()),": ",(function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.item__GT_str((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item","item",1889905329,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})()].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"floor","floor",1882041021),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword(null,"time","time",1385887882),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__69478#","p1__69478#",-1732793131,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69483){var e = e69483;
throw e;
}}):(function (db,p__69485){
var vec__69486 = p__69485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69486,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69486,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69486,(2),null);
var floor = (cljs.core.truth_((function (){var G__69489 = cljs.core.last(path);
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__69489) : shifting_sands.db.floors.call(null,G__69489));
})())?cljs.core.last(path):new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db));
var item = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),path,adv);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),item),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__69478_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__69478_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),["Generate",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",shifting_sands.events.item__GT_str(item)].join(''),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","clear-generate-result","shifting-sands.events/clear-generate-result",928693428),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69490){var e = e69490;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-history","shifting-sands.events/show-history",-1062290337),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865),true));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69491){var e = e69491;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-history","shifting-sands.events/hide-history",1277451013),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69492){var e = e69492;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","update-room-adv","shifting-sands.events/update-room-adv",1562513108),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__69493){
var vec__69494 = p__69493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69494,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69494,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"max","max",1701898075,null),(-3)),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"min","min",2085523049,null),(3)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.max;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(-3));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"max","max",1701898075,null),(-3)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.min;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})(),(3));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"min","min",2085523049,null),(3)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = update_fn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"max","max",1701898075,null),(-3)),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"min","min",2085523049,null),(3)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"max","max",1701898075,null),(-3)),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"min","min",2085523049,null),(3)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69497){var e = e69497;
throw e;
}}):(function (db,p__69498){
var vec__69499 = p__69498;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69499,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69499,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max,(-3)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.min,(3)),update_fn));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","update-notes","shifting-sands.events/update-notes",610337318),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__69502,p__69503){
var map__69504 = p__69502;
var map__69504__$1 = (((((!((map__69504 == null))))?(((((map__69504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69504):map__69504);
var db = map__69504__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69504__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69505 = p__69503;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69505,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69505,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69505,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),new cljs.core.Symbol(null,"notes","notes",600931004,null)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc_in((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = notes;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),new cljs.core.Symbol(null,"notes","notes",600931004,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69509){var e = e69509;
throw e;
}}):(function (p__69510,p__69511){
var map__69512 = p__69510;
var map__69512__$1 = (((((!((map__69512 == null))))?(((((map__69512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69512):map__69512);
var db = map__69512__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69512__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69513 = p__69511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69513,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69513,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69513,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),notes);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-room-menu","shifting-sands.events/show-room-menu",-415948424),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__69517){
var vec__69518 = p__69517;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69518,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69518,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074),new cljs.core.Symbol(null,"coord","coord",186874888,null)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69521){var e = e69521;
throw e;
}}):(function (db,p__69522){
var vec__69523 = p__69522;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69523,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69523,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074),coord);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-room-menu","shifting-sands.events/hide-room-menu",-1491599402),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69526){var e = e69526;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074)),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)], 0));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","toggle-expanded-notes","shifting-sands.events/toggle-expanded-notes",1470265792),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348),new cljs.core.Symbol(null,"not","not",1044554643,null)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.not;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69527){var e = e69527;
throw e;
}}):(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348),cljs.core.not);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-expanded-notes","shifting-sands.events/hide-expanded-notes",-840493901),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69528){var e = e69528;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","current-room","shifting-sands.events/current-room",1715517596),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__69529){
var vec__69530 = p__69529;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69530,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69530,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69530,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69533){var e = e69533;
throw e;
}}):(function (db,p__69534){
var vec__69535 = p__69534;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69535,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69535,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69535,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),coord], null));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),cljs.core.list(new cljs.core.Symbol("db","generate-new-character","db/generate-new-character",-675129969,null))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.generate_new_character();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-new-character","db/generate-new-character",-675129969,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),cljs.core.list(new cljs.core.Symbol("db","generate-new-character","db/generate-new-character",-675129969,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e69538){var e = e69538;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),shifting_sands.db.generate_new_character());
})));

//# sourceMappingURL=shifting_sands.events.js.map

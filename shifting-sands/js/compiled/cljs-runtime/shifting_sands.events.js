goog.provide('shifting_sands.events');
shifting_sands.events.__GT_local_store = (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(shifting_sands.db.state__GT_local_store) : re_frame.core.after.call(null,shifting_sands.db.state__GT_local_store));
shifting_sands.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.events.__GT_local_store], null);
shifting_sands.events.get_room_index = (function shifting_sands$events$get_room_index(db,coord){
var floor = new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","set-active-page","shifting-sands.events/set-active-page",1700852759),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73071,p__73072){
var map__73073 = p__73071;
var map__73073__$1 = (((((!((map__73073 == null))))?(((((map__73073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73073):map__73073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73073__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__73074 = p__73072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73074,(0),null);
var map__73077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73074,(1),null);
var map__73077__$1 = (((((!((map__73077 == null))))?(((((map__73077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73077):map__73077);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73077__$1,new cljs.core.Keyword(null,"page","page",849072397));
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
var result__47938__auto__ = (function (){var G__73081 = (function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var G__73081__$1 = (((G__73081 instanceof cljs.core.Keyword))?G__73081.fqn:null);
switch (G__73081__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73081__$1)].join('')));

}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),new cljs.core.Symbol(null,"page","page",-1805363372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e73080){var e = e73080;
throw e;
}}):(function (p__73082,p__73083){
var map__73084 = p__73082;
var map__73084__$1 = (((((!((map__73084 == null))))?(((((map__73084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73084):map__73084);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73084__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__73085 = p__73083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73085,(0),null);
var map__73088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73085,(1),null);
var map__73088__$1 = (((((!((map__73088 == null))))?(((((map__73088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73088):map__73088);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73088__$1,new cljs.core.Keyword(null,"page","page",849072397));
var set_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),page);
var G__73091 = page;
var G__73091__$1 = (((G__73091 instanceof cljs.core.Keyword))?G__73091.fqn:null);
switch (G__73091__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73091__$1)].join('')));

}
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","initialize-db","shifting-sands.events/initialize-db",954565019),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)) : re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)))], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73092,_){
var map__73093 = p__73092;
var map__73093__$1 = (((((!((map__73093 == null))))?(((((map__73093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73093):map__73093);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73093__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73093__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
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
}catch (e73095){var e = e73095;
throw e;
}}):(function (p__73096,_){
var map__73097 = p__73096;
var map__73097__$1 = (((((!((map__73097 == null))))?(((((map__73097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73097):map__73097);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73097__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73097__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shifting_sands.db.default_db,local_store_state], 0))], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","init-floor","shifting-sands.events/init-floor",1253169226),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__73099){
var vec__73100 = p__73099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73100,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73100,(1),null);
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
}catch (e73103){var e = e73103;
throw e;
}}):(function (db,p__73104){
var vec__73105 = p__73104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73105,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73105,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),shifting_sands.db.init_floor(floor));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","change-floor","shifting-sands.events/change-floor",1664448799),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__73108){
var vec__73109 = p__73108;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73109,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73109,(1),null);
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
}catch (e73112){var e = e73112;
throw e;
}}):(function (db,p__73113){
var vec__73114 = p__73113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73114,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73114,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),floor);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-loot","shifting-sands.events/generate-loot",-799189400),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73118,_){
var map__73119 = p__73118;
var map__73119__$1 = (((((!((map__73119 == null))))?(((((map__73119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73119):map__73119);
var db = map__73119__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73119__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
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
var result__47938__auto__ = (function (p1__73117_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73117_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loot","loot",1717485649,null),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73117#","p1__73117#",-1536542981,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e73121){var e = e73121;
throw e;
}}):(function (p__73122,_){
var map__73123 = p__73122;
var map__73123__$1 = (((((!((map__73123 == null))))?(((((map__73123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73123):map__73123);
var db = map__73123__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73123__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var loot = shifting_sands.db.generate_loot(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73117_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73117_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-encounter","shifting-sands.events/generate-encounter",-298410342),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73126,p__73127){
var map__73128 = p__73126;
var map__73128__$1 = (((((!((map__73128 == null))))?(((((map__73128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73128):map__73128);
var db = map__73128__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73128__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73129 = p__73127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73129,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73129,(1),null);
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
var result__47938__auto__ = (function (p1__73125_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73125_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73125#","p1__73125#",1501624446,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e73133){var e = e73133;
throw e;
}}):(function (p__73134,p__73135){
var map__73136 = p__73134;
var map__73136__$1 = (((((!((map__73136 == null))))?(((((map__73136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73136):map__73136);
var db = map__73136__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73136__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73137 = p__73135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73137,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73137,(1),null);
var adv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null));
var enc = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),floor], null),adv);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(enc)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73125_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73125_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),shifting_sands.events.item__GT_str(enc),new cljs.core.Keyword(null,"room-index","room-index",-663455338),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shop","shifting-sands.events/force-shop",239504190),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73142,p__73143){
var map__73144 = p__73142;
var map__73144__$1 = (((((!((map__73144 == null))))?(((((map__73144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73144):map__73144);
var db = map__73144__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73144__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73145 = p__73143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73145,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73145,(1),null);
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
var result__47938__auto__ = (function (p1__73141_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73141_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shop","shop",816887121,null),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73141#","p1__73141#",406684681,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e73149){var e = e73149;
throw e;
}}):(function (p__73150,p__73151){
var map__73152 = p__73150;
var map__73152__$1 = (((((!((map__73152 == null))))?(((((map__73152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73152):map__73152);
var db = map__73152__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73152__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73153 = p__73151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73153,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73153,(1),null);
var shop = shifting_sands.db.generate_shop(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shop),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73141_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73141_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),["Forced Shop:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(shop))].join(''),new cljs.core.Keyword(null,"room-index","room-index",-663455338),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shrine","shifting-sands.events/force-shrine",1940722496),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73158,p__73159){
var map__73160 = p__73158;
var map__73160__$1 = (((((!((map__73160 == null))))?(((((map__73160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73160):map__73160);
var db = map__73160__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73160__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73161 = p__73159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73161,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73161,(1),null);
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
var result__47938__auto__ = (function (p1__73157_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73157_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73157#","p1__73157#",561118270,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e73165){var e = e73165;
throw e;
}}):(function (p__73166,p__73167){
var map__73168 = p__73166;
var map__73168__$1 = (((((!((map__73168 == null))))?(((((map__73168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73168):map__73168);
var db = map__73168__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73168__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73169 = p__73167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73169,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73169,(1),null);
var shrine = shifting_sands.db.generate_shrine(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shrine),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73157_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73157_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),["Forced Shrine: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(shrine))].join(''),new cljs.core.Keyword(null,"room-index","room-index",-663455338),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
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
}catch (e73173){var e = e73173;
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
}catch (e73174){var e = e73174;
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
}catch (e73175){var e = e73175;
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
}catch (e73176){var e = e73176;
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
}catch (e73177){var e = e73177;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","reset-all","shifting-sands.events/reset-all",-1646479445),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__73178){
var vec__73179 = p__73178;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73179,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73179,(1),null);
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
}catch (e73182){var e = e73182;
throw e;
}}):(function (db,p__73183){
var vec__73184 = p__73183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73184,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73184,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.init_db.cljs$core$IFn$_invoke$arity$2(db,reset_slugs_QMARK_),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","rotate-room","shifting-sands.events/rotate-room",13039064),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73189,p__73190){
var map__73191 = p__73189;
var map__73191__$1 = (((((!((map__73191 == null))))?(((((map__73191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73191):map__73191);
var db = map__73191__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73191__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73192 = p__73190;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73192,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73192,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73192,(2),null);
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
var result__47938__auto__ = (function (p1__73187_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.rotate_room((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73187_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73187#","p1__73187#",896972064,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__73187#","p1__73187#",896972064,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73187#","p1__73187#",896972064,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__73187#","p1__73187#",896972064,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73187#","p1__73187#",896972064,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__73187#","p1__73187#",896972064,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__73188_SHARP_){
var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73188_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73188#","p1__73188#",1091757132,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73188#","p1__73188#",1091757132,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73188#","p1__73188#",1091757132,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73188#","p1__73188#",1091757132,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73188#","p1__73188#",1091757132,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73188#","p1__73188#",1091757132,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73187#","p1__73187#",896972064,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__73187#","p1__73187#",896972064,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73188#","p1__73188#",1091757132,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73188#","p1__73188#",1091757132,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"room-index","room-index",-663455338),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e73196){var e = e73196;
throw e;
}}):(function (p__73197,p__73198){
var map__73199 = p__73197;
var map__73199__$1 = (((((!((map__73199 == null))))?(((((map__73199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73199):map__73199);
var db = map__73199__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73199__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73200 = p__73198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73200,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73200,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73200,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null),(function (p1__73187_SHARP_){
return shifting_sands.db.rotate_room(p1__73187_SHARP_,dir);
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73188_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73188_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),["Rotate ",clojure.string.upper_case(cljs.core.name(dir))].join(''),new cljs.core.Keyword(null,"room-index","room-index",-663455338),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
}));
})));
shifting_sands.events.generate_history_log = (function shifting_sands$events$generate_history_log(desc,ridx,floor){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"room-index","room-index",-663455338),ridx,new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null);
});
shifting_sands.events.adv__GT_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.adv__GT_str,"");
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-room","shifting-sands.events/generate-room",2119090790),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73206,p__73207){
var map__73208 = p__73206;
var map__73208__$1 = (((((!((map__73208 == null))))?(((((map__73208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73208):map__73208);
var db = map__73208__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73208__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73208__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__73209 = p__73207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73209,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73209,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73209,(2),null);
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
var result__47938__auto__ = (function (p1__73204_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73204_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__73205_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73205_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73204#","p1__73204#",-1214191554,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73205#","p1__73205#",1662175580,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e73213){var e = e73213;
throw e;
}}):(function (p__73214,p__73215){
var map__73216 = p__73214;
var map__73216__$1 = (((((!((map__73216 == null))))?(((((map__73216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73216):map__73216);
var db = map__73216__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73216__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73216__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__73217 = p__73215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73217,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73217,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73217,(2),null);
var floor_state = shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv);
var room = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73204_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73204_SHARP_,shifting_sands.events.generate_history_log(["Generated room",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73205_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73205_SHARP_,shifting_sands.events.generate_history_log(["Generated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","regenerate-room","shifting-sands.events/regenerate-room",-1382676672),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73223,p__73224){
var map__73225 = p__73223;
var map__73225__$1 = (((((!((map__73225 == null))))?(((((map__73225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73225):map__73225);
var db = map__73225__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73225__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73226 = p__73224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73226,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73226,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73226,(2),null);
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
var result__47938__auto__ = (function (p1__73221_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73221_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__73222_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73222_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099)),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73221#","p1__73221#",1616422442,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73222#","p1__73222#",1529690688,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e73230){var e = e73230;
throw e;
}}):(function (p__73231,p__73232){
var map__73233 = p__73231;
var map__73233__$1 = (((((!((map__73233 == null))))?(((((map__73233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73233):map__73233);
var db = map__73233__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73233__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73234 = p__73232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73234,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73234,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73234,(2),null);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var room_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099));
var floor_state = cljs.core.assoc_in(shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),room_index);
var room = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null)),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),room_index);
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73221_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73221_SHARP_,shifting_sands.events.generate_history_log(["Regenerated room ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(room_index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73222_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73222_SHARP_,shifting_sands.events.generate_history_log(["Regenerated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
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
}catch (e73238){var e = e73238;
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
}catch (e73239){var e = e73239;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398));
})));
shifting_sands.events.stringify_desc = (function shifting_sands$events$stringify_desc(p__73240){
var map__73241 = p__73240;
var map__73241__$1 = (((((!((map__73241 == null))))?(((((map__73241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73241):map__73241);
var item = map__73241__$1;
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73241__$1,new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","defense","shifting-sands.db/defense",-1450924558).cljs$core$IFn$_invoke$arity$1(desc))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),shifting_sands.db.armor__GT_str.cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","damage","shifting-sands.db/damage",2033136700).cljs$core$IFn$_invoke$arity$1(desc))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),shifting_sands.db.weapon__GT_str(item)], null):null)], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-generic","shifting-sands.events/generate-generic",-1930414738),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__73244){
var vec__73245 = p__73244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73245,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73245,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73245,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var floor = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (cljs.core.truth_((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var G__73249 = (function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.last((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})();
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__73249) : shifting_sands.db.floors.call(null,G__73249));
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
var result__47938__auto__ = (function (){var opts__47943__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47944__auto__ = shifting_sands.events.stringify_desc((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
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
var result__47938__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

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
var result__47938__auto__ = (function (p1__73243_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__73243_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__73243#","p1__73243#",1054327848,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e73248){var e = e73248;
throw e;
}}):(function (db,p__73250){
var vec__73251 = p__73250;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73251,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73251,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73251,(2),null);
var floor = (cljs.core.truth_((function (){var G__73254 = cljs.core.last(path);
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__73254) : shifting_sands.db.floors.call(null,G__73254));
})())?cljs.core.last(path):new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db));
var item = shifting_sands.events.stringify_desc(shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),path,adv));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),item),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__73243_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73243_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),["Generate",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",shifting_sands.events.item__GT_str(item)].join(''),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.core.now()], null));
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
}catch (e73255){var e = e73255;
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
}catch (e73256){var e = e73256;
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
}catch (e73257){var e = e73257;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","update-room-adv","shifting-sands.events/update-room-adv",1562513108),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__73258){
var vec__73259 = p__73258;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73259,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73259,(1),null);
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
}catch (e73262){var e = e73262;
throw e;
}}):(function (db,p__73263){
var vec__73264 = p__73263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73264,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73264,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max,(-3)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.min,(3)),update_fn));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","update-notes","shifting-sands.events/update-notes",610337318),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__73267,p__73268){
var map__73269 = p__73267;
var map__73269__$1 = (((((!((map__73269 == null))))?(((((map__73269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73269):map__73269);
var db = map__73269__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73269__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73270 = p__73268;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73270,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73270,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73270,(2),null);
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
}catch (e73274){var e = e73274;
throw e;
}}):(function (p__73275,p__73276){
var map__73277 = p__73275;
var map__73277__$1 = (((((!((map__73277 == null))))?(((((map__73277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73277):map__73277);
var db = map__73277__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73277__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__73278 = p__73276;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73278,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73278,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73278,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),notes);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-room-menu","shifting-sands.events/show-room-menu",-415948424),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__73282){
var vec__73283 = p__73282;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73283,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73283,(1),null);
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
}catch (e73286){var e = e73286;
throw e;
}}):(function (db,p__73287){
var vec__73288 = p__73287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73288,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73288,(1),null);
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
}catch (e73291){var e = e73291;
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
}catch (e73292){var e = e73292;
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
}catch (e73293){var e = e73293;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","current-room","shifting-sands.events/current-room",1715517596),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__73294){
var vec__73295 = p__73294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73295,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73295,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73295,(2),null);
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
}catch (e73298){var e = e73298;
throw e;
}}):(function (db,p__73299){
var vec__73300 = p__73299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73300,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73300,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73300,(2),null);
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
}catch (e73303){var e = e73303;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),shifting_sands.db.generate_new_character());
})));

//# sourceMappingURL=shifting_sands.events.js.map

goog.provide('shifting_sands.events');
/**
 * Throws an exception if `db` doesn't match the Spec `a-spec`.
 */
shifting_sands.events.check_and_throw = (function shifting_sands$events$check_and_throw(a_spec,db){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["spec check failed: ",cljs.spec.alpha.explain_str(a_spec,db)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
shifting_sands.events.check_spec_interceptor = (function (){var G__98609 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shifting_sands.events.check_and_throw,new cljs.core.Keyword("shifting-sands.db","db","shifting-sands.db/db",-32862307));
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__98609) : re_frame.core.after.call(null,G__98609));
})();
shifting_sands.events.__GT_local_store = (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(shifting_sands.db.state__GT_local_store) : re_frame.core.after.call(null,shifting_sands.db.state__GT_local_store));
shifting_sands.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.events.__GT_local_store], null);
shifting_sands.events.get_room_index = (function shifting_sands$events$get_room_index(db,coord){
var floor = new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","set-active-page","shifting-sands.events/set-active-page",1700852759),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98610,p__98611){
var map__98612 = p__98610;
var map__98612__$1 = (((((!((map__98612 == null))))?(((((map__98612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98612):map__98612);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98612__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__98613 = p__98611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98613,(0),null);
var map__98616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98613,(1),null);
var map__98616__$1 = (((((!((map__98616 == null))))?(((((map__98616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98616):map__98616);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98616__$1,new cljs.core.Keyword(null,"page","page",849072397));
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
var result__47938__auto__ = (function (){var G__98620 = (function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var G__98620__$1 = (((G__98620 instanceof cljs.core.Keyword))?G__98620.fqn:null);
switch (G__98620__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__98620__$1)].join('')));

}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),new cljs.core.Symbol(null,"page","page",-1805363372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e98619){var e = e98619;
throw e;
}}):(function (p__98621,p__98622){
var map__98623 = p__98621;
var map__98623__$1 = (((((!((map__98623 == null))))?(((((map__98623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98623):map__98623);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98623__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__98624 = p__98622;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98624,(0),null);
var map__98627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98624,(1),null);
var map__98627__$1 = (((((!((map__98627 == null))))?(((((map__98627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98627):map__98627);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98627__$1,new cljs.core.Keyword(null,"page","page",849072397));
var set_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),page);
var G__98630 = page;
var G__98630__$1 = (((G__98630 instanceof cljs.core.Keyword))?G__98630.fqn:null);
switch (G__98630__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__98630__$1)].join('')));

}
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","initialize-db","shifting-sands.events/initialize-db",954565019),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)) : re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)))], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98631,_){
var map__98632 = p__98631;
var map__98632__$1 = (((((!((map__98632 == null))))?(((((map__98632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98632):map__98632);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98632__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98632__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
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
}catch (e98634){var e = e98634;
throw e;
}}):(function (p__98635,_){
var map__98636 = p__98635;
var map__98636__$1 = (((((!((map__98636 == null))))?(((((map__98636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98636):map__98636);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98636__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98636__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shifting_sands.db.default_db,local_store_state], 0))], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","init-floor","shifting-sands.events/init-floor",1253169226),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__98638){
var vec__98639 = p__98638;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98639,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98639,(1),null);
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
}catch (e98642){var e = e98642;
throw e;
}}):(function (db,p__98643){
var vec__98644 = p__98643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98644,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98644,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),shifting_sands.db.init_floor(floor));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","change-floor","shifting-sands.events/change-floor",1664448799),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__98647){
var vec__98648 = p__98647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98648,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98648,(1),null);
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
}catch (e98651){var e = e98651;
throw e;
}}):(function (db,p__98652){
var vec__98653 = p__98652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98653,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98653,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),floor);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-loot","shifting-sands.events/generate-loot",-799189400),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98657,_){
var map__98658 = p__98657;
var map__98658__$1 = (((((!((map__98658 == null))))?(((((map__98658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98658):map__98658);
var db = map__98658__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98658__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loot","loot",1717485649,null),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

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
var result__47938__auto__ = (function (p1__98656_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98656_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1((function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = loot;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"loot","loot",1717485649,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loot","loot",1717485649,null),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98656#","p1__98656#",-1698647844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e98660){var e = e98660;
throw e;
}}):(function (p__98661,_){
var map__98662 = p__98661;
var map__98662__$1 = (((((!((map__98662 == null))))?(((((map__98662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98662):map__98662);
var db = map__98662__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98662__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var loot = shifting_sands.db.generate_loot(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98656_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98656_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-encounter","shifting-sands.events/generate-encounter",-298410342),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98665,p__98666){
var map__98667 = p__98665;
var map__98667__$1 = (((((!((map__98667 == null))))?(((((map__98667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98667):map__98667);
var db = map__98667__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98667__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98668 = p__98666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98668,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98668,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

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
var result__47938__auto__ = (function (p1__98664_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98664_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = ["Generated encounter: ",(function (){var opts__47937__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.events.item__GT_str((function (){var opts__47937__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = enc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47938__auto__;
})()].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98664#","p1__98664#",-1159597596,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e98672){var e = e98672;
throw e;
}}):(function (p__98673,p__98674){
var map__98675 = p__98673;
var map__98675__$1 = (((((!((map__98675 == null))))?(((((map__98675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98675):map__98675);
var db = map__98675__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98675__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98676 = p__98674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98676,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98676,(1),null);
var adv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null));
var enc = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),floor], null),adv);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(enc)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98664_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98664_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Generated encounter: ",shifting_sands.events.item__GT_str(enc)].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shop","shifting-sands.events/force-shop",239504190),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98681,p__98682){
var map__98683 = p__98681;
var map__98683__$1 = (((((!((map__98683 == null))))?(((((map__98683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98683):map__98683);
var db = map__98683__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98683__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98684 = p__98682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98684,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98684,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shop","shop",816887121,null),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

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
var result__47938__auto__ = (function (p1__98680_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98680_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shop","shop",816887121,null),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98680#","p1__98680#",-2106874179,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e98688){var e = e98688;
throw e;
}}):(function (p__98689,p__98690){
var map__98691 = p__98689;
var map__98691__$1 = (((((!((map__98691 == null))))?(((((map__98691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98691):map__98691);
var db = map__98691__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98691__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98692 = p__98690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98692,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98692,(1),null);
var shop = shifting_sands.db.generate_shop(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shop),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98680_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98680_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Forced Shop:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(shop))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shrine","shifting-sands.events/force-shrine",1940722496),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98697,p__98698){
var map__98699 = p__98697;
var map__98699__$1 = (((((!((map__98699 == null))))?(((((map__98699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98699):map__98699);
var db = map__98699__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98699__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98700 = p__98698;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98700,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98700,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

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
var result__47938__auto__ = (function (p1__98696_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98696_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98696#","p1__98696#",1851750544,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e98704){var e = e98704;
throw e;
}}):(function (p__98705,p__98706){
var map__98707 = p__98705;
var map__98707__$1 = (((((!((map__98707 == null))))?(((((map__98707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98707):map__98707);
var db = map__98707__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98707__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98708 = p__98706;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98708,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98708,(1),null);
var shrine = shifting_sands.db.generate_shrine(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shrine),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98696_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98696_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Forced Shrine: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(shrine))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
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
}catch (e98712){var e = e98712;
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
}catch (e98713){var e = e98713;
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
}catch (e98714){var e = e98714;
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
}catch (e98715){var e = e98715;
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
}catch (e98716){var e = e98716;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","reset-all","shifting-sands.events/reset-all",-1646479445),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__98717){
var vec__98718 = p__98717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98718,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98718,(1),null);
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
}catch (e98721){var e = e98721;
throw e;
}}):(function (db,p__98722){
var vec__98723 = p__98722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98723,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98723,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.init_db.cljs$core$IFn$_invoke$arity$2(db,reset_slugs_QMARK_),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","rotate-room","shifting-sands.events/rotate-room",13039064),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98728,p__98729){
var map__98730 = p__98728;
var map__98730__$1 = (((((!((map__98730 == null))))?(((((map__98730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98730):map__98730);
var db = map__98730__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98730__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98731 = p__98729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98731,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98731,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98731,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))));

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
var result__47938__auto__ = (function (p1__98726_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.rotate_room((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98726_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98726#","p1__98726#",931273669,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__98726#","p1__98726#",931273669,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98726#","p1__98726#",931273669,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__98726#","p1__98726#",931273669,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98726#","p1__98726#",931273669,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__98726#","p1__98726#",931273669,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__98727_SHARP_){
var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98727_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98727#","p1__98727#",-2128189179,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98727#","p1__98727#",-2128189179,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98727#","p1__98727#",-2128189179,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98727#","p1__98727#",-2128189179,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98727#","p1__98727#",-2128189179,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98727#","p1__98727#",-2128189179,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98726#","p1__98726#",931273669,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__98726#","p1__98726#",931273669,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98727#","p1__98727#",-2128189179,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98727#","p1__98727#",-2128189179,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e98735){var e = e98735;
throw e;
}}):(function (p__98736,p__98737){
var map__98738 = p__98736;
var map__98738__$1 = (((((!((map__98738 == null))))?(((((map__98738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98738):map__98738);
var db = map__98738__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98738__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98739 = p__98737;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98739,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98739,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98739,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null),(function (p1__98726_SHARP_){
return shifting_sands.db.rotate_room(p1__98726_SHARP_,dir);
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98727_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98727_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Rotate ",clojure.string.upper_case(cljs.core.name(dir))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
shifting_sands.events.generate_history_log = (function shifting_sands$events$generate_history_log(desc,ridx,floor){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),desc,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),ridx,new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null);
});
shifting_sands.events.adv__GT_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.adv__GT_str,"");
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-room","shifting-sands.events/generate-room",2119090790),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98745,p__98746){
var map__98747 = p__98745;
var map__98747__$1 = (((((!((map__98747 == null))))?(((((map__98747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98747):map__98747);
var db = map__98747__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98747__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98747__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__98748 = p__98746;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98748,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98748,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98748,(2),null);
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
var result__47938__auto__ = (function (p1__98743_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98743_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__98744_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98744_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98743#","p1__98743#",148756698,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98744#","p1__98744#",-792923072,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e98752){var e = e98752;
throw e;
}}):(function (p__98753,p__98754){
var map__98755 = p__98753;
var map__98755__$1 = (((((!((map__98755 == null))))?(((((map__98755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98755):map__98755);
var db = map__98755__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98755__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98755__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__98756 = p__98754;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98756,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98756,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98756,(2),null);
var floor_state = shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv);
var room = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98743_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98743_SHARP_,shifting_sands.events.generate_history_log(["Generated room",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98744_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98744_SHARP_,shifting_sands.events.generate_history_log(["Generated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","regenerate-room","shifting-sands.events/regenerate-room",-1382676672),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98762,p__98763){
var map__98764 = p__98762;
var map__98764__$1 = (((((!((map__98764 == null))))?(((((map__98764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98764):map__98764);
var db = map__98764__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98764__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98765 = p__98763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98765,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98765,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98765,(2),null);
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
var result__47938__auto__ = (function (p1__98760_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98760_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__98761_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98761_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099)),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98760#","p1__98760#",-1164227348,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98761#","p1__98761#",-1932085074,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e98769){var e = e98769;
throw e;
}}):(function (p__98770,p__98771){
var map__98772 = p__98770;
var map__98772__$1 = (((((!((map__98772 == null))))?(((((map__98772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98772):map__98772);
var db = map__98772__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98772__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98773 = p__98771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98773,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98773,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98773,(2),null);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var room_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099));
var floor_state = cljs.core.assoc_in(shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),room_index);
var room = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null)),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),room_index);
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98760_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98760_SHARP_,shifting_sands.events.generate_history_log(["Regenerated room ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(room_index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98761_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98761_SHARP_,shifting_sands.events.generate_history_log(["Regenerated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
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
}catch (e98777){var e = e98777;
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
}catch (e98778){var e = e98778;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398));
})));
shifting_sands.events.stringify_desc = (function shifting_sands$events$stringify_desc(p__98779){
var map__98780 = p__98779;
var map__98780__$1 = (((((!((map__98780 == null))))?(((((map__98780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98780):map__98780);
var item = map__98780__$1;
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98780__$1,new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","defense","shifting-sands.db/defense",-1450924558).cljs$core$IFn$_invoke$arity$1(desc))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),shifting_sands.db.armor__GT_str.cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","damage","shifting-sands.db/damage",2033136700).cljs$core$IFn$_invoke$arity$1(desc))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),shifting_sands.db.weapon__GT_str(item)], null):null)], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-generic","shifting-sands.events/generate-generic",-1930414738),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__98783){
var vec__98784 = p__98783;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98784,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98784,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98784,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var floor = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (cljs.core.truth_((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var G__98788 = (function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.last((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})();
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__98788) : shifting_sands.db.floors.call(null,G__98788));
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
var result__47938__auto__ = (function (p1__98782_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__98782_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47937__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47938__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__98782#","p1__98782#",916355790,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e98787){var e = e98787;
throw e;
}}):(function (db,p__98789){
var vec__98790 = p__98789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98790,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98790,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98790,(2),null);
var floor = (cljs.core.truth_((function (){var G__98793 = cljs.core.last(path);
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__98793) : shifting_sands.db.floors.call(null,G__98793));
})())?cljs.core.last(path):new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db));
var item = shifting_sands.events.stringify_desc(shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),path,adv));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),item),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__98782_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__98782_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Generate",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",shifting_sands.events.item__GT_str(item)].join(''),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
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
}catch (e98794){var e = e98794;
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
}catch (e98795){var e = e98795;
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
}catch (e98796){var e = e98796;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","update-room-adv","shifting-sands.events/update-room-adv",1562513108),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__98797){
var vec__98798 = p__98797;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98798,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98798,(1),null);
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
}catch (e98801){var e = e98801;
throw e;
}}):(function (db,p__98802){
var vec__98803 = p__98802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98803,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98803,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max,(-3)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.min,(3)),update_fn));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","update-notes","shifting-sands.events/update-notes",610337318),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__98806,p__98807){
var map__98808 = p__98806;
var map__98808__$1 = (((((!((map__98808 == null))))?(((((map__98808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98808):map__98808);
var db = map__98808__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98808__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98809 = p__98807;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98809,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98809,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98809,(2),null);
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
}catch (e98813){var e = e98813;
throw e;
}}):(function (p__98814,p__98815){
var map__98816 = p__98814;
var map__98816__$1 = (((((!((map__98816 == null))))?(((((map__98816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98816):map__98816);
var db = map__98816__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98816__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__98817 = p__98815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98817,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98817,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98817,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),notes);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-room-menu","shifting-sands.events/show-room-menu",-415948424),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__98821){
var vec__98822 = p__98821;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98822,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98822,(1),null);
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
}catch (e98825){var e = e98825;
throw e;
}}):(function (db,p__98826){
var vec__98827 = p__98826;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98827,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98827,(1),null);
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
}catch (e98830){var e = e98830;
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
}catch (e98831){var e = e98831;
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
}catch (e98832){var e = e98832;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","current-room","shifting-sands.events/current-room",1715517596),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__98833){
var vec__98834 = p__98833;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98834,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98834,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98834,(2),null);
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
}catch (e98837){var e = e98837;
throw e;
}}):(function (db,p__98838){
var vec__98839 = p__98838;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98839,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98839,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98839,(2),null);
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
}catch (e98842){var e = e98842;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),shifting_sands.db.generate_new_character());
})));

//# sourceMappingURL=shifting_sands.events.js.map

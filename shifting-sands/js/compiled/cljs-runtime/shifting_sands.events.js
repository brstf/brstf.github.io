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
shifting_sands.events.check_spec_interceptor = (function (){var G__48968 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shifting_sands.events.check_and_throw,new cljs.core.Keyword("shifting-sands.db","db","shifting-sands.db/db",-32862307));
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__48968) : re_frame.core.after.call(null,G__48968));
})();
shifting_sands.events.__GT_local_store = (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(shifting_sands.db.state__GT_local_store) : re_frame.core.after.call(null,shifting_sands.db.state__GT_local_store));
shifting_sands.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.events.__GT_local_store], null);
shifting_sands.events.get_room_index = (function shifting_sands$events$get_room_index(db,coord){
var floor = new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","set-active-page","shifting-sands.events/set-active-page",1700852759),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__48978,p__48979){
var map__48981 = p__48978;
var map__48981__$1 = (((((!((map__48981 == null))))?(((((map__48981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48981):map__48981);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48981__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__48982 = p__48979;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48982,(0),null);
var map__48985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48982,(1),null);
var map__48985__$1 = (((((!((map__48985 == null))))?(((((map__48985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48985):map__48985);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48985__$1,new cljs.core.Keyword(null,"page","page",849072397));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),new cljs.core.Symbol(null,"page","page",-1805363372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var set_page = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),new cljs.core.Symbol(null,"page","page",-1805363372,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var G__48999 = (function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var G__48999__$1 = (((G__48999 instanceof cljs.core.Keyword))?G__48999.fqn:null);
switch (G__48999__$1) {
case "home":
var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = set_page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;

break;
case "new-character":
var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = set_page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;

break;
case "not-found":
var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = set_page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48999__$1)].join('')));

}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),new cljs.core.Symbol(null,"page","page",-1805363372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e48992){var e = e48992;
throw e;
}}):(function (p__49000,p__49001){
var map__49002 = p__49000;
var map__49002__$1 = (((((!((map__49002 == null))))?(((((map__49002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49002):map__49002);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49002__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49003 = p__49001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49003,(0),null);
var map__49006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49003,(1),null);
var map__49006__$1 = (((((!((map__49006 == null))))?(((((map__49006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49006):map__49006);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49006__$1,new cljs.core.Keyword(null,"page","page",849072397));
var set_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),page);
var G__49014 = page;
var G__49014__$1 = (((G__49014 instanceof cljs.core.Keyword))?G__49014.fqn:null);
switch (G__49014__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49014__$1)].join('')));

}
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","initialize-db","shifting-sands.events/initialize-db",954565019),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)) : re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)))], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__49020,_){
var map__49021 = p__49020;
var map__49021__$1 = (((((!((map__49021 == null))))?(((((map__49021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49021):map__49021);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49021__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49021__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Symbol(null,"local-store-state","local-store-state",-394690304,null))], null));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = local_store_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"local-store-state","local-store-state",-394690304,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Symbol(null,"local-store-state","local-store-state",-394690304,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Symbol(null,"local-store-state","local-store-state",-394690304,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49027){var e = e49027;
throw e;
}}):(function (p__49034,_){
var map__49035 = p__49034;
var map__49035__$1 = (((((!((map__49035 == null))))?(((((map__49035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49035):map__49035);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shifting_sands.db.default_db,local_store_state], 0))], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","init-floor","shifting-sands.events/init-floor",1253169226),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__49043){
var vec__49044 = p__49043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49044,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49044,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),cljs.core.list(new cljs.core.Symbol("db","init-floor","db/init-floor",559852264,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc_in((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.init_floor((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","init-floor","db/init-floor",559852264,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),cljs.core.list(new cljs.core.Symbol("db","init-floor","db/init-floor",559852264,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49049){var e = e49049;
throw e;
}}):(function (db,p__49058){
var vec__49059 = p__49058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49059,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49059,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),shifting_sands.db.init_floor(floor));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","change-floor","shifting-sands.events/change-floor",1664448799),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__49066){
var vec__49067 = p__49066;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49067,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49067,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"floor","floor",-772394748,null)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49070){var e = e49070;
throw e;
}}):(function (db,p__49077){
var vec__49078 = p__49077;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49078,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49078,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),floor);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-loot","shifting-sands.events/generate-loot",-799189400),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__49084,_){
var map__49085 = p__49084;
var map__49085__$1 = (((((!((map__49085 == null))))?(((((map__49085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49085):map__49085);
var db = map__49085__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loot","loot",1717485649,null),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var loot = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.generate_loot((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = loot;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"loot","loot",1717485649,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49081_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49081_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = loot;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"loot","loot",1717485649,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loot","loot",1717485649,null),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49081#","p1__49081#",694569776,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49088){var e = e49088;
throw e;
}}):(function (p__49112,_){
var map__49115 = p__49112;
var map__49115__$1 = (((((!((map__49115 == null))))?(((((map__49115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49115):map__49115);
var db = map__49115__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49115__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var loot = shifting_sands.db.generate_loot(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49081_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49081_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-encounter","shifting-sands.events/generate-encounter",-298410342),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__49128,p__49129){
var map__49130 = p__49128;
var map__49130__$1 = (((((!((map__49130 == null))))?(((((map__49130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49130):map__49130);
var db = map__49130__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49130__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49131 = p__49129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var adv = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var enc = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = enc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49127_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49127_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = ["Generated encounter: ",(function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.item__GT_str((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = enc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})()].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.get_room_index((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49127#","p1__49127#",-1117886951,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49135){var e = e49135;
throw e;
}}):(function (p__49136,p__49137){
var map__49138 = p__49136;
var map__49138__$1 = (((((!((map__49138 == null))))?(((((map__49138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49138):map__49138);
var db = map__49138__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49138__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49139 = p__49137;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49139,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49139,(1),null);
var adv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null));
var enc = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),floor], null),adv);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(enc)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49127_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49127_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Generated encounter: ",shifting_sands.events.item__GT_str(enc)].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shop","shifting-sands.events/force-shop",239504190),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__49144,p__49145){
var map__49146 = p__49144;
var map__49146__$1 = (((((!((map__49146 == null))))?(((((map__49146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49146):map__49146);
var db = map__49146__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49146__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49147 = p__49145;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49147,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49147,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shop","shop",816887121,null),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var shop = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.generate_shop((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc_in((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shop;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"shop","shop",816887121,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49143_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49143_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = ["Forced Shop:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shop;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"shop","shop",816887121,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.get_room_index((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shop","shop",816887121,null),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49143#","p1__49143#",59404728,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49151){var e = e49151;
throw e;
}}):(function (p__49152,p__49153){
var map__49154 = p__49152;
var map__49154__$1 = (((((!((map__49154 == null))))?(((((map__49154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49154):map__49154);
var db = map__49154__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49154__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49155 = p__49153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49155,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49155,(1),null);
var shop = shifting_sands.db.generate_shop(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shop),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49143_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49143_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Forced Shop:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(shop))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shrine","shifting-sands.events/force-shrine",1940722496),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__49160,p__49161){
var map__49162 = p__49160;
var map__49162__$1 = (((((!((map__49162 == null))))?(((((map__49162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49162):map__49162);
var db = map__49162__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49162__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49163 = p__49161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49163,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49163,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var shrine = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.generate_shrine((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc_in((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shrine;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49159_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49159_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = ["Forced Shrine: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shrine;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.get_room_index((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49159#","p1__49159#",1673046964,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49168){var e = e49168;
throw e;
}}):(function (p__49169,p__49170){
var map__49171 = p__49169;
var map__49171__$1 = (((((!((map__49171 == null))))?(((((map__49171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49171):map__49171);
var db = map__49171__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49171__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49172 = p__49170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49172,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49172,(1),null);
var shrine = shifting_sands.db.generate_shrine(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shrine),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49159_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49159_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Forced Shrine: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(shrine))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","clear-modal-result","shifting-sands.events/clear-modal-result",1975660596),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49176){var e = e49176;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-slugs","shifting-sands.events/show-slugs",-192244856),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605),true));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49177){var e = e49177;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-slugs","shifting-sands.events/hide-slugs",-31244748),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49178){var e = e49178;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-reset-dialog","shifting-sands.events/show-reset-dialog",-1859694497),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479),true));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49179){var e = e49179;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-reset-dialog","shifting-sands.events/hide-reset-dialog",-1857372418),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49180){var e = e49180;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","reset-all","shifting-sands.events/reset-all",-1646479445),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__49181){
var vec__49182 = p__49181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49182,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49182,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","init-db","db/init-db",-1059257433,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"reset-slugs?","reset-slugs?",2122053311,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.init_db.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = reset_slugs_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"reset-slugs?","reset-slugs?",2122053311,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","init-db","db/init-db",-1059257433,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"reset-slugs?","reset-slugs?",2122053311,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","init-db","db/init-db",-1059257433,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"reset-slugs?","reset-slugs?",2122053311,null)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49185){var e = e49185;
throw e;
}}):(function (db,p__49186){
var vec__49187 = p__49186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49187,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49187,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.init_db.cljs$core$IFn$_invoke$arity$2(db,reset_slugs_QMARK_),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","rotate-room","shifting-sands.events/rotate-room",13039064),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__49192,p__49193){
var map__49194 = p__49192;
var map__49194__$1 = (((((!((map__49194 == null))))?(((((map__49194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49194):map__49194);
var db = map__49194__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49194__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49195 = p__49193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49195,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49195,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49195,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49190_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.rotate_room((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49190_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49190#","p1__49190#",980328102,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__49190#","p1__49190#",980328102,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49190#","p1__49190#",980328102,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__49190#","p1__49190#",980328102,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49190#","p1__49190#",980328102,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__49190#","p1__49190#",980328102,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49191_SHARP_){
var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49191_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49191#","p1__49191#",692374992,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = ["Rotate ",(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = clojure.string.upper_case((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.name((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})()].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.get_room_index((function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49191#","p1__49191#",692374992,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49191#","p1__49191#",692374992,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49191#","p1__49191#",692374992,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49191#","p1__49191#",692374992,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49191#","p1__49191#",692374992,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49190#","p1__49190#",980328102,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__49190#","p1__49190#",980328102,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49191#","p1__49191#",692374992,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49191#","p1__49191#",692374992,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49199){var e = e49199;
throw e;
}}):(function (p__49200,p__49201){
var map__49202 = p__49200;
var map__49202__$1 = (((((!((map__49202 == null))))?(((((map__49202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49202):map__49202);
var db = map__49202__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49202__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49203 = p__49201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49203,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49203,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49203,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null),(function (p1__49190_SHARP_){
return shifting_sands.db.rotate_room(p1__49190_SHARP_,dir);
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49191_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49191_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Rotate ",clojure.string.upper_case(cljs.core.name(dir))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
shifting_sands.events.generate_history_log = (function shifting_sands$events$generate_history_log(desc,ridx,floor){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),desc,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),ridx,new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null);
});
shifting_sands.events.adv__GT_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.adv__GT_str,"");
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-room","shifting-sands.events/generate-room",2119090790),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__49209,p__49210){
var map__49211 = p__49209;
var map__49211__$1 = (((((!((map__49211 == null))))?(((((map__49211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49211):map__49211);
var db = map__49211__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49211__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49211__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__49212 = p__49210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49212,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49212,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49212,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var floor_state = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = from_dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var room = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var situation = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47966__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47966__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc_in((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49207_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49207_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.generate_history_log((function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = ["Generated room",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49208_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49208_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.generate_history_log((function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = ["Generated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = situation;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"situation","situation",208441802,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49207#","p1__49207#",60551703,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49208#","p1__49208#",615938142,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49218){var e = e49218;
throw e;
}}):(function (p__49222,p__49223){
var map__49224 = p__49222;
var map__49224__$1 = (((((!((map__49224 == null))))?(((((map__49224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49224):map__49224);
var db = map__49224__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49224__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49224__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__49225 = p__49223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49225,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49225,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49225,(2),null);
var floor_state = shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv);
var room = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49207_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49207_SHARP_,shifting_sands.events.generate_history_log(["Generated room",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49208_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49208_SHARP_,shifting_sands.events.generate_history_log(["Generated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","regenerate-room","shifting-sands.events/regenerate-room",-1382676672),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__49233,p__49234){
var map__49235 = p__49233;
var map__49235__$1 = (((((!((map__49235 == null))))?(((((map__49235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49235):map__49235);
var db = map__49235__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49235__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49236 = p__49234;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49236,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49236,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49236,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099)),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var prev = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var room_index = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = prev;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var adv = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = prev;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var floor_state = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.assoc_in((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = from_dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var room = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var situation = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47966__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc_in((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor_state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49231_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49231_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.generate_history_log((function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = ["Regenerated room ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49232_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49232_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.generate_history_log((function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = ["Regenerated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = situation;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"situation","situation",208441802,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = room;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099)),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49231#","p1__49231#",-1456149848,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49232#","p1__49232#",997052852,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49242){var e = e49242;
throw e;
}}):(function (p__49246,p__49247){
var map__49248 = p__49246;
var map__49248__$1 = (((((!((map__49248 == null))))?(((((map__49248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49248):map__49248);
var db = map__49248__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49248__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49249 = p__49247;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49249,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49249,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49249,(2),null);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var room_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099));
var floor_state = cljs.core.assoc_in(shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),room_index);
var room = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null)),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),room_index);
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49231_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49231_SHARP_,shifting_sands.events.generate_history_log(["Regenerated room ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(room_index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49232_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49232_SHARP_,shifting_sands.events.generate_history_log(["Regenerated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-generate-dialog","shifting-sands.events/show-generate-dialog",-1200286217),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398),true));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49254){var e = e49254;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-generate-dialog","shifting-sands.events/hide-generate-dialog",-1582299819),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49255){var e = e49255;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398));
})));
shifting_sands.events.stringify_desc = (function shifting_sands$events$stringify_desc(p__49257){
var map__49258 = p__49257;
var map__49258__$1 = (((((!((map__49258 == null))))?(((((map__49258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49258):map__49258);
var item = map__49258__$1;
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49258__$1,new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","defense","shifting-sands.db/defense",-1450924558).cljs$core$IFn$_invoke$arity$1(desc))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),shifting_sands.db.armor__GT_str.cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","damage","shifting-sands.db/damage",2033136700).cljs$core$IFn$_invoke$arity$1(desc))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),shifting_sands.db.weapon__GT_str(item)], null):null)], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-generic","shifting-sands.events/generate-generic",-1930414738),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__49262){
var vec__49263 = p__49262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49263,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49263,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49263,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var floor = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (cljs.core.truth_((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var G__49269 = (function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.last((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})();
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__49269) : shifting_sands.db.floors.call(null,G__49269));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})())?(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.last((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})():(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var item = (function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = shifting_sands.events.stringify_desc((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})();
var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47966__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item","item",1889905329,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (p1__49260_SHARP_){
var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = p1__49260_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = ["Generate",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.adv__GT_str((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = adv;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})()),": ",(function (){var opts__47960__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.events.item__GT_str((function (){var opts__47960__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item","item",1889905329,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__47961__auto__;
})()].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),(function (){var opts__47960__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs_time.core.now();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47961__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__49260#","p1__49260#",617631553,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49268){var e = e49268;
throw e;
}}):(function (db,p__49270){
var vec__49271 = p__49270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(2),null);
var floor = (cljs.core.truth_((function (){var G__49274 = cljs.core.last(path);
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__49274) : shifting_sands.db.floors.call(null,G__49274));
})())?cljs.core.last(path):new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db));
var item = shifting_sands.events.stringify_desc(shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),path,adv));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),item),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__49260_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49260_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Generate",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",shifting_sands.events.item__GT_str(item)].join(''),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","clear-generate-result","shifting-sands.events/clear-generate-result",928693428),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49275){var e = e49275;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-history","shifting-sands.events/show-history",-1062290337),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865),true));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49276){var e = e49276;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-history","shifting-sands.events/hide-history",1277451013),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49277){var e = e49277;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","update-room-adv","shifting-sands.events/update-room-adv",1562513108),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__49278){
var vec__49279 = p__49278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49279,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49279,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"max","max",1701898075,null),(-3)),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"min","min",2085523049,null),(3)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.max;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(-3));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"max","max",1701898075,null),(-3)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.min;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47961__auto__;
})(),(3));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"min","min",2085523049,null),(3)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = update_fn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"max","max",1701898075,null),(-3)),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"min","min",2085523049,null),(3)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"max","max",1701898075,null),(-3)),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"min","min",2085523049,null),(3)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49282){var e = e49282;
throw e;
}}):(function (db,p__49283){
var vec__49284 = p__49283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49284,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49284,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max,(-3)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.min,(3)),update_fn));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","update-notes","shifting-sands.events/update-notes",610337318),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__49287,p__49288){
var map__49289 = p__49287;
var map__49289__$1 = (((((!((map__49289 == null))))?(((((map__49289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49289):map__49289);
var db = map__49289__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49289__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49290 = p__49288;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49290,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49290,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49290,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),new cljs.core.Symbol(null,"notes","notes",600931004,null)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc_in((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = notes;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),new cljs.core.Symbol(null,"notes","notes",600931004,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49294){var e = e49294;
throw e;
}}):(function (p__49295,p__49296){
var map__49297 = p__49295;
var map__49297__$1 = (((((!((map__49297 == null))))?(((((map__49297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49297):map__49297);
var db = map__49297__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49297__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__49298 = p__49296;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49298,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49298,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49298,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),notes);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-room-menu","shifting-sands.events/show-room-menu",-415948424),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__49302){
var vec__49303 = p__49302;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49303,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49303,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074),new cljs.core.Symbol(null,"coord","coord",186874888,null)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49306){var e = e49306;
throw e;
}}):(function (db,p__49307){
var vec__49308 = p__49307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49308,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49308,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074),coord);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-room-menu","shifting-sands.events/hide-room-menu",-1491599402),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = (function (){var opts__47966__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47967__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47967__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47967__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49311){var e = e49311;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074)),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)], 0));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","toggle-expanded-notes","shifting-sands.events/toggle-expanded-notes",1470265792),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348),new cljs.core.Symbol(null,"not","not",1044554643,null)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.not;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49312){var e = e49312;
throw e;
}}):(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348),cljs.core.not);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","hide-expanded-notes","shifting-sands.events/hide-expanded-notes",-840493901),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49313){var e = e49313;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","current-room","shifting-sands.events/current-room",1715517596),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__49314){
var vec__49315 = p__49314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49315,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49315,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49315,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = floor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),(function (){var opts__47960__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = coord;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47961__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49318){var e = e49318;
throw e;
}}):(function (db,p__49319){
var vec__49320 = p__49319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49320,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49320,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49320,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865),coord], null));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),cljs.core.list(new cljs.core.Symbol("db","generate-new-character","db/generate-new-character",-675129969,null))));

var opts__47960__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),(function (){var opts__47960__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47961__auto__ = shifting_sands.db.generate_new_character();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","generate-new-character","db/generate-new-character",-675129969,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47961__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47961__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),cljs.core.list(new cljs.core.Symbol("db","generate-new-character","db/generate-new-character",-675129969,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47961__auto__;
}catch (e49323){var e = e49323;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),shifting_sands.db.generate_new_character());
})));

//# sourceMappingURL=shifting_sands.events.js.map

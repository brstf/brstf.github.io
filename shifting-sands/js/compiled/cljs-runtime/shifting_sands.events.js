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
shifting_sands.events.check_spec_interceptor = (function (){var G__110523 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shifting_sands.events.check_and_throw,new cljs.core.Keyword("shifting-sands.db","db","shifting-sands.db/db",-32862307));
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__110523) : re_frame.core.after.call(null,G__110523));
})();
shifting_sands.events.__GT_local_store = (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(shifting_sands.db.state__GT_local_store) : re_frame.core.after.call(null,shifting_sands.db.state__GT_local_store));
shifting_sands.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.events.__GT_local_store], null);
shifting_sands.events.get_room_index = (function shifting_sands$events$get_room_index(db,coord){
var floor = new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","set-active-page","shifting-sands.events/set-active-page",1700852759),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110526,p__110527){
var map__110528 = p__110526;
var map__110528__$1 = (((((!((map__110528 == null))))?(((((map__110528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110528):map__110528);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110528__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__110529 = p__110527;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110529,(0),null);
var map__110532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110529,(1),null);
var map__110532__$1 = (((((!((map__110532 == null))))?(((((map__110532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110532):map__110532);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110532__$1,new cljs.core.Keyword(null,"page","page",849072397));
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
var result__47938__auto__ = (function (){var G__110552 = (function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = page;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})();
var G__110552__$1 = (((G__110552 instanceof cljs.core.Keyword))?G__110552.fqn:null);
switch (G__110552__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110552__$1)].join('')));

}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),new cljs.core.Symbol(null,"page","page",-1805363372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null),new cljs.core.Keyword(null,"new-character","new-character",1383210044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null)], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"set-page","set-page",-903530255,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e110541){var e = e110541;
throw e;
}}):(function (p__110563,p__110564){
var map__110565 = p__110563;
var map__110565__$1 = (((((!((map__110565 == null))))?(((((map__110565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110565):map__110565);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110565__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__110566 = p__110564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110566,(0),null);
var map__110569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110566,(1),null);
var map__110569__$1 = (((((!((map__110569 == null))))?(((((map__110569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110569):map__110569);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110569__$1,new cljs.core.Keyword(null,"page","page",849072397));
var set_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040),page);
var G__110578 = page;
var G__110578__$1 = (((G__110578 instanceof cljs.core.Keyword))?G__110578.fqn:null);
switch (G__110578__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110578__$1)].join('')));

}
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","initialize-db","shifting-sands.events/initialize-db",954565019),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)) : re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831)))], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110583,_){
var map__110584 = p__110583;
var map__110584__$1 = (((((!((map__110584 == null))))?(((((map__110584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110584):map__110584);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110584__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110584__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
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
}catch (e110590){var e = e110590;
throw e;
}}):(function (p__110597,_){
var map__110598 = p__110597;
var map__110598__$1 = (((((!((map__110598 == null))))?(((((map__110598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110598):map__110598);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110598__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110598__$1,new cljs.core.Keyword(null,"local-store-state","local-store-state",-2035221831));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shifting_sands.db.default_db,local_store_state], 0))], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","init-floor","shifting-sands.events/init-floor",1253169226),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__110604){
var vec__110607 = p__110604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110607,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110607,(1),null);
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
}catch (e110610){var e = e110610;
throw e;
}}):(function (db,p__110613){
var vec__110614 = p__110613;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110614,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110614,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),shifting_sands.db.init_floor(floor));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","change-floor","shifting-sands.events/change-floor",1664448799),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__110617){
var vec__110618 = p__110617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110618,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110618,(1),null);
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
}catch (e110621){var e = e110621;
throw e;
}}):(function (db,p__110622){
var vec__110623 = p__110622;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110623,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110623,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),floor);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-loot","shifting-sands.events/generate-loot",-799189400),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110628,_){
var map__110629 = p__110628;
var map__110629__$1 = (((((!((map__110629 == null))))?(((((map__110629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110629):map__110629);
var db = map__110629__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110629__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
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
var result__47938__auto__ = (function (p1__110627_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110627_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loot","loot",1717485649,null),cljs.core.list(new cljs.core.Symbol("db","generate-loot","db/generate-loot",-954560474,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110627#","p1__110627#",1971952146,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"loot","loot",1717485649,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e110638){var e = e110638;
throw e;
}}):(function (p__110667,_){
var map__110668 = p__110667;
var map__110668__$1 = (((((!((map__110668 == null))))?(((((map__110668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110668):map__110668);
var db = map__110668__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110668__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var loot = shifting_sands.db.generate_loot(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110627_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110627_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(loot),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-encounter","shifting-sands.events/generate-encounter",-298410342),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110671,p__110672){
var map__110673 = p__110671;
var map__110673__$1 = (((((!((map__110673 == null))))?(((((map__110673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110673):map__110673);
var db = map__110673__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110673__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110674 = p__110672;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110674,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110674,(1),null);
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
var result__47938__auto__ = (function (p1__110670_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110670_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null)),new cljs.core.Symbol(null,"enc","enc",-1945310989,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110670#","p1__110670#",-1238695499,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated encounter: ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"enc","enc",-1945310989,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e110678){var e = e110678;
throw e;
}}):(function (p__110679,p__110680){
var map__110681 = p__110679;
var map__110681__$1 = (((((!((map__110681 == null))))?(((((map__110681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110681):map__110681);
var db = map__110681__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110681__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110682 = p__110680;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110682,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110682,(1),null);
var adv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","danger","shifting-sands.db/danger",33037356)], null));
var enc = shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","encounter","shifting-sands.db/encounter",1784525513),floor], null),adv);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015),new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(enc)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110670_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110670_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Generated encounter: ",shifting_sands.events.item__GT_str(enc)].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shop","shifting-sands.events/force-shop",239504190),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110687,p__110688){
var map__110689 = p__110687;
var map__110689__$1 = (((((!((map__110689 == null))))?(((((map__110689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110689):map__110689);
var db = map__110689__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110689__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110690 = p__110688;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110690,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110690,(1),null);
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
var result__47938__auto__ = (function (p1__110686_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110686_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shop","shop",816887121,null),cljs.core.list(new cljs.core.Symbol("db","generate-shop","db/generate-shop",-1869283822,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shop","shop",816887121,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110686#","p1__110686#",1186851412,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shop:\n",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),new cljs.core.Symbol(null,"shop","shop",816887121,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e110694){var e = e110694;
throw e;
}}):(function (p__110695,p__110696){
var map__110697 = p__110695;
var map__110697__$1 = (((((!((map__110697 == null))))?(((((map__110697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110697):map__110697);
var db = map__110697__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110697__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110698 = p__110696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110698,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110698,(1),null);
var shop = shifting_sands.db.generate_shop(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shop),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110686_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110686_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Forced Shop:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(shop))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","force-shrine","shifting-sands.events/force-shrine",1940722496),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110703,p__110704){
var map__110706 = p__110703;
var map__110706__$1 = (((((!((map__110706 == null))))?(((((map__110706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110706):map__110706);
var db = map__110706__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110706__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110707 = p__110704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110707,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110707,(1),null);
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
var result__47938__auto__ = (function (p1__110702_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110702_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null),cljs.core.list(new cljs.core.Symbol("db","generate-shrine","db/generate-shrine",273450800,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110702#","p1__110702#",1724365311,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Forced Shrine: ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"shrine","shrine",-2112780309,null))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e110711){var e = e110711;
throw e;
}}):(function (p__110712,p__110713){
var map__110714 = p__110712;
var map__110714__$1 = (((((!((map__110714 == null))))?(((((map__110714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110714):map__110714);
var db = map__110714__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110714__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110715 = p__110713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110715,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110715,(1),null);
var shrine = shifting_sands.db.generate_shrine(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071)], null),shrine),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110702_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110702_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Forced Shrine: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(shrine))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
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
}catch (e110719){var e = e110719;
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
}catch (e110720){var e = e110720;
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
}catch (e110721){var e = e110721;
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
}catch (e110722){var e = e110722;
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
}catch (e110723){var e = e110723;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","reset-all","shifting-sands.events/reset-all",-1646479445),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__110724){
var vec__110725 = p__110724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110725,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110725,(1),null);
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
}catch (e110728){var e = e110728;
throw e;
}}):(function (db,p__110729){
var vec__110730 = p__110729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110730,(0),null);
var reset_slugs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110730,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.init_db.cljs$core$IFn$_invoke$arity$2(db,reset_slugs_QMARK_),new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","rotate-room","shifting-sands.events/rotate-room",13039064),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110735,p__110736){
var map__110737 = p__110735;
var map__110737__$1 = (((((!((map__110737 == null))))?(((((map__110737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110737):map__110737);
var db = map__110737__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110737__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110738 = p__110736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110738,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110738,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110738,(2),null);
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
var result__47938__auto__ = (function (p1__110733_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = shifting_sands.db.rotate_room((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110733_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110733#","p1__110733#",-597102696,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})(),(function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = dir;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__110733#","p1__110733#",-597102696,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110733#","p1__110733#",-597102696,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__110733#","p1__110733#",-597102696,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110733#","p1__110733#",-597102696,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__110733#","p1__110733#",-597102696,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__110734_SHARP_){
var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110734_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110734#","p1__110734#",1838597654,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110734#","p1__110734#",1838597654,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110734#","p1__110734#",1838597654,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110734#","p1__110734#",1838597654,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110734#","p1__110734#",1838597654,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110734#","p1__110734#",1838597654,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110733#","p1__110733#",-597102696,null)], null),cljs.core.list(new cljs.core.Symbol("db","rotate-room","db/rotate-room",375925142,null),new cljs.core.Symbol(null,"p1__110733#","p1__110733#",-597102696,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110734#","p1__110734#",1838597654,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110734#","p1__110734#",1838597654,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Rotate ",cljs.core.list(new cljs.core.Symbol("string","upper-case","string/upper-case",1648134472,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.list(new cljs.core.Symbol(null,"get-room-index","get-room-index",-711996172,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"coord","coord",186874888,null)),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e110742){var e = e110742;
throw e;
}}):(function (p__110743,p__110744){
var map__110745 = p__110743;
var map__110745__$1 = (((((!((map__110745 == null))))?(((((map__110745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110745):map__110745);
var db = map__110745__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110745__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110746 = p__110744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110746,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110746,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110746,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null),(function (p1__110733_SHARP_){
return shifting_sands.db.rotate_room(p1__110733_SHARP_,dir);
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110734_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110734_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Rotate ",clojure.string.upper_case(cljs.core.name(dir))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),shifting_sands.events.get_room_index(db,coord),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
}));
})));
shifting_sands.events.generate_history_log = (function shifting_sands$events$generate_history_log(desc,ridx,floor){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),desc,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),ridx,new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null);
});
shifting_sands.events.adv__GT_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.adv__GT_str,"");
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-room","shifting-sands.events/generate-room",2119090790),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110752,p__110753){
var map__110754 = p__110752;
var map__110754__$1 = (((((!((map__110754 == null))))?(((((map__110754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110754):map__110754);
var db = map__110754__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110754__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110754__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__110755 = p__110753;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110755,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110755,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110755,(2),null);
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
var result__47938__auto__ = (function (p1__110750_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110750_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__110751_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110751_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110750#","p1__110750#",-2035571628,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated room",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110751#","p1__110751#",-1283928214,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e110760){var e = e110760;
throw e;
}}):(function (p__110765,p__110766){
var map__110767 = p__110765;
var map__110767__$1 = (((((!((map__110767 == null))))?(((((map__110767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110767):map__110767);
var db = map__110767__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110767__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110767__$1,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
var vec__110768 = p__110766;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110768,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110768,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110768,(2),null);
var floor_state = shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv);
var room = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),(0)),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110750_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110750_SHARP_,shifting_sands.events.generate_history_log(["Generated room",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110751_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110751_SHARP_,shifting_sands.events.generate_history_log(["Generated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
}));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","regenerate-room","shifting-sands.events/regenerate-room",-1382676672),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110775,p__110776){
var map__110777 = p__110775;
var map__110777__$1 = (((((!((map__110777 == null))))?(((((map__110777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110777):map__110777);
var db = map__110777__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110777__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110778 = p__110776;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110778,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110778,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110778,(2),null);
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
var result__47938__auto__ = (function (p1__110773_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110773_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})(),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (p1__110774_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110774_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)),new cljs.core.Symbol(null,"adv","adv",-1333873472,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099)),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate-room","db/generate-room",1597307956,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"from-dir","from-dir",-1529688758,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"room","room",-2117950847,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),new cljs.core.Symbol(null,"coord","coord",186874888,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room-index","room-index",977076189,null))),new cljs.core.Symbol(null,"situation","situation",208441802,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"room","room",-2117950847,null),new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null),new cljs.core.Symbol(null,"floor-state","floor-state",-1133589625,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110773#","p1__110773#",1926404473,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated room ",new cljs.core.Symbol(null,"room-index","room-index",977076189,null),cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"room","room",-2117950847,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110774#","p1__110774#",-602579315,null),cljs.core.list(new cljs.core.Symbol(null,"generate-history-log","generate-history-log",-1594409711,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Regenerated situation",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799),new cljs.core.Symbol(null,"situation","situation",208441802,null))),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),new cljs.core.Symbol(null,"room","room",-2117950847,null)),new cljs.core.Symbol(null,"floor","floor",-772394748,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e110784){var e = e110784;
throw e;
}}):(function (p__110788,p__110789){
var map__110790 = p__110788;
var map__110790__$1 = (((((!((map__110790 == null))))?(((((map__110790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110790):map__110790);
var db = map__110790__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110790__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110791 = p__110789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110791,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110791,(1),null);
var from_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110791,(2),null);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null));
var room_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
var adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword("shifting-sands.db","adv","shifting-sands.db/adv",493258099));
var floor_state = cljs.core.assoc_in(shifting_sands.db.generate_room.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),coord,from_dir,adv),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676)], null),room_index);
var room = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(floor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord], null)),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),room_index);
var situation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(room,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null),floor_state),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110773_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110773_SHARP_,shifting_sands.events.generate_history_log(["Regenerated room ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(room_index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(room))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
})),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110774_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110774_SHARP_,shifting_sands.events.generate_history_log(["Regenerated situation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(situation))].join(''),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room),floor));
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
}catch (e110796){var e = e110796;
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
}catch (e110797){var e = e110797;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398));
})));
shifting_sands.events.stringify_desc = (function shifting_sands$events$stringify_desc(p__110799){
var map__110800 = p__110799;
var map__110800__$1 = (((((!((map__110800 == null))))?(((((map__110800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110800):map__110800);
var item = map__110800__$1;
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110800__$1,new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","defense","shifting-sands.db/defense",-1450924558).cljs$core$IFn$_invoke$arity$1(desc))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),shifting_sands.db.armor__GT_str.cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","damage","shifting-sands.db/damage",2033136700).cljs$core$IFn$_invoke$arity$1(desc))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),shifting_sands.db.weapon__GT_str(item)], null):null)], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","generate-generic","shifting-sands.events/generate-generic",-1930414738),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__110803){
var vec__110804 = p__110803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110804,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110804,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110804,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))));

var opts__47937__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var floor = (function (){var opts__47937__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (cljs.core.truth_((function (){var opts__47937__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = (function (){var G__110810 = (function (){var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.last((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
})();
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__110810) : shifting_sands.db.floors.call(null,G__110810));
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
var result__47938__auto__ = (function (p1__110802_SHARP_){
var opts__47937__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var opts__47937__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__47938__auto__ = p1__110802_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

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
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47938__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47938__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47944__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47944__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47938__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47938__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("db","floors","db/floors",1953984477,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"path","path",1452340359,null)),cljs.core.list(new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"item","item",1889905329,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("db","generate","db/generate",1477075763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),new cljs.core.Symbol(null,"stringify-desc","stringify-desc",-1719715440,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null)], null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"p1__110802#","p1__110802#",-293685100,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Generate",cljs.core.list(new cljs.core.Symbol(null,"adv->str","adv->str",1422935205,null),new cljs.core.Symbol(null,"adv","adv",-1333873472,null)),": ",cljs.core.list(new cljs.core.Symbol(null,"item->str","item->str",689161295,null),new cljs.core.Symbol(null,"item","item",1889905329,null))),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs.core.list(new cljs.core.Symbol("time","now","time/now",-13504975,null))], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47938__auto__;
}catch (e110809){var e = e110809;
throw e;
}}):(function (db,p__110813){
var vec__110814 = p__110813;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110814,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110814,(1),null);
var adv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110814,(2),null);
var floor = (cljs.core.truth_((function (){var G__110817 = cljs.core.last(path);
return (shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.floors.cljs$core$IFn$_invoke$arity$1(G__110817) : shifting_sands.db.floors.call(null,G__110817));
})())?cljs.core.last(path):new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db));
var item = shifting_sands.events.stringify_desc(shifting_sands.db.generate.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor], null)),path,adv));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082),item),new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722),(function (p1__110802_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__110802_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418),["Generate",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shifting_sands.events.adv__GT_str(adv)),": ",shifting_sands.events.item__GT_str(item)].join(''),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371),floor,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724),cljs_time.core.now()], null));
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
}catch (e110818){var e = e110818;
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
}catch (e110819){var e = e110819;
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
}catch (e110820){var e = e110820;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","update-room-adv","shifting-sands.events/update-room-adv",1562513108),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__110821){
var vec__110822 = p__110821;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110822,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110822,(1),null);
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
}catch (e110825){var e = e110825;
throw e;
}}):(function (db,p__110826){
var vec__110827 = p__110826;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110827,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110827,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max,(-3)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.min,(3)),update_fn));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","update-notes","shifting-sands.events/update-notes",610337318),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__110830,p__110831){
var map__110832 = p__110830;
var map__110832__$1 = (((((!((map__110832 == null))))?(((((map__110832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110832):map__110832);
var db = map__110832__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110832__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110833 = p__110831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110833,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110833,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110833,(2),null);
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
}catch (e110837){var e = e110837;
throw e;
}}):(function (p__110838,p__110839){
var map__110840 = p__110838;
var map__110840__$1 = (((((!((map__110840 == null))))?(((((map__110840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110840):map__110840);
var db = map__110840__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110840__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__110841 = p__110839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110841,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110841,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110841,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),notes);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.events","show-room-menu","shifting-sands.events/show-room-menu",-415948424),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__110845){
var vec__110846 = p__110845;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110846,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110846,(1),null);
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
}catch (e110849){var e = e110849;
throw e;
}}):(function (db,p__110850){
var vec__110851 = p__110850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110851,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110851,(1),null);
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
}catch (e110854){var e = e110854;
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
}catch (e110855){var e = e110855;
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
}catch (e110856){var e = e110856;
throw e;
}}):(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.events","current-room","shifting-sands.events/current-room",1715517596),shifting_sands.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__110857){
var vec__110858 = p__110857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110858,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110858,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110858,(2),null);
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
}catch (e110861){var e = e110861;
throw e;
}}):(function (db,p__110862){
var vec__110863 = p__110862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110863,(0),null);
var floor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110863,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110863,(2),null);
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
}catch (e110866){var e = e110866;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906),shifting_sands.db.generate_new_character());
})));

//# sourceMappingURL=shifting_sands.events.js.map

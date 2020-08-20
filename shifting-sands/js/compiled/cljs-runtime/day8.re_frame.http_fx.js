goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__48631){
var vec__48632 = p__48631;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48632,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48632,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__48654){
var map__48659 = p__48654;
var map__48659__$1 = (((((!((map__48659 == null))))?(((((map__48659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48659):map__48659);
var request = map__48659__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48659__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48659__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__48652_SHARP_){
var G__48667 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__48652_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48667) : re_frame.core.dispatch.call(null,G__48667));
}),(function (p1__48653_SHARP_){
var G__48668 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__48653_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48668) : re_frame.core.dispatch.call(null,G__48668));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__48685 = cljs.core.seq(seq_request_maps);
var chunk__48687 = null;
var count__48688 = (0);
var i__48689 = (0);
while(true){
if((i__48689 < count__48688)){
var request__$1 = chunk__48687.cljs$core$IIndexed$_nth$arity$2(null,i__48689);
var G__48702_48730 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__48702_48730) : ajax.core.ajax_request.call(null,G__48702_48730));


var G__48733 = seq__48685;
var G__48734 = chunk__48687;
var G__48735 = count__48688;
var G__48736 = (i__48689 + (1));
seq__48685 = G__48733;
chunk__48687 = G__48734;
count__48688 = G__48735;
i__48689 = G__48736;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48685);
if(temp__5735__auto__){
var seq__48685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48685__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48685__$1);
var G__48737 = cljs.core.chunk_rest(seq__48685__$1);
var G__48738 = c__4556__auto__;
var G__48739 = cljs.core.count(c__4556__auto__);
var G__48740 = (0);
seq__48685 = G__48737;
chunk__48687 = G__48738;
count__48688 = G__48739;
i__48689 = G__48740;
continue;
} else {
var request__$1 = cljs.core.first(seq__48685__$1);
var G__48710_48741 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__48710_48741) : ajax.core.ajax_request.call(null,G__48710_48741));


var G__48742 = cljs.core.next(seq__48685__$1);
var G__48743 = null;
var G__48744 = (0);
var G__48745 = (0);
seq__48685 = G__48742;
chunk__48687 = G__48743;
count__48688 = G__48744;
i__48689 = G__48745;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect) : re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect));

//# sourceMappingURL=day8.re_frame.http_fx.js.map

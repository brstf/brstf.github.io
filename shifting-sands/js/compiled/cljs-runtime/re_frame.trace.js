goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52713){
var map__52714 = p__52713;
var map__52714__$1 = (((((!((map__52714 == null))))?(((((map__52714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52714):map__52714);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__52716_52761 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52723_52762 = null;
var count__52724_52763 = (0);
var i__52725_52764 = (0);
while(true){
if((i__52725_52764 < count__52724_52763)){
var vec__52742_52766 = chunk__52723_52762.cljs$core$IIndexed$_nth$arity$2(null,i__52725_52764);
var k_52767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52742_52766,(0),null);
var cb_52768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52742_52766,(1),null);
try{var G__52746_52769 = cljs.core.deref(re_frame.trace.traces);
(cb_52768.cljs$core$IFn$_invoke$arity$1 ? cb_52768.cljs$core$IFn$_invoke$arity$1(G__52746_52769) : cb_52768.call(null,G__52746_52769));
}catch (e52745){var e_52770 = e52745;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52767,"while storing",cljs.core.deref(re_frame.trace.traces),e_52770], 0));
}

var G__52771 = seq__52716_52761;
var G__52772 = chunk__52723_52762;
var G__52773 = count__52724_52763;
var G__52774 = (i__52725_52764 + (1));
seq__52716_52761 = G__52771;
chunk__52723_52762 = G__52772;
count__52724_52763 = G__52773;
i__52725_52764 = G__52774;
continue;
} else {
var temp__5735__auto___52775 = cljs.core.seq(seq__52716_52761);
if(temp__5735__auto___52775){
var seq__52716_52776__$1 = temp__5735__auto___52775;
if(cljs.core.chunked_seq_QMARK_(seq__52716_52776__$1)){
var c__4556__auto___52777 = cljs.core.chunk_first(seq__52716_52776__$1);
var G__52778 = cljs.core.chunk_rest(seq__52716_52776__$1);
var G__52779 = c__4556__auto___52777;
var G__52780 = cljs.core.count(c__4556__auto___52777);
var G__52781 = (0);
seq__52716_52761 = G__52778;
chunk__52723_52762 = G__52779;
count__52724_52763 = G__52780;
i__52725_52764 = G__52781;
continue;
} else {
var vec__52747_52782 = cljs.core.first(seq__52716_52776__$1);
var k_52783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52747_52782,(0),null);
var cb_52784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52747_52782,(1),null);
try{var G__52751_52785 = cljs.core.deref(re_frame.trace.traces);
(cb_52784.cljs$core$IFn$_invoke$arity$1 ? cb_52784.cljs$core$IFn$_invoke$arity$1(G__52751_52785) : cb_52784.call(null,G__52751_52785));
}catch (e52750){var e_52786 = e52750;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52783,"while storing",cljs.core.deref(re_frame.trace.traces),e_52786], 0));
}

var G__52791 = cljs.core.next(seq__52716_52776__$1);
var G__52792 = null;
var G__52793 = (0);
var G__52794 = (0);
seq__52716_52761 = G__52791;
chunk__52723_52762 = G__52792;
count__52724_52763 = G__52793;
i__52725_52764 = G__52794;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

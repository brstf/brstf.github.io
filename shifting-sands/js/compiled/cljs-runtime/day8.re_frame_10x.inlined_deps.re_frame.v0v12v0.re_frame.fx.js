goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48337 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48338 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48338);

try{try{var seq__48339 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48340 = null;
var count__48341 = (0);
var i__48342 = (0);
while(true){
if((i__48342 < count__48341)){
var vec__48353 = chunk__48340.cljs$core$IIndexed$_nth$arity$2(null,i__48342);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(1),null);
var temp__5733__auto___48422 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48422)){
var effect_fn_48423 = temp__5733__auto___48422;
(effect_fn_48423.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48423.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48423.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48424 = seq__48339;
var G__48425 = chunk__48340;
var G__48426 = count__48341;
var G__48427 = (i__48342 + (1));
seq__48339 = G__48424;
chunk__48340 = G__48425;
count__48341 = G__48426;
i__48342 = G__48427;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48339);
if(temp__5735__auto__){
var seq__48339__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48339__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48339__$1);
var G__48428 = cljs.core.chunk_rest(seq__48339__$1);
var G__48429 = c__4556__auto__;
var G__48430 = cljs.core.count(c__4556__auto__);
var G__48431 = (0);
seq__48339 = G__48428;
chunk__48340 = G__48429;
count__48341 = G__48430;
i__48342 = G__48431;
continue;
} else {
var vec__48358 = cljs.core.first(seq__48339__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48358,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48358,(1),null);
var temp__5733__auto___48432 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48432)){
var effect_fn_48433 = temp__5733__auto___48432;
(effect_fn_48433.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48433.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48433.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48434 = cljs.core.next(seq__48339__$1);
var G__48435 = null;
var G__48436 = (0);
var G__48437 = (0);
seq__48339 = G__48434;
chunk__48340 = G__48435;
count__48341 = G__48436;
i__48342 = G__48437;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48029__auto___48438 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__48030__auto___48439 = (end__48029__auto___48438 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48030__auto___48439,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__48029__auto___48438);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48337);
}} else {
var seq__48361 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48362 = null;
var count__48363 = (0);
var i__48364 = (0);
while(true){
if((i__48364 < count__48363)){
var vec__48372 = chunk__48362.cljs$core$IIndexed$_nth$arity$2(null,i__48364);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372,(1),null);
var temp__5733__auto___48440 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48440)){
var effect_fn_48441 = temp__5733__auto___48440;
(effect_fn_48441.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48441.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48441.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48442 = seq__48361;
var G__48443 = chunk__48362;
var G__48444 = count__48363;
var G__48445 = (i__48364 + (1));
seq__48361 = G__48442;
chunk__48362 = G__48443;
count__48363 = G__48444;
i__48364 = G__48445;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48361);
if(temp__5735__auto__){
var seq__48361__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48361__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48361__$1);
var G__48446 = cljs.core.chunk_rest(seq__48361__$1);
var G__48447 = c__4556__auto__;
var G__48448 = cljs.core.count(c__4556__auto__);
var G__48449 = (0);
seq__48361 = G__48446;
chunk__48362 = G__48447;
count__48363 = G__48448;
i__48364 = G__48449;
continue;
} else {
var vec__48376 = cljs.core.first(seq__48361__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376,(1),null);
var temp__5733__auto___48450 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48450)){
var effect_fn_48451 = temp__5733__auto___48450;
(effect_fn_48451.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48451.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48451.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48452 = cljs.core.next(seq__48361__$1);
var G__48453 = null;
var G__48454 = (0);
var G__48455 = (0);
seq__48361 = G__48452;
chunk__48362 = G__48453;
count__48363 = G__48454;
i__48364 = G__48455;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__48382 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48384 = null;
var count__48385 = (0);
var i__48386 = (0);
while(true){
if((i__48386 < count__48385)){
var map__48399 = chunk__48384.cljs$core$IIndexed$_nth$arity$2(null,i__48386);
var map__48399__$1 = (((((!((map__48399 == null))))?(((((map__48399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48399):map__48399);
var effect = map__48399__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__48382,chunk__48384,count__48385,i__48386,map__48399,map__48399__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__48382,chunk__48384,count__48385,i__48386,map__48399,map__48399__$1,effect,ms,dispatch))
,ms);
}


var G__48456 = seq__48382;
var G__48457 = chunk__48384;
var G__48458 = count__48385;
var G__48459 = (i__48386 + (1));
seq__48382 = G__48456;
chunk__48384 = G__48457;
count__48385 = G__48458;
i__48386 = G__48459;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48382);
if(temp__5735__auto__){
var seq__48382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48382__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48382__$1);
var G__48460 = cljs.core.chunk_rest(seq__48382__$1);
var G__48461 = c__4556__auto__;
var G__48462 = cljs.core.count(c__4556__auto__);
var G__48463 = (0);
seq__48382 = G__48460;
chunk__48384 = G__48461;
count__48385 = G__48462;
i__48386 = G__48463;
continue;
} else {
var map__48405 = cljs.core.first(seq__48382__$1);
var map__48405__$1 = (((((!((map__48405 == null))))?(((((map__48405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48405):map__48405);
var effect = map__48405__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__48382,chunk__48384,count__48385,i__48386,map__48405,map__48405__$1,effect,ms,dispatch,seq__48382__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__48382,chunk__48384,count__48385,i__48386,map__48405,map__48405__$1,effect,ms,dispatch,seq__48382__$1,temp__5735__auto__))
,ms);
}


var G__48464 = cljs.core.next(seq__48382__$1);
var G__48465 = null;
var G__48466 = (0);
var G__48467 = (0);
seq__48382 = G__48464;
chunk__48384 = G__48465;
count__48385 = G__48466;
i__48386 = G__48467;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__48408 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48409 = null;
var count__48410 = (0);
var i__48411 = (0);
while(true){
if((i__48411 < count__48410)){
var event = chunk__48409.cljs$core$IIndexed$_nth$arity$2(null,i__48411);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__48469 = seq__48408;
var G__48470 = chunk__48409;
var G__48471 = count__48410;
var G__48472 = (i__48411 + (1));
seq__48408 = G__48469;
chunk__48409 = G__48470;
count__48410 = G__48471;
i__48411 = G__48472;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48408);
if(temp__5735__auto__){
var seq__48408__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48408__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48408__$1);
var G__48473 = cljs.core.chunk_rest(seq__48408__$1);
var G__48474 = c__4556__auto__;
var G__48475 = cljs.core.count(c__4556__auto__);
var G__48476 = (0);
seq__48408 = G__48473;
chunk__48409 = G__48474;
count__48410 = G__48475;
i__48411 = G__48476;
continue;
} else {
var event = cljs.core.first(seq__48408__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__48477 = cljs.core.next(seq__48408__$1);
var G__48478 = null;
var G__48479 = (0);
var G__48480 = (0);
seq__48408 = G__48477;
chunk__48409 = G__48478;
count__48410 = G__48479;
i__48411 = G__48480;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__48415 = cljs.core.seq(value);
var chunk__48416 = null;
var count__48417 = (0);
var i__48418 = (0);
while(true){
if((i__48418 < count__48417)){
var event = chunk__48416.cljs$core$IIndexed$_nth$arity$2(null,i__48418);
clear_event(event);


var G__48482 = seq__48415;
var G__48483 = chunk__48416;
var G__48484 = count__48417;
var G__48485 = (i__48418 + (1));
seq__48415 = G__48482;
chunk__48416 = G__48483;
count__48417 = G__48484;
i__48418 = G__48485;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48415);
if(temp__5735__auto__){
var seq__48415__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48415__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48415__$1);
var G__48487 = cljs.core.chunk_rest(seq__48415__$1);
var G__48488 = c__4556__auto__;
var G__48489 = cljs.core.count(c__4556__auto__);
var G__48490 = (0);
seq__48415 = G__48487;
chunk__48416 = G__48488;
count__48417 = G__48489;
i__48418 = G__48490;
continue;
} else {
var event = cljs.core.first(seq__48415__$1);
clear_event(event);


var G__48491 = cljs.core.next(seq__48415__$1);
var G__48492 = null;
var G__48493 = (0);
var G__48494 = (0);
seq__48415 = G__48491;
chunk__48416 = G__48492;
count__48417 = G__48493;
i__48418 = G__48494;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map

goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__53041 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53042 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53042);

try{try{var seq__53044 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53045 = null;
var count__53046 = (0);
var i__53047 = (0);
while(true){
if((i__53047 < count__53046)){
var vec__53062 = chunk__53045.cljs$core$IIndexed$_nth$arity$2(null,i__53047);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53062,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53062,(1),null);
var temp__5733__auto___53134 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53134)){
var effect_fn_53135 = temp__5733__auto___53134;
(effect_fn_53135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53135.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53136 = seq__53044;
var G__53137 = chunk__53045;
var G__53138 = count__53046;
var G__53139 = (i__53047 + (1));
seq__53044 = G__53136;
chunk__53045 = G__53137;
count__53046 = G__53138;
i__53047 = G__53139;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53044);
if(temp__5735__auto__){
var seq__53044__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53044__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53044__$1);
var G__53147 = cljs.core.chunk_rest(seq__53044__$1);
var G__53148 = c__4556__auto__;
var G__53149 = cljs.core.count(c__4556__auto__);
var G__53150 = (0);
seq__53044 = G__53147;
chunk__53045 = G__53148;
count__53046 = G__53149;
i__53047 = G__53150;
continue;
} else {
var vec__53067 = cljs.core.first(seq__53044__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53067,(1),null);
var temp__5733__auto___53151 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53151)){
var effect_fn_53152 = temp__5733__auto___53151;
(effect_fn_53152.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53152.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53152.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53156 = cljs.core.next(seq__53044__$1);
var G__53157 = null;
var G__53158 = (0);
var G__53159 = (0);
seq__53044 = G__53156;
chunk__53045 = G__53157;
count__53046 = G__53158;
i__53047 = G__53159;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52685__auto___53160 = re_frame.interop.now();
var duration__52686__auto___53161 = (end__52685__auto___53160 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52686__auto___53161,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52685__auto___53160);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53041);
}} else {
var seq__53071 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53072 = null;
var count__53073 = (0);
var i__53074 = (0);
while(true){
if((i__53074 < count__53073)){
var vec__53083 = chunk__53072.cljs$core$IIndexed$_nth$arity$2(null,i__53074);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53083,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53083,(1),null);
var temp__5733__auto___53162 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53162)){
var effect_fn_53163 = temp__5733__auto___53162;
(effect_fn_53163.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53163.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53163.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53168 = seq__53071;
var G__53169 = chunk__53072;
var G__53170 = count__53073;
var G__53171 = (i__53074 + (1));
seq__53071 = G__53168;
chunk__53072 = G__53169;
count__53073 = G__53170;
i__53074 = G__53171;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53071);
if(temp__5735__auto__){
var seq__53071__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53071__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53071__$1);
var G__53172 = cljs.core.chunk_rest(seq__53071__$1);
var G__53173 = c__4556__auto__;
var G__53174 = cljs.core.count(c__4556__auto__);
var G__53175 = (0);
seq__53071 = G__53172;
chunk__53072 = G__53173;
count__53073 = G__53174;
i__53074 = G__53175;
continue;
} else {
var vec__53099 = cljs.core.first(seq__53071__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53099,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53099,(1),null);
var temp__5733__auto___53176 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53176)){
var effect_fn_53177 = temp__5733__auto___53176;
(effect_fn_53177.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53177.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53177.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53178 = cljs.core.next(seq__53071__$1);
var G__53179 = null;
var G__53180 = (0);
var G__53181 = (0);
seq__53071 = G__53178;
chunk__53072 = G__53179;
count__53073 = G__53180;
i__53074 = G__53181;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__53102 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53103 = null;
var count__53104 = (0);
var i__53105 = (0);
while(true){
if((i__53105 < count__53104)){
var map__53110 = chunk__53103.cljs$core$IIndexed$_nth$arity$2(null,i__53105);
var map__53110__$1 = (((((!((map__53110 == null))))?(((((map__53110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53110):map__53110);
var effect = map__53110__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53110__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53110__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53102,chunk__53103,count__53104,i__53105,map__53110,map__53110__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53102,chunk__53103,count__53104,i__53105,map__53110,map__53110__$1,effect,ms,dispatch))
,ms);
}


var G__53188 = seq__53102;
var G__53189 = chunk__53103;
var G__53190 = count__53104;
var G__53191 = (i__53105 + (1));
seq__53102 = G__53188;
chunk__53103 = G__53189;
count__53104 = G__53190;
i__53105 = G__53191;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53102);
if(temp__5735__auto__){
var seq__53102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53102__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53102__$1);
var G__53192 = cljs.core.chunk_rest(seq__53102__$1);
var G__53193 = c__4556__auto__;
var G__53194 = cljs.core.count(c__4556__auto__);
var G__53195 = (0);
seq__53102 = G__53192;
chunk__53103 = G__53193;
count__53104 = G__53194;
i__53105 = G__53195;
continue;
} else {
var map__53112 = cljs.core.first(seq__53102__$1);
var map__53112__$1 = (((((!((map__53112 == null))))?(((((map__53112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53112):map__53112);
var effect = map__53112__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53112__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53112__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53102,chunk__53103,count__53104,i__53105,map__53112,map__53112__$1,effect,ms,dispatch,seq__53102__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53102,chunk__53103,count__53104,i__53105,map__53112,map__53112__$1,effect,ms,dispatch,seq__53102__$1,temp__5735__auto__))
,ms);
}


var G__53196 = cljs.core.next(seq__53102__$1);
var G__53197 = null;
var G__53198 = (0);
var G__53199 = (0);
seq__53102 = G__53196;
chunk__53103 = G__53197;
count__53104 = G__53198;
i__53105 = G__53199;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53118 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53119 = null;
var count__53120 = (0);
var i__53121 = (0);
while(true){
if((i__53121 < count__53120)){
var event = chunk__53119.cljs$core$IIndexed$_nth$arity$2(null,i__53121);
re_frame.router.dispatch(event);


var G__53200 = seq__53118;
var G__53201 = chunk__53119;
var G__53202 = count__53120;
var G__53203 = (i__53121 + (1));
seq__53118 = G__53200;
chunk__53119 = G__53201;
count__53120 = G__53202;
i__53121 = G__53203;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53118);
if(temp__5735__auto__){
var seq__53118__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53118__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53118__$1);
var G__53204 = cljs.core.chunk_rest(seq__53118__$1);
var G__53205 = c__4556__auto__;
var G__53206 = cljs.core.count(c__4556__auto__);
var G__53207 = (0);
seq__53118 = G__53204;
chunk__53119 = G__53205;
count__53120 = G__53206;
i__53121 = G__53207;
continue;
} else {
var event = cljs.core.first(seq__53118__$1);
re_frame.router.dispatch(event);


var G__53209 = cljs.core.next(seq__53118__$1);
var G__53210 = null;
var G__53211 = (0);
var G__53212 = (0);
seq__53118 = G__53209;
chunk__53119 = G__53210;
count__53120 = G__53211;
i__53121 = G__53212;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53126 = cljs.core.seq(value);
var chunk__53127 = null;
var count__53128 = (0);
var i__53129 = (0);
while(true){
if((i__53129 < count__53128)){
var event = chunk__53127.cljs$core$IIndexed$_nth$arity$2(null,i__53129);
clear_event(event);


var G__53214 = seq__53126;
var G__53215 = chunk__53127;
var G__53216 = count__53128;
var G__53217 = (i__53129 + (1));
seq__53126 = G__53214;
chunk__53127 = G__53215;
count__53128 = G__53216;
i__53129 = G__53217;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53126);
if(temp__5735__auto__){
var seq__53126__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53126__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53126__$1);
var G__53218 = cljs.core.chunk_rest(seq__53126__$1);
var G__53219 = c__4556__auto__;
var G__53220 = cljs.core.count(c__4556__auto__);
var G__53221 = (0);
seq__53126 = G__53218;
chunk__53127 = G__53219;
count__53128 = G__53220;
i__53129 = G__53221;
continue;
} else {
var event = cljs.core.first(seq__53126__$1);
clear_event(event);


var G__53222 = cljs.core.next(seq__53126__$1);
var G__53223 = null;
var G__53224 = (0);
var G__53225 = (0);
seq__53126 = G__53222;
chunk__53127 = G__53223;
count__53128 = G__53224;
i__53129 = G__53225;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

goog.provide('kee_frame.fsm.alpha');
/**
 * Convenience function for declaring no-op events.
 */
kee_frame.fsm.alpha.reg_no_op = (function kee_frame$fsm$alpha$reg_no_op(id){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.interceptors.add_global_interceptors], null),cljs.core.constantly(null));
});
/**
 * Try to find a transition that matches some subset of the received event
 */
kee_frame.fsm.alpha.find_transition = (function kee_frame$fsm$alpha$find_transition(transitions,event){
if(cljs.core.seq(event)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(transitions,event,(function (){var G__50508 = transitions;
var G__50509 = cljs.core.butlast(event);
return (kee_frame.fsm.alpha.find_transition.cljs$core$IFn$_invoke$arity$2 ? kee_frame.fsm.alpha.find_transition.cljs$core$IFn$_invoke$arity$2(G__50508,G__50509) : kee_frame.fsm.alpha.find_transition.call(null,G__50508,G__50509));
})());
} else {
return null;
}
});
/**
 * Given a transition map and an event, returns the next fsm state if
 *   there is a valid transition, `nil` otherwise. Event transition
 *   `:when` clause is optionally applied.
 */
kee_frame.fsm.alpha.event_transition_BANG_ = (function kee_frame$fsm$alpha$event_transition_BANG_(transitions,event){
var temp__5735__auto__ = kee_frame.fsm.alpha.find_transition(transitions,event);
if(cljs.core.truth_(temp__5735__auto__)){
var transition = temp__5735__auto__;
var map__50510 = transition;
var map__50510__$1 = (((((!((map__50510 == null))))?(((((map__50510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50510):map__50510);
var next_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50510__$1,new cljs.core.Keyword(null,"to","to",192099007));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50510__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(cljs.core.truth_(dispatch)){
var seq__50512_50619 = cljs.core.seq(dispatch);
var chunk__50513_50620 = null;
var count__50514_50621 = (0);
var i__50515_50622 = (0);
while(true){
if((i__50515_50622 < count__50514_50621)){
var e_50623 = chunk__50513_50620.cljs$core$IIndexed$_nth$arity$2(null,i__50515_50622);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e_50623) : re_frame.core.dispatch.call(null,e_50623));


var G__50624 = seq__50512_50619;
var G__50625 = chunk__50513_50620;
var G__50626 = count__50514_50621;
var G__50627 = (i__50515_50622 + (1));
seq__50512_50619 = G__50624;
chunk__50513_50620 = G__50625;
count__50514_50621 = G__50626;
i__50515_50622 = G__50627;
continue;
} else {
var temp__5735__auto___50628__$1 = cljs.core.seq(seq__50512_50619);
if(temp__5735__auto___50628__$1){
var seq__50512_50629__$1 = temp__5735__auto___50628__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50512_50629__$1)){
var c__4556__auto___50631 = cljs.core.chunk_first(seq__50512_50629__$1);
var G__50632 = cljs.core.chunk_rest(seq__50512_50629__$1);
var G__50633 = c__4556__auto___50631;
var G__50634 = cljs.core.count(c__4556__auto___50631);
var G__50635 = (0);
seq__50512_50619 = G__50632;
chunk__50513_50620 = G__50633;
count__50514_50621 = G__50634;
i__50515_50622 = G__50635;
continue;
} else {
var e_50637 = cljs.core.first(seq__50512_50629__$1);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e_50637) : re_frame.core.dispatch.call(null,e_50637));


var G__50638 = cljs.core.next(seq__50512_50629__$1);
var G__50639 = null;
var G__50640 = (0);
var G__50641 = (0);
seq__50512_50619 = G__50638;
chunk__50513_50620 = G__50639;
count__50514_50621 = G__50640;
i__50515_50622 = G__50641;
continue;
}
} else {
}
}
break;
}
} else {
}

return next_state;
} else {
return null;
}
});
kee_frame.fsm.alpha.foreign_event_QMARK_ = (function kee_frame$fsm$alpha$foreign_event_QMARK_(fsm_id,p__50517){
var vec__50518 = p__50517;
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50518,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50518,(1),null);
var event_fsm_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50518,(2),null);
var and__4115__auto__ = (function (){var fexpr__50523 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.fsm.alpha","timeout","kee-frame.fsm.alpha/timeout",659648007),null,new cljs.core.Keyword("kee-frame.fsm.alpha","on-enter","kee-frame.fsm.alpha/on-enter",160434331),null], null), null);
return (fexpr__50523.cljs$core$IFn$_invoke$arity$1 ? fexpr__50523.cljs$core$IFn$_invoke$arity$1(event_id) : fexpr__50523.call(null,event_id));
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fsm_id,event_fsm_id);
} else {
return and__4115__auto__;
}
});
/**
 * Returns next state if there is a valid transition, `nil` otherwise.
 */
kee_frame.fsm.alpha.next_state = (function kee_frame$fsm$alpha$next_state(fsm,db,event){
var map__50524 = fsm;
var map__50524__$1 = (((((!((map__50524 == null))))?(((((map__50524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50524):map__50524);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50524__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50524__$1,new cljs.core.Keyword(null,"state-attr","state-attr",680371634),new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50524__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var transition_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50524__$1,new cljs.core.Keyword(null,"fsm","fsm",937922990));
var current_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,state_attr], null),start);
var transitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transition_map,current_state);
if(cljs.core.truth_(kee_frame.fsm.alpha.foreign_event_QMARK_(id,event))){
return null;
} else {
return kee_frame.fsm.alpha.event_transition_BANG_(transitions,event);
}
});
kee_frame.fsm.alpha.reg_no_op(new cljs.core.Keyword("kee-frame.fsm.alpha","timeout","kee-frame.fsm.alpha/timeout",659648007));
kee_frame.fsm.alpha.reg_no_op(new cljs.core.Keyword("kee-frame.fsm.alpha","on-enter","kee-frame.fsm.alpha/on-enter",160434331));
kee_frame.fsm.alpha.reg_no_op(new cljs.core.Keyword("kee-frame.fsm.alpha","fsm-started","kee-frame.fsm.alpha/fsm-started",-1155628622));
kee_frame.fsm.alpha.reg_no_op(new cljs.core.Keyword(null,"default-on-failure","default-on-failure",-129116151));
kee_frame.fsm.alpha.compile_timeouts = (function kee_frame$fsm$alpha$compile_timeouts(fsm){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50527){
var vec__50528 = p__50527;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50528,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50528,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50531,_){
var vec__50532 = p__50531;
var vec__50535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50532,(0),null);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50535,(0),null);
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50535,(1),null);
var timeout__$1 = (function (){var or__4126__auto__ = timeout;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),timeout__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,timeout__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fsm)], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50538,_){
var vec__50540 = p__50538;
var vec__50543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50540,(0),null);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50543,(0),null);
var fexpr__50546 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.fsm.alpha","timeout","kee-frame.fsm.alpha/timeout",659648007),null,new cljs.core.Keyword("kee-frame.fsm.alpha","on-enter","kee-frame.fsm.alpha/on-enter",160434331),null], null), null);
return (fexpr__50546.cljs$core$IFn$_invoke$arity$1 ? fexpr__50546.cljs$core$IFn$_invoke$arity$1(event_id) : fexpr__50546.call(null,event_id));
}),transitions))], null);
}),new cljs.core.Keyword(null,"fsm","fsm",937922990).cljs$core$IFn$_invoke$arity$1(fsm)));
});
kee_frame.fsm.alpha.clear_timeouts_BANG_ = (function kee_frame$fsm$alpha$clear_timeouts_BANG_(timeouts_STAR_){
var seq__50547_50646 = cljs.core.seq(cljs.core.deref(timeouts_STAR_));
var chunk__50548_50647 = null;
var count__50549_50648 = (0);
var i__50550_50649 = (0);
while(true){
if((i__50550_50649 < count__50549_50648)){
var t_50650 = chunk__50548_50647.cljs$core$IIndexed$_nth$arity$2(null,i__50550_50649);
kee_frame.interop.clear_timeout(t_50650);


var G__50651 = seq__50547_50646;
var G__50652 = chunk__50548_50647;
var G__50653 = count__50549_50648;
var G__50654 = (i__50550_50649 + (1));
seq__50547_50646 = G__50651;
chunk__50548_50647 = G__50652;
count__50549_50648 = G__50653;
i__50550_50649 = G__50654;
continue;
} else {
var temp__5735__auto___50655 = cljs.core.seq(seq__50547_50646);
if(temp__5735__auto___50655){
var seq__50547_50656__$1 = temp__5735__auto___50655;
if(cljs.core.chunked_seq_QMARK_(seq__50547_50656__$1)){
var c__4556__auto___50658 = cljs.core.chunk_first(seq__50547_50656__$1);
var G__50659 = cljs.core.chunk_rest(seq__50547_50656__$1);
var G__50660 = c__4556__auto___50658;
var G__50661 = cljs.core.count(c__4556__auto___50658);
var G__50662 = (0);
seq__50547_50646 = G__50659;
chunk__50548_50647 = G__50660;
count__50549_50648 = G__50661;
i__50550_50649 = G__50662;
continue;
} else {
var t_50664 = cljs.core.first(seq__50547_50656__$1);
kee_frame.interop.clear_timeout(t_50664);


var G__50665 = cljs.core.next(seq__50547_50656__$1);
var G__50666 = null;
var G__50667 = (0);
var G__50668 = (0);
seq__50547_50646 = G__50665;
chunk__50548_50647 = G__50666;
count__50549_50648 = G__50667;
i__50550_50649 = G__50668;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(timeouts_STAR_,cljs.core.PersistentVector.EMPTY);
});
kee_frame.fsm.alpha.dispatch_timeouts_BANG_ = (function kee_frame$fsm$alpha$dispatch_timeouts_BANG_(timeouts_STAR_,timeouts){
return cljs.core.reset_BANG_(timeouts_STAR_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50552){
var map__50553 = p__50552;
var map__50553__$1 = (((((!((map__50553 == null))))?(((((map__50553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50553):map__50553);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50553__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50553__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
return kee_frame.interop.set_timeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(dispatch) : re_frame.core.dispatch.call(null,dispatch));
}),ms);
}),timeouts));
});
kee_frame.fsm.alpha.state_changed_QMARK_ = (function kee_frame$fsm$alpha$state_changed_QMARK_(prev,next){
var or__4126__auto__ = cljs.core.not(prev);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return next;
}
});
/**
 * Given a parsed fsm, a db, and an event, advances the fsm. Else,
 *   no-op.
 */
kee_frame.fsm.alpha.advance = (function kee_frame$fsm$alpha$advance(fsm,timeouts_STAR_,state__GT_timeouts,db,event){
var map__50559 = fsm;
var map__50559__$1 = (((((!((map__50559 == null))))?(((((map__50559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50559):map__50559);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50559__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50559__$1,new cljs.core.Keyword(null,"state-attr","state-attr",680371634),new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50559__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50559__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var current_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,state_attr], null));
var next_state = kee_frame.fsm.alpha.next_state(fsm,db,event);
if(cljs.core.truth_(kee_frame.fsm.alpha.state_changed_QMARK_(current_state,next_state))){
kee_frame.fsm.alpha.clear_timeouts_BANG_(timeouts_STAR_);

kee_frame.fsm.alpha.dispatch_timeouts_BANG_(timeouts_STAR_,(function (){var G__50561 = (function (){var or__4126__auto__ = next_state;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return start;
}
})();
return (state__GT_timeouts.cljs$core$IFn$_invoke$arity$1 ? state__GT_timeouts.cljs$core$IFn$_invoke$arity$1(G__50561) : state__GT_timeouts.call(null,G__50561));
})());
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = stop;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_state,stop);
} else {
return and__4115__auto__;
}
})())){
var G__50562_50673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025),fsm], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50562_50673) : re_frame.core.dispatch.call(null,G__50562_50673));
} else {
}

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,state_attr], null),(function (){var or__4126__auto__ = next_state;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = current_state;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return start;
}
}
})());
});
var G__50563_50675 = new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294);
var G__50564_50676 = (function (p__50565){
var map__50566 = p__50565;
var map__50566__$1 = (((((!((map__50566 == null))))?(((((map__50566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50566):map__50566);
var fsm = map__50566__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50566__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeouts_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var state__GT_timeouts = kee_frame.fsm.alpha.compile_timeouts(fsm);
return kee_frame.interceptors.reg_global_interceptor(id,(function (){var G__50569 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(kee_frame.fsm.alpha.advance,fsm,timeouts_STAR_,state__GT_timeouts);
return (re_frame.core.enrich.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.enrich.cljs$core$IFn$_invoke$arity$1(G__50569) : re_frame.core.enrich.call(null,G__50569));
})());
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50563_50675,G__50564_50676) : re_frame.core.reg_fx.call(null,G__50563_50675,G__50564_50676));
var G__50574_50678 = new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025);
var G__50575_50679 = (function (p__50576){
var map__50577 = p__50576;
var map__50577__$1 = (((((!((map__50577 == null))))?(((((map__50577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50577):map__50577);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
return kee_frame.interceptors.clear_global_interceptor(id);
} else {
return null;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50574_50678,G__50575_50679) : re_frame.core.reg_fx.call(null,G__50574_50678,G__50575_50679));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294),(function (_,p__50579){
var vec__50580 = p__50579;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50580,(0),null);
var fsm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50580,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294),fsm,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","fsm-started","kee-frame.fsm.alpha/fsm-started",-1155628622)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025),(function (_,p__50583){
var vec__50584 = p__50583;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50584,(0),null);
var fsm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50584,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025),fsm], null);
}));
var G__50587_50682 = new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116);
var G__50588_50683 = (function (db,p__50589){
var vec__50590 = p__50589;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50590,(0),null);
var map__50593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50590,(1),null);
var map__50593__$1 = (((((!((map__50593 == null))))?(((((map__50593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50593):map__50593);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50593__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50593__$1,new cljs.core.Keyword(null,"state-attr","state-attr",680371634),new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50593__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,state_attr], null),start);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50587_50682,G__50588_50683) : re_frame.core.reg_sub.call(null,G__50587_50682,G__50588_50683));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.fsm.alpha","binding","kee-frame.fsm.alpha/binding",1593698854),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"fsm-symbol","fsm-symbol",-1648919706),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"fsm","fsm",937922990),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"fsm-symbol","fsm-symbol",-1648919706),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"fsm","fsm",937922990),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fsm-symbol","fsm-symbol",-1648919706),new cljs.core.Keyword(null,"fsm","fsm",937922990)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null))], null),null));
if((typeof kee_frame !== 'undefined') && (typeof kee_frame.fsm !== 'undefined') && (typeof kee_frame.fsm.alpha !== 'undefined') && (typeof kee_frame.fsm.alpha.step !== 'undefined')){
} else {
/**
 * Materialized view of the current fsm state. A `step` method must
 *   exist for each state defined in the fsm transition map. States are
 *   globally defined, and namespaced keywords are required. It is a good
 *   idea to define the fsm in the same namespace as the steps.
 */
kee_frame.fsm.alpha.step = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50600 = cljs.core.get_global_hierarchy;
return (fexpr__50600.cljs$core$IFn$_invoke$arity$0 ? fexpr__50600.cljs$core$IFn$_invoke$arity$0() : fexpr__50600.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kee-frame.fsm.alpha","step"),(function() { 
var G__50705__delegate = function (fsm,_){
return cljs.core.deref((function (){var G__50601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116),fsm], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50601) : re_frame.core.subscribe.call(null,G__50601));
})());
};
var G__50705 = function (fsm,var_args){
var _ = null;
if (arguments.length > 1) {
var G__50706__i = 0, G__50706__a = new Array(arguments.length -  1);
while (G__50706__i < G__50706__a.length) {G__50706__a[G__50706__i] = arguments[G__50706__i + 1]; ++G__50706__i;}
  _ = new cljs.core.IndexedSeq(G__50706__a,0,null);
} 
return G__50705__delegate.call(this,fsm,_);};
G__50705.cljs$lang$maxFixedArity = 1;
G__50705.cljs$lang$applyTo = (function (arglist__50707){
var fsm = cljs.core.first(arglist__50707);
var _ = cljs.core.rest(arglist__50707);
return G__50705__delegate(fsm,_);
});
G__50705.cljs$core$IFn$_invoke$arity$variadic = G__50705__delegate;
return G__50705;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
kee_frame.fsm.alpha.step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__50710__delegate = function (fsm,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Undefined step: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__50603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116),fsm], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50603) : re_frame.core.subscribe.call(null,G__50603));
})()))].join('')], null);
};
var G__50710 = function (fsm,var_args){
var _ = null;
if (arguments.length > 1) {
var G__50711__i = 0, G__50711__a = new Array(arguments.length -  1);
while (G__50711__i < G__50711__a.length) {G__50711__a[G__50711__i] = arguments[G__50711__i + 1]; ++G__50711__i;}
  _ = new cljs.core.IndexedSeq(G__50711__a,0,null);
} 
return G__50710__delegate.call(this,fsm,_);};
G__50710.cljs$lang$maxFixedArity = 1;
G__50710.cljs$lang$applyTo = (function (arglist__50712){
var fsm = cljs.core.first(arglist__50712);
var _ = cljs.core.rest(arglist__50712);
return G__50710__delegate(fsm,_);
});
G__50710.cljs$core$IFn$_invoke$arity$variadic = G__50710__delegate;
return G__50710;
})()
);
kee_frame.fsm.alpha.render_STAR_ = (function kee_frame$fsm$alpha$render_STAR_(fsm,args){
var with_let50604 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50604","with-let50604",-627024863));
var temp__5739__auto___50714 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50714 == null)){
} else {
var c__45762__auto___50715 = temp__5739__auto___50714;
if((with_let50604.generation === c__45762__auto___50715.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let50604.generation = c__45762__auto___50715.ratomGeneration);
}


var init50605 = (with_let50604.length === (0));
var _ = ((init50605)?(with_let50604[(0)] = (function (){var G__50611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294),fsm], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50611) : re_frame.core.dispatch.call(null,G__50611));
})()):(with_let50604[(0)]));
var res__45763__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply,kee_frame.fsm.alpha.step,fsm,args], null);
var destroy__45761__auto___50717 = (function (){
var G__50612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025),fsm], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50612) : re_frame.core.dispatch.call(null,G__50612));
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let50604.destroy == null)){
(with_let50604.destroy = destroy__45761__auto___50717);
} else {
}
} else {
destroy__45761__auto___50717();
}

return res__45763__auto__;
});
/**
 * Given an fsm function and arguments, renders a materialized view of
 *   the fsm state. A `step` method must exist for each state defined in
 *   the fsm transition map. The args passed to `render` must match the
 *   args expected by the fsm's `step` methods.
 */
kee_frame.fsm.alpha.render = (function kee_frame$fsm$alpha$render(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50718 = arguments.length;
var i__4737__auto___50719 = (0);
while(true){
if((i__4737__auto___50719 < len__4736__auto___50718)){
args__4742__auto__.push((arguments[i__4737__auto___50719]));

var G__50720 = (i__4737__auto___50719 + (1));
i__4737__auto___50719 = G__50720;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kee_frame.fsm.alpha.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kee_frame.fsm.alpha.render.cljs$core$IFn$_invoke$arity$variadic = (function (fsm_fn,args){
var fsm = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fsm_fn,args);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.fsm.alpha.render_STAR_,fsm,args], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fsm)], null));
}));

(kee_frame.fsm.alpha.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.fsm.alpha.render.cljs$lang$applyTo = (function (seq50615){
var G__50616 = cljs.core.first(seq50615);
var seq50615__$1 = cljs.core.next(seq50615);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50616,seq50615__$1);
}));


//# sourceMappingURL=kee_frame.fsm.alpha.js.map

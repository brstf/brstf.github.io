goog.provide('kee_frame.controller');
kee_frame.controller.process_params = (function kee_frame$controller$process_params(params,route){
if(cljs.core.vector_QMARK_(params)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,params);
} else {
if(cljs.core.ifn_QMARK_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(route) : params.call(null,route));
} else {
return null;
}
}
});
kee_frame.controller.validate_and_dispatch_BANG_ = (function kee_frame$controller$validate_and_dispatch_BANG_(dispatch){
if(cljs.core.truth_(dispatch)){
if(cljs.core.map_QMARK_(dispatch)){
var G__52186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294),dispatch], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__52186) : re_frame.core.dispatch.call(null,G__52186));
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch)){
} else {
expound.alpha.expound.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid dispatch value",cljs.spec.alpha.explain_data(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch));
}

return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(dispatch) : re_frame.core.dispatch.call(null,dispatch));
}
} else {
return null;
}
});
kee_frame.controller.debug_enabled_QMARK_ = (function kee_frame$controller$debug_enabled_QMARK_(){
var map__52187 = cljs.core.deref(kee_frame.state.debug_config);
var map__52187__$1 = (((((!((map__52187 == null))))?(((((map__52187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52187):map__52187);
var controllers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52187__$1,new cljs.core.Keyword(null,"controllers?","controllers?",-2009030071),true);
var and__4115__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return controllers_QMARK_;
} else {
return and__4115__auto__;
}
});
kee_frame.controller.start_BANG_ = (function kee_frame$controller$start_BANG_(id,ctx,start,params){
if(cljs.core.truth_(start)){
if(cljs.core.truth_(kee_frame.controller.debug_enabled_QMARK_())){
(re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"log","log",-1595516004),"Starting controller ",id," with params ",params) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"Starting controller ",id," with params ",params));
} else {
}

if(cljs.core.vector_QMARK_(start)){
var G__52189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(start,params);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__52189) : re_frame.core.dispatch.call(null,G__52189));
} else {
if(cljs.core.ifn_QMARK_(start)){
return kee_frame.controller.validate_and_dispatch_BANG_((start.cljs$core$IFn$_invoke$arity$2 ? start.cljs$core$IFn$_invoke$arity$2(ctx,params) : start.call(null,ctx,params)));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.stop_BANG_ = (function kee_frame$controller$stop_BANG_(id,ctx,stop){
if(cljs.core.truth_(stop)){
if(cljs.core.truth_(kee_frame.controller.debug_enabled_QMARK_())){
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log","log",-1595516004),"Stopping controller ",id) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"Stopping controller ",id));
} else {
}

if(cljs.core.vector_QMARK_(stop)){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(stop) : re_frame.core.dispatch.call(null,stop));
} else {
if(cljs.core.ifn_QMARK_(stop)){
return kee_frame.controller.validate_and_dispatch_BANG_((stop.cljs$core$IFn$_invoke$arity$1 ? stop.cljs$core$IFn$_invoke$arity$1(ctx) : stop.call(null,ctx)));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.process_controller = (function kee_frame$controller$process_controller(id,p__52191,ctx,route){
var map__52192 = p__52191;
var map__52192__$1 = (((((!((map__52192 == null))))?(((((map__52192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52192):map__52192);
var last_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"last-params","last-params",1293824707));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"params","params",710516235));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current_params = kee_frame.controller.process_params(params,route);
var last_params_52217__$1 = last_params;
var current_params_52218__$1 = current_params;
var ocr_52194_52219 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_params_52217__$1,current_params_52218__$1);
try{if((ocr_52194_52219 === true)){
} else {
throw cljs.core.match.backtrack;

}
}catch (e52204){if((e52204 instanceof Error)){
var e__49598__auto___52220 = e52204;
if((e__49598__auto___52220 === cljs.core.match.backtrack)){
try{if((ocr_52194_52219 === false)){
try{if((last_params_52217__$1 === null)){
kee_frame.controller.start_BANG_(id,ctx,start,current_params_52218__$1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52206){if((e52206 instanceof Error)){
var e__49598__auto___52221__$1 = e52206;
if((e__49598__auto___52221__$1 === cljs.core.match.backtrack)){
try{if((current_params_52218__$1 === null)){
kee_frame.controller.stop_BANG_(id,ctx,stop);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52208){if((e52208 instanceof Error)){
var e__49598__auto___52222__$2 = e52208;
if((e__49598__auto___52222__$2 === cljs.core.match.backtrack)){
kee_frame.controller.stop_BANG_(id,ctx,stop);

kee_frame.controller.start_BANG_(id,ctx,start,current_params_52218__$1);
} else {
throw e__49598__auto___52222__$2;
}
} else {
throw e52208;

}
}} else {
throw e__49598__auto___52221__$1;
}
} else {
throw e52206;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52205){if((e52205 instanceof Error)){
var e__49598__auto___52223__$1 = e52205;
if((e__49598__auto___52223__$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_params_52217__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_params_52218__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_52194_52219)].join('')));
} else {
throw e__49598__auto___52223__$1;
}
} else {
throw e52205;

}
}} else {
throw e__49598__auto___52220;
}
} else {
throw e52204;

}
}
return current_params;
});
kee_frame.controller.apply_route = (function kee_frame$controller$apply_route(controllers,ctx,route){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52209){
var vec__52210 = p__52209;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52210,(0),null);
var controller = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52210,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword(null,"last-params","last-params",1293824707),kee_frame.controller.process_controller(id,controller,ctx,route))], null);
}),controllers));
});

//# sourceMappingURL=kee_frame.controller.js.map

goog.provide('bidi.ring');

/**
 * @interface
 */
bidi.ring.Ring = function(){};

var bidi$ring$Ring$request$dyn_49319 = (function (_,req,match_context){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (bidi.ring.request[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,req,match_context) : m__4429__auto__.call(null,_,req,match_context));
} else {
var m__4426__auto__ = (bidi.ring.request["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,req,match_context) : m__4426__auto__.call(null,_,req,match_context));
} else {
throw cljs.core.missing_protocol("Ring.request",_);
}
}
});
/**
 * Handle a Ring request, but optionally utilize any context that was
 *  collected in the process of matching the handler.
 */
bidi.ring.request = (function bidi$ring$request(_,req,match_context){
if((((!((_ == null)))) && ((!((_.bidi$ring$Ring$request$arity$3 == null)))))){
return _.bidi$ring$Ring$request$arity$3(_,req,match_context);
} else {
return bidi$ring$Ring$request$dyn_49319(_,req,match_context);
}
});

goog.object.set(bidi.ring.Ring,"function",true);

goog.object.set(bidi.ring.request,"function",(function (f,req,_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(req) : f.call(null,req));
}));

(cljs.core.Var.prototype.bidi$ring$Ring$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.bidi$ring$Ring$request$arity$3 = (function (v,req,mc){
var v__$1 = this;
return bidi.ring.request(cljs.core.deref(v__$1),req,mc);
}));
/**
 * Create a Ring handler from the route definition data
 *   structure. Matches a handler from the uri in the request, and invokes
 *   it with the request as a parameter.
 */
bidi.ring.make_handler = (function bidi$ring$make_handler(var_args){
var G__49313 = arguments.length;
switch (G__49313) {
case 2:
return bidi.ring.make_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.ring.make_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bidi.ring.make_handler.cljs$core$IFn$_invoke$arity$2 = (function (route,handler_fn){
if(cljs.core.truth_(route)){
} else {
throw (new Error(["Assert failed: ","Cannot create a Ring handler with a nil Route(s) parameter","\n","route"].join('')));
}

return (function (p__49314){
var map__49315 = p__49314;
var map__49315__$1 = (((((!((map__49315 == null))))?(((((map__49315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49315):map__49315);
var req = map__49315__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49315__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var path_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49315__$1,new cljs.core.Keyword(null,"path-info","path-info",-1932254250));
var path = (function (){var or__4126__auto__ = path_info;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uri;
}
})();
var map__49317 = bidi.bidi.match_route_STAR_(route,path,req);
var map__49317__$1 = (((((!((map__49317 == null))))?(((((map__49317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49317):map__49317);
var match_context = map__49317__$1;
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49317__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49317__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
if(cljs.core.truth_(handler)){
return bidi.ring.request((handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(handler) : handler_fn.call(null,handler)),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,route_params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.merge,route_params),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,match_context,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.keys(req)));
} else {
return null;
}
});
}));

(bidi.ring.make_handler.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.ring.make_handler.cljs$core$IFn$_invoke$arity$2(route,cljs.core.identity);
}));

(bidi.ring.make_handler.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=bidi.ring.js.map

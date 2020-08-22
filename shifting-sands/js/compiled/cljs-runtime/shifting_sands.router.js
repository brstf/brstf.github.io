goog.provide('shifting_sands.router');
shifting_sands.router.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 4, ["shifting-sands",new cljs.core.Keyword(null,"home","home",-74557309),"shifting-sands/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"home","home",-74557309),"new-character",new cljs.core.Keyword(null,"new-character","new-character",1383210044),true,new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null),"shifting-sands-new-character",new cljs.core.Keyword(null,"new-character","new-character",1383210044),true,new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null)], null);
shifting_sands.router.history = (function (){var dispatch = (function (p1__73304_SHARP_){
var G__73306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","set-active-page","shifting-sands.events/set-active-page",1700852759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(p1__73304_SHARP_)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__73306) : re_frame.core.dispatch.call(null,G__73306));
});
var match = (function (p1__73305_SHARP_){
return bidi.bidi.match_route(shifting_sands.router.routes,p1__73305_SHARP_);
});
return pushy.core.pushy(dispatch,match);
})();
shifting_sands.router.start_BANG_ = (function shifting_sands$router$start_BANG_(){
return shifting_sands.router.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
shifting_sands.router.url_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,shifting_sands.router.routes);
shifting_sands.router.set_token_BANG_ = (function shifting_sands$router$set_token_BANG_(token){
return shifting_sands.router.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,token);
});

//# sourceMappingURL=shifting_sands.router.js.map

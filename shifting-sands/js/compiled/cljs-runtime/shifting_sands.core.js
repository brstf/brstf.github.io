goog.provide('shifting_sands.core');
shifting_sands.core.dev_setup = (function shifting_sands$core$dev_setup(){
if(shifting_sands.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
shifting_sands.core.mount_root = (function shifting_sands$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.main_panel], null),root_el);
});
shifting_sands.core.init = (function shifting_sands$core$init(){
shifting_sands.router.start_BANG_();

var G__74830_74831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","initialize-db","shifting-sands.events/initialize-db",954565019)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__74830_74831) : re_frame.core.dispatch_sync.call(null,G__74830_74831));

shifting_sands.core.dev_setup();

return shifting_sands.core.mount_root();
});

//# sourceMappingURL=shifting_sands.core.js.map

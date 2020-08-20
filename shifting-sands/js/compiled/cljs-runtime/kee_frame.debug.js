goog.provide('kee_frame.debug');
kee_frame.debug.debug_enabled_QMARK_ = (function kee_frame$debug$debug_enabled_QMARK_(p__52075){
var vec__52076 = p__52075;
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52076,(0),null);
var map__52079 = cljs.core.deref(kee_frame.state.debug_config);
var map__52079__$1 = (((((!((map__52079 == null))))?(((((map__52079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52079):map__52079);
var blacklist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079__$1,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
var events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52079__$1,new cljs.core.Keyword(null,"events?","events?",-780512682),true);
var and__4115__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = events_QMARK_;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not((function (){var and__4115__auto____$2 = blacklist;
if(cljs.core.truth_(and__4115__auto____$2)){
return (blacklist.cljs$core$IFn$_invoke$arity$1 ? blacklist.cljs$core$IFn$_invoke$arity$1(event_key) : blacklist.call(null,event_key));
} else {
return and__4115__auto____$2;
}
})());
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
kee_frame.debug.debug_interceptor = (function kee_frame$debug$debug_interceptor(debug_QMARK_){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function kee_frame$debug$debug_interceptor_$_debug_before(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(kee_frame.debug.debug_enabled_QMARK_(event))){
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log","log",-1595516004),"Handling event ",event) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"Handling event ",event));
} else {
}

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function kee_frame$debug$debug_interceptor_$_debug_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
var effects = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_((function (){var and__4115__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(effects);
} else {
return and__4115__auto__;
}
})())){
var G__52088_52113 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__52089_52114 = "Side effects caused by event ";
var G__52090_52115 = cljs.core.first(event);
var G__52091_52116 = ": ";
var G__52092_52117 = effects;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__52088_52113,G__52089_52114,G__52090_52115,G__52091_52116,G__52092_52117) : re_frame.core.console.call(null,G__52088_52113,G__52089_52114,G__52090_52115,G__52091_52116,G__52092_52117));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
} else {
return and__4115__auto__;
}
})())){
var vec__52096_52118 = clojure.data.diff(orig_db,new_db);
var only_before_52119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52096_52118,(0),null);
var only_after_52120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52096_52118,(1),null);
var db_changed_QMARK__52121 = (((!((only_before_52119 == null)))) || ((!((only_after_52120 == null)))));
if(db_changed_QMARK__52121){
var G__52099_52131 = new cljs.core.Keyword(null,"group","group",582596132);
var G__52100_52132 = "db clojure.data/diff for:";
var G__52101_52133 = cljs.core.first(event);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__52099_52131,G__52100_52132,G__52101_52133) : re_frame.core.console.call(null,G__52099_52131,G__52100_52132,G__52101_52133));

(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log","log",-1595516004),"only before:",only_before_52119) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only before:",only_before_52119));

(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log","log",-1595516004),"only after :",only_after_52120) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only after :",only_after_52120));

(re_frame.core.console.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382)) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382)));
} else {
}
} else {
}

return context;
})], 0));
});

//# sourceMappingURL=kee_frame.debug.js.map

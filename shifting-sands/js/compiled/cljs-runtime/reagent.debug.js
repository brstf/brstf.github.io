goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51242__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51245__i = 0, G__51245__a = new Array(arguments.length -  0);
while (G__51245__i < G__51245__a.length) {G__51245__a[G__51245__i] = arguments[G__51245__i + 0]; ++G__51245__i;}
  args = new cljs.core.IndexedSeq(G__51245__a,0,null);
} 
return G__51242__delegate.call(this,args);};
G__51242.cljs$lang$maxFixedArity = 0;
G__51242.cljs$lang$applyTo = (function (arglist__51246){
var args = cljs.core.seq(arglist__51246);
return G__51242__delegate(args);
});
G__51242.cljs$core$IFn$_invoke$arity$variadic = G__51242__delegate;
return G__51242;
})()
);

(o.error = (function() { 
var G__51247__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51254__i = 0, G__51254__a = new Array(arguments.length -  0);
while (G__51254__i < G__51254__a.length) {G__51254__a[G__51254__i] = arguments[G__51254__i + 0]; ++G__51254__i;}
  args = new cljs.core.IndexedSeq(G__51254__a,0,null);
} 
return G__51247__delegate.call(this,args);};
G__51247.cljs$lang$maxFixedArity = 0;
G__51247.cljs$lang$applyTo = (function (arglist__51255){
var args = cljs.core.seq(arglist__51255);
return G__51247__delegate(args);
});
G__51247.cljs$core$IFn$_invoke$arity$variadic = G__51247__delegate;
return G__51247;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

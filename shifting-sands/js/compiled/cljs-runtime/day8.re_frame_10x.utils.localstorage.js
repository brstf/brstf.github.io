goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__53391 = arguments.length;
switch (G__53391) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__53393 = cljs.core.seq(Object.keys(localStorage));
var chunk__53394 = null;
var count__53395 = (0);
var i__53396 = (0);
while(true){
if((i__53396 < count__53395)){
var k = chunk__53394.cljs$core$IIndexed$_nth$arity$2(null,i__53396);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53454 = seq__53393;
var G__53455 = chunk__53394;
var G__53456 = count__53395;
var G__53457 = (i__53396 + (1));
seq__53393 = G__53454;
chunk__53394 = G__53455;
count__53395 = G__53456;
i__53396 = G__53457;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53393);
if(temp__5735__auto__){
var seq__53393__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53393__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53393__$1);
var G__53458 = cljs.core.chunk_rest(seq__53393__$1);
var G__53459 = c__4556__auto__;
var G__53460 = cljs.core.count(c__4556__auto__);
var G__53461 = (0);
seq__53393 = G__53458;
chunk__53394 = G__53459;
count__53395 = G__53460;
i__53396 = G__53461;
continue;
} else {
var k = cljs.core.first(seq__53393__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53462 = cljs.core.next(seq__53393__$1);
var G__53463 = null;
var G__53464 = (0);
var G__53465 = (0);
seq__53393 = G__53462;
chunk__53394 = G__53463;
count__53395 = G__53464;
i__53396 = G__53465;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map

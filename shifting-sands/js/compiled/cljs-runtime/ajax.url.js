goog.provide('ajax.url');
ajax.url.key_encode = (function ajax$url$key_encode(key){
if((key instanceof cljs.core.Keyword)){
return cljs.core.name(key);
} else {
return key;
}
});
ajax.url.value_encode = encodeURIComponent;
ajax.url.key_value_pair_to_str = (function ajax$url$key_value_pair_to_str(p__48197){
var vec__48198 = p__48197;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48198,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48198,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.key_encode(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.value_encode(v))].join('');
});
ajax.url.vec_key_transform_fn = (function ajax$url$vec_key_transform_fn(var_args){
var G__48202 = arguments.length;
switch (G__48202) {
case 3:
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$3 = (function (vec_key_encode,k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vec_key_encode.cljs$core$IFn$_invoke$arity$1 ? vec_key_encode.cljs$core$IFn$_invoke$arity$1(k) : vec_key_encode.call(null,k)),v], null);
}));

(ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$2 = (function (vec_key_encode,k){
return (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vec_key_encode.cljs$core$IFn$_invoke$arity$1 ? vec_key_encode.cljs$core$IFn$_invoke$arity$1(k) : vec_key_encode.call(null,k)),v], null);
});
}));

(ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$1 = (function (vec_key_encode){
return (function (k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vec_key_encode.cljs$core$IFn$_invoke$arity$1 ? vec_key_encode.cljs$core$IFn$_invoke$arity$1(k) : vec_key_encode.call(null,k)),v], null);
});
}));

(ajax.url.vec_key_transform_fn.cljs$lang$maxFixedArity = 3);

ajax.url.to_vec_key_transform = (function ajax$url$to_vec_key_transform(vec_strategy){
var vec_key_encode = (function (){var G__48203 = (function (){var or__4126__auto__ = vec_strategy;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"java","java",1958249105);
}
})();
var G__48203__$1 = (((G__48203 instanceof cljs.core.Keyword))?G__48203.fqn:null);
switch (G__48203__$1) {
case "java":
return (function (k){
return null;
});

break;
case "rails":
return (function (k){
return "";
});

break;
case "indexed":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48203__$1)].join('')));

}
})();
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$1(vec_key_encode);
});
ajax.url.param_to_key_value_pairs = (function ajax$url$param_to_key_value_pairs(var_args){
var G__48205 = arguments.length;
switch (G__48205) {
case 3:
return ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3 = (function (vec_key_transform,prefix,p__48206){
var vec__48207 = p__48206;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48207,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48207,(1),null);

var k1 = ajax.url.key_encode(key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2(vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name(value)], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(vec_key_transform,cljs.core.seq(value))], 0));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
}));

(ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2 = (function (vec_key_transform,prefix){
return (function (p__48210){
var vec__48211 = p__48210;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48211,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48211,(1),null);

var k1 = ajax.url.key_encode(key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2(vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name(value)], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(vec_key_transform,cljs.core.seq(value))], 0));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
});
}));

(ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$1 = (function (vec_key_transform){
return (function (prefix,p__48214){
var vec__48215 = p__48214;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48215,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48215,(1),null);

var k1 = ajax.url.key_encode(key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2(vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name(value)], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(vec_key_transform,cljs.core.seq(value))], 0));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
});
}));

(ajax.url.param_to_key_value_pairs.cljs$lang$maxFixedArity = 3);

ajax.url.params_to_str = (function ajax$url$params_to_str(var_args){
var G__48219 = arguments.length;
switch (G__48219) {
case 2:
return ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2 = (function (vec_strategy,params){

return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.url.key_value_pair_to_str,ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3(ajax.url.to_vec_key_transform(vec_strategy),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params], null))));
}));

(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$1 = (function (vec_strategy){
return (function (params){

return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.url.key_value_pair_to_str,ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3(ajax.url.to_vec_key_transform(vec_strategy),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params], null))));
});
}));

(ajax.url.params_to_str.cljs$lang$maxFixedArity = 2);

/**
 * The request format for simple POST and GET.
 */
ajax.url.url_request_format = (function ajax$url$url_request_format(var_args){
var G__48221 = arguments.length;
switch (G__48221) {
case 0:
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__48222){
var map__48223 = p__48222;
var map__48223__$1 = (((((!((map__48223 == null))))?(((((map__48223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48223):map__48223);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48223__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.util.to_utf8_writer(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$1(vec_strategy)),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded; charset=utf-8"], null);
}));

(ajax.url.url_request_format.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=ajax.url.js.map

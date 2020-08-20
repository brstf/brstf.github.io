goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61034 = arguments.length;
var i__4737__auto___61035 = (0);
while(true){
if((i__4737__auto___61035 < len__4736__auto___61034)){
args__4742__auto__.push((arguments[i__4737__auto___61035]));

var G__61036 = (i__4737__auto___61035 + (1));
i__4737__auto___61035 = G__61036;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq60601){
var G__60602 = cljs.core.first(seq60601);
var seq60601__$1 = cljs.core.next(seq60601);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60602,seq60601__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__60604 = cljs.core.seq(sources);
var chunk__60605 = null;
var count__60606 = (0);
var i__60607 = (0);
while(true){
if((i__60607 < count__60606)){
var map__60617 = chunk__60605.cljs$core$IIndexed$_nth$arity$2(null,i__60607);
var map__60617__$1 = (((((!((map__60617 == null))))?(((((map__60617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60617):map__60617);
var src = map__60617__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60617__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60617__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60617__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60617__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60623){var e_61040 = e60623;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61040);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61040.message)].join('')));
}

var G__61041 = seq__60604;
var G__61042 = chunk__60605;
var G__61043 = count__60606;
var G__61044 = (i__60607 + (1));
seq__60604 = G__61041;
chunk__60605 = G__61042;
count__60606 = G__61043;
i__60607 = G__61044;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60604);
if(temp__5735__auto__){
var seq__60604__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60604__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60604__$1);
var G__61045 = cljs.core.chunk_rest(seq__60604__$1);
var G__61046 = c__4556__auto__;
var G__61047 = cljs.core.count(c__4556__auto__);
var G__61048 = (0);
seq__60604 = G__61045;
chunk__60605 = G__61046;
count__60606 = G__61047;
i__60607 = G__61048;
continue;
} else {
var map__60624 = cljs.core.first(seq__60604__$1);
var map__60624__$1 = (((((!((map__60624 == null))))?(((((map__60624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60624):map__60624);
var src = map__60624__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60629){var e_61049 = e60629;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61049);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61049.message)].join('')));
}

var G__61050 = cljs.core.next(seq__60604__$1);
var G__61051 = null;
var G__61052 = (0);
var G__61053 = (0);
seq__60604 = G__61050;
chunk__60605 = G__61051;
count__60606 = G__61052;
i__60607 = G__61053;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__60652 = cljs.core.seq(js_requires);
var chunk__60653 = null;
var count__60654 = (0);
var i__60655 = (0);
while(true){
if((i__60655 < count__60654)){
var js_ns = chunk__60653.cljs$core$IIndexed$_nth$arity$2(null,i__60655);
var require_str_61054 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61054);


var G__61055 = seq__60652;
var G__61056 = chunk__60653;
var G__61057 = count__60654;
var G__61058 = (i__60655 + (1));
seq__60652 = G__61055;
chunk__60653 = G__61056;
count__60654 = G__61057;
i__60655 = G__61058;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60652);
if(temp__5735__auto__){
var seq__60652__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60652__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60652__$1);
var G__61059 = cljs.core.chunk_rest(seq__60652__$1);
var G__61060 = c__4556__auto__;
var G__61061 = cljs.core.count(c__4556__auto__);
var G__61062 = (0);
seq__60652 = G__61059;
chunk__60653 = G__61060;
count__60654 = G__61061;
i__60655 = G__61062;
continue;
} else {
var js_ns = cljs.core.first(seq__60652__$1);
var require_str_61065 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61065);


var G__61066 = cljs.core.next(seq__60652__$1);
var G__61067 = null;
var G__61068 = (0);
var G__61069 = (0);
seq__60652 = G__61066;
chunk__60653 = G__61067;
count__60654 = G__61068;
i__60655 = G__61069;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__60678){
var map__60679 = p__60678;
var map__60679__$1 = (((((!((map__60679 == null))))?(((((map__60679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60679):map__60679);
var msg = map__60679__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60679__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60679__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60682(s__60683){
return (new cljs.core.LazySeq(null,(function (){
var s__60683__$1 = s__60683;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60683__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__60692 = cljs.core.first(xs__6292__auto__);
var map__60692__$1 = (((((!((map__60692 == null))))?(((((map__60692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60692):map__60692);
var src = map__60692__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60692__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60692__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__60683__$1,map__60692,map__60692__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60679,map__60679__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60682_$_iter__60684(s__60685){
return (new cljs.core.LazySeq(null,((function (s__60683__$1,map__60692,map__60692__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60679,map__60679__$1,msg,info,reload_info){
return (function (){
var s__60685__$1 = s__60685;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60685__$1);
if(temp__5735__auto____$1){
var s__60685__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60685__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60685__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60687 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60686 = (0);
while(true){
if((i__60686 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__60686);
cljs.core.chunk_append(b__60687,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61070 = (i__60686 + (1));
i__60686 = G__61070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60687),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60682_$_iter__60684(cljs.core.chunk_rest(s__60685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60687),null);
}
} else {
var warning = cljs.core.first(s__60685__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60682_$_iter__60684(cljs.core.rest(s__60685__$2)));
}
} else {
return null;
}
break;
}
});})(s__60683__$1,map__60692,map__60692__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60679,map__60679__$1,msg,info,reload_info))
,null,null));
});})(s__60683__$1,map__60692,map__60692__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60679,map__60679__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60682(cljs.core.rest(s__60683__$1)));
} else {
var G__61071 = cljs.core.rest(s__60683__$1);
s__60683__$1 = G__61071;
continue;
}
} else {
var G__61072 = cljs.core.rest(s__60683__$1);
s__60683__$1 = G__61072;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__60699_61073 = cljs.core.seq(warnings);
var chunk__60700_61074 = null;
var count__60701_61075 = (0);
var i__60702_61076 = (0);
while(true){
if((i__60702_61076 < count__60701_61075)){
var map__60715_61077 = chunk__60700_61074.cljs$core$IIndexed$_nth$arity$2(null,i__60702_61076);
var map__60715_61078__$1 = (((((!((map__60715_61077 == null))))?(((((map__60715_61077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60715_61077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60715_61077):map__60715_61077);
var w_61079 = map__60715_61078__$1;
var msg_61080__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715_61078__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715_61078__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715_61078__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715_61078__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61083)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61081),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61082),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61080__$1)].join(''));


var G__61084 = seq__60699_61073;
var G__61085 = chunk__60700_61074;
var G__61086 = count__60701_61075;
var G__61087 = (i__60702_61076 + (1));
seq__60699_61073 = G__61084;
chunk__60700_61074 = G__61085;
count__60701_61075 = G__61086;
i__60702_61076 = G__61087;
continue;
} else {
var temp__5735__auto___61088 = cljs.core.seq(seq__60699_61073);
if(temp__5735__auto___61088){
var seq__60699_61089__$1 = temp__5735__auto___61088;
if(cljs.core.chunked_seq_QMARK_(seq__60699_61089__$1)){
var c__4556__auto___61090 = cljs.core.chunk_first(seq__60699_61089__$1);
var G__61091 = cljs.core.chunk_rest(seq__60699_61089__$1);
var G__61092 = c__4556__auto___61090;
var G__61093 = cljs.core.count(c__4556__auto___61090);
var G__61094 = (0);
seq__60699_61073 = G__61091;
chunk__60700_61074 = G__61092;
count__60701_61075 = G__61093;
i__60702_61076 = G__61094;
continue;
} else {
var map__60726_61095 = cljs.core.first(seq__60699_61089__$1);
var map__60726_61096__$1 = (((((!((map__60726_61095 == null))))?(((((map__60726_61095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60726_61095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60726_61095):map__60726_61095);
var w_61097 = map__60726_61096__$1;
var msg_61098__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726_61096__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726_61096__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726_61096__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726_61096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61101)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61099),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61100),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61098__$1)].join(''));


var G__61102 = cljs.core.next(seq__60699_61089__$1);
var G__61103 = null;
var G__61104 = (0);
var G__61105 = (0);
seq__60699_61073 = G__61102;
chunk__60700_61074 = G__61103;
count__60701_61075 = G__61104;
i__60702_61076 = G__61105;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__60677_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__60677_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__60756){
var map__60757 = p__60756;
var map__60757__$1 = (((((!((map__60757 == null))))?(((((map__60757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60757):map__60757);
var msg = map__60757__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__60761 = cljs.core.seq(updates);
var chunk__60763 = null;
var count__60764 = (0);
var i__60765 = (0);
while(true){
if((i__60765 < count__60764)){
var path = chunk__60763.cljs$core$IIndexed$_nth$arity$2(null,i__60765);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60883_61110 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60886_61111 = null;
var count__60887_61112 = (0);
var i__60888_61113 = (0);
while(true){
if((i__60888_61113 < count__60887_61112)){
var node_61114 = chunk__60886_61111.cljs$core$IIndexed$_nth$arity$2(null,i__60888_61113);
var path_match_61115 = shadow.cljs.devtools.client.browser.match_paths(node_61114.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61115)){
var new_link_61116 = (function (){var G__60924 = node_61114.cloneNode(true);
G__60924.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61115),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60924;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61115], 0));

goog.dom.insertSiblingAfter(new_link_61116,node_61114);

goog.dom.removeNode(node_61114);


var G__61117 = seq__60883_61110;
var G__61118 = chunk__60886_61111;
var G__61119 = count__60887_61112;
var G__61120 = (i__60888_61113 + (1));
seq__60883_61110 = G__61117;
chunk__60886_61111 = G__61118;
count__60887_61112 = G__61119;
i__60888_61113 = G__61120;
continue;
} else {
var G__61121 = seq__60883_61110;
var G__61122 = chunk__60886_61111;
var G__61123 = count__60887_61112;
var G__61124 = (i__60888_61113 + (1));
seq__60883_61110 = G__61121;
chunk__60886_61111 = G__61122;
count__60887_61112 = G__61123;
i__60888_61113 = G__61124;
continue;
}
} else {
var temp__5735__auto___61125 = cljs.core.seq(seq__60883_61110);
if(temp__5735__auto___61125){
var seq__60883_61126__$1 = temp__5735__auto___61125;
if(cljs.core.chunked_seq_QMARK_(seq__60883_61126__$1)){
var c__4556__auto___61127 = cljs.core.chunk_first(seq__60883_61126__$1);
var G__61128 = cljs.core.chunk_rest(seq__60883_61126__$1);
var G__61129 = c__4556__auto___61127;
var G__61130 = cljs.core.count(c__4556__auto___61127);
var G__61131 = (0);
seq__60883_61110 = G__61128;
chunk__60886_61111 = G__61129;
count__60887_61112 = G__61130;
i__60888_61113 = G__61131;
continue;
} else {
var node_61132 = cljs.core.first(seq__60883_61126__$1);
var path_match_61133 = shadow.cljs.devtools.client.browser.match_paths(node_61132.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61133)){
var new_link_61134 = (function (){var G__60941 = node_61132.cloneNode(true);
G__60941.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61133),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60941;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61133], 0));

goog.dom.insertSiblingAfter(new_link_61134,node_61132);

goog.dom.removeNode(node_61132);


var G__61139 = cljs.core.next(seq__60883_61126__$1);
var G__61140 = null;
var G__61141 = (0);
var G__61142 = (0);
seq__60883_61110 = G__61139;
chunk__60886_61111 = G__61140;
count__60887_61112 = G__61141;
i__60888_61113 = G__61142;
continue;
} else {
var G__61143 = cljs.core.next(seq__60883_61126__$1);
var G__61144 = null;
var G__61145 = (0);
var G__61146 = (0);
seq__60883_61110 = G__61143;
chunk__60886_61111 = G__61144;
count__60887_61112 = G__61145;
i__60888_61113 = G__61146;
continue;
}
}
} else {
}
}
break;
}


var G__61147 = seq__60761;
var G__61148 = chunk__60763;
var G__61149 = count__60764;
var G__61150 = (i__60765 + (1));
seq__60761 = G__61147;
chunk__60763 = G__61148;
count__60764 = G__61149;
i__60765 = G__61150;
continue;
} else {
var G__61151 = seq__60761;
var G__61152 = chunk__60763;
var G__61153 = count__60764;
var G__61154 = (i__60765 + (1));
seq__60761 = G__61151;
chunk__60763 = G__61152;
count__60764 = G__61153;
i__60765 = G__61154;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60761);
if(temp__5735__auto__){
var seq__60761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60761__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60761__$1);
var G__61155 = cljs.core.chunk_rest(seq__60761__$1);
var G__61156 = c__4556__auto__;
var G__61157 = cljs.core.count(c__4556__auto__);
var G__61158 = (0);
seq__60761 = G__61155;
chunk__60763 = G__61156;
count__60764 = G__61157;
i__60765 = G__61158;
continue;
} else {
var path = cljs.core.first(seq__60761__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60944_61160 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60947_61161 = null;
var count__60948_61162 = (0);
var i__60949_61163 = (0);
while(true){
if((i__60949_61163 < count__60948_61162)){
var node_61166 = chunk__60947_61161.cljs$core$IIndexed$_nth$arity$2(null,i__60949_61163);
var path_match_61167 = shadow.cljs.devtools.client.browser.match_paths(node_61166.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61167)){
var new_link_61168 = (function (){var G__60958 = node_61166.cloneNode(true);
G__60958.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61167),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60958;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61167], 0));

goog.dom.insertSiblingAfter(new_link_61168,node_61166);

goog.dom.removeNode(node_61166);


var G__61169 = seq__60944_61160;
var G__61170 = chunk__60947_61161;
var G__61171 = count__60948_61162;
var G__61172 = (i__60949_61163 + (1));
seq__60944_61160 = G__61169;
chunk__60947_61161 = G__61170;
count__60948_61162 = G__61171;
i__60949_61163 = G__61172;
continue;
} else {
var G__61173 = seq__60944_61160;
var G__61174 = chunk__60947_61161;
var G__61175 = count__60948_61162;
var G__61176 = (i__60949_61163 + (1));
seq__60944_61160 = G__61173;
chunk__60947_61161 = G__61174;
count__60948_61162 = G__61175;
i__60949_61163 = G__61176;
continue;
}
} else {
var temp__5735__auto___61178__$1 = cljs.core.seq(seq__60944_61160);
if(temp__5735__auto___61178__$1){
var seq__60944_61180__$1 = temp__5735__auto___61178__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60944_61180__$1)){
var c__4556__auto___61182 = cljs.core.chunk_first(seq__60944_61180__$1);
var G__61183 = cljs.core.chunk_rest(seq__60944_61180__$1);
var G__61184 = c__4556__auto___61182;
var G__61185 = cljs.core.count(c__4556__auto___61182);
var G__61186 = (0);
seq__60944_61160 = G__61183;
chunk__60947_61161 = G__61184;
count__60948_61162 = G__61185;
i__60949_61163 = G__61186;
continue;
} else {
var node_61187 = cljs.core.first(seq__60944_61180__$1);
var path_match_61188 = shadow.cljs.devtools.client.browser.match_paths(node_61187.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61188)){
var new_link_61189 = (function (){var G__60960 = node_61187.cloneNode(true);
G__60960.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61188),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60960;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61188], 0));

goog.dom.insertSiblingAfter(new_link_61189,node_61187);

goog.dom.removeNode(node_61187);


var G__61190 = cljs.core.next(seq__60944_61180__$1);
var G__61191 = null;
var G__61192 = (0);
var G__61193 = (0);
seq__60944_61160 = G__61190;
chunk__60947_61161 = G__61191;
count__60948_61162 = G__61192;
i__60949_61163 = G__61193;
continue;
} else {
var G__61194 = cljs.core.next(seq__60944_61180__$1);
var G__61195 = null;
var G__61196 = (0);
var G__61197 = (0);
seq__60944_61160 = G__61194;
chunk__60947_61161 = G__61195;
count__60948_61162 = G__61196;
i__60949_61163 = G__61197;
continue;
}
}
} else {
}
}
break;
}


var G__61198 = cljs.core.next(seq__60761__$1);
var G__61199 = null;
var G__61200 = (0);
var G__61201 = (0);
seq__60761 = G__61198;
chunk__60763 = G__61199;
count__60764 = G__61200;
i__60765 = G__61201;
continue;
} else {
var G__61203 = cljs.core.next(seq__60761__$1);
var G__61204 = null;
var G__61205 = (0);
var G__61206 = (0);
seq__60761 = G__61203;
chunk__60763 = G__61204;
count__60764 = G__61205;
i__60765 = G__61206;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__60962){
var map__60963 = p__60962;
var map__60963__$1 = (((((!((map__60963 == null))))?(((((map__60963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60963):map__60963);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60963__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__60970){
var map__60971 = p__60970;
var map__60971__$1 = (((((!((map__60971 == null))))?(((((map__60971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60971):map__60971);
var _ = map__60971__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60971__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__60973,done,error){
var map__60974 = p__60973;
var map__60974__$1 = (((((!((map__60974 == null))))?(((((map__60974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60974):map__60974);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__60987,done,error){
var map__60988 = p__60987;
var map__60988__$1 = (((((!((map__60988 == null))))?(((((map__60988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60988):map__60988);
var msg = map__60988__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60990){
var map__60991 = p__60990;
var map__60991__$1 = (((((!((map__60991 == null))))?(((((map__60991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60991):map__60991);
var src = map__60991__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60991__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__60997 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__60997) : done.call(null,G__60997));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__61002){
var map__61003 = p__61002;
var map__61003__$1 = (((((!((map__61003 == null))))?(((((map__61003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61003):map__61003);
var msg__$1 = map__61003__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e61008){var ex = e61008;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__61009){
var map__61013 = p__61009;
var map__61013__$1 = (((((!((map__61013 == null))))?(((((map__61013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61013):map__61013);
var env = map__61013__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61013__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__61021){
var map__61022 = p__61021;
var map__61022__$1 = (((((!((map__61022 == null))))?(((((map__61022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61022):map__61022);
var msg = map__61022__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61022__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__61025){
var map__61026 = p__61025;
var map__61026__$1 = (((((!((map__61026 == null))))?(((((map__61026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61026):map__61026);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61026__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61026__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__61028){
var map__61029 = p__61028;
var map__61029__$1 = (((((!((map__61029 == null))))?(((((map__61029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61029):map__61029);
var svc = map__61029__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61029__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

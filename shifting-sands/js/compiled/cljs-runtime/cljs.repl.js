goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60612){
var map__60614 = p__60612;
var map__60614__$1 = (((((!((map__60614 == null))))?(((((map__60614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60614):map__60614);
var m = map__60614__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60614__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60614__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60619_60856 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60620_60857 = null;
var count__60621_60858 = (0);
var i__60622_60859 = (0);
while(true){
if((i__60622_60859 < count__60621_60858)){
var f_60861 = chunk__60620_60857.cljs$core$IIndexed$_nth$arity$2(null,i__60622_60859);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60861], 0));


var G__60862 = seq__60619_60856;
var G__60863 = chunk__60620_60857;
var G__60864 = count__60621_60858;
var G__60865 = (i__60622_60859 + (1));
seq__60619_60856 = G__60862;
chunk__60620_60857 = G__60863;
count__60621_60858 = G__60864;
i__60622_60859 = G__60865;
continue;
} else {
var temp__5735__auto___60866 = cljs.core.seq(seq__60619_60856);
if(temp__5735__auto___60866){
var seq__60619_60867__$1 = temp__5735__auto___60866;
if(cljs.core.chunked_seq_QMARK_(seq__60619_60867__$1)){
var c__4556__auto___60868 = cljs.core.chunk_first(seq__60619_60867__$1);
var G__60869 = cljs.core.chunk_rest(seq__60619_60867__$1);
var G__60870 = c__4556__auto___60868;
var G__60871 = cljs.core.count(c__4556__auto___60868);
var G__60872 = (0);
seq__60619_60856 = G__60869;
chunk__60620_60857 = G__60870;
count__60621_60858 = G__60871;
i__60622_60859 = G__60872;
continue;
} else {
var f_60875 = cljs.core.first(seq__60619_60867__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60875], 0));


var G__60876 = cljs.core.next(seq__60619_60867__$1);
var G__60877 = null;
var G__60878 = (0);
var G__60879 = (0);
seq__60619_60856 = G__60876;
chunk__60620_60857 = G__60877;
count__60621_60858 = G__60878;
i__60622_60859 = G__60879;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60882 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_60882], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_60882)))?cljs.core.second(arglists_60882):arglists_60882)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60632_60891 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60633_60892 = null;
var count__60634_60893 = (0);
var i__60635_60894 = (0);
while(true){
if((i__60635_60894 < count__60634_60893)){
var vec__60656_60895 = chunk__60633_60892.cljs$core$IIndexed$_nth$arity$2(null,i__60635_60894);
var name_60896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60656_60895,(0),null);
var map__60659_60897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60656_60895,(1),null);
var map__60659_60898__$1 = (((((!((map__60659_60897 == null))))?(((((map__60659_60897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60659_60897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60659_60897):map__60659_60897);
var doc_60899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60659_60898__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60659_60898__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60896], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60900], 0));

if(cljs.core.truth_(doc_60899)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60899], 0));
} else {
}


var G__60902 = seq__60632_60891;
var G__60903 = chunk__60633_60892;
var G__60904 = count__60634_60893;
var G__60905 = (i__60635_60894 + (1));
seq__60632_60891 = G__60902;
chunk__60633_60892 = G__60903;
count__60634_60893 = G__60904;
i__60635_60894 = G__60905;
continue;
} else {
var temp__5735__auto___60906 = cljs.core.seq(seq__60632_60891);
if(temp__5735__auto___60906){
var seq__60632_60907__$1 = temp__5735__auto___60906;
if(cljs.core.chunked_seq_QMARK_(seq__60632_60907__$1)){
var c__4556__auto___60908 = cljs.core.chunk_first(seq__60632_60907__$1);
var G__60909 = cljs.core.chunk_rest(seq__60632_60907__$1);
var G__60910 = c__4556__auto___60908;
var G__60911 = cljs.core.count(c__4556__auto___60908);
var G__60912 = (0);
seq__60632_60891 = G__60909;
chunk__60633_60892 = G__60910;
count__60634_60893 = G__60911;
i__60635_60894 = G__60912;
continue;
} else {
var vec__60663_60913 = cljs.core.first(seq__60632_60907__$1);
var name_60914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60663_60913,(0),null);
var map__60666_60915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60663_60913,(1),null);
var map__60666_60916__$1 = (((((!((map__60666_60915 == null))))?(((((map__60666_60915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60666_60915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60666_60915):map__60666_60915);
var doc_60917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60666_60916__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60666_60916__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60914], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60918], 0));

if(cljs.core.truth_(doc_60917)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60917], 0));
} else {
}


var G__60920 = cljs.core.next(seq__60632_60907__$1);
var G__60921 = null;
var G__60922 = (0);
var G__60923 = (0);
seq__60632_60891 = G__60920;
chunk__60633_60892 = G__60921;
count__60634_60893 = G__60922;
i__60635_60894 = G__60923;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__60672 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60673 = null;
var count__60674 = (0);
var i__60675 = (0);
while(true){
if((i__60675 < count__60674)){
var role = chunk__60673.cljs$core$IIndexed$_nth$arity$2(null,i__60675);
var temp__5735__auto___60925__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___60925__$1)){
var spec_60926 = temp__5735__auto___60925__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60926)], 0));
} else {
}


var G__60927 = seq__60672;
var G__60928 = chunk__60673;
var G__60929 = count__60674;
var G__60930 = (i__60675 + (1));
seq__60672 = G__60927;
chunk__60673 = G__60928;
count__60674 = G__60929;
i__60675 = G__60930;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__60672);
if(temp__5735__auto____$1){
var seq__60672__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60672__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60672__$1);
var G__60931 = cljs.core.chunk_rest(seq__60672__$1);
var G__60932 = c__4556__auto__;
var G__60933 = cljs.core.count(c__4556__auto__);
var G__60934 = (0);
seq__60672 = G__60931;
chunk__60673 = G__60932;
count__60674 = G__60933;
i__60675 = G__60934;
continue;
} else {
var role = cljs.core.first(seq__60672__$1);
var temp__5735__auto___60935__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___60935__$2)){
var spec_60936 = temp__5735__auto___60935__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60936)], 0));
} else {
}


var G__60937 = cljs.core.next(seq__60672__$1);
var G__60938 = null;
var G__60939 = (0);
var G__60940 = (0);
seq__60672 = G__60937;
chunk__60673 = G__60938;
count__60674 = G__60939;
i__60675 = G__60940;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__60942 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60943 = cljs.core.ex_cause(t);
via = G__60942;
t = G__60943;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__60714 = datafied_throwable;
var map__60714__$1 = (((((!((map__60714 == null))))?(((((map__60714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60714):map__60714);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60714__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__60716 = cljs.core.last(via);
var map__60716__$1 = (((((!((map__60716 == null))))?(((((map__60716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60716):map__60716);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__60717 = data;
var map__60717__$1 = (((((!((map__60717 == null))))?(((((map__60717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60717):map__60717);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60717__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60717__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60717__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__60718 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__60718__$1 = (((((!((map__60718 == null))))?(((((map__60718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60718):map__60718);
var top_data = map__60718__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60718__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__60731 = phase;
var G__60731__$1 = (((G__60731 instanceof cljs.core.Keyword))?G__60731.fqn:null);
switch (G__60731__$1) {
case "read-source":
var map__60734 = data;
var map__60734__$1 = (((((!((map__60734 == null))))?(((((map__60734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60734):map__60734);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__60736 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__60736__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60736,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60736);
var G__60736__$2 = (cljs.core.truth_((function (){var fexpr__60737 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60737.cljs$core$IFn$_invoke$arity$1 ? fexpr__60737.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60737.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60736__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60736__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60736__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60736__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__60739 = top_data;
var G__60739__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60739,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60739);
var G__60739__$2 = (cljs.core.truth_((function (){var fexpr__60740 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60740.cljs$core$IFn$_invoke$arity$1 ? fexpr__60740.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60740.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60739__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60739__$1);
var G__60739__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60739__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60739__$2);
var G__60739__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60739__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60739__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60739__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60739__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__60741 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60741,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60741,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60741,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60741,(3),null);
var G__60744 = top_data;
var G__60744__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60744,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__60744);
var G__60744__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60744__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__60744__$1);
var G__60744__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60744__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__60744__$2);
var G__60744__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60744__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60744__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60744__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60744__$4;
}

break;
case "execution":
var vec__60749 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60749,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60749,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60749,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60749,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60713_SHARP_){
var or__4126__auto__ = (p1__60713_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__60753 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60753.cljs$core$IFn$_invoke$arity$1 ? fexpr__60753.cljs$core$IFn$_invoke$arity$1(p1__60713_SHARP_) : fexpr__60753.call(null,p1__60713_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__60755 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__60755__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60755,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__60755);
var G__60755__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60755__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60755__$1);
var G__60755__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60755__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__60755__$2);
var G__60755__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60755__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__60755__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60755__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60755__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60731__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__60780){
var map__60782 = p__60780;
var map__60782__$1 = (((((!((map__60782 == null))))?(((((map__60782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60782):map__60782);
var triage_data = map__60782__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__60789 = phase;
var G__60789__$1 = (((G__60789 instanceof cljs.core.Keyword))?G__60789.fqn:null);
switch (G__60789__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__60792 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__60793 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60794 = loc;
var G__60795 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60796_60979 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60797_60980 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60798_60981 = true;
var _STAR_print_fn_STAR__temp_val__60799_60982 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60798_60981);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60799_60982);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60777_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60777_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60797_60980);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60796_60979);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60792,G__60793,G__60794,G__60795) : format.call(null,G__60792,G__60793,G__60794,G__60795));

break;
case "macroexpansion":
var G__60803 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__60804 = cause_type;
var G__60805 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60806 = loc;
var G__60807 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60803,G__60804,G__60805,G__60806,G__60807) : format.call(null,G__60803,G__60804,G__60805,G__60806,G__60807));

break;
case "compile-syntax-check":
var G__60809 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__60810 = cause_type;
var G__60811 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60812 = loc;
var G__60813 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60809,G__60810,G__60811,G__60812,G__60813) : format.call(null,G__60809,G__60810,G__60811,G__60812,G__60813));

break;
case "compilation":
var G__60814 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__60815 = cause_type;
var G__60816 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60817 = loc;
var G__60818 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60814,G__60815,G__60816,G__60817,G__60818) : format.call(null,G__60814,G__60815,G__60816,G__60817,G__60818));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__60821 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__60822 = symbol;
var G__60823 = loc;
var G__60824 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60825_60993 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60826_60994 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60827_60995 = true;
var _STAR_print_fn_STAR__temp_val__60828_60996 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60827_60995);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60828_60996);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60778_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60778_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60826_60994);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60825_60993);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60821,G__60822,G__60823,G__60824) : format.call(null,G__60821,G__60822,G__60823,G__60824));
} else {
var G__60841 = "Execution error%s at %s(%s).\n%s\n";
var G__60842 = cause_type;
var G__60843 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60844 = loc;
var G__60845 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60841,G__60842,G__60843,G__60844,G__60845) : format.call(null,G__60841,G__60842,G__60843,G__60844,G__60845));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60789__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

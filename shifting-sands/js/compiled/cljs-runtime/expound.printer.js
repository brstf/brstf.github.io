goog.provide('expound.printer');
expound.printer.indent_level = (2);
expound.printer.anon_fn_str = "<anonymous function>";
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",-2019438263),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),"null"], null), null),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"specs","specs",1426570741)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null], null), null),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"and","and",668631710,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"or","or",1876275696,null)),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword(null,"conj","conj",1527141827),new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",-2019438263)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Keyword(null,"conj","conj",1527141827)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",-2019438263)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",-2019438263)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec","key-spec","expound.spec/key-spec",169182720),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),"null"], null), null),new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),"null",new cljs.core.Keyword(null,"opt-un","opt-un",883442496),"null",new cljs.core.Keyword(null,"req","req",-326448303),"null",new cljs.core.Keyword(null,"opt","opt",-794706369),"null"], null), null),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),null], null), null),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),"null",new cljs.core.Keyword(null,"opt-un","opt-un",883442496),"null",new cljs.core.Keyword(null,"req","req",-326448303),"null",new cljs.core.Keyword(null,"opt","opt",-794706369),"null"], null), null),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qualifier","qualifier",125841738),new cljs.core.Keyword(null,"specs","specs",1426570741)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),null,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),null,new cljs.core.Keyword(null,"req","req",-326448303),null,new cljs.core.Keyword(null,"opt","opt",-794706369),null], null), null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48913){
return cljs.core.coll_QMARK_(G__48913);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),"null",new cljs.core.Keyword(null,"opt-un","opt-un",883442496),"null",new cljs.core.Keyword(null,"req","req",-326448303),"null",new cljs.core.Keyword(null,"opt","opt",-794706369),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),"null",new cljs.core.Keyword(null,"opt-un","opt-un",883442496),"null",new cljs.core.Keyword(null,"req","req",-326448303),"null",new cljs.core.Keyword(null,"opt","opt",-794706369),"null"], null), null),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),"null"], null), null),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),"null"], null), null),new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"compound","compound",1539396613),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),"null"], null), null),new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236)))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"compound","compound",1539396613)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),"null"], null), null),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),"null"], null), null),new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),"null"], null), null),new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.Keyword(null,"kw","kw",1158308175)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"%","%",-950237169,null),null], null), null),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),"null"], null), null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null], null), null),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236))], null))], null),null));
expound.printer.str_width = (function expound$printer$str_width(lines){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,lines));
});
expound.printer.max_column_width = (function expound$printer$max_column_width(rows,i){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48920_SHARP_){
return expound.printer.str_width(clojure.string.split_lines(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__48920_SHARP_,i))));
}),rows));
});
expound.printer.max_row_height = (function expound$printer$max_row_height(row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48921_SHARP_){
return cljs.core.count(clojure.string.split_lines(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48921_SHARP_)));
}),row));
});
expound.printer.indented_multirows = (function expound$printer$indented_multirows(column_widths,multi_rows){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (multi_row){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
var G__48930 = ["%-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(column_widths,i)),"s"].join('');
var G__48931 = v;
return (expound.printer.format.cljs$core$IFn$_invoke$arity$2 ? expound.printer.format.cljs$core$IFn$_invoke$arity$2(G__48930,G__48931) : expound.printer.format.call(null,G__48930,G__48931));
}),row);
}),multi_row);
}),multi_rows);
});
expound.printer.formatted_row = (function expound$printer$formatted_row(row,edge,spacer,middle){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer),clojure.string.join.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer)].join(''),row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge)].join('');
});
expound.printer.table = (function expound$printer$table(multirows){
var header = cljs.core.first(cljs.core.first(multirows));
var columns_dividers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48932_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48932_SHARP_)).length),"-"));
}),header);
var header_columns_dividers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48933_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48933_SHARP_)).length),"="));
}),header);
var header_divider = expound.printer.formatted_row(header_columns_dividers,"|","=","+");
var row_divider = expound.printer.formatted_row(columns_dividers,"|","-","+");
var formatted_multirows = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (multirow){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return expound.printer.formatted_row(row,"|"," ","|");
}),multirow);
}),multirows);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.butlast(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([formatted_multirows,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_divider], null)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_divider], null)))], 0)))], 0));
});
expound.printer.multirow = (function expound$printer$multirow(row_height,row){
var split_row_contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return clojure.string.split_lines(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}),row);
var iter__4529__auto__ = (function expound$printer$multirow_$_iter__48940(s__48941){
return (new cljs.core.LazySeq(null,(function (){
var s__48941__$1 = s__48941;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48941__$1);
if(temp__5735__auto__){
var s__48941__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48941__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48941__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48943 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48942 = (0);
while(true){
if((i__48942 < size__4528__auto__)){
var row_idx = cljs.core._nth(c__4527__auto__,i__48942);
cljs.core.chunk_append(b__48943,(function (){var iter__4529__auto__ = ((function (i__48942,row_idx,c__4527__auto__,size__4528__auto__,b__48943,s__48941__$2,temp__5735__auto__,split_row_contents){
return (function expound$printer$multirow_$_iter__48940_$_iter__48944(s__48945){
return (new cljs.core.LazySeq(null,((function (i__48942,row_idx,c__4527__auto__,size__4528__auto__,b__48943,s__48941__$2,temp__5735__auto__,split_row_contents){
return (function (){
var s__48945__$1 = s__48945;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__48945__$1);
if(temp__5735__auto____$1){
var s__48945__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48945__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__48945__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__48947 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__48946 = (0);
while(true){
if((i__48946 < size__4528__auto____$1)){
var col_idx = cljs.core._nth(c__4527__auto____$1,i__48946);
cljs.core.chunk_append(b__48947,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""));

var G__49470 = (i__48946 + (1));
i__48946 = G__49470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48947),expound$printer$multirow_$_iter__48940_$_iter__48944(cljs.core.chunk_rest(s__48945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48947),null);
}
} else {
var col_idx = cljs.core.first(s__48945__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""),expound$printer$multirow_$_iter__48940_$_iter__48944(cljs.core.rest(s__48945__$2)));
}
} else {
return null;
}
break;
}
});})(i__48942,row_idx,c__4527__auto__,size__4528__auto__,b__48943,s__48941__$2,temp__5735__auto__,split_row_contents))
,null,null));
});})(i__48942,row_idx,c__4527__auto__,size__4528__auto__,b__48943,s__48941__$2,temp__5735__auto__,split_row_contents))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})());

var G__49472 = (i__48942 + (1));
i__48942 = G__49472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48943),expound$printer$multirow_$_iter__48940(cljs.core.chunk_rest(s__48941__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48943),null);
}
} else {
var row_idx = cljs.core.first(s__48941__$2);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (row_idx,s__48941__$2,temp__5735__auto__,split_row_contents){
return (function expound$printer$multirow_$_iter__48940_$_iter__48949(s__48950){
return (new cljs.core.LazySeq(null,(function (){
var s__48950__$1 = s__48950;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__48950__$1);
if(temp__5735__auto____$1){
var s__48950__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48950__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48950__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48952 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48951 = (0);
while(true){
if((i__48951 < size__4528__auto__)){
var col_idx = cljs.core._nth(c__4527__auto__,i__48951);
cljs.core.chunk_append(b__48952,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""));

var G__49478 = (i__48951 + (1));
i__48951 = G__49478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48952),expound$printer$multirow_$_iter__48940_$_iter__48949(cljs.core.chunk_rest(s__48950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48952),null);
}
} else {
var col_idx = cljs.core.first(s__48950__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""),expound$printer$multirow_$_iter__48940_$_iter__48949(cljs.core.rest(s__48950__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_idx,s__48941__$2,temp__5735__auto__,split_row_contents))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})(),expound$printer$multirow_$_iter__48940(cljs.core.rest(s__48941__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(row_height));
});
expound.printer.multirows = (function expound$printer$multirows(row_heights,rows){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return expound.printer.multirow(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_heights,idx),row);
}),rows);
});
expound.printer.formatted_multirows = (function expound$printer$formatted_multirows(column_keys,map_rows){
if(cljs.core.empty_QMARK_(map_rows)){
return null;
} else {
var rows = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_keys], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48959_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(p1__48959_SHARP_,column_keys);
}),map_rows));
var row_heights = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(expound.printer.max_row_height,rows);
var column_widths = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return expound.printer.max_column_width(rows,i);
}),cljs.core.first(rows));
return expound.printer.indented_multirows(column_widths,expound.printer.multirows(row_heights,rows));
}
});
expound.printer.table_str = (function expound$printer$table_str(column_keys,map_rows){
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"\n"].join('');
}),expound.printer.table(expound.printer.formatted_multirows(column_keys,map_rows)))))].join('');
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.printer","print-table","expound.printer/print-table",173559216,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"map-rows","map-rows",217464867),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"map-rows","map-rows",217464867),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"map-rows","map-rows",217464867)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48992){
return cljs.core.coll_QMARK_(G__48992);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.map_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48993){
return cljs.core.coll_QMARK_(G__48993);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"map-rows","map-rows",217464867),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
expound.printer.print_table = (function expound$printer$print_table(var_args){
var G__48995 = arguments.length;
switch (G__48995) {
case 1:
return expound.printer.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.printer.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.printer.print_table.cljs$core$IFn$_invoke$arity$1 = (function (map_rows){
return expound.printer.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(map_rows)),map_rows);
}));

(expound.printer.print_table.cljs$core$IFn$_invoke$arity$2 = (function (column_keys,map_rows){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.table_str(column_keys,map_rows)], 0));
}));

(expound.printer.print_table.cljs$lang$maxFixedArity = 2);

expound.printer.keywords = (function expound$printer$keywords(form){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,form));
});
expound.printer.singleton_QMARK_ = (function expound$printer$singleton_QMARK_(xs){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs));
});
expound.printer.specs_from_form = (function expound$printer$specs_from_form(via){
var form = (function (){var G__49008 = via;
var G__49008__$1 = (((G__49008 == null))?null:cljs.core.last(G__49008));
if((G__49008__$1 == null)){
return null;
} else {
return cljs.spec.alpha.form(G__49008__$1);
}
})();
var conformed = cljs.spec.alpha.conform(new cljs.core.Keyword("expound.spec","key-spec","expound.spec/key-spec",169182720),form);
if(cljs.core.truth_((function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),conformed);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kw","kw",1158308175),cljs.core.first(x))));
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(conformed))))));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
expound.printer.key__GT_spec = (function expound$printer$key__GT_spec(keys,problems){
var seq__49020_49523 = cljs.core.seq(problems);
var chunk__49021_49524 = null;
var count__49022_49525 = (0);
var i__49023_49526 = (0);
while(true){
if((i__49023_49526 < count__49022_49525)){
var p_49527 = chunk__49021_49524.cljs$core$IIndexed$_nth$arity$2(null,i__49023_49526);
if((!((new cljs.core.Keyword("expound","via","expound/via",-595987777).cljs$core$IFn$_invoke$arity$1(p_49527) == null)))){
} else {
throw (new Error(["Assert failed: ",expound.util.assert_message,"\n","(some? (:expound/via p))"].join('')));
}


var G__49530 = seq__49020_49523;
var G__49531 = chunk__49021_49524;
var G__49532 = count__49022_49525;
var G__49533 = (i__49023_49526 + (1));
seq__49020_49523 = G__49530;
chunk__49021_49524 = G__49531;
count__49022_49525 = G__49532;
i__49023_49526 = G__49533;
continue;
} else {
var temp__5735__auto___49534 = cljs.core.seq(seq__49020_49523);
if(temp__5735__auto___49534){
var seq__49020_49535__$1 = temp__5735__auto___49534;
if(cljs.core.chunked_seq_QMARK_(seq__49020_49535__$1)){
var c__4556__auto___49536 = cljs.core.chunk_first(seq__49020_49535__$1);
var G__49537 = cljs.core.chunk_rest(seq__49020_49535__$1);
var G__49538 = c__4556__auto___49536;
var G__49539 = cljs.core.count(c__4556__auto___49536);
var G__49540 = (0);
seq__49020_49523 = G__49537;
chunk__49021_49524 = G__49538;
count__49022_49525 = G__49539;
i__49023_49526 = G__49540;
continue;
} else {
var p_49541 = cljs.core.first(seq__49020_49535__$1);
if((!((new cljs.core.Keyword("expound","via","expound/via",-595987777).cljs$core$IFn$_invoke$arity$1(p_49541) == null)))){
} else {
throw (new Error(["Assert failed: ",expound.util.assert_message,"\n","(some? (:expound/via p))"].join('')));
}


var G__49544 = cljs.core.next(seq__49020_49535__$1);
var G__49545 = null;
var G__49546 = (0);
var G__49547 = (0);
seq__49020_49523 = G__49544;
chunk__49021_49524 = G__49545;
count__49022_49525 = G__49546;
i__49023_49526 = G__49547;
continue;
}
} else {
}
}
break;
}

var vias = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound","via","expound/via",-595987777),problems);
var specs = ((cljs.core.every_QMARK_(cljs.core.qualified_keyword_QMARK_,keys))?keys:(function (){var temp__5733__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.printer.specs_from_form,vias));
if(cljs.core.truth_(temp__5733__auto__)){
var specs = temp__5733__auto__;
return specs;
} else {
return keys;
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((cljs.core.qualified_keyword_QMARK_(k))?k:(function (){var or__4126__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49016_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),cljs.core.name(p1__49016_SHARP_));
}),specs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<can't find spec for unqualified spec identifier>";
}
})()));
}),cljs.core.PersistentArrayMap.EMPTY,keys);
});
expound.printer.summarize_key_clause = (function expound$printer$summarize_key_clause(p__49070){
var vec__49072 = p__49070;
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49072,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49072,(1),null);
var G__49077 = branch;
var G__49077__$1 = (((G__49077 instanceof cljs.core.Keyword))?G__49077.fqn:null);
switch (G__49077__$1) {
case "simple":
return new cljs.core.Keyword(null,"kw","kw",1158308175).cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(match))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.printer.summarize_key_clause,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(match)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49077__$1)].join('')));

}
});
expound.printer.missing_key = (function expound$printer$missing_key(form){
var vec__49088 = cljs.spec.alpha.conform(new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)));
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088,(1),null);
var G__49096 = branch;
var G__49096__$1 = (((G__49096 instanceof cljs.core.Keyword))?G__49096.fqn:null);
switch (G__49096__$1) {
case "simple":
return new cljs.core.Keyword(null,"kw","kw",1158308175).cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return expound.printer.summarize_key_clause(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch,match], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49096__$1)].join('')));

}
});
expound.printer.elide_core_ns = (function expound$printer$elide_core_ns(s){
return clojure.string.replace(clojure.string.replace(s,"cljs.core/",""),"cljs/core/","");
});
expound.printer.elide_spec_ns = (function expound$printer$elide_spec_ns(s){
return clojure.string.replace(clojure.string.replace(s,"cljs.spec.alpha/",""),"cljs/spec/alpha","");
});
expound.printer.pprint_fn = (function expound$printer$pprint_fn(f){
return clojure.string.replace(clojure.string.replace(expound.printer.elide_core_ns((function (){var fn_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.re_find(/object\[([^\( \]]+).*(\n|\])?/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))),/\$/);
var ns_n = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(fn_parts));
var fn_n = cljs.core.last(fn_parts);
if(cljs.core.empty_QMARK_(ns_n)){
return expound.printer.anon_fn_str;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(ns_n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(fn_n))].join('');
}
})()),/--\d+/,""),/@[a-zA-Z0-9]+/,"");
});
expound.printer.format = (function expound$printer$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49565 = arguments.length;
var i__4737__auto___49566 = (0);
while(true){
if((i__4737__auto___49566 < len__4736__auto___49565)){
args__4742__auto__.push((arguments[i__4737__auto___49566]));

var G__49568 = (i__4737__auto___49566 + (1));
i__4737__auto___49566 = G__49568;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(expound.printer.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(expound.printer.format.cljs$lang$applyTo = (function (seq49126){
var G__49127 = cljs.core.first(seq49126);
var seq49126__$1 = cljs.core.next(seq49126);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49127,seq49126__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.printer","pprint-str","expound.printer/pprint-str",545590738,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Returns the pretty-printed string
 */
expound.printer.pprint_str = (function expound$printer$pprint_str(x){
if(cljs.core.fn_QMARK_(x)){
return expound.printer.pprint_fn(x);
} else {
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stream","stream",1534941648),null], 0));
}
});
expound.printer.expand_spec = (function expound$printer$expand_spec(spec){
if(cljs.core.truth_(cljs.spec.alpha.get_spec(spec))){
return expound.printer.pprint_str(cljs.spec.alpha.form(spec));
} else {
return spec;
}
});
expound.printer.simple_spec_or_name = (function expound$printer$simple_spec_or_name(spec_name){
var expanded = expound.printer.expand_spec(spec_name);
var spec_str = expound.printer.elide_spec_ns(expound.printer.elide_core_ns((((expanded == null))?"nil":expanded)));
return spec_str;
});
expound.printer.print_spec_keys_STAR_ = (function expound$printer$print_spec_keys_STAR_(problems){
var keys = expound.printer.keywords(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49185_SHARP_){
return expound.printer.missing_key(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(p1__49185_SHARP_));
}),problems));
if(cljs.core.truth_(((cljs.core.empty_QMARK_(new cljs.core.Keyword("expound","via","expound/via",-595987777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems))))?cljs.core.some(cljs.core.simple_keyword_QMARK_,keys):false))){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__49189_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__49189_SHARP_,"key");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49208){
var vec__49211 = p__49208;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49211,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, ["key",k,"spec",expound.printer.simple_spec_or_name(v)], null);
}),expound.printer.key__GT_spec(keys,problems)));
}
});
expound.printer.print_spec_keys = (function expound$printer$print_spec_keys(problems){
return clojure.string.trim((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49223_49587 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49224_49588 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49227_49589 = true;
var _STAR_print_fn_STAR__temp_val__49228_49590 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49227_49589);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49228_49590);

try{expound.printer.print_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","spec"], null),expound.printer.print_spec_keys_STAR_(problems));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49224_49588);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49223_49587);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
});
expound.printer.print_missing_keys = (function expound$printer$print_missing_keys(problems){
var keys_clauses = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(expound.printer.missing_key,new cljs.core.Keyword(null,"pred","pred",1927423397)),problems));
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys_clauses)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49239_SHARP_){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(p1__49239_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"correct-key","correct-key",1087492967)], 0));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(keys_clauses)));
} else {
return ["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.pprint_str(((expound.printer.singleton_QMARK_(keys_clauses))?cljs.core.first(keys_clauses):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,new cljs.core.Symbol(null,"and","and",668631710,null),keys_clauses))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"correct-key","correct-key",1087492967)], 0)))].join('');
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.printer","no-trailing-whitespace","expound.printer/no-trailing-whitespace",12095135,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given an potentially multi-line string, returns that string with all
 *   trailing whitespace removed.
 */
expound.printer.no_trailing_whitespace = (function expound$printer$no_trailing_whitespace(s){
var s_SINGLEQUOTE_ = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trimr,clojure.string.split_lines(s)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.last(s))){
return [s_SINGLEQUOTE_,"\n"].join('');
} else {
return s_SINGLEQUOTE_;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.printer","indent","expound.printer/indent",-1038636895,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",-142390557),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",-142390557),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",-142390557),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),new cljs.core.Keyword(null,"s","s",1705939918)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.nat_int_QMARK_,new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),cljs.spec.alpha.maybe_impl(cljs.core.nat_int_QMARK_,new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",-142390557),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given an potentially multi-line string, returns that string indented by
 * 'indent-level' spaces. Optionally, can indent first line and other lines
 * different amounts.
 */
expound.printer.indent = (function expound$printer$indent(var_args){
var G__49305 = arguments.length;
switch (G__49305) {
case 1:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.printer.indent.cljs$core$IFn$_invoke$arity$1 = (function (s){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(expound.printer.indent_level,s);
}));

(expound.printer.indent.cljs$core$IFn$_invoke$arity$2 = (function (indent_level,s){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3(indent_level,indent_level,s);
}));

(expound.printer.indent.cljs$core$IFn$_invoke$arity$3 = (function (first_line_indent,rest_lines_indent,s){
var vec__49310 = clojure.string.split_lines(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
var seq__49311 = cljs.core.seq(vec__49310);
var first__49312 = cljs.core.first(seq__49311);
var seq__49311__$1 = cljs.core.next(seq__49311);
var line = first__49312;
var lines = seq__49311__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(first_line_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('')], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49299_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rest_lines_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49299_SHARP_)].join('');
}),lines)));
}));

(expound.printer.indent.cljs$lang$maxFixedArity = 3);

expound.printer.escape_replacement = (function expound$printer$escape_replacement(_pattern,s){
return clojure.string.replace(s,/\$/,"$$$$");
});
expound.printer.blank_form = (function expound$printer$blank_form(form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.zipmap(cljs.core.keys(form),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.vector_QMARK_(form)){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.set_QMARK_(form)){
return form;
} else {
if(((cljs.core.list_QMARK_(form)) || (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
return new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124);

}
}
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.printer","summary-form","expound.printer/summary-form",2067963162,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
expound.printer.summary_form = (function expound$printer$summary_form(show_valid_values_QMARK_,form,in$){
while(true){
var vec__49353 = in$;
var seq__49354 = cljs.core.seq(vec__49353);
var first__49355 = cljs.core.first(seq__49354);
var seq__49354__$1 = cljs.core.next(seq__49354);
var k = first__49355;
var rst = seq__49354__$1;
var rst__$1 = (function (){var or__4126__auto__ = rst;
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var displayed_form = (cljs.core.truth_(show_valid_values_QMARK_)?form:expound.printer.blank_form(form));
if(cljs.core.empty_QMARK_(in$)){
return new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036);
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kps_QMARK_(k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(displayed_form,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k)),(function (){var G__49361 = show_valid_values_QMARK_;
var G__49362 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k);
var G__49363 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__49361,G__49362,G__49363) : expound.printer.summary_form.call(null,G__49361,G__49362,G__49363));
})(),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124));
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kvps_QMARK_(k)))){
var G__49624 = show_valid_values_QMARK_;
var G__49625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__49626 = rst__$1;
show_valid_values_QMARK_ = G__49624;
form = G__49625;
in$ = G__49626;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(displayed_form,k,(function (){var G__49368 = show_valid_values_QMARK_;
var G__49369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__49370 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__49368,G__49369,G__49370) : expound.printer.summary_form.call(null,G__49368,G__49369,G__49370));
})());
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__49375 = show_valid_values_QMARK_;
var G__49376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,k);
var G__49377 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__49375,G__49376,G__49377) : expound.printer.summary_form.call(null,G__49375,G__49376,G__49377));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.set_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__49381 = show_valid_values_QMARK_;
var G__49382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__49383 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__49381,G__49382,G__49383) : expound.printer.summary_form.call(null,G__49381,G__49382,G__49383));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.list_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__49386 = show_valid_values_QMARK_;
var G__49387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__49388 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__49386,G__49387,G__49388) : expound.printer.summary_form.call(null,G__49386,G__49387,G__49388));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (typeof form === 'string'))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(form),k,new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot find path segment in form. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));

}
}
}
}
}
}
}
}
break;
}
});
expound.printer.highlight_line = (function expound$printer$highlight_line(prefix,replacement){
var max_width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49391_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49391_SHARP_)).length);
}),clojure.string.split_lines(replacement)));
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)).length),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(max_width,"^")));
});
/**
 * Given a problem, returns a pretty printed
 * string that highlights the problem value
 */
expound.printer.highlighted_value = (function expound$printer$highlighted_value(opts,problem){
var map__49402 = problem;
var map__49402__$1 = (((((!((map__49402 == null))))?(((((map__49402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49402):map__49402);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49402__$1,new cljs.core.Keyword("expound","form","expound/form",-264680632));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49402__$1,new cljs.core.Keyword("expound","in","expound/in",-1900412298));
var map__49403 = opts;
var map__49403__$1 = (((((!((map__49403 == null))))?(((((map__49403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49403):map__49403);
var show_valid_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49403__$1,new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),false);
var printed_val = expound.printer.pprint_str(expound.paths.value_in(form,in$));
var relevant = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036)),"|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"\\s+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"))"].join('');
var regex = cljs.core.re_pattern(["(.*)",relevant,".*"].join(''));
var s = (function (){var _STAR_print_namespace_maps_STAR__orig_val__49416 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__49417 = false;
(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__49417);

try{return expound.printer.pprint_str(clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),expound.printer.summary_form(show_valid_values_QMARK_,form,in$)));
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__49416);
}})();
var vec__49404 = cljs.core.re_find(regex,s);
var seq__49405 = cljs.core.seq(vec__49404);
var first__49406 = cljs.core.first(seq__49405);
var seq__49405__$1 = cljs.core.next(seq__49405);
var line = first__49406;
var first__49406__$1 = cljs.core.first(seq__49405__$1);
var seq__49405__$2 = cljs.core.next(seq__49405__$1);
var prefix = first__49406__$1;
var _more = seq__49405__$2;
var highlighted_line = [clojure.string.replace(line,cljs.core.re_pattern(relevant),expound.printer.escape_replacement(cljs.core.re_pattern(relevant),expound.printer.indent.cljs$core$IFn$_invoke$arity$3((0),cljs.core.count(prefix),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(printed_val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0))))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.highlight_line(prefix,printed_val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pointer","pointer",85071187)], 0)))].join('');
return expound.printer.no_trailing_whitespace(clojure.string.replace(s,line,expound.printer.escape_replacement(line,highlighted_line)));
});

//# sourceMappingURL=expound.printer.js.map

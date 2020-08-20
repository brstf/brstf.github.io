goog.provide('re_com.tabs');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64496 = arguments.length;
var i__4737__auto___64497 = (0);
while(true){
if((i__4737__auto___64497 < len__4736__auto___64496)){
args__4742__auto__.push((arguments[i__4737__auto___64497]));

var G__64498 = (i__4737__auto___64497 + (1));
i__4737__auto___64497 = G__64498;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__64363){
var map__64365 = p__64363;
var map__64365__$1 = (((((!((map__64365 == null))))?(((((map__64365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64365):map__64365);
var args = map__64365__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64365__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64365__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64361_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__64361_SHARP_) : id_fn.call(null,p1__64361_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__64361#] (= current (id-fn p1__64361#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs nav nav-tabs noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style("none")], null),attr], 0)),(function (){var iter__4529__auto__ = (function re_com$tabs$iter__64368(s__64369){
return (new cljs.core.LazySeq(null,(function (){
var s__64369__$1 = s__64369;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64369__$1);
if(temp__5735__auto__){
var s__64369__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64369__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64369__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64371 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64370 = (0);
while(true){
if((i__64370 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__64370);
cljs.core.chunk_append(b__64371,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__64370,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__64371,s__64369__$2,temp__5735__auto__,current,tabs__$1,_,map__64365,map__64365__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__64370,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__64371,s__64369__$2,temp__5735__auto__,current,tabs__$1,_,map__64365,map__64365__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})());

var G__64524 = (i__64370 + (1));
i__64370 = G__64524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64371),re_com$tabs$iter__64368(cljs.core.chunk_rest(s__64369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64371),null);
}
} else {
var t = cljs.core.first(s__64369__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__64369__$2,temp__5735__auto__,current,tabs__$1,_,map__64365,map__64365__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__64369__$2,temp__5735__auto__,current,tabs__$1,_,map__64365,map__64365__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__64368(cljs.core.rest(s__64369__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq64362){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64362));
}));

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64529 = arguments.length;
var i__4737__auto___64530 = (0);
while(true){
if((i__4737__auto___64530 < len__4736__auto___64529)){
args__4742__auto__.push((arguments[i__4737__auto___64530]));

var G__64531 = (i__4737__auto___64530 + (1));
i__4737__auto___64530 = G__64531;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__64383){
var map__64384 = p__64383;
var map__64384__$1 = (((((!((map__64384 == null))))?(((((map__64384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64384):map__64384);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64380_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__64380_SHARP_) : id_fn.call(null,p1__64380_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__64380#] (= current (id-fn p1__64380#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style("none")], null),attr], 0)),(function (){var iter__4529__auto__ = (function re_com$tabs$iter__64390(s__64391){
return (new cljs.core.LazySeq(null,(function (){
var s__64391__$1 = s__64391;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64391__$1);
if(temp__5735__auto__){
var s__64391__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64391__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64391__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64393 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64392 = (0);
while(true){
if((i__64392 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__64392);
cljs.core.chunk_append(b__64393,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__64392,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__64393,s__64391__$2,temp__5735__auto__,current,tabs__$1,_,map__64384,map__64384__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__64392,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__64393,s__64391__$2,temp__5735__auto__,current,tabs__$1,_,map__64384,map__64384__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})());

var G__64547 = (i__64392 + (1));
i__64392 = G__64547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64393),re_com$tabs$iter__64390(cljs.core.chunk_rest(s__64391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64393),null);
}
} else {
var t = cljs.core.first(s__64391__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__64391__$2,temp__5735__auto__,current,tabs__$1,_,map__64384,map__64384__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__64391__$2,temp__5735__auto__,current,tabs__$1,_,map__64384,map__64384__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__64390(cljs.core.rest(s__64391__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq64381){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64381));
}));

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64553 = arguments.length;
var i__4737__auto___64554 = (0);
while(true){
if((i__4737__auto___64554 < len__4736__auto___64553)){
args__4742__auto__.push((arguments[i__4737__auto___64554]));

var G__64555 = (i__4737__auto___64554 + (1));
i__4737__auto___64554 = G__64555;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__64410){
var map__64411 = p__64410;
var map__64411__$1 = (((((!((map__64411 == null))))?(((((map__64411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64411):map__64411);
var args = map__64411__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64411__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64411__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], 0));
}));

(re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq64408){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64408));
}));

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64556 = arguments.length;
var i__4737__auto___64557 = (0);
while(true){
if((i__4737__auto___64557 < len__4736__auto___64556)){
args__4742__auto__.push((arguments[i__4737__auto___64557]));

var G__64558 = (i__4737__auto___64557 + (1));
i__4737__auto___64557 = G__64558;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__64417){
var map__64418 = p__64417;
var map__64418__$1 = (((((!((map__64418 == null))))?(((((map__64418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64418):map__64418);
var args = map__64418__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64418__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64418__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64418__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64418__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64418__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64418__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64418__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64418__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], 0));
}));

(re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq64415){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64415));
}));

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64560 = arguments.length;
var i__4737__auto___64561 = (0);
while(true){
if((i__4737__auto___64561 < len__4736__auto___64560)){
args__4742__auto__.push((arguments[i__4737__auto___64561]));

var G__64562 = (i__4737__auto___64561 + (1));
i__4737__auto___64561 = G__64562;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__64434){
var map__64435 = p__64434;
var map__64435__$1 = (((((!((map__64435 == null))))?(((((map__64435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64435):map__64435);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64435__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64435__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64435__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64435__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64435__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64435__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64435__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64435__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64435__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64426_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__64426_SHARP_) : id_fn.call(null,p1__64426_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__64426#] (= current (id-fn p1__64426#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect nav nav-pills",(cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style("none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),attr], 0)),(function (){var iter__4529__auto__ = (function re_com$tabs$iter__64438(s__64439){
return (new cljs.core.LazySeq(null,(function (){
var s__64439__$1 = s__64439;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64439__$1);
if(temp__5735__auto__){
var s__64439__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64439__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64439__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64442 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64440 = (0);
while(true){
if((i__64440 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__64440);
cljs.core.chunk_append(b__64442,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__64440,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__64442,s__64439__$2,temp__5735__auto__,current,tabs__$1,_,map__64435,map__64435__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__64440,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__64442,s__64439__$2,temp__5735__auto__,current,tabs__$1,_,map__64435,map__64435__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__64564 = (i__64440 + (1));
i__64440 = G__64564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64442),re_com$tabs$iter__64438(cljs.core.chunk_rest(s__64439__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64442),null);
}
} else {
var t = cljs.core.first(s__64439__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__64439__$2,temp__5735__auto__,current,tabs__$1,_,map__64435,map__64435__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__64439__$2,temp__5735__auto__,current,tabs__$1,_,map__64435,map__64435__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__64438(cljs.core.rest(s__64439__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq64430){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64430));
}));

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64565 = arguments.length;
var i__4737__auto___64566 = (0);
while(true){
if((i__4737__auto___64566 < len__4736__auto___64565)){
args__4742__auto__.push((arguments[i__4737__auto___64566]));

var G__64567 = (i__4737__auto___64566 + (1));
i__4737__auto___64566 = G__64567;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__64488){
var map__64489 = p__64488;
var map__64489__$1 = (((((!((map__64489 == null))))?(((((map__64489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64489):map__64489);
var args = map__64489__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64489__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64489__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64489__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64489__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64489__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64489__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64489__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64489__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], 0));
}));

(re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq64487){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64487));
}));

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64568 = arguments.length;
var i__4737__auto___64569 = (0);
while(true){
if((i__4737__auto___64569 < len__4736__auto___64568)){
args__4742__auto__.push((arguments[i__4737__auto___64569]));

var G__64570 = (i__4737__auto___64569 + (1));
i__4737__auto___64569 = G__64570;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__64493){
var map__64494 = p__64493;
var map__64494__$1 = (((((!((map__64494 == null))))?(((((map__64494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64494):map__64494);
var args = map__64494__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64494__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64494__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], 0));
}));

(re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq64492){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64492));
}));


//# sourceMappingURL=re_com.tabs.js.map

goog.provide('shifting_sands.views');
shifting_sands.views.aqua_green = "#84c7a8";
/**
 * Convert newlines to [:br]'s.
 */
shifting_sands.views.text__GT_hiccup = (function shifting_sands$views$text__GT_hiccup(text){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49152_SHARP_){
if(typeof p1__49152_SHARP_ === 'string'){
return p1__49152_SHARP_;
} else {
return cljs.core.with_meta(p1__49152_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("br-")], null));
}
}),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,"\n")));
});
shifting_sands.views.capitalize_first = (function shifting_sands$views$capitalize_first(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.rest))(s));
});
shifting_sands.views.keyword__GT_display_str = (function shifting_sands$views$keyword__GT_display_str(k){
var G__49153 = k;
var G__49153__$1 = (((G__49153 instanceof cljs.core.Keyword))?G__49153.fqn:null);
switch (G__49153__$1) {
case "shifting-sands.db/hp":
return "HP";

break;
default:
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(shifting_sands.views.capitalize_first,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/)));

}
});
shifting_sands.views.title = (function shifting_sands$views$title(){
var name = (function (){var G__49154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","name","shifting-sands.subs/name",374965322)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49154) : re_frame.core.subscribe.call(null,G__49154));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Hello from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(name))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
shifting_sands.views.floors = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),f,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(shifting_sands.views.capitalize_first,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(f),/-/)))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.second,shifting_sands.db.floor__GT_depth))));
shifting_sands.views.floor_header = (function shifting_sands$views$floor_header(){
var current_floor = (function (){var G__49156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","current-floor","shifting-sands.subs/current-floor",1826742669)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49156) : re_frame.core.subscribe.call(null,G__49156));
})();
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),shifting_sands.views.floors,new cljs.core.Keyword(null,"model","model",331153215),current_floor,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49155_SHARP_){
var G__49157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","change-floor","shifting-sands.events/change-floor",1664448799),p1__49155_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49157) : re_frame.core.dispatch.call(null,G__49157));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"mono floor-header"], null);
});
shifting_sands.views.exit_index_label = (function shifting_sands$views$exit_index_label(){
var exit_index = (function (){var G__49158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","exit-index","shifting-sands.subs/exit-index",2138468010)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49158) : re_frame.core.subscribe.call(null,G__49158));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"exit-index"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),["Exit Index: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(exit_index))].join('')], null)], null);
});
shifting_sands.views.room__GT_hiccup = (function shifting_sands$views$room__GT_hiccup(p__49159){
var map__49160 = p__49159;
var map__49160__$1 = (((((!((map__49160 == null))))?(((((map__49160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49160):map__49160);
var ri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49160__$1,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49160__$1,new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49160__$1,new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49160__$1,new cljs.core.Keyword("shifting-sands.db","situation","shifting-sands.db/situation",-302724071));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49160__$1,new cljs.core.Keyword("shifting-sands.db","roll","shifting-sands.db/roll",1063037965));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ri),". "].join('')], null),[(((s == null))?"":["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","roll","shifting-sands.db/roll",1063037965).cljs$core$IFn$_invoke$arity$1(s)),") "].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(cljs.core.truth_(d)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.info_button,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shifting_sands.views.text__GT_hiccup(d)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"width","width",-384071477),"250px"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null),(((s == null))?"":[" + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799).cljs$core$IFn$_invoke$arity$1(s))].join(''))], null),(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(s))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.info_button,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shifting_sands.views.text__GT_hiccup(new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418).cljs$core$IFn$_invoke$arity$1(s))], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"width","width",-384071477),"250px"], null):null)], null);
});
shifting_sands.views.room_list = (function shifting_sands$views$room_list(){
var room_list = (function (){var G__49162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","room-list","shifting-sands.subs/room-list",-27047156)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49162) : re_frame.core.subscribe.call(null,G__49162));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function shifting_sands$views$room_list_$_iter__49163(s__49164){
return (new cljs.core.LazySeq(null,(function (){
var s__49164__$1 = s__49164;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49164__$1);
if(temp__5735__auto__){
var s__49164__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49164__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49164__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49166 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49165 = (0);
while(true){
if((i__49165 < size__4528__auto__)){
var room = cljs.core._nth(c__4527__auto__,i__49165);
cljs.core.chunk_append(b__49166,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),shifting_sands.views.room__GT_hiccup(room)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room)], null)));

var G__49299 = (i__49165 + (1));
i__49165 = G__49299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49166),shifting_sands$views$room_list_$_iter__49163(cljs.core.chunk_rest(s__49164__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49166),null);
}
} else {
var room = cljs.core.first(s__49164__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),shifting_sands.views.room__GT_hiccup(room)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room)], null)),shifting_sands$views$room_list_$_iter__49163(cljs.core.rest(s__49164__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(room_list));
})()], null)], null);
});
shifting_sands.views.adv__GT_str = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shifting_sands.db.adv__GT_str,"None");
shifting_sands.views.room_adv = (function shifting_sands$views$room_adv(){
var room_adv = (function (){var G__49167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","room-adv","shifting-sands.subs/room-adv",-742139293)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49167) : re_frame.core.subscribe.call(null,G__49167));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"room-adv-overlay",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"mono"], null),"Generate room",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"advantage:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-triangle-up",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","update-room-adv","shifting-sands.events/update-room-adv",1562513108),cljs.core.inc], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49168) : re_frame.core.dispatch.call(null,G__49168));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-triangle-down",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","update-room-adv","shifting-sands.events/update-room-adv",1562513108),cljs.core.dec], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49169) : re_frame.core.dispatch.call(null,G__49169));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mono",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null)], null),shifting_sands.views.adv__GT_str(cljs.core.deref(room_adv))], null)], null)], null);
});
shifting_sands.views.sidebar = (function shifting_sands$views$sidebar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.floor_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.exit_index_label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),shifting_sands.views.aqua_green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.room_list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),shifting_sands.views.aqua_green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.room_adv], null)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"sidebar"], null);
});
shifting_sands.views.explore_button = (function shifting_sands$views$explore_button(coord,dir){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["mono unselectable explore-qm explore-",cljs.core.name(dir)].join('')], null),"?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["explore-button explore-button-",cljs.core.name(dir)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49170 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-room","shifting-sands.events/generate-room",2119090790),coord,dir], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49170) : re_frame.core.dispatch.call(null,G__49170));
})], null)], null)], null);
});
shifting_sands.views.unexplored_room = (function shifting_sands$views$unexplored_room(coord,p__49171){
var map__49172 = p__49171;
var map__49172__$1 = (((((!((map__49172 == null))))?(((((map__49172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49172):map__49172);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49172__$1,new cljs.core.Keyword("shifting-sands.db","hallways","shifting-sands.db/hallways",185532064));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tile"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"explore-container"], null),(function (){var iter__4529__auto__ = (function shifting_sands$views$unexplored_room_$_iter__49174(s__49175){
return (new cljs.core.LazySeq(null,(function (){
var s__49175__$1 = s__49175;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49175__$1);
if(temp__5735__auto__){
var s__49175__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49175__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49175__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49177 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49176 = (0);
while(true){
if((i__49176 < size__4528__auto__)){
var dir = cljs.core._nth(c__4527__auto__,i__49176);
cljs.core.chunk_append(b__49177,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.explore_button,coord,dir], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coord),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join('')], null)));

var G__49300 = (i__49176 + (1));
i__49176 = G__49300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49177),shifting_sands$views$unexplored_room_$_iter__49174(cljs.core.chunk_rest(s__49175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49177),null);
}
} else {
var dir = cljs.core.first(s__49175__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.explore_button,coord,dir], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coord),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join('')], null)),shifting_sands$views$unexplored_room_$_iter__49174(cljs.core.rest(s__49175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(h);
})()], null)], null);
});
shifting_sands.views.regenerate_button = (function shifting_sands$views$regenerate_button(coord,from_dir){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49178 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","regenerate-room","shifting-sands.events/regenerate-room",-1382676672),coord,from_dir], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49178) : re_frame.core.dispatch.call(null,G__49178));
})], null),"Regenerate"], null);
});
shifting_sands.views.encounter_button = (function shifting_sands$views$encounter_button(coord,room_map){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-encounter","shifting-sands.events/generate-encounter",-298410342),coord], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49179) : re_frame.core.dispatch.call(null,G__49179));
})], null),"Encounter"], null);
});
shifting_sands.views.rotate_button = (function shifting_sands$views$rotate_button(coord,dir){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49180 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","rotate-room","shifting-sands.events/rotate-room",13039064),coord,dir], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49180) : re_frame.core.dispatch.call(null,G__49180));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),"Rotate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center"], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),(function (){var G__49181 = dir;
var G__49181__$1 = (((G__49181 instanceof cljs.core.Keyword))?G__49181.fqn:null);
switch (G__49181__$1) {
case "shifting-sands.db/cw":
return "zmdi-rotate-cw";

break;
case "shifting-sands.db/ccw":
return "zmdi-rotate-ccw";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49181__$1)].join('')));

}
})()], null)], null);
});
shifting_sands.views.force_shop_button = (function shifting_sands$views$force_shop_button(coord){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","force-shop","shifting-sands.events/force-shop",239504190),coord], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49182) : re_frame.core.dispatch.call(null,G__49182));
})], null),"Force Shop"], null);
});
shifting_sands.views.force_shrine_button = (function shifting_sands$views$force_shrine_button(coord){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","force-shrine","shifting-sands.events/force-shrine",1940722496),coord], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49183) : re_frame.core.dispatch.call(null,G__49183));
})], null),"Force Shrine"], null);
});
shifting_sands.views.expandable = (function shifting_sands$views$expandable(label,component){
var expanded_QMARK_ = (function (){var G__49184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","expanded-notes?","shifting-sands.subs/expanded-notes?",1720920143)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49184) : re_frame.core.subscribe.call(null,G__49184));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","toggle-expanded-notes","shifting-sands.events/toggle-expanded-notes",1470265792)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49185) : re_frame.core.dispatch.call(null,G__49185));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),label], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center"], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"zmdi-chevron-down":"zmdi-chevron-right"),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"collapsible",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"block":"none")], null),new cljs.core.Keyword(null,"child","child",623967545),component], null)], null)], null);
});
shifting_sands.views.room_notes = (function shifting_sands$views$room_notes(coord){
var notes = (function (){var G__49187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","notes","shifting-sands.subs/notes",-1852135338),coord], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49187) : re_frame.core.subscribe.call(null,G__49187));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.expandable,"Room Notes",new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"class","class",-2030961996),"montserrat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"resize","resize",297367086),"none",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null),new cljs.core.Keyword(null,"model","model",331153215),notes,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49186_SHARP_){
var G__49188 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","update-notes","shifting-sands.events/update-notes",610337318),coord,p1__49186_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49188) : re_frame.core.dispatch.call(null,G__49188));
}),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true], null)], null);
});
shifting_sands.views.room_menu = (function shifting_sands$views$room_menu(coord,room_map){
var showing_coord = (function (){var G__49189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","showing-coord","shifting-sands.subs/showing-coord",62780047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49189) : re_frame.core.subscribe.call(null,G__49189));
})();
var showing_QMARK_ = reagent.ratom.make_reaction((function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,cljs.core.deref(showing_coord));
}));
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"class","class",-2030961996),"button-container unselectable",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto"], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left-below","left-below",1290111351),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-more-vert",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(showing_QMARK_))){
var G__49190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","hide-room-menu","shifting-sands.events/hide-room-menu",-1491599402)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49190) : re_frame.core.dispatch.call(null,G__49190));
} else {
var G__49191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","show-room-menu","shifting-sands.events/show-room-menu",-415948424),coord], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49191) : re_frame.core.dispatch.call(null,G__49191));
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),"room-menu",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498)], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (){
var G__49192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","hide-room-menu","shifting-sands.events/hide-room-menu",-1491599402)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49192) : re_frame.core.dispatch.call(null,G__49192));
}),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("shifting-sands.db","from-dir","shifting-sands.db/from-dir",-2078635627).cljs$core$IFn$_invoke$arity$1(room_map))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.regenerate_button,coord,new cljs.core.Keyword("shifting-sands.db","from-dir","shifting-sands.db/from-dir",-2078635627).cljs$core$IFn$_invoke$arity$1(room_map)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.encounter_button,coord,room_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.force_shop_button,coord], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.force_shrine_button,coord], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.room_notes,coord], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.rotate_button,coord,new cljs.core.Keyword("shifting-sands.db","cw","shifting-sands.db/cw",-1238540669)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.rotate_button,coord,new cljs.core.Keyword("shifting-sands.db","ccw","shifting-sands.db/ccw",-658828571)], null)], null)], null)], null)], null);
});
shifting_sands.views.room_cell = (function shifting_sands$views$room_cell(coord,room_map){
var current_floor = (function (){var G__49193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","current-floor","shifting-sands.subs/current-floor",1826742669)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49193) : re_frame.core.subscribe.call(null,G__49193));
})();
var current_room = (function (){var G__49194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","current-room","shifting-sands.subs/current-room",-1429230466)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49194) : re_frame.core.subscribe.call(null,G__49194));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"room cell",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"mono room-text unselectable",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),((((10) > new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room_map)))?"30px":"25px")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49195 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","current-room","shifting-sands.events/current-room",1715517596),cljs.core.deref(current_floor),coord], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49195) : re_frame.core.dispatch.call(null,G__49195));
})], null),goog.string.format(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword("shifting-sands.db","coord","shifting-sands.db/coord",-393725865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_room)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_floor),new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_room))))))?"[%d]":"%d"),new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676).cljs$core$IFn$_invoke$arity$1(room_map))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.room_menu,coord,room_map], null)], null)], null);
});
shifting_sands.views.hallway = (function shifting_sands$views$hallway(dir,secret_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dir], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__49196 = dir;
var G__49196__$1 = (((G__49196 instanceof cljs.core.Keyword))?G__49196.fqn:null);
switch (G__49196__$1) {
case "north":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(0),new cljs.core.Keyword(null,"y2","y2",-718691301),"3em"], null);

break;
case "south":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(0),new cljs.core.Keyword(null,"y2","y2",-718691301),"3em"], null);

break;
case "east":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),"3em",new cljs.core.Keyword(null,"y2","y2",-718691301),(0)], null);

break;
case "west":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),"3em",new cljs.core.Keyword(null,"y2","y2",-718691301),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49196__$1)].join('')));

}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(secret_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"5,5"], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(36,36,36)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2"], null)], 0))], null)], 0))], null)], null);
});
shifting_sands.views.explored_room = (function shifting_sands$views$explored_room(coord,room_map){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tile"], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.room_cell,coord,room_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(coord)], null))], null),(function (){var iter__4529__auto__ = (function shifting_sands$views$explored_room_$_iter__49197(s__49198){
return (new cljs.core.LazySeq(null,(function (){
var s__49198__$1 = s__49198;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49198__$1);
if(temp__5735__auto__){
var s__49198__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49198__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49198__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49200 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49199 = (0);
while(true){
if((i__49199 < size__4528__auto__)){
var h = cljs.core._nth(c__4527__auto__,i__49199);
cljs.core.chunk_append(b__49200,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.hallway,h,false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coord),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__49303 = (i__49199 + (1));
i__49199 = G__49303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49200),shifting_sands$views$explored_room_$_iter__49197(cljs.core.chunk_rest(s__49198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49200),null);
}
} else {
var h = cljs.core.first(s__49198__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.hallway,h,false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coord),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),shifting_sands$views$explored_room_$_iter__49197(cljs.core.rest(s__49198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword("shifting-sands.db","hallways","shifting-sands.db/hallways",185532064).cljs$core$IFn$_invoke$arity$1(room_map));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function shifting_sands$views$explored_room_$_iter__49201(s__49202){
return (new cljs.core.LazySeq(null,(function (){
var s__49202__$1 = s__49202;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49202__$1);
if(temp__5735__auto__){
var s__49202__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49202__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49202__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49204 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49203 = (0);
while(true){
if((i__49203 < size__4528__auto__)){
var sh = cljs.core._nth(c__4527__auto__,i__49203);
cljs.core.chunk_append(b__49204,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.hallway,sh,true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coord),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)].join('')], null)));

var G__49304 = (i__49203 + (1));
i__49203 = G__49304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49204),shifting_sands$views$explored_room_$_iter__49201(cljs.core.chunk_rest(s__49202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49204),null);
}
} else {
var sh = cljs.core.first(s__49202__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.hallway,sh,true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coord),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)].join('')], null)),shifting_sands$views$explored_room_$_iter__49201(cljs.core.rest(s__49202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword("shifting-sands.db","secret-hallways","shifting-sands.db/secret-hallways",-175534655).cljs$core$IFn$_invoke$arity$1(room_map));
})()], 0))], null);
});
shifting_sands.views.room_panel = (function shifting_sands$views$room_panel(coord,floor_map){
var room_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(floor_map,coord);
var G__49205 = new cljs.core.Keyword("shifting-sands.db","id","shifting-sands.db/id",-359794454).cljs$core$IFn$_invoke$arity$1(room_map);
var G__49205__$1 = (((G__49205 instanceof cljs.core.Keyword))?G__49205.fqn:null);
switch (G__49205__$1) {
case "shifting-sands.db/empty":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tile empty"], null)], null);

break;
case "shifting-sands.db/unexplored":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.unexplored_room,coord,room_map], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.explored_room,coord,room_map], null);

}
});
shifting_sands.views.map_column = (function shifting_sands$views$map_column(column_index,floor_map){
var map__49206 = shifting_sands.db.get_map_bounds(floor_map);
var map__49206__$1 = (((((!((map__49206 == null))))?(((((map__49206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49206):map__49206);
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49206__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4529__auto__ = (function shifting_sands$views$map_column_$_iter__49208(s__49209){
return (new cljs.core.LazySeq(null,(function (){
var s__49209__$1 = s__49209;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49209__$1);
if(temp__5735__auto__){
var s__49209__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49209__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49209__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49211 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49210 = (0);
while(true){
if((i__49210 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__49210);
cljs.core.chunk_append(b__49211,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.room_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_index,y], null),floor_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__49306 = (i__49210 + (1));
i__49210 = G__49306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49211),shifting_sands$views$map_column_$_iter__49208(cljs.core.chunk_rest(s__49209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49211),null);
}
} else {
var y = cljs.core.first(s__49209__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.room_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_index,y], null),floor_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),shifting_sands$views$map_column_$_iter__49208(cljs.core.rest(s__49209__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(max_y + (1))));
})()], null);
});
shifting_sands.views.map_panel = (function shifting_sands$views$map_panel(){
var floor_map = (function (){var G__49213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","floor-map","shifting-sands.subs/floor-map",-1975427998)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49213) : re_frame.core.subscribe.call(null,G__49213));
})();
var map__49212 = shifting_sands.db.get_map_bounds(cljs.core.deref(floor_map));
var map__49212__$1 = (((((!((map__49212 == null))))?(((((map__49212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49212):map__49212);
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49212__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49212__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4529__auto__ = (function shifting_sands$views$map_panel_$_iter__49215(s__49216){
return (new cljs.core.LazySeq(null,(function (){
var s__49216__$1 = s__49216;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49216__$1);
if(temp__5735__auto__){
var s__49216__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49216__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49216__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49218 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49217 = (0);
while(true){
if((i__49217 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__49217);
cljs.core.chunk_append(b__49218,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.map_column,x,cljs.core.deref(floor_map)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__49307 = (i__49217 + (1));
i__49217 = G__49307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49218),shifting_sands$views$map_panel_$_iter__49215(cljs.core.chunk_rest(s__49216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49218),null);
}
} else {
var x = cljs.core.first(s__49216__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.map_column,x,cljs.core.deref(floor_map)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),shifting_sands$views$map_panel_$_iter__49215(cljs.core.rest(s__49216__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_x,(max_x + (1))));
})()], null)], null);
});
shifting_sands.views.loot_button = (function shifting_sands$views$loot_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49219 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-loot","shifting-sands.events/generate-loot",-799189400)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49219) : re_frame.core.dispatch.call(null,G__49219));
})], null),"Loot!"], null);
});
shifting_sands.views.slugs_button = (function shifting_sands$views$slugs_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","show-slugs","shifting-sands.events/show-slugs",-192244856)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49220) : re_frame.core.dispatch.call(null,G__49220));
})], null),"Slugs"], null);
});
shifting_sands.views.slugs_header = (function shifting_sands$views$slugs_header(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"slug-row slug-header",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slug-left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Color"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px",new cljs.core.Keyword(null,"color","color",1011675173),shifting_sands.views.aqua_green], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slug-right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Effect"], null)], null)], null)], null);
});
shifting_sands.views.slug_row = (function shifting_sands$views$slug_row(idx,p__49221){
var vec__49222 = p__49221;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49222,(0),null);
var effect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49222,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),["slug-row ",((cljs.core.even_QMARK_(idx))?"slug-row-even":"slug-row-odd")].join(''),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slug-left"], null),color], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px",new cljs.core.Keyword(null,"color","color",1011675173),shifting_sands.views.aqua_green], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slug-right"], null),effect], null)], null)], null);
});
shifting_sands.views.slug_table = (function shifting_sands$views$slug_table(){
var show_slugs = (function (){var G__49225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","show-slugs","shifting-sands.subs/show-slugs",150572962)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49225) : re_frame.core.subscribe.call(null,G__49225));
})();
var slug_map = (function (){var G__49226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","slug-map","shifting-sands.subs/slug-map",524433076)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49226) : re_frame.core.subscribe.call(null,G__49226));
})();
if(cljs.core.truth_(cljs.core.deref(show_slugs))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"class","class",-2030961996),"slug-panel",new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
var G__49227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","hide-slugs","shifting-sands.events/hide-slugs",-31244748)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49227) : re_frame.core.dispatch.call(null,G__49227));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.slugs_header], null),(function (){var iter__4529__auto__ = (function shifting_sands$views$slug_table_$_iter__49228(s__49229){
return (new cljs.core.LazySeq(null,(function (){
var s__49229__$1 = s__49229;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49229__$1);
if(temp__5735__auto__){
var s__49229__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49229__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49229__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49231 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49230 = (0);
while(true){
if((i__49230 < size__4528__auto__)){
var vec__49232 = cljs.core._nth(c__4527__auto__,i__49230);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49232,(0),null);
var slug_mapping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49232,(1),null);
cljs.core.chunk_append(b__49231,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.slug_row,idx,slug_mapping], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__49308 = (i__49230 + (1));
i__49230 = G__49308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49231),shifting_sands$views$slug_table_$_iter__49228(cljs.core.chunk_rest(s__49229__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49231),null);
}
} else {
var vec__49235 = cljs.core.first(s__49229__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49235,(0),null);
var slug_mapping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49235,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.slug_row,idx,slug_mapping], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),shifting_sands$views$slug_table_$_iter__49228(cljs.core.rest(s__49229__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(slug_map)));
})()], null)], null)], null);
} else {
return null;
}
});
shifting_sands.views.generate_button = (function shifting_sands$views$generate_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","show-generate-dialog","shifting-sands.events/show-generate-dialog",-1200286217)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49238) : re_frame.core.dispatch.call(null,G__49238));
})], null),"Generate..."], null);
});
shifting_sands.views.history_button = (function shifting_sands$views$history_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","show-history","shifting-sands.events/show-history",-1062290337)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49239) : re_frame.core.dispatch.call(null,G__49239));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),"History"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-time-restore",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)], null);
});
shifting_sands.views.reset_button = (function shifting_sands$views$reset_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","show-reset-dialog","shifting-sands.events/show-reset-dialog",-1859694497)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49240) : re_frame.core.dispatch.call(null,G__49240));
})], null),"Reset All"], null);
});
shifting_sands.views.new_character_button = (function shifting_sands$views$new_character_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),shifting_sands.router.url_for(new cljs.core.Keyword(null,"new-character","new-character",1383210044)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button"], null),"New Character"], null);
});
shifting_sands.views.source_link = (function shifting_sands$views$source_link(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/brstf/shifting-sands",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-button"], null),"View Source",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-github",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)], null);
});
shifting_sands.views.button_overlay = (function shifting_sands$views$button_overlay(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"class","class",-2030961996),"button-container",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left-below","left-below",1290111351),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-menu",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582)], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"menu",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.loot_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.slugs_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.generate_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.history_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.new_character_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.reset_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.source_link], null)], null)], null)], null)], null);
});
shifting_sands.views.right_panel = (function shifting_sands$views$right_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"main-panel",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.map_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.button_overlay], null)], null)], null)], null);
});
shifting_sands.views.generate_options = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),idx,new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" - ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(shifting_sands.views.keyword__GT_display_str,p))], null);
}),shifting_sands.db.get_table_names.cljs$core$IFn$_invoke$arity$0());
shifting_sands.views.adv_map = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(-3),new cljs.core.Keyword(null,"label","label",1718410804),"[---]"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(-2),new cljs.core.Keyword(null,"label","label",1718410804),"[--]"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(-1),new cljs.core.Keyword(null,"label","label",1718410804),"[-]"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"label","label",1718410804),"None"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"label","label",1718410804),"[+]"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"label","label",1718410804),"[++]"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"value","value",305978217),(3),new cljs.core.Keyword(null,"label","label",1718410804),"[+++]"], null)], null);
shifting_sands.views.generate__GT_hiccup = (function shifting_sands$views$generate__GT_hiccup(p__49241){
var map__49242 = p__49241;
var map__49242__$1 = (((((!((map__49242 == null))))?(((((map__49242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49242):map__49242);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49242__$1,new cljs.core.Keyword("shifting-sands.db","name","shifting-sands.db/name",651493799));
var roll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49242__$1,new cljs.core.Keyword("shifting-sands.db","roll","shifting-sands.db/roll",1063037965));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49242__$1,new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),name], null):null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"montserrat"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),shifting_sands.views.text__GT_hiccup(description)], null)], null):null),(cljs.core.truth_(roll)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"montserrat"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),["Roll: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(roll)].join('')], null)], null):null)], null)], null);
});
shifting_sands.views.generate_dialog = (function shifting_sands$views$generate_dialog(generate_choice,advantage_choice){
var disable_button_QMARK_ = reagent.ratom.make_reaction((function (){
return (cljs.core.deref(generate_choice) == null);
}));
var generate_result = (function (){var G__49246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","generate-result","shifting-sands.subs/generate-result",-1171396099)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49246) : re_frame.core.subscribe.call(null,G__49246));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),shifting_sands.views.generate_options,new cljs.core.Keyword(null,"model","model",331153215),generate_choice,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49244_SHARP_){
return cljs.core.reset_BANG_(generate_choice,p1__49244_SHARP_);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select Object To Generate...",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"montserrat generate-dropdown"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-content","align-content",-990200349),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"10px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Advantage/Disadvantage:"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"montserrat"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),shifting_sands.views.adv_map,new cljs.core.Keyword(null,"model","model",331153215),advantage_choice,new cljs.core.Keyword(null,"class","class",-2030961996),"montserrat",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49245_SHARP_){
return cljs.core.reset_BANG_(advantage_choice,p1__49245_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Generate"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"120px"], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disable_button_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49247 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-generic","shifting-sands.events/generate-generic",-1930414738),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shifting_sands.views.generate_options,cljs.core.deref(generate_choice))),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shifting_sands.views.adv_map,cljs.core.deref(advantage_choice)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49247) : re_frame.core.dispatch.call(null,G__49247));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"montserrat button"], null)], null)], null),(cljs.core.truth_(cljs.core.deref(generate_result))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),shifting_sands.views.aqua_green,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null):null),(cljs.core.truth_(cljs.core.deref(generate_result))?shifting_sands.views.generate__GT_hiccup(cljs.core.deref(generate_result)):null)], null)], null);
});
shifting_sands.views.reset_dialog = (function shifting_sands$views$reset_dialog(){
var show_reset_dialog_QMARK_ = (function (){var G__49249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","show-reset-dialog?","shifting-sands.subs/show-reset-dialog?",165708062)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49249) : re_frame.core.subscribe.call(null,G__49249));
})();
var reset_slugs_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(cljs.core.truth_(cljs.core.deref(show_reset_dialog_QMARK_))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
var G__49250 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","hide-reset-dialog","shifting-sands.events/hide-reset-dialog",-1857372418)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49250) : re_frame.core.dispatch.call(null,G__49250));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-result"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Reset all floors and start a new generation?"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Reset slugs?"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),reset_slugs_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49248_SHARP_){
return cljs.core.reset_BANG_(reset_slugs_QMARK_,p1__49248_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Reset",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49251 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","reset-all","shifting-sands.events/reset-all",-1646479445),cljs.core.deref(reset_slugs_QMARK_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49251) : re_frame.core.dispatch.call(null,G__49251));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"button"], null)], null)], null)], null)], null)], null);
} else {
return null;
}
});
shifting_sands.views.history_dialog = (function shifting_sands$views$history_dialog(){
var history = (function (){var G__49252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","history","shifting-sands.subs/history",1054042185)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49252) : re_frame.core.subscribe.call(null,G__49252));
})();
var show_history_QMARK_ = (function (){var G__49253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","show-history?","shifting-sands.subs/show-history?",-1744834138)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49253) : re_frame.core.subscribe.call(null,G__49253));
})();
var formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd hh:mm");
if(cljs.core.truth_(cljs.core.deref(show_history_QMARK_))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"class","class",-2030961996),"history-panel",new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
var G__49254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","hide-history","shifting-sands.events/hide-history",1277451013)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49254) : re_frame.core.dispatch.call(null,G__49254));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"history"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Timestamp"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Floor"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Room",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Index"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Description"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4529__auto__ = (function shifting_sands$views$history_dialog_$_iter__49255(s__49256){
return (new cljs.core.LazySeq(null,(function (){
var s__49256__$1 = s__49256;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49256__$1);
if(temp__5735__auto__){
var s__49256__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49256__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49256__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49258 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49257 = (0);
while(true){
if((i__49257 < size__4528__auto__)){
var vec__49259 = cljs.core._nth(c__4527__auto__,i__49257);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(0),null);
var map__49262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(1),null);
var map__49262__$1 = (((((!((map__49262 == null))))?(((((map__49262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49262):map__49262);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49262__$1,new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418));
var room_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49262__$1,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49262__$1,new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49262__$1,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724));
cljs.core.chunk_append(b__49258,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs_time.format.unparse_local_date(formatter,cljs_time.core.to_default_time_zone(time))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),shifting_sands.views.keyword__GT_display_str(floor)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(room_index)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),shifting_sands.views.text__GT_hiccup(description)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__49309 = (i__49257 + (1));
i__49257 = G__49309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49258),shifting_sands$views$history_dialog_$_iter__49255(cljs.core.chunk_rest(s__49256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49258),null);
}
} else {
var vec__49264 = cljs.core.first(s__49256__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49264,(0),null);
var map__49267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49264,(1),null);
var map__49267__$1 = (((((!((map__49267 == null))))?(((((map__49267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49267):map__49267);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49267__$1,new cljs.core.Keyword("shifting-sands.db","description","shifting-sands.db/description",1812637418));
var room_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49267__$1,new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676));
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49267__$1,new cljs.core.Keyword("shifting-sands.db","floor","shifting-sands.db/floor",895446371));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49267__$1,new cljs.core.Keyword("shifting-sands.db","time","shifting-sands.db/time",-1788267724));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs_time.format.unparse_local_date(formatter,cljs_time.core.to_default_time_zone(time))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),shifting_sands.views.keyword__GT_display_str(floor)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(room_index)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),shifting_sands.views.text__GT_hiccup(description)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),shifting_sands$views$history_dialog_$_iter__49255(cljs.core.rest(s__49256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.list),cljs.core.deref(history)));
})()], null)], null)], null);
} else {
return null;
}
});
shifting_sands.views.shifting_sands_panel = (function shifting_sands$views$shifting_sands_panel(){
var modal_result = (function (){var G__49269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","modal-result","shifting-sands.subs/modal-result",746982052)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49269) : re_frame.core.subscribe.call(null,G__49269));
})();
var show_generate_QMARK_ = (function (){var G__49270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","show-generate-dialog?","shifting-sands.subs/show-generate-dialog?",1576024156)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49270) : re_frame.core.subscribe.call(null,G__49270));
})();
var generate_choice = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var advantage_choice = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((3));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row-reverse"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.sidebar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"color","color",1011675173),shifting_sands.views.aqua_green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.right_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.slug_table], null),(cljs.core.truth_(cljs.core.deref(show_generate_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
cljs.core.reset_BANG_(generate_choice,(0));

cljs.core.reset_BANG_(advantage_choice,(3));

var G__49271_49310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","clear-generate-result","shifting-sands.events/clear-generate-result",928693428)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49271_49310) : re_frame.core.dispatch.call(null,G__49271_49310));

var G__49272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","hide-generate-dialog","shifting-sands.events/hide-generate-dialog",-1582299819)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49272) : re_frame.core.dispatch.call(null,G__49272));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.generate_dialog,generate_choice,advantage_choice], null)], null):null),(cljs.core.truth_(cljs.core.deref(modal_result))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
var G__49273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","clear-modal-result","shifting-sands.events/clear-modal-result",1975660596)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49273) : re_frame.core.dispatch.call(null,G__49273));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-result"], null),shifting_sands.views.text__GT_hiccup(cljs.core.deref(modal_result))], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.reset_dialog], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.history_dialog], null)], null)], null)], null)], null);
});
shifting_sands.views.starting_character_keys = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","hp","shifting-sands.db/hp",-497986973)], null),shifting_sands.db.character_traits,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shifting_sands.db.starting_equipment], 0));
shifting_sands.views.bonus__GT_ability_str = (function shifting_sands$views$bonus__GT_ability_str(b){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) + b)),"/+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
});
shifting_sands.views.stat_row = (function shifting_sands$views$stat_row(stat,p__49274){
var vec__49275 = p__49274;
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275,(0),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275,(1),null);
var s3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat-left mono"], null),cljs.core.name(stat)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat-right montserrat"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat-right montserrat"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat-right montserrat"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s3)], null)], null)], null);
});
shifting_sands.views.stat_block = (function shifting_sands$views$stat_block(stats){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"character-right",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-contents","align-contents",-1607000562),"center"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat-left stats-header"], null),"Prev ad:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat-right stats-header"], null),"11-14"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat-right stats-header"], null),"15-18"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat-right stats-header"], null),"19-20"], null)], null)], null),(function (){var iter__4529__auto__ = (function shifting_sands$views$stat_block_$_iter__49278(s__49279){
return (new cljs.core.LazySeq(null,(function (){
var s__49279__$1 = s__49279;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49279__$1);
if(temp__5735__auto__){
var s__49279__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49279__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49279__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49281 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49280 = (0);
while(true){
if((i__49280 < size__4528__auto__)){
var stat = cljs.core._nth(c__4527__auto__,i__49280);
cljs.core.chunk_append(b__49281,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.stat_row,stat,cljs.core.get.cljs$core$IFn$_invoke$arity$2(stats,stat)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stat)], null)));

var G__49311 = (i__49280 + (1));
i__49280 = G__49311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49281),shifting_sands$views$stat_block_$_iter__49278(cljs.core.chunk_rest(s__49279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49281),null);
}
} else {
var stat = cljs.core.first(s__49279__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.stat_row,stat,cljs.core.get.cljs$core$IFn$_invoke$arity$2(stats,stat)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stat)], null)),shifting_sands$views$stat_block_$_iter__49278(cljs.core.rest(s__49279__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(shifting_sands.db.stats);
})()], null)], null)], null);
});
shifting_sands.views.stats_row = (function shifting_sands$views$stats_row(stats){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"character-odd",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mono character-left"], null),"Ability Bonuses"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px",new cljs.core.Keyword(null,"color","color",1011675173),shifting_sands.views.aqua_green], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.stat_block,stats], null)], null)], null);
});
shifting_sands.views.character_row = (function shifting_sands$views$character_row(even_QMARK_,character,k){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(even_QMARK_)?"character-even":"character-odd"),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mono character-left"], null),shifting_sands.views.keyword__GT_display_str(k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px",new cljs.core.Keyword(null,"color","color",1011675173),shifting_sands.views.aqua_green], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"montserrat character-right"], null),shifting_sands.views.text__GT_hiccup(cljs.core.get.cljs$core$IFn$_invoke$arity$2(character,k))], null)], null)], null);
});
shifting_sands.views.new_character_panel = (function shifting_sands$views$new_character_panel(){
var character = cljs.core.deref((function (){var G__49282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","new-character","shifting-sands.subs/new-character",-2098433893)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49282) : re_frame.core.subscribe.call(null,G__49282));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"character-header",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-contents","align-contents",-1607000562),"center"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"class","class",-2030961996),"character-header",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"New Character"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"class","class",-2030961996),"button",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center"], null),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-refresh",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.events","generate-new-character","shifting-sands.events/generate-new-character",-115443267)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49283) : re_frame.core.dispatch.call(null,G__49283));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.stats_row,new cljs.core.Keyword("shifting-sands.db","stats","shifting-sands.db/stats",1010197387).cljs$core$IFn$_invoke$arity$1(character)], null),(function (){var iter__4529__auto__ = (function shifting_sands$views$new_character_panel_$_iter__49284(s__49285){
return (new cljs.core.LazySeq(null,(function (){
var s__49285__$1 = s__49285;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49285__$1);
if(temp__5735__auto__){
var s__49285__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49285__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49285__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49287 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49286 = (0);
while(true){
if((i__49286 < size__4528__auto__)){
var vec__49288 = cljs.core._nth(c__4527__auto__,i__49286);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49288,(0),null);
var trait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49288,(1),null);
cljs.core.chunk_append(b__49287,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.character_row,cljs.core.even_QMARK_(idx),character,trait], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__49312 = (i__49286 + (1));
i__49286 = G__49312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49287),shifting_sands$views$new_character_panel_$_iter__49284(cljs.core.chunk_rest(s__49285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49287),null);
}
} else {
var vec__49291 = cljs.core.first(s__49285__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49291,(0),null);
var trait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49291,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.character_row,cljs.core.even_QMARK_(idx),character,trait], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),shifting_sands$views$new_character_panel_$_iter__49284(cljs.core.rest(s__49285__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,shifting_sands.views.starting_character_keys));
})()], null)], null);
});
shifting_sands.views.not_found_panel = (function shifting_sands$views$not_found_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"class","class",-2030961996),"mono",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px"], null),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),"Not Found"], null)], null)], null);
});
shifting_sands.views.pages = (function shifting_sands$views$pages(page_name){
var G__49294 = page_name;
var G__49294__$1 = (((G__49294 instanceof cljs.core.Keyword))?G__49294.fqn:null);
switch (G__49294__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.shifting_sands_panel], null);

break;
case "new-character":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.new_character_panel], null);

break;
case "not-found":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shifting_sands.views.not_found_panel], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49294__$1)].join('')));

}
});
shifting_sands.views.main_panel = (function shifting_sands$views$main_panel(){
var active_page = cljs.core.deref((function (){var G__49295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.subs","active-page","shifting-sands.subs/active-page",613255283)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49295) : re_frame.core.subscribe.call(null,G__49295));
})());
return shifting_sands.views.pages(active_page);
});

//# sourceMappingURL=shifting_sands.views.js.map

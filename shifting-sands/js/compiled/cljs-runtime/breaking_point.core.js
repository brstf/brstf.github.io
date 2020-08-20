goog.provide('breaking_point.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__48563){
var vec__48564 = p__48563;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48564,(0),null);
var map__48567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48564,(1),null);
var map__48567__$1 = (((((!((map__48567 == null))))?(((((map__48567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48567):map__48567);
var opts = map__48567__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48567__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48567__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
var G__48574_48731 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
var G__48575_48732 = (function (coeffect){
var screen_width = (function (){var or__4126__auto__ = (function (){var G__48577 = window;
if((G__48577 == null)){
return null;
} else {
return G__48577.innerWidth;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__48589 = document;
var G__48589__$1 = (((G__48589 == null))?null:G__48589.documentElement);
if((G__48589__$1 == null)){
return null;
} else {
return G__48589__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var G__48590 = document;
var G__48590__$1 = (((G__48590 == null))?null:G__48590.body);
if((G__48590__$1 == null)){
return null;
} else {
return G__48590__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__4126__auto__ = (function (){var G__48592 = window;
if((G__48592 == null)){
return null;
} else {
return G__48592.innerHeight;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__48594 = document;
var G__48594__$1 = (((G__48594 == null))?null:G__48594.documentElement);
if((G__48594__$1 == null)){
return null;
} else {
return G__48594__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var G__48595 = document;
var G__48595__$1 = (((G__48595 == null))?null:G__48595.body);
if((G__48595__$1 == null)){
return null;
} else {
return G__48595__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height], 0));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__48574_48731,G__48575_48732) : re_frame.core.reg_cofx.call(null,G__48574_48731,G__48575_48732));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__48603,_){
var map__48604 = p__48603;
var map__48604__$1 = (((((!((map__48604 == null))))?(((((map__48604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48604):map__48604);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814)) : re_frame.core.inject_cofx.call(null,new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814)))], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__48610){
var vec__48611 = p__48610;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48611,(0),null);
var debounce_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48611,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("breaking-point.core","calcaulate-width-after-resize","breaking-point.core/calcaulate-width-after-resize",1288445004),new cljs.core.Keyword(null,"timeout","timeout",-318625318),debounce_ms,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null)], null)], null)], null);
}));
breaking_point.core.get_screen_width = (function breaking_point$core$get_screen_width(db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null));
});
breaking_point.core.get_screen_height = (function breaking_point$core$get_screen_height(db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null));
});
breaking_point.core.__GT_get_screen = (function breaking_point$core$__GT_get_screen(breakpoints){
return (function breaking_point$core$__GT_get_screen_$_get_screen(screen_width,_){
if(cljs.core.truth_(screen_width)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev_breakpoint,p__48617){
var vec__48618 = p__48617;
var screen_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48618,(0),null);
var breakpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48618,(1),null);
if((((breakpoint == null)) || ((((screen_width < breakpoint)) && ((screen_width >= prev_breakpoint)))))){
return cljs.core.reduced(screen_key);
} else {
return breakpoint;
}
}),(0),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),breakpoints));
} else {
return null;
}
});
});
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__48624,_){
var vec__48625 = p__48624;
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48625,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48625,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360),breaking_point.core.get_screen_width) : re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360),breaking_point.core.get_screen_width));

(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666),breaking_point.core.get_screen_height) : re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666),breaking_point.core.get_screen_height));

var G__48635_48764 = new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405);
var G__48636_48765 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__48637_48766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__48638_48767 = breaking_point.core.__GT_get_screen(breakpoints);
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__48635_48764,G__48636_48765,G__48637_48766,G__48638_48767) : re_frame.core.reg_sub.call(null,G__48635_48764,G__48636_48765,G__48637_48766,G__48638_48767));

var G__48641_48771 = new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812);
var G__48642_48772 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__48643_48773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__48644_48774 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__48645_48775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null);
var G__48646_48776 = breaking_point.core.get_orientation;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__48641_48771,G__48642_48772,G__48643_48773,G__48644_48774,G__48645_48775,G__48646_48776) : re_frame.core.reg_sub.call(null,G__48641_48771,G__48642_48772,G__48643_48773,G__48644_48774,G__48645_48775,G__48646_48776));

var G__48655_48777 = new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960);
var G__48656_48778 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__48657_48779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__48658_48780 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__48655_48777,G__48656_48778,G__48657_48779,G__48658_48780) : re_frame.core.reg_sub.call(null,G__48655_48777,G__48656_48778,G__48657_48779,G__48658_48780));

var G__48662_48781 = new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059);
var G__48663_48782 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__48664_48783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__48665_48784 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__48662_48781,G__48663_48782,G__48664_48783,G__48665_48784) : re_frame.core.reg_sub.call(null,G__48662_48781,G__48663_48782,G__48664_48783,G__48665_48784));

var screen_keys = (function (){var G__48666 = breakpoints;
var G__48666__$1 = (((G__48666 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__48666));
var G__48666__$2 = (((G__48666__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48669){
var vec__48670 = p__48669;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48670,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48670,(1),null);
return cljs.core.even_QMARK_(i);
}),G__48666__$1));
if((G__48666__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__48666__$2);
}
})();
var seq__48675 = cljs.core.seq(screen_keys);
var chunk__48677 = null;
var count__48678 = (0);
var i__48679 = (0);
while(true){
if((i__48679 < count__48678)){
var screen_key = chunk__48677.cljs$core$IIndexed$_nth$arity$2(null,i__48679);
var G__48703_48785 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__48704_48786 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__48705_48787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__48706_48788 = ((function (seq__48675,chunk__48677,count__48678,i__48679,G__48703_48785,G__48704_48786,G__48705_48787,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__48675,chunk__48677,count__48678,i__48679,G__48703_48785,G__48704_48786,G__48705_48787,screen_key,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__48703_48785,G__48704_48786,G__48705_48787,G__48706_48788) : re_frame.core.reg_sub.call(null,G__48703_48785,G__48704_48786,G__48705_48787,G__48706_48788));


var G__48792 = seq__48675;
var G__48793 = chunk__48677;
var G__48794 = count__48678;
var G__48795 = (i__48679 + (1));
seq__48675 = G__48792;
chunk__48677 = G__48793;
count__48678 = G__48794;
i__48679 = G__48795;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48675);
if(temp__5735__auto__){
var seq__48675__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48675__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48675__$1);
var G__48796 = cljs.core.chunk_rest(seq__48675__$1);
var G__48797 = c__4556__auto__;
var G__48798 = cljs.core.count(c__4556__auto__);
var G__48799 = (0);
seq__48675 = G__48796;
chunk__48677 = G__48797;
count__48678 = G__48798;
i__48679 = G__48799;
continue;
} else {
var screen_key = cljs.core.first(seq__48675__$1);
var G__48711_48800 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__48712_48801 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__48713_48802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__48714_48803 = ((function (seq__48675,chunk__48677,count__48678,i__48679,G__48711_48800,G__48712_48801,G__48713_48802,screen_key,seq__48675__$1,temp__5735__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__48675,chunk__48677,count__48678,i__48679,G__48711_48800,G__48712_48801,G__48713_48802,screen_key,seq__48675__$1,temp__5735__auto__,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__48711_48800,G__48712_48801,G__48713_48802,G__48714_48803) : re_frame.core.reg_sub.call(null,G__48711_48800,G__48712_48801,G__48713_48802,G__48714_48803));


var G__48804 = cljs.core.next(seq__48675__$1);
var G__48805 = null;
var G__48806 = (0);
var G__48807 = (0);
seq__48675 = G__48804;
chunk__48677 = G__48805;
count__48678 = G__48806;
i__48679 = G__48807;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__48718){
var map__48719 = p__48718;
var map__48719__$1 = (((((!((map__48719 == null))))?(((((map__48719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48719):map__48719);
var opts = map__48719__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48719__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48719__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs(breakpoints);

var G__48726_48811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48726_48811) : re_frame.core.dispatch.call(null,G__48726_48811));

return window.addEventListener("resize",(function (){
if(cljs.core.truth_(debounce_ms)){
var G__48728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48728) : re_frame.core.dispatch.call(null,G__48728));
} else {
var G__48729 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48729) : re_frame.core.dispatch.call(null,G__48729));
}
}),true);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),breaking_point.core.set_breakpoints) : re_frame.core.reg_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),breaking_point.core.set_breakpoints));

//# sourceMappingURL=breaking_point.core.js.map

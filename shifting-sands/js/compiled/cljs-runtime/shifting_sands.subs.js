goog.provide('shifting_sands.subs');
var G__60680_60787 = new cljs.core.Keyword("shifting-sands.subs","name","shifting-sands.subs/name",374965322);
var G__60681_60788 = (function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60680_60787,G__60681_60788) : re_frame.core.reg_sub.call(null,G__60680_60787,G__60681_60788));
var G__60682_60793 = new cljs.core.Keyword("shifting-sands.subs","current-floor","shifting-sands.subs/current-floor",1826742669);
var G__60683_60794 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60682_60793,G__60683_60794) : re_frame.core.reg_sub.call(null,G__60682_60793,G__60683_60794));
var G__60684_60795 = new cljs.core.Keyword("shifting-sands.subs","notes","shifting-sands.subs/notes",-1852135338);
var G__60685_60796 = (function (p__60686,p__60687){
var map__60688 = p__60686;
var map__60688__$1 = (((((!((map__60688 == null))))?(((((map__60688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60688):map__60688);
var db = map__60688__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60688__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__60689 = p__60687;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60689,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60689,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),"");
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60684_60795,G__60685_60796) : re_frame.core.reg_sub.call(null,G__60684_60795,G__60685_60796));
var G__60701_60801 = new cljs.core.Keyword("shifting-sands.subs","exit-index","shifting-sands.subs/exit-index",2138468010);
var G__60702_60802 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("shifting-sands.db","exit-index","shifting-sands.db/exit-index",-1322124067)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60701_60801,G__60702_60802) : re_frame.core.reg_sub.call(null,G__60701_60801,G__60702_60802));
/**
 * Returns a map of coord --> unexplored room for coords adjacent to the
 * given room
 */
shifting_sands.subs.room__GT_adjacent_unexplored = (function shifting_sands$subs$room__GT_adjacent_unexplored(coord,room){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60704_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.second(p1__60704_SHARP_)],[cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.db","unexplored","shifting-sands.db/unexplored",65492241).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms),new cljs.core.Keyword("shifting-sands.db","hallways","shifting-sands.db/hallways",185532064),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60705 = cljs.core.first(p1__60704_SHARP_);
return (shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1(G__60705) : shifting_sands.db.opposite_dir.call(null,G__60705));
})()], null))]);
}),shifting_sands.db.adjacent_coords(coord,room)));
});
shifting_sands.subs.merge_unexplored_rooms = (function shifting_sands$subs$merge_unexplored_rooms(r1,r2){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (v1,v2){
if(cljs.core.coll_QMARK_(v1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(v1,v2));
} else {
return v1;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r1,r2], 0));
});
shifting_sands.subs.add_unexplored_rooms = (function shifting_sands$subs$add_unexplored_rooms(floor_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,shifting_sands.subs.merge_unexplored_rooms,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,shifting_sands.subs.room__GT_adjacent_unexplored),floor_map)),floor_map], 0));
});
shifting_sands.subs.add_empty_rooms = (function shifting_sands$subs$add_empty_rooms(floor_map){
var map__60707 = shifting_sands.db.get_map_bounds(floor_map);
var map__60707__$1 = (((((!((map__60707 == null))))?(((((map__60707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60707):map__60707);
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60707__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60707__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60707__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60707__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4529__auto__ = (function shifting_sands$subs$add_empty_rooms_$_iter__60710(s__60711){
return (new cljs.core.LazySeq(null,(function (){
var s__60711__$1 = s__60711;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60711__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__60711__$1,x,xs__6292__auto__,temp__5735__auto__,map__60707,map__60707__$1,max_x,min_x,max_y,min_y){
return (function shifting_sands$subs$add_empty_rooms_$_iter__60710_$_iter__60712(s__60713){
return (new cljs.core.LazySeq(null,((function (s__60711__$1,x,xs__6292__auto__,temp__5735__auto__,map__60707,map__60707__$1,max_x,min_x,max_y,min_y){
return (function (){
var s__60713__$1 = s__60713;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60713__$1);
if(temp__5735__auto____$1){
var s__60713__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60713__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60713__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60715 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60714 = (0);
while(true){
if((i__60714 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__60714);
cljs.core.chunk_append(b__60715,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]));

var G__60804 = (i__60714 + (1));
i__60714 = G__60804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60715),shifting_sands$subs$add_empty_rooms_$_iter__60710_$_iter__60712(cljs.core.chunk_rest(s__60713__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60715),null);
}
} else {
var y = cljs.core.first(s__60713__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]),shifting_sands$subs$add_empty_rooms_$_iter__60710_$_iter__60712(cljs.core.rest(s__60713__$2)));
}
} else {
return null;
}
break;
}
});})(s__60711__$1,x,xs__6292__auto__,temp__5735__auto__,map__60707,map__60707__$1,max_x,min_x,max_y,min_y))
,null,null));
});})(s__60711__$1,x,xs__6292__auto__,temp__5735__auto__,map__60707,map__60707__$1,max_x,min_x,max_y,min_y))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_y,(max_y + (1)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shifting_sands$subs$add_empty_rooms_$_iter__60710(cljs.core.rest(s__60711__$1)));
} else {
var G__60805 = cljs.core.rest(s__60711__$1);
s__60711__$1 = G__60805;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_x,(max_x + (1))));
})()),floor_map], 0));
});
var G__60724_60806 = new cljs.core.Keyword("shifting-sands.subs","floor-map","shifting-sands.subs/floor-map",-1975427998);
var G__60725_60807 = (function (p__60727){
var map__60728 = p__60727;
var map__60728__$1 = (((((!((map__60728 == null))))?(((((map__60728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60728):map__60728);
var db = map__60728__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return shifting_sands.subs.add_empty_rooms(shifting_sands.subs.add_unexplored_rooms(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60724_60806,G__60725_60807) : re_frame.core.reg_sub.call(null,G__60724_60806,G__60725_60807));
var G__60731_60808 = new cljs.core.Keyword("shifting-sands.subs","room-list","shifting-sands.subs/room-list",-27047156);
var G__60732_60809 = (function (p__60733){
var map__60734 = p__60733;
var map__60734__$1 = (((((!((map__60734 == null))))?(((((map__60734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60734):map__60734);
var db = map__60734__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.vals(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60731_60808,G__60732_60809) : re_frame.core.reg_sub.call(null,G__60731_60808,G__60732_60809));
var G__60740_60810 = new cljs.core.Keyword("shifting-sands.subs","modal-result","shifting-sands.subs/modal-result",746982052);
var G__60741_60811 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60740_60810,G__60741_60811) : re_frame.core.reg_sub.call(null,G__60740_60810,G__60741_60811));
var G__60742_60812 = new cljs.core.Keyword("shifting-sands.subs","slug-map","shifting-sands.subs/slug-map",524433076);
var G__60743_60813 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","slugs","shifting-sands.db/slugs",2015224537).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60742_60812,G__60743_60813) : re_frame.core.reg_sub.call(null,G__60742_60812,G__60743_60813));
var G__60744_60814 = new cljs.core.Keyword("shifting-sands.subs","show-slugs","shifting-sands.subs/show-slugs",150572962);
var G__60745_60815 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60744_60814,G__60745_60815) : re_frame.core.reg_sub.call(null,G__60744_60814,G__60745_60815));
var G__60746_60816 = new cljs.core.Keyword("shifting-sands.subs","show-generate-dialog?","shifting-sands.subs/show-generate-dialog?",1576024156);
var G__60747_60817 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60746_60816,G__60747_60817) : re_frame.core.reg_sub.call(null,G__60746_60816,G__60747_60817));
var G__60751_60818 = new cljs.core.Keyword("shifting-sands.subs","re-pressed-example","shifting-sands.subs/re-pressed-example",497712309);
var G__60752_60819 = (function (db,_){
return new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60751_60818,G__60752_60819) : re_frame.core.reg_sub.call(null,G__60751_60818,G__60752_60819));
var G__60753_60823 = new cljs.core.Keyword("shifting-sands.subs","generate-result","shifting-sands.subs/generate-result",-1171396099);
var G__60754_60824 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60753_60823,G__60754_60824) : re_frame.core.reg_sub.call(null,G__60753_60823,G__60754_60824));
var G__60756_60825 = new cljs.core.Keyword("shifting-sands.subs","show-reset-dialog?","shifting-sands.subs/show-reset-dialog?",165708062);
var G__60757_60826 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60756_60825,G__60757_60826) : re_frame.core.reg_sub.call(null,G__60756_60825,G__60757_60826));
var G__60761_60827 = new cljs.core.Keyword("shifting-sands.subs","history","shifting-sands.subs/history",1054042185);
var G__60762_60828 = (function (db){
return cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60761_60827,G__60762_60828) : re_frame.core.reg_sub.call(null,G__60761_60827,G__60762_60828));
var G__60764_60829 = new cljs.core.Keyword("shifting-sands.subs","show-history?","shifting-sands.subs/show-history?",-1744834138);
var G__60765_60830 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60764_60829,G__60765_60830) : re_frame.core.reg_sub.call(null,G__60764_60829,G__60765_60830));
var G__60766_60831 = new cljs.core.Keyword("shifting-sands.subs","room-adv","shifting-sands.subs/room-adv",-742139293);
var G__60767_60832 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60766_60831,G__60767_60832) : re_frame.core.reg_sub.call(null,G__60766_60831,G__60767_60832));
var G__60768_60833 = new cljs.core.Keyword("shifting-sands.subs","showing-coord","shifting-sands.subs/showing-coord",62780047);
var G__60769_60834 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60768_60833,G__60769_60834) : re_frame.core.reg_sub.call(null,G__60768_60833,G__60769_60834));
var G__60771_60835 = new cljs.core.Keyword("shifting-sands.subs","expanded-notes?","shifting-sands.subs/expanded-notes?",1720920143);
var G__60772_60836 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60771_60835,G__60772_60836) : re_frame.core.reg_sub.call(null,G__60771_60835,G__60772_60836));
var G__60776_60837 = new cljs.core.Keyword("shifting-sands.subs","current-room","shifting-sands.subs/current-room",-1429230466);
var G__60777_60838 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60776_60837,G__60777_60838) : re_frame.core.reg_sub.call(null,G__60776_60837,G__60777_60838));
var G__60782_60839 = new cljs.core.Keyword("shifting-sands.subs","active-page","shifting-sands.subs/active-page",613255283);
var G__60783_60840 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60782_60839,G__60783_60840) : re_frame.core.reg_sub.call(null,G__60782_60839,G__60783_60840));
var G__60785_60842 = new cljs.core.Keyword("shifting-sands.subs","new-character","shifting-sands.subs/new-character",-2098433893);
var G__60786_60843 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__60785_60842,G__60786_60843) : re_frame.core.reg_sub.call(null,G__60785_60842,G__60786_60843));

//# sourceMappingURL=shifting_sands.subs.js.map

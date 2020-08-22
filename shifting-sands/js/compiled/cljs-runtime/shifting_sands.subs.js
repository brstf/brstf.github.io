goog.provide('shifting_sands.subs');
var G__95547_95655 = new cljs.core.Keyword("shifting-sands.subs","name","shifting-sands.subs/name",374965322);
var G__95548_95656 = (function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95547_95655,G__95548_95656) : re_frame.core.reg_sub.call(null,G__95547_95655,G__95548_95656));
var G__95549_95657 = new cljs.core.Keyword("shifting-sands.subs","current-floor","shifting-sands.subs/current-floor",1826742669);
var G__95550_95658 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95549_95657,G__95550_95658) : re_frame.core.reg_sub.call(null,G__95549_95657,G__95550_95658));
var G__95551_95663 = new cljs.core.Keyword("shifting-sands.subs","notes","shifting-sands.subs/notes",-1852135338);
var G__95552_95664 = (function (p__95553,p__95554){
var map__95556 = p__95553;
var map__95556__$1 = (((((!((map__95556 == null))))?(((((map__95556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95556):map__95556);
var db = map__95556__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95556__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__95557 = p__95554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95557,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95557,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),"");
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95551_95663,G__95552_95664) : re_frame.core.reg_sub.call(null,G__95551_95663,G__95552_95664));
var G__95561_95669 = new cljs.core.Keyword("shifting-sands.subs","exit-index","shifting-sands.subs/exit-index",2138468010);
var G__95562_95670 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("shifting-sands.db","exit-index","shifting-sands.db/exit-index",-1322124067)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95561_95669,G__95562_95670) : re_frame.core.reg_sub.call(null,G__95561_95669,G__95562_95670));
/**
 * Returns a map of coord --> unexplored room for coords adjacent to the
 * given room
 */
shifting_sands.subs.room__GT_adjacent_unexplored = (function shifting_sands$subs$room__GT_adjacent_unexplored(coord,room){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95563_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.second(p1__95563_SHARP_)],[cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.db","unexplored","shifting-sands.db/unexplored",65492241).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms),new cljs.core.Keyword("shifting-sands.db","hallways","shifting-sands.db/hallways",185532064),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__95572 = cljs.core.first(p1__95563_SHARP_);
return (shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1(G__95572) : shifting_sands.db.opposite_dir.call(null,G__95572));
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
var map__95574 = shifting_sands.db.get_map_bounds(floor_map);
var map__95574__$1 = (((((!((map__95574 == null))))?(((((map__95574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95574):map__95574);
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95574__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95574__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95574__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95574__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4529__auto__ = (function shifting_sands$subs$add_empty_rooms_$_iter__95577(s__95578){
return (new cljs.core.LazySeq(null,(function (){
var s__95578__$1 = s__95578;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__95578__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__95578__$1,x,xs__6292__auto__,temp__5735__auto__,map__95574,map__95574__$1,max_x,min_x,max_y,min_y){
return (function shifting_sands$subs$add_empty_rooms_$_iter__95577_$_iter__95579(s__95580){
return (new cljs.core.LazySeq(null,((function (s__95578__$1,x,xs__6292__auto__,temp__5735__auto__,map__95574,map__95574__$1,max_x,min_x,max_y,min_y){
return (function (){
var s__95580__$1 = s__95580;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__95580__$1);
if(temp__5735__auto____$1){
var s__95580__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__95580__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__95580__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__95582 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__95581 = (0);
while(true){
if((i__95581 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__95581);
cljs.core.chunk_append(b__95582,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]));

var G__95672 = (i__95581 + (1));
i__95581 = G__95672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95582),shifting_sands$subs$add_empty_rooms_$_iter__95577_$_iter__95579(cljs.core.chunk_rest(s__95580__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95582),null);
}
} else {
var y = cljs.core.first(s__95580__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]),shifting_sands$subs$add_empty_rooms_$_iter__95577_$_iter__95579(cljs.core.rest(s__95580__$2)));
}
} else {
return null;
}
break;
}
});})(s__95578__$1,x,xs__6292__auto__,temp__5735__auto__,map__95574,map__95574__$1,max_x,min_x,max_y,min_y))
,null,null));
});})(s__95578__$1,x,xs__6292__auto__,temp__5735__auto__,map__95574,map__95574__$1,max_x,min_x,max_y,min_y))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_y,(max_y + (1)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shifting_sands$subs$add_empty_rooms_$_iter__95577(cljs.core.rest(s__95578__$1)));
} else {
var G__95673 = cljs.core.rest(s__95578__$1);
s__95578__$1 = G__95673;
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
var G__95592_95674 = new cljs.core.Keyword("shifting-sands.subs","floor-map","shifting-sands.subs/floor-map",-1975427998);
var G__95593_95675 = (function (p__95594){
var map__95595 = p__95594;
var map__95595__$1 = (((((!((map__95595 == null))))?(((((map__95595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95595):map__95595);
var db = map__95595__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95595__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return shifting_sands.subs.add_empty_rooms(shifting_sands.subs.add_unexplored_rooms(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95592_95674,G__95593_95675) : re_frame.core.reg_sub.call(null,G__95592_95674,G__95593_95675));
var G__95599_95676 = new cljs.core.Keyword("shifting-sands.subs","room-list","shifting-sands.subs/room-list",-27047156);
var G__95600_95677 = (function (p__95601){
var map__95602 = p__95601;
var map__95602__$1 = (((((!((map__95602 == null))))?(((((map__95602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95602):map__95602);
var db = map__95602__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95602__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.vals(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95599_95676,G__95600_95677) : re_frame.core.reg_sub.call(null,G__95599_95676,G__95600_95677));
var G__95607_95678 = new cljs.core.Keyword("shifting-sands.subs","modal-result","shifting-sands.subs/modal-result",746982052);
var G__95608_95679 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95607_95678,G__95608_95679) : re_frame.core.reg_sub.call(null,G__95607_95678,G__95608_95679));
var G__95610_95680 = new cljs.core.Keyword("shifting-sands.subs","slug-map","shifting-sands.subs/slug-map",524433076);
var G__95611_95681 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","slugs","shifting-sands.db/slugs",2015224537).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95610_95680,G__95611_95681) : re_frame.core.reg_sub.call(null,G__95610_95680,G__95611_95681));
var G__95612_95682 = new cljs.core.Keyword("shifting-sands.subs","show-slugs","shifting-sands.subs/show-slugs",150572962);
var G__95613_95683 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95612_95682,G__95613_95683) : re_frame.core.reg_sub.call(null,G__95612_95682,G__95613_95683));
var G__95614_95684 = new cljs.core.Keyword("shifting-sands.subs","show-generate-dialog?","shifting-sands.subs/show-generate-dialog?",1576024156);
var G__95615_95685 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95614_95684,G__95615_95685) : re_frame.core.reg_sub.call(null,G__95614_95684,G__95615_95685));
var G__95619_95689 = new cljs.core.Keyword("shifting-sands.subs","re-pressed-example","shifting-sands.subs/re-pressed-example",497712309);
var G__95620_95690 = (function (db,_){
return new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95619_95689,G__95620_95690) : re_frame.core.reg_sub.call(null,G__95619_95689,G__95620_95690));
var G__95621_95691 = new cljs.core.Keyword("shifting-sands.subs","generate-result","shifting-sands.subs/generate-result",-1171396099);
var G__95622_95692 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95621_95691,G__95622_95692) : re_frame.core.reg_sub.call(null,G__95621_95691,G__95622_95692));
var G__95623_95693 = new cljs.core.Keyword("shifting-sands.subs","show-reset-dialog?","shifting-sands.subs/show-reset-dialog?",165708062);
var G__95624_95694 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95623_95693,G__95624_95694) : re_frame.core.reg_sub.call(null,G__95623_95693,G__95624_95694));
var G__95629_95695 = new cljs.core.Keyword("shifting-sands.subs","history","shifting-sands.subs/history",1054042185);
var G__95630_95696 = (function (db){
return cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95629_95695,G__95630_95696) : re_frame.core.reg_sub.call(null,G__95629_95695,G__95630_95696));
var G__95632_95697 = new cljs.core.Keyword("shifting-sands.subs","show-history?","shifting-sands.subs/show-history?",-1744834138);
var G__95633_95698 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95632_95697,G__95633_95698) : re_frame.core.reg_sub.call(null,G__95632_95697,G__95633_95698));
var G__95634_95699 = new cljs.core.Keyword("shifting-sands.subs","room-adv","shifting-sands.subs/room-adv",-742139293);
var G__95635_95700 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95634_95699,G__95635_95700) : re_frame.core.reg_sub.call(null,G__95634_95699,G__95635_95700));
var G__95636_95701 = new cljs.core.Keyword("shifting-sands.subs","showing-coord","shifting-sands.subs/showing-coord",62780047);
var G__95637_95702 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95636_95701,G__95637_95702) : re_frame.core.reg_sub.call(null,G__95636_95701,G__95637_95702));
var G__95638_95703 = new cljs.core.Keyword("shifting-sands.subs","expanded-notes?","shifting-sands.subs/expanded-notes?",1720920143);
var G__95639_95704 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95638_95703,G__95639_95704) : re_frame.core.reg_sub.call(null,G__95638_95703,G__95639_95704));
var G__95644_95706 = new cljs.core.Keyword("shifting-sands.subs","current-room","shifting-sands.subs/current-room",-1429230466);
var G__95645_95707 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95644_95706,G__95645_95707) : re_frame.core.reg_sub.call(null,G__95644_95706,G__95645_95707));
var G__95646_95710 = new cljs.core.Keyword("shifting-sands.subs","active-page","shifting-sands.subs/active-page",613255283);
var G__95647_95711 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95646_95710,G__95647_95711) : re_frame.core.reg_sub.call(null,G__95646_95710,G__95647_95711));
var G__95652_95717 = new cljs.core.Keyword("shifting-sands.subs","new-character","shifting-sands.subs/new-character",-2098433893);
var G__95653_95718 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95652_95717,G__95653_95718) : re_frame.core.reg_sub.call(null,G__95652_95717,G__95653_95718));

//# sourceMappingURL=shifting_sands.subs.js.map

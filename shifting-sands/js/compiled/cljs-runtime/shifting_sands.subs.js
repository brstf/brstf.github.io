goog.provide('shifting_sands.subs');
var G__70352_70468 = new cljs.core.Keyword("shifting-sands.subs","name","shifting-sands.subs/name",374965322);
var G__70353_70469 = (function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70352_70468,G__70353_70469) : re_frame.core.reg_sub.call(null,G__70352_70468,G__70353_70469));
var G__70354_70470 = new cljs.core.Keyword("shifting-sands.subs","current-floor","shifting-sands.subs/current-floor",1826742669);
var G__70355_70471 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70354_70470,G__70355_70471) : re_frame.core.reg_sub.call(null,G__70354_70470,G__70355_70471));
var G__70356_70473 = new cljs.core.Keyword("shifting-sands.subs","notes","shifting-sands.subs/notes",-1852135338);
var G__70357_70474 = (function (p__70358,p__70359){
var map__70360 = p__70358;
var map__70360__$1 = (((((!((map__70360 == null))))?(((((map__70360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70360):map__70360);
var db = map__70360__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70360__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__70361 = p__70359;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70361,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70361,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),"");
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70356_70473,G__70357_70474) : re_frame.core.reg_sub.call(null,G__70356_70473,G__70357_70474));
var G__70365_70475 = new cljs.core.Keyword("shifting-sands.subs","exit-index","shifting-sands.subs/exit-index",2138468010);
var G__70366_70476 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("shifting-sands.db","exit-index","shifting-sands.db/exit-index",-1322124067)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70365_70475,G__70366_70476) : re_frame.core.reg_sub.call(null,G__70365_70475,G__70366_70476));
/**
 * Returns a map of coord --> unexplored room for coords adjacent to the
 * given room
 */
shifting_sands.subs.room__GT_adjacent_unexplored = (function shifting_sands$subs$room__GT_adjacent_unexplored(coord,room){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70368_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.second(p1__70368_SHARP_)],[cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.db","unexplored","shifting-sands.db/unexplored",65492241).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms),new cljs.core.Keyword("shifting-sands.db","hallways","shifting-sands.db/hallways",185532064),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70377 = cljs.core.first(p1__70368_SHARP_);
return (shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1(G__70377) : shifting_sands.db.opposite_dir.call(null,G__70377));
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
var map__70390 = shifting_sands.db.get_map_bounds(floor_map);
var map__70390__$1 = (((((!((map__70390 == null))))?(((((map__70390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70390):map__70390);
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70390__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70390__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70390__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70390__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4529__auto__ = (function shifting_sands$subs$add_empty_rooms_$_iter__70393(s__70394){
return (new cljs.core.LazySeq(null,(function (){
var s__70394__$1 = s__70394;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__70394__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__70394__$1,x,xs__6292__auto__,temp__5735__auto__,map__70390,map__70390__$1,max_x,min_x,max_y,min_y){
return (function shifting_sands$subs$add_empty_rooms_$_iter__70393_$_iter__70395(s__70396){
return (new cljs.core.LazySeq(null,((function (s__70394__$1,x,xs__6292__auto__,temp__5735__auto__,map__70390,map__70390__$1,max_x,min_x,max_y,min_y){
return (function (){
var s__70396__$1 = s__70396;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__70396__$1);
if(temp__5735__auto____$1){
var s__70396__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70396__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__70396__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__70398 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__70397 = (0);
while(true){
if((i__70397 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__70397);
cljs.core.chunk_append(b__70398,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]));

var G__70477 = (i__70397 + (1));
i__70397 = G__70477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70398),shifting_sands$subs$add_empty_rooms_$_iter__70393_$_iter__70395(cljs.core.chunk_rest(s__70396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70398),null);
}
} else {
var y = cljs.core.first(s__70396__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]),shifting_sands$subs$add_empty_rooms_$_iter__70393_$_iter__70395(cljs.core.rest(s__70396__$2)));
}
} else {
return null;
}
break;
}
});})(s__70394__$1,x,xs__6292__auto__,temp__5735__auto__,map__70390,map__70390__$1,max_x,min_x,max_y,min_y))
,null,null));
});})(s__70394__$1,x,xs__6292__auto__,temp__5735__auto__,map__70390,map__70390__$1,max_x,min_x,max_y,min_y))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_y,(max_y + (1)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shifting_sands$subs$add_empty_rooms_$_iter__70393(cljs.core.rest(s__70394__$1)));
} else {
var G__70481 = cljs.core.rest(s__70394__$1);
s__70394__$1 = G__70481;
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
var G__70406_70482 = new cljs.core.Keyword("shifting-sands.subs","floor-map","shifting-sands.subs/floor-map",-1975427998);
var G__70407_70483 = (function (p__70408){
var map__70409 = p__70408;
var map__70409__$1 = (((((!((map__70409 == null))))?(((((map__70409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70409):map__70409);
var db = map__70409__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70409__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return shifting_sands.subs.add_empty_rooms(shifting_sands.subs.add_unexplored_rooms(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70406_70482,G__70407_70483) : re_frame.core.reg_sub.call(null,G__70406_70482,G__70407_70483));
var G__70415_70484 = new cljs.core.Keyword("shifting-sands.subs","room-list","shifting-sands.subs/room-list",-27047156);
var G__70416_70485 = (function (p__70418){
var map__70419 = p__70418;
var map__70419__$1 = (((((!((map__70419 == null))))?(((((map__70419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70419):map__70419);
var db = map__70419__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70419__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.vals(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70415_70484,G__70416_70485) : re_frame.core.reg_sub.call(null,G__70415_70484,G__70416_70485));
var G__70421_70486 = new cljs.core.Keyword("shifting-sands.subs","modal-result","shifting-sands.subs/modal-result",746982052);
var G__70422_70487 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70421_70486,G__70422_70487) : re_frame.core.reg_sub.call(null,G__70421_70486,G__70422_70487));
var G__70423_70489 = new cljs.core.Keyword("shifting-sands.subs","slug-map","shifting-sands.subs/slug-map",524433076);
var G__70424_70490 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","slugs","shifting-sands.db/slugs",2015224537).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70423_70489,G__70424_70490) : re_frame.core.reg_sub.call(null,G__70423_70489,G__70424_70490));
var G__70429_70491 = new cljs.core.Keyword("shifting-sands.subs","show-slugs","shifting-sands.subs/show-slugs",150572962);
var G__70430_70492 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70429_70491,G__70430_70492) : re_frame.core.reg_sub.call(null,G__70429_70491,G__70430_70492));
var G__70431_70495 = new cljs.core.Keyword("shifting-sands.subs","show-generate-dialog?","shifting-sands.subs/show-generate-dialog?",1576024156);
var G__70432_70496 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70431_70495,G__70432_70496) : re_frame.core.reg_sub.call(null,G__70431_70495,G__70432_70496));
var G__70437_70502 = new cljs.core.Keyword("shifting-sands.subs","re-pressed-example","shifting-sands.subs/re-pressed-example",497712309);
var G__70438_70503 = (function (db,_){
return new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70437_70502,G__70438_70503) : re_frame.core.reg_sub.call(null,G__70437_70502,G__70438_70503));
var G__70440_70504 = new cljs.core.Keyword("shifting-sands.subs","generate-result","shifting-sands.subs/generate-result",-1171396099);
var G__70441_70505 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70440_70504,G__70441_70505) : re_frame.core.reg_sub.call(null,G__70440_70504,G__70441_70505));
var G__70442_70506 = new cljs.core.Keyword("shifting-sands.subs","show-reset-dialog?","shifting-sands.subs/show-reset-dialog?",165708062);
var G__70443_70507 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70442_70506,G__70443_70507) : re_frame.core.reg_sub.call(null,G__70442_70506,G__70443_70507));
var G__70446_70508 = new cljs.core.Keyword("shifting-sands.subs","history","shifting-sands.subs/history",1054042185);
var G__70449_70509 = (function (db){
return cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70446_70508,G__70449_70509) : re_frame.core.reg_sub.call(null,G__70446_70508,G__70449_70509));
var G__70451_70510 = new cljs.core.Keyword("shifting-sands.subs","show-history?","shifting-sands.subs/show-history?",-1744834138);
var G__70452_70511 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70451_70510,G__70452_70511) : re_frame.core.reg_sub.call(null,G__70451_70510,G__70452_70511));
var G__70455_70512 = new cljs.core.Keyword("shifting-sands.subs","room-adv","shifting-sands.subs/room-adv",-742139293);
var G__70456_70513 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70455_70512,G__70456_70513) : re_frame.core.reg_sub.call(null,G__70455_70512,G__70456_70513));
var G__70458_70514 = new cljs.core.Keyword("shifting-sands.subs","showing-coord","shifting-sands.subs/showing-coord",62780047);
var G__70459_70515 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70458_70514,G__70459_70515) : re_frame.core.reg_sub.call(null,G__70458_70514,G__70459_70515));
var G__70460_70516 = new cljs.core.Keyword("shifting-sands.subs","expanded-notes?","shifting-sands.subs/expanded-notes?",1720920143);
var G__70461_70517 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70460_70516,G__70461_70517) : re_frame.core.reg_sub.call(null,G__70460_70516,G__70461_70517));
var G__70462_70518 = new cljs.core.Keyword("shifting-sands.subs","current-room","shifting-sands.subs/current-room",-1429230466);
var G__70463_70519 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70462_70518,G__70463_70519) : re_frame.core.reg_sub.call(null,G__70462_70518,G__70463_70519));
var G__70464_70520 = new cljs.core.Keyword("shifting-sands.subs","active-page","shifting-sands.subs/active-page",613255283);
var G__70465_70521 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70464_70520,G__70465_70521) : re_frame.core.reg_sub.call(null,G__70464_70520,G__70465_70521));
var G__70466_70522 = new cljs.core.Keyword("shifting-sands.subs","new-character","shifting-sands.subs/new-character",-2098433893);
var G__70467_70523 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__70466_70522,G__70467_70523) : re_frame.core.reg_sub.call(null,G__70466_70522,G__70467_70523));

//# sourceMappingURL=shifting_sands.subs.js.map

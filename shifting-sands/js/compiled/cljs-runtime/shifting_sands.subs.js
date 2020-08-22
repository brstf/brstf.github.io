goog.provide('shifting_sands.subs');
var G__72177_72275 = new cljs.core.Keyword("shifting-sands.subs","name","shifting-sands.subs/name",374965322);
var G__72178_72276 = (function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72177_72275,G__72178_72276) : re_frame.core.reg_sub.call(null,G__72177_72275,G__72178_72276));
var G__72179_72281 = new cljs.core.Keyword("shifting-sands.subs","current-floor","shifting-sands.subs/current-floor",1826742669);
var G__72180_72282 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72179_72281,G__72180_72282) : re_frame.core.reg_sub.call(null,G__72179_72281,G__72180_72282));
var G__72181_72284 = new cljs.core.Keyword("shifting-sands.subs","notes","shifting-sands.subs/notes",-1852135338);
var G__72182_72285 = (function (p__72183,p__72184){
var map__72185 = p__72183;
var map__72185__$1 = (((((!((map__72185 == null))))?(((((map__72185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72185):map__72185);
var db = map__72185__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72185__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__72186 = p__72184;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72186,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72186,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),"");
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72181_72284,G__72182_72285) : re_frame.core.reg_sub.call(null,G__72181_72284,G__72182_72285));
var G__72190_72289 = new cljs.core.Keyword("shifting-sands.subs","exit-index","shifting-sands.subs/exit-index",2138468010);
var G__72191_72290 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("shifting-sands.db","exit-index","shifting-sands.db/exit-index",-1322124067)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72190_72289,G__72191_72290) : re_frame.core.reg_sub.call(null,G__72190_72289,G__72191_72290));
/**
 * Returns a map of coord --> unexplored room for coords adjacent to the
 * given room
 */
shifting_sands.subs.room__GT_adjacent_unexplored = (function shifting_sands$subs$room__GT_adjacent_unexplored(coord,room){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72192_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.second(p1__72192_SHARP_)],[cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.db","unexplored","shifting-sands.db/unexplored",65492241).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms),new cljs.core.Keyword("shifting-sands.db","hallways","shifting-sands.db/hallways",185532064),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72193 = cljs.core.first(p1__72192_SHARP_);
return (shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1(G__72193) : shifting_sands.db.opposite_dir.call(null,G__72193));
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
var map__72194 = shifting_sands.db.get_map_bounds(floor_map);
var map__72194__$1 = (((((!((map__72194 == null))))?(((((map__72194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72194):map__72194);
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72194__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72194__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72194__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72194__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4529__auto__ = (function shifting_sands$subs$add_empty_rooms_$_iter__72196(s__72197){
return (new cljs.core.LazySeq(null,(function (){
var s__72197__$1 = s__72197;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72197__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__72197__$1,x,xs__6292__auto__,temp__5735__auto__,map__72194,map__72194__$1,max_x,min_x,max_y,min_y){
return (function shifting_sands$subs$add_empty_rooms_$_iter__72196_$_iter__72198(s__72199){
return (new cljs.core.LazySeq(null,((function (s__72197__$1,x,xs__6292__auto__,temp__5735__auto__,map__72194,map__72194__$1,max_x,min_x,max_y,min_y){
return (function (){
var s__72199__$1 = s__72199;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__72199__$1);
if(temp__5735__auto____$1){
var s__72199__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__72199__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72199__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72201 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72200 = (0);
while(true){
if((i__72200 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__72200);
cljs.core.chunk_append(b__72201,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]));

var G__72292 = (i__72200 + (1));
i__72200 = G__72292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72201),shifting_sands$subs$add_empty_rooms_$_iter__72196_$_iter__72198(cljs.core.chunk_rest(s__72199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72201),null);
}
} else {
var y = cljs.core.first(s__72199__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]),shifting_sands$subs$add_empty_rooms_$_iter__72196_$_iter__72198(cljs.core.rest(s__72199__$2)));
}
} else {
return null;
}
break;
}
});})(s__72197__$1,x,xs__6292__auto__,temp__5735__auto__,map__72194,map__72194__$1,max_x,min_x,max_y,min_y))
,null,null));
});})(s__72197__$1,x,xs__6292__auto__,temp__5735__auto__,map__72194,map__72194__$1,max_x,min_x,max_y,min_y))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_y,(max_y + (1)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shifting_sands$subs$add_empty_rooms_$_iter__72196(cljs.core.rest(s__72197__$1)));
} else {
var G__72293 = cljs.core.rest(s__72197__$1);
s__72197__$1 = G__72293;
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
var G__72214_72294 = new cljs.core.Keyword("shifting-sands.subs","floor-map","shifting-sands.subs/floor-map",-1975427998);
var G__72215_72295 = (function (p__72216){
var map__72217 = p__72216;
var map__72217__$1 = (((((!((map__72217 == null))))?(((((map__72217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72217):map__72217);
var db = map__72217__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72217__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return shifting_sands.subs.add_empty_rooms(shifting_sands.subs.add_unexplored_rooms(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72214_72294,G__72215_72295) : re_frame.core.reg_sub.call(null,G__72214_72294,G__72215_72295));
var G__72219_72296 = new cljs.core.Keyword("shifting-sands.subs","room-list","shifting-sands.subs/room-list",-27047156);
var G__72220_72297 = (function (p__72221){
var map__72222 = p__72221;
var map__72222__$1 = (((((!((map__72222 == null))))?(((((map__72222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72222):map__72222);
var db = map__72222__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72222__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.vals(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72219_72296,G__72220_72297) : re_frame.core.reg_sub.call(null,G__72219_72296,G__72220_72297));
var G__72224_72298 = new cljs.core.Keyword("shifting-sands.subs","modal-result","shifting-sands.subs/modal-result",746982052);
var G__72225_72299 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72224_72298,G__72225_72299) : re_frame.core.reg_sub.call(null,G__72224_72298,G__72225_72299));
var G__72226_72300 = new cljs.core.Keyword("shifting-sands.subs","slug-map","shifting-sands.subs/slug-map",524433076);
var G__72227_72301 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","slugs","shifting-sands.db/slugs",2015224537).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72226_72300,G__72227_72301) : re_frame.core.reg_sub.call(null,G__72226_72300,G__72227_72301));
var G__72228_72302 = new cljs.core.Keyword("shifting-sands.subs","show-slugs","shifting-sands.subs/show-slugs",150572962);
var G__72229_72303 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72228_72302,G__72229_72303) : re_frame.core.reg_sub.call(null,G__72228_72302,G__72229_72303));
var G__72230_72304 = new cljs.core.Keyword("shifting-sands.subs","show-generate-dialog?","shifting-sands.subs/show-generate-dialog?",1576024156);
var G__72231_72305 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72230_72304,G__72231_72305) : re_frame.core.reg_sub.call(null,G__72230_72304,G__72231_72305));
var G__72232_72306 = new cljs.core.Keyword("shifting-sands.subs","re-pressed-example","shifting-sands.subs/re-pressed-example",497712309);
var G__72233_72307 = (function (db,_){
return new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72232_72306,G__72233_72307) : re_frame.core.reg_sub.call(null,G__72232_72306,G__72233_72307));
var G__72234_72308 = new cljs.core.Keyword("shifting-sands.subs","generate-result","shifting-sands.subs/generate-result",-1171396099);
var G__72235_72309 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72234_72308,G__72235_72309) : re_frame.core.reg_sub.call(null,G__72234_72308,G__72235_72309));
var G__72236_72310 = new cljs.core.Keyword("shifting-sands.subs","show-reset-dialog?","shifting-sands.subs/show-reset-dialog?",165708062);
var G__72237_72311 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72236_72310,G__72237_72311) : re_frame.core.reg_sub.call(null,G__72236_72310,G__72237_72311));
var G__72238_72312 = new cljs.core.Keyword("shifting-sands.subs","history","shifting-sands.subs/history",1054042185);
var G__72239_72313 = (function (db){
return cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72238_72312,G__72239_72313) : re_frame.core.reg_sub.call(null,G__72238_72312,G__72239_72313));
var G__72240_72314 = new cljs.core.Keyword("shifting-sands.subs","show-history?","shifting-sands.subs/show-history?",-1744834138);
var G__72241_72315 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72240_72314,G__72241_72315) : re_frame.core.reg_sub.call(null,G__72240_72314,G__72241_72315));
var G__72242_72316 = new cljs.core.Keyword("shifting-sands.subs","room-adv","shifting-sands.subs/room-adv",-742139293);
var G__72243_72317 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72242_72316,G__72243_72317) : re_frame.core.reg_sub.call(null,G__72242_72316,G__72243_72317));
var G__72265_72321 = new cljs.core.Keyword("shifting-sands.subs","showing-coord","shifting-sands.subs/showing-coord",62780047);
var G__72266_72322 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72265_72321,G__72266_72322) : re_frame.core.reg_sub.call(null,G__72265_72321,G__72266_72322));
var G__72267_72323 = new cljs.core.Keyword("shifting-sands.subs","expanded-notes?","shifting-sands.subs/expanded-notes?",1720920143);
var G__72268_72324 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72267_72323,G__72268_72324) : re_frame.core.reg_sub.call(null,G__72267_72323,G__72268_72324));
var G__72269_72325 = new cljs.core.Keyword("shifting-sands.subs","current-room","shifting-sands.subs/current-room",-1429230466);
var G__72270_72326 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72269_72325,G__72270_72326) : re_frame.core.reg_sub.call(null,G__72269_72325,G__72270_72326));
var G__72271_72327 = new cljs.core.Keyword("shifting-sands.subs","active-page","shifting-sands.subs/active-page",613255283);
var G__72272_72328 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72271_72327,G__72272_72328) : re_frame.core.reg_sub.call(null,G__72271_72327,G__72272_72328));
var G__72273_72329 = new cljs.core.Keyword("shifting-sands.subs","new-character","shifting-sands.subs/new-character",-2098433893);
var G__72274_72330 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__72273_72329,G__72274_72330) : re_frame.core.reg_sub.call(null,G__72273_72329,G__72274_72330));

//# sourceMappingURL=shifting_sands.subs.js.map

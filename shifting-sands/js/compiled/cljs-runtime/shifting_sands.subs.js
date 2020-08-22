goog.provide('shifting_sands.subs');
var G__69190_69297 = new cljs.core.Keyword("shifting-sands.subs","name","shifting-sands.subs/name",374965322);
var G__69191_69298 = (function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69190_69297,G__69191_69298) : re_frame.core.reg_sub.call(null,G__69190_69297,G__69191_69298));
var G__69192_69299 = new cljs.core.Keyword("shifting-sands.subs","current-floor","shifting-sands.subs/current-floor",1826742669);
var G__69193_69300 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69192_69299,G__69193_69300) : re_frame.core.reg_sub.call(null,G__69192_69299,G__69193_69300));
var G__69194_69301 = new cljs.core.Keyword("shifting-sands.subs","notes","shifting-sands.subs/notes",-1852135338);
var G__69195_69302 = (function (p__69196,p__69197){
var map__69198 = p__69196;
var map__69198__$1 = (((((!((map__69198 == null))))?(((((map__69198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69198):map__69198);
var db = map__69198__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69198__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var vec__69199 = p__69197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69199,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69199,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729),coord,new cljs.core.Keyword("shifting-sands.db","notes","shifting-sands.db/notes",5780867)], null),"");
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69194_69301,G__69195_69302) : re_frame.core.reg_sub.call(null,G__69194_69301,G__69195_69302));
var G__69203_69303 = new cljs.core.Keyword("shifting-sands.subs","exit-index","shifting-sands.subs/exit-index",2138468010);
var G__69204_69304 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("shifting-sands.db","exit-index","shifting-sands.db/exit-index",-1322124067)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69203_69303,G__69204_69304) : re_frame.core.reg_sub.call(null,G__69203_69303,G__69204_69304));
/**
 * Returns a map of coord --> unexplored room for coords adjacent to the
 * given room
 */
shifting_sands.subs.room__GT_adjacent_unexplored = (function shifting_sands$subs$room__GT_adjacent_unexplored(coord,room){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69205_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.second(p1__69205_SHARP_)],[cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("shifting-sands.db","unexplored","shifting-sands.db/unexplored",65492241).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms),new cljs.core.Keyword("shifting-sands.db","hallways","shifting-sands.db/hallways",185532064),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69206 = cljs.core.first(p1__69205_SHARP_);
return (shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1 ? shifting_sands.db.opposite_dir.cljs$core$IFn$_invoke$arity$1(G__69206) : shifting_sands.db.opposite_dir.call(null,G__69206));
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
var map__69223 = shifting_sands.db.get_map_bounds(floor_map);
var map__69223__$1 = (((((!((map__69223 == null))))?(((((map__69223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69223):map__69223);
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69223__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69223__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69223__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69223__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4529__auto__ = (function shifting_sands$subs$add_empty_rooms_$_iter__69225(s__69226){
return (new cljs.core.LazySeq(null,(function (){
var s__69226__$1 = s__69226;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__69226__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__69226__$1,x,xs__6292__auto__,temp__5735__auto__,map__69223,map__69223__$1,max_x,min_x,max_y,min_y){
return (function shifting_sands$subs$add_empty_rooms_$_iter__69225_$_iter__69227(s__69228){
return (new cljs.core.LazySeq(null,((function (s__69226__$1,x,xs__6292__auto__,temp__5735__auto__,map__69223,map__69223__$1,max_x,min_x,max_y,min_y){
return (function (){
var s__69228__$1 = s__69228;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__69228__$1);
if(temp__5735__auto____$1){
var s__69228__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69228__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__69228__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__69230 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__69229 = (0);
while(true){
if((i__69229 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__69229);
cljs.core.chunk_append(b__69230,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]));

var G__69306 = (i__69229 + (1));
i__69229 = G__69306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69230),shifting_sands$subs$add_empty_rooms_$_iter__69225_$_iter__69227(cljs.core.chunk_rest(s__69228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69230),null);
}
} else {
var y = cljs.core.first(s__69228__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("shifting-sands.db","empty","shifting-sands.db/empty",-409729476).cljs$core$IFn$_invoke$arity$1(shifting_sands.db.universal_rooms)]),shifting_sands$subs$add_empty_rooms_$_iter__69225_$_iter__69227(cljs.core.rest(s__69228__$2)));
}
} else {
return null;
}
break;
}
});})(s__69226__$1,x,xs__6292__auto__,temp__5735__auto__,map__69223,map__69223__$1,max_x,min_x,max_y,min_y))
,null,null));
});})(s__69226__$1,x,xs__6292__auto__,temp__5735__auto__,map__69223,map__69223__$1,max_x,min_x,max_y,min_y))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_y,(max_y + (1)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shifting_sands$subs$add_empty_rooms_$_iter__69225(cljs.core.rest(s__69226__$1)));
} else {
var G__69307 = cljs.core.rest(s__69226__$1);
s__69226__$1 = G__69307;
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
var G__69231_69308 = new cljs.core.Keyword("shifting-sands.subs","floor-map","shifting-sands.subs/floor-map",-1975427998);
var G__69232_69309 = (function (p__69233){
var map__69234 = p__69233;
var map__69234__$1 = (((((!((map__69234 == null))))?(((((map__69234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69234):map__69234);
var db = map__69234__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69234__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return shifting_sands.subs.add_empty_rooms(shifting_sands.subs.add_unexplored_rooms(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69231_69308,G__69232_69309) : re_frame.core.reg_sub.call(null,G__69231_69308,G__69232_69309));
var G__69236_69310 = new cljs.core.Keyword("shifting-sands.subs","room-list","shifting-sands.subs/room-list",-27047156);
var G__69237_69311 = (function (p__69238){
var map__69239 = p__69238;
var map__69239__$1 = (((((!((map__69239 == null))))?(((((map__69239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69239):map__69239);
var db = map__69239__$1;
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69239__$1,new cljs.core.Keyword("shifting-sands.db","current-floor","shifting-sands.db/current-floor",-139589038));
var floor_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shifting-sands.db","floors","shifting-sands.db/floors",1396546682),floor,new cljs.core.Keyword("shifting-sands.db","map","shifting-sands.db/map",-1827694729)], null));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shifting-sands.db","room-index","shifting-sands.db/room-index",-1750812676),cljs.core.vals(floor_map));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69236_69310,G__69237_69311) : re_frame.core.reg_sub.call(null,G__69236_69310,G__69237_69311));
var G__69241_69312 = new cljs.core.Keyword("shifting-sands.subs","modal-result","shifting-sands.subs/modal-result",746982052);
var G__69242_69313 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","modal-result","shifting-sands.db/modal-result",-1111333015));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69241_69312,G__69242_69313) : re_frame.core.reg_sub.call(null,G__69241_69312,G__69242_69313));
var G__69243_69314 = new cljs.core.Keyword("shifting-sands.subs","slug-map","shifting-sands.subs/slug-map",524433076);
var G__69244_69315 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","slugs","shifting-sands.db/slugs",2015224537).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69243_69314,G__69244_69315) : re_frame.core.reg_sub.call(null,G__69243_69314,G__69244_69315));
var G__69245_69316 = new cljs.core.Keyword("shifting-sands.subs","show-slugs","shifting-sands.subs/show-slugs",150572962);
var G__69246_69317 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-slugs","shifting-sands.db/show-slugs",-1547763605).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69245_69316,G__69246_69317) : re_frame.core.reg_sub.call(null,G__69245_69316,G__69246_69317));
var G__69247_69321 = new cljs.core.Keyword("shifting-sands.subs","show-generate-dialog?","shifting-sands.subs/show-generate-dialog?",1576024156);
var G__69248_69322 = (function (db){
return new cljs.core.Keyword("shifting-sands.db","show-generate-dialog","shifting-sands.db/show-generate-dialog",211654398).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69247_69321,G__69248_69322) : re_frame.core.reg_sub.call(null,G__69247_69321,G__69248_69322));
var G__69275_69323 = new cljs.core.Keyword("shifting-sands.subs","re-pressed-example","shifting-sands.subs/re-pressed-example",497712309);
var G__69276_69324 = (function (db,_){
return new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69275_69323,G__69276_69324) : re_frame.core.reg_sub.call(null,G__69275_69323,G__69276_69324));
var G__69277_69325 = new cljs.core.Keyword("shifting-sands.subs","generate-result","shifting-sands.subs/generate-result",-1171396099);
var G__69278_69326 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","generate-result","shifting-sands.db/generate-result",720592082));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69277_69325,G__69278_69326) : re_frame.core.reg_sub.call(null,G__69277_69325,G__69278_69326));
var G__69279_69327 = new cljs.core.Keyword("shifting-sands.subs","show-reset-dialog?","shifting-sands.subs/show-reset-dialog?",165708062);
var G__69280_69328 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-reset-dialog?","shifting-sands.db/show-reset-dialog?",-1717304479));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69279_69327,G__69280_69328) : re_frame.core.reg_sub.call(null,G__69279_69327,G__69280_69328));
var G__69281_69329 = new cljs.core.Keyword("shifting-sands.subs","history","shifting-sands.subs/history",1054042185);
var G__69282_69330 = (function (db){
return cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","history","shifting-sands.db/history",-1369518722)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69281_69329,G__69282_69330) : re_frame.core.reg_sub.call(null,G__69281_69329,G__69282_69330));
var G__69283_69331 = new cljs.core.Keyword("shifting-sands.subs","show-history?","shifting-sands.subs/show-history?",-1744834138);
var G__69284_69332 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","show-history?","shifting-sands.db/show-history?",113013865));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69283_69331,G__69284_69332) : re_frame.core.reg_sub.call(null,G__69283_69331,G__69284_69332));
var G__69285_69333 = new cljs.core.Keyword("shifting-sands.subs","room-adv","shifting-sands.subs/room-adv",-742139293);
var G__69286_69334 = (function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","room-adv","shifting-sands.db/room-adv",-478147542));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69285_69333,G__69286_69334) : re_frame.core.reg_sub.call(null,G__69285_69333,G__69286_69334));
var G__69287_69335 = new cljs.core.Keyword("shifting-sands.subs","showing-coord","shifting-sands.subs/showing-coord",62780047);
var G__69288_69336 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","showing-coord","shifting-sands.db/showing-coord",1937334074));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69287_69335,G__69288_69336) : re_frame.core.reg_sub.call(null,G__69287_69335,G__69288_69336));
var G__69289_69337 = new cljs.core.Keyword("shifting-sands.subs","expanded-notes?","shifting-sands.subs/expanded-notes?",1720920143);
var G__69290_69338 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","expanded-notes?","shifting-sands.db/expanded-notes?",-112288348));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69289_69337,G__69290_69338) : re_frame.core.reg_sub.call(null,G__69289_69337,G__69290_69338));
var G__69291_69340 = new cljs.core.Keyword("shifting-sands.subs","current-room","shifting-sands.subs/current-room",-1429230466);
var G__69292_69341 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","current-room","shifting-sands.db/current-room",1518148033));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69291_69340,G__69292_69341) : re_frame.core.reg_sub.call(null,G__69291_69340,G__69292_69341));
var G__69293_69342 = new cljs.core.Keyword("shifting-sands.subs","active-page","shifting-sands.subs/active-page",613255283);
var G__69294_69343 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","active-page","shifting-sands.db/active-page",-725486040));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69293_69342,G__69294_69343) : re_frame.core.reg_sub.call(null,G__69293_69342,G__69294_69343));
var G__69295_69351 = new cljs.core.Keyword("shifting-sands.subs","new-character","shifting-sands.subs/new-character",-2098433893);
var G__69296_69352 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("shifting-sands.db","new-character","shifting-sands.db/new-character",322951906));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__69295_69351,G__69296_69352) : re_frame.core.reg_sub.call(null,G__69295_69351,G__69296_69352));

//# sourceMappingURL=shifting_sands.subs.js.map

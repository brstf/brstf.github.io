goog.provide('day8.re_frame_10x.view.settings');
day8.re_frame_10x.view.settings.comp_section_width = "400px";
day8.re_frame_10x.view.settings.instruction__section_width = "190px";
day8.re_frame_10x.view.settings.horizontal_gap = day8.re_frame_10x.common_styles.gs_7s;
day8.re_frame_10x.view.settings.vertical_gap = day8.re_frame_10x.common_styles.gs_12s;
day8.re_frame_10x.view.settings.settings_box_vertical_padding = day8.re_frame_10x.common_styles.gs_7;
day8.re_frame_10x.view.settings.settings_box_padding = day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["7px","0"], 0));
day8.re_frame_10x.view.settings.settings_box_81 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units.px_(day8.re_frame_10x.common_styles.gs_81,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units.px_STAR_((2),day8.re_frame_10x.view.settings.settings_box_vertical_padding)));
day8.re_frame_10x.view.settings.settings_box_131 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units.px_(day8.re_frame_10x.common_styles.gs_131,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units.px_STAR_((2),day8.re_frame_10x.view.settings.settings_box_vertical_padding)));
day8.re_frame_10x.view.settings.settings_styles = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-10x--","#--re-frame-10x--",-1788857107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".settings",".settings",1002597819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.white_background_color], null)], null)], null);
day8.re_frame_10x.view.settings.closeable_text_box = (function day8$re_frame_10x$view$settings$closeable_text_box(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48665 = arguments.length;
var i__4737__auto___48666 = (0);
while(true){
if((i__4737__auto___48666 < len__4736__auto___48665)){
args__4742__auto__.push((arguments[i__4737__auto___48666]));

var G__48667 = (i__4737__auto___48666 + (1));
i__4737__auto___48666 = G__48667;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.settings.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.view.settings.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__48596){
var map__48597 = p__48596;
var map__48597__$1 = (((((!((map__48597 == null))))?(((((map__48597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48597):map__48597);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48597__$1,new cljs.core.Keyword(null,"model","model",331153215));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48597__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48597__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48597__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0px",day8.re_frame_10x.common_styles.gs_5s], 0))], null),new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.close_button,new cljs.core.Keyword(null,"div-size","div-size",1661625995),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(25),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),(-4),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),(10),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close], null)], null)], null);
}));

(day8.re_frame_10x.view.settings.closeable_text_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.view.settings.closeable_text_box.cljs$lang$applyTo = (function (seq48595){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48595));
}));

day8.re_frame_10x.view.settings.explanation_text = (function day8$re_frame_10x$view$settings$explanation_text(children){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.instruction__section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
});
/**
 * settings and explanation are both children of re-com boxes
 */
day8.re_frame_10x.view.settings.settings_box = (function day8$re_frame_10x$view$settings$settings_box(settings,explanation,min_height){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.view.settings.settings_box_padding,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),settings], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.explanation_text,explanation], null)], null)], null);
});
day8.re_frame_10x.view.settings.render = (function day8$re_frame_10x$view$settings$render(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.common_styles.gs_12s,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.common_styles.gs_19s], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var num_epochs = cljs.core.deref((function (){var G__48615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48615) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.call(null,G__48615));
})());
var num_traces = cljs.core.deref((function (){var G__48619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48619) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.call(null,G__48619));
})());
var epochs_to_retain = (function (){var G__48620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48620) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.call(null,G__48620));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Retain last"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_31s,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"35px",new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0px",day8.re_frame_10x.common_styles.gs_5s], 0))], null),new cljs.core.Keyword(null,"model","model",331153215),epochs_to_retain,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48607_SHARP_){
var G__48621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),p1__48607_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48621) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48621));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"epochs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_31s], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clear all epochs"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__48622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48622) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48622));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),num_epochs," epochs currently retained, involving ",num_traces," traces."], null)], null),day8.re_frame_10x.view.settings.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),(function (){var follows_events_QMARK_ = cljs.core.deref((function (){var G__48624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48624) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.call(null,G__48624));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),follows_events_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),"sync app-db with epoch navigation",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48610_SHARP_){
var G__48625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),p1__48610_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48625) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48625));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"When you navigate to an epoch, update app-db to match. Causes UI to \"time travel\"."], null)], null),day8.re_frame_10x.view.settings.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Ignore epochs for:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_81s], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ event-id"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__48626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","add-ignored-event","settings/add-ignored-event",-1185281607)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48626) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48626));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4529__auto__ = (function day8$re_frame_10x$view$settings$render_$_iter__48627(s__48628){
return (new cljs.core.LazySeq(null,(function (){
var s__48628__$1 = s__48628;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48628__$1);
if(temp__5735__auto__){
var s__48628__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48628__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48628__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48630 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48629 = (0);
while(true){
if((i__48629 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__48629);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append(b__48630,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__48629,id,item,c__4527__auto__,size__4528__auto__,b__48630,s__48628__$2,temp__5735__auto__){
return (function (){
var G__48633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),id], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48633) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48633));
});})(i__48629,id,item,c__4527__auto__,size__4528__auto__,b__48630,s__48628__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__48629,id,item,c__4527__auto__,size__4528__auto__,b__48630,s__48628__$2,temp__5735__auto__){
return (function (p1__48611_SHARP_){
var G__48634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),id,p1__48611_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48634) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48634));
});})(i__48629,id,item,c__4527__auto__,size__4528__auto__,b__48630,s__48628__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__48683 = (i__48629 + (1));
i__48629 = G__48683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48630),day8$re_frame_10x$view$settings$render_$_iter__48627(cljs.core.chunk_rest(s__48628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48630),null);
}
} else {
var item = cljs.core.first(s__48628__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__48628__$2,temp__5735__auto__){
return (function (){
var G__48635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),id], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48635) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48635));
});})(id,item,s__48628__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__48628__$2,temp__5735__auto__){
return (function (p1__48611_SHARP_){
var G__48636 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),id,p1__48611_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48636) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48636));
});})(id,item,s__48628__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$view$settings$render_$_iter__48627(cljs.core.rest(s__48628__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__48637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48637) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.call(null,G__48637));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"All trace associated with these events will be ignored."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Useful if you want to ignore a periodic background polling event."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Filter out trace for views in:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ namespace"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__48638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","add-filtered-view-trace","settings/add-filtered-view-trace",1856187997)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48638) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48638));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4529__auto__ = (function day8$re_frame_10x$view$settings$render_$_iter__48639(s__48640){
return (new cljs.core.LazySeq(null,(function (){
var s__48640__$1 = s__48640;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48640__$1);
if(temp__5735__auto__){
var s__48640__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48640__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48640__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48642 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48641 = (0);
while(true){
if((i__48641 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__48641);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append(b__48642,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__48641,id,item,c__4527__auto__,size__4528__auto__,b__48642,s__48640__$2,temp__5735__auto__){
return (function (){
var G__48644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),id], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48644) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48644));
});})(i__48641,id,item,c__4527__auto__,size__4528__auto__,b__48642,s__48640__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__48641,id,item,c__4527__auto__,size__4528__auto__,b__48642,s__48640__$2,temp__5735__auto__){
return (function (p1__48612_SHARP_){
var G__48645 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),id,p1__48612_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48645) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48645));
});})(i__48641,id,item,c__4527__auto__,size__4528__auto__,b__48642,s__48640__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__48746 = (i__48641 + (1));
i__48641 = G__48746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48642),day8$re_frame_10x$view$settings$render_$_iter__48639(cljs.core.chunk_rest(s__48640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48642),null);
}
} else {
var item = cljs.core.first(s__48640__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__48640__$2,temp__5735__auto__){
return (function (){
var G__48647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),id], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48647) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48647));
});})(id,item,s__48640__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__48640__$2,temp__5735__auto__){
return (function (p1__48612_SHARP_){
var G__48650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),id,p1__48612_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48650) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48650));
});})(id,item,s__48640__$2,temp__5735__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$view$settings$render_$_iter__48639(cljs.core.rest(s__48640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref((function (){var G__48653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48653) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.call(null,G__48653));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sometimes you want to focus on your own views, and the trace associated with library views is just noise."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nominate one or more namespaces."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),(function (){var low_level_trace = cljs.core.deref((function (){var G__48654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48654) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe.call(null,G__48654));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Remove low level trace"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"reagent","reagent",2131627322).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"reagent internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48613_SHARP_){
var G__48655 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"reagent","reagent",2131627322),p1__48613_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48655) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48655));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"re-frame internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48614_SHARP_){
var G__48659 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),p1__48614_SHARP_], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48659) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48659));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Most of the time, low level trace is noisy and you want it filtered out."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Factory Reset"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__48660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__48660) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch.call(null,G__48660));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),day8.re_frame_10x.view.settings.settings_box_81], null)], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.settings.js.map

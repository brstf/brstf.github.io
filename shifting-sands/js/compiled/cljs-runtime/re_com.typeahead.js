goog.provide('re_com.typeahead');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__64152){
var map__64153 = p__64152;
var map__64153__$1 = (((((!((map__64153 == null))))?(((((map__64153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64153):map__64153);
var args = map__64153__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64153__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64153__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64153__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64153__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64153__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64153__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64153__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64153__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__64155 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4126__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__64155,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__64155,external_model_value));
} else {
return G__64155;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__64159,event){
var map__64160 = p__64159;
var map__64160__$1 = (((((!((map__64160 == null))))?(((((map__64160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64160):map__64160);
var state = map__64160__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64160__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64160__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64160__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__64162 = event;
var G__64162__$1 = (((G__64162 instanceof cljs.core.Keyword))?G__64162.fqn:null);
switch (G__64162__$1) {
case "input-text-blurred":
var and__4115__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4115__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
if(cljs.core.not(rigid_QMARK___$1)){
var or__4126__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return false;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__64166,event){
var map__64167 = p__64166;
var map__64167__$1 = (((((!((map__64167 == null))))?(((((map__64167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64167):map__64167);
var state = map__64167__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64167__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__64170 = event;
var G__64170__$1 = (((G__64170 instanceof cljs.core.Keyword))?G__64170.fqn:null);
switch (G__64170__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__64171,new_value){
var map__64172 = p__64171;
var map__64172__$1 = (((((!((map__64172 == null))))?(((((map__64172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64172):map__64172);
var state = map__64172__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64172__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__64184,suggestion){
var map__64186 = p__64184;
var map__64186__$1 = (((((!((map__64186 == null))))?(((((map__64186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64186):map__64186);
var state = map__64186__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64186__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__64193 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__64193,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__64193;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__64200,index){
var map__64201 = p__64200;
var map__64201__$1 = (((((!((map__64201 == null))))?(((((map__64201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64201):map__64201);
var state = map__64201__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64201__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__64204 = state;
var G__64204__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64204,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__64204__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__64204__$1,suggestion):G__64204__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__64204__$2,suggestion);
} else {
return G__64204__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__64226,index){
var map__64227 = p__64226;
var map__64227__$1 = (((((!((map__64227 == null))))?(((((map__64227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64227):map__64227);
var state = map__64227__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64227__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__64239){
var map__64240 = p__64239;
var map__64240__$1 = (((((!((map__64240 == null))))?(((((map__64240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64240):map__64240);
var state = map__64240__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64240__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__64254 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__64254,suggestion_active_index);
} else {
return G__64254;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__64256){
var map__64257 = p__64256;
var map__64257__$1 = (((((!((map__64257 == null))))?(((((map__64257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64257):map__64257);
var state = map__64257__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__64261 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__64261,re_com.typeahead.wrap(((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__64261;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__64263){
var map__64264 = p__64263;
var map__64264__$1 = (((((!((map__64264 == null))))?(((((map__64264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64264):map__64264);
var state = map__64264__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__64266 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__64266,re_com.typeahead.wrap(((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__64266;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__64267 = state;
var G__64267__$1 = re_com.typeahead.clear_suggestions(G__64267)
;
var G__64267__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__64267__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__64267__$2,null);
} else {
return G__64267__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__64269){
var map__64270 = p__64269;
var map__64270__$1 = (((((!((map__64270 == null))))?(((((map__64270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64270):map__64270);
var state = map__64270__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64270__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64270__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64270__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((cljs.core.not(displaying_suggestion_QMARK_))?re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307)):false))){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5733__auto__ = (function (){var G__64286 = text;
var G__64287 = (function (p1__64282_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__64282_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__64286,G__64287) : data_source.call(null,G__64286,G__64287));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var return_value = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__56383__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_64309){
var state_val_64310 = (state_64309[(1)]);
if((state_val_64310 === (1))){
var state_64309__$1 = state_64309;
var statearr_64311_64571 = state_64309__$1;
(statearr_64311_64571[(2)] = null);

(statearr_64311_64571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64310 === (2))){
var state_64309__$1 = state_64309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64309__$1,(4),c_search);
} else {
if((state_val_64310 === (3))){
var inst_64307 = (state_64309[(2)]);
var state_64309__$1 = state_64309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64309__$1,inst_64307);
} else {
if((state_val_64310 === (4))){
var inst_64294 = (state_64309[(7)]);
var inst_64294__$1 = (state_64309[(2)]);
var inst_64295 = cljs.core.deref(state_atom);
var inst_64296 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_64295);
var inst_64297 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_64294__$1);
var state_64309__$1 = (function (){var statearr_64320 = state_64309;
(statearr_64320[(7)] = inst_64294__$1);

(statearr_64320[(8)] = inst_64296);

return statearr_64320;
})();
if(inst_64297){
var statearr_64323_64573 = state_64309__$1;
(statearr_64323_64573[(1)] = (5));

} else {
var statearr_64324_64574 = state_64309__$1;
(statearr_64324_64574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64310 === (5))){
var inst_64296 = (state_64309[(8)]);
var inst_64299 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_64300 = re_com.typeahead.search_data_source_BANG_(inst_64296,state_atom,"");
var state_64309__$1 = (function (){var statearr_64325 = state_64309;
(statearr_64325[(9)] = inst_64299);

return statearr_64325;
})();
var statearr_64327_64575 = state_64309__$1;
(statearr_64327_64575[(2)] = inst_64300);

(statearr_64327_64575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64310 === (6))){
var inst_64294 = (state_64309[(7)]);
var inst_64296 = (state_64309[(8)]);
var inst_64302 = re_com.typeahead.search_data_source_BANG_(inst_64296,state_atom,inst_64294);
var state_64309__$1 = state_64309;
var statearr_64328_64577 = state_64309__$1;
(statearr_64328_64577[(2)] = inst_64302);

(statearr_64328_64577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64310 === (7))){
var inst_64304 = (state_64309[(2)]);
var state_64309__$1 = (function (){var statearr_64329 = state_64309;
(statearr_64329[(10)] = inst_64304);

return statearr_64329;
})();
var statearr_64333_64578 = state_64309__$1;
(statearr_64333_64578[(2)] = null);

(statearr_64333_64578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto____0 = (function (){
var statearr_64334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64334[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto__);

(statearr_64334[(1)] = (1));

return statearr_64334;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto____1 = (function (state_64309){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_64309);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e64335){var ex__56262__auto__ = e64335;
var statearr_64336_64580 = state_64309;
(statearr_64336_64580[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_64309[(4)]))){
var statearr_64337_64581 = state_64309;
(statearr_64337_64581[(1)] = cljs.core.first((state_64309[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64582 = state_64309;
state_64309 = G__64582;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto__ = function(state_64309){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto____1.call(this,state_64309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_64339 = f__56384__auto__();
(statearr_64339[(6)] = c__56383__auto__);

return statearr_64339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));

return c__56383__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__64343 = cljs.core.deref(state_atom);
var map__64343__$1 = (((((!((map__64343 == null))))?(((((map__64343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64343):map__64343);
var state = map__64343__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64343__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64343__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__64341_SHARP_){
var G__64345 = p1__64341_SHARP_;
var G__64345__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__64345,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__64345__$1,new_text);
} else {
return G__64345__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__64349 = cljs.core._EQ_;
var expr__64350 = event.which;
if(cljs.core.truth_((pred__64349.cljs$core$IFn$_invoke$arity$2 ? pred__64349.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__64350) : pred__64349.call(null,goog.events.KeyCodes.UP,expr__64350)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__64349.cljs$core$IFn$_invoke$arity$2 ? pred__64349.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__64350) : pred__64349.call(null,goog.events.KeyCodes.DOWN,expr__64350)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__64349.cljs$core$IFn$_invoke$arity$2 ? pred__64349.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__64350) : pred__64349.call(null,goog.events.KeyCodes.ENTER,expr__64350)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__64349.cljs$core$IFn$_invoke$arity$2 ? pred__64349.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__64350) : pred__64349.call(null,goog.events.KeyCodes.ESC,expr__64350)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__64349.cljs$core$IFn$_invoke$arity$2 ? pred__64349.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__64350) : pred__64349.call(null,goog.events.KeyCodes.TAB,expr__64350)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64587 = arguments.length;
var i__4737__auto___64588 = (0);
while(true){
if((i__4737__auto___64588 < len__4736__auto___64587)){
args__4742__auto__.push((arguments[i__4737__auto___64588]));

var G__64589 = (i__4737__auto___64588 + (1));
i__4737__auto___64588 = G__64589;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__64382){
var map__64386 = p__64382;
var map__64386__$1 = (((((!((map__64386 == null))))?(((((map__64386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64386):map__64386);
var args = map__64386__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__64388 = re_com.typeahead.make_typeahead_state(args);
var map__64388__$1 = (((((!((map__64388 == null))))?(((((map__64388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64388):map__64388);
var state = map__64388__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64388__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64388__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var G__64590__delegate = function (p__64394){
var map__64395 = p__64394;
var map__64395__$1 = (((((!((map__64395 == null))))?(((((map__64395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64395):map__64395);
var args__$1 = map__64395__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__64399 = cljs.core.deref(state_atom);
var map__64399__$1 = (((((!((map__64399 == null))))?(((((map__64399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64399):map__64399);
var state__$1 = map__64399__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64399__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64399__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64399__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64399__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4529__auto__ = (function re_com$typeahead$iter__64422(s__64423){
return (new cljs.core.LazySeq(null,(function (){
var s__64423__$1 = s__64423;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64423__$1);
if(temp__5735__auto__){
var s__64423__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64423__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64423__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64425 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64424 = (0);
while(true){
if((i__64424 < size__4528__auto__)){
var vec__64427 = cljs.core._nth(c__4527__auto__,i__64424);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64427,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64427,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__64425,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__64424,selected_QMARK_,vec__64427,i,s,c__4527__auto__,size__4528__auto__,b__64425,s__64423__$2,temp__5735__auto__,map__64399,map__64399__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__64395,map__64395__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__64388,map__64388__$1,state,c_search,c_input,state_atom,input_text_model,map__64386,map__64386__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__64424,selected_QMARK_,vec__64427,i,s,c__4527__auto__,size__4528__auto__,b__64425,s__64423__$2,temp__5735__auto__,map__64399,map__64399__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__64395,map__64395__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__64388,map__64388__$1,state,c_search,c_input,state_atom,input_text_model,map__64386,map__64386__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__64424,selected_QMARK_,vec__64427,i,s,c__4527__auto__,size__4528__auto__,b__64425,s__64423__$2,temp__5735__auto__,map__64399,map__64399__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__64395,map__64395__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__64388,map__64388__$1,state,c_search,c_input,state_atom,input_text_model,map__64386,map__64386__$1,args){
return (function (p1__64377_SHARP_){
p1__64377_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__64424,selected_QMARK_,vec__64427,i,s,c__4527__auto__,size__4528__auto__,b__64425,s__64423__$2,temp__5735__auto__,map__64399,map__64399__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__64395,map__64395__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__64388,map__64388__$1,state,c_search,c_input,state_atom,input_text_model,map__64386,map__64386__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__64591 = (i__64424 + (1));
i__64424 = G__64591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64425),re_com$typeahead$iter__64422(cljs.core.chunk_rest(s__64423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64425),null);
}
} else {
var vec__64431 = cljs.core.first(s__64423__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64431,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64431,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__64431,i,s,s__64423__$2,temp__5735__auto__,map__64399,map__64399__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__64395,map__64395__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__64388,map__64388__$1,state,c_search,c_input,state_atom,input_text_model,map__64386,map__64386__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__64431,i,s,s__64423__$2,temp__5735__auto__,map__64399,map__64399__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__64395,map__64395__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__64388,map__64388__$1,state,c_search,c_input,state_atom,input_text_model,map__64386,map__64386__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__64431,i,s,s__64423__$2,temp__5735__auto__,map__64399,map__64399__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__64395,map__64395__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__64388,map__64388__$1,state,c_search,c_input,state_atom,input_text_model,map__64386,map__64386__$1,args){
return (function (p1__64377_SHARP_){
p1__64377_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__64431,i,s,s__64423__$2,temp__5735__auto__,map__64399,map__64399__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__64395,map__64395__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__64388,map__64388__$1,state,c_search,c_input,state_atom,input_text_model,map__64386,map__64386__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__64422(cljs.core.rest(s__64423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__64590 = function (var_args){
var p__64394 = null;
if (arguments.length > 0) {
var G__64592__i = 0, G__64592__a = new Array(arguments.length -  0);
while (G__64592__i < G__64592__a.length) {G__64592__a[G__64592__i] = arguments[G__64592__i + 0]; ++G__64592__i;}
  p__64394 = new cljs.core.IndexedSeq(G__64592__a,0,null);
} 
return G__64590__delegate.call(this,p__64394);};
G__64590.cljs$lang$maxFixedArity = 0;
G__64590.cljs$lang$applyTo = (function (arglist__64593){
var p__64394 = cljs.core.seq(arglist__64593);
return G__64590__delegate(p__64394);
});
G__64590.cljs$core$IFn$_invoke$arity$variadic = G__64590__delegate;
return G__64590;
})()
;
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq64378){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64378));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__56383__auto___64594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_64513){
var state_val_64514 = (state_64513[(1)]);
if((state_val_64514 === (7))){
var inst_64449 = (state_64513[(2)]);
var state_64513__$1 = state_64513;
var statearr_64519_64595 = state_64513__$1;
(statearr_64519_64595[(2)] = inst_64449);

(statearr_64519_64595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (1))){
var inst_64444 = null;
var state_64513__$1 = (function (){var statearr_64520 = state_64513;
(statearr_64520[(7)] = inst_64444);

return statearr_64520;
})();
var statearr_64521_64596 = state_64513__$1;
(statearr_64521_64596[(2)] = null);

(statearr_64521_64596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (4))){
var state_64513__$1 = state_64513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64513__$1,(7),in$);
} else {
if((state_val_64514 === (15))){
var inst_64482 = (state_64513[(2)]);
var state_64513__$1 = (function (){var statearr_64522 = state_64513;
(statearr_64522[(8)] = inst_64482);

return statearr_64522;
})();
var statearr_64523_64597 = state_64513__$1;
(statearr_64523_64597[(2)] = null);

(statearr_64523_64597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (13))){
var inst_64470 = (state_64513[(9)]);
var inst_64484 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64470,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_64513__$1 = state_64513;
if(inst_64484){
var statearr_64525_64598 = state_64513__$1;
(statearr_64525_64598[(1)] = (16));

} else {
var statearr_64526_64599 = state_64513__$1;
(statearr_64526_64599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (6))){
var inst_64463 = (state_64513[(10)]);
var inst_64453 = (state_64513[(11)]);
var inst_64452 = (state_64513[(2)]);
var inst_64453__$1 = cljs.core.async.timeout(ms);
var inst_64463__$1 = in$;
var inst_64464 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64465 = [inst_64463__$1,inst_64453__$1];
var inst_64466 = (new cljs.core.PersistentVector(null,2,(5),inst_64464,inst_64465,null));
var state_64513__$1 = (function (){var statearr_64527 = state_64513;
(statearr_64527[(12)] = inst_64452);

(statearr_64527[(10)] = inst_64463__$1);

(statearr_64527[(11)] = inst_64453__$1);

return statearr_64527;
})();
return cljs.core.async.ioc_alts_BANG_(state_64513__$1,(8),inst_64466);
} else {
if((state_val_64514 === (17))){
var state_64513__$1 = state_64513;
var statearr_64528_64600 = state_64513__$1;
(statearr_64528_64600[(2)] = null);

(statearr_64528_64600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (3))){
var inst_64509 = (state_64513[(2)]);
var state_64513__$1 = state_64513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64513__$1,inst_64509);
} else {
if((state_val_64514 === (12))){
var inst_64452 = (state_64513[(12)]);
var state_64513__$1 = state_64513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64513__$1,(15),out,inst_64452);
} else {
if((state_val_64514 === (2))){
var inst_64444 = (state_64513[(7)]);
var inst_64446 = (inst_64444 == null);
var state_64513__$1 = state_64513;
if(cljs.core.truth_(inst_64446)){
var statearr_64532_64601 = state_64513__$1;
(statearr_64532_64601[(1)] = (4));

} else {
var statearr_64533_64602 = state_64513__$1;
(statearr_64533_64602[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (11))){
var inst_64506 = (state_64513[(2)]);
var inst_64444 = inst_64506;
var state_64513__$1 = (function (){var statearr_64534 = state_64513;
(statearr_64534[(7)] = inst_64444);

return statearr_64534;
})();
var statearr_64535_64603 = state_64513__$1;
(statearr_64535_64603[(2)] = null);

(statearr_64535_64603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (9))){
var inst_64468 = (state_64513[(13)]);
var inst_64476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64468,(0),null);
var inst_64477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64468,(1),null);
var state_64513__$1 = (function (){var statearr_64536 = state_64513;
(statearr_64536[(14)] = inst_64477);

return statearr_64536;
})();
var statearr_64537_64604 = state_64513__$1;
(statearr_64537_64604[(2)] = inst_64476);

(statearr_64537_64604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (5))){
var inst_64444 = (state_64513[(7)]);
var state_64513__$1 = state_64513;
var statearr_64538_64605 = state_64513__$1;
(statearr_64538_64605[(2)] = inst_64444);

(statearr_64538_64605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (14))){
var inst_64504 = (state_64513[(2)]);
var state_64513__$1 = state_64513;
var statearr_64539_64606 = state_64513__$1;
(statearr_64539_64606[(2)] = inst_64504);

(statearr_64539_64606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (16))){
var inst_64469 = (state_64513[(15)]);
var state_64513__$1 = state_64513;
var statearr_64540_64607 = state_64513__$1;
(statearr_64540_64607[(2)] = inst_64469);

(statearr_64540_64607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (10))){
var inst_64470 = (state_64513[(9)]);
var inst_64453 = (state_64513[(11)]);
var inst_64479 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64470,inst_64453);
var state_64513__$1 = state_64513;
if(inst_64479){
var statearr_64541_64608 = state_64513__$1;
(statearr_64541_64608[(1)] = (12));

} else {
var statearr_64542_64609 = state_64513__$1;
(statearr_64542_64609[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (18))){
var inst_64502 = (state_64513[(2)]);
var state_64513__$1 = state_64513;
var statearr_64543_64610 = state_64513__$1;
(statearr_64543_64610[(2)] = inst_64502);

(statearr_64543_64610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64514 === (8))){
var inst_64470 = (state_64513[(9)]);
var inst_64468 = (state_64513[(13)]);
var inst_64463 = (state_64513[(10)]);
var inst_64468__$1 = (state_64513[(2)]);
var inst_64469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64468__$1,(0),null);
var inst_64470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64468__$1,(1),null);
var inst_64471 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64470__$1,inst_64463);
var state_64513__$1 = (function (){var statearr_64544 = state_64513;
(statearr_64544[(9)] = inst_64470__$1);

(statearr_64544[(13)] = inst_64468__$1);

(statearr_64544[(15)] = inst_64469);

return statearr_64544;
})();
if(inst_64471){
var statearr_64545_64611 = state_64513__$1;
(statearr_64545_64611[(1)] = (9));

} else {
var statearr_64546_64612 = state_64513__$1;
(statearr_64546_64612[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__56259__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__56259__auto____0 = (function (){
var statearr_64548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64548[(0)] = re_com$typeahead$debounce_$_state_machine__56259__auto__);

(statearr_64548[(1)] = (1));

return statearr_64548;
});
var re_com$typeahead$debounce_$_state_machine__56259__auto____1 = (function (state_64513){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_64513);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e64549){var ex__56262__auto__ = e64549;
var statearr_64550_64613 = state_64513;
(statearr_64550_64613[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_64513[(4)]))){
var statearr_64551_64614 = state_64513;
(statearr_64551_64614[(1)] = cljs.core.first((state_64513[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64615 = state_64513;
state_64513 = G__64615;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__56259__auto__ = function(state_64513){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__56259__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__56259__auto____1.call(this,state_64513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__56259__auto____0;
re_com$typeahead$debounce_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__56259__auto____1;
return re_com$typeahead$debounce_$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_64552 = f__56384__auto__();
(statearr_64552[(6)] = c__56383__auto___64594);

return statearr_64552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map

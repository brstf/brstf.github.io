goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_58559 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_58559(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_58560 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_58560(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__57949 = coll;
var G__57950 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57949,G__57950) : shadow.dom.lazy_native_coll_seq.call(null,G__57949,G__57950));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__57960 = arguments.length;
switch (G__57960) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__57967 = arguments.length;
switch (G__57967) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__57976 = arguments.length;
switch (G__57976) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__57982 = arguments.length;
switch (G__57982) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__57987 = arguments.length;
switch (G__57987) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57999 = arguments.length;
switch (G__57999) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58006){if((e58006 instanceof Object)){
var e = e58006;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58006;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58013 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58014 = null;
var count__58015 = (0);
var i__58016 = (0);
while(true){
if((i__58016 < count__58015)){
var el = chunk__58014.cljs$core$IIndexed$_nth$arity$2(null,i__58016);
var handler_58583__$1 = ((function (seq__58013,chunk__58014,count__58015,i__58016,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58013,chunk__58014,count__58015,i__58016,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58583__$1);


var G__58584 = seq__58013;
var G__58585 = chunk__58014;
var G__58586 = count__58015;
var G__58587 = (i__58016 + (1));
seq__58013 = G__58584;
chunk__58014 = G__58585;
count__58015 = G__58586;
i__58016 = G__58587;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58013);
if(temp__5735__auto__){
var seq__58013__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58013__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58013__$1);
var G__58588 = cljs.core.chunk_rest(seq__58013__$1);
var G__58589 = c__4556__auto__;
var G__58590 = cljs.core.count(c__4556__auto__);
var G__58591 = (0);
seq__58013 = G__58588;
chunk__58014 = G__58589;
count__58015 = G__58590;
i__58016 = G__58591;
continue;
} else {
var el = cljs.core.first(seq__58013__$1);
var handler_58593__$1 = ((function (seq__58013,chunk__58014,count__58015,i__58016,el,seq__58013__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58013,chunk__58014,count__58015,i__58016,el,seq__58013__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58593__$1);


var G__58594 = cljs.core.next(seq__58013__$1);
var G__58595 = null;
var G__58596 = (0);
var G__58597 = (0);
seq__58013 = G__58594;
chunk__58014 = G__58595;
count__58015 = G__58596;
i__58016 = G__58597;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__58028 = arguments.length;
switch (G__58028) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__58035 = cljs.core.seq(events);
var chunk__58036 = null;
var count__58037 = (0);
var i__58038 = (0);
while(true){
if((i__58038 < count__58037)){
var vec__58050 = chunk__58036.cljs$core$IIndexed$_nth$arity$2(null,i__58038);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58050,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58607 = seq__58035;
var G__58608 = chunk__58036;
var G__58609 = count__58037;
var G__58610 = (i__58038 + (1));
seq__58035 = G__58607;
chunk__58036 = G__58608;
count__58037 = G__58609;
i__58038 = G__58610;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58035);
if(temp__5735__auto__){
var seq__58035__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58035__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58035__$1);
var G__58612 = cljs.core.chunk_rest(seq__58035__$1);
var G__58613 = c__4556__auto__;
var G__58614 = cljs.core.count(c__4556__auto__);
var G__58615 = (0);
seq__58035 = G__58612;
chunk__58036 = G__58613;
count__58037 = G__58614;
i__58038 = G__58615;
continue;
} else {
var vec__58056 = cljs.core.first(seq__58035__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58056,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58617 = cljs.core.next(seq__58035__$1);
var G__58618 = null;
var G__58619 = (0);
var G__58620 = (0);
seq__58035 = G__58617;
chunk__58036 = G__58618;
count__58037 = G__58619;
i__58038 = G__58620;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__58061 = cljs.core.seq(styles);
var chunk__58062 = null;
var count__58063 = (0);
var i__58064 = (0);
while(true){
if((i__58064 < count__58063)){
var vec__58079 = chunk__58062.cljs$core$IIndexed$_nth$arity$2(null,i__58064);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58079,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58622 = seq__58061;
var G__58623 = chunk__58062;
var G__58624 = count__58063;
var G__58625 = (i__58064 + (1));
seq__58061 = G__58622;
chunk__58062 = G__58623;
count__58063 = G__58624;
i__58064 = G__58625;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58061);
if(temp__5735__auto__){
var seq__58061__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58061__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58061__$1);
var G__58626 = cljs.core.chunk_rest(seq__58061__$1);
var G__58627 = c__4556__auto__;
var G__58628 = cljs.core.count(c__4556__auto__);
var G__58629 = (0);
seq__58061 = G__58626;
chunk__58062 = G__58627;
count__58063 = G__58628;
i__58064 = G__58629;
continue;
} else {
var vec__58083 = cljs.core.first(seq__58061__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58083,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58631 = cljs.core.next(seq__58061__$1);
var G__58632 = null;
var G__58633 = (0);
var G__58634 = (0);
seq__58061 = G__58631;
chunk__58062 = G__58632;
count__58063 = G__58633;
i__58064 = G__58634;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__58090_58636 = key;
var G__58090_58637__$1 = (((G__58090_58636 instanceof cljs.core.Keyword))?G__58090_58636.fqn:null);
switch (G__58090_58637__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_58644 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_58644,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_58644,"aria-");
}
})())){
el.setAttribute(ks_58644,value);
} else {
(el[ks_58644] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__58104){
var map__58105 = p__58104;
var map__58105__$1 = (((((!((map__58105 == null))))?(((((map__58105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58105):map__58105);
var props = map__58105__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__58111 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58111,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58111,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58111,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58114 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58114,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58114;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58119 = arguments.length;
switch (G__58119) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58125){
var vec__58127 = p__58125;
var seq__58128 = cljs.core.seq(vec__58127);
var first__58129 = cljs.core.first(seq__58128);
var seq__58128__$1 = cljs.core.next(seq__58128);
var nn = first__58129;
var first__58129__$1 = cljs.core.first(seq__58128__$1);
var seq__58128__$2 = cljs.core.next(seq__58128__$1);
var np = first__58129__$1;
var nc = seq__58128__$2;
var node = vec__58127;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58131 = nn;
var G__58132 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58131,G__58132) : create_fn.call(null,G__58131,G__58132));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58134 = nn;
var G__58135 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58134,G__58135) : create_fn.call(null,G__58134,G__58135));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58138 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58138,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58138,(1),null);
var seq__58141_58665 = cljs.core.seq(node_children);
var chunk__58142_58666 = null;
var count__58143_58667 = (0);
var i__58144_58668 = (0);
while(true){
if((i__58144_58668 < count__58143_58667)){
var child_struct_58670 = chunk__58142_58666.cljs$core$IIndexed$_nth$arity$2(null,i__58144_58668);
var children_58671 = shadow.dom.dom_node(child_struct_58670);
if(cljs.core.seq_QMARK_(children_58671)){
var seq__58171_58674 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58671));
var chunk__58173_58675 = null;
var count__58174_58676 = (0);
var i__58175_58677 = (0);
while(true){
if((i__58175_58677 < count__58174_58676)){
var child_58678 = chunk__58173_58675.cljs$core$IIndexed$_nth$arity$2(null,i__58175_58677);
if(cljs.core.truth_(child_58678)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58678);


var G__58680 = seq__58171_58674;
var G__58681 = chunk__58173_58675;
var G__58682 = count__58174_58676;
var G__58683 = (i__58175_58677 + (1));
seq__58171_58674 = G__58680;
chunk__58173_58675 = G__58681;
count__58174_58676 = G__58682;
i__58175_58677 = G__58683;
continue;
} else {
var G__58684 = seq__58171_58674;
var G__58685 = chunk__58173_58675;
var G__58686 = count__58174_58676;
var G__58687 = (i__58175_58677 + (1));
seq__58171_58674 = G__58684;
chunk__58173_58675 = G__58685;
count__58174_58676 = G__58686;
i__58175_58677 = G__58687;
continue;
}
} else {
var temp__5735__auto___58688 = cljs.core.seq(seq__58171_58674);
if(temp__5735__auto___58688){
var seq__58171_58689__$1 = temp__5735__auto___58688;
if(cljs.core.chunked_seq_QMARK_(seq__58171_58689__$1)){
var c__4556__auto___58691 = cljs.core.chunk_first(seq__58171_58689__$1);
var G__58692 = cljs.core.chunk_rest(seq__58171_58689__$1);
var G__58693 = c__4556__auto___58691;
var G__58694 = cljs.core.count(c__4556__auto___58691);
var G__58695 = (0);
seq__58171_58674 = G__58692;
chunk__58173_58675 = G__58693;
count__58174_58676 = G__58694;
i__58175_58677 = G__58695;
continue;
} else {
var child_58697 = cljs.core.first(seq__58171_58689__$1);
if(cljs.core.truth_(child_58697)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58697);


var G__58699 = cljs.core.next(seq__58171_58689__$1);
var G__58700 = null;
var G__58701 = (0);
var G__58702 = (0);
seq__58171_58674 = G__58699;
chunk__58173_58675 = G__58700;
count__58174_58676 = G__58701;
i__58175_58677 = G__58702;
continue;
} else {
var G__58704 = cljs.core.next(seq__58171_58689__$1);
var G__58705 = null;
var G__58706 = (0);
var G__58707 = (0);
seq__58171_58674 = G__58704;
chunk__58173_58675 = G__58705;
count__58174_58676 = G__58706;
i__58175_58677 = G__58707;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58671);
}


var G__58708 = seq__58141_58665;
var G__58709 = chunk__58142_58666;
var G__58710 = count__58143_58667;
var G__58711 = (i__58144_58668 + (1));
seq__58141_58665 = G__58708;
chunk__58142_58666 = G__58709;
count__58143_58667 = G__58710;
i__58144_58668 = G__58711;
continue;
} else {
var temp__5735__auto___58712 = cljs.core.seq(seq__58141_58665);
if(temp__5735__auto___58712){
var seq__58141_58713__$1 = temp__5735__auto___58712;
if(cljs.core.chunked_seq_QMARK_(seq__58141_58713__$1)){
var c__4556__auto___58714 = cljs.core.chunk_first(seq__58141_58713__$1);
var G__58715 = cljs.core.chunk_rest(seq__58141_58713__$1);
var G__58716 = c__4556__auto___58714;
var G__58717 = cljs.core.count(c__4556__auto___58714);
var G__58718 = (0);
seq__58141_58665 = G__58715;
chunk__58142_58666 = G__58716;
count__58143_58667 = G__58717;
i__58144_58668 = G__58718;
continue;
} else {
var child_struct_58720 = cljs.core.first(seq__58141_58713__$1);
var children_58721 = shadow.dom.dom_node(child_struct_58720);
if(cljs.core.seq_QMARK_(children_58721)){
var seq__58187_58722 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58721));
var chunk__58189_58723 = null;
var count__58190_58724 = (0);
var i__58191_58725 = (0);
while(true){
if((i__58191_58725 < count__58190_58724)){
var child_58726 = chunk__58189_58723.cljs$core$IIndexed$_nth$arity$2(null,i__58191_58725);
if(cljs.core.truth_(child_58726)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58726);


var G__58727 = seq__58187_58722;
var G__58728 = chunk__58189_58723;
var G__58729 = count__58190_58724;
var G__58730 = (i__58191_58725 + (1));
seq__58187_58722 = G__58727;
chunk__58189_58723 = G__58728;
count__58190_58724 = G__58729;
i__58191_58725 = G__58730;
continue;
} else {
var G__58732 = seq__58187_58722;
var G__58733 = chunk__58189_58723;
var G__58734 = count__58190_58724;
var G__58735 = (i__58191_58725 + (1));
seq__58187_58722 = G__58732;
chunk__58189_58723 = G__58733;
count__58190_58724 = G__58734;
i__58191_58725 = G__58735;
continue;
}
} else {
var temp__5735__auto___58737__$1 = cljs.core.seq(seq__58187_58722);
if(temp__5735__auto___58737__$1){
var seq__58187_58738__$1 = temp__5735__auto___58737__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58187_58738__$1)){
var c__4556__auto___58740 = cljs.core.chunk_first(seq__58187_58738__$1);
var G__58741 = cljs.core.chunk_rest(seq__58187_58738__$1);
var G__58742 = c__4556__auto___58740;
var G__58743 = cljs.core.count(c__4556__auto___58740);
var G__58744 = (0);
seq__58187_58722 = G__58741;
chunk__58189_58723 = G__58742;
count__58190_58724 = G__58743;
i__58191_58725 = G__58744;
continue;
} else {
var child_58746 = cljs.core.first(seq__58187_58738__$1);
if(cljs.core.truth_(child_58746)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58746);


var G__58749 = cljs.core.next(seq__58187_58738__$1);
var G__58750 = null;
var G__58751 = (0);
var G__58752 = (0);
seq__58187_58722 = G__58749;
chunk__58189_58723 = G__58750;
count__58190_58724 = G__58751;
i__58191_58725 = G__58752;
continue;
} else {
var G__58754 = cljs.core.next(seq__58187_58738__$1);
var G__58755 = null;
var G__58756 = (0);
var G__58757 = (0);
seq__58187_58722 = G__58754;
chunk__58189_58723 = G__58755;
count__58190_58724 = G__58756;
i__58191_58725 = G__58757;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58721);
}


var G__58758 = cljs.core.next(seq__58141_58713__$1);
var G__58759 = null;
var G__58760 = (0);
var G__58761 = (0);
seq__58141_58665 = G__58758;
chunk__58142_58666 = G__58759;
count__58143_58667 = G__58760;
i__58144_58668 = G__58761;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58199 = cljs.core.seq(node);
var chunk__58200 = null;
var count__58201 = (0);
var i__58202 = (0);
while(true){
if((i__58202 < count__58201)){
var n = chunk__58200.cljs$core$IIndexed$_nth$arity$2(null,i__58202);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58769 = seq__58199;
var G__58770 = chunk__58200;
var G__58771 = count__58201;
var G__58772 = (i__58202 + (1));
seq__58199 = G__58769;
chunk__58200 = G__58770;
count__58201 = G__58771;
i__58202 = G__58772;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58199);
if(temp__5735__auto__){
var seq__58199__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58199__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58199__$1);
var G__58774 = cljs.core.chunk_rest(seq__58199__$1);
var G__58775 = c__4556__auto__;
var G__58776 = cljs.core.count(c__4556__auto__);
var G__58777 = (0);
seq__58199 = G__58774;
chunk__58200 = G__58775;
count__58201 = G__58776;
i__58202 = G__58777;
continue;
} else {
var n = cljs.core.first(seq__58199__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58779 = cljs.core.next(seq__58199__$1);
var G__58780 = null;
var G__58781 = (0);
var G__58782 = (0);
seq__58199 = G__58779;
chunk__58200 = G__58780;
count__58201 = G__58781;
i__58202 = G__58782;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58211 = arguments.length;
switch (G__58211) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__58217 = arguments.length;
switch (G__58217) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__58228 = arguments.length;
switch (G__58228) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58799 = arguments.length;
var i__4737__auto___58800 = (0);
while(true){
if((i__4737__auto___58800 < len__4736__auto___58799)){
args__4742__auto__.push((arguments[i__4737__auto___58800]));

var G__58802 = (i__4737__auto___58800 + (1));
i__4737__auto___58800 = G__58802;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__58244_58807 = cljs.core.seq(nodes);
var chunk__58245_58808 = null;
var count__58246_58809 = (0);
var i__58247_58810 = (0);
while(true){
if((i__58247_58810 < count__58246_58809)){
var node_58812 = chunk__58245_58808.cljs$core$IIndexed$_nth$arity$2(null,i__58247_58810);
fragment.appendChild(shadow.dom._to_dom(node_58812));


var G__58813 = seq__58244_58807;
var G__58814 = chunk__58245_58808;
var G__58815 = count__58246_58809;
var G__58816 = (i__58247_58810 + (1));
seq__58244_58807 = G__58813;
chunk__58245_58808 = G__58814;
count__58246_58809 = G__58815;
i__58247_58810 = G__58816;
continue;
} else {
var temp__5735__auto___58817 = cljs.core.seq(seq__58244_58807);
if(temp__5735__auto___58817){
var seq__58244_58818__$1 = temp__5735__auto___58817;
if(cljs.core.chunked_seq_QMARK_(seq__58244_58818__$1)){
var c__4556__auto___58820 = cljs.core.chunk_first(seq__58244_58818__$1);
var G__58821 = cljs.core.chunk_rest(seq__58244_58818__$1);
var G__58822 = c__4556__auto___58820;
var G__58823 = cljs.core.count(c__4556__auto___58820);
var G__58824 = (0);
seq__58244_58807 = G__58821;
chunk__58245_58808 = G__58822;
count__58246_58809 = G__58823;
i__58247_58810 = G__58824;
continue;
} else {
var node_58825 = cljs.core.first(seq__58244_58818__$1);
fragment.appendChild(shadow.dom._to_dom(node_58825));


var G__58826 = cljs.core.next(seq__58244_58818__$1);
var G__58827 = null;
var G__58828 = (0);
var G__58829 = (0);
seq__58244_58807 = G__58826;
chunk__58245_58808 = G__58827;
count__58246_58809 = G__58828;
i__58247_58810 = G__58829;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58240){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58240));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58256_58832 = cljs.core.seq(scripts);
var chunk__58257_58833 = null;
var count__58258_58834 = (0);
var i__58259_58835 = (0);
while(true){
if((i__58259_58835 < count__58258_58834)){
var vec__58272_58837 = chunk__58257_58833.cljs$core$IIndexed$_nth$arity$2(null,i__58259_58835);
var script_tag_58838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58272_58837,(0),null);
var script_body_58839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58272_58837,(1),null);
eval(script_body_58839);


var G__58840 = seq__58256_58832;
var G__58841 = chunk__58257_58833;
var G__58842 = count__58258_58834;
var G__58843 = (i__58259_58835 + (1));
seq__58256_58832 = G__58840;
chunk__58257_58833 = G__58841;
count__58258_58834 = G__58842;
i__58259_58835 = G__58843;
continue;
} else {
var temp__5735__auto___58844 = cljs.core.seq(seq__58256_58832);
if(temp__5735__auto___58844){
var seq__58256_58845__$1 = temp__5735__auto___58844;
if(cljs.core.chunked_seq_QMARK_(seq__58256_58845__$1)){
var c__4556__auto___58847 = cljs.core.chunk_first(seq__58256_58845__$1);
var G__58848 = cljs.core.chunk_rest(seq__58256_58845__$1);
var G__58849 = c__4556__auto___58847;
var G__58850 = cljs.core.count(c__4556__auto___58847);
var G__58851 = (0);
seq__58256_58832 = G__58848;
chunk__58257_58833 = G__58849;
count__58258_58834 = G__58850;
i__58259_58835 = G__58851;
continue;
} else {
var vec__58278_58852 = cljs.core.first(seq__58256_58845__$1);
var script_tag_58853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58278_58852,(0),null);
var script_body_58854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58278_58852,(1),null);
eval(script_body_58854);


var G__58855 = cljs.core.next(seq__58256_58845__$1);
var G__58856 = null;
var G__58857 = (0);
var G__58858 = (0);
seq__58256_58832 = G__58855;
chunk__58257_58833 = G__58856;
count__58258_58834 = G__58857;
i__58259_58835 = G__58858;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58281){
var vec__58284 = p__58281;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58284,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58284,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58294 = arguments.length;
switch (G__58294) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58300 = cljs.core.seq(style_keys);
var chunk__58301 = null;
var count__58302 = (0);
var i__58303 = (0);
while(true){
if((i__58303 < count__58302)){
var it = chunk__58301.cljs$core$IIndexed$_nth$arity$2(null,i__58303);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58873 = seq__58300;
var G__58874 = chunk__58301;
var G__58875 = count__58302;
var G__58876 = (i__58303 + (1));
seq__58300 = G__58873;
chunk__58301 = G__58874;
count__58302 = G__58875;
i__58303 = G__58876;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58300);
if(temp__5735__auto__){
var seq__58300__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58300__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58300__$1);
var G__58877 = cljs.core.chunk_rest(seq__58300__$1);
var G__58878 = c__4556__auto__;
var G__58879 = cljs.core.count(c__4556__auto__);
var G__58880 = (0);
seq__58300 = G__58877;
chunk__58301 = G__58878;
count__58302 = G__58879;
i__58303 = G__58880;
continue;
} else {
var it = cljs.core.first(seq__58300__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58882 = cljs.core.next(seq__58300__$1);
var G__58883 = null;
var G__58884 = (0);
var G__58885 = (0);
seq__58300 = G__58882;
chunk__58301 = G__58883;
count__58302 = G__58884;
i__58303 = G__58885;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k58311,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__58315 = k58311;
var G__58315__$1 = (((G__58315 instanceof cljs.core.Keyword))?G__58315.fqn:null);
switch (G__58315__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58311,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__58316){
var vec__58317 = p__58316;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58317,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58317,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58310){
var self__ = this;
var G__58310__$1 = this;
return (new cljs.core.RecordIter((0),G__58310__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58312,other58313){
var self__ = this;
var this58312__$1 = this;
return (((!((other58313 == null)))) && ((this58312__$1.constructor === other58313.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58312__$1.x,other58313.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58312__$1.y,other58313.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58312__$1.__extmap,other58313.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__58310){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__58324 = cljs.core.keyword_identical_QMARK_;
var expr__58325 = k__4388__auto__;
if(cljs.core.truth_((pred__58324.cljs$core$IFn$_invoke$arity$2 ? pred__58324.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__58325) : pred__58324.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58325)))){
return (new shadow.dom.Coordinate(G__58310,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58324.cljs$core$IFn$_invoke$arity$2 ? pred__58324.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__58325) : pred__58324.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58325)))){
return (new shadow.dom.Coordinate(self__.x,G__58310,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__58310),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__58310){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58310,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58314){
var extmap__4419__auto__ = (function (){var G__58338 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58314,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58314)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58338);
} else {
return G__58338;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58314),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58314),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k58347,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__58356 = k58347;
var G__58356__$1 = (((G__58356 instanceof cljs.core.Keyword))?G__58356.fqn:null);
switch (G__58356__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58347,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__58361){
var vec__58363 = p__58361;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58363,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58363,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58346){
var self__ = this;
var G__58346__$1 = this;
return (new cljs.core.RecordIter((0),G__58346__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58348,other58349){
var self__ = this;
var this58348__$1 = this;
return (((!((other58349 == null)))) && ((this58348__$1.constructor === other58349.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58348__$1.w,other58349.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58348__$1.h,other58349.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58348__$1.__extmap,other58349.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__58346){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__58381 = cljs.core.keyword_identical_QMARK_;
var expr__58382 = k__4388__auto__;
if(cljs.core.truth_((pred__58381.cljs$core$IFn$_invoke$arity$2 ? pred__58381.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__58382) : pred__58381.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__58382)))){
return (new shadow.dom.Size(G__58346,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58381.cljs$core$IFn$_invoke$arity$2 ? pred__58381.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__58382) : pred__58381.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__58382)))){
return (new shadow.dom.Size(self__.w,G__58346,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__58346),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__58346){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58346,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58351){
var extmap__4419__auto__ = (function (){var G__58388 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58351,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58351)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58388);
} else {
return G__58388;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58351),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58351),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__58913 = (i + (1));
var G__58914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58913;
ret = G__58914;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58398){
var vec__58399 = p__58398;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58399,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58399,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58403 = arguments.length;
switch (G__58403) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__58922 = ps;
var G__58923 = (i + (1));
el__$1 = G__58922;
i = G__58923;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58428 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58428,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58428,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58428,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58432_58927 = cljs.core.seq(props);
var chunk__58433_58928 = null;
var count__58434_58929 = (0);
var i__58435_58930 = (0);
while(true){
if((i__58435_58930 < count__58434_58929)){
var vec__58446_58931 = chunk__58433_58928.cljs$core$IIndexed$_nth$arity$2(null,i__58435_58930);
var k_58932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58446_58931,(0),null);
var v_58933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58446_58931,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58932);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58932),v_58933);


var G__58934 = seq__58432_58927;
var G__58935 = chunk__58433_58928;
var G__58936 = count__58434_58929;
var G__58937 = (i__58435_58930 + (1));
seq__58432_58927 = G__58934;
chunk__58433_58928 = G__58935;
count__58434_58929 = G__58936;
i__58435_58930 = G__58937;
continue;
} else {
var temp__5735__auto___58938 = cljs.core.seq(seq__58432_58927);
if(temp__5735__auto___58938){
var seq__58432_58939__$1 = temp__5735__auto___58938;
if(cljs.core.chunked_seq_QMARK_(seq__58432_58939__$1)){
var c__4556__auto___58940 = cljs.core.chunk_first(seq__58432_58939__$1);
var G__58941 = cljs.core.chunk_rest(seq__58432_58939__$1);
var G__58942 = c__4556__auto___58940;
var G__58943 = cljs.core.count(c__4556__auto___58940);
var G__58944 = (0);
seq__58432_58927 = G__58941;
chunk__58433_58928 = G__58942;
count__58434_58929 = G__58943;
i__58435_58930 = G__58944;
continue;
} else {
var vec__58452_58945 = cljs.core.first(seq__58432_58939__$1);
var k_58946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58452_58945,(0),null);
var v_58947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58452_58945,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58946);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58946),v_58947);


var G__58951 = cljs.core.next(seq__58432_58939__$1);
var G__58952 = null;
var G__58953 = (0);
var G__58954 = (0);
seq__58432_58927 = G__58951;
chunk__58433_58928 = G__58952;
count__58434_58929 = G__58953;
i__58435_58930 = G__58954;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58459 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58459,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58459,(1),null);
var seq__58462_58955 = cljs.core.seq(node_children);
var chunk__58464_58956 = null;
var count__58465_58957 = (0);
var i__58466_58958 = (0);
while(true){
if((i__58466_58958 < count__58465_58957)){
var child_struct_58959 = chunk__58464_58956.cljs$core$IIndexed$_nth$arity$2(null,i__58466_58958);
if((!((child_struct_58959 == null)))){
if(typeof child_struct_58959 === 'string'){
var text_58960 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58960),child_struct_58959].join(''));
} else {
var children_58961 = shadow.dom.svg_node(child_struct_58959);
if(cljs.core.seq_QMARK_(children_58961)){
var seq__58496_58962 = cljs.core.seq(children_58961);
var chunk__58498_58963 = null;
var count__58499_58964 = (0);
var i__58500_58965 = (0);
while(true){
if((i__58500_58965 < count__58499_58964)){
var child_58966 = chunk__58498_58963.cljs$core$IIndexed$_nth$arity$2(null,i__58500_58965);
if(cljs.core.truth_(child_58966)){
node.appendChild(child_58966);


var G__58967 = seq__58496_58962;
var G__58968 = chunk__58498_58963;
var G__58969 = count__58499_58964;
var G__58970 = (i__58500_58965 + (1));
seq__58496_58962 = G__58967;
chunk__58498_58963 = G__58968;
count__58499_58964 = G__58969;
i__58500_58965 = G__58970;
continue;
} else {
var G__58971 = seq__58496_58962;
var G__58972 = chunk__58498_58963;
var G__58973 = count__58499_58964;
var G__58974 = (i__58500_58965 + (1));
seq__58496_58962 = G__58971;
chunk__58498_58963 = G__58972;
count__58499_58964 = G__58973;
i__58500_58965 = G__58974;
continue;
}
} else {
var temp__5735__auto___58976 = cljs.core.seq(seq__58496_58962);
if(temp__5735__auto___58976){
var seq__58496_58980__$1 = temp__5735__auto___58976;
if(cljs.core.chunked_seq_QMARK_(seq__58496_58980__$1)){
var c__4556__auto___58981 = cljs.core.chunk_first(seq__58496_58980__$1);
var G__58982 = cljs.core.chunk_rest(seq__58496_58980__$1);
var G__58983 = c__4556__auto___58981;
var G__58984 = cljs.core.count(c__4556__auto___58981);
var G__58985 = (0);
seq__58496_58962 = G__58982;
chunk__58498_58963 = G__58983;
count__58499_58964 = G__58984;
i__58500_58965 = G__58985;
continue;
} else {
var child_58986 = cljs.core.first(seq__58496_58980__$1);
if(cljs.core.truth_(child_58986)){
node.appendChild(child_58986);


var G__58987 = cljs.core.next(seq__58496_58980__$1);
var G__58988 = null;
var G__58989 = (0);
var G__58990 = (0);
seq__58496_58962 = G__58987;
chunk__58498_58963 = G__58988;
count__58499_58964 = G__58989;
i__58500_58965 = G__58990;
continue;
} else {
var G__58991 = cljs.core.next(seq__58496_58980__$1);
var G__58992 = null;
var G__58993 = (0);
var G__58994 = (0);
seq__58496_58962 = G__58991;
chunk__58498_58963 = G__58992;
count__58499_58964 = G__58993;
i__58500_58965 = G__58994;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58961);
}
}


var G__58995 = seq__58462_58955;
var G__58996 = chunk__58464_58956;
var G__58997 = count__58465_58957;
var G__58998 = (i__58466_58958 + (1));
seq__58462_58955 = G__58995;
chunk__58464_58956 = G__58996;
count__58465_58957 = G__58997;
i__58466_58958 = G__58998;
continue;
} else {
var G__58999 = seq__58462_58955;
var G__59000 = chunk__58464_58956;
var G__59001 = count__58465_58957;
var G__59002 = (i__58466_58958 + (1));
seq__58462_58955 = G__58999;
chunk__58464_58956 = G__59000;
count__58465_58957 = G__59001;
i__58466_58958 = G__59002;
continue;
}
} else {
var temp__5735__auto___59003 = cljs.core.seq(seq__58462_58955);
if(temp__5735__auto___59003){
var seq__58462_59004__$1 = temp__5735__auto___59003;
if(cljs.core.chunked_seq_QMARK_(seq__58462_59004__$1)){
var c__4556__auto___59005 = cljs.core.chunk_first(seq__58462_59004__$1);
var G__59006 = cljs.core.chunk_rest(seq__58462_59004__$1);
var G__59007 = c__4556__auto___59005;
var G__59008 = cljs.core.count(c__4556__auto___59005);
var G__59009 = (0);
seq__58462_58955 = G__59006;
chunk__58464_58956 = G__59007;
count__58465_58957 = G__59008;
i__58466_58958 = G__59009;
continue;
} else {
var child_struct_59010 = cljs.core.first(seq__58462_59004__$1);
if((!((child_struct_59010 == null)))){
if(typeof child_struct_59010 === 'string'){
var text_59011 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59011),child_struct_59010].join(''));
} else {
var children_59012 = shadow.dom.svg_node(child_struct_59010);
if(cljs.core.seq_QMARK_(children_59012)){
var seq__58509_59013 = cljs.core.seq(children_59012);
var chunk__58511_59014 = null;
var count__58512_59015 = (0);
var i__58513_59016 = (0);
while(true){
if((i__58513_59016 < count__58512_59015)){
var child_59017 = chunk__58511_59014.cljs$core$IIndexed$_nth$arity$2(null,i__58513_59016);
if(cljs.core.truth_(child_59017)){
node.appendChild(child_59017);


var G__59018 = seq__58509_59013;
var G__59019 = chunk__58511_59014;
var G__59020 = count__58512_59015;
var G__59021 = (i__58513_59016 + (1));
seq__58509_59013 = G__59018;
chunk__58511_59014 = G__59019;
count__58512_59015 = G__59020;
i__58513_59016 = G__59021;
continue;
} else {
var G__59022 = seq__58509_59013;
var G__59023 = chunk__58511_59014;
var G__59024 = count__58512_59015;
var G__59025 = (i__58513_59016 + (1));
seq__58509_59013 = G__59022;
chunk__58511_59014 = G__59023;
count__58512_59015 = G__59024;
i__58513_59016 = G__59025;
continue;
}
} else {
var temp__5735__auto___59026__$1 = cljs.core.seq(seq__58509_59013);
if(temp__5735__auto___59026__$1){
var seq__58509_59027__$1 = temp__5735__auto___59026__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58509_59027__$1)){
var c__4556__auto___59028 = cljs.core.chunk_first(seq__58509_59027__$1);
var G__59029 = cljs.core.chunk_rest(seq__58509_59027__$1);
var G__59030 = c__4556__auto___59028;
var G__59031 = cljs.core.count(c__4556__auto___59028);
var G__59032 = (0);
seq__58509_59013 = G__59029;
chunk__58511_59014 = G__59030;
count__58512_59015 = G__59031;
i__58513_59016 = G__59032;
continue;
} else {
var child_59033 = cljs.core.first(seq__58509_59027__$1);
if(cljs.core.truth_(child_59033)){
node.appendChild(child_59033);


var G__59034 = cljs.core.next(seq__58509_59027__$1);
var G__59035 = null;
var G__59036 = (0);
var G__59037 = (0);
seq__58509_59013 = G__59034;
chunk__58511_59014 = G__59035;
count__58512_59015 = G__59036;
i__58513_59016 = G__59037;
continue;
} else {
var G__59038 = cljs.core.next(seq__58509_59027__$1);
var G__59039 = null;
var G__59040 = (0);
var G__59041 = (0);
seq__58509_59013 = G__59038;
chunk__58511_59014 = G__59039;
count__58512_59015 = G__59040;
i__58513_59016 = G__59041;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59012);
}
}


var G__59042 = cljs.core.next(seq__58462_59004__$1);
var G__59043 = null;
var G__59044 = (0);
var G__59045 = (0);
seq__58462_58955 = G__59042;
chunk__58464_58956 = G__59043;
count__58465_58957 = G__59044;
i__58466_58958 = G__59045;
continue;
} else {
var G__59046 = cljs.core.next(seq__58462_59004__$1);
var G__59047 = null;
var G__59048 = (0);
var G__59049 = (0);
seq__58462_58955 = G__59046;
chunk__58464_58956 = G__59047;
count__58465_58957 = G__59048;
i__58466_58958 = G__59049;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59052 = arguments.length;
var i__4737__auto___59053 = (0);
while(true){
if((i__4737__auto___59053 < len__4736__auto___59052)){
args__4742__auto__.push((arguments[i__4737__auto___59053]));

var G__59054 = (i__4737__auto___59053 + (1));
i__4737__auto___59053 = G__59054;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58525){
var G__58526 = cljs.core.first(seq58525);
var seq58525__$1 = cljs.core.next(seq58525);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58526,seq58525__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58533 = arguments.length;
switch (G__58533) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__56383__auto___59057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_58547){
var state_val_58548 = (state_58547[(1)]);
if((state_val_58548 === (1))){
var state_58547__$1 = state_58547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58547__$1,(2),once_or_cleanup);
} else {
if((state_val_58548 === (2))){
var inst_58544 = (state_58547[(2)]);
var inst_58545 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58547__$1 = (function (){var statearr_58550 = state_58547;
(statearr_58550[(7)] = inst_58544);

return statearr_58550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58547__$1,inst_58545);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__56259__auto__ = null;
var shadow$dom$state_machine__56259__auto____0 = (function (){
var statearr_58554 = [null,null,null,null,null,null,null,null];
(statearr_58554[(0)] = shadow$dom$state_machine__56259__auto__);

(statearr_58554[(1)] = (1));

return statearr_58554;
});
var shadow$dom$state_machine__56259__auto____1 = (function (state_58547){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_58547);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e58555){var ex__56262__auto__ = e58555;
var statearr_58556_59058 = state_58547;
(statearr_58556_59058[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_58547[(4)]))){
var statearr_58557_59059 = state_58547;
(statearr_58557_59059[(1)] = cljs.core.first((state_58547[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59060 = state_58547;
state_58547 = G__59060;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
shadow$dom$state_machine__56259__auto__ = function(state_58547){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__56259__auto____0.call(this);
case 1:
return shadow$dom$state_machine__56259__auto____1.call(this,state_58547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__56259__auto____0;
shadow$dom$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__56259__auto____1;
return shadow$dom$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_58558 = f__56384__auto__();
(statearr_58558[(6)] = c__56383__auto___59057);

return statearr_58558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

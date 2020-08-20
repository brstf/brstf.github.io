goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__48438 = e.target.readyState;
var fexpr__48437 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__48437.cljs$core$IFn$_invoke$arity$1 ? fexpr__48437.cljs$core$IFn$_invoke$arity$1(G__48438) : fexpr__48437.call(null,G__48438));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__48446,handler){
var map__48447 = p__48446;
var map__48447__$1 = (((((!((map__48447 == null))))?(((((map__48447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48447):map__48447);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48447__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48447__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48447__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48447__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48447__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48447__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48447__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__48444_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__48444_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___48478 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___48478)){
var response_type_48479 = temp__5735__auto___48478;
(this$__$1.responseType = cljs.core.name(response_type_48479));
} else {
}

var seq__48449_48480 = cljs.core.seq(headers);
var chunk__48450_48481 = null;
var count__48451_48482 = (0);
var i__48452_48483 = (0);
while(true){
if((i__48452_48483 < count__48451_48482)){
var vec__48462_48486 = chunk__48450_48481.cljs$core$IIndexed$_nth$arity$2(null,i__48452_48483);
var k_48487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48462_48486,(0),null);
var v_48488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48462_48486,(1),null);
this$__$1.setRequestHeader(k_48487,v_48488);


var G__48492 = seq__48449_48480;
var G__48493 = chunk__48450_48481;
var G__48494 = count__48451_48482;
var G__48495 = (i__48452_48483 + (1));
seq__48449_48480 = G__48492;
chunk__48450_48481 = G__48493;
count__48451_48482 = G__48494;
i__48452_48483 = G__48495;
continue;
} else {
var temp__5735__auto___48496 = cljs.core.seq(seq__48449_48480);
if(temp__5735__auto___48496){
var seq__48449_48497__$1 = temp__5735__auto___48496;
if(cljs.core.chunked_seq_QMARK_(seq__48449_48497__$1)){
var c__4556__auto___48498 = cljs.core.chunk_first(seq__48449_48497__$1);
var G__48499 = cljs.core.chunk_rest(seq__48449_48497__$1);
var G__48500 = c__4556__auto___48498;
var G__48501 = cljs.core.count(c__4556__auto___48498);
var G__48502 = (0);
seq__48449_48480 = G__48499;
chunk__48450_48481 = G__48500;
count__48451_48482 = G__48501;
i__48452_48483 = G__48502;
continue;
} else {
var vec__48469_48503 = cljs.core.first(seq__48449_48497__$1);
var k_48504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48469_48503,(0),null);
var v_48505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48469_48503,(1),null);
this$__$1.setRequestHeader(k_48504,v_48505);


var G__48506 = cljs.core.next(seq__48449_48497__$1);
var G__48507 = null;
var G__48508 = (0);
var G__48509 = (0);
seq__48449_48480 = G__48506;
chunk__48450_48481 = G__48507;
count__48451_48482 = G__48508;
i__48452_48483 = G__48509;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map

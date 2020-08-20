goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56455 = arguments.length;
switch (G__56455) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56456 = (function (f,blockable,meta56457){
this.f = f;
this.blockable = blockable;
this.meta56457 = meta56457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56458,meta56457__$1){
var self__ = this;
var _56458__$1 = this;
return (new cljs.core.async.t_cljs$core$async56456(self__.f,self__.blockable,meta56457__$1));
}));

(cljs.core.async.t_cljs$core$async56456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56458){
var self__ = this;
var _56458__$1 = this;
return self__.meta56457;
}));

(cljs.core.async.t_cljs$core$async56456.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56456.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56457","meta56457",1059068446,null)], null);
}));

(cljs.core.async.t_cljs$core$async56456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56456");

(cljs.core.async.t_cljs$core$async56456.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56456.
 */
cljs.core.async.__GT_t_cljs$core$async56456 = (function cljs$core$async$__GT_t_cljs$core$async56456(f__$1,blockable__$1,meta56457){
return (new cljs.core.async.t_cljs$core$async56456(f__$1,blockable__$1,meta56457));
});

}

return (new cljs.core.async.t_cljs$core$async56456(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56461 = arguments.length;
switch (G__56461) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56463 = arguments.length;
switch (G__56463) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56465 = arguments.length;
switch (G__56465) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_57943 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57943) : fn1.call(null,val_57943));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57943) : fn1.call(null,val_57943));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56467 = arguments.length;
switch (G__56467) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___57946 = n;
var x_57947 = (0);
while(true){
if((x_57947 < n__4613__auto___57946)){
(a[x_57947] = x_57947);

var G__57948 = (x_57947 + (1));
x_57947 = G__57948;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56468 = (function (flag,meta56469){
this.flag = flag;
this.meta56469 = meta56469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56470,meta56469__$1){
var self__ = this;
var _56470__$1 = this;
return (new cljs.core.async.t_cljs$core$async56468(self__.flag,meta56469__$1));
}));

(cljs.core.async.t_cljs$core$async56468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56470){
var self__ = this;
var _56470__$1 = this;
return self__.meta56469;
}));

(cljs.core.async.t_cljs$core$async56468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56469","meta56469",-542016758,null)], null);
}));

(cljs.core.async.t_cljs$core$async56468.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56468");

(cljs.core.async.t_cljs$core$async56468.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56468");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56468.
 */
cljs.core.async.__GT_t_cljs$core$async56468 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56468(flag__$1,meta56469){
return (new cljs.core.async.t_cljs$core$async56468(flag__$1,meta56469));
});

}

return (new cljs.core.async.t_cljs$core$async56468(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56471 = (function (flag,cb,meta56472){
this.flag = flag;
this.cb = cb;
this.meta56472 = meta56472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56473,meta56472__$1){
var self__ = this;
var _56473__$1 = this;
return (new cljs.core.async.t_cljs$core$async56471(self__.flag,self__.cb,meta56472__$1));
}));

(cljs.core.async.t_cljs$core$async56471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56473){
var self__ = this;
var _56473__$1 = this;
return self__.meta56472;
}));

(cljs.core.async.t_cljs$core$async56471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56472","meta56472",-1261531645,null)], null);
}));

(cljs.core.async.t_cljs$core$async56471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56471");

(cljs.core.async.t_cljs$core$async56471.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56471.
 */
cljs.core.async.__GT_t_cljs$core$async56471 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56471(flag__$1,cb__$1,meta56472){
return (new cljs.core.async.t_cljs$core$async56471(flag__$1,cb__$1,meta56472));
});

}

return (new cljs.core.async.t_cljs$core$async56471(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56474_SHARP_){
var G__56476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56474_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56476) : fret.call(null,G__56476));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56475_SHARP_){
var G__56477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56475_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56477) : fret.call(null,G__56477));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__57951 = (i + (1));
i = G__57951;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___57952 = arguments.length;
var i__4737__auto___57953 = (0);
while(true){
if((i__4737__auto___57953 < len__4736__auto___57952)){
args__4742__auto__.push((arguments[i__4737__auto___57953]));

var G__57954 = (i__4737__auto___57953 + (1));
i__4737__auto___57953 = G__57954;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56480){
var map__56481 = p__56480;
var map__56481__$1 = (((((!((map__56481 == null))))?(((((map__56481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56481):map__56481);
var opts = map__56481__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56478){
var G__56479 = cljs.core.first(seq56478);
var seq56478__$1 = cljs.core.next(seq56478);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56479,seq56478__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56484 = arguments.length;
switch (G__56484) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__56383__auto___57957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_56508){
var state_val_56509 = (state_56508[(1)]);
if((state_val_56509 === (7))){
var inst_56504 = (state_56508[(2)]);
var state_56508__$1 = state_56508;
var statearr_56510_57959 = state_56508__$1;
(statearr_56510_57959[(2)] = inst_56504);

(statearr_56510_57959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (1))){
var state_56508__$1 = state_56508;
var statearr_56511_57961 = state_56508__$1;
(statearr_56511_57961[(2)] = null);

(statearr_56511_57961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (4))){
var inst_56487 = (state_56508[(7)]);
var inst_56487__$1 = (state_56508[(2)]);
var inst_56488 = (inst_56487__$1 == null);
var state_56508__$1 = (function (){var statearr_56512 = state_56508;
(statearr_56512[(7)] = inst_56487__$1);

return statearr_56512;
})();
if(cljs.core.truth_(inst_56488)){
var statearr_56513_57962 = state_56508__$1;
(statearr_56513_57962[(1)] = (5));

} else {
var statearr_56514_57963 = state_56508__$1;
(statearr_56514_57963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (13))){
var state_56508__$1 = state_56508;
var statearr_56515_57964 = state_56508__$1;
(statearr_56515_57964[(2)] = null);

(statearr_56515_57964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (6))){
var inst_56487 = (state_56508[(7)]);
var state_56508__$1 = state_56508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56508__$1,(11),to,inst_56487);
} else {
if((state_val_56509 === (3))){
var inst_56506 = (state_56508[(2)]);
var state_56508__$1 = state_56508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56508__$1,inst_56506);
} else {
if((state_val_56509 === (12))){
var state_56508__$1 = state_56508;
var statearr_56516_57966 = state_56508__$1;
(statearr_56516_57966[(2)] = null);

(statearr_56516_57966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (2))){
var state_56508__$1 = state_56508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56508__$1,(4),from);
} else {
if((state_val_56509 === (11))){
var inst_56497 = (state_56508[(2)]);
var state_56508__$1 = state_56508;
if(cljs.core.truth_(inst_56497)){
var statearr_56517_57968 = state_56508__$1;
(statearr_56517_57968[(1)] = (12));

} else {
var statearr_56518_57969 = state_56508__$1;
(statearr_56518_57969[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (9))){
var state_56508__$1 = state_56508;
var statearr_56519_57970 = state_56508__$1;
(statearr_56519_57970[(2)] = null);

(statearr_56519_57970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (5))){
var state_56508__$1 = state_56508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56520_57971 = state_56508__$1;
(statearr_56520_57971[(1)] = (8));

} else {
var statearr_56521_57972 = state_56508__$1;
(statearr_56521_57972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (14))){
var inst_56502 = (state_56508[(2)]);
var state_56508__$1 = state_56508;
var statearr_56522_57973 = state_56508__$1;
(statearr_56522_57973[(2)] = inst_56502);

(statearr_56522_57973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (10))){
var inst_56494 = (state_56508[(2)]);
var state_56508__$1 = state_56508;
var statearr_56523_57975 = state_56508__$1;
(statearr_56523_57975[(2)] = inst_56494);

(statearr_56523_57975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56509 === (8))){
var inst_56491 = cljs.core.async.close_BANG_(to);
var state_56508__$1 = state_56508;
var statearr_56524_57977 = state_56508__$1;
(statearr_56524_57977[(2)] = inst_56491);

(statearr_56524_57977[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_56525 = [null,null,null,null,null,null,null,null];
(statearr_56525[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_56525[(1)] = (1));

return statearr_56525;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_56508){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56508);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56526){var ex__56262__auto__ = e56526;
var statearr_56527_57978 = state_56508;
(statearr_56527_57978[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56508[(4)]))){
var statearr_56528_57979 = state_56508;
(statearr_56528_57979[(1)] = cljs.core.first((state_56508[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57980 = state_56508;
state_56508 = G__57980;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_56508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_56508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_56529 = f__56384__auto__();
(statearr_56529[(6)] = c__56383__auto___57957);

return statearr_56529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__56530){
var vec__56531 = p__56530;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56531,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56531,(1),null);
var job = vec__56531;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56383__auto___57983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_56538){
var state_val_56539 = (state_56538[(1)]);
if((state_val_56539 === (1))){
var state_56538__$1 = state_56538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56538__$1,(2),res,v);
} else {
if((state_val_56539 === (2))){
var inst_56535 = (state_56538[(2)]);
var inst_56536 = cljs.core.async.close_BANG_(res);
var state_56538__$1 = (function (){var statearr_56540 = state_56538;
(statearr_56540[(7)] = inst_56535);

return statearr_56540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56538__$1,inst_56536);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0 = (function (){
var statearr_56541 = [null,null,null,null,null,null,null,null];
(statearr_56541[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__);

(statearr_56541[(1)] = (1));

return statearr_56541;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1 = (function (state_56538){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56538);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56542){var ex__56262__auto__ = e56542;
var statearr_56543_57984 = state_56538;
(statearr_56543_57984[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56538[(4)]))){
var statearr_56544_57986 = state_56538;
(statearr_56544_57986[(1)] = cljs.core.first((state_56538[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57988 = state_56538;
state_56538 = G__57988;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = function(state_56538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1.call(this,state_56538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_56545 = f__56384__auto__();
(statearr_56545[(6)] = c__56383__auto___57983);

return statearr_56545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56546){
var vec__56547 = p__56546;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56547,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56547,(1),null);
var job = vec__56547;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___57989 = n;
var __57990 = (0);
while(true){
if((__57990 < n__4613__auto___57989)){
var G__56550_57991 = type;
var G__56550_57992__$1 = (((G__56550_57991 instanceof cljs.core.Keyword))?G__56550_57991.fqn:null);
switch (G__56550_57992__$1) {
case "compute":
var c__56383__auto___57994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57990,c__56383__auto___57994,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async){
return (function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = ((function (__57990,c__56383__auto___57994,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async){
return (function (state_56563){
var state_val_56564 = (state_56563[(1)]);
if((state_val_56564 === (1))){
var state_56563__$1 = state_56563;
var statearr_56565_57995 = state_56563__$1;
(statearr_56565_57995[(2)] = null);

(statearr_56565_57995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56564 === (2))){
var state_56563__$1 = state_56563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56563__$1,(4),jobs);
} else {
if((state_val_56564 === (3))){
var inst_56561 = (state_56563[(2)]);
var state_56563__$1 = state_56563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56563__$1,inst_56561);
} else {
if((state_val_56564 === (4))){
var inst_56553 = (state_56563[(2)]);
var inst_56554 = process(inst_56553);
var state_56563__$1 = state_56563;
if(cljs.core.truth_(inst_56554)){
var statearr_56566_57996 = state_56563__$1;
(statearr_56566_57996[(1)] = (5));

} else {
var statearr_56567_57998 = state_56563__$1;
(statearr_56567_57998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56564 === (5))){
var state_56563__$1 = state_56563;
var statearr_56568_58000 = state_56563__$1;
(statearr_56568_58000[(2)] = null);

(statearr_56568_58000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56564 === (6))){
var state_56563__$1 = state_56563;
var statearr_56569_58001 = state_56563__$1;
(statearr_56569_58001[(2)] = null);

(statearr_56569_58001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56564 === (7))){
var inst_56559 = (state_56563[(2)]);
var state_56563__$1 = state_56563;
var statearr_56570_58002 = state_56563__$1;
(statearr_56570_58002[(2)] = inst_56559);

(statearr_56570_58002[(1)] = (3));


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
});})(__57990,c__56383__auto___57994,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async))
;
return ((function (__57990,switch__56258__auto__,c__56383__auto___57994,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0 = (function (){
var statearr_56571 = [null,null,null,null,null,null,null];
(statearr_56571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__);

(statearr_56571[(1)] = (1));

return statearr_56571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1 = (function (state_56563){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56563);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56572){var ex__56262__auto__ = e56572;
var statearr_56573_58003 = state_56563;
(statearr_56573_58003[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56563[(4)]))){
var statearr_56574_58004 = state_56563;
(statearr_56574_58004[(1)] = cljs.core.first((state_56563[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58005 = state_56563;
state_56563 = G__58005;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = function(state_56563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1.call(this,state_56563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__;
})()
;})(__57990,switch__56258__auto__,c__56383__auto___57994,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async))
})();
var state__56385__auto__ = (function (){var statearr_56575 = f__56384__auto__();
(statearr_56575[(6)] = c__56383__auto___57994);

return statearr_56575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
});})(__57990,c__56383__auto___57994,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async))
);


break;
case "async":
var c__56383__auto___58007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57990,c__56383__auto___58007,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async){
return (function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = ((function (__57990,c__56383__auto___58007,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async){
return (function (state_56588){
var state_val_56589 = (state_56588[(1)]);
if((state_val_56589 === (1))){
var state_56588__$1 = state_56588;
var statearr_56590_58008 = state_56588__$1;
(statearr_56590_58008[(2)] = null);

(statearr_56590_58008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56589 === (2))){
var state_56588__$1 = state_56588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56588__$1,(4),jobs);
} else {
if((state_val_56589 === (3))){
var inst_56586 = (state_56588[(2)]);
var state_56588__$1 = state_56588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56588__$1,inst_56586);
} else {
if((state_val_56589 === (4))){
var inst_56578 = (state_56588[(2)]);
var inst_56579 = async(inst_56578);
var state_56588__$1 = state_56588;
if(cljs.core.truth_(inst_56579)){
var statearr_56591_58009 = state_56588__$1;
(statearr_56591_58009[(1)] = (5));

} else {
var statearr_56592_58010 = state_56588__$1;
(statearr_56592_58010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56589 === (5))){
var state_56588__$1 = state_56588;
var statearr_56593_58011 = state_56588__$1;
(statearr_56593_58011[(2)] = null);

(statearr_56593_58011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56589 === (6))){
var state_56588__$1 = state_56588;
var statearr_56594_58012 = state_56588__$1;
(statearr_56594_58012[(2)] = null);

(statearr_56594_58012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56589 === (7))){
var inst_56584 = (state_56588[(2)]);
var state_56588__$1 = state_56588;
var statearr_56595_58017 = state_56588__$1;
(statearr_56595_58017[(2)] = inst_56584);

(statearr_56595_58017[(1)] = (3));


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
});})(__57990,c__56383__auto___58007,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async))
;
return ((function (__57990,switch__56258__auto__,c__56383__auto___58007,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0 = (function (){
var statearr_56596 = [null,null,null,null,null,null,null];
(statearr_56596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__);

(statearr_56596[(1)] = (1));

return statearr_56596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1 = (function (state_56588){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56588);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56597){var ex__56262__auto__ = e56597;
var statearr_56598_58018 = state_56588;
(statearr_56598_58018[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56588[(4)]))){
var statearr_56599_58019 = state_56588;
(statearr_56599_58019[(1)] = cljs.core.first((state_56588[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58020 = state_56588;
state_56588 = G__58020;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = function(state_56588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1.call(this,state_56588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__;
})()
;})(__57990,switch__56258__auto__,c__56383__auto___58007,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async))
})();
var state__56385__auto__ = (function (){var statearr_56600 = f__56384__auto__();
(statearr_56600[(6)] = c__56383__auto___58007);

return statearr_56600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
});})(__57990,c__56383__auto___58007,G__56550_57991,G__56550_57992__$1,n__4613__auto___57989,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56550_57992__$1)].join('')));

}

var G__58021 = (__57990 + (1));
__57990 = G__58021;
continue;
} else {
}
break;
}

var c__56383__auto___58022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_56622){
var state_val_56623 = (state_56622[(1)]);
if((state_val_56623 === (7))){
var inst_56618 = (state_56622[(2)]);
var state_56622__$1 = state_56622;
var statearr_56624_58023 = state_56622__$1;
(statearr_56624_58023[(2)] = inst_56618);

(statearr_56624_58023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56623 === (1))){
var state_56622__$1 = state_56622;
var statearr_56625_58024 = state_56622__$1;
(statearr_56625_58024[(2)] = null);

(statearr_56625_58024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56623 === (4))){
var inst_56603 = (state_56622[(7)]);
var inst_56603__$1 = (state_56622[(2)]);
var inst_56604 = (inst_56603__$1 == null);
var state_56622__$1 = (function (){var statearr_56626 = state_56622;
(statearr_56626[(7)] = inst_56603__$1);

return statearr_56626;
})();
if(cljs.core.truth_(inst_56604)){
var statearr_56627_58025 = state_56622__$1;
(statearr_56627_58025[(1)] = (5));

} else {
var statearr_56628_58026 = state_56622__$1;
(statearr_56628_58026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56623 === (6))){
var inst_56603 = (state_56622[(7)]);
var inst_56608 = (state_56622[(8)]);
var inst_56608__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56610 = [inst_56603,inst_56608__$1];
var inst_56611 = (new cljs.core.PersistentVector(null,2,(5),inst_56609,inst_56610,null));
var state_56622__$1 = (function (){var statearr_56629 = state_56622;
(statearr_56629[(8)] = inst_56608__$1);

return statearr_56629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56622__$1,(8),jobs,inst_56611);
} else {
if((state_val_56623 === (3))){
var inst_56620 = (state_56622[(2)]);
var state_56622__$1 = state_56622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56622__$1,inst_56620);
} else {
if((state_val_56623 === (2))){
var state_56622__$1 = state_56622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56622__$1,(4),from);
} else {
if((state_val_56623 === (9))){
var inst_56615 = (state_56622[(2)]);
var state_56622__$1 = (function (){var statearr_56630 = state_56622;
(statearr_56630[(9)] = inst_56615);

return statearr_56630;
})();
var statearr_56631_58029 = state_56622__$1;
(statearr_56631_58029[(2)] = null);

(statearr_56631_58029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56623 === (5))){
var inst_56606 = cljs.core.async.close_BANG_(jobs);
var state_56622__$1 = state_56622;
var statearr_56632_58030 = state_56622__$1;
(statearr_56632_58030[(2)] = inst_56606);

(statearr_56632_58030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56623 === (8))){
var inst_56608 = (state_56622[(8)]);
var inst_56613 = (state_56622[(2)]);
var state_56622__$1 = (function (){var statearr_56633 = state_56622;
(statearr_56633[(10)] = inst_56613);

return statearr_56633;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56622__$1,(9),results,inst_56608);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0 = (function (){
var statearr_56634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__);

(statearr_56634[(1)] = (1));

return statearr_56634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1 = (function (state_56622){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56622);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56635){var ex__56262__auto__ = e56635;
var statearr_56636_58031 = state_56622;
(statearr_56636_58031[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56622[(4)]))){
var statearr_56637_58032 = state_56622;
(statearr_56637_58032[(1)] = cljs.core.first((state_56622[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58033 = state_56622;
state_56622 = G__58033;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = function(state_56622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1.call(this,state_56622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_56638 = f__56384__auto__();
(statearr_56638[(6)] = c__56383__auto___58022);

return statearr_56638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


var c__56383__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_56676){
var state_val_56677 = (state_56676[(1)]);
if((state_val_56677 === (7))){
var inst_56672 = (state_56676[(2)]);
var state_56676__$1 = state_56676;
var statearr_56678_58034 = state_56676__$1;
(statearr_56678_58034[(2)] = inst_56672);

(statearr_56678_58034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (20))){
var state_56676__$1 = state_56676;
var statearr_56679_58039 = state_56676__$1;
(statearr_56679_58039[(2)] = null);

(statearr_56679_58039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (1))){
var state_56676__$1 = state_56676;
var statearr_56680_58043 = state_56676__$1;
(statearr_56680_58043[(2)] = null);

(statearr_56680_58043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (4))){
var inst_56641 = (state_56676[(7)]);
var inst_56641__$1 = (state_56676[(2)]);
var inst_56642 = (inst_56641__$1 == null);
var state_56676__$1 = (function (){var statearr_56681 = state_56676;
(statearr_56681[(7)] = inst_56641__$1);

return statearr_56681;
})();
if(cljs.core.truth_(inst_56642)){
var statearr_56682_58044 = state_56676__$1;
(statearr_56682_58044[(1)] = (5));

} else {
var statearr_56683_58045 = state_56676__$1;
(statearr_56683_58045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (15))){
var inst_56654 = (state_56676[(8)]);
var state_56676__$1 = state_56676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56676__$1,(18),to,inst_56654);
} else {
if((state_val_56677 === (21))){
var inst_56667 = (state_56676[(2)]);
var state_56676__$1 = state_56676;
var statearr_56684_58049 = state_56676__$1;
(statearr_56684_58049[(2)] = inst_56667);

(statearr_56684_58049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (13))){
var inst_56669 = (state_56676[(2)]);
var state_56676__$1 = (function (){var statearr_56685 = state_56676;
(statearr_56685[(9)] = inst_56669);

return statearr_56685;
})();
var statearr_56686_58053 = state_56676__$1;
(statearr_56686_58053[(2)] = null);

(statearr_56686_58053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (6))){
var inst_56641 = (state_56676[(7)]);
var state_56676__$1 = state_56676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56676__$1,(11),inst_56641);
} else {
if((state_val_56677 === (17))){
var inst_56662 = (state_56676[(2)]);
var state_56676__$1 = state_56676;
if(cljs.core.truth_(inst_56662)){
var statearr_56687_58054 = state_56676__$1;
(statearr_56687_58054[(1)] = (19));

} else {
var statearr_56688_58055 = state_56676__$1;
(statearr_56688_58055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (3))){
var inst_56674 = (state_56676[(2)]);
var state_56676__$1 = state_56676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56676__$1,inst_56674);
} else {
if((state_val_56677 === (12))){
var inst_56651 = (state_56676[(10)]);
var state_56676__$1 = state_56676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56676__$1,(14),inst_56651);
} else {
if((state_val_56677 === (2))){
var state_56676__$1 = state_56676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56676__$1,(4),results);
} else {
if((state_val_56677 === (19))){
var state_56676__$1 = state_56676;
var statearr_56689_58059 = state_56676__$1;
(statearr_56689_58059[(2)] = null);

(statearr_56689_58059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (11))){
var inst_56651 = (state_56676[(2)]);
var state_56676__$1 = (function (){var statearr_56690 = state_56676;
(statearr_56690[(10)] = inst_56651);

return statearr_56690;
})();
var statearr_56691_58060 = state_56676__$1;
(statearr_56691_58060[(2)] = null);

(statearr_56691_58060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (9))){
var state_56676__$1 = state_56676;
var statearr_56692_58065 = state_56676__$1;
(statearr_56692_58065[(2)] = null);

(statearr_56692_58065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (5))){
var state_56676__$1 = state_56676;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56693_58069 = state_56676__$1;
(statearr_56693_58069[(1)] = (8));

} else {
var statearr_56694_58070 = state_56676__$1;
(statearr_56694_58070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (14))){
var inst_56654 = (state_56676[(8)]);
var inst_56654__$1 = (state_56676[(2)]);
var inst_56655 = (inst_56654__$1 == null);
var inst_56656 = cljs.core.not(inst_56655);
var state_56676__$1 = (function (){var statearr_56695 = state_56676;
(statearr_56695[(8)] = inst_56654__$1);

return statearr_56695;
})();
if(inst_56656){
var statearr_56696_58071 = state_56676__$1;
(statearr_56696_58071[(1)] = (15));

} else {
var statearr_56697_58072 = state_56676__$1;
(statearr_56697_58072[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (16))){
var state_56676__$1 = state_56676;
var statearr_56698_58076 = state_56676__$1;
(statearr_56698_58076[(2)] = false);

(statearr_56698_58076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (10))){
var inst_56648 = (state_56676[(2)]);
var state_56676__$1 = state_56676;
var statearr_56699_58077 = state_56676__$1;
(statearr_56699_58077[(2)] = inst_56648);

(statearr_56699_58077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (18))){
var inst_56659 = (state_56676[(2)]);
var state_56676__$1 = state_56676;
var statearr_56700_58078 = state_56676__$1;
(statearr_56700_58078[(2)] = inst_56659);

(statearr_56700_58078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56677 === (8))){
var inst_56645 = cljs.core.async.close_BANG_(to);
var state_56676__$1 = state_56676;
var statearr_56701_58082 = state_56676__$1;
(statearr_56701_58082[(2)] = inst_56645);

(statearr_56701_58082[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0 = (function (){
var statearr_56702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__);

(statearr_56702[(1)] = (1));

return statearr_56702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1 = (function (state_56676){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56676);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56703){var ex__56262__auto__ = e56703;
var statearr_56704_58086 = state_56676;
(statearr_56704_58086[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56676[(4)]))){
var statearr_56705_58087 = state_56676;
(statearr_56705_58087[(1)] = cljs.core.first((state_56676[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58088 = state_56676;
state_56676 = G__58088;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__ = function(state_56676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1.call(this,state_56676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_56706 = f__56384__auto__();
(statearr_56706[(6)] = c__56383__auto__);

return statearr_56706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));

return c__56383__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__56708 = arguments.length;
switch (G__56708) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__56710 = arguments.length;
switch (G__56710) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__56712 = arguments.length;
switch (G__56712) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__56383__auto___58093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_56738){
var state_val_56739 = (state_56738[(1)]);
if((state_val_56739 === (7))){
var inst_56734 = (state_56738[(2)]);
var state_56738__$1 = state_56738;
var statearr_56740_58094 = state_56738__$1;
(statearr_56740_58094[(2)] = inst_56734);

(statearr_56740_58094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (1))){
var state_56738__$1 = state_56738;
var statearr_56741_58095 = state_56738__$1;
(statearr_56741_58095[(2)] = null);

(statearr_56741_58095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (4))){
var inst_56715 = (state_56738[(7)]);
var inst_56715__$1 = (state_56738[(2)]);
var inst_56716 = (inst_56715__$1 == null);
var state_56738__$1 = (function (){var statearr_56742 = state_56738;
(statearr_56742[(7)] = inst_56715__$1);

return statearr_56742;
})();
if(cljs.core.truth_(inst_56716)){
var statearr_56743_58096 = state_56738__$1;
(statearr_56743_58096[(1)] = (5));

} else {
var statearr_56744_58097 = state_56738__$1;
(statearr_56744_58097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (13))){
var state_56738__$1 = state_56738;
var statearr_56745_58098 = state_56738__$1;
(statearr_56745_58098[(2)] = null);

(statearr_56745_58098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (6))){
var inst_56715 = (state_56738[(7)]);
var inst_56721 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56715) : p.call(null,inst_56715));
var state_56738__$1 = state_56738;
if(cljs.core.truth_(inst_56721)){
var statearr_56746_58099 = state_56738__$1;
(statearr_56746_58099[(1)] = (9));

} else {
var statearr_56747_58100 = state_56738__$1;
(statearr_56747_58100[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (3))){
var inst_56736 = (state_56738[(2)]);
var state_56738__$1 = state_56738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56738__$1,inst_56736);
} else {
if((state_val_56739 === (12))){
var state_56738__$1 = state_56738;
var statearr_56748_58101 = state_56738__$1;
(statearr_56748_58101[(2)] = null);

(statearr_56748_58101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (2))){
var state_56738__$1 = state_56738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56738__$1,(4),ch);
} else {
if((state_val_56739 === (11))){
var inst_56715 = (state_56738[(7)]);
var inst_56725 = (state_56738[(2)]);
var state_56738__$1 = state_56738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56738__$1,(8),inst_56725,inst_56715);
} else {
if((state_val_56739 === (9))){
var state_56738__$1 = state_56738;
var statearr_56749_58102 = state_56738__$1;
(statearr_56749_58102[(2)] = tc);

(statearr_56749_58102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (5))){
var inst_56718 = cljs.core.async.close_BANG_(tc);
var inst_56719 = cljs.core.async.close_BANG_(fc);
var state_56738__$1 = (function (){var statearr_56750 = state_56738;
(statearr_56750[(8)] = inst_56718);

return statearr_56750;
})();
var statearr_56751_58103 = state_56738__$1;
(statearr_56751_58103[(2)] = inst_56719);

(statearr_56751_58103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (14))){
var inst_56732 = (state_56738[(2)]);
var state_56738__$1 = state_56738;
var statearr_56752_58107 = state_56738__$1;
(statearr_56752_58107[(2)] = inst_56732);

(statearr_56752_58107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (10))){
var state_56738__$1 = state_56738;
var statearr_56753_58108 = state_56738__$1;
(statearr_56753_58108[(2)] = fc);

(statearr_56753_58108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56739 === (8))){
var inst_56727 = (state_56738[(2)]);
var state_56738__$1 = state_56738;
if(cljs.core.truth_(inst_56727)){
var statearr_56754_58109 = state_56738__$1;
(statearr_56754_58109[(1)] = (12));

} else {
var statearr_56755_58110 = state_56738__$1;
(statearr_56755_58110[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_56756 = [null,null,null,null,null,null,null,null,null];
(statearr_56756[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_56756[(1)] = (1));

return statearr_56756;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_56738){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56738);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56757){var ex__56262__auto__ = e56757;
var statearr_56758_58115 = state_56738;
(statearr_56758_58115[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56738[(4)]))){
var statearr_56759_58116 = state_56738;
(statearr_56759_58116[(1)] = cljs.core.first((state_56738[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58117 = state_56738;
state_56738 = G__58117;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_56738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_56738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_56760 = f__56384__auto__();
(statearr_56760[(6)] = c__56383__auto___58093);

return statearr_56760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__56383__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_56782){
var state_val_56783 = (state_56782[(1)]);
if((state_val_56783 === (7))){
var inst_56778 = (state_56782[(2)]);
var state_56782__$1 = state_56782;
var statearr_56784_58120 = state_56782__$1;
(statearr_56784_58120[(2)] = inst_56778);

(statearr_56784_58120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56783 === (1))){
var inst_56761 = init;
var inst_56762 = inst_56761;
var state_56782__$1 = (function (){var statearr_56785 = state_56782;
(statearr_56785[(7)] = inst_56762);

return statearr_56785;
})();
var statearr_56786_58121 = state_56782__$1;
(statearr_56786_58121[(2)] = null);

(statearr_56786_58121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56783 === (4))){
var inst_56765 = (state_56782[(8)]);
var inst_56765__$1 = (state_56782[(2)]);
var inst_56766 = (inst_56765__$1 == null);
var state_56782__$1 = (function (){var statearr_56787 = state_56782;
(statearr_56787[(8)] = inst_56765__$1);

return statearr_56787;
})();
if(cljs.core.truth_(inst_56766)){
var statearr_56788_58122 = state_56782__$1;
(statearr_56788_58122[(1)] = (5));

} else {
var statearr_56789_58123 = state_56782__$1;
(statearr_56789_58123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56783 === (6))){
var inst_56769 = (state_56782[(9)]);
var inst_56765 = (state_56782[(8)]);
var inst_56762 = (state_56782[(7)]);
var inst_56769__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_56762,inst_56765) : f.call(null,inst_56762,inst_56765));
var inst_56770 = cljs.core.reduced_QMARK_(inst_56769__$1);
var state_56782__$1 = (function (){var statearr_56790 = state_56782;
(statearr_56790[(9)] = inst_56769__$1);

return statearr_56790;
})();
if(inst_56770){
var statearr_56791_58124 = state_56782__$1;
(statearr_56791_58124[(1)] = (8));

} else {
var statearr_56792_58126 = state_56782__$1;
(statearr_56792_58126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56783 === (3))){
var inst_56780 = (state_56782[(2)]);
var state_56782__$1 = state_56782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56782__$1,inst_56780);
} else {
if((state_val_56783 === (2))){
var state_56782__$1 = state_56782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56782__$1,(4),ch);
} else {
if((state_val_56783 === (9))){
var inst_56769 = (state_56782[(9)]);
var inst_56762 = inst_56769;
var state_56782__$1 = (function (){var statearr_56793 = state_56782;
(statearr_56793[(7)] = inst_56762);

return statearr_56793;
})();
var statearr_56794_58130 = state_56782__$1;
(statearr_56794_58130[(2)] = null);

(statearr_56794_58130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56783 === (5))){
var inst_56762 = (state_56782[(7)]);
var state_56782__$1 = state_56782;
var statearr_56795_58133 = state_56782__$1;
(statearr_56795_58133[(2)] = inst_56762);

(statearr_56795_58133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56783 === (10))){
var inst_56776 = (state_56782[(2)]);
var state_56782__$1 = state_56782;
var statearr_56796_58136 = state_56782__$1;
(statearr_56796_58136[(2)] = inst_56776);

(statearr_56796_58136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56783 === (8))){
var inst_56769 = (state_56782[(9)]);
var inst_56772 = cljs.core.deref(inst_56769);
var state_56782__$1 = state_56782;
var statearr_56797_58137 = state_56782__$1;
(statearr_56797_58137[(2)] = inst_56772);

(statearr_56797_58137[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__56259__auto__ = null;
var cljs$core$async$reduce_$_state_machine__56259__auto____0 = (function (){
var statearr_56798 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56798[(0)] = cljs$core$async$reduce_$_state_machine__56259__auto__);

(statearr_56798[(1)] = (1));

return statearr_56798;
});
var cljs$core$async$reduce_$_state_machine__56259__auto____1 = (function (state_56782){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56782);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56799){var ex__56262__auto__ = e56799;
var statearr_56800_58145 = state_56782;
(statearr_56800_58145[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56782[(4)]))){
var statearr_56801_58146 = state_56782;
(statearr_56801_58146[(1)] = cljs.core.first((state_56782[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58153 = state_56782;
state_56782 = G__58153;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__56259__auto__ = function(state_56782){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__56259__auto____1.call(this,state_56782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__56259__auto____0;
cljs$core$async$reduce_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__56259__auto____1;
return cljs$core$async$reduce_$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_56802 = f__56384__auto__();
(statearr_56802[(6)] = c__56383__auto__);

return statearr_56802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));

return c__56383__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56383__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_56808){
var state_val_56809 = (state_56808[(1)]);
if((state_val_56809 === (1))){
var inst_56803 = cljs.core.async.reduce(f__$1,init,ch);
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56808__$1,(2),inst_56803);
} else {
if((state_val_56809 === (2))){
var inst_56805 = (state_56808[(2)]);
var inst_56806 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_56805) : f__$1.call(null,inst_56805));
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56808__$1,inst_56806);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__56259__auto__ = null;
var cljs$core$async$transduce_$_state_machine__56259__auto____0 = (function (){
var statearr_56810 = [null,null,null,null,null,null,null];
(statearr_56810[(0)] = cljs$core$async$transduce_$_state_machine__56259__auto__);

(statearr_56810[(1)] = (1));

return statearr_56810;
});
var cljs$core$async$transduce_$_state_machine__56259__auto____1 = (function (state_56808){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56808);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56811){var ex__56262__auto__ = e56811;
var statearr_56812_58154 = state_56808;
(statearr_56812_58154[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56808[(4)]))){
var statearr_56813_58155 = state_56808;
(statearr_56813_58155[(1)] = cljs.core.first((state_56808[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58156 = state_56808;
state_56808 = G__58156;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__56259__auto__ = function(state_56808){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__56259__auto____1.call(this,state_56808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__56259__auto____0;
cljs$core$async$transduce_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__56259__auto____1;
return cljs$core$async$transduce_$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_56814 = f__56384__auto__();
(statearr_56814[(6)] = c__56383__auto__);

return statearr_56814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));

return c__56383__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__56816 = arguments.length;
switch (G__56816) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__56383__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_56841){
var state_val_56842 = (state_56841[(1)]);
if((state_val_56842 === (7))){
var inst_56823 = (state_56841[(2)]);
var state_56841__$1 = state_56841;
var statearr_56843_58164 = state_56841__$1;
(statearr_56843_58164[(2)] = inst_56823);

(statearr_56843_58164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (1))){
var inst_56817 = cljs.core.seq(coll);
var inst_56818 = inst_56817;
var state_56841__$1 = (function (){var statearr_56844 = state_56841;
(statearr_56844[(7)] = inst_56818);

return statearr_56844;
})();
var statearr_56845_58165 = state_56841__$1;
(statearr_56845_58165[(2)] = null);

(statearr_56845_58165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (4))){
var inst_56818 = (state_56841[(7)]);
var inst_56821 = cljs.core.first(inst_56818);
var state_56841__$1 = state_56841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56841__$1,(7),ch,inst_56821);
} else {
if((state_val_56842 === (13))){
var inst_56835 = (state_56841[(2)]);
var state_56841__$1 = state_56841;
var statearr_56846_58166 = state_56841__$1;
(statearr_56846_58166[(2)] = inst_56835);

(statearr_56846_58166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (6))){
var inst_56826 = (state_56841[(2)]);
var state_56841__$1 = state_56841;
if(cljs.core.truth_(inst_56826)){
var statearr_56847_58167 = state_56841__$1;
(statearr_56847_58167[(1)] = (8));

} else {
var statearr_56848_58168 = state_56841__$1;
(statearr_56848_58168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (3))){
var inst_56839 = (state_56841[(2)]);
var state_56841__$1 = state_56841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56841__$1,inst_56839);
} else {
if((state_val_56842 === (12))){
var state_56841__$1 = state_56841;
var statearr_56849_58169 = state_56841__$1;
(statearr_56849_58169[(2)] = null);

(statearr_56849_58169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (2))){
var inst_56818 = (state_56841[(7)]);
var state_56841__$1 = state_56841;
if(cljs.core.truth_(inst_56818)){
var statearr_56850_58170 = state_56841__$1;
(statearr_56850_58170[(1)] = (4));

} else {
var statearr_56851_58177 = state_56841__$1;
(statearr_56851_58177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (11))){
var inst_56832 = cljs.core.async.close_BANG_(ch);
var state_56841__$1 = state_56841;
var statearr_56852_58178 = state_56841__$1;
(statearr_56852_58178[(2)] = inst_56832);

(statearr_56852_58178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (9))){
var state_56841__$1 = state_56841;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56853_58179 = state_56841__$1;
(statearr_56853_58179[(1)] = (11));

} else {
var statearr_56854_58180 = state_56841__$1;
(statearr_56854_58180[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (5))){
var inst_56818 = (state_56841[(7)]);
var state_56841__$1 = state_56841;
var statearr_56855_58181 = state_56841__$1;
(statearr_56855_58181[(2)] = inst_56818);

(statearr_56855_58181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (10))){
var inst_56837 = (state_56841[(2)]);
var state_56841__$1 = state_56841;
var statearr_56856_58182 = state_56841__$1;
(statearr_56856_58182[(2)] = inst_56837);

(statearr_56856_58182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56842 === (8))){
var inst_56818 = (state_56841[(7)]);
var inst_56828 = cljs.core.next(inst_56818);
var inst_56818__$1 = inst_56828;
var state_56841__$1 = (function (){var statearr_56857 = state_56841;
(statearr_56857[(7)] = inst_56818__$1);

return statearr_56857;
})();
var statearr_56858_58183 = state_56841__$1;
(statearr_56858_58183[(2)] = null);

(statearr_56858_58183[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_56859 = [null,null,null,null,null,null,null,null];
(statearr_56859[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_56859[(1)] = (1));

return statearr_56859;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_56841){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_56841);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e56860){var ex__56262__auto__ = e56860;
var statearr_56861_58184 = state_56841;
(statearr_56861_58184[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_56841[(4)]))){
var statearr_56862_58185 = state_56841;
(statearr_56862_58185[(1)] = cljs.core.first((state_56841[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58186 = state_56841;
state_56841 = G__58186;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_56841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_56841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_56863 = f__56384__auto__();
(statearr_56863[(6)] = c__56383__auto__);

return statearr_56863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));

return c__56383__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__56865 = arguments.length;
switch (G__56865) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_58194 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_58194(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_58195 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_58195(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_58196 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_58196(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_58197 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_58197(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56866 = (function (ch,cs,meta56867){
this.ch = ch;
this.cs = cs;
this.meta56867 = meta56867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56868,meta56867__$1){
var self__ = this;
var _56868__$1 = this;
return (new cljs.core.async.t_cljs$core$async56866(self__.ch,self__.cs,meta56867__$1));
}));

(cljs.core.async.t_cljs$core$async56866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56868){
var self__ = this;
var _56868__$1 = this;
return self__.meta56867;
}));

(cljs.core.async.t_cljs$core$async56866.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56866.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56866.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async56866.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async56866.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async56866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56867","meta56867",-158877170,null)], null);
}));

(cljs.core.async.t_cljs$core$async56866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56866");

(cljs.core.async.t_cljs$core$async56866.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56866.
 */
cljs.core.async.__GT_t_cljs$core$async56866 = (function cljs$core$async$mult_$___GT_t_cljs$core$async56866(ch__$1,cs__$1,meta56867){
return (new cljs.core.async.t_cljs$core$async56866(ch__$1,cs__$1,meta56867));
});

}

return (new cljs.core.async.t_cljs$core$async56866(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__56383__auto___58203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57001){
var state_val_57002 = (state_57001[(1)]);
if((state_val_57002 === (7))){
var inst_56997 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
var statearr_57003_58204 = state_57001__$1;
(statearr_57003_58204[(2)] = inst_56997);

(statearr_57003_58204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (20))){
var inst_56902 = (state_57001[(7)]);
var inst_56914 = cljs.core.first(inst_56902);
var inst_56915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56914,(0),null);
var inst_56916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56914,(1),null);
var state_57001__$1 = (function (){var statearr_57004 = state_57001;
(statearr_57004[(8)] = inst_56915);

return statearr_57004;
})();
if(cljs.core.truth_(inst_56916)){
var statearr_57005_58205 = state_57001__$1;
(statearr_57005_58205[(1)] = (22));

} else {
var statearr_57006_58206 = state_57001__$1;
(statearr_57006_58206[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (27))){
var inst_56946 = (state_57001[(9)]);
var inst_56944 = (state_57001[(10)]);
var inst_56871 = (state_57001[(11)]);
var inst_56951 = (state_57001[(12)]);
var inst_56951__$1 = cljs.core._nth(inst_56944,inst_56946);
var inst_56952 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56951__$1,inst_56871,done);
var state_57001__$1 = (function (){var statearr_57007 = state_57001;
(statearr_57007[(12)] = inst_56951__$1);

return statearr_57007;
})();
if(cljs.core.truth_(inst_56952)){
var statearr_57008_58207 = state_57001__$1;
(statearr_57008_58207[(1)] = (30));

} else {
var statearr_57009_58208 = state_57001__$1;
(statearr_57009_58208[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (1))){
var state_57001__$1 = state_57001;
var statearr_57010_58209 = state_57001__$1;
(statearr_57010_58209[(2)] = null);

(statearr_57010_58209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (24))){
var inst_56902 = (state_57001[(7)]);
var inst_56921 = (state_57001[(2)]);
var inst_56922 = cljs.core.next(inst_56902);
var inst_56880 = inst_56922;
var inst_56881 = null;
var inst_56882 = (0);
var inst_56883 = (0);
var state_57001__$1 = (function (){var statearr_57011 = state_57001;
(statearr_57011[(13)] = inst_56883);

(statearr_57011[(14)] = inst_56881);

(statearr_57011[(15)] = inst_56880);

(statearr_57011[(16)] = inst_56882);

(statearr_57011[(17)] = inst_56921);

return statearr_57011;
})();
var statearr_57012_58212 = state_57001__$1;
(statearr_57012_58212[(2)] = null);

(statearr_57012_58212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (39))){
var state_57001__$1 = state_57001;
var statearr_57016_58213 = state_57001__$1;
(statearr_57016_58213[(2)] = null);

(statearr_57016_58213[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (4))){
var inst_56871 = (state_57001[(11)]);
var inst_56871__$1 = (state_57001[(2)]);
var inst_56872 = (inst_56871__$1 == null);
var state_57001__$1 = (function (){var statearr_57017 = state_57001;
(statearr_57017[(11)] = inst_56871__$1);

return statearr_57017;
})();
if(cljs.core.truth_(inst_56872)){
var statearr_57018_58214 = state_57001__$1;
(statearr_57018_58214[(1)] = (5));

} else {
var statearr_57019_58215 = state_57001__$1;
(statearr_57019_58215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (15))){
var inst_56883 = (state_57001[(13)]);
var inst_56881 = (state_57001[(14)]);
var inst_56880 = (state_57001[(15)]);
var inst_56882 = (state_57001[(16)]);
var inst_56898 = (state_57001[(2)]);
var inst_56899 = (inst_56883 + (1));
var tmp57013 = inst_56881;
var tmp57014 = inst_56880;
var tmp57015 = inst_56882;
var inst_56880__$1 = tmp57014;
var inst_56881__$1 = tmp57013;
var inst_56882__$1 = tmp57015;
var inst_56883__$1 = inst_56899;
var state_57001__$1 = (function (){var statearr_57020 = state_57001;
(statearr_57020[(13)] = inst_56883__$1);

(statearr_57020[(14)] = inst_56881__$1);

(statearr_57020[(15)] = inst_56880__$1);

(statearr_57020[(16)] = inst_56882__$1);

(statearr_57020[(18)] = inst_56898);

return statearr_57020;
})();
var statearr_57021_58218 = state_57001__$1;
(statearr_57021_58218[(2)] = null);

(statearr_57021_58218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (21))){
var inst_56925 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
var statearr_57025_58219 = state_57001__$1;
(statearr_57025_58219[(2)] = inst_56925);

(statearr_57025_58219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (31))){
var inst_56951 = (state_57001[(12)]);
var inst_56955 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56951);
var state_57001__$1 = state_57001;
var statearr_57026_58220 = state_57001__$1;
(statearr_57026_58220[(2)] = inst_56955);

(statearr_57026_58220[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (32))){
var inst_56945 = (state_57001[(19)]);
var inst_56946 = (state_57001[(9)]);
var inst_56944 = (state_57001[(10)]);
var inst_56943 = (state_57001[(20)]);
var inst_56957 = (state_57001[(2)]);
var inst_56958 = (inst_56946 + (1));
var tmp57022 = inst_56945;
var tmp57023 = inst_56944;
var tmp57024 = inst_56943;
var inst_56943__$1 = tmp57024;
var inst_56944__$1 = tmp57023;
var inst_56945__$1 = tmp57022;
var inst_56946__$1 = inst_56958;
var state_57001__$1 = (function (){var statearr_57027 = state_57001;
(statearr_57027[(19)] = inst_56945__$1);

(statearr_57027[(9)] = inst_56946__$1);

(statearr_57027[(10)] = inst_56944__$1);

(statearr_57027[(21)] = inst_56957);

(statearr_57027[(20)] = inst_56943__$1);

return statearr_57027;
})();
var statearr_57028_58221 = state_57001__$1;
(statearr_57028_58221[(2)] = null);

(statearr_57028_58221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (40))){
var inst_56970 = (state_57001[(22)]);
var inst_56974 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56970);
var state_57001__$1 = state_57001;
var statearr_57029_58222 = state_57001__$1;
(statearr_57029_58222[(2)] = inst_56974);

(statearr_57029_58222[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (33))){
var inst_56961 = (state_57001[(23)]);
var inst_56963 = cljs.core.chunked_seq_QMARK_(inst_56961);
var state_57001__$1 = state_57001;
if(inst_56963){
var statearr_57030_58223 = state_57001__$1;
(statearr_57030_58223[(1)] = (36));

} else {
var statearr_57031_58224 = state_57001__$1;
(statearr_57031_58224[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (13))){
var inst_56892 = (state_57001[(24)]);
var inst_56895 = cljs.core.async.close_BANG_(inst_56892);
var state_57001__$1 = state_57001;
var statearr_57032_58225 = state_57001__$1;
(statearr_57032_58225[(2)] = inst_56895);

(statearr_57032_58225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (22))){
var inst_56915 = (state_57001[(8)]);
var inst_56918 = cljs.core.async.close_BANG_(inst_56915);
var state_57001__$1 = state_57001;
var statearr_57033_58226 = state_57001__$1;
(statearr_57033_58226[(2)] = inst_56918);

(statearr_57033_58226[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (36))){
var inst_56961 = (state_57001[(23)]);
var inst_56965 = cljs.core.chunk_first(inst_56961);
var inst_56966 = cljs.core.chunk_rest(inst_56961);
var inst_56967 = cljs.core.count(inst_56965);
var inst_56943 = inst_56966;
var inst_56944 = inst_56965;
var inst_56945 = inst_56967;
var inst_56946 = (0);
var state_57001__$1 = (function (){var statearr_57034 = state_57001;
(statearr_57034[(19)] = inst_56945);

(statearr_57034[(9)] = inst_56946);

(statearr_57034[(10)] = inst_56944);

(statearr_57034[(20)] = inst_56943);

return statearr_57034;
})();
var statearr_57035_58229 = state_57001__$1;
(statearr_57035_58229[(2)] = null);

(statearr_57035_58229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (41))){
var inst_56961 = (state_57001[(23)]);
var inst_56976 = (state_57001[(2)]);
var inst_56977 = cljs.core.next(inst_56961);
var inst_56943 = inst_56977;
var inst_56944 = null;
var inst_56945 = (0);
var inst_56946 = (0);
var state_57001__$1 = (function (){var statearr_57036 = state_57001;
(statearr_57036[(19)] = inst_56945);

(statearr_57036[(9)] = inst_56946);

(statearr_57036[(10)] = inst_56944);

(statearr_57036[(20)] = inst_56943);

(statearr_57036[(25)] = inst_56976);

return statearr_57036;
})();
var statearr_57037_58230 = state_57001__$1;
(statearr_57037_58230[(2)] = null);

(statearr_57037_58230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (43))){
var state_57001__$1 = state_57001;
var statearr_57038_58231 = state_57001__$1;
(statearr_57038_58231[(2)] = null);

(statearr_57038_58231[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (29))){
var inst_56985 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
var statearr_57039_58232 = state_57001__$1;
(statearr_57039_58232[(2)] = inst_56985);

(statearr_57039_58232[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (44))){
var inst_56994 = (state_57001[(2)]);
var state_57001__$1 = (function (){var statearr_57040 = state_57001;
(statearr_57040[(26)] = inst_56994);

return statearr_57040;
})();
var statearr_57041_58233 = state_57001__$1;
(statearr_57041_58233[(2)] = null);

(statearr_57041_58233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (6))){
var inst_56935 = (state_57001[(27)]);
var inst_56934 = cljs.core.deref(cs);
var inst_56935__$1 = cljs.core.keys(inst_56934);
var inst_56936 = cljs.core.count(inst_56935__$1);
var inst_56937 = cljs.core.reset_BANG_(dctr,inst_56936);
var inst_56942 = cljs.core.seq(inst_56935__$1);
var inst_56943 = inst_56942;
var inst_56944 = null;
var inst_56945 = (0);
var inst_56946 = (0);
var state_57001__$1 = (function (){var statearr_57042 = state_57001;
(statearr_57042[(19)] = inst_56945);

(statearr_57042[(9)] = inst_56946);

(statearr_57042[(10)] = inst_56944);

(statearr_57042[(20)] = inst_56943);

(statearr_57042[(27)] = inst_56935__$1);

(statearr_57042[(28)] = inst_56937);

return statearr_57042;
})();
var statearr_57043_58234 = state_57001__$1;
(statearr_57043_58234[(2)] = null);

(statearr_57043_58234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (28))){
var inst_56943 = (state_57001[(20)]);
var inst_56961 = (state_57001[(23)]);
var inst_56961__$1 = cljs.core.seq(inst_56943);
var state_57001__$1 = (function (){var statearr_57044 = state_57001;
(statearr_57044[(23)] = inst_56961__$1);

return statearr_57044;
})();
if(inst_56961__$1){
var statearr_57045_58235 = state_57001__$1;
(statearr_57045_58235[(1)] = (33));

} else {
var statearr_57046_58236 = state_57001__$1;
(statearr_57046_58236[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (25))){
var inst_56945 = (state_57001[(19)]);
var inst_56946 = (state_57001[(9)]);
var inst_56948 = (inst_56946 < inst_56945);
var inst_56949 = inst_56948;
var state_57001__$1 = state_57001;
if(cljs.core.truth_(inst_56949)){
var statearr_57047_58237 = state_57001__$1;
(statearr_57047_58237[(1)] = (27));

} else {
var statearr_57048_58238 = state_57001__$1;
(statearr_57048_58238[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (34))){
var state_57001__$1 = state_57001;
var statearr_57049_58239 = state_57001__$1;
(statearr_57049_58239[(2)] = null);

(statearr_57049_58239[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (17))){
var state_57001__$1 = state_57001;
var statearr_57050_58241 = state_57001__$1;
(statearr_57050_58241[(2)] = null);

(statearr_57050_58241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (3))){
var inst_56999 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57001__$1,inst_56999);
} else {
if((state_val_57002 === (12))){
var inst_56930 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
var statearr_57051_58242 = state_57001__$1;
(statearr_57051_58242[(2)] = inst_56930);

(statearr_57051_58242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (2))){
var state_57001__$1 = state_57001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57001__$1,(4),ch);
} else {
if((state_val_57002 === (23))){
var state_57001__$1 = state_57001;
var statearr_57052_58243 = state_57001__$1;
(statearr_57052_58243[(2)] = null);

(statearr_57052_58243[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (35))){
var inst_56983 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
var statearr_57053_58248 = state_57001__$1;
(statearr_57053_58248[(2)] = inst_56983);

(statearr_57053_58248[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (19))){
var inst_56902 = (state_57001[(7)]);
var inst_56906 = cljs.core.chunk_first(inst_56902);
var inst_56907 = cljs.core.chunk_rest(inst_56902);
var inst_56908 = cljs.core.count(inst_56906);
var inst_56880 = inst_56907;
var inst_56881 = inst_56906;
var inst_56882 = inst_56908;
var inst_56883 = (0);
var state_57001__$1 = (function (){var statearr_57054 = state_57001;
(statearr_57054[(13)] = inst_56883);

(statearr_57054[(14)] = inst_56881);

(statearr_57054[(15)] = inst_56880);

(statearr_57054[(16)] = inst_56882);

return statearr_57054;
})();
var statearr_57055_58249 = state_57001__$1;
(statearr_57055_58249[(2)] = null);

(statearr_57055_58249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (11))){
var inst_56902 = (state_57001[(7)]);
var inst_56880 = (state_57001[(15)]);
var inst_56902__$1 = cljs.core.seq(inst_56880);
var state_57001__$1 = (function (){var statearr_57056 = state_57001;
(statearr_57056[(7)] = inst_56902__$1);

return statearr_57056;
})();
if(inst_56902__$1){
var statearr_57057_58250 = state_57001__$1;
(statearr_57057_58250[(1)] = (16));

} else {
var statearr_57058_58251 = state_57001__$1;
(statearr_57058_58251[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (9))){
var inst_56932 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
var statearr_57059_58252 = state_57001__$1;
(statearr_57059_58252[(2)] = inst_56932);

(statearr_57059_58252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (5))){
var inst_56878 = cljs.core.deref(cs);
var inst_56879 = cljs.core.seq(inst_56878);
var inst_56880 = inst_56879;
var inst_56881 = null;
var inst_56882 = (0);
var inst_56883 = (0);
var state_57001__$1 = (function (){var statearr_57060 = state_57001;
(statearr_57060[(13)] = inst_56883);

(statearr_57060[(14)] = inst_56881);

(statearr_57060[(15)] = inst_56880);

(statearr_57060[(16)] = inst_56882);

return statearr_57060;
})();
var statearr_57061_58253 = state_57001__$1;
(statearr_57061_58253[(2)] = null);

(statearr_57061_58253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (14))){
var state_57001__$1 = state_57001;
var statearr_57062_58254 = state_57001__$1;
(statearr_57062_58254[(2)] = null);

(statearr_57062_58254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (45))){
var inst_56991 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
var statearr_57063_58255 = state_57001__$1;
(statearr_57063_58255[(2)] = inst_56991);

(statearr_57063_58255[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (26))){
var inst_56935 = (state_57001[(27)]);
var inst_56987 = (state_57001[(2)]);
var inst_56988 = cljs.core.seq(inst_56935);
var state_57001__$1 = (function (){var statearr_57064 = state_57001;
(statearr_57064[(29)] = inst_56987);

return statearr_57064;
})();
if(inst_56988){
var statearr_57065_58260 = state_57001__$1;
(statearr_57065_58260[(1)] = (42));

} else {
var statearr_57066_58261 = state_57001__$1;
(statearr_57066_58261[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (16))){
var inst_56902 = (state_57001[(7)]);
var inst_56904 = cljs.core.chunked_seq_QMARK_(inst_56902);
var state_57001__$1 = state_57001;
if(inst_56904){
var statearr_57067_58265 = state_57001__$1;
(statearr_57067_58265[(1)] = (19));

} else {
var statearr_57068_58266 = state_57001__$1;
(statearr_57068_58266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (38))){
var inst_56980 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
var statearr_57069_58267 = state_57001__$1;
(statearr_57069_58267[(2)] = inst_56980);

(statearr_57069_58267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (30))){
var state_57001__$1 = state_57001;
var statearr_57070_58271 = state_57001__$1;
(statearr_57070_58271[(2)] = null);

(statearr_57070_58271[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (10))){
var inst_56883 = (state_57001[(13)]);
var inst_56881 = (state_57001[(14)]);
var inst_56891 = cljs.core._nth(inst_56881,inst_56883);
var inst_56892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56891,(0),null);
var inst_56893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56891,(1),null);
var state_57001__$1 = (function (){var statearr_57071 = state_57001;
(statearr_57071[(24)] = inst_56892);

return statearr_57071;
})();
if(cljs.core.truth_(inst_56893)){
var statearr_57072_58275 = state_57001__$1;
(statearr_57072_58275[(1)] = (13));

} else {
var statearr_57073_58276 = state_57001__$1;
(statearr_57073_58276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (18))){
var inst_56928 = (state_57001[(2)]);
var state_57001__$1 = state_57001;
var statearr_57074_58277 = state_57001__$1;
(statearr_57074_58277[(2)] = inst_56928);

(statearr_57074_58277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (42))){
var state_57001__$1 = state_57001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57001__$1,(45),dchan);
} else {
if((state_val_57002 === (37))){
var inst_56871 = (state_57001[(11)]);
var inst_56961 = (state_57001[(23)]);
var inst_56970 = (state_57001[(22)]);
var inst_56970__$1 = cljs.core.first(inst_56961);
var inst_56971 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56970__$1,inst_56871,done);
var state_57001__$1 = (function (){var statearr_57075 = state_57001;
(statearr_57075[(22)] = inst_56970__$1);

return statearr_57075;
})();
if(cljs.core.truth_(inst_56971)){
var statearr_57076_58282 = state_57001__$1;
(statearr_57076_58282[(1)] = (39));

} else {
var statearr_57077_58283 = state_57001__$1;
(statearr_57077_58283[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (8))){
var inst_56883 = (state_57001[(13)]);
var inst_56882 = (state_57001[(16)]);
var inst_56885 = (inst_56883 < inst_56882);
var inst_56886 = inst_56885;
var state_57001__$1 = state_57001;
if(cljs.core.truth_(inst_56886)){
var statearr_57078_58287 = state_57001__$1;
(statearr_57078_58287[(1)] = (10));

} else {
var statearr_57079_58288 = state_57001__$1;
(statearr_57079_58288[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__56259__auto__ = null;
var cljs$core$async$mult_$_state_machine__56259__auto____0 = (function (){
var statearr_57080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57080[(0)] = cljs$core$async$mult_$_state_machine__56259__auto__);

(statearr_57080[(1)] = (1));

return statearr_57080;
});
var cljs$core$async$mult_$_state_machine__56259__auto____1 = (function (state_57001){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57001);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57081){var ex__56262__auto__ = e57081;
var statearr_57082_58289 = state_57001;
(statearr_57082_58289[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57001[(4)]))){
var statearr_57083_58290 = state_57001;
(statearr_57083_58290[(1)] = cljs.core.first((state_57001[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58291 = state_57001;
state_57001 = G__58291;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__56259__auto__ = function(state_57001){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__56259__auto____1.call(this,state_57001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__56259__auto____0;
cljs$core$async$mult_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__56259__auto____1;
return cljs$core$async$mult_$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57084 = f__56384__auto__();
(statearr_57084[(6)] = c__56383__auto___58203);

return statearr_57084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__57086 = arguments.length;
switch (G__57086) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_58295 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_58295(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_58296 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_58296(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_58297 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_58297(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_58298 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_58298(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_58299 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_58299(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58304 = arguments.length;
var i__4737__auto___58305 = (0);
while(true){
if((i__4737__auto___58305 < len__4736__auto___58304)){
args__4742__auto__.push((arguments[i__4737__auto___58305]));

var G__58306 = (i__4737__auto___58305 + (1));
i__4737__auto___58305 = G__58306;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57091){
var map__57092 = p__57091;
var map__57092__$1 = (((((!((map__57092 == null))))?(((((map__57092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57092):map__57092);
var opts = map__57092__$1;
var statearr_57094_58307 = state;
(statearr_57094_58307[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_57095_58308 = state;
(statearr_57095_58308[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_57096_58309 = state;
(statearr_57096_58309[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57087){
var G__57088 = cljs.core.first(seq57087);
var seq57087__$1 = cljs.core.next(seq57087);
var G__57089 = cljs.core.first(seq57087__$1);
var seq57087__$2 = cljs.core.next(seq57087__$1);
var G__57090 = cljs.core.first(seq57087__$2);
var seq57087__$3 = cljs.core.next(seq57087__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57088,G__57089,G__57090,seq57087__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57097 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57098){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57098 = meta57098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57099,meta57098__$1){
var self__ = this;
var _57099__$1 = this;
return (new cljs.core.async.t_cljs$core$async57097(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57098__$1));
}));

(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57099){
var self__ = this;
var _57099__$1 = this;
return self__.meta57098;
}));

(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57097.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57098","meta57098",2113848646,null)], null);
}));

(cljs.core.async.t_cljs$core$async57097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57097");

(cljs.core.async.t_cljs$core$async57097.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57097.
 */
cljs.core.async.__GT_t_cljs$core$async57097 = (function cljs$core$async$mix_$___GT_t_cljs$core$async57097(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57098){
return (new cljs.core.async.t_cljs$core$async57097(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57098));
});

}

return (new cljs.core.async.t_cljs$core$async57097(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56383__auto___58320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57201){
var state_val_57202 = (state_57201[(1)]);
if((state_val_57202 === (7))){
var inst_57116 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
var statearr_57203_58321 = state_57201__$1;
(statearr_57203_58321[(2)] = inst_57116);

(statearr_57203_58321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (20))){
var inst_57128 = (state_57201[(7)]);
var state_57201__$1 = state_57201;
var statearr_57204_58322 = state_57201__$1;
(statearr_57204_58322[(2)] = inst_57128);

(statearr_57204_58322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (27))){
var state_57201__$1 = state_57201;
var statearr_57205_58323 = state_57201__$1;
(statearr_57205_58323[(2)] = null);

(statearr_57205_58323[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (1))){
var inst_57103 = (state_57201[(8)]);
var inst_57103__$1 = calc_state();
var inst_57105 = (inst_57103__$1 == null);
var inst_57106 = cljs.core.not(inst_57105);
var state_57201__$1 = (function (){var statearr_57206 = state_57201;
(statearr_57206[(8)] = inst_57103__$1);

return statearr_57206;
})();
if(inst_57106){
var statearr_57207_58327 = state_57201__$1;
(statearr_57207_58327[(1)] = (2));

} else {
var statearr_57208_58328 = state_57201__$1;
(statearr_57208_58328[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (24))){
var inst_57152 = (state_57201[(9)]);
var inst_57175 = (state_57201[(10)]);
var inst_57161 = (state_57201[(11)]);
var inst_57175__$1 = (inst_57152.cljs$core$IFn$_invoke$arity$1 ? inst_57152.cljs$core$IFn$_invoke$arity$1(inst_57161) : inst_57152.call(null,inst_57161));
var state_57201__$1 = (function (){var statearr_57209 = state_57201;
(statearr_57209[(10)] = inst_57175__$1);

return statearr_57209;
})();
if(cljs.core.truth_(inst_57175__$1)){
var statearr_57210_58329 = state_57201__$1;
(statearr_57210_58329[(1)] = (29));

} else {
var statearr_57211_58330 = state_57201__$1;
(statearr_57211_58330[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (4))){
var inst_57119 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
if(cljs.core.truth_(inst_57119)){
var statearr_57212_58331 = state_57201__$1;
(statearr_57212_58331[(1)] = (8));

} else {
var statearr_57213_58332 = state_57201__$1;
(statearr_57213_58332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (15))){
var inst_57146 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
if(cljs.core.truth_(inst_57146)){
var statearr_57214_58333 = state_57201__$1;
(statearr_57214_58333[(1)] = (19));

} else {
var statearr_57215_58334 = state_57201__$1;
(statearr_57215_58334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (21))){
var inst_57151 = (state_57201[(12)]);
var inst_57151__$1 = (state_57201[(2)]);
var inst_57152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57151__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57151__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57151__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57201__$1 = (function (){var statearr_57216 = state_57201;
(statearr_57216[(9)] = inst_57152);

(statearr_57216[(13)] = inst_57153);

(statearr_57216[(12)] = inst_57151__$1);

return statearr_57216;
})();
return cljs.core.async.ioc_alts_BANG_(state_57201__$1,(22),inst_57154);
} else {
if((state_val_57202 === (31))){
var inst_57183 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
if(cljs.core.truth_(inst_57183)){
var statearr_57217_58335 = state_57201__$1;
(statearr_57217_58335[(1)] = (32));

} else {
var statearr_57218_58336 = state_57201__$1;
(statearr_57218_58336[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (32))){
var inst_57160 = (state_57201[(14)]);
var state_57201__$1 = state_57201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57201__$1,(35),out,inst_57160);
} else {
if((state_val_57202 === (33))){
var inst_57151 = (state_57201[(12)]);
var inst_57128 = inst_57151;
var state_57201__$1 = (function (){var statearr_57219 = state_57201;
(statearr_57219[(7)] = inst_57128);

return statearr_57219;
})();
var statearr_57220_58337 = state_57201__$1;
(statearr_57220_58337[(2)] = null);

(statearr_57220_58337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (13))){
var inst_57128 = (state_57201[(7)]);
var inst_57135 = inst_57128.cljs$lang$protocol_mask$partition0$;
var inst_57136 = (inst_57135 & (64));
var inst_57137 = inst_57128.cljs$core$ISeq$;
var inst_57138 = (cljs.core.PROTOCOL_SENTINEL === inst_57137);
var inst_57139 = ((inst_57136) || (inst_57138));
var state_57201__$1 = state_57201;
if(cljs.core.truth_(inst_57139)){
var statearr_57221_58339 = state_57201__$1;
(statearr_57221_58339[(1)] = (16));

} else {
var statearr_57222_58340 = state_57201__$1;
(statearr_57222_58340[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (22))){
var inst_57160 = (state_57201[(14)]);
var inst_57161 = (state_57201[(11)]);
var inst_57159 = (state_57201[(2)]);
var inst_57160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57159,(0),null);
var inst_57161__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57159,(1),null);
var inst_57162 = (inst_57160__$1 == null);
var inst_57163 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57161__$1,change);
var inst_57164 = ((inst_57162) || (inst_57163));
var state_57201__$1 = (function (){var statearr_57223 = state_57201;
(statearr_57223[(14)] = inst_57160__$1);

(statearr_57223[(11)] = inst_57161__$1);

return statearr_57223;
})();
if(cljs.core.truth_(inst_57164)){
var statearr_57224_58341 = state_57201__$1;
(statearr_57224_58341[(1)] = (23));

} else {
var statearr_57225_58342 = state_57201__$1;
(statearr_57225_58342[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (36))){
var inst_57151 = (state_57201[(12)]);
var inst_57128 = inst_57151;
var state_57201__$1 = (function (){var statearr_57226 = state_57201;
(statearr_57226[(7)] = inst_57128);

return statearr_57226;
})();
var statearr_57227_58343 = state_57201__$1;
(statearr_57227_58343[(2)] = null);

(statearr_57227_58343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (29))){
var inst_57175 = (state_57201[(10)]);
var state_57201__$1 = state_57201;
var statearr_57228_58344 = state_57201__$1;
(statearr_57228_58344[(2)] = inst_57175);

(statearr_57228_58344[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (6))){
var state_57201__$1 = state_57201;
var statearr_57229_58345 = state_57201__$1;
(statearr_57229_58345[(2)] = false);

(statearr_57229_58345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (28))){
var inst_57171 = (state_57201[(2)]);
var inst_57172 = calc_state();
var inst_57128 = inst_57172;
var state_57201__$1 = (function (){var statearr_57230 = state_57201;
(statearr_57230[(7)] = inst_57128);

(statearr_57230[(15)] = inst_57171);

return statearr_57230;
})();
var statearr_57231_58350 = state_57201__$1;
(statearr_57231_58350[(2)] = null);

(statearr_57231_58350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (25))){
var inst_57197 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
var statearr_57232_58352 = state_57201__$1;
(statearr_57232_58352[(2)] = inst_57197);

(statearr_57232_58352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (34))){
var inst_57195 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
var statearr_57233_58353 = state_57201__$1;
(statearr_57233_58353[(2)] = inst_57195);

(statearr_57233_58353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (17))){
var state_57201__$1 = state_57201;
var statearr_57234_58354 = state_57201__$1;
(statearr_57234_58354[(2)] = false);

(statearr_57234_58354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (3))){
var state_57201__$1 = state_57201;
var statearr_57235_58355 = state_57201__$1;
(statearr_57235_58355[(2)] = false);

(statearr_57235_58355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (12))){
var inst_57199 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57201__$1,inst_57199);
} else {
if((state_val_57202 === (2))){
var inst_57103 = (state_57201[(8)]);
var inst_57108 = inst_57103.cljs$lang$protocol_mask$partition0$;
var inst_57109 = (inst_57108 & (64));
var inst_57110 = inst_57103.cljs$core$ISeq$;
var inst_57111 = (cljs.core.PROTOCOL_SENTINEL === inst_57110);
var inst_57112 = ((inst_57109) || (inst_57111));
var state_57201__$1 = state_57201;
if(cljs.core.truth_(inst_57112)){
var statearr_57236_58357 = state_57201__$1;
(statearr_57236_58357[(1)] = (5));

} else {
var statearr_57237_58358 = state_57201__$1;
(statearr_57237_58358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (23))){
var inst_57160 = (state_57201[(14)]);
var inst_57166 = (inst_57160 == null);
var state_57201__$1 = state_57201;
if(cljs.core.truth_(inst_57166)){
var statearr_57238_58359 = state_57201__$1;
(statearr_57238_58359[(1)] = (26));

} else {
var statearr_57239_58360 = state_57201__$1;
(statearr_57239_58360[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (35))){
var inst_57186 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
if(cljs.core.truth_(inst_57186)){
var statearr_57240_58362 = state_57201__$1;
(statearr_57240_58362[(1)] = (36));

} else {
var statearr_57241_58366 = state_57201__$1;
(statearr_57241_58366[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (19))){
var inst_57128 = (state_57201[(7)]);
var inst_57148 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57128);
var state_57201__$1 = state_57201;
var statearr_57242_58367 = state_57201__$1;
(statearr_57242_58367[(2)] = inst_57148);

(statearr_57242_58367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (11))){
var inst_57128 = (state_57201[(7)]);
var inst_57132 = (inst_57128 == null);
var inst_57133 = cljs.core.not(inst_57132);
var state_57201__$1 = state_57201;
if(inst_57133){
var statearr_57243_58368 = state_57201__$1;
(statearr_57243_58368[(1)] = (13));

} else {
var statearr_57244_58369 = state_57201__$1;
(statearr_57244_58369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (9))){
var inst_57103 = (state_57201[(8)]);
var state_57201__$1 = state_57201;
var statearr_57245_58370 = state_57201__$1;
(statearr_57245_58370[(2)] = inst_57103);

(statearr_57245_58370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (5))){
var state_57201__$1 = state_57201;
var statearr_57246_58371 = state_57201__$1;
(statearr_57246_58371[(2)] = true);

(statearr_57246_58371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (14))){
var state_57201__$1 = state_57201;
var statearr_57247_58372 = state_57201__$1;
(statearr_57247_58372[(2)] = false);

(statearr_57247_58372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (26))){
var inst_57161 = (state_57201[(11)]);
var inst_57168 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_57161);
var state_57201__$1 = state_57201;
var statearr_57248_58373 = state_57201__$1;
(statearr_57248_58373[(2)] = inst_57168);

(statearr_57248_58373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (16))){
var state_57201__$1 = state_57201;
var statearr_57249_58374 = state_57201__$1;
(statearr_57249_58374[(2)] = true);

(statearr_57249_58374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (38))){
var inst_57191 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
var statearr_57250_58375 = state_57201__$1;
(statearr_57250_58375[(2)] = inst_57191);

(statearr_57250_58375[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (30))){
var inst_57152 = (state_57201[(9)]);
var inst_57153 = (state_57201[(13)]);
var inst_57161 = (state_57201[(11)]);
var inst_57178 = cljs.core.empty_QMARK_(inst_57152);
var inst_57179 = (inst_57153.cljs$core$IFn$_invoke$arity$1 ? inst_57153.cljs$core$IFn$_invoke$arity$1(inst_57161) : inst_57153.call(null,inst_57161));
var inst_57180 = cljs.core.not(inst_57179);
var inst_57181 = ((inst_57178) && (inst_57180));
var state_57201__$1 = state_57201;
var statearr_57251_58376 = state_57201__$1;
(statearr_57251_58376[(2)] = inst_57181);

(statearr_57251_58376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (10))){
var inst_57103 = (state_57201[(8)]);
var inst_57124 = (state_57201[(2)]);
var inst_57125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57124,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57124,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57124,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57128 = inst_57103;
var state_57201__$1 = (function (){var statearr_57252 = state_57201;
(statearr_57252[(16)] = inst_57126);

(statearr_57252[(7)] = inst_57128);

(statearr_57252[(17)] = inst_57125);

(statearr_57252[(18)] = inst_57127);

return statearr_57252;
})();
var statearr_57253_58377 = state_57201__$1;
(statearr_57253_58377[(2)] = null);

(statearr_57253_58377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (18))){
var inst_57143 = (state_57201[(2)]);
var state_57201__$1 = state_57201;
var statearr_57254_58378 = state_57201__$1;
(statearr_57254_58378[(2)] = inst_57143);

(statearr_57254_58378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (37))){
var state_57201__$1 = state_57201;
var statearr_57255_58379 = state_57201__$1;
(statearr_57255_58379[(2)] = null);

(statearr_57255_58379[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57202 === (8))){
var inst_57103 = (state_57201[(8)]);
var inst_57121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57103);
var state_57201__$1 = state_57201;
var statearr_57256_58380 = state_57201__$1;
(statearr_57256_58380[(2)] = inst_57121);

(statearr_57256_58380[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__56259__auto__ = null;
var cljs$core$async$mix_$_state_machine__56259__auto____0 = (function (){
var statearr_57257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57257[(0)] = cljs$core$async$mix_$_state_machine__56259__auto__);

(statearr_57257[(1)] = (1));

return statearr_57257;
});
var cljs$core$async$mix_$_state_machine__56259__auto____1 = (function (state_57201){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57201);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57258){var ex__56262__auto__ = e57258;
var statearr_57259_58384 = state_57201;
(statearr_57259_58384[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57201[(4)]))){
var statearr_57260_58385 = state_57201;
(statearr_57260_58385[(1)] = cljs.core.first((state_57201[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58386 = state_57201;
state_57201 = G__58386;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__56259__auto__ = function(state_57201){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__56259__auto____1.call(this,state_57201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__56259__auto____0;
cljs$core$async$mix_$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__56259__auto____1;
return cljs$core$async$mix_$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57261 = f__56384__auto__();
(statearr_57261[(6)] = c__56383__auto___58320);

return statearr_57261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_58387 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_58387(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_58389 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_58389(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_58390 = (function() {
var G__58391 = null;
var G__58391__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__58391__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__58391 = function(p,v){
switch(arguments.length){
case 1:
return G__58391__1.call(this,p);
case 2:
return G__58391__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58391.cljs$core$IFn$_invoke$arity$1 = G__58391__1;
G__58391.cljs$core$IFn$_invoke$arity$2 = G__58391__2;
return G__58391;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__57263 = arguments.length;
switch (G__57263) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58390(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58390(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__57266 = arguments.length;
switch (G__57266) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__57264_SHARP_){
if(cljs.core.truth_((p1__57264_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__57264_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__57264_SHARP_.call(null,topic)))){
return p1__57264_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57264_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57267 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57267 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57268){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57268 = meta57268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57269,meta57268__$1){
var self__ = this;
var _57269__$1 = this;
return (new cljs.core.async.t_cljs$core$async57267(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57268__$1));
}));

(cljs.core.async.t_cljs$core$async57267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57269){
var self__ = this;
var _57269__$1 = this;
return self__.meta57268;
}));

(cljs.core.async.t_cljs$core$async57267.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57267.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57267.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async57267.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async57267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async57267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async57267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57268","meta57268",-1851474808,null)], null);
}));

(cljs.core.async.t_cljs$core$async57267.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57267");

(cljs.core.async.t_cljs$core$async57267.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57267");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57267.
 */
cljs.core.async.__GT_t_cljs$core$async57267 = (function cljs$core$async$__GT_t_cljs$core$async57267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57268){
return (new cljs.core.async.t_cljs$core$async57267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57268));
});

}

return (new cljs.core.async.t_cljs$core$async57267(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56383__auto___58404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57341){
var state_val_57342 = (state_57341[(1)]);
if((state_val_57342 === (7))){
var inst_57337 = (state_57341[(2)]);
var state_57341__$1 = state_57341;
var statearr_57343_58405 = state_57341__$1;
(statearr_57343_58405[(2)] = inst_57337);

(statearr_57343_58405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (20))){
var state_57341__$1 = state_57341;
var statearr_57344_58406 = state_57341__$1;
(statearr_57344_58406[(2)] = null);

(statearr_57344_58406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (1))){
var state_57341__$1 = state_57341;
var statearr_57345_58407 = state_57341__$1;
(statearr_57345_58407[(2)] = null);

(statearr_57345_58407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (24))){
var inst_57320 = (state_57341[(7)]);
var inst_57329 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_57320);
var state_57341__$1 = state_57341;
var statearr_57346_58408 = state_57341__$1;
(statearr_57346_58408[(2)] = inst_57329);

(statearr_57346_58408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (4))){
var inst_57272 = (state_57341[(8)]);
var inst_57272__$1 = (state_57341[(2)]);
var inst_57273 = (inst_57272__$1 == null);
var state_57341__$1 = (function (){var statearr_57347 = state_57341;
(statearr_57347[(8)] = inst_57272__$1);

return statearr_57347;
})();
if(cljs.core.truth_(inst_57273)){
var statearr_57348_58409 = state_57341__$1;
(statearr_57348_58409[(1)] = (5));

} else {
var statearr_57349_58410 = state_57341__$1;
(statearr_57349_58410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (15))){
var inst_57314 = (state_57341[(2)]);
var state_57341__$1 = state_57341;
var statearr_57350_58411 = state_57341__$1;
(statearr_57350_58411[(2)] = inst_57314);

(statearr_57350_58411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (21))){
var inst_57334 = (state_57341[(2)]);
var state_57341__$1 = (function (){var statearr_57351 = state_57341;
(statearr_57351[(9)] = inst_57334);

return statearr_57351;
})();
var statearr_57352_58412 = state_57341__$1;
(statearr_57352_58412[(2)] = null);

(statearr_57352_58412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (13))){
var inst_57296 = (state_57341[(10)]);
var inst_57298 = cljs.core.chunked_seq_QMARK_(inst_57296);
var state_57341__$1 = state_57341;
if(inst_57298){
var statearr_57353_58413 = state_57341__$1;
(statearr_57353_58413[(1)] = (16));

} else {
var statearr_57354_58414 = state_57341__$1;
(statearr_57354_58414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (22))){
var inst_57326 = (state_57341[(2)]);
var state_57341__$1 = state_57341;
if(cljs.core.truth_(inst_57326)){
var statearr_57355_58415 = state_57341__$1;
(statearr_57355_58415[(1)] = (23));

} else {
var statearr_57356_58416 = state_57341__$1;
(statearr_57356_58416[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (6))){
var inst_57272 = (state_57341[(8)]);
var inst_57320 = (state_57341[(7)]);
var inst_57322 = (state_57341[(11)]);
var inst_57320__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_57272) : topic_fn.call(null,inst_57272));
var inst_57321 = cljs.core.deref(mults);
var inst_57322__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57321,inst_57320__$1);
var state_57341__$1 = (function (){var statearr_57357 = state_57341;
(statearr_57357[(7)] = inst_57320__$1);

(statearr_57357[(11)] = inst_57322__$1);

return statearr_57357;
})();
if(cljs.core.truth_(inst_57322__$1)){
var statearr_57358_58417 = state_57341__$1;
(statearr_57358_58417[(1)] = (19));

} else {
var statearr_57359_58418 = state_57341__$1;
(statearr_57359_58418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (25))){
var inst_57331 = (state_57341[(2)]);
var state_57341__$1 = state_57341;
var statearr_57360_58419 = state_57341__$1;
(statearr_57360_58419[(2)] = inst_57331);

(statearr_57360_58419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (17))){
var inst_57296 = (state_57341[(10)]);
var inst_57305 = cljs.core.first(inst_57296);
var inst_57306 = cljs.core.async.muxch_STAR_(inst_57305);
var inst_57307 = cljs.core.async.close_BANG_(inst_57306);
var inst_57308 = cljs.core.next(inst_57296);
var inst_57282 = inst_57308;
var inst_57283 = null;
var inst_57284 = (0);
var inst_57285 = (0);
var state_57341__$1 = (function (){var statearr_57361 = state_57341;
(statearr_57361[(12)] = inst_57284);

(statearr_57361[(13)] = inst_57307);

(statearr_57361[(14)] = inst_57282);

(statearr_57361[(15)] = inst_57285);

(statearr_57361[(16)] = inst_57283);

return statearr_57361;
})();
var statearr_57362_58420 = state_57341__$1;
(statearr_57362_58420[(2)] = null);

(statearr_57362_58420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (3))){
var inst_57339 = (state_57341[(2)]);
var state_57341__$1 = state_57341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57341__$1,inst_57339);
} else {
if((state_val_57342 === (12))){
var inst_57316 = (state_57341[(2)]);
var state_57341__$1 = state_57341;
var statearr_57363_58421 = state_57341__$1;
(statearr_57363_58421[(2)] = inst_57316);

(statearr_57363_58421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (2))){
var state_57341__$1 = state_57341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57341__$1,(4),ch);
} else {
if((state_val_57342 === (23))){
var state_57341__$1 = state_57341;
var statearr_57364_58422 = state_57341__$1;
(statearr_57364_58422[(2)] = null);

(statearr_57364_58422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (19))){
var inst_57272 = (state_57341[(8)]);
var inst_57322 = (state_57341[(11)]);
var inst_57324 = cljs.core.async.muxch_STAR_(inst_57322);
var state_57341__$1 = state_57341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57341__$1,(22),inst_57324,inst_57272);
} else {
if((state_val_57342 === (11))){
var inst_57296 = (state_57341[(10)]);
var inst_57282 = (state_57341[(14)]);
var inst_57296__$1 = cljs.core.seq(inst_57282);
var state_57341__$1 = (function (){var statearr_57365 = state_57341;
(statearr_57365[(10)] = inst_57296__$1);

return statearr_57365;
})();
if(inst_57296__$1){
var statearr_57366_58423 = state_57341__$1;
(statearr_57366_58423[(1)] = (13));

} else {
var statearr_57367_58424 = state_57341__$1;
(statearr_57367_58424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (9))){
var inst_57318 = (state_57341[(2)]);
var state_57341__$1 = state_57341;
var statearr_57368_58425 = state_57341__$1;
(statearr_57368_58425[(2)] = inst_57318);

(statearr_57368_58425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (5))){
var inst_57279 = cljs.core.deref(mults);
var inst_57280 = cljs.core.vals(inst_57279);
var inst_57281 = cljs.core.seq(inst_57280);
var inst_57282 = inst_57281;
var inst_57283 = null;
var inst_57284 = (0);
var inst_57285 = (0);
var state_57341__$1 = (function (){var statearr_57369 = state_57341;
(statearr_57369[(12)] = inst_57284);

(statearr_57369[(14)] = inst_57282);

(statearr_57369[(15)] = inst_57285);

(statearr_57369[(16)] = inst_57283);

return statearr_57369;
})();
var statearr_57370_58426 = state_57341__$1;
(statearr_57370_58426[(2)] = null);

(statearr_57370_58426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (14))){
var state_57341__$1 = state_57341;
var statearr_57374_58427 = state_57341__$1;
(statearr_57374_58427[(2)] = null);

(statearr_57374_58427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (16))){
var inst_57296 = (state_57341[(10)]);
var inst_57300 = cljs.core.chunk_first(inst_57296);
var inst_57301 = cljs.core.chunk_rest(inst_57296);
var inst_57302 = cljs.core.count(inst_57300);
var inst_57282 = inst_57301;
var inst_57283 = inst_57300;
var inst_57284 = inst_57302;
var inst_57285 = (0);
var state_57341__$1 = (function (){var statearr_57375 = state_57341;
(statearr_57375[(12)] = inst_57284);

(statearr_57375[(14)] = inst_57282);

(statearr_57375[(15)] = inst_57285);

(statearr_57375[(16)] = inst_57283);

return statearr_57375;
})();
var statearr_57376_58431 = state_57341__$1;
(statearr_57376_58431[(2)] = null);

(statearr_57376_58431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (10))){
var inst_57284 = (state_57341[(12)]);
var inst_57282 = (state_57341[(14)]);
var inst_57285 = (state_57341[(15)]);
var inst_57283 = (state_57341[(16)]);
var inst_57290 = cljs.core._nth(inst_57283,inst_57285);
var inst_57291 = cljs.core.async.muxch_STAR_(inst_57290);
var inst_57292 = cljs.core.async.close_BANG_(inst_57291);
var inst_57293 = (inst_57285 + (1));
var tmp57371 = inst_57284;
var tmp57372 = inst_57282;
var tmp57373 = inst_57283;
var inst_57282__$1 = tmp57372;
var inst_57283__$1 = tmp57373;
var inst_57284__$1 = tmp57371;
var inst_57285__$1 = inst_57293;
var state_57341__$1 = (function (){var statearr_57377 = state_57341;
(statearr_57377[(12)] = inst_57284__$1);

(statearr_57377[(14)] = inst_57282__$1);

(statearr_57377[(17)] = inst_57292);

(statearr_57377[(15)] = inst_57285__$1);

(statearr_57377[(16)] = inst_57283__$1);

return statearr_57377;
})();
var statearr_57378_58439 = state_57341__$1;
(statearr_57378_58439[(2)] = null);

(statearr_57378_58439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (18))){
var inst_57311 = (state_57341[(2)]);
var state_57341__$1 = state_57341;
var statearr_57379_58440 = state_57341__$1;
(statearr_57379_58440[(2)] = inst_57311);

(statearr_57379_58440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57342 === (8))){
var inst_57284 = (state_57341[(12)]);
var inst_57285 = (state_57341[(15)]);
var inst_57287 = (inst_57285 < inst_57284);
var inst_57288 = inst_57287;
var state_57341__$1 = state_57341;
if(cljs.core.truth_(inst_57288)){
var statearr_57380_58441 = state_57341__$1;
(statearr_57380_58441[(1)] = (10));

} else {
var statearr_57381_58445 = state_57341__$1;
(statearr_57381_58445[(1)] = (11));

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_57382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57382[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_57382[(1)] = (1));

return statearr_57382;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_57341){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57341);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57383){var ex__56262__auto__ = e57383;
var statearr_57384_58449 = state_57341;
(statearr_57384_58449[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57341[(4)]))){
var statearr_57385_58450 = state_57341;
(statearr_57385_58450[(1)] = cljs.core.first((state_57341[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58451 = state_57341;
state_57341 = G__58451;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_57341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_57341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57386 = f__56384__auto__();
(statearr_57386[(6)] = c__56383__auto___58404);

return statearr_57386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__57388 = arguments.length;
switch (G__57388) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__57390 = arguments.length;
switch (G__57390) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__57392 = arguments.length;
switch (G__57392) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__56383__auto___58469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57435){
var state_val_57436 = (state_57435[(1)]);
if((state_val_57436 === (7))){
var state_57435__$1 = state_57435;
var statearr_57437_58475 = state_57435__$1;
(statearr_57437_58475[(2)] = null);

(statearr_57437_58475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (1))){
var state_57435__$1 = state_57435;
var statearr_57438_58476 = state_57435__$1;
(statearr_57438_58476[(2)] = null);

(statearr_57438_58476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (4))){
var inst_57396 = (state_57435[(7)]);
var inst_57395 = (state_57435[(8)]);
var inst_57398 = (inst_57396 < inst_57395);
var state_57435__$1 = state_57435;
if(cljs.core.truth_(inst_57398)){
var statearr_57439_58477 = state_57435__$1;
(statearr_57439_58477[(1)] = (6));

} else {
var statearr_57440_58478 = state_57435__$1;
(statearr_57440_58478[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (15))){
var inst_57421 = (state_57435[(9)]);
var inst_57426 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_57421);
var state_57435__$1 = state_57435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57435__$1,(17),out,inst_57426);
} else {
if((state_val_57436 === (13))){
var inst_57421 = (state_57435[(9)]);
var inst_57421__$1 = (state_57435[(2)]);
var inst_57422 = cljs.core.some(cljs.core.nil_QMARK_,inst_57421__$1);
var state_57435__$1 = (function (){var statearr_57441 = state_57435;
(statearr_57441[(9)] = inst_57421__$1);

return statearr_57441;
})();
if(cljs.core.truth_(inst_57422)){
var statearr_57442_58479 = state_57435__$1;
(statearr_57442_58479[(1)] = (14));

} else {
var statearr_57443_58480 = state_57435__$1;
(statearr_57443_58480[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (6))){
var state_57435__$1 = state_57435;
var statearr_57444_58481 = state_57435__$1;
(statearr_57444_58481[(2)] = null);

(statearr_57444_58481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (17))){
var inst_57428 = (state_57435[(2)]);
var state_57435__$1 = (function (){var statearr_57446 = state_57435;
(statearr_57446[(10)] = inst_57428);

return statearr_57446;
})();
var statearr_57447_58482 = state_57435__$1;
(statearr_57447_58482[(2)] = null);

(statearr_57447_58482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (3))){
var inst_57433 = (state_57435[(2)]);
var state_57435__$1 = state_57435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57435__$1,inst_57433);
} else {
if((state_val_57436 === (12))){
var _ = (function (){var statearr_57448 = state_57435;
(statearr_57448[(4)] = cljs.core.rest((state_57435[(4)])));

return statearr_57448;
})();
var state_57435__$1 = state_57435;
var ex57445 = (state_57435__$1[(2)]);
var statearr_57449_58483 = state_57435__$1;
(statearr_57449_58483[(5)] = ex57445);


if((ex57445 instanceof Object)){
var statearr_57450_58484 = state_57435__$1;
(statearr_57450_58484[(1)] = (11));

(statearr_57450_58484[(5)] = null);

} else {
throw ex57445;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (2))){
var inst_57394 = cljs.core.reset_BANG_(dctr,cnt);
var inst_57395 = cnt;
var inst_57396 = (0);
var state_57435__$1 = (function (){var statearr_57451 = state_57435;
(statearr_57451[(11)] = inst_57394);

(statearr_57451[(7)] = inst_57396);

(statearr_57451[(8)] = inst_57395);

return statearr_57451;
})();
var statearr_57452_58491 = state_57435__$1;
(statearr_57452_58491[(2)] = null);

(statearr_57452_58491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (11))){
var inst_57400 = (state_57435[(2)]);
var inst_57401 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_57435__$1 = (function (){var statearr_57453 = state_57435;
(statearr_57453[(12)] = inst_57400);

return statearr_57453;
})();
var statearr_57454_58492 = state_57435__$1;
(statearr_57454_58492[(2)] = inst_57401);

(statearr_57454_58492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (9))){
var inst_57396 = (state_57435[(7)]);
var _ = (function (){var statearr_57455 = state_57435;
(statearr_57455[(4)] = cljs.core.cons((12),(state_57435[(4)])));

return statearr_57455;
})();
var inst_57407 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_57396) : chs__$1.call(null,inst_57396));
var inst_57408 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_57396) : done.call(null,inst_57396));
var inst_57409 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57407,inst_57408);
var ___$1 = (function (){var statearr_57456 = state_57435;
(statearr_57456[(4)] = cljs.core.rest((state_57435[(4)])));

return statearr_57456;
})();
var state_57435__$1 = state_57435;
var statearr_57457_58493 = state_57435__$1;
(statearr_57457_58493[(2)] = inst_57409);

(statearr_57457_58493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (5))){
var inst_57419 = (state_57435[(2)]);
var state_57435__$1 = (function (){var statearr_57458 = state_57435;
(statearr_57458[(13)] = inst_57419);

return statearr_57458;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57435__$1,(13),dchan);
} else {
if((state_val_57436 === (14))){
var inst_57424 = cljs.core.async.close_BANG_(out);
var state_57435__$1 = state_57435;
var statearr_57459_58494 = state_57435__$1;
(statearr_57459_58494[(2)] = inst_57424);

(statearr_57459_58494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (16))){
var inst_57431 = (state_57435[(2)]);
var state_57435__$1 = state_57435;
var statearr_57460_58495 = state_57435__$1;
(statearr_57460_58495[(2)] = inst_57431);

(statearr_57460_58495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (10))){
var inst_57396 = (state_57435[(7)]);
var inst_57412 = (state_57435[(2)]);
var inst_57413 = (inst_57396 + (1));
var inst_57396__$1 = inst_57413;
var state_57435__$1 = (function (){var statearr_57461 = state_57435;
(statearr_57461[(14)] = inst_57412);

(statearr_57461[(7)] = inst_57396__$1);

return statearr_57461;
})();
var statearr_57462_58502 = state_57435__$1;
(statearr_57462_58502[(2)] = null);

(statearr_57462_58502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57436 === (8))){
var inst_57417 = (state_57435[(2)]);
var state_57435__$1 = state_57435;
var statearr_57463_58503 = state_57435__$1;
(statearr_57463_58503[(2)] = inst_57417);

(statearr_57463_58503[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_57464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57464[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_57464[(1)] = (1));

return statearr_57464;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_57435){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57435);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57465){var ex__56262__auto__ = e57465;
var statearr_57466_58504 = state_57435;
(statearr_57466_58504[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57435[(4)]))){
var statearr_57467_58505 = state_57435;
(statearr_57467_58505[(1)] = cljs.core.first((state_57435[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58506 = state_57435;
state_57435 = G__58506;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_57435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_57435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57468 = f__56384__auto__();
(statearr_57468[(6)] = c__56383__auto___58469);

return statearr_57468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__57471 = arguments.length;
switch (G__57471) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56383__auto___58508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57503){
var state_val_57504 = (state_57503[(1)]);
if((state_val_57504 === (7))){
var inst_57482 = (state_57503[(7)]);
var inst_57483 = (state_57503[(8)]);
var inst_57482__$1 = (state_57503[(2)]);
var inst_57483__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57482__$1,(0),null);
var inst_57484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57482__$1,(1),null);
var inst_57485 = (inst_57483__$1 == null);
var state_57503__$1 = (function (){var statearr_57505 = state_57503;
(statearr_57505[(9)] = inst_57484);

(statearr_57505[(7)] = inst_57482__$1);

(statearr_57505[(8)] = inst_57483__$1);

return statearr_57505;
})();
if(cljs.core.truth_(inst_57485)){
var statearr_57506_58515 = state_57503__$1;
(statearr_57506_58515[(1)] = (8));

} else {
var statearr_57507_58516 = state_57503__$1;
(statearr_57507_58516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (1))){
var inst_57472 = cljs.core.vec(chs);
var inst_57473 = inst_57472;
var state_57503__$1 = (function (){var statearr_57508 = state_57503;
(statearr_57508[(10)] = inst_57473);

return statearr_57508;
})();
var statearr_57509_58517 = state_57503__$1;
(statearr_57509_58517[(2)] = null);

(statearr_57509_58517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (4))){
var inst_57473 = (state_57503[(10)]);
var state_57503__$1 = state_57503;
return cljs.core.async.ioc_alts_BANG_(state_57503__$1,(7),inst_57473);
} else {
if((state_val_57504 === (6))){
var inst_57499 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
var statearr_57510_58518 = state_57503__$1;
(statearr_57510_58518[(2)] = inst_57499);

(statearr_57510_58518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (3))){
var inst_57501 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57503__$1,inst_57501);
} else {
if((state_val_57504 === (2))){
var inst_57473 = (state_57503[(10)]);
var inst_57475 = cljs.core.count(inst_57473);
var inst_57476 = (inst_57475 > (0));
var state_57503__$1 = state_57503;
if(cljs.core.truth_(inst_57476)){
var statearr_57512_58519 = state_57503__$1;
(statearr_57512_58519[(1)] = (4));

} else {
var statearr_57513_58520 = state_57503__$1;
(statearr_57513_58520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (11))){
var inst_57473 = (state_57503[(10)]);
var inst_57492 = (state_57503[(2)]);
var tmp57511 = inst_57473;
var inst_57473__$1 = tmp57511;
var state_57503__$1 = (function (){var statearr_57514 = state_57503;
(statearr_57514[(11)] = inst_57492);

(statearr_57514[(10)] = inst_57473__$1);

return statearr_57514;
})();
var statearr_57515_58521 = state_57503__$1;
(statearr_57515_58521[(2)] = null);

(statearr_57515_58521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (9))){
var inst_57483 = (state_57503[(8)]);
var state_57503__$1 = state_57503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57503__$1,(11),out,inst_57483);
} else {
if((state_val_57504 === (5))){
var inst_57497 = cljs.core.async.close_BANG_(out);
var state_57503__$1 = state_57503;
var statearr_57516_58522 = state_57503__$1;
(statearr_57516_58522[(2)] = inst_57497);

(statearr_57516_58522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (10))){
var inst_57495 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
var statearr_57517_58523 = state_57503__$1;
(statearr_57517_58523[(2)] = inst_57495);

(statearr_57517_58523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (8))){
var inst_57484 = (state_57503[(9)]);
var inst_57473 = (state_57503[(10)]);
var inst_57482 = (state_57503[(7)]);
var inst_57483 = (state_57503[(8)]);
var inst_57487 = (function (){var cs = inst_57473;
var vec__57478 = inst_57482;
var v = inst_57483;
var c = inst_57484;
return (function (p1__57469_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__57469_SHARP_);
});
})();
var inst_57488 = cljs.core.filterv(inst_57487,inst_57473);
var inst_57473__$1 = inst_57488;
var state_57503__$1 = (function (){var statearr_57518 = state_57503;
(statearr_57518[(10)] = inst_57473__$1);

return statearr_57518;
})();
var statearr_57519_58524 = state_57503__$1;
(statearr_57519_58524[(2)] = null);

(statearr_57519_58524[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_57520 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57520[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_57520[(1)] = (1));

return statearr_57520;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_57503){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57503);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57521){var ex__56262__auto__ = e57521;
var statearr_57522_58527 = state_57503;
(statearr_57522_58527[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57503[(4)]))){
var statearr_57523_58528 = state_57503;
(statearr_57523_58528[(1)] = cljs.core.first((state_57503[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58529 = state_57503;
state_57503 = G__58529;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_57503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_57503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57524 = f__56384__auto__();
(statearr_57524[(6)] = c__56383__auto___58508);

return statearr_57524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__57526 = arguments.length;
switch (G__57526) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56383__auto___58531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57550){
var state_val_57551 = (state_57550[(1)]);
if((state_val_57551 === (7))){
var inst_57532 = (state_57550[(7)]);
var inst_57532__$1 = (state_57550[(2)]);
var inst_57533 = (inst_57532__$1 == null);
var inst_57534 = cljs.core.not(inst_57533);
var state_57550__$1 = (function (){var statearr_57552 = state_57550;
(statearr_57552[(7)] = inst_57532__$1);

return statearr_57552;
})();
if(inst_57534){
var statearr_57553_58534 = state_57550__$1;
(statearr_57553_58534[(1)] = (8));

} else {
var statearr_57554_58535 = state_57550__$1;
(statearr_57554_58535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57551 === (1))){
var inst_57527 = (0);
var state_57550__$1 = (function (){var statearr_57555 = state_57550;
(statearr_57555[(8)] = inst_57527);

return statearr_57555;
})();
var statearr_57556_58536 = state_57550__$1;
(statearr_57556_58536[(2)] = null);

(statearr_57556_58536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57551 === (4))){
var state_57550__$1 = state_57550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57550__$1,(7),ch);
} else {
if((state_val_57551 === (6))){
var inst_57545 = (state_57550[(2)]);
var state_57550__$1 = state_57550;
var statearr_57557_58537 = state_57550__$1;
(statearr_57557_58537[(2)] = inst_57545);

(statearr_57557_58537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57551 === (3))){
var inst_57547 = (state_57550[(2)]);
var inst_57548 = cljs.core.async.close_BANG_(out);
var state_57550__$1 = (function (){var statearr_57558 = state_57550;
(statearr_57558[(9)] = inst_57547);

return statearr_57558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57550__$1,inst_57548);
} else {
if((state_val_57551 === (2))){
var inst_57527 = (state_57550[(8)]);
var inst_57529 = (inst_57527 < n);
var state_57550__$1 = state_57550;
if(cljs.core.truth_(inst_57529)){
var statearr_57559_58538 = state_57550__$1;
(statearr_57559_58538[(1)] = (4));

} else {
var statearr_57560_58539 = state_57550__$1;
(statearr_57560_58539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57551 === (11))){
var inst_57527 = (state_57550[(8)]);
var inst_57537 = (state_57550[(2)]);
var inst_57538 = (inst_57527 + (1));
var inst_57527__$1 = inst_57538;
var state_57550__$1 = (function (){var statearr_57561 = state_57550;
(statearr_57561[(10)] = inst_57537);

(statearr_57561[(8)] = inst_57527__$1);

return statearr_57561;
})();
var statearr_57562_58540 = state_57550__$1;
(statearr_57562_58540[(2)] = null);

(statearr_57562_58540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57551 === (9))){
var state_57550__$1 = state_57550;
var statearr_57563_58541 = state_57550__$1;
(statearr_57563_58541[(2)] = null);

(statearr_57563_58541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57551 === (5))){
var state_57550__$1 = state_57550;
var statearr_57564_58542 = state_57550__$1;
(statearr_57564_58542[(2)] = null);

(statearr_57564_58542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57551 === (10))){
var inst_57542 = (state_57550[(2)]);
var state_57550__$1 = state_57550;
var statearr_57565_58549 = state_57550__$1;
(statearr_57565_58549[(2)] = inst_57542);

(statearr_57565_58549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57551 === (8))){
var inst_57532 = (state_57550[(7)]);
var state_57550__$1 = state_57550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57550__$1,(11),out,inst_57532);
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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_57566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57566[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_57566[(1)] = (1));

return statearr_57566;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_57550){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57550);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57567){var ex__56262__auto__ = e57567;
var statearr_57568_58551 = state_57550;
(statearr_57568_58551[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57550[(4)]))){
var statearr_57569_58552 = state_57550;
(statearr_57569_58552[(1)] = cljs.core.first((state_57550[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58553 = state_57550;
state_57550 = G__58553;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_57550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_57550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57570 = f__56384__auto__();
(statearr_57570[(6)] = c__56383__auto___58531);

return statearr_57570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57572 = (function (f,ch,meta57573){
this.f = f;
this.ch = ch;
this.meta57573 = meta57573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57574,meta57573__$1){
var self__ = this;
var _57574__$1 = this;
return (new cljs.core.async.t_cljs$core$async57572(self__.f,self__.ch,meta57573__$1));
}));

(cljs.core.async.t_cljs$core$async57572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57574){
var self__ = this;
var _57574__$1 = this;
return self__.meta57573;
}));

(cljs.core.async.t_cljs$core$async57572.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57572.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57572.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57575 = (function (f,ch,meta57573,_,fn1,meta57576){
this.f = f;
this.ch = ch;
this.meta57573 = meta57573;
this._ = _;
this.fn1 = fn1;
this.meta57576 = meta57576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57577,meta57576__$1){
var self__ = this;
var _57577__$1 = this;
return (new cljs.core.async.t_cljs$core$async57575(self__.f,self__.ch,self__.meta57573,self__._,self__.fn1,meta57576__$1));
}));

(cljs.core.async.t_cljs$core$async57575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57577){
var self__ = this;
var _57577__$1 = this;
return self__.meta57576;
}));

(cljs.core.async.t_cljs$core$async57575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57571_SHARP_){
var G__57578 = (((p1__57571_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57571_SHARP_) : self__.f.call(null,p1__57571_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__57578) : f1.call(null,G__57578));
});
}));

(cljs.core.async.t_cljs$core$async57575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57573","meta57573",-371721313,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57572","cljs.core.async/t_cljs$core$async57572",-1713750228,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57576","meta57576",1423036516,null)], null);
}));

(cljs.core.async.t_cljs$core$async57575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57575");

(cljs.core.async.t_cljs$core$async57575.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57575.
 */
cljs.core.async.__GT_t_cljs$core$async57575 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57575(f__$1,ch__$1,meta57573__$1,___$2,fn1__$1,meta57576){
return (new cljs.core.async.t_cljs$core$async57575(f__$1,ch__$1,meta57573__$1,___$2,fn1__$1,meta57576));
});

}

return (new cljs.core.async.t_cljs$core$async57575(self__.f,self__.ch,self__.meta57573,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__57579 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__57579) : self__.f.call(null,G__57579));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57572.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57573","meta57573",-371721313,null)], null);
}));

(cljs.core.async.t_cljs$core$async57572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57572");

(cljs.core.async.t_cljs$core$async57572.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57572.
 */
cljs.core.async.__GT_t_cljs$core$async57572 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57572(f__$1,ch__$1,meta57573){
return (new cljs.core.async.t_cljs$core$async57572(f__$1,ch__$1,meta57573));
});

}

return (new cljs.core.async.t_cljs$core$async57572(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57580 = (function (f,ch,meta57581){
this.f = f;
this.ch = ch;
this.meta57581 = meta57581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57582,meta57581__$1){
var self__ = this;
var _57582__$1 = this;
return (new cljs.core.async.t_cljs$core$async57580(self__.f,self__.ch,meta57581__$1));
}));

(cljs.core.async.t_cljs$core$async57580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57582){
var self__ = this;
var _57582__$1 = this;
return self__.meta57581;
}));

(cljs.core.async.t_cljs$core$async57580.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57580.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57580.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async57580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57581","meta57581",-1005388822,null)], null);
}));

(cljs.core.async.t_cljs$core$async57580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57580");

(cljs.core.async.t_cljs$core$async57580.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57580.
 */
cljs.core.async.__GT_t_cljs$core$async57580 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57580(f__$1,ch__$1,meta57581){
return (new cljs.core.async.t_cljs$core$async57580(f__$1,ch__$1,meta57581));
});

}

return (new cljs.core.async.t_cljs$core$async57580(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57583 = (function (p,ch,meta57584){
this.p = p;
this.ch = ch;
this.meta57584 = meta57584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57585,meta57584__$1){
var self__ = this;
var _57585__$1 = this;
return (new cljs.core.async.t_cljs$core$async57583(self__.p,self__.ch,meta57584__$1));
}));

(cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57585){
var self__ = this;
var _57585__$1 = this;
return self__.meta57584;
}));

(cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async57583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57584","meta57584",-435972011,null)], null);
}));

(cljs.core.async.t_cljs$core$async57583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57583");

(cljs.core.async.t_cljs$core$async57583.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57583.
 */
cljs.core.async.__GT_t_cljs$core$async57583 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57583(p__$1,ch__$1,meta57584){
return (new cljs.core.async.t_cljs$core$async57583(p__$1,ch__$1,meta57584));
});

}

return (new cljs.core.async.t_cljs$core$async57583(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__57587 = arguments.length;
switch (G__57587) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56383__auto___58563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57608){
var state_val_57609 = (state_57608[(1)]);
if((state_val_57609 === (7))){
var inst_57604 = (state_57608[(2)]);
var state_57608__$1 = state_57608;
var statearr_57610_58565 = state_57608__$1;
(statearr_57610_58565[(2)] = inst_57604);

(statearr_57610_58565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57609 === (1))){
var state_57608__$1 = state_57608;
var statearr_57611_58566 = state_57608__$1;
(statearr_57611_58566[(2)] = null);

(statearr_57611_58566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57609 === (4))){
var inst_57590 = (state_57608[(7)]);
var inst_57590__$1 = (state_57608[(2)]);
var inst_57591 = (inst_57590__$1 == null);
var state_57608__$1 = (function (){var statearr_57612 = state_57608;
(statearr_57612[(7)] = inst_57590__$1);

return statearr_57612;
})();
if(cljs.core.truth_(inst_57591)){
var statearr_57613_58568 = state_57608__$1;
(statearr_57613_58568[(1)] = (5));

} else {
var statearr_57614_58569 = state_57608__$1;
(statearr_57614_58569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57609 === (6))){
var inst_57590 = (state_57608[(7)]);
var inst_57595 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57590) : p.call(null,inst_57590));
var state_57608__$1 = state_57608;
if(cljs.core.truth_(inst_57595)){
var statearr_57615_58571 = state_57608__$1;
(statearr_57615_58571[(1)] = (8));

} else {
var statearr_57616_58572 = state_57608__$1;
(statearr_57616_58572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57609 === (3))){
var inst_57606 = (state_57608[(2)]);
var state_57608__$1 = state_57608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57608__$1,inst_57606);
} else {
if((state_val_57609 === (2))){
var state_57608__$1 = state_57608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57608__$1,(4),ch);
} else {
if((state_val_57609 === (11))){
var inst_57598 = (state_57608[(2)]);
var state_57608__$1 = state_57608;
var statearr_57617_58573 = state_57608__$1;
(statearr_57617_58573[(2)] = inst_57598);

(statearr_57617_58573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57609 === (9))){
var state_57608__$1 = state_57608;
var statearr_57618_58575 = state_57608__$1;
(statearr_57618_58575[(2)] = null);

(statearr_57618_58575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57609 === (5))){
var inst_57593 = cljs.core.async.close_BANG_(out);
var state_57608__$1 = state_57608;
var statearr_57619_58576 = state_57608__$1;
(statearr_57619_58576[(2)] = inst_57593);

(statearr_57619_58576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57609 === (10))){
var inst_57601 = (state_57608[(2)]);
var state_57608__$1 = (function (){var statearr_57620 = state_57608;
(statearr_57620[(8)] = inst_57601);

return statearr_57620;
})();
var statearr_57621_58577 = state_57608__$1;
(statearr_57621_58577[(2)] = null);

(statearr_57621_58577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57609 === (8))){
var inst_57590 = (state_57608[(7)]);
var state_57608__$1 = state_57608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57608__$1,(11),out,inst_57590);
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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_57622 = [null,null,null,null,null,null,null,null,null];
(statearr_57622[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_57622[(1)] = (1));

return statearr_57622;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_57608){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57608);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57623){var ex__56262__auto__ = e57623;
var statearr_57624_58579 = state_57608;
(statearr_57624_58579[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57608[(4)]))){
var statearr_57625_58580 = state_57608;
(statearr_57625_58580[(1)] = cljs.core.first((state_57608[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58581 = state_57608;
state_57608 = G__58581;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_57608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_57608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57626 = f__56384__auto__();
(statearr_57626[(6)] = c__56383__auto___58563);

return statearr_57626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57628 = arguments.length;
switch (G__57628) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__56383__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57690){
var state_val_57691 = (state_57690[(1)]);
if((state_val_57691 === (7))){
var inst_57686 = (state_57690[(2)]);
var state_57690__$1 = state_57690;
var statearr_57692_58592 = state_57690__$1;
(statearr_57692_58592[(2)] = inst_57686);

(statearr_57692_58592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (20))){
var inst_57656 = (state_57690[(7)]);
var inst_57667 = (state_57690[(2)]);
var inst_57668 = cljs.core.next(inst_57656);
var inst_57642 = inst_57668;
var inst_57643 = null;
var inst_57644 = (0);
var inst_57645 = (0);
var state_57690__$1 = (function (){var statearr_57693 = state_57690;
(statearr_57693[(8)] = inst_57643);

(statearr_57693[(9)] = inst_57642);

(statearr_57693[(10)] = inst_57667);

(statearr_57693[(11)] = inst_57645);

(statearr_57693[(12)] = inst_57644);

return statearr_57693;
})();
var statearr_57694_58598 = state_57690__$1;
(statearr_57694_58598[(2)] = null);

(statearr_57694_58598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (1))){
var state_57690__$1 = state_57690;
var statearr_57695_58600 = state_57690__$1;
(statearr_57695_58600[(2)] = null);

(statearr_57695_58600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (4))){
var inst_57631 = (state_57690[(13)]);
var inst_57631__$1 = (state_57690[(2)]);
var inst_57632 = (inst_57631__$1 == null);
var state_57690__$1 = (function (){var statearr_57696 = state_57690;
(statearr_57696[(13)] = inst_57631__$1);

return statearr_57696;
})();
if(cljs.core.truth_(inst_57632)){
var statearr_57697_58601 = state_57690__$1;
(statearr_57697_58601[(1)] = (5));

} else {
var statearr_57698_58602 = state_57690__$1;
(statearr_57698_58602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (15))){
var state_57690__$1 = state_57690;
var statearr_57702_58603 = state_57690__$1;
(statearr_57702_58603[(2)] = null);

(statearr_57702_58603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (21))){
var state_57690__$1 = state_57690;
var statearr_57703_58604 = state_57690__$1;
(statearr_57703_58604[(2)] = null);

(statearr_57703_58604[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (13))){
var inst_57643 = (state_57690[(8)]);
var inst_57642 = (state_57690[(9)]);
var inst_57645 = (state_57690[(11)]);
var inst_57644 = (state_57690[(12)]);
var inst_57652 = (state_57690[(2)]);
var inst_57653 = (inst_57645 + (1));
var tmp57699 = inst_57643;
var tmp57700 = inst_57642;
var tmp57701 = inst_57644;
var inst_57642__$1 = tmp57700;
var inst_57643__$1 = tmp57699;
var inst_57644__$1 = tmp57701;
var inst_57645__$1 = inst_57653;
var state_57690__$1 = (function (){var statearr_57704 = state_57690;
(statearr_57704[(8)] = inst_57643__$1);

(statearr_57704[(14)] = inst_57652);

(statearr_57704[(9)] = inst_57642__$1);

(statearr_57704[(11)] = inst_57645__$1);

(statearr_57704[(12)] = inst_57644__$1);

return statearr_57704;
})();
var statearr_57705_58611 = state_57690__$1;
(statearr_57705_58611[(2)] = null);

(statearr_57705_58611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (22))){
var state_57690__$1 = state_57690;
var statearr_57706_58616 = state_57690__$1;
(statearr_57706_58616[(2)] = null);

(statearr_57706_58616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (6))){
var inst_57631 = (state_57690[(13)]);
var inst_57640 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57631) : f.call(null,inst_57631));
var inst_57641 = cljs.core.seq(inst_57640);
var inst_57642 = inst_57641;
var inst_57643 = null;
var inst_57644 = (0);
var inst_57645 = (0);
var state_57690__$1 = (function (){var statearr_57707 = state_57690;
(statearr_57707[(8)] = inst_57643);

(statearr_57707[(9)] = inst_57642);

(statearr_57707[(11)] = inst_57645);

(statearr_57707[(12)] = inst_57644);

return statearr_57707;
})();
var statearr_57708_58621 = state_57690__$1;
(statearr_57708_58621[(2)] = null);

(statearr_57708_58621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (17))){
var inst_57656 = (state_57690[(7)]);
var inst_57660 = cljs.core.chunk_first(inst_57656);
var inst_57661 = cljs.core.chunk_rest(inst_57656);
var inst_57662 = cljs.core.count(inst_57660);
var inst_57642 = inst_57661;
var inst_57643 = inst_57660;
var inst_57644 = inst_57662;
var inst_57645 = (0);
var state_57690__$1 = (function (){var statearr_57709 = state_57690;
(statearr_57709[(8)] = inst_57643);

(statearr_57709[(9)] = inst_57642);

(statearr_57709[(11)] = inst_57645);

(statearr_57709[(12)] = inst_57644);

return statearr_57709;
})();
var statearr_57710_58630 = state_57690__$1;
(statearr_57710_58630[(2)] = null);

(statearr_57710_58630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (3))){
var inst_57688 = (state_57690[(2)]);
var state_57690__$1 = state_57690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57690__$1,inst_57688);
} else {
if((state_val_57691 === (12))){
var inst_57676 = (state_57690[(2)]);
var state_57690__$1 = state_57690;
var statearr_57711_58635 = state_57690__$1;
(statearr_57711_58635[(2)] = inst_57676);

(statearr_57711_58635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (2))){
var state_57690__$1 = state_57690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57690__$1,(4),in$);
} else {
if((state_val_57691 === (23))){
var inst_57684 = (state_57690[(2)]);
var state_57690__$1 = state_57690;
var statearr_57712_58639 = state_57690__$1;
(statearr_57712_58639[(2)] = inst_57684);

(statearr_57712_58639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (19))){
var inst_57671 = (state_57690[(2)]);
var state_57690__$1 = state_57690;
var statearr_57713_58640 = state_57690__$1;
(statearr_57713_58640[(2)] = inst_57671);

(statearr_57713_58640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (11))){
var inst_57656 = (state_57690[(7)]);
var inst_57642 = (state_57690[(9)]);
var inst_57656__$1 = cljs.core.seq(inst_57642);
var state_57690__$1 = (function (){var statearr_57714 = state_57690;
(statearr_57714[(7)] = inst_57656__$1);

return statearr_57714;
})();
if(inst_57656__$1){
var statearr_57715_58641 = state_57690__$1;
(statearr_57715_58641[(1)] = (14));

} else {
var statearr_57716_58642 = state_57690__$1;
(statearr_57716_58642[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (9))){
var inst_57678 = (state_57690[(2)]);
var inst_57679 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_57690__$1 = (function (){var statearr_57717 = state_57690;
(statearr_57717[(15)] = inst_57678);

return statearr_57717;
})();
if(cljs.core.truth_(inst_57679)){
var statearr_57718_58645 = state_57690__$1;
(statearr_57718_58645[(1)] = (21));

} else {
var statearr_57719_58646 = state_57690__$1;
(statearr_57719_58646[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (5))){
var inst_57634 = cljs.core.async.close_BANG_(out);
var state_57690__$1 = state_57690;
var statearr_57720_58648 = state_57690__$1;
(statearr_57720_58648[(2)] = inst_57634);

(statearr_57720_58648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (14))){
var inst_57656 = (state_57690[(7)]);
var inst_57658 = cljs.core.chunked_seq_QMARK_(inst_57656);
var state_57690__$1 = state_57690;
if(inst_57658){
var statearr_57721_58649 = state_57690__$1;
(statearr_57721_58649[(1)] = (17));

} else {
var statearr_57722_58650 = state_57690__$1;
(statearr_57722_58650[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (16))){
var inst_57674 = (state_57690[(2)]);
var state_57690__$1 = state_57690;
var statearr_57723_58651 = state_57690__$1;
(statearr_57723_58651[(2)] = inst_57674);

(statearr_57723_58651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57691 === (10))){
var inst_57643 = (state_57690[(8)]);
var inst_57645 = (state_57690[(11)]);
var inst_57650 = cljs.core._nth(inst_57643,inst_57645);
var state_57690__$1 = state_57690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57690__$1,(13),out,inst_57650);
} else {
if((state_val_57691 === (18))){
var inst_57656 = (state_57690[(7)]);
var inst_57665 = cljs.core.first(inst_57656);
var state_57690__$1 = state_57690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57690__$1,(20),out,inst_57665);
} else {
if((state_val_57691 === (8))){
var inst_57645 = (state_57690[(11)]);
var inst_57644 = (state_57690[(12)]);
var inst_57647 = (inst_57645 < inst_57644);
var inst_57648 = inst_57647;
var state_57690__$1 = state_57690;
if(cljs.core.truth_(inst_57648)){
var statearr_57724_58654 = state_57690__$1;
(statearr_57724_58654[(1)] = (10));

} else {
var statearr_57725_58655 = state_57690__$1;
(statearr_57725_58655[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__56259__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__56259__auto____0 = (function (){
var statearr_57726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57726[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__56259__auto__);

(statearr_57726[(1)] = (1));

return statearr_57726;
});
var cljs$core$async$mapcat_STAR__$_state_machine__56259__auto____1 = (function (state_57690){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57690);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57727){var ex__56262__auto__ = e57727;
var statearr_57728_58656 = state_57690;
(statearr_57728_58656[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57690[(4)]))){
var statearr_57729_58657 = state_57690;
(statearr_57729_58657[(1)] = cljs.core.first((state_57690[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58658 = state_57690;
state_57690 = G__58658;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__56259__auto__ = function(state_57690){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__56259__auto____1.call(this,state_57690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__56259__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__56259__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57730 = f__56384__auto__();
(statearr_57730[(6)] = c__56383__auto__);

return statearr_57730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));

return c__56383__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57732 = arguments.length;
switch (G__57732) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__57734 = arguments.length;
switch (G__57734) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__57736 = arguments.length;
switch (G__57736) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56383__auto___58664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57760){
var state_val_57761 = (state_57760[(1)]);
if((state_val_57761 === (7))){
var inst_57755 = (state_57760[(2)]);
var state_57760__$1 = state_57760;
var statearr_57762_58672 = state_57760__$1;
(statearr_57762_58672[(2)] = inst_57755);

(statearr_57762_58672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57761 === (1))){
var inst_57737 = null;
var state_57760__$1 = (function (){var statearr_57763 = state_57760;
(statearr_57763[(7)] = inst_57737);

return statearr_57763;
})();
var statearr_57764_58679 = state_57760__$1;
(statearr_57764_58679[(2)] = null);

(statearr_57764_58679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57761 === (4))){
var inst_57740 = (state_57760[(8)]);
var inst_57740__$1 = (state_57760[(2)]);
var inst_57741 = (inst_57740__$1 == null);
var inst_57742 = cljs.core.not(inst_57741);
var state_57760__$1 = (function (){var statearr_57765 = state_57760;
(statearr_57765[(8)] = inst_57740__$1);

return statearr_57765;
})();
if(inst_57742){
var statearr_57766_58690 = state_57760__$1;
(statearr_57766_58690[(1)] = (5));

} else {
var statearr_57767_58696 = state_57760__$1;
(statearr_57767_58696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57761 === (6))){
var state_57760__$1 = state_57760;
var statearr_57768_58698 = state_57760__$1;
(statearr_57768_58698[(2)] = null);

(statearr_57768_58698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57761 === (3))){
var inst_57757 = (state_57760[(2)]);
var inst_57758 = cljs.core.async.close_BANG_(out);
var state_57760__$1 = (function (){var statearr_57769 = state_57760;
(statearr_57769[(9)] = inst_57757);

return statearr_57769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57760__$1,inst_57758);
} else {
if((state_val_57761 === (2))){
var state_57760__$1 = state_57760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57760__$1,(4),ch);
} else {
if((state_val_57761 === (11))){
var inst_57740 = (state_57760[(8)]);
var inst_57749 = (state_57760[(2)]);
var inst_57737 = inst_57740;
var state_57760__$1 = (function (){var statearr_57770 = state_57760;
(statearr_57770[(7)] = inst_57737);

(statearr_57770[(10)] = inst_57749);

return statearr_57770;
})();
var statearr_57771_58719 = state_57760__$1;
(statearr_57771_58719[(2)] = null);

(statearr_57771_58719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57761 === (9))){
var inst_57740 = (state_57760[(8)]);
var state_57760__$1 = state_57760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57760__$1,(11),out,inst_57740);
} else {
if((state_val_57761 === (5))){
var inst_57737 = (state_57760[(7)]);
var inst_57740 = (state_57760[(8)]);
var inst_57744 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57740,inst_57737);
var state_57760__$1 = state_57760;
if(inst_57744){
var statearr_57773_58731 = state_57760__$1;
(statearr_57773_58731[(1)] = (8));

} else {
var statearr_57774_58736 = state_57760__$1;
(statearr_57774_58736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57761 === (10))){
var inst_57752 = (state_57760[(2)]);
var state_57760__$1 = state_57760;
var statearr_57775_58739 = state_57760__$1;
(statearr_57775_58739[(2)] = inst_57752);

(statearr_57775_58739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57761 === (8))){
var inst_57737 = (state_57760[(7)]);
var tmp57772 = inst_57737;
var inst_57737__$1 = tmp57772;
var state_57760__$1 = (function (){var statearr_57776 = state_57760;
(statearr_57776[(7)] = inst_57737__$1);

return statearr_57776;
})();
var statearr_57777_58753 = state_57760__$1;
(statearr_57777_58753[(2)] = null);

(statearr_57777_58753[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_57778 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57778[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_57778[(1)] = (1));

return statearr_57778;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_57760){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57760);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57779){var ex__56262__auto__ = e57779;
var statearr_57780_58762 = state_57760;
(statearr_57780_58762[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57760[(4)]))){
var statearr_57781_58764 = state_57760;
(statearr_57781_58764[(1)] = cljs.core.first((state_57760[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58765 = state_57760;
state_57760 = G__58765;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_57760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_57760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57782 = f__56384__auto__();
(statearr_57782[(6)] = c__56383__auto___58664);

return statearr_57782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57784 = arguments.length;
switch (G__57784) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56383__auto___58773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57822){
var state_val_57823 = (state_57822[(1)]);
if((state_val_57823 === (7))){
var inst_57818 = (state_57822[(2)]);
var state_57822__$1 = state_57822;
var statearr_57824_58778 = state_57822__$1;
(statearr_57824_58778[(2)] = inst_57818);

(statearr_57824_58778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (1))){
var inst_57785 = (new Array(n));
var inst_57786 = inst_57785;
var inst_57787 = (0);
var state_57822__$1 = (function (){var statearr_57825 = state_57822;
(statearr_57825[(7)] = inst_57787);

(statearr_57825[(8)] = inst_57786);

return statearr_57825;
})();
var statearr_57826_58783 = state_57822__$1;
(statearr_57826_58783[(2)] = null);

(statearr_57826_58783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (4))){
var inst_57790 = (state_57822[(9)]);
var inst_57790__$1 = (state_57822[(2)]);
var inst_57791 = (inst_57790__$1 == null);
var inst_57792 = cljs.core.not(inst_57791);
var state_57822__$1 = (function (){var statearr_57827 = state_57822;
(statearr_57827[(9)] = inst_57790__$1);

return statearr_57827;
})();
if(inst_57792){
var statearr_57828_58785 = state_57822__$1;
(statearr_57828_58785[(1)] = (5));

} else {
var statearr_57829_58786 = state_57822__$1;
(statearr_57829_58786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (15))){
var inst_57812 = (state_57822[(2)]);
var state_57822__$1 = state_57822;
var statearr_57830_58787 = state_57822__$1;
(statearr_57830_58787[(2)] = inst_57812);

(statearr_57830_58787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (13))){
var state_57822__$1 = state_57822;
var statearr_57831_58789 = state_57822__$1;
(statearr_57831_58789[(2)] = null);

(statearr_57831_58789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (6))){
var inst_57787 = (state_57822[(7)]);
var inst_57808 = (inst_57787 > (0));
var state_57822__$1 = state_57822;
if(cljs.core.truth_(inst_57808)){
var statearr_57832_58790 = state_57822__$1;
(statearr_57832_58790[(1)] = (12));

} else {
var statearr_57833_58791 = state_57822__$1;
(statearr_57833_58791[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (3))){
var inst_57820 = (state_57822[(2)]);
var state_57822__$1 = state_57822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57822__$1,inst_57820);
} else {
if((state_val_57823 === (12))){
var inst_57786 = (state_57822[(8)]);
var inst_57810 = cljs.core.vec(inst_57786);
var state_57822__$1 = state_57822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57822__$1,(15),out,inst_57810);
} else {
if((state_val_57823 === (2))){
var state_57822__$1 = state_57822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57822__$1,(4),ch);
} else {
if((state_val_57823 === (11))){
var inst_57802 = (state_57822[(2)]);
var inst_57803 = (new Array(n));
var inst_57786 = inst_57803;
var inst_57787 = (0);
var state_57822__$1 = (function (){var statearr_57834 = state_57822;
(statearr_57834[(7)] = inst_57787);

(statearr_57834[(8)] = inst_57786);

(statearr_57834[(10)] = inst_57802);

return statearr_57834;
})();
var statearr_57835_58796 = state_57822__$1;
(statearr_57835_58796[(2)] = null);

(statearr_57835_58796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (9))){
var inst_57786 = (state_57822[(8)]);
var inst_57800 = cljs.core.vec(inst_57786);
var state_57822__$1 = state_57822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57822__$1,(11),out,inst_57800);
} else {
if((state_val_57823 === (5))){
var inst_57790 = (state_57822[(9)]);
var inst_57795 = (state_57822[(11)]);
var inst_57787 = (state_57822[(7)]);
var inst_57786 = (state_57822[(8)]);
var inst_57794 = (inst_57786[inst_57787] = inst_57790);
var inst_57795__$1 = (inst_57787 + (1));
var inst_57796 = (inst_57795__$1 < n);
var state_57822__$1 = (function (){var statearr_57836 = state_57822;
(statearr_57836[(11)] = inst_57795__$1);

(statearr_57836[(12)] = inst_57794);

return statearr_57836;
})();
if(cljs.core.truth_(inst_57796)){
var statearr_57837_58797 = state_57822__$1;
(statearr_57837_58797[(1)] = (8));

} else {
var statearr_57838_58798 = state_57822__$1;
(statearr_57838_58798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (14))){
var inst_57815 = (state_57822[(2)]);
var inst_57816 = cljs.core.async.close_BANG_(out);
var state_57822__$1 = (function (){var statearr_57840 = state_57822;
(statearr_57840[(13)] = inst_57815);

return statearr_57840;
})();
var statearr_57841_58806 = state_57822__$1;
(statearr_57841_58806[(2)] = inst_57816);

(statearr_57841_58806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (10))){
var inst_57806 = (state_57822[(2)]);
var state_57822__$1 = state_57822;
var statearr_57842_58811 = state_57822__$1;
(statearr_57842_58811[(2)] = inst_57806);

(statearr_57842_58811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57823 === (8))){
var inst_57795 = (state_57822[(11)]);
var inst_57786 = (state_57822[(8)]);
var tmp57839 = inst_57786;
var inst_57786__$1 = tmp57839;
var inst_57787 = inst_57795;
var state_57822__$1 = (function (){var statearr_57843 = state_57822;
(statearr_57843[(7)] = inst_57787);

(statearr_57843[(8)] = inst_57786__$1);

return statearr_57843;
})();
var statearr_57844_58819 = state_57822__$1;
(statearr_57844_58819[(2)] = null);

(statearr_57844_58819[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_57845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57845[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_57845[(1)] = (1));

return statearr_57845;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_57822){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57822);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57846){var ex__56262__auto__ = e57846;
var statearr_57847_58830 = state_57822;
(statearr_57847_58830[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57822[(4)]))){
var statearr_57848_58831 = state_57822;
(statearr_57848_58831[(1)] = cljs.core.first((state_57822[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58836 = state_57822;
state_57822 = G__58836;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_57822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_57822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57849 = f__56384__auto__();
(statearr_57849[(6)] = c__56383__auto___58773);

return statearr_57849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57851 = arguments.length;
switch (G__57851) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56383__auto___58859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56384__auto__ = (function (){var switch__56258__auto__ = (function (state_57893){
var state_val_57894 = (state_57893[(1)]);
if((state_val_57894 === (7))){
var inst_57889 = (state_57893[(2)]);
var state_57893__$1 = state_57893;
var statearr_57895_58860 = state_57893__$1;
(statearr_57895_58860[(2)] = inst_57889);

(statearr_57895_58860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (1))){
var inst_57852 = [];
var inst_57853 = inst_57852;
var inst_57854 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57893__$1 = (function (){var statearr_57896 = state_57893;
(statearr_57896[(7)] = inst_57854);

(statearr_57896[(8)] = inst_57853);

return statearr_57896;
})();
var statearr_57897_58861 = state_57893__$1;
(statearr_57897_58861[(2)] = null);

(statearr_57897_58861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (4))){
var inst_57857 = (state_57893[(9)]);
var inst_57857__$1 = (state_57893[(2)]);
var inst_57858 = (inst_57857__$1 == null);
var inst_57859 = cljs.core.not(inst_57858);
var state_57893__$1 = (function (){var statearr_57898 = state_57893;
(statearr_57898[(9)] = inst_57857__$1);

return statearr_57898;
})();
if(inst_57859){
var statearr_57899_58863 = state_57893__$1;
(statearr_57899_58863[(1)] = (5));

} else {
var statearr_57900_58864 = state_57893__$1;
(statearr_57900_58864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (15))){
var inst_57883 = (state_57893[(2)]);
var state_57893__$1 = state_57893;
var statearr_57901_58865 = state_57893__$1;
(statearr_57901_58865[(2)] = inst_57883);

(statearr_57901_58865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (13))){
var state_57893__$1 = state_57893;
var statearr_57902_58866 = state_57893__$1;
(statearr_57902_58866[(2)] = null);

(statearr_57902_58866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (6))){
var inst_57853 = (state_57893[(8)]);
var inst_57878 = inst_57853.length;
var inst_57879 = (inst_57878 > (0));
var state_57893__$1 = state_57893;
if(cljs.core.truth_(inst_57879)){
var statearr_57903_58871 = state_57893__$1;
(statearr_57903_58871[(1)] = (12));

} else {
var statearr_57904_58872 = state_57893__$1;
(statearr_57904_58872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (3))){
var inst_57891 = (state_57893[(2)]);
var state_57893__$1 = state_57893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57893__$1,inst_57891);
} else {
if((state_val_57894 === (12))){
var inst_57853 = (state_57893[(8)]);
var inst_57881 = cljs.core.vec(inst_57853);
var state_57893__$1 = state_57893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57893__$1,(15),out,inst_57881);
} else {
if((state_val_57894 === (2))){
var state_57893__$1 = state_57893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57893__$1,(4),ch);
} else {
if((state_val_57894 === (11))){
var inst_57857 = (state_57893[(9)]);
var inst_57861 = (state_57893[(10)]);
var inst_57871 = (state_57893[(2)]);
var inst_57872 = [];
var inst_57873 = inst_57872.push(inst_57857);
var inst_57853 = inst_57872;
var inst_57854 = inst_57861;
var state_57893__$1 = (function (){var statearr_57905 = state_57893;
(statearr_57905[(11)] = inst_57871);

(statearr_57905[(7)] = inst_57854);

(statearr_57905[(12)] = inst_57873);

(statearr_57905[(8)] = inst_57853);

return statearr_57905;
})();
var statearr_57906_58881 = state_57893__$1;
(statearr_57906_58881[(2)] = null);

(statearr_57906_58881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (9))){
var inst_57853 = (state_57893[(8)]);
var inst_57869 = cljs.core.vec(inst_57853);
var state_57893__$1 = state_57893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57893__$1,(11),out,inst_57869);
} else {
if((state_val_57894 === (5))){
var inst_57854 = (state_57893[(7)]);
var inst_57857 = (state_57893[(9)]);
var inst_57861 = (state_57893[(10)]);
var inst_57861__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57857) : f.call(null,inst_57857));
var inst_57862 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57861__$1,inst_57854);
var inst_57863 = cljs.core.keyword_identical_QMARK_(inst_57854,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_57864 = ((inst_57862) || (inst_57863));
var state_57893__$1 = (function (){var statearr_57907 = state_57893;
(statearr_57907[(10)] = inst_57861__$1);

return statearr_57907;
})();
if(cljs.core.truth_(inst_57864)){
var statearr_57908_58886 = state_57893__$1;
(statearr_57908_58886[(1)] = (8));

} else {
var statearr_57909_58889 = state_57893__$1;
(statearr_57909_58889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (14))){
var inst_57886 = (state_57893[(2)]);
var inst_57887 = cljs.core.async.close_BANG_(out);
var state_57893__$1 = (function (){var statearr_57911 = state_57893;
(statearr_57911[(13)] = inst_57886);

return statearr_57911;
})();
var statearr_57912_58892 = state_57893__$1;
(statearr_57912_58892[(2)] = inst_57887);

(statearr_57912_58892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (10))){
var inst_57876 = (state_57893[(2)]);
var state_57893__$1 = state_57893;
var statearr_57913_58893 = state_57893__$1;
(statearr_57913_58893[(2)] = inst_57876);

(statearr_57913_58893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57894 === (8))){
var inst_57857 = (state_57893[(9)]);
var inst_57861 = (state_57893[(10)]);
var inst_57853 = (state_57893[(8)]);
var inst_57866 = inst_57853.push(inst_57857);
var tmp57910 = inst_57853;
var inst_57853__$1 = tmp57910;
var inst_57854 = inst_57861;
var state_57893__$1 = (function (){var statearr_57914 = state_57893;
(statearr_57914[(7)] = inst_57854);

(statearr_57914[(14)] = inst_57866);

(statearr_57914[(8)] = inst_57853__$1);

return statearr_57914;
})();
var statearr_57915_58894 = state_57893__$1;
(statearr_57915_58894[(2)] = null);

(statearr_57915_58894[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__56259__auto__ = null;
var cljs$core$async$state_machine__56259__auto____0 = (function (){
var statearr_57916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57916[(0)] = cljs$core$async$state_machine__56259__auto__);

(statearr_57916[(1)] = (1));

return statearr_57916;
});
var cljs$core$async$state_machine__56259__auto____1 = (function (state_57893){
while(true){
var ret_value__56260__auto__ = (function (){try{while(true){
var result__56261__auto__ = switch__56258__auto__(state_57893);
if(cljs.core.keyword_identical_QMARK_(result__56261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56261__auto__;
}
break;
}
}catch (e57917){var ex__56262__auto__ = e57917;
var statearr_57918_58895 = state_57893;
(statearr_57918_58895[(2)] = ex__56262__auto__);


if(cljs.core.seq((state_57893[(4)]))){
var statearr_57919_58896 = state_57893;
(statearr_57919_58896[(1)] = cljs.core.first((state_57893[(4)])));

} else {
throw ex__56262__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58897 = state_57893;
state_57893 = G__58897;
continue;
} else {
return ret_value__56260__auto__;
}
break;
}
});
cljs$core$async$state_machine__56259__auto__ = function(state_57893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56259__auto____1.call(this,state_57893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56259__auto____0;
cljs$core$async$state_machine__56259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56259__auto____1;
return cljs$core$async$state_machine__56259__auto__;
})()
})();
var state__56385__auto__ = (function (){var statearr_57920 = f__56384__auto__();
(statearr_57920[(6)] = c__56383__auto___58859);

return statearr_57920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56385__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

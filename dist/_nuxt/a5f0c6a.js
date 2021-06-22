(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1797:function(r,t,n){var e;n(100),n(1415),n(1418),n(1419),n(1420),n(1421),n(96),n(274),n(1422),n(1424),(e=window).tracking=e.tracking||{},tracking.inherits=function(r,t){function n(){}n.prototype=t.prototype,r.superClass_=t.prototype,r.prototype=new n,r.prototype.constructor=r,r.base=function(r,n){var e=Array.prototype.slice.call(arguments,2);return t.prototype[n].apply(r,e)}},tracking.initUserMedia_=function(r,t){e.navigator.mediaDevices.getUserMedia({video:!0,audio:!(!t||!t.audio)}).then((function(t){r.srcObject=t})).catch((function(r){throw Error("Cannot capture user camera.")}))},tracking.isNode=function(r){return r.nodeType||this.isWindow(r)},tracking.isWindow=function(r){return!!(r&&r.alert&&r.document)},tracking.one=function(r,t){return this.isNode(r)?r:(t||document).querySelector(r)},tracking.track=function(r,t,n){if(!(r=tracking.one(r)))throw new Error("Element not found, try a different element or selector.");if(!t)throw new Error("Tracker not specified, try `tracking.track(element, new tracking.FaceTracker())`.");switch(r.nodeName.toLowerCase()){case"canvas":return this.trackCanvas_(r,t,n);case"img":return this.trackImg_(r,t,n);case"video":return n&&n.camera&&this.initUserMedia_(r,n),this.trackVideo_(r,t,n);default:throw new Error("Element not supported, try in a canvas, img, or video.")}},tracking.trackCanvas_=function(r,t){var n=this,e=new tracking.TrackerTask(t);return e.on("run",(function(){n.trackCanvasInternal_(r,t)})),e.run()},tracking.trackCanvasInternal_=function(r,t){var n=r.width,e=r.height,i=r.getContext("2d").getImageData(0,0,n,e);t.track(i.data,n,e)},tracking.trackImg_=function(r,t){var n=r.width,e=r.height,a=document.createElement("canvas");a.width=n,a.height=e;var i=new tracking.TrackerTask(t);return i.on("run",(function(){tracking.Canvas.loadImage(a,r.src,0,0,n,e,(function(){tracking.trackCanvasInternal_(a,t)}))})),i.run()},tracking.trackVideo_=function(r,t){var n,a,i=document.createElement("canvas"),o=i.getContext("2d"),c=function(){n=r.offsetWidth,a=r.offsetHeight,i.width=n,i.height=a};c(),r.addEventListener("resize",c);var s,g=function g(){s=e.requestAnimationFrame((function(){if(r.readyState===r.HAVE_ENOUGH_DATA){try{o.drawImage(r,0,0,n,a)}catch(r){}tracking.trackCanvasInternal_(i,t)}g()}))},h=new tracking.TrackerTask(t);return h.on("stop",(function(){e.cancelAnimationFrame(s)})),h.on("run",(function(){g()})),h.run()},e.URL||(e.URL=e.URL||e.webkitURL||e.msURL||e.oURL),navigator.getUserMedia||(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia),tracking.EventEmitter=function(){},tracking.EventEmitter.prototype.events_=null,tracking.EventEmitter.prototype.addListener=function(r,t){if("function"!=typeof t)throw new TypeError("Listener must be a function");return this.events_||(this.events_={}),this.emit("newListener",r,t),this.events_[r]||(this.events_[r]=[]),this.events_[r].push(t),this},tracking.EventEmitter.prototype.listeners=function(r){return this.events_&&this.events_[r]},tracking.EventEmitter.prototype.emit=function(r){var t=this.listeners(r);if(t){for(var n=Array.prototype.slice.call(arguments,1),e=0;e<t.length;e++)t[e]&&t[e].apply(this,n);return!0}return!1},tracking.EventEmitter.prototype.on=tracking.EventEmitter.prototype.addListener,tracking.EventEmitter.prototype.once=function(r,t){var n=this;n.on(r,(function e(){n.removeListener(r,e),t.apply(this,arguments)}))},tracking.EventEmitter.prototype.removeAllListeners=function(r){return this.events_?(r?delete this.events_[r]:delete this.events_,this):this},tracking.EventEmitter.prototype.removeListener=function(r,t){if("function"!=typeof t)throw new TypeError("Listener must be a function");if(!this.events_)return this;var n=this.listeners(r);if(Array.isArray(n)){var e=n.indexOf(t);if(e<0)return this;n.splice(e,1)}return this},tracking.EventEmitter.prototype.setMaxListeners=function(){throw new Error("Not implemented")},tracking.Canvas={},tracking.Canvas.loadImage=function(r,t,n,e,a,i,o){var c=this,s=new window.Image;s.crossOrigin="*",s.onload=function(){var t=r.getContext("2d");r.width=a,r.height=i,t.drawImage(s,n,e,a,i),o&&o.call(c),s=null},s.src=t},tracking.DisjointSet=function(r){if(void 0===r)throw new Error("DisjointSet length not specified.");this.length=r,this.parent=new Uint32Array(r);for(var t=0;t<r;t++)this.parent[t]=t},tracking.DisjointSet.prototype.length=null,tracking.DisjointSet.prototype.parent=null,tracking.DisjointSet.prototype.find=function(r){return this.parent[r]===r?r:this.parent[r]=this.find(this.parent[r])},tracking.DisjointSet.prototype.union=function(r,t){var n=this.find(r),e=this.find(t);this.parent[n]=e},tracking.Image={},tracking.Image.blur=function(r,t,n,e){if((e=Math.abs(e))<=1)throw new Error("Diameter should be greater than 1.");for(var a=e/2,i=Math.ceil(e)+(1-Math.ceil(e)%2),o=new Float32Array(i),c=(a+.5)/3,s=c*c,g=1/Math.sqrt(2*Math.PI*s),h=-1/(2*c*c),k=0,l=Math.floor(i/2),u=0;u<i;u++){var f=u-l,m=g*Math.exp(f*f*h);o[u]=m,k+=m}for(var d=0;d<o.length;d++)o[d]/=k;return this.separableConvolve(r,t,n,o,o,!1)},tracking.Image.computeIntegralImage=function(r,t,n,e,a,i,o){if(arguments.length<4)throw new Error("You should specify at least one output array in the order: sum, square, tilted, sobel.");var c;o&&(c=tracking.Image.sobel(r,t,n));for(var s=0;s<n;s++)for(var g=0;g<t;g++){var h=s*t*4+4*g,k=~~(.299*r[h]+.587*r[h+1]+.114*r[h+2]);if(e&&this.computePixelValueSAT_(e,t,s,g,k),a&&this.computePixelValueSAT_(a,t,s,g,k*k),i){var l=h-4*t,u=~~(.299*r[l]+.587*r[l+1]+.114*r[l+2]);this.computePixelValueRSAT_(i,t,s,g,k,u||0)}o&&this.computePixelValueSAT_(o,t,s,g,c[h])}},tracking.Image.computePixelValueRSAT_=function(r,t,n,e,a,i){var o=n*t+e;r[o]=(r[o-t-1]||0)+(r[o-t+1]||0)-(r[o-t-t]||0)+a+i},tracking.Image.computePixelValueSAT_=function(r,t,n,e,a){var i=n*t+e;r[i]=(r[i-t]||0)+(r[i-1]||0)+a-(r[i-t-1]||0)},tracking.Image.grayscale=function(r,t,n,e){for(var a=new Uint8ClampedArray(e?r.length:r.length>>2),i=0,o=0,c=0;c<n;c++)for(var s=0;s<t;s++){var g=.299*r[o]+.587*r[o+1]+.114*r[o+2];a[i++]=g,e&&(a[i++]=g,a[i++]=g,a[i++]=r[o+3]),o+=4}return a},tracking.Image.horizontalConvolve=function(r,t,n,e,a){for(var i=e.length,o=Math.floor(i/2),c=new Float32Array(t*n*4),s=a?1:0,g=0;g<n;g++)for(var h=0;h<t;h++){for(var k=g,l=h,u=4*(g*t+h),f=0,m=0,d=0,v=0,p=0;p<i;p++){var y=4*(k*t+Math.min(t-1,Math.max(0,l+p-o))),w=e[p];f+=r[y]*w,m+=r[y+1]*w,d+=r[y+2]*w,v+=r[y+3]*w}c[u]=f,c[u+1]=m,c[u+2]=d,c[u+3]=v+s*(255-v)}return c},tracking.Image.verticalConvolve=function(r,t,n,e,a){for(var i=e.length,o=Math.floor(i/2),c=new Float32Array(t*n*4),s=a?1:0,g=0;g<n;g++)for(var h=0;h<t;h++){for(var k=g,l=h,u=4*(g*t+h),f=0,m=0,d=0,v=0,p=0;p<i;p++){var y=4*(Math.min(n-1,Math.max(0,k+p-o))*t+l),w=e[p];f+=r[y]*w,m+=r[y+1]*w,d+=r[y+2]*w,v+=r[y+3]*w}c[u]=f,c[u+1]=m,c[u+2]=d,c[u+3]=v+s*(255-v)}return c},tracking.Image.separableConvolve=function(r,t,n,e,a,i){var o=this.verticalConvolve(r,t,n,a,i);return this.horizontalConvolve(o,t,n,e,i)},tracking.Image.sobel=function(r,t,n){r=this.grayscale(r,t,n,!0);for(var e=new Float32Array(t*n*4),a=new Float32Array([-1,0,1]),i=new Float32Array([1,2,1]),o=this.separableConvolve(r,t,n,a,i),c=this.separableConvolve(r,t,n,i,a),s=0;s<e.length;s+=4){var g=o[s],h=c[s],k=Math.sqrt(h*h+g*g);e[s]=k,e[s+1]=k,e[s+2]=k,e[s+3]=255}return e},tracking.Image.equalizeHist=function(r,t,n){for(var e=new Uint8ClampedArray(r.length),a=new Array(256),i=0;i<256;i++)a[i]=0;for(i=0;i<r.length;i++)e[i]=r[i],a[r[i]]++;var o=a[0];for(i=0;i<256;i++)a[i]+=o,o=a[i];var c=255/r.length;for(i=0;i<r.length;i++)e[i]=a[r[i]]*c+.5|0;return e},tracking.ViolaJones={},tracking.ViolaJones.REGIONS_OVERLAP=.5,tracking.ViolaJones.classifiers={},tracking.ViolaJones.detect=function(r,t,n,e,a,i,o,c){var s,g=0,h=[],k=new Int32Array(t*n),l=new Int32Array(t*n),u=new Int32Array(t*n);o>0&&(s=new Int32Array(t*n)),tracking.Image.computeIntegralImage(r,t,n,k,l,u,s);for(var f=c[0],m=c[1],d=e*a,v=d*f|0,p=d*m|0;v<t&&p<n;){for(var y=d*i+.5|0,w=0;w<n-p;w+=y)for(var T=0;T<t-v;T+=y)o>0&&this.isTriviallyExcluded(o,s,w,T,t,v,p)||this.evalStages_(c,k,l,u,w,T,t,v,p,d)&&(h[g++]={width:v,height:p,x:T,y:w});v=(d*=a)*f|0,p=d*m|0}return this.mergeRectangles_(h)},tracking.ViolaJones.isTriviallyExcluded=function(r,t,n,e,a,i,o){var c=n*a+e,s=c+i,g=c+o*a,h=g+i;return(t[c]-t[s]-t[g]+t[h])/(i*o*255)<r},tracking.ViolaJones.evalStages_=function(r,t,n,e,a,i,o,c,s,g){var h=1/(c*s),k=a*o+i,l=k+c,u=k+s*o,f=u+c,m=(t[k]-t[l]-t[u]+t[f])*h,d=(n[k]-n[l]-n[u]+n[f])*h-m*m,v=1;d>0&&(v=Math.sqrt(d));for(var p=r.length,y=2;y<p;){for(var w=0,T=r[y++],x=r[y++];x--;){for(var M=0,_=r[y++],C=r[y++],E=0;E<C;E++){var F,B,L,S,A=i+r[y++]*g+.5|0,I=a+r[y++]*g+.5|0,R=r[y++]*g+.5|0,b=r[y++]*g+.5|0,D=r[y++];_?(B=A+(I-1)*o,L=A-b+(I+b-1)*o,S=A+R+(I+R-1)*o,M+=(e[F=A-b+R+(I+R+b-1)*o]+e[B]-e[L]-e[S])*D):(B=(F=I*o+A)+R,S=(L=F+b*o)+R,M+=(t[F]-t[B]-t[L]+t[S])*D)}var O=r[y++],N=r[y++],j=r[y++];w+=M*h<O*v?N:j}if(w<T)return!1}return!0},tracking.ViolaJones.mergeRectangles_=function(r){for(var t=new tracking.DisjointSet(r.length),n=0;n<r.length;n++)for(var e=r[n],a=0;a<r.length;a++){var i=r[a];if(tracking.Math.intersectRect(e.x,e.y,e.x+e.width,e.y+e.height,i.x,i.y,i.x+i.width,i.y+i.height)){var o=Math.max(e.x,i.x),c=Math.max(e.y,i.y),h=(o-Math.min(e.x+e.width,i.x+i.width))*(c-Math.min(e.y+e.height,i.y+i.height)),k=e.width*e.height,l=i.width*i.height;h/(k*(k/l))>=this.REGIONS_OVERLAP&&h/(l*(k/l))>=this.REGIONS_OVERLAP&&t.union(n,a)}}for(var u={},f=0;f<t.length;f++){var m=t.find(f);u[m]?(u[m].total++,u[m].width+=r[f].width,u[m].height+=r[f].height,u[m].x+=r[f].x,u[m].y+=r[f].y):u[m]={total:1,width:r[f].width,height:r[f].height,x:r[f].x,y:r[f].y}}var d=[];return Object.keys(u).forEach((function(r){var t=u[r];d.push({total:t.total,width:t.width/t.total+.5|0,height:t.height/t.total+.5|0,x:t.x/t.total+.5|0,y:t.y/t.total+.5|0})})),d},tracking.Brief={},tracking.Brief.N=512,tracking.Brief.randomImageOffsets_={},tracking.Brief.randomWindowOffsets_=null,tracking.Brief.getDescriptors=function(r,t,n){for(var e=new Int32Array((n.length>>1)*(this.N>>5)),a=0,i=this.getRandomOffsets_(t),o=0,c=0;c<n.length;c+=2)for(var s=t*n[c+1]+n[c],g=0,h=0,k=this.N;h<k;h++)r[i[g++]+s]<r[i[g++]+s]&&(a|=1<<(31&h)),h+1&31||(e[o++]=a,a=0);return e},tracking.Brief.match=function(r,t,n,e){for(var a=r.length>>1,i=n.length>>1,o=new Array(a),c=0;c<a;c++){for(var s=1/0,g=0,h=0;h<i;h++){for(var k=0,l=0,u=this.N>>5;l<u;l++)k+=tracking.Math.hammingWeight(t[c*u+l]^e[h*u+l]);k<s&&(s=k,g=h)}o[c]={index1:c,index2:g,keypoint1:[r[2*c],r[2*c+1]],keypoint2:[n[2*g],n[2*g+1]],confidence:1-s/this.N}}return o},tracking.Brief.reciprocalMatch=function(r,t,n,e){var a=[];if(0===r.length||0===n.length)return a;for(var i=tracking.Brief.match(r,t,n,e),o=tracking.Brief.match(n,e,r,t),c=0;c<i.length;c++)o[i[c].index2].index2===c&&a.push(i[c]);return a},tracking.Brief.getRandomOffsets_=function(r){if(!this.randomWindowOffsets_){for(var t=0,n=new Int32Array(4*this.N),e=0;e<this.N;e++)n[t++]=Math.round(tracking.Math.uniformRandom(-15,16)),n[t++]=Math.round(tracking.Math.uniformRandom(-15,16)),n[t++]=Math.round(tracking.Math.uniformRandom(-15,16)),n[t++]=Math.round(tracking.Math.uniformRandom(-15,16));this.randomWindowOffsets_=n}if(!this.randomImageOffsets_[r]){for(var a=0,i=new Int32Array(2*this.N),o=0;o<this.N;o++)i[a++]=this.randomWindowOffsets_[4*o]*r+this.randomWindowOffsets_[4*o+1],i[a++]=this.randomWindowOffsets_[4*o+2]*r+this.randomWindowOffsets_[4*o+3];this.randomImageOffsets_[r]=i}return this.randomImageOffsets_[r]},tracking.Fast={},tracking.Fast.THRESHOLD=40,tracking.Fast.circles_={},tracking.Fast.findCorners=function(r,t,n,e){var a=this.getCircleOffsets_(t),i=new Int32Array(16),o=[];void 0===e&&(e=this.THRESHOLD);for(var c=3;c<n-3;c++)for(var s=3;s<t-3;s++){for(var g=c*t+s,h=r[g],k=0;k<16;k++)i[k]=r[g+a[k]];this.isCorner(h,i,e)&&(o.push(s,c),s+=3)}return o},tracking.Fast.isBrighter=function(r,t,n){return r-t>n},tracking.Fast.isCorner=function(r,t,n){if(this.isTriviallyExcluded(t,r,n))return!1;for(var e=0;e<16;e++){for(var a=!0,i=!0,o=0;o<9;o++){var c=t[e+o&15];if(!this.isBrighter(r,c,n)&&(i=!1,!1===a))break;if(!this.isDarker(r,c,n)&&(a=!1,!1===i))break}if(i||a)return!0}return!1},tracking.Fast.isDarker=function(r,t,n){return t-r>n},tracking.Fast.isTriviallyExcluded=function(r,t,n){var e=0,a=r[8],i=r[12],o=r[4],c=r[0];return this.isBrighter(c,t,n)&&e++,this.isBrighter(o,t,n)&&e++,this.isBrighter(a,t,n)&&e++,this.isBrighter(i,t,n)&&e++,e<3&&(e=0,this.isDarker(c,t,n)&&e++,this.isDarker(o,t,n)&&e++,this.isDarker(a,t,n)&&e++,this.isDarker(i,t,n)&&e++,e<3)},tracking.Fast.getCircleOffsets_=function(r){if(this.circles_[r])return this.circles_[r];var t=new Int32Array(16);return t[0]=-r-r-r,t[1]=t[0]+1,t[2]=t[1]+r+1,t[3]=t[2]+r+1,t[4]=t[3]+r,t[5]=t[4]+r,t[6]=t[5]+r-1,t[7]=t[6]+r-1,t[8]=t[7]-1,t[9]=t[8]-1,t[10]=t[9]-r-1,t[11]=t[10]-r-1,t[12]=t[11]-r,t[13]=t[12]-r,t[14]=t[13]-r+1,t[15]=t[14]-r+1,this.circles_[r]=t,t},tracking.Math={},tracking.Math.distance=function(r,t,n,e){var a=n-r,i=e-t;return Math.sqrt(a*a+i*i)},tracking.Math.hammingWeight=function(r){return 16843009*((r=(858993459&(r-=r>>1&1431655765))+(r>>2&858993459))+(r>>4)&252645135)>>24},tracking.Math.uniformRandom=function(r,t){return r+Math.random()*(t-r)},tracking.Math.intersectRect=function(r,t,n,e,a,i,o,c){return!(a>n||o<r||i>e||c<t)},tracking.Matrix={},tracking.Matrix.forEach=function(r,t,n,e,a){a=a||1;for(var i=0;i<n;i+=a)for(var o=0;o<t;o+=a){var c=i*t*4+4*o;e.call(this,r[c],r[c+1],r[c+2],r[c+3],c,i,o)}},tracking.Matrix.sub=function(r,t){for(var n=tracking.Matrix.clone(r),e=0;e<n.length;e++)for(var a=0;a<n[e].length;a++)n[e][a]-=t[e][a];return n},tracking.Matrix.add=function(r,t){for(var n=tracking.Matrix.clone(r),e=0;e<n.length;e++)for(var a=0;a<n[e].length;a++)n[e][a]+=t[e][a];return n},tracking.Matrix.clone=function(r,t,n){t=t||r[0].length,n=n||r.length;for(var e=new Array(n),a=n;a--;){e[a]=new Array(t);for(var i=t;i--;)e[a][i]=r[a][i]}return e},tracking.Matrix.mulScalar=function(r,t){for(var n=tracking.Matrix.clone(t),e=0;e<t.length;e++)for(var a=0;a<t[e].length;a++)n[e][a]*=r;return n},tracking.Matrix.transpose=function(r){for(var t=new Array(r[0].length),n=0;n<r[0].length;n++){t[n]=new Array(r.length);for(var e=0;e<r.length;e++)t[n][e]=r[e][n]}return t},tracking.Matrix.mul=function(r,t){for(var n=new Array(r.length),e=0;e<r.length;e++){n[e]=new Array(t[0].length);for(var a=0;a<t[0].length;a++){n[e][a]=0;for(var i=0;i<r[0].length;i++)n[e][a]+=r[e][i]*t[i][a]}}return n},tracking.Matrix.norm=function(r){for(var t=0,n=0;n<r.length;n++)for(var e=0;e<r[n].length;e++)t+=r[n][e]*r[n][e];return Math.sqrt(t)},tracking.Matrix.calcCovarMatrix=function(r){for(var t=new Array(r.length),n=0;n<r.length;n++){t[n]=[0];for(var e=0;e<r[n].length;e++)t[n][0]+=r[n][e]/r[n].length}var a=tracking.Matrix.clone(t);for(n=0;n<a.length;n++)for(e=0;e<r[0].length-1;e++)a[n].push(a[n][0]);var i=tracking.Matrix.sub(r,a),o=tracking.Matrix.transpose(i);return[tracking.Matrix.mul(o,i),t]},tracking.EPnP={},tracking.EPnP.solve=function(r,t,n){},tracking.Tracker=function(){tracking.Tracker.base(this,"constructor")},tracking.inherits(tracking.Tracker,tracking.EventEmitter),tracking.Tracker.prototype.track=function(){},tracking.TrackerTask=function(r){if(tracking.TrackerTask.base(this,"constructor"),!r)throw new Error("Tracker instance not specified.");this.setTracker(r)},tracking.inherits(tracking.TrackerTask,tracking.EventEmitter),tracking.TrackerTask.prototype.tracker_=null,tracking.TrackerTask.prototype.running_=!1,tracking.TrackerTask.prototype.getTracker=function(){return this.tracker_},tracking.TrackerTask.prototype.inRunning=function(){return this.running_},tracking.TrackerTask.prototype.setRunning=function(r){this.running_=r},tracking.TrackerTask.prototype.setTracker=function(r){this.tracker_=r},tracking.TrackerTask.prototype.run=function(){var r=this;if(!this.inRunning())return this.setRunning(!0),this.reemitTrackEvent_=function(t){r.emit("track",t)},this.tracker_.on("track",this.reemitTrackEvent_),this.emit("run"),this},tracking.TrackerTask.prototype.stop=function(){if(this.inRunning())return this.setRunning(!1),this.emit("stop"),this.tracker_.removeListener("track",this.reemitTrackEvent_),this},function(){tracking.ColorTracker=function(r){tracking.ColorTracker.base(this,"constructor"),"string"==typeof r&&(r=[r]),r&&(r.forEach((function(r){if(!tracking.ColorTracker.getColor(r))throw new Error('Color not valid, try `new tracking.ColorTracker("magenta")`.')})),this.setColors(r))},tracking.inherits(tracking.ColorTracker,tracking.Tracker),tracking.ColorTracker.knownColors_={},tracking.ColorTracker.neighbours_={},tracking.ColorTracker.registerColor=function(r,t){tracking.ColorTracker.knownColors_[r]=t},tracking.ColorTracker.getColor=function(r){return tracking.ColorTracker.knownColors_[r]},tracking.ColorTracker.prototype.colors=["magenta"],tracking.ColorTracker.prototype.minDimension=20,tracking.ColorTracker.prototype.maxDimension=1/0,tracking.ColorTracker.prototype.minGroupSize=30,tracking.ColorTracker.prototype.calculateDimensions_=function(r,t){for(var n=-1,e=-1,a=1/0,i=1/0,o=0;o<t;o+=2){var c=r[o],s=r[o+1];c<a&&(a=c),c>n&&(n=c),s<i&&(i=s),s>e&&(e=s)}return{width:n-a,height:e-i,x:a,y:i}},tracking.ColorTracker.prototype.getColors=function(){return this.colors},tracking.ColorTracker.prototype.getMinDimension=function(){return this.minDimension},tracking.ColorTracker.prototype.getMaxDimension=function(){return this.maxDimension},tracking.ColorTracker.prototype.getMinGroupSize=function(){return this.minGroupSize},tracking.ColorTracker.prototype.getNeighboursForWidth_=function(r){if(tracking.ColorTracker.neighbours_[r])return tracking.ColorTracker.neighbours_[r];var t=new Int32Array(8);return t[0]=4*-r,t[1]=4*-r+4,t[2]=4,t[3]=4*r+4,t[4]=4*r,t[5]=4*r-4,t[6]=-4,t[7]=4*-r-4,tracking.ColorTracker.neighbours_[r]=t,t},tracking.ColorTracker.prototype.mergeRectangles_=function(r){for(var t,n=[],e=this.getMinDimension(),a=this.getMaxDimension(),i=0;i<r.length;i++){var o=r[i];t=!0;for(var c=i+1;c<r.length;c++){var s=r[c];if(tracking.Math.intersectRect(o.x,o.y,o.x+o.width,o.y+o.height,s.x,s.y,s.x+s.width,s.y+s.height)){t=!1;var g=Math.min(o.x,s.x),h=Math.min(o.y,s.y),k=Math.max(o.x+o.width,s.x+s.width),l=Math.max(o.y+o.height,s.y+s.height);s.height=l-h,s.width=k-g,s.x=g,s.y=h;break}}t&&o.width>=e&&o.height>=e&&o.width<=a&&o.height<=a&&n.push(o)}return n},tracking.ColorTracker.prototype.setColors=function(r){this.colors=r},tracking.ColorTracker.prototype.setMinDimension=function(r){this.minDimension=r},tracking.ColorTracker.prototype.setMaxDimension=function(r){this.maxDimension=r},tracking.ColorTracker.prototype.setMinGroupSize=function(r){this.minGroupSize=r},tracking.ColorTracker.prototype.track=function(r,t,n){var e=this,a=this.getColors();if(!a)throw new Error('Colors not specified, try `new tracking.ColorTracker("magenta")`.');var i=[];a.forEach((function(a){i=i.concat(e.trackColor_(r,t,n,a))})),this.emit("track",{data:i})},tracking.ColorTracker.prototype.trackColor_=function(n,e,a,i){var o,c,s,g,h,k=tracking.ColorTracker.knownColors_[i],l=new Int32Array(n.length>>2),u=new Int8Array(n.length),f=this.getMinGroupSize(),m=this.getNeighboursForWidth_(e),d=new Int32Array(n.length),v=[],p=-4;if(!k)return v;for(var y=0;y<a;y++)for(var w=0;w<e;w++)if(!u[p+=4]){for(o=0,h=-1,d[++h]=p,d[++h]=y,d[++h]=w,u[p]=1;h>=0;)if(s=d[h--],c=d[h--],k(n[g=d[h--]],n[g+1],n[g+2],n[g+3],g,c,s)){l[o++]=s,l[o++]=c;for(var T=0;T<m.length;T++){var x=g+m[T],M=c+r[T],_=s+t[T];!u[x]&&M>=0&&M<a&&_>=0&&_<e&&(d[++h]=x,d[++h]=M,d[++h]=_,u[x]=1)}}if(o>=f){var C=this.calculateDimensions_(l,o);C&&(C.color=i,v.push(C))}}return this.mergeRectangles_(v)},tracking.ColorTracker.registerColor("cyan",(function(r,t,n){var i=r-0,e=t-255,o=n-255;return t-r>=50&&n-r>=70||i*i+e*e+o*o<6400})),tracking.ColorTracker.registerColor("magenta",(function(r,t,n){var a=r-255,i=t-0,e=n-255;return r-t>=50&&n-t>=50||a*a+i*i+e*e<19600})),tracking.ColorTracker.registerColor("yellow",(function(r,t,n){var a=r-255,i=t-255,e=n-0;return r-n>=50&&t-n>=50||a*a+i*i+e*e<1e4}));var r=new Int32Array([-1,-1,0,1,1,1,0,-1]),t=new Int32Array([0,1,1,1,0,-1,-1,-1])}(),tracking.ObjectTracker=function(r){tracking.ObjectTracker.base(this,"constructor"),r&&(Array.isArray(r)||(r=[r]),Array.isArray(r)&&r.forEach((function(t,n){if("string"==typeof t&&(r[n]=tracking.ViolaJones.classifiers[t]),!r[n])throw new Error('Object classifier not valid, try `new tracking.ObjectTracker("face")`.')}))),this.setClassifiers(r)},tracking.inherits(tracking.ObjectTracker,tracking.Tracker),tracking.ObjectTracker.prototype.edgesDensity=.2,tracking.ObjectTracker.prototype.initialScale=1,tracking.ObjectTracker.prototype.scaleFactor=1.25,tracking.ObjectTracker.prototype.stepSize=1.5,tracking.ObjectTracker.prototype.getClassifiers=function(){return this.classifiers},tracking.ObjectTracker.prototype.getEdgesDensity=function(){return this.edgesDensity},tracking.ObjectTracker.prototype.getInitialScale=function(){return this.initialScale},tracking.ObjectTracker.prototype.getScaleFactor=function(){return this.scaleFactor},tracking.ObjectTracker.prototype.getStepSize=function(){return this.stepSize},tracking.ObjectTracker.prototype.track=function(r,t,n){var e=this,a=this.getClassifiers();if(!a)throw new Error('Object classifier not specified, try `new tracking.ObjectTracker("face")`.');var i=[];a.forEach((function(a){i=i.concat(tracking.ViolaJones.detect(r,t,n,e.getInitialScale(),e.getScaleFactor(),e.getStepSize(),e.getEdgesDensity(),a))})),this.emit("track",{data:i})},tracking.ObjectTracker.prototype.setClassifiers=function(r){this.classifiers=r},tracking.ObjectTracker.prototype.setEdgesDensity=function(r){this.edgesDensity=r},tracking.ObjectTracker.prototype.setInitialScale=function(r){this.initialScale=r},tracking.ObjectTracker.prototype.setScaleFactor=function(r){this.scaleFactor=r},tracking.ObjectTracker.prototype.setStepSize=function(r){this.stepSize=r},tracking.LandmarksTracker=function(){tracking.LandmarksTracker.base(this,"constructor")},tracking.inherits(tracking.LandmarksTracker,tracking.ObjectTracker),tracking.LandmarksTracker.prototype.track=function(r,t,n){var e=tracking.ViolaJones.classifiers.face,a=tracking.ViolaJones.detect(r,t,n,this.getInitialScale(),this.getScaleFactor(),this.getStepSize(),this.getEdgesDensity(),e),i=tracking.LBF.align(r,t,n,a);this.emit("track",{data:{faces:a,landmarks:i}})},tracking.LBF={},tracking.LBF.Regressor=function(r){this.maxNumStages=r,this.rfs=new Array(r),this.models=new Array(r);for(var t=0;t<r;t++)this.rfs[t]=new tracking.LBF.RandomForest(t),this.models[t]=tracking.LBF.RegressorData[t].models;this.meanShape=tracking.LBF.LandmarksData},tracking.LBF.Regressor.prototype.predict=function(r,t,n,e){var a=[],i=[],o=[],c=tracking.Matrix.clone(this.meanShape);a.push({data:r,width:t,height:n}),o.push(e),i.push(tracking.LBF.projectShapeToBoundingBox_(c,e));for(var s=0;s<this.maxNumStages;s++){var g=tracking.LBF.Regressor.deriveBinaryFeat(this.rfs[s],a,i,o,c);this.applyGlobalPrediction(g,this.models[s],i,o)}return i[0]},tracking.LBF.Regressor.prototype.applyGlobalPrediction=function(r,t,n,e){for(var a=2*n[0].length,i=new Array(a/2),o=0;o<a/2;o++)i[o]=[0,0];for(o=0;o<n.length;o++){for(var c=0;c<a;c++){for(var s=0,g=0,h=0;-1!=(h=r[o][g].index);g++)h<=t[c].nr_feature&&(s+=t[c].data[h-1]*r[o][g].value);c<a/2?i[c][0]=s:i[c-a/2][1]=s}var k=tracking.LBF.similarityTransform_(tracking.LBF.unprojectShapeToBoundingBox_(n[o],e[o]),this.meanShape),l=(tracking.Matrix.transpose(k[0]),tracking.LBF.unprojectShapeToBoundingBox_(n[o],e[o]));l=tracking.Matrix.add(l,i),n[o]=tracking.LBF.projectShapeToBoundingBox_(l,e[o])}},tracking.LBF.Regressor.deriveBinaryFeat=function(r,t,n,e,a){for(var i=new Array(t.length),o=0;o<t.length;o++){var c=r.maxNumTrees*r.landmarkNum+1;i[o]=new Array(c);for(var s=0;s<c;s++)i[o][s]={}}var g=1<<r.maxDepth-1;for(o=0;o<t.length;o++){var h=tracking.LBF.unprojectShapeToBoundingBox_(n[o],e[o]),k=tracking.LBF.similarityTransform_(h,a);for(s=0;s<r.landmarkNum;s++)for(var l=0;l<r.maxNumTrees;l++){var u=tracking.LBF.Regressor.getCodeFromTree(r.rfs[s][l],t[o],n[o],e[o],k[0],k[1]),f=s*r.maxNumTrees+l;i[o][f].index=g*f+u,i[o][f].value=1}i[o][r.landmarkNum*r.maxNumTrees].index=-1,i[o][r.landmarkNum*r.maxNumTrees].value=-1}return i},tracking.LBF.Regressor.getCodeFromTree=function(r,t,n,e,a,i){for(var o=0,c=0;;){var s=Math.cos(r.nodes[o].feats[0])*r.nodes[o].feats[2]*r.maxRadioRadius*e.width,g=Math.sin(r.nodes[o].feats[0])*r.nodes[o].feats[2]*r.maxRadioRadius*e.height,h=Math.cos(r.nodes[o].feats[1])*r.nodes[o].feats[3]*r.maxRadioRadius*e.width,k=Math.sin(r.nodes[o].feats[1])*r.nodes[o].feats[3]*r.maxRadioRadius*e.height,l=a[0][0]*s+a[0][1]*g,u=a[1][0]*s+a[1][1]*g,f=Math.floor(l+n[r.landmarkID][0]),m=Math.floor(u+n[r.landmarkID][1]);f=Math.max(0,Math.min(f,t.height-1)),m=Math.max(0,Math.min(m,t.width-1));var d=a[0][0]*h+a[0][1]*k,v=a[1][0]*h+a[1][1]*k,p=Math.floor(d+n[r.landmarkID][0]),y=Math.floor(v+n[r.landmarkID][1]);if(p=Math.max(0,Math.min(p,t.height-1)),y=Math.max(0,Math.min(y,t.width-1)),o=Math.floor(t.data[m*t.width+f])-Math.floor(t.data[y*t.width+p])<r.nodes[o].thresh?r.nodes[o].cnodes[0]:r.nodes[o].cnodes[1],1==r.nodes[o].is_leafnode){c=1;for(var w=0;w<r.leafnodes.length;w++){if(r.leafnodes[w]==o)return c;c++}return c}}return c},tracking.LBF.maxNumStages=4,tracking.LBF.regressor_=null,tracking.LBF.align=function(r,t,n,e){null==tracking.LBF.regressor_&&(tracking.LBF.regressor_=new tracking.LBF.Regressor(tracking.LBF.maxNumStages)),r=tracking.Image.grayscale(r,t,n,!1),r=tracking.Image.equalizeHist(r,t,n);var a=new Array(e.length);for(var i in e){e[i].height=e[i].width;var o={};o.startX=e[i].x,o.startY=e[i].y,o.width=e[i].width,o.height=e[i].height,a[i]=tracking.LBF.regressor_.predict(r,t,n,o)}return a},tracking.LBF.unprojectShapeToBoundingBox_=function(r,t){for(var n=new Array(r.length),e=0;e<r.length;e++)n[e]=[(r[e][0]-t.startX)/t.width,(r[e][1]-t.startY)/t.height];return n},tracking.LBF.projectShapeToBoundingBox_=function(r,t){for(var n=new Array(r.length),e=0;e<r.length;e++)n[e]=[r[e][0]*t.width+t.startX,r[e][1]*t.height+t.startY];return n},tracking.LBF.similarityTransform_=function(r,t){for(var n=[0,0],e=[0,0],a=0;a<r.length;a++)n[0]+=r[a][0],n[1]+=r[a][1],e[0]+=t[a][0],e[1]+=t[a][1];n[0]/=r.length,n[1]/=r.length,e[0]/=t.length,e[1]/=t.length;var i=tracking.Matrix.clone(r),o=tracking.Matrix.clone(t);for(a=0;a<r.length;a++)i[a][0]-=n[0],i[a][1]-=n[1],o[a][0]-=e[0],o[a][1]-=e[1];var c,s,h=tracking.Matrix.calcCovarMatrix(i);c=h[0],h[1],s=(h=tracking.Matrix.calcCovarMatrix(o))[0],h[1];var k=Math.sqrt(tracking.Matrix.norm(c)),u=Math.sqrt(tracking.Matrix.norm(s)),l=k/u;i=tracking.Matrix.mulScalar(1/k,i),o=tracking.Matrix.mulScalar(1/u,o);var f=0,m=0;for(a=0;a<r.length;a++)f=f+i[a][1]*o[a][0]-i[a][0]*o[a][1],m=m+i[a][0]*o[a][0]+i[a][1]*o[a][1];var d=Math.sqrt(f*f+m*m),p=f/d,v=m/d;return[[[v,-p],[p,v]],l]},tracking.LBF.RandomForest=function(r){this.maxNumTrees=tracking.LBF.RegressorData[r].max_numtrees,this.landmarkNum=tracking.LBF.RegressorData[r].num_landmark,this.maxDepth=tracking.LBF.RegressorData[r].max_depth,this.stages=tracking.LBF.RegressorData[r].stages,this.rfs=new Array(this.landmarkNum);for(var t=0;t<this.landmarkNum;t++){this.rfs[t]=new Array(this.maxNumTrees);for(var n=0;n<this.maxNumTrees;n++)this.rfs[t][n]=new tracking.LBF.Tree(r,t,n)}},tracking.LBF.Tree=function(r,t,n){var e=tracking.LBF.RegressorData[r].landmarks[t][n];this.maxDepth=e.max_depth,this.maxNumNodes=e.max_numnodes,this.nodes=e.nodes,this.landmarkID=e.landmark_id,this.numLeafnodes=e.num_leafnodes,this.numNodes=e.num_nodes,this.maxNumFeats=e.max_numfeats,this.maxRadioRadius=e.max_radio_radius,this.leafnodes=e.id_leafnodes}}}]);
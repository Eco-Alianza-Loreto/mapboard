(window.webpackJsonpmapboard=window.webpackJsonpmapboard||[]).push([[14],{476:function(s,t,o){"use strict";o.r(t);var e={mixins:[o(18).a],computed:{additionalTags(){return this.$props.slots.additionalTags||[]},message(){let s="";for(let t of this.additionalTags)s=s+"<"+t+">";s+=this.evaluateSlot(this.$props.slots.text,this.$props.slots.transforms);for(let t of this.additionalTags)s=s+"</"+t+">";return s},style(){if(this.$props.options)return this.$props.options.style||""},vshowComputed(){return!this.$props.slots||!1!==this.evaluateSlot(this.$props.slots.vshowProp)}}},i=o(2),a=Object(i.a)(e,function(){var s=this.$createElement;return(this._self._c||s)("p",{directives:[{name:"show",rawName:"v-show",value:this.vshowComputed,expression:"this.vshowComputed"}],style:this.style,domProps:{innerHTML:this._s(this.message)}})},[],!1,null,"368d1406",null);t.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{405:function(t,r,n){"use strict";n.r(r),n.d(r,"listConversations",(function(){return c})),n.d(r,"listMessages",(function(){return l})),n.d(r,"sendMessage",(function(){return d})),n.d(r,"sendMMS",(function(){return m})),n.d(r,"changeNumber",(function(){return h})),n.d(r,"deleteConversation",(function(){return v}));var e=n(9),o=(n(721),n(535)),f=Object(o.a)().url("https://app.linkdial.com/api/web"),c=function(){var t=Object(e.a)((function*(t){var{user:r,pass:n,id:e=0,limit:o=1e3,offset:c=0}=t;return f.url("/getlogs.php").formData({user:r,pass:n,id:e,limit:o,offset:c}).post().json()}));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=Object(e.a)((function*(t){var{user:r,pass:n,target:e,id:o=0,limit:c=100,offset:l=0,direction:d="before",sort:m="DESC"}=t;return f.url("/getlogstarget.php").formData({user:r,pass:n,target:e,id:o,limit:c,offset:l,direction:d,sort:m}).post().json()}));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=Object(e.a)((function*(t){var{user:r,pass:n,to:e,number:o="",message:c,profanity:l=0}=t;return f.url("/send.php").formData({user:r,pass:n,to:e,number:o||"",message:c,profanity:l}).post().json()}));return function(r){return t.apply(this,arguments)}}(),m=function(){var t=Object(e.a)((function*(t){var{user:r,pass:n,to:e,fileToUpload:o,type:c="image"}=t;return f.url("/sendmms.php").formData({user:r,pass:n,to:e,fileToUpload:o,type:c}).post().json()}));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=Object(e.a)((function*(t){var{user:r,pass:n,to:e}=t;return f.url("/changenumber.php").formData({user:r,pass:n,to:e}).post().json()}));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=Object(e.a)((function*(t){var{user:r,pass:n,target:e}=t;return f.url("/delconversation.php").formData({user:r,pass:n,target:e}).post().json()}));return function(r){return t.apply(this,arguments)}}()}}]);
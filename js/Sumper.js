/**
 * Created by Administrator on 2017/7/28.
 */
    function Sumper() {
    this.initial = function (box, a, header, frouBox, frouDiv, headerUl,headerI,loge,nav,hotline,hotlinespan,hotlineI,shufflingLong,shufflingLines,shufflinglineyuan,sevenboxwenbig,sevenboxul,sevenboxkuai,swith,icons,iconbtnT,iconbtnB,bigbox,shufflingimg,boxs,hotbtn,boxthreeleft,boxthreeright,boxthreecontion,fiveboxleft,fiveboxright,fiveboxcontc) {
        this.box = box;
        this.indexs = 0;
        this.a = a;
        this.frouBox = frouBox;
        this.frouDiv = frouDiv;
        this.headerUl = headerUl;
        this.headerI=headerI;
        this.falg = false;
        this.header=header;
        this.loge=loge;
        this.nav=nav;
        this.hotline=hotline;
        this.hotlinespan=hotlinespan;
        this.hotlineI=hotlineI;
        this.shufflingLong=shufflingLong;
        this.shufflingIndex=0;
        this.shufflingLines=shufflingLines;
        this.shufflinglineyuan=shufflinglineyuan;
        this.time=null;
        this.sevenboxwenbig=sevenboxwenbig;
        this.sevenboxwenbigIndex=0;
        this.stime=null;
        this.sevenboxul=sevenboxul;
        this.sevenboxkuai=sevenboxkuai;
        this.swith=swith;
        this.swithfalg=true;
        this.icons=icons;
        this.iconbtnT=iconbtnT;
        this.iconbtnB=iconbtnB;
        this.bigbox=bigbox;
        this.shufflingimg=shufflingimg;
        this.boxs=boxs;
        this.hotbtn=hotbtn;
        this.hotvar=false;
        this.hotfalg=0;
        this.boxthreeright=boxthreeright;
        this.boxthreeleft=boxthreeleft;
        this.boxthreecontion=boxthreecontion;
        this.boxthreeindex=0;
        this.fiveboxleft=fiveboxleft;
        this.fiveboxright=fiveboxright;
        this.fiveboxcontc=fiveboxcontc;
    };
    this.opacityanim=function (obj,falg) {
        if(falg){
            this.boxthreeindex++;
            if(this.boxthreeindex>obj.children.length-1){
                this.boxthreeindex=0;
            }
        }else{
            this.boxthreeindex--;
            if(this.boxthreeindex<0){
                this.boxthreeindex=obj.children.length-1;
            }
        }
        Array.prototype.slice.call(obj.children).forEach(function (object) {
            object.style.opacity=0;
        },false);
        obj.children[this.boxthreeindex].style.opacity=1;
    };
    this.fiveboxlefts=function () {
        this.fiveboxleft.addEventListener('click',function () {
            this.opacityanim(this.fiveboxcontc,false);
        }.bind(this),false)
    };
    this.fiveboxrights=function () {
        this.fiveboxright.addEventListener('click',function () {
            this.opacityanim(this.fiveboxcontc,true);
        }.bind(this),false)
    };
    this.boxthreelefts=function () {
        this.boxthreeleft.addEventListener('click',function () {
            this.opacityanim(this.boxthreecontion,false);
        }.bind(this),false)
    };
    this.boxthreerights=function () {
        this.boxthreeright.addEventListener('click',function () {
            this.opacityanim(this.boxthreecontion,true);
        }.bind(this),false)
    };
    this.height = function () {
        let bigboxChilds = this.box.children;
        Array.prototype.slice.call(bigboxChilds).forEach(function (obj, index) {
            obj.style.height = document.body.offsetHeight + 'px';
        }, false);
    };
    this.wheel = function () {
        document.addEventListener('wheel', this.marginTop, false);
    };
    this.add = function () {
        this.box.addEventListener('webkitTransitionEnd', function () {
            this.wheel();
        }.bind(this), false)
    };
    this.removeWheel = function () {
        document.removeEventListener('wheel', this.marginTop, false)
    };
    this.sliding = function () {
        this.frouBox.addEventListener('mouseover', function (e) {
            if (this.falg == false) {
                this.falg = true;
                this.frouDiv.style.display = 'block';
            }
            let offsettop = e.target.offsetTop;
            let offsetleft = e.target.offsetLeft;
            this.frouDiv.style.top = offsettop + 'px';
            this.frouDiv.style.left = offsetleft + 'px';
        }.bind(this), false)
    };
    this.slidingout = function () {
        this.frouBox.addEventListener('mouseleave', function (e) {
            this.falg = false;
            this.frouDiv.style.display = 'none';
        }.bind(this), false)
    };
    this.changeColor = function () {
        let headerchild = this.headerUl.children;
        Array.prototype.slice.call(headerchild).forEach(function (obj) {
            obj.style.color = '#CCCCCC'
        },false);
        if(this.indexs>=8){
            headerchild[7].style.color = '#00DFB9'
        }else{
            headerchild[this.indexs].style.color = '#00DFB9'
        }
        if(this.hotvar){
            [...this.headerUl.children].forEach(function (obj) {
                obj.style.background='#3A3A3A';
            },false);
            if(this.indexs==8){
                this.indexs=7;
            }
            this.headerUl.children[this.indexs].style.background='#111111';
        }
    };
    this.changeI=function (val) {
        let headerchild=this.headerUl.children;
        let postion;
        let num=6;
        this.animations=function (val) {
            postion=headerchild[this.indexs].offsetLeft;
            if(val<0){
                if((this.headerI.style.left.slice(0,-2)-0<postion)&&(this.headerI.style.left.slice(0,-2)-0+num<postion)){
                    this.headerI.style.left=this.headerI.style.left.slice(0,-2)-0+num+'px';

                }else {
                    this.headerI.style.left=postion-2+'px';
                    return
                }
            }else if(val>0){
                if((this.headerI.style.left.slice(0,-2)-0>postion)&&(this.headerI.style.left.slice(0,-2)-0-num>postion)){
                    this.headerI.style.left=this.headerI.style.left.slice(0,-2)-0-num+'px';
                }else {
                    this.headerI.style.left=postion-2+'px';
                    return
                }
            }
            requestAnimationFrame(function(){this.animations(val)}.bind(this));
        };
        requestAnimationFrame(function(){this.animations(val)}.bind(this));
    };
    this.shufflingLongs=function () {
        let bodywidth=document.body.offsetWidth;
        this.shufflingIndex++;
        if(this.shufflingIndex>3){
            this.shufflingIndex=0;
        }
        this.shufflingColor();
        this.shufflingLong.style.marginLeft=0-this.shufflingIndex*bodywidth+'px';
    }.bind(this);
    this.setshufflingLongs=function () {
        this.time=setInterval(this.shufflingLongs,3000);
    };
    this.creatshufflingLongs=function () {
        clearInterval(this.time);
    };
    this.shufflingColor=function () {
        let shufflingchilds=this.shufflingLines.children;
        Array.prototype.slice.call(shufflingchilds).forEach(function (obj) {
            obj.style.background='#fff';
        },false);
        shufflingchilds[this.shufflingIndex].style.background='#00DFB9';
    }.bind(this);
    this.shufflingHover=function () {
        this.shufflingLines.addEventListener('mouseover',function (e) {
            if(e.target.tagName=='A'){
                let bodywidth=document.body.offsetWidth;
                this.creatshufflingLongs();
                let creatshufflingLongsIndex=Array.prototype.slice.call(this.shufflingLines.children).indexOf(e.target);
                this.shufflingIndex=creatshufflingLongsIndex;
                this.shufflingLong.style.marginLeft=0-creatshufflingLongsIndex*bodywidth+'px';
                this.shufflingColor();
            }
        }.bind(this),false);
        this.shufflingLines.addEventListener('mouseout',function (e) {
            if(e.target.tagName=='A'){
                this.setshufflingLongs();
            }
        }.bind(this),false)
    };
    this.shufflinglineyuans=function () {
        this.shufflinglineyuan.addEventListener('click',function (e) {
            this.indexs=1;
            this.box.style.marginTop=-document.body.offsetHeight*this.indexs+'px';
            this.changeColor();
            this.changeI(-1);
            this.aTop();
            this.headanimation();
        }.bind(this),false)
    };

    this.sevenboxwenbigchange=function () {
        this.sevenboxwenbigIndex++;
        if(this.sevenboxwenbigIndex>2){
            this.sevenboxwenbigIndex=0;
        }
        this.sevenboxkuai.style.top=this.sevenboxwenbigIndex*42+'px';
        this.sevenboxwenbig.style.left=this.sevenboxwenbigIndex*-480+'px';
        Array.prototype.slice.call(this.sevenboxul.children).forEach(function (obj) {
            obj.style.color='#888';
        },false);
        this.sevenboxul.children[this.sevenboxwenbigIndex].style.color='#fff';
    }.bind(this);
    this.setsevenboxwenbigchange=function () {
        this.stime=setInterval(this.sevenboxwenbigchange,2000);
    };
    this.clearsevenboxwenbigchange=function () {
        clearInterval(this.stime);
    };
    this.sevenboxulhover=function () {
        this.sevenboxul.addEventListener('mouseover',function (e) {
            if(e.target.className=='sevenboxli'){
                this.clearsevenboxwenbigchange();
                let sevenboxuls=[...this.sevenboxul.children].slice(0,3);
                let sevenboxIndex=sevenboxuls.indexOf(e.target);
                this.sevenboxkuai.style.top=sevenboxIndex*42+'px';
                this.sevenboxwenbig.style.left=sevenboxIndex*-480+'px';
            }
        }.bind(this),false);
        this.sevenboxul.addEventListener('mouseout',function (e) {
            if(e.target.className=='sevenboxli'){
                this.setsevenboxwenbigchange();
            }
        }.bind(this),false)
    };
    this.swithclick=function () {
        this.swith.addEventListener('click',function () {
            if(this.swithfalg){
                this.iconsright();
                this.swithfalg=false;
                this.swith.style.backgroundPositionX=-32+'px';
                this.swith.style.backgroundPositionY=-640+'px';
            }else {
                this.iconsright();
                this.swithfalg=true;
                this.swith.style.backgroundPositionX=0+'px';
                this.swith.style.backgroundPositionY=-640+'px';
            }

        }.bind(this),false)
    };
    this.iconsright=function () {
        if(this.swithfalg){
            this.icons.style.right=-50+'px';
        }else {
            this.icons.style.right=0;
        }
    };
    this.iconbtnTanim=function () {
        this.iconbtnT.addEventListener('click',function () {
            this.indexs--;
            if(this.indexs<0){
                this.indexs=0;
            }
            this.changeColor();
            this.changeI();
            this.box.style.marginTop=-document.body.offsetHeight*this.indexs+'px';
            this.aTop();
            this.headanimation();
        }.bind(this),false)
    };
    this.iconbtnBanim=function () {
        this.iconbtnB.addEventListener('click',function () {
            this.indexs++;
            if(this.indexs>8){
                this.indexs=8;
            }
            this.changeColor();
            this.changeI();
            this.box.style.marginTop=-document.body.offsetHeight*this.indexs+'px';
            this.aTop();
            this.headanimation();
        }.bind(this),false);
    };
    this.windowsize=function () {
        let headerIs=this.headerI;
        let headerUl=this.headerUl;
        let indexs=this.indexs;
        let bigbox=this.bigbox;
        let Adjust=this.Adjust;
        window.onresize=function () {
            headerIs.style.left=headerUl.children[indexs].offsetLeft+'px';
            bigbox.style.width=document.body.offsetWidth+'px';
            bigbox.style.height=document.body.offsetHeight+'px';
            Adjust();
        };
    };
    this.Adjust=function () {
        let windwidth=document.body.offsetWidth;
        let windheight=document.body.offsetHeight;
        this.shufflingLong.style.width=windwidth*4+'px';
        this.shufflingLong.style.height=windheight+'px';
        [...this.boxs].forEach(function (obj) {
            obj.style.height=windheight+'px';
        },false);
        for(let i=0;i<this.shufflingimg.length;i++){
            this.shufflingimg[i].style.width=windwidth+'px';
            this.shufflingimg[i].style.height=windheight+'px';
        }
        if(320<document.body.offsetWidth&&document.body.offsetWidth<1080){
            this.hotvar=true;
        }else {
            this.hotvar=false;
        }
    }.bind(this);
    this.botonclick=function () {
        this.hotbtn.addEventListener('click',function () {
            if(this.hotfalg==0){
                this.nav.style.right=0;
                this.hotfalg=1;
            }else{
                this.nav.style.right=-75+'px';
                this.hotfalg=0;
            }
        }.bind(this),false);
    }
}


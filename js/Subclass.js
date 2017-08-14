/**
 * Created by Administrator on 2017/7/28.
 */
window.onload=function () {
    function Subclass() {
        Sumper.call(this);
        this.marginTop=function (event) {
                event = event || window.event;
                let eves=event.wheelDelta;
                if(eves<0){
                    this.add();
                    if(this.indexs<this.box.children.length-1){
                        this.indexs++;
                    }else {
                        return
                    }

                }else if(eves>0){
                    this.add();
                    if(this.indexs>0){
                        this.indexs--;
                    }else {
                        return
                    }

                }
                this.changeColor();
                if(this.indexs<8){
                    this.changeI(eves);
                }
                this.box.style.marginTop=-document.body.offsetHeight*this.indexs+'px';
                this.aTop();
                this.headanimation();
                this.removeWheel();
        }.bind(this);
        this.changehover=function () {
            this.headerUl.addEventListener('mouseover',function (e) {
                if(e.target.tagName=='LI'){
                    Array.prototype.slice.call(this.headerUl.children).forEach(function (obj) {
                        obj.style.color='#CCCCCC';
                    },false);
                    this.headerUl.children[this.indexs].style.color='#00DFB9';
                    e.target.style.color='#00DFB9';
                    let Iindex=Array.prototype.slice.call(this.headerUl.children).indexOf(e.target);

                    let posation=this.headerUl.children[Iindex].offsetLeft;
                    this.animationhover=function(){
                        if(this.headerI.style.left.slice(0,-2)-0>posation){
                            this.headerI.style.left=this.headerI.style.left.slice(0,-2)-0-6+'px';
                            if(this.headerI.style.left.slice(0,-2)-0-3<posation){
                                this.headerI.style.left=this.headerUl.children[Iindex].offsetLeft+'px';
                                return
                            }
                        }else if(this.headerI.style.left.slice(0,-2)-0<posation){
                            this.headerI.style.left=this.headerI.style.left.slice(0,-2)-0+6+'px';
                            if(this.headerI.style.left.slice(0,-2)-0+3>posation){
                                this.headerI.style.left=this.headerUl.children[Iindex].offsetLeft+'px';
                                return
                            }
                        }
                        requestAnimationFrame(this.animationhover);
                    }.bind(this);
                    requestAnimationFrame(this.animationhover);
                }
            }.bind(this),false);
            this.headerUl.addEventListener('mouseout',function (e) {
                if(e.target.tagName=='LI'){
                    Array.prototype.slice.call(this.headerUl.children).forEach(function (obj) {
                        obj.style.color='#CCCCCC';
                    },false);
                    this.headerUl.children[this.indexs].style.color='#00DFB9';
                    let Iindexs=Array.prototype.slice.call(this.headerUl.children).indexOf(e.target);
                    let posations=this.headerUl.children[this.indexs].offsetLeft;
                    this.animationss=function(){
                        if(this.headerUl.children[Iindexs].offsetLeft<posations){
                            this.headerI.style.left=this.headerI.style.left.slice(0,-2)-0+6+'px';
                            if(this.headerI.style.left.slice(0,-2)-0+3>posations){
                                this.headerI.style.left=this.headerUl.children[this.indexs].offsetLeft+'px';
                                return
                            }
                        }else if(this.headerUl.children[Iindexs].offsetLeft>posations){
                            this.headerI.style.left=this.headerI.style.left.slice(0,-2)-0-6+'px';
                            if(this.headerI.style.left.slice(0,-2)-0-3<posations){
                                this.headerI.style.left=this.headerUl.children[this.indexs].offsetLeft+'px';
                                return
                            }
                        }
                        requestAnimationFrame(this.animationss);
                    }.bind(this);
                    requestAnimationFrame(this.animationss);
                }
            }.bind(this),false);
            this.headerUl.addEventListener('click',function (e) {
                if(e.target.tagName=='LI'){
                    let Iindex=Array.prototype.slice.call(this.headerUl.children).indexOf(e.target);
                    this.indexs=Iindex;
                    this.box.style.marginTop=-document.body.offsetHeight*this.indexs+'px';
                    this.headanimation();
                    if(this.hotvar){
                        [...this.headerUl.children].forEach(function (obj) {
                            obj.style.background='#3A3A3A';
                        },false);
                        this.headerUl.children[this.indexs].style.background='#111111';
                    }
                }
            }.bind(this),false)
        };
        this.headanimation=function(){
            if(this.indexs!==0){
                this.header.style.background='rgba(0,0,0,.5)';
                this.loge.style.top=14+'px';
                this.loge.style.width=210+'px';
                this.nav.style.margin=`22px 0 0 85px`;
                this.hotline.style.top=`20px`;
                this.hotline.style.right=`185px`;
                for(let i=0;i<this.headerUl.children.length;i++){
                    this.headerUl.children[i].style.fontSize=`16px`;
                    this.headerUl.children[i].style.margin=`0 10px`;
                }
                this.headerI.style.width=`46px`;
                this.hotlinespan.style.fontSize=`20px`;
                this.hotlineI.style.top=`20px`;
                this.hotlineI.style.right=`195px`;
                if(this.hotvar){
                    this.hotbtn.style.top=18+'px';
                    this.nav.style.top=18+'px';
                }
            }else {
                this.header.style.background='transparent';
                this.loge.style.top=20+'px';
                this.loge.style.width=290+'px';
                this.nav.style.margin=`36px 0 0 110px`;
                this.hotline.style.top=`32px`;
                this.hotline.style.right=`215px`;
                for(let i=0;i<this.headerUl.children.length;i++){
                    this.headerUl.children[i].style.fontSize=`20px`;
                    this.headerUl.children[i].style.margin=`0 12px`;
                }
                this.headerI.style.width=`54px`;
                this.hotlinespan.style.fontSize=`26px`;
                this.hotlineI.style.top=`35px`;
                this.hotlineI.style.right=`230px`;
                if(this.hotvar){
                    this.hotbtn.style.top=34+'px';
                    this.nav.style.top=34+'px';
                }
            }
        }.bind(this);
        this.aTop=function(){
            this.box.addEventListener('webkitTransitionEnd',function () {
                if(this.indexs!==0){
                    this.a.style.top=-20+'px';
                }else {
                    this.a.style.top=85+'px';
                }
            }.bind(this),false)
        };
    }
    Subclass.prototype=Object.create(Sumper.prototype);
    var bigbox=document.getElementsByClassName('bigbox')[0];
    var a=document.getElementsByClassName('a')[0];
    var frouBox=document.getElementsByClassName('frou-box')[0];
    var frouDiv=document.getElementsByClassName('frou-div')[0];
    var headerUl=document.getElementsByClassName('header-ul')[0];
    var headerI=document.getElementsByClassName('header-i')[0];
    var header=document.getElementsByTagName('header')[0];
    var loge=document.getElementsByClassName('loge')[0];
    var nav=document.getElementsByTagName('nav')[0];
    var hotline=document.getElementsByClassName('hotline')[0];
    var hotlinespan=document.getElementsByClassName('hotlinespan')[0];
    var hotlineI=document.getElementsByClassName('hotlineI')[0];
    var shufflingLong=document.getElementsByClassName('shuffling-long')[0];
    var shufflingLines=document.getElementsByClassName('shufflinglines')[0];
    var shufflinglineyuan=document.getElementsByClassName('shufflinglineyuan')[0];
    var sevenboxwenbig=document.getElementsByClassName('sevenboxwenbig')[0];
    var sevenboxul=document.getElementsByClassName('sevenboxul')[0];
    var sevenboxkuai=document.getElementsByClassName('sevenboxkuai')[0];
    var swith=document.getElementsByClassName('swith')[0];
    var icons=document.getElementsByClassName('icons')[0];
    var iconbtnT=document.getElementsByClassName('iconbtnT')[0];
    var iconbtnB=document.getElementsByClassName('iconbtnB')[0];
    var shufflingimg=document.getElementsByClassName('shuffling-img');
    var box=document.getElementsByClassName('box');
    var hotbtn=document.getElementsByClassName('hotbtn')[0];
    var boxthreeleft=document.getElementsByClassName('box-threeleft')[0];
    var boxthreeright=document.getElementsByClassName('box-threeright')[0];
    var boxthreecontion=document.getElementsByClassName('box-three-contion')[0];
    var fiveboxleft=document.getElementsByClassName('fiveboxleft')[0];
    var fiveboxright=document.getElementsByClassName('fiveboxright')[0];
    var fiveboxcontc=document.getElementsByClassName('fiveboxcontc')[0];
    var project=new Subclass();
    headerI.style.left=headerUl.children[0].offsetLeft-4+'px';
    project.initial(bigbox,a,header,frouBox,frouDiv,headerUl,headerI,loge,nav,hotline,hotlinespan,hotlineI,shufflingLong,shufflingLines,shufflinglineyuan,sevenboxwenbig,sevenboxul,sevenboxkuai,swith,icons,iconbtnT,iconbtnB,bigbox,shufflingimg,box,hotbtn,boxthreeleft,boxthreeright,boxthreecontion,fiveboxleft,fiveboxright,fiveboxcontc);
    project.height();
    project.wheel();
    project.sliding();
    project.slidingout();
    project.changeColor();
    project.changehover();
    project.setshufflingLongs();
    project.shufflingColor();
    project.shufflinglineyuans();
    project.shufflingHover();
    project.setsevenboxwenbigchange();
    project.sevenboxulhover();
    project.swithclick();
    project.iconbtnTanim();
    project.iconbtnBanim();
    project.windowsize();
    project.Adjust();
    project.botonclick();
    project.boxthreelefts();
    project.boxthreerights();
    project.fiveboxlefts();
    project.fiveboxrights();
};



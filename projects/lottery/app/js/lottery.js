import 'babel-ployfill';
import Base from './lottery/base';
import Timer from './lottery/timer';
import Interface from './lottery/interface';
import Calculate from './lottery/calculate';
import $ from 'jquery';

const copyProperties=function(target,source){
  for(let key of Reflect.ownKeys(source)){
    //prototype属性下包含很多方法或属性，不能一次复制
    if(key!=='constructor'&& key!=='prototype' && key!=='name'){
      //获取源对象上属性的描述
      let desc=Object.getOwnPropertyDescriptor(source,key);
      //将源对象上属性的描述定义到目标对象上
      Object.defineProperty(target,key,desc);
    }
  }
}

const mix=function(...mixins){
  class Mix{};
  for(let mixin of mixins){
    copyProperties(Mix,mixin);
    copyProperties(Mix.prototype,mixin.prototype);
  }
  return Mix;
}

class lottery extends mix(Base,Timer,Calculate,Interface){
  constructor(name='ecf',cname='11选5',issue='**',state='**'){
    super();
    this.name=name;
    this.cname=cname;
    this.issue=issue;
    this.state=state;
    this.el='';
    //遗漏数据，开奖号码，开奖号码列表，玩法列表，供选号码列表的数据结构
    this.omit=new Map();
    this.open_code=new Set();
    this.open_code_list=new Set();
    this.play_list=new Map();
    this.number=new Set();
    //触发事件DOM元素的id、class
    this.issue_el='#curr_issue';
    this.countdown_el='#countdown';
    this.state_el='.state_el';
    this.cart_el='.codelist';
    this.omit_el='';
    this.cur_play='r5';
    this.initPlayList();
    this.initNumber();
    this.updateState();//更新状态
    this.initEvent();//触发点击事件
  }

  /**
   * 
   * [更新状态]
   * @memberof lottery
   */
  updateState(){
    let self=this;
    this.getState().then(function(){
      self.issue=res.issue;
      self.end_time=res.end_time;
      self.state=res.state;
      $(self.issue_el).text(res.issue);
      self.countdown(res.end_time,function(time){//更新倒计时的时间
        $(self.countdown_el).html(time)
      },function(){
        setTimeout(function(){//倒计时结束，就更新状态
          self.updateState();
        },500)
      })
    })
  }

  /**
   * 
   * [初始化事件]
   * @memberof lottery
  */
  initEvent(){
    let self=this;
    $('#plays').on('click','li',self.changePlayNav.bind(self));
    $('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));
    $('#confirm_sel_code').on('click',self.addCode.bind(self));
    $('.dxjo').on('click','li',self.assistHandle.bind(self));
    $('.qkmethod').on('click','.btn-middle',self.getRandomCode.bind(self));
  }
}
export default Lottery
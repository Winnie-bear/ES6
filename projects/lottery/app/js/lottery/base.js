import $ from 'jquery';
class Base{
  /**
   * 
   * [initPlayList 初始化奖金、玩法和说明]
   * @memberof Base
   */
  initPlayList(){
    //play_list是map结构
    this.play_list.set('r2',{
      bonus:6,
      tip:'从01～11中任选2个或多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em class="red">6</em>元',
      name:'任二'
    })
    .set('r3',{
      bonus:19,
      tip:'从01～11中任选3个或多个号码，选号与奖号任意三个号相同，即中奖<em class="red">19</em>元',
      name:'任三'
    })
    .set('r4',{
      bonus:78,
      tip:'从01～11中任选4个或多个号码，所选号码与开奖号码任意四个号码相同，即中奖<em class="red">78</em>元',
      name:'任四'
    })
    .set('r5',{
      bonus:540,
      tip:'从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
      name:'任五'
    })
    .set('r6',{
      bonus:90,
      tip:'从01～11中任选6个或多个号码，所选号码与开奖号码五个号码相同，即中奖<em class="red">90</em>元',
      name:'任六'
    })
    .set('r7',{
      bonus:26,
      tip:'从01～11中任选7个或多个号码，选号与奖号五个号相同，即中奖<em class="red">26</em>元',
      name:'任七'
    })
    .set('r8',{
      bonus:9,
      tip:'从01～11中任选8个或多个号码，选号与奖号五个号相同，即中奖<em class="red">9</em>元',
      name:'任八'
    })
  }

  /**
   * 
   * [initNumber 初始化号码]
   * @memberof Base
   */
  initNumber(){
    for(let i=1;i<12;i++){
      //number是set结构，向 Set 加入值的时候，不会发生类型转换
      this.number.add((''+i).padStart(2,'0'));
    }
  }

  /**
   * 
   * [setOmit 设置遗漏数据]
   * @param {map} omit 
   * @memberof Base
  */
  setOmit(omit){
    let self=this;
    self.omit.clear();
    for(let [index,item] of omit.entries()){
      self.omit.set(index,item);
    }
    $(self.omit_el).each(function(index,item){
      $(item).text(self.omit.get(index));
    });
  }

  /**
   * 
   * [setOpenCode 设置开奖号码]
   * @param {set} code 
   * @memberof Base
   */
  setOpenCode(code){
    let self=this;
    self.open_code.clear();//清除之前的开奖号码
    for(let item of code.values()){
      self.open_code.add(item);
    }
    self.updateOpenCode && self.updateOpenCode.call(self,code);
  }

  /**
   * 
   * [切换号码的选中状态]
   * @param {any} e 
   * @memberof Base
   */
  toggleCodeActive(e){
    let self=this;
    let $cur=$(e.currentTarget);
    $cur.toggleClass('btn-boll-active');
    self.getCount();
  }

  /**
   * 
   * [切换玩法]
   * @param {any} e 
   * @memberof Base
   */
  changePlayNav(e){
    let self=this;
    let $cur=$(e.currentTarget);
    //当前点击对象高亮，其他对象取消高亮
    $cur.addClass('active').siblings().removeClass('active');
    self.cur_play=$cur.attr('desc').toLocaleLowerCase();
    //修改tip
    $('#zx_sm span').html(self.play_list.get(self.cur_play).tip);
    //切换玩法后上一次选中号码状态要清空
    $('.boll-list .btn-boll').removeClass('btn-boll-active');
    self.getCount();
  }

  /**
   * 
   * [操作区 全、大、小、奇、偶]
   * @param {any} e 
   * @memberof Base
   */
  assistHandle(e){
    e.preventDefault();
    let self=this;
    let $cur=$(e.currentTarget);
    let index=$cur.index();
    $('.boll-list .btn-boll').removeClass('btn-boll-active');
    if(index===0){
      $('.boll-list .btn-boll').addClass('btn-boll-active');
    }
    if(index===1){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent-5>0){
          $(t).addClass('btn-boll-active')
        }
      })
    }
    if(index===2){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent-6<0){
          $(t).addClass('btn-boll-active')
        }
      })
    }
    if(index===3){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent%2==1){
          $(t).addClass('btn-boll-active')
        }
      })
    }
    if(index===4){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent%2==0){
          $(t).addClass('btn-boll-active')
        }
      })
    }
    self.getCount();
  }

  /**
   * 
   *[获取当前彩票名称] 
   * @memberof Base
  */
  getName(){
    return this.name;
  }

  /**
   * 
   * [添加号码]
   * @memberof Base
   */
  addCode(){
    let self=this;
    //选中号码的字符串数组
    let $active=$('.boll-list .btn-boll-active').text().match(/\d{2}/g);
    let active=$active?$active.length:0;
    //计算选中号码产生的注数
    let count=self.computeCount(active,self.cur_play);
    if(count){
      self.addCodeItem($active.join(''),self.cur_play,self.play_list.get(self.cur_play).name,count);
    }
  }


  /**
   * 
   * [单次添加]
   * @param {string} code [选中号码字符串] 
   * @param {string} type [玩法的英文标识，如r2]
   * @param {string} typeName [玩法的中文名称，如任二]
   * @param {number} count [产生的注数]
   * @memberof Base
   */
  addCodeItem(code,type,typeName,count){
    let self=this;
    const tpl=`
    <li codes="${type}|${code}" bonus="${count*2}" count="${count}">
      <div class="code">
        <b>${typeName}${count>1?'复式':'单式'}</b>
        <b class="em">${code}</b>
        [${count}注,<em class="code-list-money">${count*2}</em>元]
      </div>
    </li>
    `;
    $(self.cart_el).append(tpl);
    //每添加一项，重新计算总额
    self.getTotal();
  }

  /**
   * 
   * [计算单次选号的注数、价格、奖金、盈利或亏损]
   * @memberof Base
  */
  getCount(){
    let self=this;
    let active=$('.boll-list .btn-boll-active').length;
    let count=self.computeCount(active,self.cur_play);
    let range=self.computeBonus(active,self.cur_play);//返回值是一个数组
    //价格(本金),一注2元
    let money=count*2;
    //盈利或亏损
    let win1=range[0]-money;
    let win2=range[1]-money;
    let c1=(win1<0&&win2<0)?Math.abs(win1):win1;
    let c2=(win1<0&&win2<0)?Math.abs(win2):win2;
    let tpl;
    if(count===0){
      tpl=`您选了 <b class="red">${count}</b> 注，共 <b class="red">${count*2}</b> 元`
    }else if(range[0]===range[1]){
      tpl=`您选了 <b>${count}</b> 注，共 <b>${count*2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 元，
			您将${win1>=0?'盈利':'亏损'}
			<strong class="${win1>=0?'red':'green'}">${Math.abs(win1)} </strong> 元</em>`
    }else{
      tpl=`您选了 <b>${count}</b> 注，共 <b>${count*2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 至 <strong class="red">${range[1]}</strong> 元，
			您将${(win1<0&&win2<0)?'亏损':'盈利'}
			<strong class="${win1>=0?'red':'green'}">${c1} </strong>
			至 <strong class="${win2>=0?'red':'green'}"> ${c2} </strong>
			元</em>`
    }
    $('.sel_info').html(tpl);
  }

  /**
   * 
   * [计算购物车处的总金]
   * @memberof Base
  */
  getTotal(){
    let count=0;
    //遍历li标签，获取上面的count属性值
    $('.codelist li').each(function(index,item){
      count+=$(item).attr('count')*1;
    });
    $('#count').text(count);
    $('#money').text(count*2);
  }

  /**
   * 
   * [生成随机数]
   * @param {number} playNum [任二、任三...规定一注的个数]
   * @memberof Base
   */
  getRandom(playNum){
    let arr=[],index;//存放指定个数的随机数
    //将存放01-11的set结构变为数组结构
    let number=Array.from(this.number);
    while(playNum--){
      //产生0-10的随机下标
      index=Number.parseInt(Math.random()*number.length);
      arr.push(number[index]);
      //选过的号码，不能重复选取
      number.splice(index,1);
    }
    return arr.join(' ');
  }

  /**
   * 
   * [添加随机生成的号码  如机选1注]
   * @param {any} e 
   * @memberof Base
  */
  getRandomCode(e){
    e.preventDefault();
    let self=this;
    //机选n注，num表示n
    let num=e.currentTarget.getAttribute('count');
    //玩法个数
    let play=self.cur_play.match(/\d+/g)[0];
    if(num==='0'){
      $(self.cart_el).html('')
    }else{
      for(let i=0;i<num;i++){
        self.addCodeItem(self.getRandom(play),self.cur_play,self.play_list.get(self.cur_play).name,1);
      }
    }
  }
}

export default Base
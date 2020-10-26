// pages/matrix/matrix.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      mj_for:[],
      wmk_for:[],
      mjhb_for:[],
      yhsp_for:[],
      row:0,
      column:0,
      delivery:0,
      origin_matrix:'',
      trans_matrix:'',
      inverse_matrix:'',
      detaminate:0,
      power_matrix:'',
      teat_matrix:'',
      checked:false,
      mincost:0,
      yj:0,
      maxdiscount:10,
      digitIndex: 0,
      minresult:"",
      maxresult:"",
      wmkdigit:0,
      mjhbdigit:0,
      yhspdigit:0
    },
  
    dInput:function(e){
      this.data.delivery=e.detail.detail.value
  
    },
    wmk1Input:function(e){
      this.data.wmk_for[e.currentTarget.dataset.index]=e.detail.detail.value
  
    },
    mInput:function(e){
      this.data.mj_for[e.currentTarget.dataset.index].m=e.detail.detail.value
  
  
    },
    
    jInput:function(e){
      
      this.data.mj_for[e.currentTarget.dataset.index].j=e.detail.detail.value
  
    },
    bmInput:function(e){
      this.data.mjhb_for[e.currentTarget.dataset.index].m=e.detail.detail.value
  
    },
    
    bjInput:function(e){
      
      this.data.mjhb_for[e.currentTarget.dataset.index].j=e.detail.detail.value
  
    },
    yjInput:function(e){
      this.data.yhsp_for[e.currentTarget.dataset.index].yj=e.detail.detail.value
  
    },
    
    xjInput:function(e){
      
      this.data.yhsp_for[e.currentTarget.dataset.index].xj=e.detail.detail.value
  
    },

    mjInput:function(e){
      
      var length=this.data.mj_for.length;
      var tmp=this.data.mj_for;
      if (length<e.detail.value)
      for(var i=length;i<e.detail.value;i++)
      {
        tmp[i]={"m":0,"j":0}
      }
      else 
      {
        tmp=tmp.slice(0,e.detail.value)
      }
      this.setData({
       mj_for:tmp,
       digitIndex:e.detail.value
      })
    },
    wmkInput:function(e){
      
      var length=this.data.wmk_for.length;
      var tmp=this.data.wmk_for;
      if (length<e.detail.value)
      for(var i=length;i<e.detail.value;i++)
      {
        tmp[i]=0
      }
      else 
      {
        tmp=tmp.slice(0,e.detail.value)
      }
      this.setData({
      wmk_for:tmp,
      wmkdigit:e.detail.value
      })
    },
    mjhbInput:function(e){
      
      var length=this.data.mjhb_for.length;
      var tmp=this.data.mjhb_for;
      if (length<e.detail.value)
      for(var i=length;i<e.detail.value;i++)
      {
        tmp[i]={"m":0,"j":0}
      }
      else 
      {
        tmp=tmp.slice(0,e.detail.value)
      }
      this.setData({
       mjhb_for:tmp,
       mjhbdigit:e.detail.value
      })
    },
    yhspInput:function(e){
      
      var length=this.data.yhsp_for.length;
      var tmp=this.data.yhsp_for;
      if (length<e.detail.value)
      for(var i=length;i<e.detail.value;i++)
      {
        tmp[i]={"yj":0,"xj":0}
      }
      else 
      {
        tmp=tmp.slice(0,e.detail.value)
      }
      this.setData({
       yhsp_for:tmp,
       yhspdigit:e.detail.value
      })
    },
    mincost:function(){
      var m=0;
      var j=0;
      var bm=0;
      var bj=0;
      var min=9999;
      var result1="";
      var result2="";
      var wmk_for=this.data.wmk_for;
      var mjhb_for=this.data.mjhb_for;
      var mj_for=this.data.mj_for;
      var yhsp_for=this.data.yhsp_for;
      var result="";
      for(var i in mj_for)
      {
        result1="";
        result2="";
        var tmp1=Number(mj_for[i].m)-Number(mj_for[i].j);
        result1="为达到最少开销我们需至少购买"+mj_for[i].m+"元外卖"

        var tmp2=tmp1;
        for(var i2 in mjhb_for)
        { 
          if(Number(mjhb_for[i2].m)>Number(tmp1))
          continue
          else tmp2=tmp1-Number(mjhb_for[i2].j);
          if (tmp2<min)
          {
            result2=",使用满"+mjhb_for[i2].m+"减"+mjhb_for[i2].j+"优惠券"
            min=tmp2;
            m=mj_for[i].m;
            j=mj_for[i].j;
            bm=mjhb_for[i2].m;
            bj=mjhb_for[i2].j;
            result=result1+result2;
          }
        }

        if (tmp2<min)
          {
            min=tmp2;
            m=mj_for[i].m;
            j=mj_for[i].j;
            result=result1+result2;
          }
      }
      for(var i in yhsp_for)
      {
        result1="";
        result2="";
        var tmp1=Number(yhsp_for[i].xj);
        result1="为达到最少开销我们需点现价"+yhsp_for[i].xj+"元的套餐";
        var tmp2=tmp1;
        for(var i2 in mjhb_for)
        {
          if(Number(mjhb_for[i2].m)>Number(tmp1))
          continue
          else tmp2=tmp1-Number(mjhb_for[i2].j);
          if (tmp2<min)
          {
            result2=",使用满"+mjhb_for[i2].m+"减"+mjhb_for[i2].j+"优惠券";
            min=tmp2;
            m=yhsp_for[i].yj;
            j=yhsp_for[i].xj;
            bm=mjhb_for[i2].m;
            bj=mjhb_for[i2].j;
            result=result1+result2;
          }
        }

        if (tmp2<min)
          {
            min=tmp2;
            m=yhsp_for[i].yj;
            j=yhsp_for[i].xj;
            result=result1+result2;
          }
      }
      if(wmk_for.length!=0)
      { result+=",将"
        for(var i1 in wmk_for)
        {min-=Number(wmk_for[i1]);
        result+=wmk_for[i1]+"元 "
        }
        result+="红包全部使用"
      }
      this.setData({"mincost":min+Number(this.data.delivery),"yj":m,minresult:result})
    },
    maxdiscount:function(){
      var m=0;
      var j=0;
      var bm=0;
      var bj=0;
      var min=9999;
      var result1="";
      var result2="";
      var wmk_for=this.data.wmk_for;
      var mjhb_for=this.data.mjhb_for;
      var mj_for=this.data.mj_for;
      var yhsp_for=this.data.yhsp_for;
      var result="";
      for(var i in mj_for)
      { 
        result1="";
        result2="";
        var tmp1=Number(mj_for[i].m)-Number(mj_for[i].j);
        result1="为达到最大折扣我们需至少购买"+mj_for[i].m+"元外卖";
        var tmp2=tmp1;
        for(var i2 in mjhb_for)
        {
          if(Number(mjhb_for[i2].m)>Number(tmp1))
          continue
          else tmp2=tmp1-Number(mjhb_for[i2].j);
          if (tmp2<min*Number(mj_for[i].m))
          {
            result2=",使用满"+mjhb_for[i2].m+"减"+mjhb_for[i2].j+"优惠券";
            min=tmp2/Number(mj_for[i].m);
            m=mj_for[i].m;
            j=mj_for[i].j;
            bm=mjhb_for[i2].m;
            bj=mjhb_for[i2].j;
            result=result1+result2;
          }
        }

        if (tmp2<min*Number(mj_for[i].m))
          {
            min=tmp2/Number(mj_for[i].m);
            m=mj_for[i].m;
            j=mj_for[i].j;
            result=result1+result2;
          }
      }
      for(var i in yhsp_for)
      {
        result1="";
        result2="";
        var tmp1=Number(yhsp_for[i].xj);
        result1="为达到最大折扣我们需点"+yhsp_for[i].xj+"元的套餐";
        var tmp2=tmp1;
        for(var i2 in mjhb_for)
        {
          if(Number(mjhb_for[i2].m)>Number(tmp1))
          continue
          else tmp2=tmp1-Number(mjhb_for[i2].j);
          if (tmp2<min*Number(yhsp_for[i].yj))
          {
            result2=",使用满"+mjhb_for[i2].m+"减"+mjhb_for[i2].j+"优惠券";
            min=tmp2/Number(yhsp_for[i].yj);
            m=yhsp_for[i].yj;
            j=yhsp_for[i].xj;
            bm=mjhb_for[i2].m;
            bj=mjhb_for[i2].j;
            result=result1+result2;
          }
        }

        if (tmp2<min*Number(yhsp_for[i].yj))
          {
            min=tmp2/Number(yhsp_for[i].yj);
            m=yhsp_for[i].yj;
            j=yhsp_for[i].xj;
            result=result1+result2;
          }
      }
      if(wmk_for.length!=0)
      { result+=",将"
        min=min*m;
        for(var i1 in wmk_for)
        {min-=Number(wmk_for[i1]);
        result+=wmk_for[i1]+"元 "
        }
        min=min/m;
        result+="红包全部使用"
      }
      this.setData({"maxdiscount":(m*min+Number(this.data.delivery))/m,"yj":m,"maxresult":result})
    }
  
  
  
  
  })
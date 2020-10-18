// pages/matrix/matrix.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      dp_for:[],
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

    },
  
    dInput:function(e){
      this.data.delivery=e.detail.value
  
    },
    wmk1Input:function(e){
      this.data.wmk_for[Number(e.currentTarget.dataset.index)]=e.detail.value
  
    },
    mInput:function(e){
      this.data.dp_for[e.currentTarget.dataset.dpindex].mj_for[Number(e.currentTarget.dataset.index)].m=e.detail.value
  
    },
    
    jInput:function(e){
      
      this.data.dp_for[e.currentTarget.dataset.dpindex].mj_for[Number(e.currentTarget.dataset.index)].j=e.detail.value
  
    },
    bmInput:function(e){
      this.data.dp_for[e.currentTarget.dataset.dpindex].mjhb_for[Number(e.currentTarget.dataset.index)].m=e.detail.value
  
    },
    
    bjInput:function(e){
      
      this.data.dp_for[e.currentTarget.dataset.dpindex].mjhb_for[Number(e.currentTarget.dataset.index)].j=e.detail.value
  
    },
    yjInput:function(e){
      this.data.yhsp_for[Number(e.currentTarget.dataset.index)].yj=e.detail.value
  
    },
    
    xjInput:function(e){
      
      this.data.yhsp_for[Number(e.currentTarget.dataset.index)].xj=e.detail.value
  
    },
    dpInput:function(e){
      
      var length=this.data.dp_for.length;
      var tmp=this.data.dp_for;
      if (length<Number(e.detail.value))
      for(var i=length;i<Number(e.detail.value);i++)
      {
        tmp[i]={"mj_for":[],"mjhb_for":[]}
      }
      else 
      {
        tmp=tmp.slice(0,Number(e.detail.value))
      }
      this.setData({
       dp_for:tmp
      })
    },
    mjInput:function(e){
      
      var length=this.data.dp_for[Number(e.currentTarget.dataset.dpindex)].mj_for.length;
      var tmp=this.data.dp_for[Number(e.currentTarget.dataset.dpindex)].mj_for;
      if (length<Number(e.detail.value))
      for(var i=length;i<Number(e.detail.value);i++)
      {
        tmp[i]={"m":0,"j":0}
      }
      else 
      {
        tmp=tmp.slice(0,Number(e.detail.value))
      }
      this.data.dp_for[Number(e.currentTarget.dataset.dpindex)].mj_for=tmp;
      this.setData({
        dp_for:this.data.dp_for
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
        tmp=tmp.slice(0,e.detail.value-1)
      }
      this.setData({
      wmk_for:tmp
      })
    },
    mjhbInput:function(e){
      
      var length=this.data.dp_for[Number(e.currentTarget.dataset.dpindex)].mjhb_for.length;
      var tmp=this.data.dp_for[Number(e.currentTarget.dataset.dpindex)].mjhb_for;
      if (length<Number(e.detail.value))
      for(var i=length;i<Number(e.detail.value);i++)
      {
        tmp[i]={"m":0,"j":0}
      }
      else 
      {
        tmp=tmp.slice(0,Number(e.detail.value))
      }
      this.data.dp_for[Number(e.currentTarget.dataset.dpindex)].mjhb_for=tmp;
      this.setData({
        dp_for:this.data.dp_for
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
        tmp=tmp.slice(0,e.detail.value-1)
      }
      this.setData({
       yhsp_for:tmp
      })
    },
    mincost:function(){
      var m=0;
      var j=0;
      var bm=0;
      var bj=0;
      var min=9999;
      var wmk_for=this.data.wmk_for;
      var mjhb_for=this.data.mjhb_for;
      var mj_for=this.data.mj_for;
      var yhsp_for=this.data.yhsp_for;
      for(var i in mj_for)
      {
        var tmp1=Number(mj_for[i].m)-Number(mj_for[i].j)+Number(this.data.delivery);
        for(var i1 in wmk_for)
        tmp1-=Number(wmk_for[i1]);
        var tmp2=tmp1;
        for(var i2 in mjhb_for)
        {
          if(Number(mjhb_for[i2].m)>Number(mj_for[i].m))
          continue
          else tmp2=tmp1-Number(mjhb_for[i2].j);
          if (tmp2<min)
          {
            min=tmp2;
            m=mj_for[i].m;
            j=mj_for[i].j;
            bm=mjhb_for[i2].m;
            bj=mjhb_for[i2].j;
          }
        }
        if (tmp1<min)
          {
            min=tmp1;
            m=mj_for[i].m;
            j=mj_for[i].j;
          }
      }
      for(var i in yhsp_for)
      {
        var tmp1=Number(yhsp_for[i].xj)+Number(this.data.delivery);
        for(var i1 in wmk_for)
        tmp1-=Number(wmk_for[i1]);
        var tmp2=tmp1;
        for(var i2 in mjhb_for)
        {
          if(Number(mjhb_for[i2].m)>Number(yhsp_for[i].yj))
          continue
          else tmp2=tmp1-Number(mjhb_for[i2].j);
          if (tmp2<min)
          {
            min=tmp2;
            m=yhsp_for[i].yj;
            j=yhsp_for[i].xj;
            bm=mjhb_for[i2].m;
            bj=mjhb_for[i2].j;
          }
        }
        if (tmp1<min)
          {
            min=tmp1;
            m=yhsp_for[i].yj;
            j=yhsp_for[i].xj;
          }
      }
      this.setData({"mincost":min,"yj":m})
    },
    maxdiscount:function(){
      var m=0;
      var j=0;
      var bm=0;
      var bj=0;
      var min=9999;
      var wmk_for=this.data.wmk_for;
      var dp_for=this.data.dp_for;
      var yhsp_for=this.data.yhsp_for;
      for(var k in dp_for)
      {
              var mjhb_for=dp_for[k].mjhb_for;
              var mj_for=dp_for[k].mj_for;
              for(var i in mj_for)
              {
                var tmp1=Number(mj_for[i].m)-Number(mj_for[i].j)+Number(this.data.delivery);
                for(var i1 in wmk_for)
                tmp1-=Number(wmk_for[i1]);
                var tmp2=tmp1;
                for(var i2 in mjhb_for)
                {
                  if(Number(mjhb_for[i2].m)>Number(mj_for[i].m))
                  continue
                  else tmp2=tmp1-Number(mjhb_for[i2].j);
                  if (tmp2<min*Number(mj_for[i].m))
                  {
                    min=tmp2/Number(mj_for[i].m);
                    m=mj_for[i].m;
                    j=mj_for[i].j;
                    bm=mjhb_for[i2].m;
                    bj=mjhb_for[i2].j;
                  }
                }
                if (tmp1<min*Number(mj_for[i].m))
                  {
                    min=tmp1/Number(mj_for[i].m);
                    m=mj_for[i].m;
                    j=mj_for[i].j;
                  }
              }
              for(var i in yhsp_for)
              {
                var tmp1=Number(yhsp_for[i].xj)+Number(this.data.delivery);
                for(var i1 in wmk_for)
                tmp1-=Number(wmk_for[i1]);
                var tmp2=tmp1;
                for(var i2 in mjhb_for)
                {
                  if(Number(mjhb_for[i2].m)>Number(yhsp_for[i].yj))
                  continue
                  else tmp2=tmp1-Number(mjhb_for[i2].j);
                  if (tmp2<min*Number(yhsp_for[i].yj))
                  {
                    min=tmp2/Number(yhsp_for[i].yj);
                    m=yhsp_for[i].yj;
                    j=yhsp_for[i].xj;
                    bm=mjhb_for[i2].m;
                    bj=mjhb_for[i2].j;
                  }
                }
                if (tmp1<min)
                  {
                    min=tmp1/Number(yhsp_for[i].yj);
                    m=yhsp_for[i].yj;
                    j=yhsp_for[i].xj;
                  }
              }
      }
      this.setData({"maxdiscount":min,"yj":m})
    }
  
  
  
  
  })
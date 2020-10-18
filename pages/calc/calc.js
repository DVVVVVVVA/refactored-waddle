Page({
  data:{
    idb:"back",
    idc:"clear",
    idt:"toggle",
    idadd:"+",
    idm:"more",
    idlog2:"log2(",
    idlog10:"log10(",
    idsq:"sqrt(",
    idee:"e",
    idpi:"PI",
    idans:"ans",
    idln:"ln(",
    idsin:"sin(",
    idcos:"cos(",
    idtan:"tan(",
    idasin:"asin(",
    idacos:"acos(",
    idatan:"atan(",
    idexp:"exp(",
    idsqrt:"sqrt(",
    idfabs:"fabs(",
    idfpr:"fprecise(",
    id9:"9",
    id8:"8",
    id7:"7",
    idj:"-",
    id6:"6",
    id5:"5",
    id4:"4",
    idx:"×",
    id3:"3",
    id2:"2",
    id1:"1",
    iddiv:"÷",
    id0:"0",
    idd:".",
    ide:"＝",
    idjc:"!",
    idy:"%",
    idf:"^",
    idlk:"(",
    idrk:")",
    navState:0,
    precise:-1,
    screenData:"0",
    operaSymbo:{"+":"+","-":"-","×":"*","÷":"/",".":"."},
    lastIsOperaSymbo:false,
    iconType:'waiting_circle',
    iconColor:'white',
    mark:true,
    caled:false,
    arr:[],
    logs:[],
    av:[],
    preans:""
  },
  bindchange(e){
      let index=e.detail.current;
      this.setData({
          navState:index
      })
  },
  navSwitch:function(e){
      let index=(this.data.navState+1)%3;
      this.setData({
          navState:index
      })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  roundFun:function(value, n) {
    return Math.round(value*Math.pow(10,n))/Math.pow(10,n);
  },
  clickBtn:function(event){
    var id = event.target.id;
    if(id == this.data.idb)
    {  //退格←
      var data = this.data.screenData;
      if(data == "0"){
          return;
      }
      data = data.substring(0,data.length-1);
      if(data == "" || data == "-"){
          data = 0;
      }
      this.setData({"screenData":data,"lastIsOperaSymbo":false,"caled":false});
      this.data.arr.pop();
    }
    else if(id == this.data.idc)
    {  //清屏C
      this.setData({"screenData":"0","caled":false});
      this.data.arr= "";
    }
    else if(id == this.data.idt)
    {  //正负号+/-
      this.setData({"caled":false});  
      var data = this.data.screenData;
      if(data.length <3){
        if(data[0]!="-")
        {
          data="-"+data;
          this.data.arr=data;
          this.setData({"screenData":data});
          return;
        }
        else 
        {data=data.substr(1,data.length-1);
         this.data.arr=data;
         this.setData({"screenData":data});
         return;
        }
      }
      for(var i=this.data.screenData.length-3;i>=0;i--)
      {var firstWord = data[i];
       var secondWord=data[i+1];
       var thirdWord=data[i+2];
      if((firstWord== "-"||(firstWord=='+')||(firstWord=='-')||(firstWord=='(')
      ||(firstWord=='×')||(firstWord==' ÷')||(firstWord=='^'))&&secondWord=="-"&&((thirdWord>="0"&&thirdWord<="9")||(thirdWord>="a"&&thirdWord<="z")||thirdWord=="."||(thirdWord>="A"&&thirdWord<="Z")))
      {
        data = data.substr(0,i+1)+data.substr(i+2,data.length-i-2)
        this.data.arr=data;
      }
      else if(secondWord== "-"||(secondWord=='+')||(secondWord=='-')||(secondWord=='(')
      ||(secondWord=='×')||(secondWord==' ÷')||(secondWord=='^'))
      {
        data = data.substr(0,i+2)+"-"+data.substr(i+2,data.length-i-2)
        this.data.arr=data;
      }
      else if(i==0)
      {
        if(data[0]!="-")
        {
          data="-"+data;
          this.data.arr=data;
          this.setData({"screenData":data});
          return;
        }
        else 
        {data=data.substr(1,data.length-1);
         this.data.arr=data;
         this.setData({"screenData":data});
         return;
        }
      }
      else continue;
      this.setData({"screenData":data});
      return;
    }
    }else if(id == this.data.ide){  //等于＝
      var data = this.data.screenData;
      if(data == "0"){
          return;
      }
      //eval是js中window的一个方法，而微信页面的脚本逻辑在是在JsCore中运行，JsCore是一个没有窗口对象的环境，所以不能再脚本中使用window，也无法在脚本中操作组件                 
      //var result = eval(newData);           
      
      var lastWord = data.charAt(data.length);
      if(isNaN(lastWord)){
        return;
      }

      var num = "";

      var lastOperator = "";
      var arr = this.data.arr;
      var optarr = [];
      for(var i in arr){
        if(isNaN(arr[i]) == false || arr[i] == this.data.idd || arr[i] == this.data.idt){
          num += arr[i];
        }else{
          lastOperator = arr[i];
          optarr.push(num);
          optarr.push(arr[i]);
          num = "";
        }
      }
      optarr.push(Number(num));
      var result = Number(optarr[0])*1.0;
      console.log(result);
      //存储历史记录
      //1
      if(this.data.screenData.substr(0,9)=="fprecise("){
        var num=this.data.screenData.substr(9,);    
        if(num[0]>='0'&&num[0]<='9'){
            var p = Number(num[0]);
            if(p.toFixed(0)==p){
            this.data.precise = p;
            //cout<<"输出精度设置成功"<<endl;
            //cout<<endl;
            }else{
            precise=-1;
            //cout<<"精度为正整数"<<endl;
            //cout<<endl;
            }
        }else
        {
            precise=-1;
            //cout<<"精度为正整数"<<endl;
            //cout<<endl;
        }
        this.setData({"screenData":"0"});
        this.data.arr= "";
    }
      for(var i=0;i<data.length;i++){
        if((data[i]=='e')&&(data[i+1]==null||(data[i+1]<'0'||data[i+1]>'9')&&
           (data[i+1]<'a'||data[i+1]>'z'))&&(data[i-1]==null||(data[i-1]<'0'||data[i-1]>'9')
           &&(data[i-1]<'a'||data[i-1]>'z'))){
            data=data.substr(0,i)+"2.718281828459045"+data.substr(i+1,data.length-i-1);
           }
        if((data[i]=='P')&&(data[i+1]=='I')&&(data[i+2]==null||(data[i+2]<'0'||data[i+2]>'9')&&
           (data[i+2]<'a'||data[i+2]>'z'))&&(data[i-1]==null||(data[i-1]<'0'||data[i-1]>'9')
           &&(data[i-1]<'a'||data[i-1]>'z'))){
            data=data.substr(0,i)+"3.1415926535898"+data.substr(i+2,data.length-i-2);
           }
        if((data[i]=='a')&&(data[i+1]=='n')&&(data[i+2]=='s')&&(data[i+3]==null||(data[i+3]<'0'||data[i+3]>'9')&&
           (data[i+3]<'a'||data[i+3]>'z'))&&(data[i-1]==null||(data[i-1]<'0'||data[i-1]>'9')
           &&(data[i-1]<'a'||data[i-1]>'z'))){
            data=data.substr(0,i)+this.data.preans+data.substr(i+3,data.length-i-3);
           }
    }
      if(this.checkCalExp(data))
{

        this.trans(data);
        this.reverseAv();
    var result = this.compute();
    if  (this.data.precise!=-1)
    result=this.roundFun(result,this.data.precise);
    if(result!=123456789){
        //cout<<setprecision(precise)<<result<<endl;
        //cout<<endl;
    }
}
      //2
      this.data.logs.push(data+"="+result);
      wx.setStorageSync("calclogs",this.data.logs);

      this.data.arr="";
      var tmp=this.data.arr;
      tmp+=result.toString();
      this.setData({"screenData":result+"","arr":tmp,"preans":result,"caled":true});
    }
    else{
      if(this.data.operaSymbo[id]){ //如果是符号+-*/
        if(this.data.lastIsOperaSymbo || (this.data.screenData == "0"&&id!=this.data.idd)){
          return;
        }
        if(this.data.caled==true)
    {
       this.setData({"screenData":"ans","caled":false});
       this.data.arr= "ans";
    }
      }
      if(this.data.caled==true)
    {
       this.setData({"screenData":"0","caled":false});
      this.data.arr= "";
    }
      var sd = this.data.screenData;
      var data;
      if(sd=="0"&&id!=this.data.idd){
        data = id;
      }else{
        data=sd+id;
      }
      var tmp=this.data.arr;
      tmp=data;
      this.setData({"screenData":data,"arr":tmp,"caled":false});
      if(this.data.operaSymbo[id]){
        this.setData({"lastIsOperaSymbo":true});
      }else{
        this.setData({"lastIsOperaSymbo":false});
      }
    }
  },
  trans:function(str){
    var valueString="";
    var functionString="";
    var sy=[];
    var ch='';
    var i=0;
    var s="#";
    str+=s;
    if(str[0]=='+'){str.erase(0,1);}
     if(str[0]=='-'){str='~'+str.substr(1,str.length-1);}
     for(i=str.length-1;i>=0;i--)
     {
        if((str[i]=='+'))
        {
                if((str[i-1]=='+')||(str[i-1]=='-')||(str[i-1]=='(')||(str[i-1]=='×')||(str[i-1]=='÷')||(str[i-1]=='^'))
                {
                    str.erase(i,1);
                }
            }
        if(str[i]=='-')
        {
           if((str[i-1]=='+')||(str[i-1]=='-')||(str[i-1]=='(')
                ||(str[i-1]=='×')||(str[i-1]=='÷')||(str[i-1]=='^')){
                    str=str.substr(0,i)+"~"+str.substr(i+1,str.length-i-1);
                }
        }
     }
    sy.push(s);
    var len=str.length;
    i=0;
    //cout<<str<<endl;
    //cout<<len<<endl;
    //cout<<str[len-1]<<endl;
    while(i<str.length){
        ch=str[i];
        while((valueString!="")&&(ch<'0'||ch>'9')&&(ch!='.')){
            this.data.av.push(valueString);
            while(sy[sy.length-1]=="@"||sy[sy.length-1]=="~"){
                this.data.av.push(sy[sy.length-1]);
                sy.pop();
            }
            valueString="";
        }
        if((functionString!="")&&((ch<'a')||(ch>'z'))&&
           ((ch<'A'||ch>'Z'))&&((ch<'0'||ch>'9'))){
            sy.push(functionString);
            functionString="";
        }
        if(ch=='#'){
            while((sy[sy.length-1]!="#")&&(sy[sy.length-1]!="")){
                this.data.av.push(sy[sy.length-1]);
                sy.pop();
            }
        }
        if(ch=='~'||ch=='@'){
            var temp="";
            temp=temp+ch;
            sy.push(temp);
        }
        if(ch=='!'||ch=='%'){
            var temp="";
            temp=temp+ch;
            this.data.av.push(temp);
        }
        if(ch=='('){
           var temp="";
           temp=temp+ch;
            sy.push(temp);
        }
        if(ch==')'){
            while((sy[sy.length-1]!="#")&&(sy[sy.length-1]!="(")&&(sy[sy.length-1]!="")){
                this.data.av.push(sy[sy.length-1]);
                sy.pop();
            }
            while(sy[sy.length-1]=="("){
                sy.pop();
            }
            var strTop = sy[sy.length-1];
            while((strTop=="~")||((strTop[0]>='a')&&(strTop[0]<='z'))
                  ||((strTop[0]>='A')&&(strTop[0]<='Z'))){
                    this.data.av.push(strTop);
                sy.pop();
                strTop = sy[sy.length-1];
            }
        }
        if((ch=='+')||(ch=='-')||(ch=='×')||(ch=='÷')||(ch=='^')){
            var strTop=sy[sy.length-1];
            //cout<<sy[sy.length-1]<<endl;
            while(this.getpriority(ch)<=this.getpriority(strTop[0])){
            this.data.av.push(strTop);
            sy.pop();
            strTop =sy[sy.length-1];
            }
            var temp ="";
            temp=temp+ch;
            //cout<<ch<<endl;
            //cout<<temp<<endl;
            sy.push(temp);
            //cout<<sy[sy.length-1]<<endl;
        }
        if(ch=='.'){
            valueString=valueString+ch;
        }
        if(ch>='0'&&ch<='9'){
            if(functionString=="")
            {valueString=valueString+ch;}
            else{
                functionString = functionString+ch;
            }
        }
        if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')){
            functionString=functionString+ch;
        }
        i++;
     }
    },
    getpriority:function(ch){
        switch(ch)
           {
               case'#': return 0;
               case'(': return 1;
               case',': return 2;
               case'+': return 3;
               case'-': return 3;
               case'×': return 5;
               case'÷': return 5;
               case'~': return 7;
               case'@': return 7;
               case'!': return 9;
               case'%': return 9;
               case'^': return 9;
               case')': return 10;
           }
        return -1;
    },
    checkCalExp:function(str)  //检查表达式是否正确
{
    //检查表达式中的函数是否有误
    var i=0;
    var funS = -1;
    var funE = -1;
    while(i<str.length){//检查函数名是否正确
            if((funS==-1)&&(((str[i]>='a')&&(str[i]<='z'))||((str[i]>='A')&&(str[i]<='Z')))){
                funS = i;
            }
            if((funS!=-1)&&(str[i]=='(')){
                funE = i;
                /*string temp=str.substr(funS,funE-funS);
                if(temp=="log"){
                    if(str[i+1]=='2'){
                        temp=temp+'2';
                        i++;
                    }
                    if((str[i+1]=='1'&&str[i+1]=='0')){
                        temp=temp+"10";
                        i+=2;
                    }
                }*/
                if(!this.isCalFun(str.substr(funS,funE-funS))){
                       // cout<<str.substr(funS,funE-funS)<<endl;
                           // cout<<"请检查你的函数名是否正确！！"<<endl;
                   //cout<<endl;
                    return false;
                    break;
                }
            //检查函数中括号的个数是否匹配
                var flage = false;
                var c = 0;
                for(var k=funE;k<str.length;k++){
                    if(str[k]=='(')c++;
                    if(str[k]==')')c--;
                    if(c<0){
                        //cout<<"函数中的括号不匹配！！！"<<endl;
                       //cout<<endl;
                        return false;
                    }
                    if(c==0){
                            flage = true;
                            break;
                    }
                }
                if(flage==false){
                    //cout<<"函数中的括号不匹配！！！"<<endl;
                    //cout<<endl;
                    return false;
                }
                funS = -1;
                funE = -1;
            }
            i++;
          }
          if(funS!=-1){
          //cout<<"请检查表达式中函数后是否有括弧，或含有表意不明字符"<<endl;
          //cout<<endl;
            return false;
          }

     //检查表达式中字符是否在正确范围
     for(var i=0;i<str.length;i++){
        if((str[i]>='a')&&(str[i]<='z'))continue;
        if((str[i]>='0')&&(str[i]<='9'))continue;
        if((str[i]=='!')||(str[i]=='%'))continue;
        if((str[i]=='+')||(str[i]=='-'))continue;
        if((str[i]=='×')||(str[i]=='÷')||(str[i]=='^'))continue;
        if((str[i]=='(')||(str[i]==')')||(str[i]=='.'))continue;
        //if((str[i]=='@')||(str[i]=='~'))continue;
        //cout<<"表达式中含有不可识别的字符！！"<<endl;
        //cout<<endl;
        return false;
     }

     //检查表达式中括号使用是否正确
     var coun = 0;
     for(var i=0;i<str.length;i++){
        //检查括弧是否成对存在
        if(str[i]=='(')coun++;
        if(str[i]==')')coun--;
        if(coun<0){
            //cout<<"表达式中的括弧未成对存在"<<endl;
            //cout<<endl;
            return false;
        }
        // 检查 '('、')' 前后字符是否正确
        // '(' 之前 + - * / ( ^ 函数 有效， '(' 之后 + - (  0~9 ! %函数 有效
        if(str[i]=='('){
            if(i>0){
                if((str[i-1]!='+')&&(str[i-1]!='-')&&
                   (str[i-1]!='×')&&(str[i-1]!='÷')&&
                   ((str[i-1]<'a')||(str[i-1]>'z'))&&
                   (str[i-1]!='(')&&(str[i-1]!='^')){
                   if(((i>4)&&(str.substr(i-5,5)=="log10"))||((i>3)&&(str.substr(i-4,4)=="log2"))){

                   }else{
                        //cout<<"括号(前有表意不明字符！！！"<<endl;
                       //cout<<endl;
                        return false;
                   }
                }
            }
            if(i<str.length-1){
                if((str[i+1]!='+')&&(str[i+1]!='-')&&
                   (((str[i+1]<'0')||(str[i+1]>'9'))&&
                   ((str[i+1]<'a')||(str[i+1]>'z')))&&
                   (str[i+1]!='(')){
                        //<<"括号(后有表意不明字符！！！"<<endl;
                        //cout<<endl;
                        return false;
                }
           }
        }
        // ')' 之前 0~9  ) % !有效， ')' 之后 + - * / ) ^有效
        if(str[i]==')'){
            if(i>1){
                if((str[i-1]!=')')&&(str[i-1]!='%')&&(str[i-1]!='!')&&
                   ((str[i-1]<'0')||(str[i-1]>'9'))){
                    //cout<<"括号)前有表意不明字符！！！"<<endl;
                       //cout<<endl;
                        return false;
                    }
            }
            if(i<str.length-1){
                if((str[i+1]!='+')&&(str[i+1]!='-')&&(str[i+1]!='^')&&
                   (str[i+1]!='×')&&(str[i+1]!='÷')&&(str[i+1]!=')')&&
                   (str[i+1]!='!')&&(str[i+1]!='%')){
                        //cout<<"括号)后有表意不明字符！！！"<<endl;
                        //cout<<endl;
                        return false;
                   }
            }
        }

     }
     //检查括号是否成对存在
     if(coun!=0){
        //cout<<"表达式中的括弧未成对存在"<<endl;
        //cout<<endl;
            return false;
     }

     //检查括号中+ - * /是否使用正确
    for(var i=0;i<str.length;i++){
        //首字符不能为* / % ^ !等  结尾不能出现 + - * / . 函数
        if((i==0)&&(str[i]!='+')&&(str[i]!='-')&&
           ((str[i]<'a')||(str[i]>'z'))&&((str[i]<'0')||(str[i]>'9'))&&
           (str[i]!='(')){
            //cout<<"表达式首字符错误"<<endl;
            //cout<<endl;
            return false;
        }
        if((i==str.length-1)&&
           ((str[i]=='.')||(str[i]=='+')||(str[i]=='-')||
            (str[i]=='×')||(str[i]=='÷')||
           ((str[i]>='a')&&(str[i]<='z')))){
            //cout<<"表达式尾字符错误"<<endl;
            //cout<<endl;
            return false;
           }
        // 四则运算符号前后不能的符号
        // + - 符号之前 . 无效，之后 * /  ) . % ! 无效
        // * / 符号之前 + - * / . ( 无效，之后 * / ) . % ! 无效
        if((str[i]=='+')||(str[i]=='-')){
            if(str[i-1]=='.'){
                //cout<<"表达式中加减号使用错误！！"<<endl;
                //cout<<endl;
                return false;
            }
            if((str[i+1]=='.')||(str[i+1]==')')||
            (str[i+1]=='×')||(str[i+1]=='÷')||
            (str[i+1]=='%')||(str[i+1]=='!')){
                //cout<<"表达式中加减号使用错误！！"<<endl;
                //cout<<endl;
                return false;
            }
        }
        if((str[i]=='×')||(str[i]=='÷')){
            if((str[i-1]=='.')||(str[i-1]=='+')||(str[i-1]=='-')||
                (str[i-1]=='×')||(str[i-1]=='÷')||(str[i-1]=='(')){
                //cout<<"表达式中乘除号使用错误！！"<<endl;
                //cout<<endl;
                return false;
               }
            if((str[i+1]=='.')||(str[i+1]=='×')||
               (str[i+1]=='÷')||(str[i+1]==')')||
               (str[i+1]=='%')||(str[i+1]=='!')){
                //cout<<"表达式中乘除号使用错误！！"<<endl;
                //cout<<endl;
                return false;
               }
        }
    }
    //检查% 与！的使用，%前0~9 )有效，%后不能有0~9 （  字母
    //！前0~9 )有效，！后不能有0~9 ( 字母
    for(var i=0;i<str.length;i++){
        if(str[i]=='%'){
            if(((str[i-1]<'0')||(str[i-1]>'9'))&&(str[i-1]!=')')){
               // cout<<"%符号使用错误！！"<<endl;
                //cout<<endl;
                return false;
            }
            if((str[i+1]>='0'&&str[i+1]<='9')||str[i+1]=='('||((str[i+1]>'a')&&(str[i+1])<'z')){
               // cout<<"%符号使用错误！！！"<<endl;
                //cout<<endl;
                return false;
               }
        }
        if(str[i]=='!'){
            if(((str[i-1]<'0')||(str[i-1]>'9'))&&(str[i-1]!=')')){
               // cout<<"!符号使用错误！！"<<endl;
               // cout<<endl;
            }
            if((str[i+1]>='0'&&str[i+1]<='9')||str[i+1]=='('||((str[i+1]>'a')&&(str[i+1])<'z')){
                //cout<<"!符号使用错误！！！"<<endl;
              // cout<<endl;
               }
        }
    }

    //检查表达式中 . 使用是否正确
    for(var i=0;i<str.length;i++){
            var dotE = 0;
            var flag = true;
        if(str[i]=='.'){
                //小数点前后必须是数字
            if((str[i-1]<'0')||(str[i-1]>'9')||(str[i+1]<'0')||(str[i+1]>'9')){
               // cout<<"表达式中小数点表达错误!!!"<<endl;
                //cout<<endl;
                return false;
            }
            dotE = i;
                //两个小数点之间不能为纯数字

            for(var k=dotE+1;k<str.length;k++){
                if(str[k]=='.'){
                   if(flag){
                  //  cout<<"表达式中小数点使用错误！！！"<<endl;
                   // cout<<endl;
                    return false;
                   }else break;
                }
                if((str[k]<'0')||(str[k]>'9')){
                    flag = false;
                }
            }
        }
    }
    return true;
},
compute:function()//计算逆波兰式函数
{
    var flag = true;
    var calcv=[];  //存储中间值的栈
    while(this.data.av.length!=0){
        var valueStr = this.data.av[this.data.av.length-1];
        this.data.av.pop();
        if(valueStr[0]=='~'){
            var tempF = calcv[calcv.length-1];
            calcv.pop();
            //float tempF = parseFloat(str1);
            calcv.push((-1)*tempF);
        }

        if(valueStr[0]=='!'){
            var tempF = calcv[calcv.length-1];
            calcv.pop();
            //float tempF = parseFloat(str1);
            if((tempF<0)||(parseInt(tempF)!=tempF)){
               // cout<<"负数或小数不能阶乘！！！"<<endl;
                //cout<<endl;
                flag=false;
                break;
            }
            var fact = this.fac(tempF);
            calcv.push(fact);
        }

        if(valueStr[0]=='%'){
            var tempF = calcv[calcv.length-1];
            calcv.pop();
            //float tempF = parseFloat(str1);
            var fact = tempF*0.01;
            calcv.push(fact);
        }

        if((valueStr[0]=='+')||(valueStr[0]=='-')
           ||(valueStr[0]=='×')||(valueStr[0]=='÷')||(valueStr[0]=='^')){
            var tempF1 = calcv[calcv.length-1];
            calcv.pop();
            var tempF2 = calcv[calcv.length-1];
            calcv.pop();
            //float tempF1 = parseFloat(str1);
            //float tempF1 = parseFloat(str2);
            var con = 0;
            if(valueStr[0]=='+'){
                con = tempF2 + tempF1;
            }
            if(valueStr[0]=='-'){
                con = tempF2 - tempF1;
            }
            if(valueStr[0]=='×'){
                con = tempF2 * tempF1;
            }
            if(valueStr[0]=='÷'){
                if(tempF1==0){
                  //  cout<<"除数不能为零！！！"<<endl;
                    //cout<<endl;
                    flag =false;
                    break;
                }
                con = tempF2/tempF1;
                //cout<<con<<endl;
            }
            if(valueStr[0]=='^'){
                con = Math.pow(tempF2,tempF1);
            }
            //cout<<con<<endl;
            calcv.push(con);
        }

        if(((valueStr[0]>='0')&&(valueStr[0]<='9'))||(valueStr[0]=='.')){
            calcv.push(parseFloat(valueStr));
        }

        if(((valueStr[0]>='a')&&(valueStr[0]<='z'))||
           ((valueStr[0]>='A')&&(valueStr[0]<='Z'))){
            var tempF = calcv[calcv.length-1];
            calcv.pop();
            //float tempF = parseFloat(str1);
            var  flage = false;
            var con = 0;
            if(valueStr=="sin"){
                if(this.data.mark==false){tempF = tempF*RATE;};
                con = Math.sin(tempF);
                if(Math.abs(con)<0.00001)con=0;
                flage = true;
            }
            if(valueStr=="cos"){
                if(this.data.mark==false){tempF=tempF*RATE;};
                con = Math.cos(tempF);
                if(Math.abs(con)<0.00001)con=0;
                flage = true;
                //cout<<con<<endl;
            }
            if(valueStr=="tan"){
                if(this.data.mark==false){tempF=tempF*RATE;};
                con =  Math.tan(tempF);
                if(Math.abs(con)<0.00001)con=0;
                if(Math.abs(con)>123456789)con=Infinity;
                flage = true;
            }
            if(valueStr=="arctan"){
                con = Math.atan(tempF);
                if(this.data.mark==false){con=con/RATE;}
                flage = true;
            }
            if(valueStr=="exp"){
                con = Math.exp(tempF) ;
                flage = true;
            }
            if(valueStr=="fabs"){
                con = Math.abs(tempF);
                flage = true;
            }
            if(valueStr=="sqrt"){
                if(tempF<0){
                   // cout<<"负数不能开根号！！！"<<endl;
                    //cout<<endl;
                    flag = false;
                    break;
                }
                con = Math.sqrt(tempF);
                flage = true;
            }
            if(valueStr=="arccos"){
                if((tempF<-1)||(tempF>1)){
                   // cout<<"反正弦函数定义域在-1到1之间"<<endl;
                   // cout<<endl;
                    flag = false;
                    break;
                }
                con = Math.acos(tempF);
                if(this.data.mark==false){con=con/RATE;}
                flage = true;
            }
            if(valueStr=="arcsin"){
                if((tempF<-1)||(tempF>1)){
                    //cout<<"反余弦函数定义域在-1到1之间"<<endl;
                    //cout<<endl;
                    flag = false;
                    break;
                }
                con = Math.asin(tempF);
                if(this.data.mark==false){con=con/RATE;}
                //cout<<tempF<<endl;
                //cout<<con<<endl;
                flage = true;
            }
            if(valueStr=="log2"){
                if(tempF<=0){
                    //cout<<"对数函数不能计算零或负数"<<endl;
                    //cout<<endl;
                    flag = false;
                    break;
                }
                con = Math.log10(tempF)/Math.log10(2);
                flage = true;
            }
            if(valueStr=="log10"){
                if(tempF<=0){
                    //cout<<"对数函数不能计算零或负数"<<endl;
                    //cout<<endl;
                    flag = false;
                    break;
                }
                con = Math.log10(tempF);
                flage = true;
            }
            if(valueStr=="ln"){
                if(tempF<0){
                    //cout<<"对数函数不能计算零或负数"<<endl;
                    //cout<<endl;
                    flag = false;
                    break;
                }
                con = Math.log(tempF);
                flage = true;
            }
            if(flage==false){
                //cout<<"请检查你的函数名是否正确"<<endl;
                flag = false;
                //cout<<endl;
                break;
            }
            calcv.push(con);
        }
        if(flag==false){
            break;
        }
    }
    if(flag==false){
        return "error";//错误标志
    }
    return calcv[calcv.length-1];
},
reverseAv:function(){//逆波兰式栈翻转函数
    var temp=[];
    while(this.data.av.length!=0){
        temp.push(this.data.av[this.data.av.length-1]);
        this.data.av.pop();
    }
    while(temp.length!=0){
        this.data.av.push(temp[0]);
        temp.shift();
    }

},

checkValues:function(value){//检查该变量是否与关键字重复
    transform(value.begin(),value.end(),value.begin(),towlower);
    if(this.isCalFun(value)) return false;
    if(value=="ang"||value=="rad"||value=="fprecise"||value=="e"||
       value=="clearall"||value=="clear"||value=="showall"||value=="pi"||value=="ans")return false;
       return true;
}
,
fac:function(n)//计算阶乘函数
{
    if(n==0)return 1;
    return n*this.fac(n-1);
}
,
isCalFun:function(str){//检查当前字符串是否为数学函数
    if(str=="sin")return true;
    if(str=="cos")return true;
    if(str=="tan")return true;
    if(str=="arcsin")return true;
    if(str=="arccos")return true;
    if(str=="arctan")return true;
    if(str=="exp")return true;
    if(str=="fabs")return true;
    if(str=="log2")return true;
    if(str=="log10")return true;
    if(str=="ln")return true;
    if(str=="sqrt")return true;
    return false;
},

  history1:function(){
    wx.navigateTo({
      url:'../history1/history1'
    })
  }
})
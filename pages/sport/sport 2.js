// pages/sport/sport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BMI:0,
    BMI_score:0,
    total_score:0,
    sex:'',
    male:'male',
    female:'female',
    grade1:'大一',
    grade2:'大二',
    grade3:'大三',
    grade4:'大四',
    grade:'',
    showview1:false,
    showview2:false,
    height:0,
    weight:0,
    capacity_score:0,
    fiftymeter_score:0,
    tiqianqu_score:0,
    tiaoyuan_score:0,
    ytxs_score:0,
    thousandmeter_score:0,
    ywqz_score:0,
    eighthundredmeter_score:0,

  },

  SetMale:function()
  {
    this.setData({
      sex: "male",
      showview1: true,
      showview2: false
    })
  },

  SetFemale:function()
  {
    this.setData({
      sex: "female",
      showview2: true,
      showview1: false
    })
  },

  SetGrade1:function()
  {
    this.setData({
      grade: "大一"
    })
  },

  SetGrade2:function()
  {
    this.setData({
      grade: "大二"
    })
  },

  SetGrade3:function()
  {
    this.setData({
      grade: "大三"
    })
  },

  SetGrade4:function()
  {
    this.setData({
      grade: "大四"
    })
  },

  HeightInput:function(e)
  {

    var Sex = this.data.sex
    var Grade = this.data.grade
    var Male = this.data.male
    var Female = this.data.female

    this.setData({
      height: e.detail.value/100
    })

    if(this.data.height!=0 & this.data.weight!=0){
      this.setData({
        BMI: (this.data.weight/(this.data.height*this.data.height)).toFixed(2)
      })
    }

    if(this.data.BMI != 0){

      if(Sex == Male & this.data.BMI >17.8 & this.data.BMI <23.9){
        this.setData({
          BMI_score: 15
        })
      }

      if(Sex == Male & this.data.BMI >=23.9 & this.data.BMI <28){
        this.setData({
          BMI_score: 12
        })
      }

      if(Sex == Male & this.data.BMI <= 17.8){
        this.setData({
          BMI_score: 12
        })
      }

      if(Sex == Male & this.data.BMI >=28){
        this.setData({
          BMI_score: 9
        })
      }

      if(Sex == Female & this.data.BMI >17.1 & this.data.BMI <23.9){
        this.setData({
          BMI_score: 15
        })
      }

      if(Sex == Female & this.data.BMI >=23.9 & this.data.BMI <28){
        this.setData({
          BMI_score: 12
        })
      }

      if(Sex == Female & this.data.BMI <= 17.1){
        this.setData({
          BMI_score: 12
        })
      }

      if(Sex == Female & this.data.BMI >=28){
        this.setData({
          BMI_score: 9
        })
      }

    }

  },

  WeightInput:function(e)
  {

    var Sex = this.data.sex
    var Grade = this.data.grade
    var Male = this.data.male
    var Female = this.data.female

    this.setData({
      weight: e.detail.value
    })
    
    if(this.data.height!=0 & this.data.weight!=0){
      this.setData({
        BMI: (this.data.weight/(this.data.height*this.data.height)).toFixed(2)
      })
    }

    if(this.data.BMI != 0){

      if(Sex == Male & this.data.BMI >17.8 & this.data.BMI <23.9){
        this.setData({
          BMI_score: 15
        })
      }

      if(Sex == Male & this.data.BMI >=23.9 & this.data.BMI <28){
        this.setData({
          BMI_score: 12
        })
      }

      if(Sex == Male & this.data.BMI <= 17.8){
        this.setData({
          BMI_score: 12
        })
      }

      if(Sex == Male & this.data.BMI >=28){
        this.setData({
          BMI_score: 9
        })
      }

      if(Sex == Female & this.data.BMI >17.1 & this.data.BMI <23.9){
        this.setData({
          BMI_score: 15
        })
      }

      if(Sex == Female & this.data.BMI >=23.9 & this.data.BMI <28){
        this.setData({
          BMI_score: 12
        })
      }

      if(Sex == Female & this.data.BMI <= 17.1){
        this.setData({
          BMI_score: 12
        })
      }

      if(Sex == Female & this.data.BMI >=28){
        this.setData({
          BMI_score: 9
        })
      }

    }

  },

  

  CapacityScore:function(e)
  {
    var Sex = this.data.sex
    var Grade = this.data.grade
    var Male = this.data.male
    var Female = this.data.female
    var Grade1 = this.data.grade1
    var Grade2 = this.data.grade2
    var Grade3 = this.data.grade3
    var Grade4 = this.data.grade4

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 5040)) {
      this.setData({
        capacity_score: 100*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 4920) & (e.detail.value < 5040)) {
      this.setData({
        capacity_score: 95*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 4800) & (e.detail.value < 4920)) {
      this.setData({
        capacity_score: 90*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 4550) & (e.detail.value < 4800)) {
      this.setData({
        capacity_score: 85*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 4300) & (e.detail.value < 4550)) {
      this.setData({
        capacity_score: 80*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 4180) & (e.detail.value < 4300)) {
      this.setData({
        capacity_score: 78*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 4060) & (e.detail.value < 4180)) {
      this.setData({
        capacity_score: 76*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3940) & (e.detail.value < 4060)) {
      this.setData({
        capacity_score: 74*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3820) & (e.detail.value < 3940)) {
      this.setData({
        capacity_score: 72*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3700) & (e.detail.value < 3820)) {
      this.setData({
        capacity_score: 70*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3580) & (e.detail.value < 3700)) {
      this.setData({
        capacity_score: 68*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3460) & (e.detail.value < 3580)) {
      this.setData({
        capacity_score: 66*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3340) & (e.detail.value < 3460)) {
      this.setData({
        capacity_score: 64*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3220) & (e.detail.value < 3340)) {
      this.setData({
        capacity_score: 62*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3100) & (e.detail.value < 3220)) {
      this.setData({
        capacity_score: 60*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2490) & (e.detail.value < 3100)) {
      this.setData({
        capacity_score: 50*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2780) & (e.detail.value < 2940)) {
      this.setData({
        capacity_score: 40*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2620) & (e.detail.value < 2780)) {
      this.setData({
        capacity_score: 30*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2460) & (e.detail.value < 2620)) {
      this.setData({
        capacity_score: 20*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2300) & (e.detail.value < 2460)) {
      this.setData({
        capacity_score: 10*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 2300)) {
      this.setData({
        capacity_score: 0
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 5140)) {
      this.setData({
        capacity_score: 100*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 5020) & (e.detail.value < 5140)) {
      this.setData({
        capacity_score: 95*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 4900) & (e.detail.value < 5020)) {
      this.setData({
        capacity_score: 90*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 4650) & (e.detail.value < 4900)) {
      this.setData({
        capacity_score: 85*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 4400) & (e.detail.value < 4650)) {
      this.setData({
        capacity_score: 80*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 4280) & (e.detail.value < 4400)) {
      this.setData({
        capacity_score: 78*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 4160) & (e.detail.value < 4280)) {
      this.setData({
        capacity_score: 76*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 4040) & (e.detail.value < 4160)) {
      this.setData({
        capacity_score: 74*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3920) & (e.detail.value < 4040)) {
      this.setData({
        capacity_score: 72*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3800) & (e.detail.value < 3920)) {
      this.setData({
        capacity_score: 70*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3680) & (e.detail.value < 3800)) {
      this.setData({
        capacity_score: 68*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3560) & (e.detail.value < 3680)) {
      this.setData({
        capacity_score: 66*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3440) & (e.detail.value < 3560)) {
      this.setData({
        capacity_score: 64*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3320) & (e.detail.value < 3440)) {
      this.setData({
        capacity_score: 62*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3200) & (e.detail.value < 3320)) {
      this.setData({
        capacity_score: 60*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3030) & (e.detail.value < 3200)) {
      this.setData({
        capacity_score: 50*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2860) & (e.detail.value < 3030)) {
      this.setData({
        capacity_score: 40*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2690) & (e.detail.value < 2860)) {
      this.setData({
        capacity_score: 30*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2520) & (e.detail.value < 2690)) {
      this.setData({
        capacity_score: 20*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2350) & (e.detail.value < 2520)) {
      this.setData({
        capacity_score: 10*0.15
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value < 2350)) {
      this.setData({
        capacity_score: 0
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3400)) {
      this.setData({
        capacity_score: 100*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3350) & (e.detail.value < 3400)) {
      this.setData({
        capacity_score: 95*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3300) & (e.detail.value < 3350)) {
      this.setData({
        capacity_score: 90*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3150) & (e.detail.value < 3300)) {
      this.setData({
        capacity_score: 85*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3000) & (e.detail.value < 3150)) {
      this.setData({
        capacity_score: 80*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2900) & (e.detail.value < 3000)) {
      this.setData({
        capacity_score: 78*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2800) & (e.detail.value < 2900)) {
      this.setData({
        capacity_score: 76*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2700) & (e.detail.value < 2800)) {
      this.setData({
        capacity_score: 74*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2600) & (e.detail.value < 2700)) {
      this.setData({
        capacity_score: 72*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2500) & (e.detail.value < 2600)) {
      this.setData({
        capacity_score: 70*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2400) & (e.detail.value < 2500)) {
      this.setData({
        capacity_score: 68*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2300) & (e.detail.value < 2400)) {
      this.setData({
        capacity_score: 66*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2200) & (e.detail.value < 2300)) {
      this.setData({
        capacity_score: 64*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2100) & (e.detail.value < 2200)) {
      this.setData({
        capacity_score: 62*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2000) & (e.detail.value < 2100)) {
      this.setData({
        capacity_score: 60*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 1960) & (e.detail.value < 2000)) {
      this.setData({
        capacity_score: 50*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 1920) & (e.detail.value < 1960)) {
      this.setData({
        capacity_score: 40*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 1880) & (e.detail.value < 1920)) {
      this.setData({
        capacity_score: 30*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 1840) & (e.detail.value < 1880)) {
      this.setData({
        capacity_score: 20*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 1800) & (e.detail.value < 1840)) {
      this.setData({
        capacity_score: 10*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 1800)) {
      this.setData({
        capacity_score: 0
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3450)) {
      this.setData({
        capacity_score: 100*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3400) & (e.detail.value < 3450)) {
      this.setData({
        capacity_score: 95*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3350) & (e.detail.value < 3400)) {
      this.setData({
        capacity_score: 90*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3200) & (e.detail.value < 3350)) {
      this.setData({
        capacity_score: 85*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3050) & (e.detail.value < 3200)) {
      this.setData({
        capacity_score: 80*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2950) & (e.detail.value < 3050)) {
      this.setData({
        capacity_score: 78*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2850) & (e.detail.value < 2950)) {
      this.setData({
        capacity_score: 76*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2750) & (e.detail.value < 2850)) {
      this.setData({
        capacity_score: 74*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2650) & (e.detail.value < 2750)) {
      this.setData({
        capacity_score: 72*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2550) & (e.detail.value < 2650)) {
      this.setData({
        capacity_score: 70*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2450) & (e.detail.value < 2550)) {
      this.setData({
        capacity_score: 68*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2350) & (e.detail.value < 2450)) {
      this.setData({
        capacity_score: 66*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2250) & (e.detail.value < 2350)) {
      this.setData({
        capacity_score: 64*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2150) & (e.detail.value < 2250)) {
      this.setData({
        capacity_score: 62*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2050) & (e.detail.value < 2150)) {
      this.setData({
        capacity_score: 60*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2010) & (e.detail.value < 2050)) {
      this.setData({
        capacity_score: 50*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 1970) & (e.detail.value < 2010)) {
      this.setData({
        capacity_score: 40*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 1930) & (e.detail.value < 1970)) {
      this.setData({
        capacity_score: 30*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 1890) & (e.detail.value < 1930)) {
      this.setData({
        capacity_score: 20*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 1850) & (e.detail.value < 1890)) {
      this.setData({
        capacity_score: 10*0.15
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 1850)) {
      this.setData({
        capacity_score: 0
      })
    }

  },

  FiftyMeterScore:function(e)
  {
    var Sex = this.data.sex
    var Grade = this.data.grade
    var Male = this.data.male
    var Female = this.data.female
    var Grade1 = this.data.grade1
    var Grade2 = this.data.grade2
    var Grade3 = this.data.grade3
    var Grade4 = this.data.grade4

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 6.7)) {
      this.setData({
        fiftymeter_score: 100*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 6.7) & (e.detail.value <= 6.8)) {
      this.setData({
        fiftymeter_score: 95*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 6.8) & (e.detail.value <= 6.9)) {
      this.setData({
        fiftymeter_score: 90*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 6.9) & (e.detail.value <= 7.0)) {
      this.setData({
        fiftymeter_score: 85*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 7.0) & (e.detail.value <= 7.1)) {
      this.setData({
        fiftymeter_score: 80*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 7.1) & (e.detail.value <= 7.3)) {
      this.setData({
        fiftymeter_score: 78*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 7.3) & (e.detail.value <= 7.5)) {
      this.setData({
        fiftymeter_score: 76*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 7.5) & (e.detail.value <= 7.7)) {
      this.setData({
        fiftymeter_score: 74*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 7.7) & (e.detail.value <= 7.9)) {
      this.setData({
        fiftymeter_score: 72*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 7.9) & (e.detail.value <= 8.1)) {
      this.setData({
        fiftymeter_score: 70*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.1) & (e.detail.value <= 8.3)) {
      this.setData({
        fiftymeter_score: 68*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.3) & (e.detail.value <= 8.5)) {
      this.setData({
        fiftymeter_score: 66*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.5) & (e.detail.value <= 8.7)) {
      this.setData({
        fiftymeter_score: 64*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.7) & (e.detail.value <= 8.9)) {
      this.setData({
        fiftymeter_score: 62*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.9) & (e.detail.value <= 9.1)) {
      this.setData({
        fiftymeter_score: 60*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.1) & (e.detail.value <= 9.3)) {
      this.setData({
        fiftymeter_score: 50*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.3) & (e.detail.value <= 9.5)) {
      this.setData({
        fiftymeter_score: 40*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.5) & (e.detail.value <= 9.7)) {
      this.setData({
        fiftymeter_score: 30*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.7) & (e.detail.value <= 9.9)) {
      this.setData({
        fiftymeter_score: 20*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.9) & (e.detail.value <= 10.1)) {
      this.setData({
        fiftymeter_score: 10*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 10.1)) {
      this.setData({
        fiftymeter_score: 0
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 6.6)) {
      this.setData({
        fiftymeter_score: 100*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 6.6) & (e.detail.value <= 6.7)) {
      this.setData({
        fiftymeter_score: 95*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 6.7) & (e.detail.value <= 6.8)) {
      this.setData({
        fiftymeter_score: 90*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 6.8) & (e.detail.value <= 6.9)) {
      this.setData({
        fiftymeter_score: 85*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 6.9) & (e.detail.value <= 7.0)) {
      this.setData({
        fiftymeter_score: 80*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 7.0) & (e.detail.value <= 7.2)) {
      this.setData({
        fiftymeter_score: 78*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 7.2) & (e.detail.value <= 7.4)) {
      this.setData({
        fiftymeter_score: 76*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 7.4) & (e.detail.value <= 7.6)) {
      this.setData({
        fiftymeter_score: 74*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 7.6) & (e.detail.value <= 7.8)) {
      this.setData({
        fiftymeter_score: 72*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 7.8) & (e.detail.value <= 8.0)) {
      this.setData({
        fiftymeter_score: 70*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 8.0) & (e.detail.value <= 8.2)) {
      this.setData({
        fiftymeter_score: 68*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 8.2) & (e.detail.value <= 8.4)) {
      this.setData({
        fiftymeter_score: 66*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 8.4) & (e.detail.value <= 8.6)) {
      this.setData({
        fiftymeter_score: 64*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 8.6) & (e.detail.value <= 8.8)) {
      this.setData({
        fiftymeter_score: 62*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 8.8) & (e.detail.value <= 9.0)) {
      this.setData({
        fiftymeter_score: 60*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.0) & (e.detail.value <= 9.2)) {
      this.setData({
        fiftymeter_score: 50*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.2) & (e.detail.value <= 9.4)) {
      this.setData({
        fiftymeter_score: 40*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.4) & (e.detail.value <= 9.6)) {
      this.setData({
        fiftymeter_score: 30*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.6) & (e.detail.value <= 9.8)) {
      this.setData({
        fiftymeter_score: 20*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.8) & (e.detail.value <= 10.0)) {
      this.setData({
        fiftymeter_score: 10*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 10.0)) {
      this.setData({
        fiftymeter_score: 0
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 7.5)) {
      this.setData({
        fiftymeter_score: 100*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 7.5) & (e.detail.value <= 7.6)) {
      this.setData({
        fiftymeter_score: 95*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 7.6) & (e.detail.value <= 7.7)) {
      this.setData({
        fiftymeter_score: 90*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 7.7) & (e.detail.value <= 8.0)) {
      this.setData({
        fiftymeter_score: 85*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.0) & (e.detail.value <= 8.3)) {
      this.setData({
        fiftymeter_score: 80*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.3) & (e.detail.value <= 8.5)) {
      this.setData({
        fiftymeter_score: 78*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.5) & (e.detail.value <= 8.7)) {
      this.setData({
        fiftymeter_score: 76*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.7) & (e.detail.value <= 8.9)) {
      this.setData({
        fiftymeter_score: 74*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 8.9) & (e.detail.value <= 9.1)) {
      this.setData({
        fiftymeter_score: 72*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.1) & (e.detail.value <= 9.3)) {
      this.setData({
        fiftymeter_score: 70*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.3) & (e.detail.value <= 9.5)) {
      this.setData({
        fiftymeter_score: 68*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.5) & (e.detail.value <= 9.7)) {
      this.setData({
        fiftymeter_score: 66*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.7) & (e.detail.value <= 9.9)) {
      this.setData({
        fiftymeter_score: 64*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 9.9) & (e.detail.value <= 10.1)) {
      this.setData({
        fiftymeter_score: 62*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 10.1) & (e.detail.value <= 10.3)) {
      this.setData({
        fiftymeter_score: 60*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 10.3) & (e.detail.value <= 10.5)) {
      this.setData({
        fiftymeter_score: 50*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 10.5) & (e.detail.value <= 10.7)) {
      this.setData({
        fiftymeter_score: 40*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 10.7) & (e.detail.value <= 10.9)) {
      this.setData({
        fiftymeter_score: 30*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 10.9) & (e.detail.value <= 11.1)) {
      this.setData({
        fiftymeter_score: 20*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 11.1) & (e.detail.value <= 11.3)) {
      this.setData({
        fiftymeter_score: 10*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 11.3)) {
      this.setData({
        fiftymeter_score: 0
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 7.4)) {
      this.setData({
        fiftymeter_score: 100*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 7.4) & (e.detail.value <= 7.5)) {
      this.setData({
        fiftymeter_score: 95*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 7.5) & (e.detail.value <= 7.6)) {
      this.setData({
        fiftymeter_score: 90*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 7.6) & (e.detail.value <= 7.9)) {
      this.setData({
        fiftymeter_score: 85*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 7.9) & (e.detail.value <= 8.2)) {
      this.setData({
        fiftymeter_score: 80*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 8.2) & (e.detail.value <= 8.4)) {
      this.setData({
        fiftymeter_score: 78*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 8.4) & (e.detail.value <= 8.6)) {
      this.setData({
        fiftymeter_score: 76*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 8.6) & (e.detail.value <= 8.8)) {
      this.setData({
        fiftymeter_score: 74*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 8.8) & (e.detail.value <= 9.0)) {
      this.setData({
        fiftymeter_score: 72*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.0) & (e.detail.value <= 9.2)) {
      this.setData({
        fiftymeter_score: 70*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.2) & (e.detail.value <= 9.4)) {
      this.setData({
        fiftymeter_score: 68*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.4) & (e.detail.value <= 9.6)) {
      this.setData({
        fiftymeter_score: 66*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.6) & (e.detail.value <= 9.8)) {
      this.setData({
        fiftymeter_score: 64*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 9.8) & (e.detail.value <= 10.0)) {
      this.setData({
        fiftymeter_score: 62*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 10.0) & (e.detail.value <= 10.2)) {
      this.setData({
        fiftymeter_score: 60*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 10.2) & (e.detail.value <= 10.4)) {
      this.setData({
        fiftymeter_score: 50*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 10.4) & (e.detail.value <= 10.6)) {
      this.setData({
        fiftymeter_score: 40*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 10.6) & (e.detail.value <= 10.8)) {
      this.setData({
        fiftymeter_score: 30*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 10.8) & (e.detail.value <= 11.0)) {
      this.setData({
        fiftymeter_score: 20*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 11.0) & (e.detail.value <= 11.2)) {
      this.setData({
        fiftymeter_score: 10*0.2
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 11.2)) {
      this.setData({
        fiftymeter_score: 0
      })
    }
  },

  TiqianquScore:function(e)
  {
    var Sex = this.data.sex
    var Grade = this.data.grade
    var Male = this.data.male
    var Female = this.data.female
    var Grade1 = this.data.grade1
    var Grade2 = this.data.grade2
    var Grade3 = this.data.grade3
    var Grade4 = this.data.grade4

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 24.9)) {
      this.setData({
        tiqianqu_score: 100*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 23.1) & (e.detail.value < 24.9)) {
      this.setData({
        tiqianqu_score: 95*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 21.3) & (e.detail.value < 23.1)) {
      this.setData({
        tiqianqu_score: 90*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 19.5) & (e.detail.value < 21.3)) {
      this.setData({
        tiqianqu_score: 85*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 17.7) & (e.detail.value < 19.5)) {
      this.setData({
        tiqianqu_score: 80*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 16.3) & (e.detail.value < 17.7)) {
      this.setData({
        tiqianqu_score: 78*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 14.9) & (e.detail.value < 16.3)) {
      this.setData({
        tiqianqu_score: 76*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 13.5) & (e.detail.value < 14.9)) {
      this.setData({
        tiqianqu_score: 74*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 12.1) & (e.detail.value < 13.5)) {
      this.setData({
        tiqianqu_score: 72*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 10.7) & (e.detail.value < 12.1)) {
      this.setData({
        tiqianqu_score: 70*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 9.3) & (e.detail.value < 10.7)) {
      this.setData({
        tiqianqu_score: 68*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 7.9) & (e.detail.value < 9.3)) {
      this.setData({
        tiqianqu_score: 66*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 6.5) & (e.detail.value < 7.90)) {
      this.setData({
        tiqianqu_score: 64*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 5.1) & (e.detail.value < 6.5)) {
      this.setData({
        tiqianqu_score: 62*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3.7) & (e.detail.value < 5.1)) {
      this.setData({
        tiqianqu_score: 60*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2.7) & (e.detail.value < 3.7)) {
      this.setData({
        tiqianqu_score: 50*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 1.7) & (e.detail.value < 2.7)) {
      this.setData({
        tiqianqu_score: 40*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 0.7) & (e.detail.value < 1.7)) {
      this.setData({
        tiqianqu_score: 30*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= -0.3) & (e.detail.value < 0.7)) {
      this.setData({
        tiqianqu_score: 20*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= -1.3) & (e.detail.value < -0.3)) {
      this.setData({
        tiqianqu_score: 10*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < -1.3)) {
      this.setData({
        tiqianqu_score: 0
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 25.1)) {
      this.setData({
        tiqianqu_score: 100*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 23.3) & (e.detail.value < 25.1)) {
      this.setData({
        tiqianqu_score: 95*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 21.5) & (e.detail.value < 23.3)) {
      this.setData({
        tiqianqu_score: 90*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 19.9) & (e.detail.value < 21.5)) {
      this.setData({
        tiqianqu_score: 85*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 18.2) & (e.detail.value < 19.9)) {
      this.setData({
        tiqianqu_score: 80*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 16.8) & (e.detail.value < 18.2)) {
      this.setData({
        tiqianqu_score: 78*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 15.4) & (e.detail.value < 16.8)) {
      this.setData({
        tiqianqu_score: 76*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 14.0) & (e.detail.value < 15.4)) {
      this.setData({
        tiqianqu_score: 74*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 12.6) & (e.detail.value < 14.0)) {
      this.setData({
        tiqianqu_score: 72*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 11.2) & (e.detail.value < 12.6)) {
      this.setData({
        tiqianqu_score: 70*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 9.8) & (e.detail.value < 11.2)) {
      this.setData({
        tiqianqu_score: 68*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 8.4) & (e.detail.value < 9.8)) {
      this.setData({
        tiqianqu_score: 66*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 7.0) & (e.detail.value < 8.4)) {
      this.setData({
        tiqianqu_score: 64*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 5.6) & (e.detail.value < 7.0)) {
      this.setData({
        tiqianqu_score: 62*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 4.2) & (e.detail.value < 5.6)) {
      this.setData({
        tiqianqu_score: 60*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3.2) & (e.detail.value < 4.2)) {
      this.setData({
        tiqianqu_score: 50*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2.2) & (e.detail.value < 3.2)) {
      this.setData({
        tiqianqu_score: 40*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 1.2) & (e.detail.value < 2.2)) {
      this.setData({
        tiqianqu_score: 30*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 0.2) & (e.detail.value < 1.2)) {
      this.setData({
        tiqianqu_score: 20*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= -0.8) & (e.detail.value < 0.2)) {
      this.setData({
        tiqianqu_score: 10*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value < -0.8)) {
      this.setData({
        tiqianqu_score: 0
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 25.8)) {
      this.setData({
        tiqianqu_score: 100*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 24.0) & (e.detail.value < 25.8)) {
      this.setData({
        tiqianqu_score: 95*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 22.2) & (e.detail.value < 24.0)) {
      this.setData({
        tiqianqu_score: 90*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 20.6) & (e.detail.value < 22.2)) {
      this.setData({
        tiqianqu_score: 85*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 19.0) & (e.detail.value < 20.6)) {
      this.setData({
        tiqianqu_score: 80*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 17.7) & (e.detail.value < 19.0)) {
      this.setData({
        tiqianqu_score: 78*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 16.4) & (e.detail.value < 17.7)) {
      this.setData({
        tiqianqu_score: 76*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 15.1) & (e.detail.value < 16.4)) {
      this.setData({
        tiqianqu_score: 74*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 13.8) & (e.detail.value < 15.1)) {
      this.setData({
        tiqianqu_score: 72*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 12.5) & (e.detail.value < 13.8)) {
      this.setData({
        tiqianqu_score: 70*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 11.2) & (e.detail.value < 12.5)) {
      this.setData({
        tiqianqu_score: 68*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 9.9) & (e.detail.value < 11.2)) {
      this.setData({
        tiqianqu_score: 66*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 8.6) & (e.detail.value < 9.9)) {
      this.setData({
        tiqianqu_score: 64*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 7.3) & (e.detail.value < 8.6)) {
      this.setData({
        tiqianqu_score: 62*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 6.0) & (e.detail.value < 7.3)) {
      this.setData({
        tiqianqu_score: 60*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 5.2) & (e.detail.value < 6.0)) {
      this.setData({
        tiqianqu_score: 50*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 4.4) & (e.detail.value < 5.2)) {
      this.setData({
        tiqianqu_score: 40*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 3.6) & (e.detail.value < 4.4)) {
      this.setData({
        tiqianqu_score: 30*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2.8) & (e.detail.value < 3.6)) {
      this.setData({
        tiqianqu_score: 20*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 2.0) & (e.detail.value < 2.8)) {
      this.setData({
        tiqianqu_score: 10*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 2.0)) {
      this.setData({
        tiqianqu_score: 0
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 26.3)) {
      this.setData({
        tiqianqu_score: 100*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 24.4) & (e.detail.value < 26.3)) {
      this.setData({
        tiqianqu_score: 95*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 22.4) & (e.detail.value < 24.4)) {
      this.setData({
        tiqianqu_score: 90*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 21.0) & (e.detail.value < 22.4)) {
      this.setData({
        tiqianqu_score: 85*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 19.5) & (e.detail.value < 21.0)) {
      this.setData({
        tiqianqu_score: 80*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 18.2) & (e.detail.value < 19.5)) {
      this.setData({
        tiqianqu_score: 78*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 16.9) & (e.detail.value < 18.2)) {
      this.setData({
        tiqianqu_score: 76*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 15.6) & (e.detail.value < 16.9)) {
      this.setData({
        tiqianqu_score: 74*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 14.3) & (e.detail.value < 15.6)) {
      this.setData({
        tiqianqu_score: 72*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 13.0) & (e.detail.value < 14.3)) {
      this.setData({
        tiqianqu_score: 70*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 11.7) & (e.detail.value < 13.0)) {
      this.setData({
        tiqianqu_score: 68*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 10.4) & (e.detail.value < 11.7)) {
      this.setData({
        tiqianqu_score: 66*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 9.1) & (e.detail.value < 10.4)) {
      this.setData({
        tiqianqu_score: 64*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 7.8) & (e.detail.value < 9.1)) {
      this.setData({
        tiqianqu_score: 62*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 6.5) & (e.detail.value < 7.8)) {
      this.setData({
        tiqianqu_score: 60*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 5.7) & (e.detail.value < 6.5)) {
      this.setData({
        tiqianqu_score: 50*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 4.9) & (e.detail.value < 5.7)) {
      this.setData({
        tiqianqu_score: 40*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 4.1) & (e.detail.value < 4.9)) {
      this.setData({
        tiqianqu_score: 30*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 3.3) & (e.detail.value < 4.1)) {
      this.setData({
        tiqianqu_score: 20*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 2.5) & (e.detail.value < 3.3)) {
      this.setData({
        tiqianqu_score: 10*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 2.5)) {
      this.setData({
        tiqianqu_score: 0
      })
    }

  },

  TiaoyuanScore:function(e)
  {
    var Sex = this.data.sex
    var Grade = this.data.grade
    var Male = this.data.male
    var Female = this.data.female
    var Grade1 = this.data.grade1
    var Grade2 = this.data.grade2
    var Grade3 = this.data.grade3
    var Grade4 = this.data.grade4

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 273)) {
      this.setData({
        tiaoyuan_score: 100*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 268) & (e.detail.value < 273)) {
      this.setData({
        tiaoyuan_score: 95*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 263) & (e.detail.value < 268)) {
      this.setData({
        tiaoyuan_score: 90*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 256) & (e.detail.value < 263)) {
      this.setData({
        tiaoyuan_score: 85*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 248) & (e.detail.value < 256)) {
      this.setData({
        tiaoyuan_score: 80*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 244) & (e.detail.value < 248)) {
      this.setData({
        tiaoyuan_score: 78*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 240) & (e.detail.value < 244)) {
      this.setData({
        tiaoyuan_score: 76*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 236) & (e.detail.value < 240)) {
      this.setData({
        tiaoyuan_score: 74*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 232) & (e.detail.value < 236)) {
      this.setData({
        tiaoyuan_score: 72*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 228) & (e.detail.value < 232)) {
      this.setData({
        tiaoyuan_score: 70*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 224) & (e.detail.value < 228)) {
      this.setData({
        tiaoyuan_score: 68*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 220) & (e.detail.value < 224)) {
      this.setData({
        tiaoyuan_score: 66*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 216) & (e.detail.value < 220)) {
      this.setData({
        tiaoyuan_score: 64*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 212) & (e.detail.value < 216)) {
      this.setData({
        tiaoyuan_score: 62*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 208) & (e.detail.value < 212)) {
      this.setData({
        tiaoyuan_score: 60*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 203) & (e.detail.value < 208)) {
      this.setData({
        tiaoyuan_score: 50*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 198) & (e.detail.value < 203)) {
      this.setData({
        tiaoyuan_score: 40*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 193) & (e.detail.value < 198)) {
      this.setData({
        tiaoyuan_score: 30*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 188) & (e.detail.value < 193)) {
      this.setData({
        tiaoyuan_score: 20*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 183) & (e.detail.value < 188)) {
      this.setData({
        tiaoyuan_score: 10*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 183)) {
      this.setData({
        tiaoyuan_score: 0
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 275)) {
      this.setData({
        tiaoyuan_score: 100*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 270) & (e.detail.value < 275)) {
      this.setData({
        tiaoyuan_score: 95*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 265) & (e.detail.value < 270)) {
      this.setData({
        tiaoyuan_score: 90*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 258) & (e.detail.value < 265)) {
      this.setData({
        tiaoyuan_score: 85*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 250) & (e.detail.value < 258)) {
      this.setData({
        tiaoyuan_score: 80*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 246) & (e.detail.value < 250)) {
      this.setData({
        tiaoyuan_score: 78*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 242) & (e.detail.value < 246)) {
      this.setData({
        tiaoyuan_score: 76*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 238) & (e.detail.value < 242)) {
      this.setData({
        tiaoyuan_score: 74*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 234) & (e.detail.value < 238)) {
      this.setData({
        tiaoyuan_score: 72*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 230) & (e.detail.value < 234)) {
      this.setData({
        tiaoyuan_score: 70*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 226) & (e.detail.value < 230)) {
      this.setData({
        tiaoyuan_score: 68*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 222) & (e.detail.value < 226)) {
      this.setData({
        tiaoyuan_score: 66*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 218) & (e.detail.value < 222)) {
      this.setData({
        tiaoyuan_score: 64*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 214) & (e.detail.value < 218)) {
      this.setData({
        tiaoyuan_score: 62*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 210) & (e.detail.value < 214)) {
      this.setData({
        tiaoyuan_score: 60*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 205) & (e.detail.value < 210)) {
      this.setData({
        tiaoyuan_score: 50*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 200) & (e.detail.value < 205)) {
      this.setData({
        tiaoyuan_score: 40*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 195) & (e.detail.value < 200)) {
      this.setData({
        tiaoyuan_score: 30*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 190) & (e.detail.value < 195)) {
      this.setData({
        tiaoyuan_score: 20*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 185) & (e.detail.value < 190)) {
      this.setData({
        tiaoyuan_score: 10*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value < 185)) {
      this.setData({
        tiaoyuan_score: 0
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 207)) {
      this.setData({
        tiaoyuan_score: 100*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 201) & (e.detail.value < 207)) {
      this.setData({
        tiaoyuan_score: 95*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 195) & (e.detail.value < 201)) {
      this.setData({
        tiaoyuan_score: 90*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 188) & (e.detail.value < 195)) {
      this.setData({
        tiaoyuan_score: 85*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 181) & (e.detail.value < 188)) {
      this.setData({
        tiaoyuan_score: 80*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 178) & (e.detail.value < 181)) {
      this.setData({
        tiaoyuan_score: 78*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 175) & (e.detail.value < 178)) {
      this.setData({
        tiaoyuan_score: 76*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 172) & (e.detail.value < 175)) {
      this.setData({
        tiaoyuan_score: 74*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 169) & (e.detail.value < 172)) {
      this.setData({
        tiaoyuan_score: 72*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 166) & (e.detail.value < 169)) {
      this.setData({
        tiaoyuan_score: 70*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 163) & (e.detail.value < 166)) {
      this.setData({
        tiaoyuan_score: 68*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 160) & (e.detail.value < 163)) {
      this.setData({
        tiaoyuan_score: 66*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 157) & (e.detail.value < 160)) {
      this.setData({
        tiaoyuan_score: 64*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 154) & (e.detail.value < 157)) {
      this.setData({
        tiaoyuan_score: 62*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 151) & (e.detail.value < 154)) {
      this.setData({
        tiaoyuan_score: 60*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 146) & (e.detail.value < 151)) {
      this.setData({
        tiaoyuan_score: 50*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 141) & (e.detail.value < 146)) {
      this.setData({
        tiaoyuan_score: 40*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 136) & (e.detail.value < 141)) {
      this.setData({
        tiaoyuan_score: 30*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 131) & (e.detail.value < 136)) {
      this.setData({
        tiaoyuan_score: 20*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 126) & (e.detail.value < 131)) {
      this.setData({
        tiaoyuan_score: 10*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 126)) {
      this.setData({
        tiaoyuan_score: 0
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 208)) {
      this.setData({
        tiaoyuan_score: 100*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 202) & (e.detail.value < 208)) {
      this.setData({
        tiaoyuan_score: 95*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 196) & (e.detail.value < 202)) {
      this.setData({
        tiaoyuan_score: 90*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 189) & (e.detail.value < 196)) {
      this.setData({
        tiaoyuan_score: 85*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 182) & (e.detail.value < 189)) {
      this.setData({
        tiaoyuan_score: 80*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 179) & (e.detail.value < 182)) {
      this.setData({
        tiaoyuan_score: 78*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 176) & (e.detail.value < 179)) {
      this.setData({
        tiaoyuan_score: 76*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 173) & (e.detail.value < 176)) {
      this.setData({
        tiaoyuan_score: 74*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 170) & (e.detail.value < 173)) {
      this.setData({
        tiaoyuan_score: 72*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 167) & (e.detail.value < 170)) {
      this.setData({
        tiaoyuan_score: 70*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 164) & (e.detail.value < 167)) {
      this.setData({
        tiaoyuan_score: 68*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 161) & (e.detail.value < 164)) {
      this.setData({
        tiaoyuan_score: 66*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 158) & (e.detail.value < 161)) {
      this.setData({
        tiaoyuan_score: 64*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 155) & (e.detail.value < 158)) {
      this.setData({
        tiaoyuan_score: 62*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 152) & (e.detail.value < 155)) {
      this.setData({
        tiaoyuan_score: 60*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 147) & (e.detail.value < 152)) {
      this.setData({
        tiaoyuan_score: 50*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 142) & (e.detail.value < 147)) {
      this.setData({
        tiaoyuan_score: 40*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 137) & (e.detail.value < 142)) {
      this.setData({
        tiaoyuan_score: 30*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 132) & (e.detail.value < 137)) {
      this.setData({
        tiaoyuan_score: 20*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 127) & (e.detail.value < 132)) {
      this.setData({
        tiaoyuan_score: 10*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 127)) {
      this.setData({
        tiaoyuan_score: 0
      })
    }

  },

  YtxsScore:function(e)
  {
    var Sex = this.data.sex
    var Grade = this.data.grade
    var Male = this.data.male
    var Female = this.data.female
    var Grade1 = this.data.grade1
    var Grade2 = this.data.grade2
    var Grade3 = this.data.grade3
    var Grade4 = this.data.grade4

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 19)) {
      this.setData({
        ytxs_score: 100*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 18) & (e.detail.value <19)) {
      this.setData({
        ytxs_score: 95*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 17) & (e.detail.value < 18)) {
      this.setData({
        ytxs_score: 90*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 16) & (e.detail.value < 17)) {
      this.setData({
        ytxs_score: 85*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 15) & (e.detail.value < 16)) {
      this.setData({
        ytxs_score: 80*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 14) & (e.detail.value < 15)) {
      this.setData({
        ytxs_score: 76*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 13) & (e.detail.value < 14)) {
      this.setData({
        ytxs_score: 72*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 12) & (e.detail.value < 13)) {
      this.setData({
        ytxs_score: 68*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 11) & (e.detail.value < 12)) {
      this.setData({
        ytxs_score: 64*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 10) & (e.detail.value < 11)) {
      this.setData({
        ytxs_score: 60*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 9) & (e.detail.value < 10)) {
      this.setData({
        ytxs_score: 50*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 8) & (e.detail.value < 9)) {
      this.setData({
        ytxs_score: 40*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 7) & (e.detail.value < 8)) {
      this.setData({
        ytxs_score: 30*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 6) & (e.detail.value < 7)) {
      this.setData({
        ytxs_score: 20*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 5) & (e.detail.value < 6)) {
      this.setData({
        ytxs_score: 10*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 5)) {
      this.setData({
        ytxs_score: 0
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 20)) {
      this.setData({
        ytxs_score: 100*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 19) & (e.detail.value < 20)) {
      this.setData({
        ytxs_score: 95*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 18) & (e.detail.value < 19)) {
      this.setData({
        ytxs_score: 90*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 17) & (e.detail.value < 18)) {
      this.setData({
        ytxs_score: 85*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 16) & (e.detail.value < 17)) {
      this.setData({
        ytxs_score: 80*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 15) & (e.detail.value < 16)) {
      this.setData({
        ytxs_score: 76*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 14) & (e.detail.value < 15)) {
      this.setData({
        ytxs_score: 72*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 13) & (e.detail.value < 14)) {
      this.setData({
        ytxs_score: 68*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 12) & (e.detail.value < 13)) {
      this.setData({
        ytxs_score: 64*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 11) & (e.detail.value < 12)) {
      this.setData({
        ytxs_score: 60*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 10) & (e.detail.value < 11)) {
      this.setData({
        ytxs_score: 50*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 9) & (e.detail.value < 10)) {
      this.setData({
        ytxs_score: 40*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 8) & (e.detail.value < 9)) {
      this.setData({
        ytxs_score: 30*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 7) & (e.detail.value < 8)) {
      this.setData({
        ytxs_score: 20*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 6) & (e.detail.value < 7)) {
      this.setData({
        ytxs_score: 10*0.1
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value < 6)) {
      this.setData({
        ytxs_score: 0
      })
    }
  },

  ThousandScore:function(e)
  {
    var Sex = this.data.sex
    var Grade = this.data.grade
    var Male = this.data.male
    var Female = this.data.female
    var Grade1 = this.data.grade1
    var Grade2 = this.data.grade2
    var Grade3 = this.data.grade3
    var Grade4 = this.data.grade4

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 197)) {
      this.setData({
        thousandmeter_score: 100*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 202) & (e.detail.value >197)) {
      this.setData({
        thousandmeter_score: 95*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 207) & (e.detail.value > 202)) {
      this.setData({
        thousandmeter_score: 90*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 214) & (e.detail.value > 207)) {
      this.setData({
        thousandmeter_score: 85*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 222) & (e.detail.value > 214)) {
      this.setData({
        thousandmeter_score: 80*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 227) & (e.detail.value > 222)) {
      this.setData({
        thousandmeter_score: 78*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 232) & (e.detail.value > 227)) {
      this.setData({
        thousandmeter_score: 76*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 237) & (e.detail.value > 232)) {
      this.setData({
        thousandmeter_score: 74*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 242) & (e.detail.value > 237)) {
      this.setData({
        thousandmeter_score: 72*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 247) & (e.detail.value > 242)) {
      this.setData({
        thousandmeter_score: 70*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 252) & (e.detail.value > 247)) {
      this.setData({
        thousandmeter_score: 68*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 257) & (e.detail.value > 252)) {
      this.setData({
        thousandmeter_score: 66*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 262) & (e.detail.value > 257)) {
      this.setData({
        thousandmeter_score: 64*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 267) & (e.detail.value > 262)) {
      this.setData({
        thousandmeter_score: 62*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 272) & (e.detail.value > 267)) {
      this.setData({
        thousandmeter_score: 60*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 292) & (e.detail.value > 272)) {
      this.setData({
        thousandmeter_score: 50*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 312) & (e.detail.value > 292)) {
      this.setData({
        thousandmeter_score: 40*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 332) & (e.detail.value > 312)) {
      this.setData({
        thousandmeter_score: 30*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 352) & (e.detail.value > 332)) {
      this.setData({
        thousandmeter_score: 20*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 372) & (e.detail.value > 352)) {
      this.setData({
        thousandmeter_score: 10*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 372)) {
      this.setData({
        thousandmeter_score: 0
      })
    }
    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 195)) {
      this.setData({
        thousandmeter_score: 100*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 200) & (e.detail.value >195)) {
      this.setData({
        thousandmeter_score: 95*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 205) & (e.detail.value > 200)) {
      this.setData({
        thousandmeter_score: 90*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 212) & (e.detail.value > 205)) {
      this.setData({
        thousandmeter_score: 85*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 220) & (e.detail.value > 212)) {
      this.setData({
        thousandmeter_score: 80*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 225) & (e.detail.value > 220)) {
      this.setData({
        thousandmeter_score: 78*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 230) & (e.detail.value > 225)) {
      this.setData({
        thousandmeter_score: 76*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 235) & (e.detail.value > 230)) {
      this.setData({
        thousandmeter_score: 74*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 240) & (e.detail.value > 235)) {
      this.setData({
        thousandmeter_score: 72*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 245) & (e.detail.value > 240)) {
      this.setData({
        thousandmeter_score: 70*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 250) & (e.detail.value > 245)) {
      this.setData({
        thousandmeter_score: 68*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 255) & (e.detail.value > 250)) {
      this.setData({
        thousandmeter_score: 66*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 260) & (e.detail.value > 255)) {
      this.setData({
        thousandmeter_score: 64*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 265) & (e.detail.value > 260)) {
      this.setData({
        thousandmeter_score: 62*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 270) & (e.detail.value > 265)) {
      this.setData({
        thousandmeter_score: 60*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 290) & (e.detail.value > 270)) {
      this.setData({
        thousandmeter_score: 50*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 310) & (e.detail.value > 290)) {
      this.setData({
        thousandmeter_score: 40*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 330) & (e.detail.value > 310)) {
      this.setData({
        thousandmeter_score: 30*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 350) & (e.detail.value > 330)) {
      this.setData({
        thousandmeter_score: 20*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 370) & (e.detail.value > 350)) {
      this.setData({
        thousandmeter_score: 10*0.2
      })
    }

    if ( (Sex == Male) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value > 370)) {
      this.setData({
        thousandmeter_score: 0
      })
    }
  },

  YwqzScore:function(e)
  {
    var Sex = this.data.sex
    var Grade = this.data.grade
    var Male = this.data.male
    var Female = this.data.female
    var Grade1 = this.data.grade1
    var Grade2 = this.data.grade2
    var Grade3 = this.data.grade3
    var Grade4 = this.data.grade4

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 56)) {
      this.setData({
        ywqz_score: 100*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 54) & (e.detail.value < 56)) {
      this.setData({
        ywqz_score: 95*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 52) & (e.detail.value < 54)) {
      this.setData({
        ywqz_score: 90*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 49) & (e.detail.value < 52)) {
      this.setData({
        ywqz_score: 85*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 46) & (e.detail.value < 49)) {
      this.setData({
        ywqz_score: 80*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 44) & (e.detail.value < 46)) {
      this.setData({
        ywqz_score: 78*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 42) & (e.detail.value < 44)) {
      this.setData({
        ywqz_score: 76*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 40) & (e.detail.value < 42)) {
      this.setData({
        ywqz_score: 74*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 38) & (e.detail.value < 40)) {
      this.setData({
        ywqz_score: 72*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 36) & (e.detail.value < 38)) {
      this.setData({
        ywqz_score: 70*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 34) & (e.detail.value < 36)) {
      this.setData({
        ywqz_score: 68*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 32) & (e.detail.value < 34)) {
      this.setData({
        ywqz_score: 66*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 30) & (e.detail.value < 32)) {
      this.setData({
        ywqz_score: 64*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 28) & (e.detail.value < 30)) {
      this.setData({
        ywqz_score: 62*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 26) & (e.detail.value < 28)) {
      this.setData({
        ywqz_score: 60*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 24) & (e.detail.value < 26)) {
      this.setData({
        ywqz_score: 50*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 22) & (e.detail.value < 24)) {
      this.setData({
        ywqz_score: 40*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 20) & (e.detail.value < 22)) {
      this.setData({
        ywqz_score: 30*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 18) & (e.detail.value < 20)) {
      this.setData({
        ywqz_score: 20*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value >= 16) & (e.detail.value < 18)) {
      this.setData({
        ywqz_score: 10*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 16)) {
      this.setData({
        ywqz_score: 0
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 57)) {
      this.setData({
        ywqz_score: 100*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 55) & (e.detail.value < 57)) {
      this.setData({
        ywqz_score: 95*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 53) & (e.detail.value < 55)) {
      this.setData({
        ywqz_score: 90*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 50) & (e.detail.value < 53)) {
      this.setData({
        ywqz_score: 85*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 47) & (e.detail.value < 50)) {
      this.setData({
        ywqz_score: 80*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 45) & (e.detail.value < 47)) {
      this.setData({
        ywqz_score: 78*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 43) & (e.detail.value < 45)) {
      this.setData({
        ywqz_score: 76*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 41) & (e.detail.value < 43)) {
      this.setData({
        ywqz_score: 74*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 39) & (e.detail.value < 41)) {
      this.setData({
        ywqz_score: 72*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 37) & (e.detail.value < 39)) {
      this.setData({
        ywqz_score: 70*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 35) & (e.detail.value < 37)) {
      this.setData({
        ywqz_score: 68*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 33) & (e.detail.value < 35)) {
      this.setData({
        ywqz_score: 66*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 31) & (e.detail.value < 33)) {
      this.setData({
        ywqz_score: 64*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 29) & (e.detail.value < 31)) {
      this.setData({
        ywqz_score: 62*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 27) & (e.detail.value < 29)) {
      this.setData({
        ywqz_score: 60*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 25) & (e.detail.value < 27)) {
      this.setData({
        ywqz_score: 50*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 23) & (e.detail.value < 25)) {
      this.setData({
        ywqz_score: 40*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 21) & (e.detail.value < 23)) {
      this.setData({
        ywqz_score: 30*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 19) & (e.detail.value < 21)) {
      this.setData({
        ywqz_score: 20*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value >= 17) & (e.detail.value < 19)) {
      this.setData({
        ywqz_score: 10*0.1
      })
    }

    if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value < 17)) {
      this.setData({
        ywqz_score: 0
      })
    }

  },

  EightHundredScore:function(e)
  {
     var Sex = this.data.sex
     var Grade = this.data.grade
     var Male = this.data.male
     var Female = this.data.female
     var Grade1 = this.data.grade1
     var Grade2 = this.data.grade2
     var Grade3 = this.data.grade3
     var Grade4 = this.data.grade4
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 198)) {
       this.setData({
         eighthundredmeter_score: 100*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 204) & (e.detail.value > 198)) {
       this.setData({
         eighthundredmeter_score: 95*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 210) & (e.detail.value > 204)) {
       this.setData({
         eighthundredmeter_score: 90*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 217) & (e.detail.value > 210)) {
       this.setData({
         eighthundredmeter_score: 85*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 224) & (e.detail.value > 217)) {
       this.setData({
         eighthundredmeter_score: 80*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 229) & (e.detail.value > 224)) {
       this.setData({
         eighthundredmeter_score: 78*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 234) & (e.detail.value > 229)) {
       this.setData({
         eighthundredmeter_score: 76*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 239) & (e.detail.value > 234)) {
       this.setData({
         eighthundredmeter_score: 74*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 244) & (e.detail.value > 239)) {
       this.setData({
         eighthundredmeter_score: 72*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 249) & (e.detail.value > 244)) {
       this.setData({
         eighthundredmeter_score: 70*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 254) & (e.detail.value > 249)) {
       this.setData({
         eighthundredmeter_score: 68*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 259) & (e.detail.value > 254)) {
       this.setData({
         eighthundredmeter_score: 66*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 264) & (e.detail.value > 259)) {
       this.setData({
         eighthundredmeter_score: 64*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 269) & (e.detail.value > 264)) {
       this.setData({
         eighthundredmeter_score: 62*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 274) & (e.detail.value > 269)) {
       this.setData({
         eighthundredmeter_score: 60*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 284) & (e.detail.value > 274)) {
       this.setData({
         eighthundredmeter_score: 50*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 294) & (e.detail.value > 284)) {
       this.setData({
         eighthundredmeter_score: 40*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 304) & (e.detail.value > 294)) {
       this.setData({
         eighthundredmeter_score: 30*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 314) & (e.detail.value > 304)) {
       this.setData({
         eighthundredmeter_score: 20*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value <= 324) & (e.detail.value > 314)) {
       this.setData({
         eighthundredmeter_score: 10*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 324)) {
       this.setData({
         eighthundredmeter_score: 0
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 196)) {
       this.setData({
         eighthundredmeter_score: 100*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 202) & (e.detail.value > 196)) {
       this.setData({
         eighthundredmeter_score: 95*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 208) & (e.detail.value > 202)) {
       this.setData({
         eighthundredmeter_score: 90*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 215) & (e.detail.value > 208)) {
       this.setData({
         eighthundredmeter_score: 85*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 222) & (e.detail.value > 215)) {
       this.setData({
         eighthundredmeter_score: 80*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 227) & (e.detail.value > 222)) {
       this.setData({
         eighthundredmeter_score: 78*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 232) & (e.detail.value > 227)) {
       this.setData({
         eighthundredmeter_score: 76*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 237) & (e.detail.value > 232)) {
       this.setData({
         eighthundredmeter_score: 74*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 242) & (e.detail.value > 237)) {
       this.setData({
         eighthundredmeter_score: 72*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 247) & (e.detail.value > 242)) {
       this.setData({
         eighthundredmeter_score: 70*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 252) & (e.detail.value > 247)) {
       this.setData({
         eighthundredmeter_score: 68*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 257) & (e.detail.value > 252)) {
       this.setData({
         eighthundredmeter_score: 66*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 262) & (e.detail.value > 257)) {
       this.setData({
         eighthundredmeter_score: 64*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 267) & (e.detail.value > 262)) {
       this.setData({
         eighthundredmeter_score: 62*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 272) & (e.detail.value > 267)) {
       this.setData({
         eighthundredmeter_score: 60*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 282) & (e.detail.value > 272)) {
       this.setData({
         eighthundredmeter_score: 50*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 292) & (e.detail.value > 282)) {
       this.setData({
         eighthundredmeter_score: 40*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 302) & (e.detail.value > 292)) {
       this.setData({
         eighthundredmeter_score: 30*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 312) & (e.detail.value > 302)) {
       this.setData({
         eighthundredmeter_score: 20*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade3 || Grade == Grade4) & (e.detail.value <= 322) & (e.detail.value > 312)) {
       this.setData({
         eighthundredmeter_score: 10*0.2
       })
     }
 
     if ( (Sex == Female) & (Grade == Grade1 || Grade == Grade2) & (e.detail.value > 322)) {
       this.setData({
         eighthundredmeter_score: 0
       })
     }
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
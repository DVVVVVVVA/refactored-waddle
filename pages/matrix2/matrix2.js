// pages/matrix2/matrix2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    row1:0,
    column1:0,
    row2:0,
    column2:0,
    origin_matrix1:'',
    origin_matrix2:'',
    matrixa:'',
    matrixb:'',
    add_matrix:'',
    setshow1:0,
    sub_matrix:'',
    setshow2:0,
    time_matrix:'',
    setshow3:0,
  },
  RowInput1:function(e){
    
    this.setData({
      row1:e.detail.value
    })

  },

  ColumnInput1:function(e){
    
    this.setData({
      column1:e.detail.value
    })

  },

  RowInput2:function(e){
    
    this.setData({
      row2:e.detail.value
    })

  },

  ColumnInput2:function(e){
    
    this.setData({
      column2:e.detail.value
    })

  },


  MatrixInput1:function(e){
    
    var Row = this.data.row1
    var Column = this.data.column1
    var Origin = this.data.origin_matrix1

    this.setData({
      origin_matrix1:e.detail.value.trim().split(/\s+/)
    })
    this.Transfer1(Origin)
  },


  Transfer1:function(matrix) {

    var str = new Array()
    var Row = this.data.row1
    var Column = this.data.column1

    for (var i = 0; i < Row; i++) {
      str[i] = new Array();
      for (var j = 0; j < Column; j++) {
        str[i][j] = matrix[i * Column + j]
      }
    }
    this.setData({
      matrixa:str
    })
  },


  MatrixInput2:function(e){
    
    var Row = this.data.row2
    var Column = this.data.column2
    var Origin = this.data.origin_matrix2

    this.setData({
      origin_matrix2:e.detail.value.trim().split(/\s+/)
    })
    this.Transfer2(Origin)
  },


  Transfer2:function(matrix) {

    var str = new Array()
    var Row = this.data.row2
    var Column = this.data.column2

    for (var i = 0; i < Row; i++) {
      str[i] = new Array();
      for (var j = 0; j < Column; j++) {
        str[i][j] = matrix[i * Column + j]
      }
    }
    this.setData({
      matrixb:str
    })
  },

  Claim2D: function(matrix, row, column) {
    for (var i = 0; i < row; i++) {
      matrix[i] = new Array();
      for (var j = 0; j < column; j++) {
        matrix[i][j] = 0;
      }
    }
  },

  MatrixDispose_2D(matrix, row, column) {
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < column; j++) {
        matrix[i][j] = matrix[i][j];
      }
    }
    let str = new Array();
    var reg = /,/g;
    for (let i = 0; i < row; i++) {
      str[i] = '';
      for (let j = 0; j < row; j++) {
        str[i] += (parseFloat(matrix[i][j])).toFixed(3) + ' '
      }
    }
    return str
  },

  Add: function() {

    this.setData({
      setshow1:1
    })

    var rowa = this.data.row1
    var columna = this.data.column1
    var rowb = this.data.row2
    var columnb = this.data.column2
    //转为二维数组
    var matrixA = this.data.matrixa
    var matrixB = this.data.matrixb

    var matrixC = new Array();
    this.Claim2D(matrixC, rowa, columnb);
    //实际算法部分
    for (var i = 0; i < rowa; i++) {
      for (var j = 0; j < columnb; j++) {
        matrixC[i][j] = parseFloat(matrixA[i][j]) + parseFloat(matrixB[i][j]);
      }
    }
    this.setData({
      add_matrix:this.MatrixDispose_2D(matrixC,rowa,columna)
    })
  },

  Sub: function() {

    this.setData({
      setshow2:1
    })

    var rowa = this.data.row1
    var columna = this.data.column1
    var rowb = this.data.row2
    var columnb = this.data.column2
    //转为二维数组
    var matrixA = this.data.matrixa
    var matrixB = this.data.matrixb

    var matrixC = new Array();
    this.Claim2D(matrixC, rowa, columnb);
    //实际算法部分
    for (var i = 0; i < rowa; i++) {
      for (var j = 0; j < columnb; j++) {
        matrixC[i][j] = parseFloat(matrixA[i][j]) - parseFloat(matrixB[i][j]);
      }
    }
    this.setData({
      sub_matrix:this.MatrixDispose_2D(matrixC,rowa,columna)
    })
  },

  Time: function() {

    this.setData({
      setshow3:1
    })

    var rowa = this.data.row1
    var columna = this.data.column1
    var rowb = this.data.row2
    var columnb = this.data.column2
    //转为二维数组
    var matrixA = this.data.matrixa
    var matrixB = this.data.matrixb

    var matrixC = new Array();
    this.Claim2D(matrixC, rowa, columnb);
    //实际算法部分
    for (var i = 0; i < rowa; i++) {
      for (var j = 0; j < columnb; j++) {
        for (var k = 0; k < columna; k++) {
          matrixC[i][j] = matrixC[i][j] + matrixA[i][k] * matrixB[k][j];
        }
      }
    }
    this.setData({
      time_matrix:this.MatrixDispose_2D(matrixC,rowa,columna)
    })
  },









})
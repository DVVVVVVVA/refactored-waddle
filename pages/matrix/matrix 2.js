// pages/matrix/matrix.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    row:0,
    column:0,
    origin_matrix:'',
    trans_matrix:'',
    inverse_matrix:'',
    detaminate:0,
    setc:0,
    setdet:0,
    c:0,
    power_matrix:'',
    test_matrix:''
  },

  RowInput:function(e){
    
    this.setData({
      row:e.detail.value
    })

  },

  ColumnInput:function(e){
    
    this.setData({
      column:e.detail.value
    })

  },


  MatrixDispose(matrix, row, column) {
    let str = new Array();
    for (let i = 0; i < row; i++) {
      str[i] = '';
      for (let j = 0; j < column; j++) {
        if (j < column - 1)
          str[i] += matrix[i * column + j] + '  ';
        else
          str[i] += matrix[i * column + j];
      }
    }

    this.setData({
      test_matrix:str
    })
  },



  MatrixInput:function(e){
    
    var Row = this.data.row
    var Column = this.data.column
    var Origin = this.data.origin_matrix

    this.setData({
      origin_matrix:e.detail.value.trim().split(/\s+/)
    })
    this.Transfer(Origin)
  },


  Transfer:function(matrix) {

    var str = new Array()
    var Row = this.data.row
    var Column = this.data.column

    for (var i = 0; i < Row; i++) {
      str[i] = new Array();
      for (var j = 0; j < Column; j++) {
        str[i][j] = matrix[i * Column + j]
      }
    }
    this.setData({
      test_matrix:str
    })
  },

  Transfer1:function(matrix) {

    var str = new Array()
    var Row = this.data.row
    var Column = this.data.column

    for (var i = 0; i < Row; i++) {
      str[i] = new Array();
      for (var j = 0; j < Column; j++) {
        str[i][j] = matrix[i * Column + j]
      }
    }
    matrix = str
  },

  //声明二维数组
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

  //转化为二维数组
  Transpose: function() {

    var Matrix = this.data.test_matrix
    var Row = this.data.row
    var Column = this.data.column

    if (true) {
      //实际算法部分

      var matrixC = new Array();
      this.Claim2D(matrixC, Column, Row)
          
      for (var i = 0; i < Row; i++) {
        for (var j = 0; j < Column; j++) {
          matrixC[j][i] = Matrix[i][j];
        }
      }
      this.setData({
        trans_matrix:this.MatrixDispose_2D(matrixC, Row, Column)
      })
    }
  },

  Transpose1: function(matrix) {

    var Row = this.data.row
    var Column = this.data.column

    if (true) {
      //实际算法部分

      var matrixC = new Array();
      this.Claim2D(matrixC, Column, Row)
          
      for (var i = 0; i < Row; i++) {
        for (var j = 0; j < Column; j++) {
          matrixC[j][i] = matrix[i][j];
        }
      }
    }
    matrix = matrixC
  },

  //矩阵两行对换
  exchange: function(matrix, i1, i2) {
    
    var temp = new Array()

    temp = matrix[i1]
    matrix[i1] = matrix[i2]
    matrix[i2] = temp

  }, //两行对换

  copy:function(matrix1,matrix2){
    var row = this.data.row;
    var column = this.data.column;
    this.Claim2D(matrix2, row, column);
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < column; j++) {
        matrix2[i][j] = matrix1[i][j]
      }
    }
  },

  //求行列式
  det: function(matrix, dim) {

    if (dim == 1) {
      return matrix[0][0];
    } //若一维矩阵，结果为a00
    
    var index;
    for (index = dim - 1; index > -1; index--) {
      if (matrix[index][dim - 1] != 0)
        break;
    } //检索最后一列不为0的行
    
    if (index == -1){
      return 0
    } //奇异矩阵，对角线含0
      
    var sign = 1;
    
    if (index != dim - 1) {
      this.exchange(matrix, index, dim - 1);
      sign = -1;
    }
    
    var last_element = matrix[dim - 1][dim - 1];
    
    for (var i = 0; i < dim - 1; i++) {
      var factor = matrix[i][dim - 1] / last_element;
      matrix[i][dim - 1] = 0;
      for (var j = 0; j < dim - 1; j++) {
        matrix[i][j] -= factor * matrix[dim - 1][j];
      }
    }
    return sign * last_element * this.det(matrix, dim - 1);
  },

  Detaminate:function(){

    var dim = this.data.row
    var Matrix = this.data.test_matrix
    var sub = []
    this.copy(Matrix,sub)

    this.setData({
      setdet:1
    })

    this.setData({
      detaminate:this.det(sub,dim).toFixed(3)
    })
  },


  lowerdim: function(matrixA, row, column, ai, aj) {
    //1 2 3 4 5 6 8 9 7
    //ai,aj:代数余子式的i，j
    //bi,bj:控制新的矩阵b行列
    //i,j:控制matrixA的循环
    var matrixB = new Array();
    this.Claim2D(matrixB, row - 1, column - 1);
    var bi = 0;
    var bj = 0;
    for (var i = 0; i < row; i++) {
      if (i != ai) {
        for (var j = 0; j < column; j++) {
          if (j != aj) {
            matrixB[bi][bj] = matrixA[i][j];
            bj++;
          }
        }
        bi++;
      }
      bj = 0;
    }
    return matrixB;
  }, //matrixB为matrixA[i][j]的余子式

  inver: function(matrixA, row, column) {
    var dim = row - 1;

    var Matrix = this.data.test_matrix
    var matrixDet = new Array
    this.copy(Matrix,matrixDet)


    for (var i = 0; i < row; i++) {
      for (var j = 0; j < column; j++) {
        matrixDet[i][j] = this.det(this.lowerdim(matrixA, row, column, i, j), dim);
        if ((i + j) % 2 != 0) {
          matrixDet[i][j] *= -1;
        }
      }
    }
    return matrixDet;
  },


  Inversion: function() {
    var rowa = this.data.row;
    var columna = this.data.column;
    var dim = rowa;
    var result = 0;
    //声明二维数组

    var Matrix = this.data.test_matrix
    var matrixA = new Array
    this.copy(Matrix,matrixA)

    var matrixC = new Array();
    this.Claim2D(matrixC, rowa, columna);

    //实际算法
    //A^-1=(1/|A|)*adjA

    matrixC = this.inver(matrixA, rowa, columna);
    var matrixCt = new Array();
    this.Claim2D(matrixCt, rowa, columna);
    for (var i = 0; i < rowa; i++) {
      for (var j = 0; j < columna; j++) {
        matrixCt[j][i] = matrixC[i][j];
      }
    } //转置matrixC为代数余子式（adjA)
    var det = this.det(matrixA, dim);
    for (i = 0; i < rowa; i++) {
      for (j = 0; j < columna; j++) {
        matrixC[i][j] = (parseFloat((1 / det) * matrixCt[i][j])).toFixed(3);
      }
    }
    this.setData({
      inverse_matrix : matrixC
    })
  },

  SetPower:function(e){
    this.setData({
      setc : 1
    })
  },


  PowerInput: function(e) {

    this.setData({
      c : e.detail.value
    })

    var c1 = this.data.c
    var row = this.data.row;
    var column = this.data.column;
    var Matrix = this.data.test_matrix

    //转为二维数组
    var matrixA = new Array();
    this.copy(Matrix, matrixA);
    var matrixA2 = new Array();
    this.copy(Matrix, matrixA2);
    var matrixC = new Array();
    this.Claim2D(matrixC, row, column);
    if (c1 == 1) {
      for (i = 0; i < row; i++) {
        for (j = 0; j < column; j++) {
          matrixC[i][j] = matrixA[i][j];
        }
      }
    } else {
      //1 2 3 4
      //实际算法部分
      while (--c1) {
        for (var i = 0; i < row; i++) {
          for (var j = 0; j < column; j++) {
            for (var k = 0; k < column; k++) {
              matrixC[i][j] += matrixA2[i][k] * matrixA[k][j];
            }
          }
        }

        for (i = 0; i < row; i++) {
          for (j = 0; j < column; j++) {
            matrixA[i][j] = matrixC[i][j];
            matrixC[i][j] = 0;
          }
        }
      }
      for (i = 0; i < row; i++) {
        for (j = 0; j < column; j++) {
          matrixC[i][j] = matrixA[i][j];
        }
      }
      this.setData({setc:0})
    }

    this.setData({
    power_matrix:this.MatrixDispose_2D(matrixC, row, column)
    })
  },




















})
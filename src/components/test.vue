<template>
  <div id="app">
    <div id="select">
      <span id="net">
        <label>net:</label>
        <input type="text"></input>
      </span>
      <span id="brief">
        <label>brief:</label>
        <input type="text"></input>
      </span>
      <span>
        <button :click="search">search</button>
      </span>
    </div><br>
    <div id="table">
      <Table border id="table1" :data="data1" :columns="column1"></Table>
      <page :total="pageTotal" show-elevator show-sizer show-total
            placement="top" @on-change="handlePage" @on-page-size-change='handlePageSize'>

      </Page>
    </div>


  </div>

</template>

<script>
  import {getInfo} from "../api/test";
import axios from 'axios'
  export default {
        data:function() {
          return{
            loading:true,
            border:true,
            pageTotal: null,
            column1:[
              {
                title:'网申号',//网申号
                key:'netApplicationNo'
              },
              {
                title: '案由',//案由
                key: 'briefName'
              },
              {
                title: '原告',//原告
                key: 'plaintiffName'
              },
              {
                title: '被告',//被告
                key: 'defendantName'
              },
              {
                title: '法庭',//法庭
                key: 'courtName'
              },
              {
                title: 'action',
                key: 'acion',
                render:(h,param)=>{
                  return h('div',[
                    h('button',{
                      props:{
                        type:'text',
                        size:'small'
                      }
                    },'view'),
                    h('button',{
                      props:{
                        type:'text',
                        size:'small'
                      }
                    },'delete')
                  ])
                }
              }

            ],
            data1:[]
          }

        },
    mounted() {
          this.$http.get('/api/court/case/test1.jhtml',{
            params:{
              netApplicationNo:'',
              caseNo:'',
              yLCaseNo:'',
              trustComplaintNum:'',
              workComplaintNum:'',
              briefName:'',
              progress:'',
              litigantName:'',
              lawyerName:'',
              mediation:'',
              startDate:'',
              endDate:'',
              submitType:'已提交',
              type:'所有案件',
              pageNumber:1,
              pageSize:10
            }

          }).then(res=>{
            console.log(res.data)
              if (res.data.state===100){
                this.pageTotal=res.data.data.totalPages
                this.data1=res.data.data.lawCaseList

              }
          })
    },
    methods:{
      handlePage(value) {
        this.pageNum = value
      },
      handlePageSize(value) {
        this.pageSize = value
      },
      search(data){

      }
    }
  }
</script>

<style scoped>
  #app{
    width: 1000px;
    height: 800px;
    top: 50%;
    bottom: 50%;
    right: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    text-align: center;
    display: table-cell;
    background: lightblue;
  }
  #table{
    width: 800px;
    text-align: center;
    position: absolute;
    display: table-cell;
    margin-top: 10px;
    margin-left: 10%;
  }
  #select{
    text-align: center;
    margin-top: 10px;

  }
  #table1 {
    border: solid dodgerblue;
    background-color: #42b983;
  }

  td{
    border: solid #42b983;
  }


</style>

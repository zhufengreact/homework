import React, { Component } from 'react';

class Table extends Component {
  render(){
    const style = require('./Table.less');

    return (
        <table className="table my_table">
         <thead>
            <tr>
               <th>产品</th>
               <th>付款日期</th>
               <th>状态</th>
            </tr>
         </thead>
         <tbody>
            <tr className="active">
               <td>产品1</td>
               <td>23/11/2013</td>
               <td>待发货</td>
            </tr>
            <tr className="success">
               <td>产品2</td>
               <td>10/11/2013</td>
               <td>发货中</td>
            </tr>
            <tr className="warning">
               <td>产品3</td>
               <td>20/10/2013</td>
               <td>待确认</td>
            </tr>
            <tr className="danger">
               <td>产品4</td>
               <td>20/10/2013</td>
               <td>已退货</td>
            </tr>
         </tbody>
      </table>
    );
  }
}

export default Table;

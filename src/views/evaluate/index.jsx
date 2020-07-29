import React, { Component } from 'react';
import { Select } from 'antd';
import './index.less';

const { Option } = Select;

class Evaluate extends Component {
  typeList = [
    {
      name: '气温',
      val: 0
    },
    {
      name: '相对湿度',
      val: 1
    },
    {
      name: '云量',
      val: 2
    },
    {
      name: '云底高',
      val: 3
    },
    {
      name: '能见度',
      val: 4
    },
    {
      name: '风速',
      val: 5
    }
  ];
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      timeList: [
        '2020-07-21 12:00:00',
        '2020-07-21 13:00:00',
        '2020-07-21 14:00:00',
        '2020-07-21 15:00:00',
        '2020-07-21 16:00:00'
      ]
    };
  }

  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  onNumberChange = () => {};

  onCurrencyChange = () => {};

  setChartOption = (chart) => {
    chart.setOption({
      tooltip: {},
      grid: {
        top: 40,
        left: 70,
        right: 50,
        bottom: 60
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }
      ]
    });
  };

  componentDidMount() {
    let echarts = require('echarts');
    // 基于准备好的dom，初始化echarts实例
    this.typeList.map((v, i) => {
      // let str = `myChart${i}`;
      let myChart = echarts.init(document.getElementById(`myChart${i}`));
      // 绘制图表
      this.setChartOption(myChart);
    });
  }

  render() {
    const { value, timeList } = this.state;
    return (
      <div className="evaluate-wrapper">
        <div className="time-wrapper">
          <p>时间</p>
          {timeList.map((v, i) => {
            return (
              <div className="time-item" key={i}>
                {v}
              </div>
            );
          })}
        </div>
        <div className="content-wrapper">
          <div className="search-content">
            <span>
              <Select value={value.currency} style={{ width: 150, margin: '0 8px' }} onChange={this.onCurrencyChange}>
                <Option value="rmb">统计分析</Option>
                <Option value="dollar">预报详情</Option>
              </Select>
              <Select value={value.currency} style={{ width: 150, margin: '0 8px' }} onChange={this.onCurrencyChange}>
                <Option value="1">机场1</Option>
                <Option value="2">机场2</Option>
                <Option value="3">机场3</Option>
              </Select>
            </span>
          </div>
          <div className="chart-wrapper">
            {this.typeList.map((v, i) => {
              return (
                <div className="chart-box" key={i}>
                  <div className="box">
                    <div id={`myChart${i}`} style={{ width: '100%', height: 250 }}></div>
                  </div>
                  <div className="title">{v.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Evaluate;

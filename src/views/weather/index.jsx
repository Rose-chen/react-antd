import React, { Component } from 'react';
import { Form, Input, Select, Button, Checkbox } from 'antd';
import './index.less';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

class Weather extends Component {
  typeList = [
    {
      name: '机场1',
      val: 0
    },
    {
      name: '机场2',
      val: 1
    },
    {
      name: '机场3',
      val: 2
    },
    {
      name: '机场4',
      val: 3
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

  componentDidMount() {}

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
              <Button type="primary">导出</Button>
            </span>
          </div>
          <div className="table-wrapper">
            {this.typeList.map((v, i) => {
              return (
                <div className="table-box" key={i}>
                  <div className="box">
                    <div id={`table${i}`} style={{ width: '100%', height: 250 }}></div>
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

export default Weather;

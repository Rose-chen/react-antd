import React, { Component } from 'react';
import { HashRouter as Router, Link, withRouter } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import Routes from './../../router';
import userIcon from './../../assets/imgs/header/user.png';
import './index.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'admin'
    };
    console.log(this.props.history);
  }

  loginOut = () => {
    this.props.history.push('/login');
  };

  menu = (
    <Menu>
      <Menu.Item>
        <span>修改密码</span>
      </Menu.Item>
      <Menu.Item>
        <span onClick={this.loginOut}>退出</span>
      </Menu.Item>
    </Menu>
  );

  render() {
    const { userName } = this.state;
    const activeKey = this.props.location.pathname;
    return (
      <Router>
        <header>
          <div className="logo">基于深度学习的数值预报产品解释应用系统</div>
          <div className="menu-wrapper">
            {Routes.map((v, i) => {
              return (
                <Link
                  key={v.path}
                  className={activeKey.indexOf(v.path) > -1 ? 'menu-item active' : 'menu-item'}
                  to={v.path}
                >
                  {v.name}
                </Link>
              );
            })}
          </div>
          <Dropdown overlay={this.menu} placement="bottomLeft" arrow>
            <div className="user-box">
              <img src={userIcon} />
              <span>{userName}</span>
            </div>
          </Dropdown>
        </header>
      </Router>
    );
  }
}

export default withRouter(Header);

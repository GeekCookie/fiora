import React from 'react';
import '../style/login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        };
    }

    render () {
        const { login } = this.state;
        return (
            <div className="login">
                <div>
                    <div>
                        <div>
                            <i className="icon">&#xe608;</i>
                        </div>
                        <input
                            type="text"
                            placeholder="用户名"
                        />
                    </div>
                    <div>
                        <div>
                            <i className="icon">&#xe60b;</i>
                        </div>
                        <input
                            type="text"
                            placeholder="密码"
                        />
                    </div>
                    {
                        login ?
                        <button>登录</button>
                        :
                        <button>注册</button>
                    }
                    {
                        login ?
                        <span
                            onClick={() => this.setState({ login: false })}
                        >还没有帐号? 那就注册一个吧 (ﾉ ○ Д ○)ﾉ</span>
                        :
                        <span
                            onClick={() => this.setState({ login: true })}
                        >已有帐号, 我是一个老司机 ヾ(=^▽^=)ノ</span>
                    }
                </div>
            </div>
        );
    }
}

export default Login;
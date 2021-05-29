import React from 'react'
import Article from './Article'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPublished: false,
            body: "",
        }
    };
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };
    createBody = (input) => {
        this.setState({
            body: "文字が入力できない状態です。"
        })
    };
    render() {
        return (
            <React.Fragment>
            <Article
                title="Reactの使い方"
                isPublished={this.state.isPublished}
                toggle={() => this.togglePublished()}   //関数型で渡さないと無限ループが起きるので注意！
                createBody={() => this.createBody()}
                body={this.state.body}
            />
            </React.Fragment>
        )
    };
}

export default Blog
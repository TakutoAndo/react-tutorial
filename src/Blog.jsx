import React from 'react'
import Article from './Article'

const Blog = () => {
    /*
    constructor(props) {
        super(props)
        this.state = {
            isPublished: false,
            body: "",
            count: 0,
        }
    }
    */
    /*
    componentDidMount() {
        document.getElementById('likeButton').addEventListener('click', this.countUp)
    }

    componentDidUpdate() {
        if (this.state.count >= 10) this.setState({ count: 0})
        console.log(`いいね数: ${this.state.count}`)
    }

    componentWillUnmount() {
        document.getElementById('likeButton').removeEventListener('click', this.countUp)
    }

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
    countUp = () => {
        this.setState({
            count: this.state.count + 1
        })
    };
    */
    return (
        <React.Fragment>
        <Article
            //title="Reactの使い方"
            // isPublished={this.state.isPublished}
            // toggle={() => this.togglePublished()}   //関数型で渡さないと無限ループが起きるので注意！
            // createBody={() => this.createBody()}
            // body={this.state.body}
            // count = {this.state.count}
        />
        </React.Fragment>
        )
}

export default Blog
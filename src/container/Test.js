import React, { Component } from 'react';

class Test extends Component {

    //생성자 메소드로 컴포넌트가 생성될 때 단 한번만 실행된다.
    //이 메소드에서만 state를 설정할 수 있다.
    constructor(props) {
        super(props);
    }

    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출되는 메소드
    //DOM이 생성되지 않았으므로 DOM을 조작할 수 없고 render가 호출되기 전이기 때문에
    //setState를 사용해도 render가 호출되지 않는다.
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    //컴포넌트가 만들어지고 render가 호출된 이후에 호출되는 메소드
    //ajax나 타이머를 생성하는 코드를 작성하는 부분
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    //컴포넌트 생성후에 첫 렌더링을 마친 후 호출되는 메서드
    //컴포넌트가 처음 마운트 되는 시점에서는 호출되지 않는다.
    //props를 받아서 state를 변경해야 하는 경우 유용하다.
    //이 메소드 내부에서 setState를 사용해도 추가적인 렌더링이 발생하지 않는다.
    componentWillReceiveProps(nextProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    //컴포넌트 업데이트 직전에 호출되는 메소드이다.
    //props 또는 state가 변경되었을 때, 재랜더링 여부를 return값으로 결정한다.
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    //shouldComponentUpdate가 불린 이후에 컴포넌트 업데이트 직전에서 호출되는 메서드
    //새로운 props 또는 state가 반영되기 직전 새로운 값들을 받는다.
    //이 메서드 안에서 this.setState()를 사용하면 무한 루프가 일어나게 되므로 사용하면 안된다.
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    //컴포넌트 업데이트 직후에 호출되는 메소드
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    //컴포넌트가 소멸된 시점에 (DOM에서 삭제된 후) 실행되는 메소드
    //컴포넌트 내부에서 타이머나 비동기 api를 사용하고 있을 때, 이를 제거하기에 유용
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    //컴포넌트 렌더링을 담당한다.
    render() {
        return (
            <div>
                <h1>{this.props.sentDigit}</h1>
            </div>
        );
    }
}

export default Test;
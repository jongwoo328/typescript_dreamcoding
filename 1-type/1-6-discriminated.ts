{
  // function: Login -> success or fail
  type SuccessState = {
    // 공통 property를 사용해 구분하기 쉽게 만든다.
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  // printLoginState
  // success => body
  // fail => reason
  function printLoginState2(state: LoginState) {
    // 비 추천
    // if ("response" in state) {
    //   console.log(state.response.body);
    // } else {
    //   console.log(state.reason);
    // }

    if (state.result === "fail") {
      console.log(state.reason);
    } else {
      console.log(state.response.body);
    }
  }
}

{
  /**
   * Union Types: OR
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("left");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: Login -> success or fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "success",
      },
    };
  }

  // printLoginState
  // success => body
  // fail => reason
  function printLoginState(state: LoginState) {
    // 비 추천
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }

    // 1-6 에서 계속
  }
}

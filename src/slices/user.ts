import {createSlice} from '@reduxjs/toolkit';

// state -> root reducer(state) -> user slice, order slice
// state.user
// state.order

// action: state를 바꾸는 행위
// dispatch: 그 액션을 실제로 실행하는 함수
// reducer: 액션이 실제로 실행되면 state를 바꾸는 로직

const initialState = {
  name: '',
  email: '',
  accessToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 동기 action
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: builder => {}, // 비동기 action
});

export default userSlice;
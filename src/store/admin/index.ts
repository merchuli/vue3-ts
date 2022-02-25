// 範例程式碼
// import { Module } from "vuex";
// import { SET_USER } from "./actionType";

// export type IUser = Record<"name" | "password", string>;

// export interface ILoginState {
//   user: IUser;
// }

// // Module这个类型可以传两个范型变量 第一个是当前模块state的对象接口类型 第二个是主仓库state的对象接口类型
// const LoginStore: Module<ILoginState, {}> = {
//   namespaced: true,
//   state: {
//     user: {
//       name: "",
//       password: "",
//     },
//   },
//   getters: {},
//   mutations: {
//     [SET_USER](state, payload: IUser) {
//       state.user = payload;
//     },
//   },
//   actions: {
//     [SET_USER]({ commit }, payload: IUser) {
//       commit(SET_USER, payload);
//     },
//   },
// };

// export default LoginStore;

// 作者：仓鼠大大
// 链接：https://juejin.cn/post/6972094589251354632
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

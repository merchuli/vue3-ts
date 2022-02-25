interface IStoreModuleA {
  count: number
}

const moduleA = {
  state: ():IStoreModuleA => ({
    count: 1,
  }),
  mutations: {},
  actions: {},
  getters: {
  },
};

export default moduleA;

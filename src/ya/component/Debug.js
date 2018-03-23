class Debug {
  constructor() {}
  log() {
    console.log(arguments[0]);
  }
}
export default new Debug();

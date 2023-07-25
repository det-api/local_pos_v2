export default {
  port: 9000,
  host: "localhost",
  dbUrl: "mongodb://lmo:asdffdsa@localhost:27017/local-pos?authSource=admin",
  // dbUrl:
  //   "mongodb+srv://detfuelstation:asdffdsa-4580@fms.dvyvwbs.mongodb.net/cloud_pos",

  saltWorkFactor: 10,
  secretKey: "suuhh",
  page_limit: 50,
  mqttUrl: "ws://192.168.0.100:9001",
  mqttUserName: "detpos",
  mqttPassword: "asdffdsa",
  serverUrl: "https://detfsmm.com",
  detailsaleCloudUrl: "https://detfsmm.com/api/detail-sale",
  // coustomerCloudUrl: "http://detfsmm.com:9000/api/customer",
  coustomerCloudUrl: "https://detfsmm.com/api/customer/local-create",
  debtCloudUrl: "https://detfsmm.com/api/debt/local-create",
};

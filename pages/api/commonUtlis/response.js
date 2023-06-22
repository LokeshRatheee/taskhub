export default class Response {
    static async successWithData(res, data, message, status) {
      return res
        .status(status)
        .json({ data: data, message: message, success: true });
    }
  
    static async successWithoutData(res, message, status) {
      return res.status(status).json({ message: message, success: true });
    }
  
    static async errorWithData(res, data, message, status) {
      return res
        .status(status)
        .json({ data: data, message: message, success: false });
    }
  
    static async errorWithoutData(res, message, status) {
      return res.status(status).json({ message: message, success: false });
    }
  }
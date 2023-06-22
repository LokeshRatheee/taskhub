export default async function getRequestHandler(req, res, allowedMethods) {
    if (!allowedMethods.includes(req.method) || req.method == "OPTIONS") {
      return res.status(405).json({ message: "Method not allowed." });
    }
  }
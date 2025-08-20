const express = require("express");
const { paymentRequest, getToken, paymentConfirmation, resendOTP, customerPhonePage, otpVerificationPage, getPaymentData, getBaseURL, getUrl, getRedirctUrl, exchangeKeys, saveServer, getTransactions, getTransactionsByCompany,getTransactionsByProgrammName,generateReactCode,generateFlutterCode } = require("../controllers/potato");
const limiter = require("../middlewares/limiter");
const rateLimiterMiddleware = require("../middlewares/limiter");
const router = express.Router();


router.post("/save-server" ,rateLimiterMiddleware, saveServer);
router.post("/get-token" ,rateLimiterMiddleware,getToken);
router.post("/payment-request" ,rateLimiterMiddleware,paymentRequest);
router.post("/payment-confirmation" ,rateLimiterMiddleware,paymentConfirmation);
router.post("/resend-otp" ,rateLimiterMiddleware,resendOTP);
router.post("/getRedirct-url" ,rateLimiterMiddleware,getRedirctUrl);
router.post("/get-url" ,rateLimiterMiddleware,getUrl);
router.post("/exchange-keys" ,rateLimiterMiddleware,exchangeKeys);
router.get("/customerPhone-page/:publicID",rateLimiterMiddleware, customerPhonePage);
router.get("/otpVerification-page/:publicID",rateLimiterMiddleware, otpVerificationPage);
router.post("/payment-data" ,rateLimiterMiddleware,getPaymentData);
router.get("/get-transactions" ,getTransactions);
router.get("/transactionsByProgrammName" ,getTransactionsByProgrammName);
router.get("/generateReactCode" ,generateReactCode);
router.get("/generateFlutterCode" ,generateFlutterCode);
module.exports = router;
//kkk
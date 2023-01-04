function payOnKakao() {
  console.log("kakao pay 처리중");
}
function payOnNaver() {
  console.log("naver pay 처리중");
}
function payOnCoupang() {
  console.log("coupang pay 처리중");
}
function payOnPayco() {
  console.log("payco pay 처리중");
}
function payOnApple() {
  console.log("apple pay 처리중");
}

// const paymentMap = {
//   KAKAO_PAYMENT: "카카오처리",
//   NAVER_PAYMENT: "네이버 결제 처리",
//   COUPANG_PAYMENT: "쿠팡 결제 처리",
//   PAYCO_PAYMENT: "페이코 결제 처리",
//   APPLE_PAYMENT: "애플 결제 처리",
// };

const paymentMap = {
  KAKAO_PAYMENT() {
    payOnKakao();
  },
  NAVER_PAYMENT() {
    payOnNaver();
  },
  COUPANG_PAYMENT() {
    payOnCoupang();
  },
  PAYCO_PAYMENT() {
    payOnPayco();
  },
  APPLE_PAYMENT() {
    payOnApple();
  },
};

function executePayment(paymentType) {
  return paymentMap[paymentType]();
}

executePayment("KAKAO_PAYMENT");

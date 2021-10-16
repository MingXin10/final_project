$(".input-cart-number").on("keyup change", function () {
  if ($(this).val().length > 3) {
    $(this).next().focus();
  }
  let card_number = "";
  $(".input-cart-number").each(function () {
    card_number += $(this).val() + " ";
    // if ($(this).val().length == 4) {
    //   $(this).next().focus();
    // }
    //第二欄位輸入完focus沒辦法自動跳下一個，故註解掉
  });

  $(".credit-card-box .number").html(card_number);

  if ($("#card-number-3").val().length === 4) {
    $("#card-holder").focus();
    //第四欄位輸入完，focus自動跳到姓名欄位
  }
});

$("#card-holder").on("keyup change", function () {
  $(".credit-card-box .card-holder div").html($(this).val());
  $(".nameBack").html($(this).val());
});

$("#card-expiration-month, #card-expiration-year").change(function () {
  m = $("#card-expiration-month option").index(
    $("#card-expiration-month option:selected")
  );
  m = m < 10 ? "0" + m : m;
  y = $("#card-expiration-year").val().substr(2, 2);
  $(".card-expiration-date div").html(m + "/" + y);
});

$("#card-ccv")
  .on("focus", function () {
    $(".credit-card-box").addClass("hover");
  })
  .on("blur", function () {
    $(".credit-card-box").removeClass("hover");
  })
  .on("keyup change", function () {
    $(".ccvNumber").html($(this).val());
  });

let CURRENT_TAB = "mung_tan_thu";

const TAB_LIST = {
  mung_tan_thu: "./assets/images/tab_mung_tan_thu.png",
  qua_dap_le: "./assets/images/tab_hop_qua_dap_le.png",
  qua_vu_cong_vip: "./assets/images/tab_hop_qua_vu_cong_vip.png",
};

$(document).ready(function () {
  
  //reload lại page khi xoay ngang màn hình (load lại css)
  $(window).on("orientationchange", function () {
    window.location.href = window.location.href;
  });

  function renderCurrentTab(currentTab) {
    $("#current_tab").attr("src", currentTab);
  }
  renderCurrentTab(TAB_LIST["qua_dap_le"]);

  $("#tab_mungtanthu").click(function () {
    CURRENT_TAB = "mung_tan_thu";
    renderCurrentTab(TAB_LIST["mung_tan_thu"]);
  });

  $("#tab_daple").click(function () {
    CURRENT_TAB = "qua_dap_le";
    renderCurrentTab(TAB_LIST["qua_dap_le"]);
  });

  $("#tab_vucongvip").click(function () {
    CURRENT_TAB = "qua_vu_cong_vip";
    renderCurrentTab(TAB_LIST["qua_vu_cong_vip"]);
  });

  $("#btn_receive_day1").click(function () {
    alert(`Nhận quà ${CURRENT_TAB} ngày 1`);
  });

  $("#btn_receive_day2").click(function () {
    alert(`Nhận quà ${CURRENT_TAB} ngày 2`);
  });

  $("#btn_receive_day3").click(function () {
    alert(`Nhận quà ${CURRENT_TAB} ngày 3`);
  });

  $("#menu_mobile").click(function () {
    $("#overlay_bg").toggleClass("overlay_bg");
    $("#menu_header").toggleClass("menu-header__active");
  });

  $("#overlay_bg").click(function () {
    $("#overlay_bg").removeClass("overlay_bg");
    $("#menu_header").removeClass("menu-header__active");
  });
});

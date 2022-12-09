const CURRENT_TAB = "mung_tan_thu";

const TAB_LIST = {
  mung_tan_thu: "./assets/images/tab_mung_tan_thu.png",
  qua_dap_le: "./assets/images/tab_hop_qua_dap_le.png",
  qua_vu_cong_vip: "./assets/images/tab_hop_qua_vu_cong_vip.png",
};

$(document).ready(function () {
  $("#menu_mobile").click(function () {
    $("#overlay_bg").addClass("overlay_bg");
    $("#menu_header").addClass("menu-header__active");
  });

  $("#overlay_bg").click(function () {
    $("#overlay_bg").removeClass("overlay_bg");
    $("#menu_header").removeClass("menu-header__active");
  });

  function renderTabList(currentTab) {
    $("#current_tab").attr("src", currentTab);
  }
  renderTabList(TAB_LIST["qua_vu_cong_vip"]);

  $("#tab_mungtanthu").click(function () {
    renderTabList(TAB_LIST["mung_tan_thu"]);
  });

  $("#tab_daple").click(function () {
    renderTabList(TAB_LIST["qua_dap_le"]);
  });

  $("#tab_vucongvip").click(function () {
    renderTabList(TAB_LIST["qua_vu_cong_vip"]);
  });
});

// ページがロードされたらデータを取得して表示
document.addEventListener("DOMContentLoaded", function () {
    fetch("ps_count.cgi")
      .then((response) => response.json())
      .then((data) => {
        displayCategoryCounts(data);
        set_total_count(data);
      })
      .catch((error) => console.error("Error:", error));
  });
  
  // データをHTMLに表示する関数
  function displayCategoryCounts(data) {
    var category_list = Array.from(document.getElementsByTagName("span"));
    category_list.map((category) => {
      category.outerText = "(" + data[category.dataset.category] + ")";
    });
  }
  
  // 検索件数表示する関数
  function set_total_count(data){
      const count = data["00"];
      const resultsDiv = document.getElementById('all-count');
      const link = document.createElement('a');
      link.textContent = `${count} 件のサイトが登録されています`;
      link.href = `./ps_search.cgi?act=all`;
      resultsDiv.appendChild(link);
  }
  
  // カテゴリ検索処理
  function set() {
    var formtagsObj = new Array();
  
    var oyatagObj = document.getElementById("search-category");
    var tagsObj = oyatagObj.getElementsByTagName("*");
    for (loop_tag = 0; loop_tag < tagsObj.length; loop_tag++) {
      var tagObj = tagsObj[loop_tag];
      if (tagObj.name) {
        if (tagObj.name == "cat") {
          formtagsObj.push(tagObj);
        }
      }
    }
  
    var num = 0;
    for (loop_tag = 0; loop_tag < formtagsObj.length; loop_tag++) {
      var tagObj = formtagsObj[loop_tag];
      if (tagObj.checked == true) {
        num = num + 1;
      }
    }
  
    var tag = "";
    var i = 1;
    for (loop_tag = 0; loop_tag < formtagsObj.length; loop_tag++) {
      var tagObj = formtagsObj[loop_tag];
      if (tagObj.checked == true) {
        var name = "cat" + i;
        var name = "cat";
        var value = tagObj.value;
        tag =
          tag + '<input type="text" name="' + name + '" value="' + value + '">';
        i = i + 1;
      }
    }
    document.getElementById("selected-category").innerHTML = tag;
  }
  
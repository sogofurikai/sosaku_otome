

    // 登録変更画面ラジオボタン
    function formSwitch() {
      var banner_url = document.getElementById('banner-url');
      banner_url.style.display = "none";
      var upload_banner = document.getElementById('upload-banner');

      check = document.getElementsByClassName('js-check')
      if (check[0].checked) {
          banner_url.style.display = "none";
          upload_banner.style.display = "none";

      } else if (check[1].checked) {
          banner_url.style.display = "block";
          upload_banner.style.display = "none";
          upload_banner.ariaDisabled = true

      }
       else if (check[2].checked){
          banner_url.style.display = "none";
          upload_banner.style.display = "block";
       }
      else {
          banner_url.style.display = "none";
          upload_banner.style.display = "none";
      }
  }


  // 登録処理
  document.getElementById('uploadForm').addEventListener('submit', async function(event) {
      event.preventDefault(); // フォームのデフォルトの動作をキャンセル
    
      const imageInput = document.getElementById('imageInput');
      const nameInput = document.getElementById('nameInput');
      const messageDiv = document.getElementById('message');
    
      // 画像ファイルを取得
      const imageFile = imageInput.files[0];
      if (!imageFile) {
        messageDiv.textContent = '画像を選択してください';
        return;
      }
    
      // FormDataを作成し、個人情報と画像を送信する
      const formData = new FormData();
      formData.append('name', nameInput.value);
      formData.append('image', imageFile);
    
      try {
        // 画像をアップロードし、画像URLを取得するAPIエンドポイントに送信
        const response = await fetch('your-image-upload-api-endpoint', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          const imageURL = await response.text();
          // APIに個人情報と画像URLを送信する処理を追加
          sendMessageToAPI({ name: nameInput.value, imageURL });
          messageDiv.textContent = '送信完了';
        } else {
          throw new Error('サーバーエラー');
        }
      } catch (error) {
        messageDiv.textContent = 'エラーが発生しました: ' + error.message;
      }
    });
    
    function sendMessageToAPI(data) {
      // APIにデータを送信する処理を実装
      // この関数は、実際のAPIの仕様に合わせてカスタマイズしてください
    }



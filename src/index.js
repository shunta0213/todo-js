import "./styles.css";

const onClickAdd = () => {
  // Textboxの値を取得し、値を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // Domを作っていく
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li 生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 削除
    const changeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(changeTarget);
    // 完了、削除ボタンを削除
    changeTarget.removeChild(changeTarget.lastElementChild);
    changeTarget.removeChild(changeTarget.lastElementChild);
    // 戻すボタンの追加
    changeTarget.appendChild(undoButton);
    // 完了したTODO に追加
    document.getElementById("complete-list").appendChild(changeTarget);
  });

  // button（戻す）
  const undoButton = document.createElement("button");
  undoButton.innerText = "戻す";
  undoButton.addEventListener("click", () => {
    //　削除
    const changeTarget = undoButton.parentNode;
    document.getElementById("complete-list").removeChild(changeTarget);
    changeTarget.removeChild(changeTarget.lastElementChild);
    changeTarget.appendChild(completeButton);
    changeTarget.appendChild(deleteButton);
    document.getElementById("incomplete-list").appendChild(changeTarget);
  });

  // button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // divを未完了リストから削除
    // 親tagを取得
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// add-buttonというidを目印にアクションしますよ！
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

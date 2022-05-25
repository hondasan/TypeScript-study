export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickParactice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題：設定ファイルを触る</p>
      <button onClick={onClickParactice}>練習問題4を実行</button>
    </div>
  );
};

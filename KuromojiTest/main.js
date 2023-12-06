const DICT_PATH = "./dict";
const story = "昔々、あるところにお爺さんとお婆さんが住んでいたそうな。お爺さんは山へ芝刈りに、お婆さんは川へ洗濯に向かいましたとさ。すると、川上からどんぶらこどんぶらこと大きな桃が流れてきました。";

window.onload = (event)=>{
	const ids = [];
	const names = [];

	// Kuromoji
	kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
		const tokens = tokenizer.tokenize(story);// 解析データの取得
		tokens.forEach((token)=>{// 解析結果を順番に取得する
			console.log(token);
		});
	});
}
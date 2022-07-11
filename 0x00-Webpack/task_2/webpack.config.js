
	rules: [
		{
			test: /\.css$/i,
			use: ["css-loader", "style-loader"],
		},
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [
				"file-loader",
				{
					loader: "image-webpack-loader",
					options: {
							bypassingOnDebug: true,
							disable: true,
					},
				},
			],
		},
	],
},
};

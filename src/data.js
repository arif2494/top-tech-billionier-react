const data = [
	{
		id: 1,
		name: 'Jeff Bezos',
		gender: 'Male',
		country: 'U.S.',
		netWorth: 113,
		sorceOfWealth: 'Amazon',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142'
	},
	{
		id: 2,
		name: 'Bill Gates',
		gender: 'Male',
		country: 'U.S.',
		netWorth: 98,
		sorceOfWealth: 'Microsoft',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987'
	},
	{
		id: 3,
		name: 'Larry Ellison',
		gender: 'Male',
		country: 'U.S.',
		netWorth: 59,
		sorceOfWealth: 'Oracle',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e8b62cfc095010007bffea0%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4529%26cropY1%3D652%26cropY2%3D5184'
	},
	{
		id: 4,
		name: 'Mark Zuckerberg',
		gender: 'Male',
		country: 'U.S.',
		netWorth: 54,
		sorceOfWealth: 'Facebook',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401'
	},
	{
		id: 5,
		name: 'Steve Ballmer',
		gender: 'Male',
		country: 'U.S.',
		netWorth: 52.7,
		sorceOfWealth: 'Microsoft',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F59d50c47a7ea436b47b36d66%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D553%26cropX2%3D2940%26cropY1%3D322%26cropY2%3D2708'
	},
	{
		id: 6,
		name: 'Larry Page',
		gender: 'Male',
		country: 'U.S.',
		netWorth: 50.9,
		sorceOfWealth: 'Google',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76bcaaa7ea43100043c836%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D227%26cropX2%3D2022%26cropY1%3D22%26cropY2%3D1817'
	},
	{
		id: 7,
		name: 'Sergey Brin',
		gender: 'Male',
		country: 'U.S.',
		netWorth: 49.1,
		sorceOfWealth: 'Google',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7c254bbe6f78090d831f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D475%26cropX2%3D2887%26cropY1%3D168%26cropY2%3D2582'
	},
	{
		id: 8,
		name: 'Jack Ma',
		gender: 'Male',
		country: 'China',
		netWorth: 38.8,
		sorceOfWealth: 'E-Commerce',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F605e22fe6df966b3fcbd3e15%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D1080%26cropY1%3D0%26cropY2%3D1080'
	},
	{
		id: 9,
		name: 'Ma Huateng',
		gender: 'Male',
		country: 'China',
		netWorth: 38.1,
		sorceOfWealth: 'Internet Media',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F605e23c0f0986f688fbd3e15%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D1080%26cropY1%3D0%26cropY2%3D1080'
	},
	{
		id: 10,
		name: 'Mackenzie Bezos',
		gender: 'Male',
		country: 'U.S.',
		netWorth: 36,
		sorceOfWealth: 'AMAZON',
		img:
			'https://media.newyorker.com/photos/5c4284fc9d69a04dde6b1ba8/1:1/w_2263,h_2263,c_limit/Waldman-MacKenzieBezos.jpg'
	},
	{
		id: 11,
		name: 'Michael Dell',
		gender: 'Male',
		country: 'U.S.',
		netWorth: 22.9,
		sorceOfWealth: 'Dell Computers',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5efa0fd18e7e930007731112%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1034%26cropX2%3D3701%26cropY1%3D0%26cropY2%3D2667'
	},
	{
		id: 12,
		name: 'William Lei Ding',
		gender: 'Male',
		country: 'China',
		netWorth: 17,
		sorceOfWealth: 'Online Games',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e790d54c7b02d000666fa67%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D571%26cropX2%3D4018%26cropY1%3D0%26cropY2%3D3445'
	},
	{
		id: 13,
		name: 'Colin Zheng Huang',
		gender: 'Male',
		country: 'China',
		netWorth: 16.5,
		sorceOfWealth: 'E-Commerce',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e75028b10380d0006bdc142%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D834%26cropX2%3D2330%26cropY1%3D160%26cropY2%3D1656'
	},
	{
		id: 14,
		name: 'Laurene Powell Jobs',
		gender: 'Female',
		country: 'U.S.',
		netWorth: 16.4,
		sorceOfWealth: 'Apple,Disney',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d8e17856c7c8f0009907ebd%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D217%26cropX2%3D1524%26cropY1%3D0%26cropY2%3D1308'
	},
	{
		id: 15,
		name: 'Zhang Yiming',
		gender: 'Male',
		country: 'China',
		netWorth: 16.2,
		sorceOfWealth: 'TikTok',
		img:
			'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F605e260823b925c2f1e1bb52%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D1078%26cropY1%3D2%26cropY2%3D1080'
	}
];

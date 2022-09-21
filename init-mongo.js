db.createUser({
	user: 'cdeneau',
	pwd: 'mongodb',
	roles: [
		{
			role: 'readWrite',
			db: 'qr-codes',
		},
	],
});

define([], function () {
	
	return function (company) {
		var endpoints = {
			company: "/" + company,
			users: "/" + company + '/users'
		}

		return {
			// get a user by his/her id
			getUserById: function (id) {
				return base + '/users/' + id;
			},

			// get the company roster
			getRoster: function () {
				return '/' + company
			}
		}
	};

});

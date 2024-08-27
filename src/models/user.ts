import Joi from 'joi';
import { phoneSchema, photoSchema } from '../utility';




const departmentSchema = Joi.object({
	organization: Joi.string().required().messages({
		'string.base': 'Organization must be a string',
		'string.empty': 'Organization cannot be empty',
		'any.required': 'Organization is required',
	}),
	organizationReference: Joi.string().required().messages({
		'string.base': 'Organization reference must be a string',
		'string.empty': 'Organization reference cannot be empty',
		'any.required': 'Organization reference is required',
	}),
	name: Joi.string().required().messages({
		'string.base': 'Department name must be a string',
		'string.empty': 'Department name cannot be empty',
		'any.required': 'Department name is required',
	}),
	photos: Joi.array().items(photoSchema).optional().messages({
		'array.base': 'Photos must be an array',
	}),
	supervisor: Joi.string().optional().messages({
		'string.base': 'Supervisor must be a string',
	}),
	reference: Joi.string().required().messages({
		'string.base': 'Department reference must be a string',
		'string.empty': 'Department reference cannot be empty',
		'any.required': 'Department reference is required',
	}),
	startDate: Joi.date().optional().messages({
		'date.base': 'Start date must be a valid date',
	}),
});

const permissionsSchema = Joi.object()
	.pattern(
		Joi.string(),
		Joi.array().items(Joi.string().valid('create', 'read', 'update', 'delete')).min(1).required(),
	)
	.messages({
		'array.base': 'Permissions must be an array',
		'array.min': 'Permissions array must contain at least one action',
		'any.required': 'Permissions are required',
		'string.base': 'Permission action must be a string',
		'any.only': 'Permission action must be one of [create, read, update, delete]',
	});

export const userSchema = Joi.object({
	name: Joi.object({
		first: Joi.string().required().messages({
			'string.base': 'First name must be a string',
			'string.empty': 'First name cannot be empty',
			'any.required': 'First name is required',
		}),
		last: Joi.string().required().messages({
			'string.base': 'Last name must be a string',
			'string.empty': 'Last name cannot be empty',
			'any.required': 'Last name is required',
		}),
		preferred: Joi.string().optional().messages({
			'string.base': 'Preferred name must be a string',
		}),
	})
		.required()
		.messages({
			'object.base': 'Name must be an object',
			'any.required': 'Name is required',
		}),
	email: Joi.string().email().required().messages({
		'string.base': 'Email must be a string',
		'string.empty': 'Email cannot be empty',
		'string.email': 'Email must be a valid email address',
		'any.required': 'Email is required',
	}),
	uid: Joi.string().required().messages({
		'string.base': 'UID must be a string',
		'string.empty': 'UID cannot be empty',
		'any.required': 'UID is required',
	}),
	photo: Joi.array().items(photoSchema).optional().messages({
		'array.base': 'Photos must be an array',
	}),
	phone: Joi.array().items(phoneSchema).optional().messages({
		'array.base': 'Phone numbers must be an array',
	}),
	department: departmentSchema.required().messages({
		'object.base': 'Department must be an object',
		'any.required': 'Department is required',
	}),
	google: Joi.object({
		id: Joi.string().required().messages({
			'string.base': 'Google ID must be a string',
			'string.empty': 'Google ID cannot be empty',
			'any.required': 'Google ID is required',
		}),
	})
		.optional()
		.messages({
			'object.base': 'Google information must be an object',
		}),
	startDate: Joi.date().required().messages({
		'date.base': 'Start date must be a valid date',
		'any.required': 'Start date is required',
	}),
	endDate: Joi.date().greater(Joi.ref('startDate')).optional().messages({
		'date.base': 'End date must be a valid date',
		'date.greater': 'End date must be later than the start date',
	}),
	role: Joi.object({
		name: Joi.string().required().messages({
			'string.base': 'Role name must be a string',
			'string.empty': 'Role name cannot be empty',
			'any.required': 'Role name is required',
		}),
		permissions: permissionsSchema.required().messages({
			'object.base': 'Permissions must be an object',
			'any.required': 'Permissions are required',
		}),
	})
		.required()
		.messages({
			'object.base': 'Role must be an object',
			'any.required': 'Role is required',
		}),
}).messages({
	'object.base': 'User data must be an object',
});
